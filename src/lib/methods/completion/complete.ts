import { IMessageItem } from "../../types/History.d.ts";
import State from "../../state/state.ts";
import readLLMConfig from "../../state/readLLMConfig.ts";

export default async function complete(args: string[]): Promise<string | undefined> {
    const openai = State.getOpenAIApi();
    const config = await readLLMConfig();
    if (config) {
        let message: IMessageItem;
        let messages: Array<IMessageItem> = [];

        let history = await State.getSession(config.session) || [];

        if (typeof args[0] === 'string') {
            message = { role: 'user', content: args[0] };
            messages.push(message);
            history = [...history, ...messages];
        } else {
            // Let API handle malformed message arrays in error response
            history = [...history, ...args[0]];
        }

        // Set memory
        if (history.length > config['memory']) {
            messages = history.slice(config['memory']);
        } else {
            messages = history;
        }

        const { model, temperature, top_p, frequency_penalty, presence_penalty, max_tokens } = config;

        const params = {
            model,
            temperature,
            top_p,
            frequency_penalty,
            presence_penalty,
            max_tokens,
            messages: messages,
        };

        try {
            const response = await openai.createChatCompletion(params);
            const answer = response.data?.choices[0]?.message?.content;

            history.push({
                role: 'system',
                content: answer,
            });
            await State.setSession(config.session, history);
            return answer;
        } catch (error) {
            throw new Error(error);
        }
    }
}
