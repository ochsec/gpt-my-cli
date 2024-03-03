import updateChatConfig from "../../state/updateLLMConfig.ts";

export default async function setMaxTokens(n: number): Promise<void> {
    await updateChatConfig('max_tokens', n);
}
