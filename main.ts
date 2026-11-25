import * as fs from "node:fs";
import * as path from "node:path";

// The Best Meal You Ever Had — one sentence about the best meal ever had.
const ENTRY =
  "The biryani at my cousin's wedding — steam, saffron, and my uncle sneaking me the last piece of chicken before anyone else sat down.";

function writeEntry(text: string): void {
  // Write the entry as UTF-8 with no trailing newline, exactly as given.
  const outDir = "/output";
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), text, { encoding: "utf8" });
}

function main(): void {
  writeEntry(ENTRY);
}

main();
