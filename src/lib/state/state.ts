import { OpenAIApi } from "openai";
import HistoryType from "../types/History.d.ts"
import IChatConfig from "../types/IChatConfig.d.ts";
import readSession from "./readSession.ts";
import updateSession from './updateSession.ts';

export default class State {
    static #openai: OpenAIApi;
    static #models: Array<string> = [];
    static #history: HistoryType = [];
    static #memory = 10;
    static #config: IChatConfig;

    static getOpenAIApi(): OpenAIApi {
        return State.#openai;
    }

    static setOpenAIApi(openai: OpenAIApi): void {
        State.#openai = openai;
    }

    static getModels(): Array<string> {
        return State.#models;
    }

    static setModels(models: string[]) {
        State.#models = models;
    }

    static getSession(name: string): Promise<HistoryType | undefined> {
        return readSession(name);
    }

    static async setSession(name: string, session: HistoryType): Promise<void> {
        await updateSession(name, session);
    }

    static getHistory(): HistoryType {
        return State.#history;
    }

    static setHistory(history: HistoryType): void {
        State.#history = history;
    }

    static getMemory(): number {
        return State.#memory;
    }

    static setMemory(steps: number): void {
        State.#memory = steps;
    }

    static getConfig(): IChatConfig {
        return State.#config;
    }

    static setConfig(config: IChatConfig): void {
        State.#config = config;
    }
}