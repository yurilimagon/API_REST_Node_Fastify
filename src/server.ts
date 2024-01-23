import fastify from 'fastify'
import { env } from '../env'
import { transactionRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

const app = fastify()

app.register(cookie)
app.addHook('preHandler', async (request, reply) => {
  console.log(`[${request.method}] ${request.url}`)
})
app.register(transactionRoutes, {
  prefix: 'transactions',
})

app.get('/hello', () => {
  return 'Hello World'
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log(`HTTP Server Running on Port:${env.PORT}`)
  })
