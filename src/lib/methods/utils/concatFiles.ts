import { walk } from "https://deno.land/std@0.127.0/fs/mod.ts";
import { extname } from "https://deno.land/std@0.127.0/path/mod.ts";

export default async function concatFiles(args: string[]): Promise<string> {
  const extensions = args[1].split(",");
  let contents = "";

  for await (const entry of walk(args[0], { includeDirs: false, followSymlinks: false })) {
    if (extensions.includes(extname(entry.path))) {
      const fileContents = await Deno.readTextFile(entry.path);
      contents += fileContents;
    }
  }

  return contents;
}
