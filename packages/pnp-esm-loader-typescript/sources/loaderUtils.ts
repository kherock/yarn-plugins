import * as nodeUtils  from '@yarnpkg/pnp/lib/loader/nodeUtils.js';
import {createRequire} from 'module';
import path            from 'path';

const require = createRequire(import.meta.url);

export function getFileFormat(filepath: string): string | null {
  const ext = path.extname(filepath);

  switch (ext) {
    case `.mts`: {
      return `module`;
    }
    case `.cts`: {
      return `commonjs`;
    }
    case `.ts`: {
      const pkg = nodeUtils.readPackageScope(filepath);
      if (!pkg)
        return `commonjs`;
      return pkg.data.type ?? `commonjs`;
    }
    default: {
      return null;
    }
  }
}

export function transformSource(source: string, format: string): string {
  const {transformSync} = require(`esbuild`);

  const {code} = transformSync(source, {
    format: format === `module` ? `esm` : `cjs`,
    loader: `ts`,
    target: `node${process.versions.node}`,
  });

  return code;
}
