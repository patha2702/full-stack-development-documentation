# Middlewares

- These are like prechecks that happen before request hits the target route.
- Generally for authentication, input validation
- They can be defined as functions and passed to routes. Eg. app.get("/", middleFunc1, middleFunc2, (req, res) => {})
- By default middleware blocks the flow of execution, hence it need a push to get its flow back after all checks are done using next()
- If a middleware has to called for each route, then we can use app.use(). For eg, app.use(express.json())

# Global Catches:
- It is another middleware  which we can define at end of all routes, for catching any errors that occur on routes. That means when some exception/ error occurs, this will execute. We can send pretty ui to client, like something went wrong. When exceptions occurs.
- It accepts four instead of 3 arguments, like that it recognized that it is a error handler.
- These help you to give the end user better error messages.
Eg. app.use(function(err, req, res, next){
    res.json({
        msg: "Sorry something went wrong"
    })
})

# Zod (Input Validation): 
- Refer Documentation

# Authentication:
- Verify if the user is indeed who they claim to be.

# Questions
1. Why do we need input validation?
