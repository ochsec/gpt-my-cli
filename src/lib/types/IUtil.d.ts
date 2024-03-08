interface IUtil {
    fetchTextData (args: string[]): Promise<string>
    htmlToMarkdown(html: string): string;
    makeDoc(args: string[]): Promise<string | null>;
    concatFiles(args: string[]): Promise<string>;
}

export default IUtil;
