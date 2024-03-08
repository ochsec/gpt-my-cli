import { GPTTokens, supportModelType } from 'npm:gpt-tokens';
import { MessageItem, ITokenUsageResponse } from "../../types/TokenUsage.d.ts";
import readLLMConfig from "../../state/readLLMConfig.ts";
import State from "../../state/state.ts";

export default async function tokenUsage(messages: MessageItem[]): Promise<ITokenUsageResponse | undefined> {
    const config = await readLLMConfig();
    if (config?.model) {
        const model = config.model as supportModelType;
        const usageInfo = new GPTTokens({
            model,
            messages,
        });
        return {
            prompt: usageInfo.promptUsedTokens,
            completion: usageInfo.completionUsedTokens,
            total: usageInfo.usedTokens,
        };
    } else {
        console.log('Unable to read from configuration file.');
    }
}
