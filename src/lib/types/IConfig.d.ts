import ILLMConfig from "./ILLMConfig.d.ts";

interface IConfig {
    getConfig(): Promise<ILLMConfig | undefined>;
    getMemory(): number;
    getModels(): Promise<string[]>;
    setDefaultConfig(): void;
    setMaxTokens(n: number): void;
    setMemory(steps: number): void;
    setModel(model: string): void;
    setTemp(temp: number): void;
    validateModel(model: string): Promise<boolean>;
    validateTemp (temp: number): boolean;
}

export default IConfig;