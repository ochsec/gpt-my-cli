import updateTomlConfig from "../../state/updateKeyValueConfig.ts";
import IChatConfig from "../../types/IChatConfig.d.ts";

export default async function updateConfig(args: string[]): Promise<void> {
    await updateTomlConfig(args[0], args[1] as keyof IChatConfig, args[2]);
}