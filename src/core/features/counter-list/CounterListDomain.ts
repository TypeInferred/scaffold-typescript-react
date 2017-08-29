import { CounterComponent } from "./counter/CounterComponent";

export const COUNTER_LIST_SCOPE = "CounterList";

export interface ICounterListState {
  counters: CounterComponent[];
  total: number;
}

export interface ICounterListIntent {
  add: null;
}
