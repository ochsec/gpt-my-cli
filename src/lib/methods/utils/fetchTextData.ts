export default async function fetchTextData (args: string[]): Promise<string> {
    const textResponse = await fetch(args[0]);
    const textData = await textResponse.text();
    return textData;
}
