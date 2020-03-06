import { now } from "./now";

export function hello(name: string) {
    console.log(`${now()}: Hello ${name}`);
}
