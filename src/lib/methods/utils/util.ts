import IUtil from "../../types/IUtil.d.ts";
import fetchTextData from "./fetchTextData.ts";
import htmlToMarkdown from "./htmlToMarkdown.ts";
import makeDoc from "./makeDoc.ts";
import concatFiles from "./concatFiles.ts";

const Util: IUtil = {
    fetchTextData,
    htmlToMarkdown,
    makeDoc,
    concatFiles,
};

export default Util;