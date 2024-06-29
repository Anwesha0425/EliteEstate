import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "https://dev-nb7onvcu6fo3l6nc.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck