import { SingleInstance , ArrayOf , InstancePerDependency } from 'eye-oh-see';

export abstract class Greeting {
  public abstract say(): string;
}

@InstancePerDependency(Greeting)
export class CasualGreeting extends Greeting {
  public say() {
    return 'Hi!';
  }
}

@InstancePerDependency(Greeting)
export class FormalGreeting extends Greeting {
  public say() {
    return 'Welcome.';
  }
}

@InstancePerDependency(Greeting)
export class CowboyGreeting extends Greeting {
  public say() {
    return 'Howdy!';
  }
}

@SingleInstance()
export class Greeter {
  constructor(@ArrayOf(Greeting) private greetings: Greeting[]) {}

  public greet(): string {
    const randomGreeting = this.greetings[Math.floor(Math.random() * this.greetings.length)];
    return randomGreeting.say();
  }
}
