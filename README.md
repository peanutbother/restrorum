To run this project:

- rename `.env.sample`
 to `.env`

```
[unix] $> mv .env.sample .env 
 - OR - 
[win] $> move .env.sample .env 
```

- run deno

```
$> deno run -c tsconfig.json --import-map=./lib/resources/import-map.json --allow-all --unstable mod.ts
```
