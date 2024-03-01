import readTomlConfig from "../../state/readKeyValueConfig.ts";

export default async function readConfig(args: string[]): Promise<void> {
    await readTomlConfig(args[0]);
}