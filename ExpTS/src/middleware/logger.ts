import fs from 'fs';
import path from 'path';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const logDirectory = process.env.LOG_DIR || './logs';

// Certifica-se de que o diretório de logs existe
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

export const logger = (format: 'simples' | 'completo') => {
    return (req: Request, res: Response, next: NextFunction) => {
        const logFilePath = path.join(logDirectory, 'access.log');

        const timestamp = new Date().toISOString();
        let logMessage = '';

        if (format === 'simples') {
            logMessage = `${timestamp} ${req.url} ${req.method}`;
        } else if (format === 'completo') {
            logMessage = `${timestamp} ${req.url} ${req.method} ${req.httpVersion} ${req.get('User-Agent')}`;
        }

        // Adiciona a mensagem de log ao arquivo de log
        fs.appendFile(logFilePath, logMessage + '\n', (err) => {
            if (err) {
                console.error('Erro ao escrever no arquivo de log:', err);
            }
        });

        next();
    };
};
