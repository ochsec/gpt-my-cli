import getHomeDirectory from '../methods/internal/getHomeDirectory.ts';
import HistoryType from "../types/History.d.ts";
import { join } from "https://deno.land/std/path/mod.ts";

export default async function updateSession(name: string, session: HistoryType): Promise<void> {
    try {
        const homeDirectory = getHomeDirectory();

        if (!homeDirectory) {
            console.error('Failed to find home directory.');
            return;            
        }

        await Deno.writeTextFile(join(homeDirectory, '.llm', 'sessions', `${name}.json`), JSON.stringify(session));        
    } catch (error) {
        console.error(`Failed to update session ${name}:`, error);        
    }
}
