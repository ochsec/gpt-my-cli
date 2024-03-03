import IChatConfig from '../types/IChatConfig.d.ts';
import getHomeDirectory from "../methods/internal/getHomeDirectory.ts";
import { join } from "https://deno.land/std/path/mod.ts";

export default async function readKeyValueConfig(): Promise<IChatConfig | undefined> {
    try {
        const homeDirectory = getHomeDirectory();
        if (!homeDirectory) {
            console.error('Failed to find home directory.');
            return;
        }
        const fileContent = await Deno.readTextFile(join(homeDirectory, '.llm', 'config'));
        const configLines = fileContent.split('\n');
        const config: IChatConfig = {
            model: 'gpt-3.5-turbo-16k',
            temperature: 0,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            max_tokens: undefined,
        };
        for (const line of configLines) {
            const [key, value] = line.split('=');
            switch (key.trim()) {
                case 'model':
                    config['model'] = value;
                    break;
                case 'temperature':
                    config['temperature'] = parseFloat(value);
                    break;
                case 'top_p':
                    config['top_p'] = parseFloat(value);
                    break;
                case 'frequency_penalty':
                    config['frequency_penalty'] = parseFloat(value);
                    break;
                case 'presence_penalty':
                    config['presence_penalty'] = parseFloat(value);
                    break;
                case 'max_tokens':
                    config['max_tokens'] = parseInt(value);
                    break;
            }

        }
        return config as IChatConfig;
    } catch (error) {
        console.error('Failed to read key=value configuration:', error);
    }
}