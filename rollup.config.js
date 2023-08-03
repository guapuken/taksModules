import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
// import typescript from '@rollup/plugin-typescript';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';

//css
import postcss from 'rollup-plugin-postcss';

//optimization
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import autoprefixer from 'autoprefixer';
import postcssNormalize from 'postcss-normalize';
import image from '@rollup/plugin-image';

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
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript({
				// tsconfig: './tsconfig.json',
				useTsconfigDeclarationDir: true,
			}),
			postcss({
				plugins: [/* autoprefixer(), */ postcssNormalize()],
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
			// autoprefixer(),
			postcss({
				config: {
					path: './postcss.config.js',
				},
				plugins: [tailwindcss(tailwindConfig)],
				extensions: ['.css'],
				namedExports: true,
				sourceMap: true,
				extract: false,
				autoModules: true,
				minimize: true,
				inject: {
					insertAt: 'top',
				},
			}),
			terser(),
			//dts(),
			image(),
		],
	},
	// {
	// input: 'dist/esm/index.d.ts',
	// output: [
	// { file: 'dist/index.d.ts', format: 'esm' },
	// 		// { file: 'dist/index.d.ts', format: 'cjs' },
	// ],
	// 	// plugins: [dts()],
	// external: [/\css$/],
	// },
];
