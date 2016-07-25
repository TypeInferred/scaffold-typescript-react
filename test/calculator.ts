import * as chai from 'chai';
import {Container} from 'eye-oh-see/dist/src/Index';
import {Calculator, Add} from '../src/calculator';
const expect = chai.expect;

describe('Adding', () => {
  it('should be commutative', () => {
    const container = new Container();
    container.register(Calculator);
    container.register(Add);
    const calculator = container.resolve(Calculator);
    expect(calculator.add(1, 2)).to.equal(calculator.add(2, 1));
  });
});
