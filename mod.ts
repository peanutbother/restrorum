import { AppBuilder } from "mandarine/appBuilder.ts"; // import-mapepd to https://deno.land/x/mandarinets@v2.3.2
import { imports } from "./lib/deps.ts";

(await new AppBuilder().buildMVC(imports)).run();
