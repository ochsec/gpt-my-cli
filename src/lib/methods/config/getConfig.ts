import ILLMConfig from "../../types/ILLMConfig.d.ts";
import readChatConfig from "../../state/readLLMConfig.ts";

export default async function getConfig(): Promise<ILLMConfig | undefined> {
    const config = await readChatConfig();
    return config;
}
