import {npath, VirtualFS}               from '@yarnpkg/fslib';
import {load as loadHook}               from '@yarnpkg/pnp/lib/esm-loader/hooks/load.js';
import {WATCH_MODE_MESSAGE_USES_ARRAYS} from '@yarnpkg/pnp/lib/esm-loader/loaderFlags.js';
import * as loaderUtils                 from '@yarnpkg/pnp/lib/esm-loader/loaderUtils.js';
import fs                               from 'fs';
import {fileURLToPath, pathToFileURL}   from 'url';

import * as tsLoaderUtils               from '../loaderUtils';

export async function load(
  urlString: string,
  context: { format: string | null | undefined },
  nextLoad: typeof load,
): Promise<{ format: string, source?: string, shortCircuit: boolean }> {
  return await loadHook(urlString, context, async (urlString, context) => {
    const url = loaderUtils.tryParseURL(urlString);
    if (url?.protocol !== `file:`)
      return nextLoad(urlString, context, nextLoad);

    const filePath = fileURLToPath(url);

    const format = tsLoaderUtils.getFileFormat(filePath);
    if (!format)
      return nextLoad(urlString, context, nextLoad);

    // https://github.com/nodejs/node/pull/44366/files#diff-f6796082f599554ec3a29c47cf026cb24fc5104884f2632e472c05fe622d778bR477-R479
    if (process.env.WATCH_REPORT_DEPENDENCIES && process.send) {
    // At the time of writing Node.js reports all loaded URLs itself so
    // we technically only need to do this for virtual files but in the
    // event that ever changes we report everything.
      const pathToSend = pathToFileURL(
        npath.fromPortablePath(
          VirtualFS.resolveVirtual(npath.toPortablePath(filePath)),
        ),
      ).href;
      process.send({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'watch:import': WATCH_MODE_MESSAGE_USES_ARRAYS ? [pathToSend] : pathToSend,
      });
    }

    const source = await fs.promises.readFile(filePath, `utf8`);

    return {
      format,
      source: tsLoaderUtils.transformSource(source, format),
      shortCircuit: true,
    };
  });
}
