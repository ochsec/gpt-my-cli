export default interface ILLMConfig {
    model: string;
    temperature: number;
    top_p: number;
    max_tokens?: number;
    frequency_penalty: number;
    presence_penalty: number;
    memory: number;
    session: string;
}
