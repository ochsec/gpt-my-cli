import IChatConfig from "../../types/IChatConfig.d.ts";
import readChatConfig from "../../state/readLLMConfig.ts";

export default async function getConfig(): Promise<IChatConfig | undefined> {
    const config = await readChatConfig();
    return config;
}
