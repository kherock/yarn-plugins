import {getSource as getSourceHook} from '@yarnpkg/pnp/lib/esm-loader/hooks/getSource';
import * as loaderUtils             from '@yarnpkg/pnp/lib/esm-loader/loaderUtils';

import * as tsLoaderUtils           from '../loaderUtils';

export async function getSource(
  urlString: string,
  context: { format: string },
  defaultGetSource: typeof getSource,
): Promise<{ source: string }> {
  const result = await getSourceHook(urlString, context, defaultGetSource);

  const url = loaderUtils.tryParseURL(urlString);
  if (url?.protocol !== `file:`)
    return defaultGetSource(urlString, context, defaultGetSource);

  return {
    source: tsLoaderUtils.transformSource(result.source, context.format),
  };
}
