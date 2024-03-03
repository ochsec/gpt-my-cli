import readKeyValueConfig from "../../state/readKeyValueConfig.ts";

export default async function readConfig(): Promise<void> {
    await readKeyValueConfig();
}
