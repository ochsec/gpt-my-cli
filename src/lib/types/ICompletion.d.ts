import History, { IMessageItem } from "./History.d.ts";
import { MessageItem, ITokenUsageResponse } from "./TokenUsage.d.ts";

interface ICompletion {
    help(): void;
    clearHistory(): void;
    complete(args: string[] | History): Promise<string | undefined>;
    getHistory(): History;
    getLast(): IMessageItem
    loadHistory(filePath: string): void;
    saveHistory(filePath: string): void;
    tokenUsage(messages: MessageItem[]): ITokenUsageResponse;
    setSession(args: string[]): Promise<void>
}

export default ICompletion;
