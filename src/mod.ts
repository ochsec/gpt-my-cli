import { readToken } from './lib/methods/utils/credentials.ts';
import router from './router.ts';

async function main() {
    const { args } = Deno;
    console.log("LLM CLI Tool");

    const token = await readToken();
    if (token) {
        console.log("Token read.");
        // console.log("Arguments:", args);
        router(args);
    } else {
        console.log("No token found or failed to read the token.");
    }
}

main();