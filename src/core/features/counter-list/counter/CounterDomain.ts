export const COUNTER_SCOPE = "Counter";

export interface ICounterState {
  count: number;
}

export interface ICounterIntent {
  increment: null;
  decrement: null;
}
