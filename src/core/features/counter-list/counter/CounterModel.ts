import { Intent , Model } from "eye-oh-see-react/dist/MVI";
import { CounterIntentKeys , ICounterIntent , ICounterState } from "./CounterDomain";

@Model<CounterModel, ICounterIntent, ICounterState>()
export class CounterModel {
  private readonly seed: ICounterState = { count: 0 };

  public intent = Intent(CounterIntentKeys);

  public state$ = this.transform$()
      .scan((state, transform) => transform(state), this.seed)
      .startWith(this.seed);

  private incrementTransform$() {
    return this.intent.read.increment.map(delta => (state: ICounterState): ICounterState => ({
      ...state,
      count: state.count + delta
    }));
  }

  private decrementTransform$() {
    return this.intent.read.decrement.map(delta => (state: ICounterState): ICounterState => ({
      ...state,
      count: state.count - delta
    }));
  }

  private transform$() {
    return this.incrementTransform$().merge(this.decrementTransform$());
  }
}
