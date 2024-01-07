import {load as loadHook}       from './hooks/load';
import {resolve as resolveHook} from './hooks/resolve';

// eslint-disable-next-line arca/import-ordering
import '@yarnpkg/pnp/lib/esm-loader/fspatch.js';

export const resolve = resolveHook;
export const load = loadHook;
