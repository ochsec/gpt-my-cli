import ILLMConfig from "../../types/ILLMConfig.d.ts";
import readLLMConfig from "../../state/readLLMConfig.ts";

export default async function getConfig(): Promise<ILLMConfig | undefined> {
    const config = await readLLMConfig();
    return config;
}
