import express from 'express';
import helmet from 'helmet';
import errorHandler from '../infra/middleware/error-handle';
import notificationRoutes from '../infra/routes/notification.routes';

const app = express();

app.use(helmet());
app.use(express.json());

app.use('/notifications', notificationRoutes);
app.use(errorHandler);

export default app;
