import readChatConfig from './readLLMConfig.ts';
import getHomeDirectory from '../methods/internal/getHomeDirectory.ts';
import ILLMConfig from "../types/ILLMConfig.d.ts";
import { join } from "https://deno.land/std/path/mod.ts";

export default async function updateChatConfig(key: keyof ILLMConfig, value: string | number): Promise<void> {
    try {
        let config = await readChatConfig();

        if (!config) {
            config = {} as ILLMConfig;
        }

        const homeDirectory = getHomeDirectory();

        if (!homeDirectory) {
            console.error('Failed to find home directory.');
            return;            
        }

        switch (key) {
            case 'model':
                config[key] = value as string;
                break;
            case 'temperature':
                config[key] = value as number;
                break;
            case 'top_p':
                config[key] = value as number;
                break;
            case 'max_tokens':
                config[key] = value as number;
                break;
            case 'frequency_penalty':
                config[key] = value as number;
                break;
            case 'presence_penalty':
                config[key] = value as number;
                break;      
            case 'memory':
                config[key] = value as number;
                break;  
            default:
                throw new Error(`Invalid key ${key}`)
        }

        const updatedConfigLines = Object.entries(config).map(([key, value]) => `${key}=${value}`);
        const updatedConfig = updatedConfigLines.join('\n');
        await Deno.writeTextFile(join(homeDirectory, '.llm', 'config'), updatedConfig);
        console.log('Key=value configuration updated successfully.');
    } catch (error) {
        console.error('Failed to update key=value configuration:', error);
    }
}
