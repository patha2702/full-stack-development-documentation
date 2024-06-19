## Routing
- Single Page Application:
    - For the whole application there is only one main page and everything gets added, removed, updated on that single page.
    - It solves hard reload of the pages.
- Client side bundle:
    - Bundle of html, css, js files received from backend for whole frontend side or chunks.
- Client side routing:
    - Navigating to different pages on the client side implemented using some routing library
- Routes:
    - Refer to the mechanism by which a web application maps URLs to specific resources or functionality.
- useNavigate hook to switch from one page to another without hard reload.
- Lazy loading:
    - Without this, all of the application bundle is served at initial request, but there can be cases where user just visits main page and leaves, in that case why get whole bundle, instead we can get chunk of bundle for each page or based on features or any other parameters (incrementally serving the website rather than whole code at once)
    const Component = React.lazy(()=> import("path/to/component"))
    - Since lazy loading asynchronously fetches data, for that duration we need to show something to user, to achieve this we use Suspense from react

