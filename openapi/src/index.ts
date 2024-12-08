import { OpenAPIHono, createRoute } from '@hono/zod-openapi';
import { swaggerUI } from '@hono/swagger-ui';
import { ParmsSchema } from './inputs';
import { UserSchema } from './output';

const getUserRoute = createRoute({
  method: "get",
  path: '/user/{id}',
  request: {
    params: ParmsSchema
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: UserSchema,
        },
      },
      description: 'Retrieve the user',
    },
  },
});

const postUserRoute = createRoute({
  method: "post",
  path: '/user/{id}',
  request: {
    params: ParmsSchema
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: UserSchema,
        },
      },
      description: 'Retrieve the user',
    },
  },
});

const app = new OpenAPIHono()

app.openapi(getUserRoute, (c) => {
  const { id } = c.req.valid('param');
  return c.json({
    id,
    age: 25,
    name: "Jon Doe"
  })
});

app.openapi(postUserRoute, (c) => {
  const { id } = c.req.valid('param');
  return c.json({
    id,
    age: 25,
    name: "Spiderman"
  })
});

app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API"
  }
})

app.get("/ui", swaggerUI({ url: "/doc" }))

export default app
