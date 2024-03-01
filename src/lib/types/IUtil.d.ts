import { ArticleData } from "@extractus/article-extractor";

interface IUtil {
    setWorkDir(dirPath: string): void;
    saveFile(filePath: string, data: object | string): void;
    loadFile(filePath: string): string;
    fetchTextData (url: string): Promise<string>
    articleFromHtml(html: string): Promise<ArticleData | null>;
    htmlToMarkdown(html: string): string;
    makeDoc(url: string): Promise<string | null>;
    concatFiles(filename: string, extensions: Array<string>): Promise<string>;
    readConfig(args: string[]): Promise<void>;
    updateConfig(args: string[]): Promise<void>;
}

export default IUtil;
