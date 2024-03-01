import readKeyValueConfig from './readKeyValueConfig.ts';
import IChatConfig from '../types/IChatConfig.d.ts';

export default async function updateKeyValueConfig(filePath: string, key: keyof IChatConfig, value: string | number): Promise<void> {
    try {
        let config = await readKeyValueConfig(filePath);
        if (!config) {
            config = {} as IChatConfig;
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
            default:
                throw new Error('Invalid key ${key}')
        }

        const updatedConfigLines = Object.entries(config).map(([key, value]) => `${key}=${value}`);
        const updatedConfig = updatedConfigLines.join('\n');
        await Deno.writeTextFile(filePath, updatedConfig);
        console.log('Key=value configuration updated successfully.');
    } catch (error) {
        console.error('Failed to update key=value configuration:', error);
    }
}
