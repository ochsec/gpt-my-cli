import getHomeDirectory from "../methods/internal/getHomeDirectory.ts";
import { join } from "https://deno.land/std/path/mod.ts";
import HistoryType from "../types/History.d.ts";

export default async function readSession(name: string): Promise<HistoryType | undefined> {
    try {
        const homeDirectory = getHomeDirectory();
        if (!homeDirectory) {
            console.error('Failed to find home directory.');
            return;
        }
        const sessionContent = await Deno.readTextFile(join(homeDirectory, '.llm', 'sessions', `${name}.json`));
        return JSON.parse(sessionContent) as HistoryType;
    } catch (error) {
        console.error(`Failed to read session ${name}: `, error);
    }    
}