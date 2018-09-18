import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config';
import index from '../server/routes/index.route';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

/* Get 首頁 */
app.get('/', (req, res) => {
	res.send(`此伺服器運行在本地端的port ${config.port}，現在為${config.env}模式`);
});

app.use('/api', index);

export default app;