export const getPhotoData = async (req, res, next) => {
    try{
    const { articleId } = req.body;

    const articleData = await prisma.articles.findFirst({
        where: {
          id: articleId
        },
        include: {
          turnus: true
        }
    });

    req.photoData = { articleId: articleId, year: articleData.turnus.turnusYear, day: articleData.day }
    next()
  }
  catch(error) {
    res.status(404).send('článek neexistuje');
  }
}