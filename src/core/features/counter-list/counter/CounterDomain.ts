export interface ICounterState {
  count: number;
}

export interface ICounterIntent {
  increment(): void;
  decrement(): void;
}
