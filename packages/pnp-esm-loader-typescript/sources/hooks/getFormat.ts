import {getFormat as getFormatHook} from '@yarnpkg/pnp/lib/esm-loader/hooks/getFormat';
import * as loaderUtils             from '@yarnpkg/pnp/lib/esm-loader/loaderUtils';
import {fileURLToPath}              from 'url';

import * as tsLoaderUtils           from '../loaderUtils';

export async function getFormat(
  resolved: string,
  context: object,
  defaultGetFormat: typeof getFormat,
): Promise<{ format: string }> {
  return await getFormatHook(resolved, context, async (resolved, context) => {
    const url = loaderUtils.tryParseURL(resolved);
    if (url?.protocol !== `file:`)
      return defaultGetFormat(resolved, context, defaultGetFormat);

    const filePath = fileURLToPath(url);

    const format = tsLoaderUtils.getFileFormat(filePath);
    if (format) {
      return {
        format,
      };
    }

    return defaultGetFormat(resolved, context, defaultGetFormat);
  });
}
