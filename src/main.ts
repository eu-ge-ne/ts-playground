import { hello } from "./hello";

const tick = () => {
    hello("world");
    setTimeout(tick, 10_000);
};

tick();
