import {resolve as resolveHook} from '@yarnpkg/pnp/lib/esm-loader/hooks/resolve';

export async function resolve(
  originalSpecifier: string,
  context: { conditions: Array<string>, parentURL: string | undefined },
  defaultResolver: typeof resolve,
): Promise<{ url: string }> {
  const tsSpecifier = originalSpecifier.replace(/\.(c|m)?js$/, `.$1ts`);
  try {
    return await resolveHook(tsSpecifier, context, defaultResolver);
  } catch (err) {
    if (tsSpecifier === originalSpecifier)
      throw err;

    return await resolveHook(originalSpecifier, context, defaultResolver);
  }
}
