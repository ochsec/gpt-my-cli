import updateKeyValueConfig from "../../state/updateKeyValueConfig.ts";
import validateTemp from "./validateTemp.ts";

export default async function setTemp(temp: number): Promise<void> {
    if (validateTemp(temp)) {
        await updateKeyValueConfig('temperature', temp);
    } else {
        console.log(`Temperature must be between 0 and 1`);
    }
}
