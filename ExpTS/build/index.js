import express from 'express';
import dotenv from 'dotenv';
import { logger } from './middleware/logger.js';
import mainRoutes from './routes/mainRoutes.js';
import productRoutes from './routes/productRoutes.js';
import majorRoutes from './routes/majorRoutes.js';
import { engine } from 'express-handlebars';
import { registerHelpers } from './helpers/handlebarsHelpers.js';
import { fileURLToPath } from 'url';
import path from 'path';
import bodyParser from 'body-parser';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development' });
const app = express();
let PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
registerHelpers();
app.engine('handlebars', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, './views/layouts')
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('completo'));
app.use(mainRoutes);
app.use(productRoutes);
app.use(majorRoutes);
const server = app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}`);
});
function isErrnoException(error) {
    return error.code !== undefined;
}
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Porta ${PORT} já está em uso, tentando outra porta...`);
        PORT = 4004;
        server.listen(PORT, () => {
            console.log(`Express app iniciada na porta 4004`);
        });
    }
    else {
        throw err;
    }
});
