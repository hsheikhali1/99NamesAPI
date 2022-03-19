import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import namesRoutes from './routes/namesRoutes.js';
import rateLimiterUsingThirdParty from './middlewares/rateLimiter.js';
import swaggerDocs from '../swagger.json';

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/', rateLimiterUsingThirdParty, namesRoutes);

export default app;
