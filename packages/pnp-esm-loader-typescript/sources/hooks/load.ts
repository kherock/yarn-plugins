import {load as loadHook} from '@yarnpkg/pnp/lib/esm-loader/hooks/load';
import * as loaderUtils   from '@yarnpkg/pnp/lib/esm-loader/loaderUtils';
import fs                 from 'fs';
import {fileURLToPath}    from 'url';

import * as tsLoaderUtils from '../loaderUtils';

export async function load(
  urlString: string,
  context: { format: string | null | undefined },
  nextLoad: typeof load,
): Promise<{ format: string, source: string, shortCircuit: boolean }> {
  return await loadHook(urlString, context, async (urlString, context) => {
    const url = loaderUtils.tryParseURL(urlString);
    if (url?.protocol !== `file:`)
      return nextLoad(urlString, context, nextLoad);

    const filePath = fileURLToPath(url);

    const format = tsLoaderUtils.getFileFormat(filePath);
    if (!format)
      return nextLoad(urlString, context, nextLoad);

    const source = await fs.promises.readFile(filePath, `utf8`);

    return {
      format,
      source: tsLoaderUtils.transformSource(source, format),
      shortCircuit: true,
    };
  });
}
