import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
  const body = readBody(event)
  const config = useRuntimeConfig()
  if (body.password === config.adminDashPassword) {
    
  }
  const token = await jwt.sign({ id }, config.JWTSecret)
  return token
});