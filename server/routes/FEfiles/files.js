import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const FEfilesRouter = express.Router();

import PrismaClient from '@prisma/client';
import fs from 'fs';

const dbClient = new PrismaClient.PrismaClient();

export default FEfilesRouter;

FEfilesRouter.get("/getFiles", async (req, res) => {
    try {
        const filesArray = await dbClient.files.findMany({
        })
        res.status(200).json(filesArray)
    } catch (error) {
        res.status(404).end();
    }
})

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

FEfilesRouter.get('/downloadFile/:filePath', async (req, res) => {
    try {
      const fileName = req.params.filePath; // Název souboru
      const directoryPath = path.join(__dirname, 'files'); // Kořenová složka souborů
      const filePath = path.join(directoryPath, fileName);
  
      // Zabezpečení: Ověření, že cesta je v rámci povolené složky
      if (!filePath.startsWith(directoryPath)) {
        return res.status(403).send('Přístup odepřen.');
      }
  
      console.log('Stahuji soubor:', filePath);
  
      // Odeslání souboru klientovi
      res.download(filePath, (err) => {
        if (err) {
          console.error('Chyba při stahování souboru:', err);
          res.status(500).send('Chyba při stahování souboru.');
        }
      });
    } catch (err) {
      console.error('Neočekávaná chyba:', err);
      res.status(500).send('Chyba serveru.');
    }
  });