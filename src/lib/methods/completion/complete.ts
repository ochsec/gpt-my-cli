import { IMessageItem } from "../../types/History.d.ts";
import State from "../../state/state.ts";
import readLLMConfig from "../../state/readLLMConfig.ts";
import IChatConfig from "../../types/IChatConfig.d.ts";
import HistoryType from "../../types/History.d.ts";

export default async function complete(input: string): Promise<string | undefined> {
    const openai = State.getOpenAIApi();
    const config = await readLLMConfig();
    if (config) {
        let message: IMessageItem, messages: Array<IMessageItem> = [];
        // let history = State.getHistory();
        let history = [] as HistoryType[];
    
        // if (typeof input === 'string') {
        console.log("Entered type of input === 'string'");
        message = {role: 'user', content: input};
        messages.push(message);
        history = [ ...history, messages ];
        // } else {
            // Let API handle malformed message arrays in error response
        //     history = [...history, ...input];
        // }
    
        // State.setHistory(history);
    
        // Set memory
        if (history.length > config['memory']) {
            history = history.slice(config['memory']);
        }
        // } else {
        //     messages = history;
        // }
        const params = Object.assign(config as IChatConfig, { messages: messages });
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
