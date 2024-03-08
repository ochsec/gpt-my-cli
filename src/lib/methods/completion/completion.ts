import ICompletion from "../../types/ICompletion.d.ts";
import clearHistory from "./clearHistory.ts";
import complete from "./complete.ts";
import getLast from "./getLast.ts";
import tokenUsage from "./tokenUsage.ts";
import help from "./help.ts";
import setSession from "./setSession.ts";

const Completion: ICompletion = {
    help,
    clearHistory,
    complete,
    getLast,
    tokenUsage,
    setSession,
};

export default Completion;