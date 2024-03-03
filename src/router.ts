import Completion from "./lib/methods/completion/completion.ts";
import Config from "./lib/methods/config/config.ts";
import Util from "./lib/methods/utils/util.ts";

const commandTree = {
    ...Completion,
    utils: Util,
    config: Config,
};

export default async function router(args: string[], context: any = commandTree) {
    if (args.length === 0) {
        console.log('No command provided.');
        return;
    }

    const command = args[0];
    const nextContext = context[command];

    if (nextContext) {
        if (typeof nextContext === 'function') {
            // Execute the command if it's a function
            const result = await nextContext([...args.slice(1)]);
            if (result) console.log(result);
        } else if (typeof nextContext === 'object') {
            // If the command is an object, it means there are subcommands. Recurse.
            router(args.slice(1), nextContext);
        }
    } else {
        console.log(`${command} is not a valid command.`);
    }
}

