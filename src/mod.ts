import { Configuration, OpenAIApi } from "openai";
import State from "./lib/state/state.ts";
import { readToken } from './lib/methods/utils/credentials.ts';
import router from './router.ts';

async function main() {
    const { args } = Deno;

    const token = await readToken();
    if (token) {
        // console.log("Arguments:", args);
        const configuration = new Configuration({
            apiKey: token,
        });
        const openai = new OpenAIApi(configuration);
        State.setOpenAIApi(openai);
        router(args);
    } else {
        console.log("No token found or failed to read the token.");
    }
}

main();