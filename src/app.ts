import fastify from 'fastify'
import { transactionRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

export const app = fastify()

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
