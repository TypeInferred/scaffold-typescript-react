import * as chai from "chai";
import { CounterIntent } from "./CounterIntent";
import { CounterModel } from "./CounterModel";
const expect = chai.expect;

describe("Counter", () => {
  const intent = new CounterIntent();
  let sut: CounterModel;
  beforeEach(() => {
    sut = new CounterModel(intent);
  });
  afterEach(() => {
    sut.dispose();
  });

  it("should start with count=0", done => {
    // Assert
    sut.count.subscribe(count => {
      expect(count).to.equal(0);
      done();
    });
  });

  it("should accumulate increments", done => {
    // Act
    intent.increment.onNext(null);
    intent.increment.onNext(null);
    // Assert
    sut.count.subscribe(count => {
      expect(count).to.equal(2);
      done();
    });
  });

  it("should accumulate decrements", done => {
    // Act
    intent.decrement.onNext(null);
    intent.decrement.onNext(null);
    // Assert
    sut.count.subscribe(count => {
      expect(count).to.equal(-2);
      done();
    });
  });
});
