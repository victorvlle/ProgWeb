import express from 'express';
import dotenv from 'dotenv';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';
import path from 'path';
import bodyParser from 'body-parser';
import majorRoutes from './routes/majorRoutes';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.engine('handlebars', engine({ defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views/layouts') }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/majors', majorRoutes);

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}`);
});
