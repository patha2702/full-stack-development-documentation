# Serverless
- It means developer doesn't need to worry about deploying and maintaining the servers. It will be handled by service providers.
- When to use:
  - Start off the project from ground and immediately and no tension about deployments
  - When you cannot anticipate the traffic and don't want to worry about autoscaling
  - If you have very low traffic and want to optimize costs 
- Issues:
  - Cold start problem
  - Expensive at scale
- Providers:
  - AWS Lambda functions
  - Google cloud functions
  - Cloudflare workers

## Creating a cloudflare worker project
- Initialize: npm create cloudflare -- my-app
- To run locally: npm run dev
- To deploy: npm run deploy
- Wrangler: CLI for push code to cloud and interacting with cloud.
  - login: npx wrangler login
  - check the user: npx wrangler whoami

## Writing express in workers:
- You can't write express in workers because it has a different runtime, instead use some libraries that bridge the gap like hono

## Hono: Routing engine
- Initialize: npm create hono@latest my-app
    - cd my-app
    - npm i

## Code sample (extracting body, headers and query params): 
import { Hono } from 'hono'

const app = new Hono()

app.get('/', async(c) => {
  const body = await c.req.json()
  console.log(body)
  console.log(c.req.header("Authorization"))
  console.log(c.req.query("param"))
  return c.json({
    message: "HI from Hono"
  })
})

export default app

## Code sample (middlewares)
import { Hono } from 'hono'
const app = new Hono()

app.use(async c(next) => {
  if (c.req.headers("Authorization")) {
    // Perform auth tasks
    await next()
  } else {
    return c.text("You do not have permission")
  }
})

## Connecting to DB

