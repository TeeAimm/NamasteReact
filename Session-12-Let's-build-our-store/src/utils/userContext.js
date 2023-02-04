import { createContext } from "react";

const userContext = createContext({
    user: {
        name: 'dummy',
        location: 'Earth'
    }
})

//^ Setting display Name is helpful for debugging and finding the exact context.provider in Dev Tools
userContext.displayName = "UserContext"

export default userContext