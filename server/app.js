import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

//routes
import authRouter from './routes/auth/auth.js'
import articlesRouter from './routes/articles/articles.js'
import newsRouter from './routes/news/news.js'
import settingsRouter from './routes/settings/settings.js'
import photosRouter from './routes/uploadPhotos/uploadPhotos.js'
import filesRouter from './routes/uploadFiles/uploadFiles.js'
import FEfilesRouter from './routes/FEfiles/files.js'
import configRouter from "./routes/config/config.js";
import messagesRouter from "./routes/messages/messages.js";

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(express.static("public"))

app.use('/auth', authRouter)
app.use('/articles', articlesRouter)
app.use('/news', newsRouter)
app.use('/settings', settingsRouter)
app.use('/photos', photosRouter)
app.use('/files', filesRouter)
app.use('/FEfiles', FEfilesRouter)
app.use('/config', configRouter)
app.use('/messages', messagesRouter)


app.use("/uploads", express.static("./uploads"));

app.all("*", (req, res) => {
    res.status(404).send("error :((");
})

app.listen(5174, () => {
    console.log(`Server na portu 5174`);
}) 