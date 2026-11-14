import { writeFileSync } from 'node:fs';
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Books API',
      version: '1.0.0',
      description: 'A simple API for working with books'
    },
    servers: [
      {
        url: '/',
        description: 'Current server'
      }
    ],
    components: {
      schemas: {
        Book: {
          type: 'object',
          properties: {
            _id: { type: 'string', example: '6adffe71bdd6ef6e571ef4ad' },
            id: { type: 'string', example: 'b1' },
            authorId: { type: 'string', example: 'a1' },
            title: { type: 'string', example: 'Patterns of Light' },
            publicationDate: { type: 'string', format: 'date', example: '2021-08-17' }
          }
        },
        Error: {
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        }
      }
    }
  },
  apis: ['./src/router.js', './app.js']
};

const swaggerSpec = swaggerJsdoc(options);

writeFileSync('./swagger.json', JSON.stringify(swaggerSpec, null, 2));
console.log('Swagger documentation generated.');