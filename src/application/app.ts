import express from 'express';
import helmet from 'helmet';
import errorHandler from '../infra/middleware/error-handle';

const app = express();

app.use(helmet());
app.use(express.json());

app.use(errorHandler);

export default app;
