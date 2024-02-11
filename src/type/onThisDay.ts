import {components, operations} from "./wikipedia-type";

export type OnThisDayRes = components["schemas"]["onthisdayResponse"];
export type OnThisDayItem = components["schemas"]["onthisday"];
export type OnThisDayArg = operations['onThisDay']['parameters']['path'];
