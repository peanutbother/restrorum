import { Mandarine, Service } from "mandarine/mod.ts";

@Service()
export class UserDetailsService
  implements Mandarine.Security.Auth.UserDetailsService {
  public users: Array<Mandarine.Types.UserDetails> = [];

  public loadUserByUsername(
    username: string
  ): Mandarine.Security.Auth.UserDetails | undefined {
    return this.users.find(
      (item: Mandarine.Types.UserDetails) => item.username === username
    );
  }
}
