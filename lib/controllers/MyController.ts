import {
  AuthPrincipal,
  Controller,
  GET,
  Session,
  Inject,
  Mandarine,
} from "mandarine/mod.ts";
import { MyService } from "../services/MyService.ts";

type RequestSession = {
  times: number | undefined;
};

@Controller()
export class MyController {
  @Inject()
  private readonly myService!: MyService;

  @GET("/hello-world")
  public helloWorld(@Session() session: any) {
    console.log(session); // undefined
    // if (session.times == undefined) session.times = 0;
    // session.times++;

    // return `Hello World number #${session.times} (Yes, there are multiple universes)`;
  }

  @GET("/say-hi")
  public sayHi() {
    return `Hello <b>${this.myService.sayARandomName()}</b> from a randomly method.`;
  }

  @GET("/login-success")
  public loginHandler(@AuthPrincipal() user: Mandarine.Types.UserDetails) {
    return user;
  }
}
