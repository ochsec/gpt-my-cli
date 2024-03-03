import updateChatConfig from "../../state/updateLLMConfig.ts";
import validateModel from "./validateModel.ts";

export default async function setModel(model: string): Promise<void> {
    if (validateModel(model)) {
        await updateChatConfig('model', model);
    } else {
        console.log(`Model '${model}' is not in OpenAI's available models list.`);
    }
}
