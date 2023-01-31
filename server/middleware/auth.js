import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
  if (event.req.headers.authtoken) {

    const config = useRuntimeConfig()
    const tokenData = await jwt.verify(event.req.headers.authtoken, config.JWTSecret)

    event.context.auth = tokenData;
  }
})