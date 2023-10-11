import { INCREMENT_BUTTON_CLICKED, DECREMENT_BUTTON_CLICKED } from "./actionTypes";
import { FSA } from "@/app/types";

export type IncrementAction = FSA<typeof INCREMENT_BUTTON_CLICKED, {}>;
export type DecrementAction = FSA<typeof DECREMENT_BUTTON_CLICKED, {}>;


export const incrementCounter = (): IncrementAction => ({
    type: INCREMENT_BUTTON_CLICKED,
});

export const decrementCounter = (): DecrementAction => ({
    type: DECREMENT_BUTTON_CLICKED
});