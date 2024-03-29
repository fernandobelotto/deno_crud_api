import { Application } from 'https://deno.land/x/oak/mod.ts'
import router from './routes.ts'

const app = new Application()

const PORT = 8000
const HOST = '127.0.0.1'


app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Listening on port ${PORT} ...`)
await app.listen(`${HOST}:${PORT}`)