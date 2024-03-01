import IUtil from "../../types/IUtil.d.ts";
import articleFromHtml from "./articleFromHtml.ts"
import fetchTextData from "./fetchTextData.ts";
import htmlToMarkdown from "./htmlToMarkdown.ts";
import loadFile from "./loadFile.ts";
import makeDoc from "./makeDoc.ts";
import saveFile from "./saveFile.ts";
import setWorkDir from "./setWorkDir.ts";
import concatFiles from "./concatFiles.ts";
import readConfig from "./readConfig.ts";
import updateConfig from "./updateConfig.ts";

const Util: IUtil = {
    articleFromHtml,
    fetchTextData,
    htmlToMarkdown,
    loadFile,
    makeDoc,
    saveFile,
    setWorkDir,
    concatFiles,
    readConfig,
    updateConfig,
};

export default Util;