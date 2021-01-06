import { Command } from 'fbi';
import Factory from '..';
export default class CommandMakeTypes extends Command {
    factory: Factory;
    id: string;
    alias: string;
    description: string;
    args: string;
    flags: never[];
    constructor(factory: Factory);
    run(flags: any, unknown: any): Promise<void>;
    protected create(): void;
}
