import { Disposable , InstancePerScope } from "eye-oh-see";
import { Model } from "eye-oh-see-react/dist/Reactive";
import { Observable , SerialDisposable } from "rx";
import { COUNTER_SCOPE , ICounterState } from "./CounterDomain";
import { CounterIntent } from "./CounterIntent";

@InstancePerScope(COUNTER_SCOPE)
@Disposable()
export class CounterModel implements Model<ICounterState> {

  public readonly count = Observable.defer(() => {
    const incrementCount = this.intents.increment.map(() => (x: number) => x + 1);
    const decrementCount = this.intents.decrement.map(() => (x: number) => x - 1);
    return Observable.merge(incrementCount, decrementCount)
                     .scan((acc, f) => f(acc), 0)
                     .startWith(0);
  }).replay(undefined, 1);

  private subscription = new SerialDisposable();

  constructor(private intents: CounterIntent) {
    this.subscription.setDisposable(this.count.connect());
  }

  public dispose() {
    this.subscription.dispose();
  }
}
