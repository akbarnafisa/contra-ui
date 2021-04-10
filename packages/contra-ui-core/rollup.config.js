import globby from 'globby'
import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

const packageJson = require('./package.json')

const globals = {
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.peerDependencies || {}),
}

function generateComponentInput(pathList) {
  return pathList.reduce((acc, curr) => {
    const filename = curr.match(/([^\/]+)(?=\.\w+$)/)[0]
    return {
      ...acc,
      [filename]: curr,
    }
  }, {})
}

export default globby([
  'src/**/*.tsx',
  '!src/**/*.stories.tsx',
  '!src/**/__stories__/**/*.tsx',
])
  .then(path => generateComponentInput(path))
  .then(componentInput => [
    {
      input: {
        index: 'src/index.ts',
        /**
         * There is an issue in styled-components if we use multiple file modules
         * to implement tree-shaking, for now we only use single output files
         */
        // ...componentInput,
      },
      output: [
        {
          dir: 'dist/esm',
          format: 'esm',
        },
      ],
      plugins: [
        excludeDependenciesFromBundle(),
        resolve(),
        commonjs(),
        typescript({
          useTsconfigDeclarationDir: true,
        }),
        commonjs({
          exclude: ['./node_modules', '../../node_modules'],
          ignoreGlobal: true,
        }),
        terser()
      ],
      external: Object.keys(globals),
    },
    {
      input: 'src/index.ts',
      output: [
        {
          file: packageJson.main,
          format: 'cjs',
        },
      ],
      plugins: [
        excludeDependenciesFromBundle(),
        resolve(),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
        commonjs({
          exclude: ['./node_modules', '../../node_modules'],
          ignoreGlobal: true,
        }),
        terser()
      ],
      external: Object.keys(globals),
    },
  ])
