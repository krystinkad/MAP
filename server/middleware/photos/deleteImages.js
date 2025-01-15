import PrismaClient from '@prisma/client';

const dbClient = new PrismaClient.PrismaClient();
import fs from 'fs';

export const deleteImageFromDisk = async (req, res, next) => {
    const { photos } = req.body;
    for (const photo of photos) {
        try {
            const deletePhoto = await dbClient.photos.findFirst({
                where: { id: photo.photoId },
            });
    
            if (!deletePhoto) {
                return res.status(404).json({ message: 'File not found' });
            }
    
            fs.unlink(deletePhoto.photo_path, error => console.log(error));
            next();
        } catch (error) {
            console.error('Chyba při odstraňování souboru:', error);
            res.status(500).json({ message: 'Error removing file' });
        }  
    }
};