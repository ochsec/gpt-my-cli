import readTomlConfig from "../../state/readLLMConfig.ts";

export default async function readConfig(args: string[]): Promise<void> {
    await readTomlConfig(args[0]);
}