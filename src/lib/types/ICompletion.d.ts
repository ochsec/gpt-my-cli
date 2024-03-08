import History from "./History.d.ts";
import { MessageItem, ITokenUsageResponse } from "./TokenUsage.d.ts";

interface ICompletion {
    help(): void;
    clearHistory(): void;
    complete(args: string[] | History): Promise<string | undefined>;
    getLast(): Promise<string | void>
    tokenUsage(messages: MessageItem[]): Promise<ITokenUsageResponse | undefined>;
    setSession(args: string[]): Promise<void>
}

export default ICompletion;
