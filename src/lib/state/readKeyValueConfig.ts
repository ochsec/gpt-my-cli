import IChatConfig from '../types/IChatConfig.d.ts';

export default async function readKeyValueConfig(filePath: string): Promise<IChatConfig | undefined> {
    try {
        const fileContent = await Deno.readTextFile(filePath);
        const configLines = fileContent.split('\n');
        const config: Partial<IChatConfig> = {};
        for (const line of configLines) {
            const [key, value] = line.split('=');
            if (key && value !== undefined) {
                config[key.trim() as keyof IChatConfig] = value.trim();
            }
        }
        return config as IChatConfig;
    } catch (error) {
        console.error('Failed to read key=value configuration:', error);
    }
}