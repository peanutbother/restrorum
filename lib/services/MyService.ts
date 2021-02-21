import { Service } from "mandarine/mod.ts";

@Service()
export class MyService {
  public sayARandomName(): string {
    const names: Array<string> = ["Andres", "Maureen", "Elsa"];
    return names[Math.floor(Math.random() * names.length)];
  }
}
