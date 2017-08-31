import * as chai from "chai";
import { ICounterState } from "./CounterDomain";
import { CounterModel } from "./CounterModel";
const expect = chai.expect;

describe("Counter", () => {
  let sut: CounterModel;

  beforeEach(() => {
    sut = new CounterModel();
  });

  const lastState = (): ICounterState => {
    let value: any = null;
    sut.state$.take(1).subscribe(state => value = state);
    return value;
  };

  it("should start with count=0", () => {
    // Assert
    expect(lastState().count).to.equal(0);
  });

  it("should accumulate increments", () => {
    // Act
    sut.intent.write.increment(1);
    sut.intent.write.increment(1);
    // Assert
    expect(lastState().count).to.equal(2);
  });

  it("should accumulate decrements", () => {
    // Act
    sut.intent.write.decrement(1);
    sut.intent.write.decrement(1);
    // Assert
    expect(lastState().count).to.equal(-2);
  });
});
