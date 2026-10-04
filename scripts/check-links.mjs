/**
 * Internal link and asset check for the built site. Walks `dist/`, collects
 * every root-relative `href`/`src`, and asserts the target exists.
 *
 * No dependency on purpose: this is a static docs site, and a crawler package
 * would weigh more than the check itself. Fails the build on any dead internal
 * link, which is what CI needs.
 */
import { readdir, readFile } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

/** @param {string} dir @returns {Promise<string[]>} */
async function htmlFiles(dir) {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) found.push(...(await htmlFiles(path)));
    else if (entry.name.endsWith('.html')) found.push(path);
  }
  return found;
}

/** Accepts a page route (`/a/b/`), a file (`/_astro/x.css`), and strips hash/query. */
function resolves(target) {
  const path = join(dist, target.split('#')[0].split('?')[0]);
  if (!existsSync(path)) return false;
  // A directory only counts if it actually holds a page.
  return !statSync(path).isDirectory() || existsSync(join(path, 'index.html'));
}

const files = await htmlFiles(dist);
const broken = [];
const seen = new Set();

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const page = relative(dist, file);
  const refs = [
    ...[...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]),
    ...[...html.matchAll(/src="([^"]+)"/g)].map((m) => m[1]),
  ];
  for (const ref of refs) {
    if (!ref.startsWith('/') || ref.startsWith('//')) continue;
    const key = `${page}|${ref}`;
    if (seen.has(key)) continue;
    seen.add(key);
    if (!resolves(ref)) broken.push(`${page} → ${ref}`);
  }
}

if (broken.length > 0) {
  console.error(`✗ ${broken.length} dead internal reference(s):`);
  for (const item of broken.slice(0, 60)) console.error(`  ${item}`);
  if (broken.length > 60) console.error(`  …and ${broken.length - 60} more`);
  process.exit(1);
}

console.log(`✓ ${files.length} pages, ${seen.size} unique internal references, 0 dead`);