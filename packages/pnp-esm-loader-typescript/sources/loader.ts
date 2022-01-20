import '@yarnpkg/pnp/lib/esm-loader/fspatch';
import {resolve as resolveHook}     from '@yarnpkg/pnp/lib/esm-loader/hooks/resolve';

import {getFormat as getFormatHook} from './hooks/getFormat';
import {getSource as getSourceHook} from './hooks/getSource';
import {load as loadHook}           from './hooks/load';

const [major, minor] = process.versions.node.split(`.`).map(value => parseInt(value, 10));

// The hooks were consolidated in https://github.com/nodejs/node/pull/37468
const hasConsolidatedHooks = major > 16 || (major === 16 && minor >= 12);

export const getFormat = hasConsolidatedHooks ? undefined : getFormatHook;
export const getSource = hasConsolidatedHooks ? undefined : getSourceHook;
export const load = hasConsolidatedHooks ? loadHook : undefined;
export const resolve = hasConsolidatedHooks ? resolveHook : undefined;
