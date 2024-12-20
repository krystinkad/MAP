import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
//import pkg from "pg";
//import  bcrypt, { compare, hash }  from 'bcrypt'; //https://www.npmjs.com/package/bcrypt
//import jwt from "jsonwebtoken";
//import multer from "multer";

const app = express();
app.use(cors({
    origin: [`http://localhost:5173`]
}));

app.use(bodyParser.json());
//přihlášení
app.get("/login", async(req,res)=>{
    res.status(201).send(`heh`);
})
app.all("*", (req, res) => {
    res.status(404).send("error :(");
})

app.listen(5174, () => {
    console.log(`Server na http://localhost:5174`);
})

/* app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const userResult = await client.query('SELECT * FROM "STP"."user" WHERE name = $1', [username]);
        const user = userResult.rows[0];

        if (!user) {
            return res.status(404).json({ error: 'Invalid username or password' });
        }

        if (!user.password) {       //při prvním přihlášení (není heslo)
            const hashedPassword = await bcrypt.hash(password, 10);
            await client.query('UPDATE "STP"."user" SET password = $1 WHERE name = $2', [hashedPassword, username]);
            const token = generateToken(user.id_user);
            return res.json({ message: 'Password set. Please login again.',token:token.token });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            const token = generateToken(user.id_user);
            return res.json(token);
        } else {
            return res.status(404).json({ error: 'Invalid username or password' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});
 */

/* const privateKey = "jijijijihijijijeirxmciormhxširucqěnoiruqos"
 *///const { Client } = pkg;
//připojení na Client
/* const client = new Client({ 
    host: 'hosting.ssps.cajthaml.eu',
    port: 3337,
    user: 'drevikovska_kristyna_64d3f_fxdan',
    password: 'PEoIk6OeckuqqUMzPizl3spJKXyOWMLN',
    database: 'drevikovska_kristyna_64d3f_fxdan_db',
})
client.connect();
const port = "2000"; */

/* app.use(express.static("public"))
 */
//generování tokenů
/* const generateToken = (id) => {

    const token = jwt.sign({
        user: id
    }, privateKey,{expiresIn:"30d"});

        return({
            token: token
        });
}; */
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