import { build, context } from 'esbuild';
import svelte from 'esbuild-svelte';
import preprocess from 'svelte-preprocess';
import rm from './env/rm.js';
import log from './env/log.js';

const DEV = process.argv.includes('--dev');

const serveOptions = {
    servedir: 'public'
};

const svelteOptions = {
    compilerOptions: { dev: DEV, runes: true, modernAst: true },
    preprocess: [
        preprocess({
            sourceMap: DEV,
            typescript: true,
        }),
    ]
};

const buildOptions = {
    bundle: true,
    minify: !DEV,
    sourcemap: DEV,
    entryPoints: ['src/app.ts'],
    outdir: 'public/build',
    format: 'esm',
    loader: { '.svg': 'text' },
    plugins: [svelte(svelteOptions), log],
    inject: DEV ? ['./env/lr.js'] : [],
    legalComments: "none",
    logLevel: 'info'
};

await rm('public/build');

if (DEV) {
    const ctx = await context(buildOptions);

    await ctx.watch();
    await ctx.serve(serveOptions);

    process.on('SIGTERM', ctx.dispose);
    process.on("exit", ctx.dispose);
} else {
    await build(buildOptions);
}
