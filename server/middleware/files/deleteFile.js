import PrismaClient from '@prisma/client';

const dbClient = new PrismaClient.PrismaClient();import fs from 'fs';

export const deleteFileFromDisk = async (req, res, next) => {
    const { file_id } = req.body;

    try {
        const file = await dbClient.files.findUnique({
            where: { id: file_id },
        });

        if (!file) {
            return res.status(404).json({ message: 'File not found' });
        }

        const filePath = file.filePath; 

        fs.unlink(file.filePath, error => console.log(error));
        next();
    } catch (error) {
        console.error('Chyba při odstraňování souboru:', error);
        res.status(500).json({ message: 'Error removing file' });
    }
};