import { CounterModel } from "./counter/CounterModel";

export interface ICounterListState {
  counters: CounterModel[];
  total: number;
}

export interface ICounterListIntent {
  add(): void;
}
