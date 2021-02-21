import { MyController } from "./controllers/MyController.ts";
import { MyService } from "./services/MyService.ts";
import { Auth } from "./configurations/Auth.ts";
import { UserDetailsService } from "./services/UserDetailsService.ts";

export const controllers = [
  /* References */
  MyController,
];
export const services = [
  /* References */
  MyService,
  UserDetailsService,
];
export const middleware = [
  /* References */
];
export const repositories = [
  /* References */
];
export const configurations = [
  /* References */
  Auth,
];
export const components = [
  /* References */
];
export const otherModules = [
  /* References */
];

export const imports = [
  ...controllers,
  ...services,
  ...middleware,
  ...repositories,
  ...configurations,
  ...components,
  ...otherModules,
];
