/**
 * Video slot guard. A page may carry at most one `VideoGuide` — role guides
 * render the placeholder once, right under the heading. A second slot on the
 * same page is the duplicate placeholder regression, so fail the build on it.
 *
 * Checks the source MDX rather than `dist/`: it needs no build, and the slot
 * count is a property of the content, not of the renderer.
 */
import { readdir, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const docs = join(root, 'src', 'content', 'docs');

/** @param {string} dir @returns {Promise<string[]>} */
async function mdxFiles(dir) {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) found.push(...(await mdxFiles(path)));
    else if (entry.name.endsWith('.mdx')) found.push(path);
  }
  return found;
}

const files = await mdxFiles(docs);
const duplicated = [];
let slots = 0;

for (const file of files) {
  const count = (await readFile(file, 'utf8')).match(/<VideoGuide\b/g)?.length ?? 0;
  slots += count;
  if (count > 1) duplicated.push(`${file.slice(root.length + 1)} (${count} slots)`);
}

if (duplicated.length > 0) {
  console.error(`✗ ${duplicated.length} page(s) with a duplicate video slot:`);
  for (const item of duplicated) console.error(`  ${item}`);
  process.exit(1);
}

console.log(`✓ ${files.length} pages, ${slots} video slot(s), no duplicates`);