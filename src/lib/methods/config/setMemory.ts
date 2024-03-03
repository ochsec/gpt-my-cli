import updateLLMConfig from "../../state/updateLLMConfig.ts"

export default async function setMaxTokens(steps: number): Promise<void> {
    await updateLLMConfig('memory', steps);
}
