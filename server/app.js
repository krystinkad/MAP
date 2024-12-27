import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

//routes
import authRouter from './routes/auth/auth.js'

//import pkg from "pg";
//import  bcrypt, { compare, hash }  from 'bcrypt'; //https://www.npmjs.com/package/bcrypt
//import jwt from "jsonwebtoken";
//import multer from "multer";


const app = express();
app.use(cors({
    origin: "*",
}));

app.use(bodyParser.json());
app.use(express.static("public"))

app.use('/auth', authRouter)

app.all("*", (req, res) => {
    res.status(404).send("error :(");
})

app.listen(5174, () => {
    console.log(`Server na http://localhost:5174`);
})

//ověření přihlášení
/* const isAuthenticated = (req, res, next) => {
    const token = req.headers.token

    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    jwt.verify(token, privateKey, (err, authorized) => {
        if (err) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        req.authentication = authorized.user;
        next();
    });
}; */
/* app.post("/auth", isAuthenticated, async(req, res) =>{
    res.sendStatus(200)
}); */
/* app.get("/notes", isAuthenticated, async(req, res)=> {
    const result = await client.query('SELECT * FROM "STP"."notes";');
    //console.log(result.rows)
    res.send(result.rows);
}) 
 */
/* app.get("/songs", isAuthenticated, async(req, res)=> {
    const result = await client.query('SELECT * FROM "STP"."music";');
    //console.log(result.rows)
    res.send(result.rows);
})  */
/* app.get("/groups", isAuthenticated, async(req, res)=> {
    const result = await client.query('SELECT * FROM "STP"."groups";');
   //console.log(result.rows)
    res.send(result.rows);
})  */
/* app.get("/publicActions", async(req, res)=> {
    const result = await client.query('SELECT * FROM "STP"."actions" WHERE public = true;');
    //console.log(result.rows)
    res.send(result.rows);
})  */
/* app.post("/newNote", async (req, res) => {
    const { content } = req.body;
    try {
        await client.query('INSERT INTO "STP"."notes" (content) VALUES ($1::text)',[content]);
    res.sendStatus(200);
    } catch (error) {
        console.error('Error adding data:', error);
        res.sendStatus(500);
    }
}); */
/* const storage = multer.diskStorage({ 
    dest: 'public/uploads/music/',
    filename: `nn` });

const upload = multer({
    storage:storage,
    limits:{fileSize: 10 * 1024 * 1024}
}).single('file');
 */
/* app.post("/newSong", upload, async (req, res) => {
    //console.log("wdklw")
    const { name, songName, group, formace } = JSON.parse(req.body.data);
    console.log(name, songName, group, formace);

    try {
        await client.query(
            'INSERT INTO "STP"."music" ("name", "songName", "groupName", "formace") VALUES ($1::text, $2::text, $3::text, $4::text)',
            [name, songName, group, formace]
        );

        res.sendStatus(200);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
 */
/* app.use((req, res, next) => {
    if (req.path === '/login' || req.path !== '/admin') {
        return isAuthenticated(req, res, next);
    }
    next();
});
 */
/* app.use((err, req, res, next) => {                  //https://chatgpt.com/share/3b7a8cc1-6926-475e-8582-ba5d3d1416f3
    res.status(err.status || 500);
    res.json({
      message: err.message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
  }); */
/* app.use(bodyParser.urlencoded({ 
    extended: true
})); */