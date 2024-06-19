# Deploying frontends to AWS

1. Distribution- CDN's - POP (Point Of Presence)
2. Storage- Object Stores

- Every object store should have an associated CDN
- Optimize for distribution costs
- CDN for frontend/ assets/ objects distribution
- Edge networks for backend. Because CDN (caching) does not make sense for backend because on every request user gets user-specific details unlike in object where data delivered is static