import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono();

app.use(cors({
  origin: 'http://localhost:5173',
  allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests'],
  allowMethods: ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS'],
  exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
  maxAge: 600,
  credentials: true,
}));

app.get('/', (c) => c.text('Hello Hono!'));

export default app;
