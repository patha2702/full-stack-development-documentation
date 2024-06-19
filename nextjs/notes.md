# NextJS

- Why NextJS?

  - Out of the box routing
  - SEO optimized
  - Waterfall problem

- Offerings:
  - Server side rendering: SEO
  - API routes
  - File based routing
  - Bundle size optimizations, SSG

- Client Components => Rendered on client
- Server Components => Rendered on Server (by default)

## Backend in NextJS
- Single codebase for backend and frontend, both hosted together
- Data fetching: Using async components and await while requesting for data on server side

- Loaders: When you know some components will take time for rendering, you create a loading.tsx file in the route folder you are using that component

- API routes in NextJs:
- Prisma with NextJs

- Server Actions:
  - A function with "use server" directive.
  - Export the function 
  - Call it from client component with parameters if any.