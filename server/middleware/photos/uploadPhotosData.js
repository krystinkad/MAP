import multer from 'multer';
import path from 'path';
import PrismaClient from '@prisma/client';

const prisma = new PrismaClient.PrismaClient();import fs from 'fs';

export const getPhotoData = async (req, res, next) => {
    try{
      const articleId = Number(req.body.articleId);
      if (isNaN(articleId))
        return res.status(400).send('id není validní');

    const articleData = await prisma.articles.findFirst({
        where: {
          id: articleId
        },
        include: {
          turnus: true
        }
    });
    if (!articleData)
      return res.status(404).send('článek neexistuje');

    req.photoData = { articleId: articleId, year: articleData.turnus.turnusYear, day: articleData.day }
    next()
  }
  catch(error) {
    console.log(error)
    res.status(500).send('chyba serveru');
  }
}