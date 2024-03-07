import { join } from "https://deno.land/std/path/mod.ts";
import updateLLMConfig from "../../state/updateLLMConfig.ts"
import getHomeDirectory from "../internal/getHomeDirectory.ts";

export default async function setSession(args: string[]): Promise<void> {
    await updateLLMConfig('session', args[0]);
    const homeDirectory = getHomeDirectory();
    if (!homeDirectory) {
        console.error(`Cannot find session ${name}`);
        return;
    }
    try {
        await Deno.mkdir(join(homeDirectory, '.llm', 'sessions'), { recursive: true });
    } catch (_) {
        ;
    }
    const sessionPath = join(homeDirectory, '.llm', 'sessions', `${args[0]}.json`);
    try {
        await Deno.stat(sessionPath);
    } catch (error) {
        if (error instanceof Deno.errors.NotFound) {
            await Deno.writeTextFile(sessionPath, "[]");
        } else {
            throw error;
        }
    }
}
