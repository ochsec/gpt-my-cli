export async function readToken(): Promise<string | null> {
    const homeDir = Deno.env.get("HOME") || Deno.env.get("USERPROFILE");
    const credentialsPath = `${homeDir}/.llm/credentials`;

    try {
        const decoder = new TextDecoder('utf-8');
        const data = await Deno.readFile(credentialsPath);
        const contents = decoder.decode(data);
        return contents.trim();
    } catch (error) {
        console.error("Failed to read the token:", error.message);
        return null;
    }
}