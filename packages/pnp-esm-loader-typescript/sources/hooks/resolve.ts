import {resolve as resolveHook} from '@yarnpkg/pnp/lib/esm-loader/hooks/resolve.js';

export async function resolve(
  originalSpecifier: string,
  context: { conditions: Array<string>, parentURL: string | undefined },
  nextResolve: typeof resolve,
): Promise<{ url: string, shortCircuit: boolean }> {
  const tsSpecifier = originalSpecifier.replace(/\.(c|m)?js$/, `.$1ts`);
  try {
    return await resolveHook(tsSpecifier, context, nextResolve);
  } catch (err) {
    if (tsSpecifier === originalSpecifier)
      throw err;

    return await resolveHook(originalSpecifier, context, nextResolve);
  }
}
