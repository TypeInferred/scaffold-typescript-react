import { Disposable , InstancePerDependency } from "eye-oh-see";
import { IModel } from "eye-oh-see-react/dist/IModel";
import "eye-oh-see-react/dist/Rx";
import { Observable , Subject } from "rx";
import { ICounterIntent , ICounterState } from "./CounterDomain";

@InstancePerDependency()
@Disposable()
export class CounterModel implements IModel<ICounterIntent, ICounterState> {
  private readonly seed: ICounterState = { count: 0 };
  private readonly increment = new Subject<null>();
  private readonly decrement = new Subject<null>();

  public dispose: () => void;

  public readonly intent = {
    decrement: () => this.decrement.onNext(null),
    increment: () => this.increment.onNext(null)
  };

  public readonly state = Observable.defer(() => this.reducer())
    .scan((acc, reduce) => reduce(acc), this.seed)
    .startWith(this.seed)
    .cache(disposer => this.dispose = disposer);

  private reducer() {
    return Observable.merge(this.incrementReducer(), this.decrementReducer());
  }

  private incrementReducer() {
    return this.increment.map(() => (state: ICounterState): ICounterState => ({
      ...state,
      count: state.count + 1
    }));
  }

  private decrementReducer() {
    return this.decrement.map(() => (state: ICounterState): ICounterState => ({
      ...state,
      count: state.count - 1
    }));
  }
}
