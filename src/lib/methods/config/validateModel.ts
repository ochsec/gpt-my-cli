import getModels from "./getModels.ts";

export default async function validateModel(model: string): Promise<boolean> {
    const models = await getModels();
    return models.includes(model);
}
