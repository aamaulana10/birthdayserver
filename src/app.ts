// src/app.ts
import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import sequelize from './models';

const app = express();

app.use(bodyParser.json());
app.use('/user', userRoutes);

sequelize.sync({ force: false }).then(() => {
    console.log('Database & tables created!');
});

export default app;
