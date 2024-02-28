import Completion from "./lib/methods/completion/completion.ts";
import Config from "./lib/methods/config/config.ts";
import Util from "./lib/methods/utils/util.ts";


export default function router(args: string[]) {
    const commands = [
        ...Object.getOwnPropertyNames(Completion),
        'utils',
        'config',
    ];

    console.log('Inside router...');

    if (commands.includes(args[0])) {
        console.log(`${args[0]} is a valid command.`)
        if (args[0] === 'utils' && args[1]) {
            const subcommands = [
                ...Object.getOwnPropertyNames(Util),
            ];
            if (subcommands.includes(args[1])) {
                console.log(`${args[1]} is a valid utils subcommand`);
            }
        }
         else if (args[0] === 'config' && args[1]) {
            const subcommands = [
                ...Object.getOwnPropertyNames(Config),
            ];
            if (subcommands.includes(args[1])) {
                console.log(`${args[1]} is a valid config subcommand`);
            }
        }
    } else {
        console.log(`${args[0]} is not a command.`)
    }
}