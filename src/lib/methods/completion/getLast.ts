import State from "../../state/state.ts";
import readLLMConfig from "../../state/readLLMConfig.ts";

export default async function getLast(): Promise<string | void> {
    const config = await readLLMConfig();
    if (!config) {
        console.log('Unable to read configuration');
        return;
    }
    const session = await State.getSession(config.session)
    if (!session) {
        console.log(`Could not find data for session ${config.session}`);
        return;
    } else if (session.length === 0) {
        console.log(`Session ${config.session} has no history.`);
        return;
    } else {
        return session[session.length - 1].content;
    }
}
