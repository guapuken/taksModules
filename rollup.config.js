import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

//css
import postcss from 'rollup-plugin-postcss';

//optimization
import terser from '@rollup/plugin-terser';
import PeerDepsExternal from 'rollup-plugin-peer-deps-external';
import autoprefixer from 'autoprefixer';

const packageJson = require('./package.json');
// const packageJson = "./package.json";

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			PeerDepsExternal(),
			postcss({
				plugins: [autoprefixer(), postcssNormalize()],
				// exclude: "src/styles/*/.scss",
				namedExports: true,
				sourceMap: true,
				extract: false,
				// modules: true,
				autoModules: true,
				minimize: true,
				extensions: ['.scss'],
				use: ['sass'], // Si funciona ambos css y scss
				// parser: "postcss-scss",
			}),
			resolve(),
			commonjs(),
			typescript({ tsconfig: './tsconfig.json' }),
			terser(),
		],
	},
	{
		input: 'dist/esm/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
		external: [/\css$/],
		// external:[/\css$/]
	},
];
