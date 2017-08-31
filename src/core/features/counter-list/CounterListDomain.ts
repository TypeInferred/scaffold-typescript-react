import { IntentKeys } from "eye-oh-see-react/dist/MVI";
import { CounterModel } from "./counter/CounterModel";

export interface ICounterListState {
  counters: CounterModel[];
  total: number;
}

export interface ICounterListIntent {
  add: undefined;
}

export const CounterListKeys: IntentKeys<ICounterListIntent> = {
  add: "add"
};
