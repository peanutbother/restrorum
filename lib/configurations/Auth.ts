import { Configuration, Mandarine, Override } from "mandarine/mod.ts";
import { UserDetailsService } from "../services/UserDetailsService.ts";

@Override(0)
@Configuration()
export class Auth extends Mandarine.Native.WebMvcConfigurer {
  public authManagerBuilder(
    provider: Mandarine.Security.Auth.AuthenticationManagerBuilder
  ) {
    provider = provider.userDetailsService(UserDetailsService);
    return provider;
  }

  public httpLoginBuilder(
    provider: Mandarine.Security.Core.Modules.LoginBuilder
  ) {
    provider
      .loginProcessingUrl("/login")
      .loginSuccessUrl("/login-success")
      .loginUsernameParameter("username")
      .loginPasswordParameter("password")
      .logoutUrl("/logout")
      .logoutSuccessUrl("/logout-success");
    return provider;
  }
}
