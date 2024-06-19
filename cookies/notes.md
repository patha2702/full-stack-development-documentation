# Cookies

- Small pieces of data, sent by the website, stored in the user's computer by browser
  - Session management
  - Personalization
  - Tracking
  - Security
- If a cookie is attached to the client by the server, the browser by default sends the cooke for subsequent requests, unlike in local storage where you need to attach the jwt token for subsequent requests.
- Enables us to do authentication for server side rendered applications, because on first request you can't attach a token from local storage, cookies are sent from first requests itself
- Cookies can have expiry date
- Cookies can be restricted to particular domains like https, or other

- Types of Cookies:
  - Persistent
  - Session

- Properties:
  - Secure: Sentt only over secure, encrypted connections(HTTPS)
  - HttpOnly: cannot be accessed by client side scripts
  - SameSite: ensure cookies are not send on cross origin requests(client to server):
    - None: Send cookies for all sites.
    - Strict: Send cookies for same domains.
    - lax: Only GET requests and on TOP level navigations.
  - Domains: Speciying what all domains the cookie can be sent to
