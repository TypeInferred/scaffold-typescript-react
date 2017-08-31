import { IntentKeys } from "eye-oh-see-react/dist/MVI";

export interface ICounterState {
  count: number;
}

export interface ICounterIntent {
  decrement: number;
  increment: number;
}

export const CounterIntentKeys: IntentKeys<ICounterIntent> = {
  decrement: "decrement",
  increment: "increment"
};
