import { IMessageItem } from "../../types/History.d.ts";
import State from "../../state/state.ts";
import readLLMConfig from "../../state/readLLMConfig.ts";
import IChatConfig from "../../types/IChatConfig.d.ts";
import HistoryType from "../../types/History.d.ts";

export default async function complete(args: string[]): Promise<string | undefined> {
    const openai = State.getOpenAIApi();
    const config = await readLLMConfig();
    if (config) {
        let message: IMessageItem;
        const messages: Array<IMessageItem> = [];
        // let history = State.getHistory();
        let history = [] as HistoryType[];

        if (typeof args[0] === 'string') {
            console.log("Entered type of input === 'string': ", args[0]);
            message = { role: 'user', content: args[0] };
            messages.push(message);
            history = [...history, messages];
        } else {
            // Let API handle malformed message arrays in error response
            history = [...history, ...args[0]];
        }

        // State.setHistory(history);

        // Set memory
        if (history.length > config['memory']) {
            history = history.slice(config['memory']);
        }
        // } else {
        //     messages = history;
        // }

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
        console.log(params);
        try {
            const response = await openai.createChatCompletion(params);
            const answer = response.data?.choices[0]?.message?.content;
            console.log(answer);
            history.push([{
                role: 'system',
                content: answer,
            }]);
            // State.setHistory(history);
            return answer;
        } catch (error) {
            throw new Error(error);
        }
    }
}
