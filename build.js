import { build } from 'bun';

await build({
    entrypoints: ['./src/index.html'],
    outdir: './dist',
    target: 'browser',
    sourcemap: 'linked',
    plugins: [
        (await import('bun-plugin-tailwind')).default
    ]
});
