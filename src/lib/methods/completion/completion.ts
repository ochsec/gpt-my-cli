import ICompletion from "../../types/ICompletion.d.ts";
import clearHistory from "./clearHistory.ts";
import complete from "./complete.ts";
import getHistory from "./getHistory.ts";
import getLast from "./getLast.ts";
import loadHistory from "./loadHistory.ts";
import saveHistory from "./saveHistory.ts";
import tokenUsage from "./tokenUsage.ts";
import help from "./help.ts";

const Completion: ICompletion = {
    help,
    clearHistory,
    complete,
    getHistory,
    getLast,
    loadHistory,
    saveHistory,
    tokenUsage,
};

export default Completion;