import express from 'express';

const authRouter = express.Router();

import PrismaClient from '@prisma/client';

const dbClient = new PrismaClient.PrismaClient();
import bcrypt, { compare, hash }  from 'bcrypt'; //https://www.npmjs.com/package/bcrypt
import jwt from "jsonwebtoken";

export default authRouter;

const privateKey = "jijijijihijijijeirxmciormhxširucqěnoiruqos"

authRouter.post("/login", async (req, res) => {
    const { username,password } = req.body;
    try {
        const userResult = await dbClient.users.findFirst({    //gest user by name
            where: {
                name: username
            },
            select: {
                id: true,
                name: true,
                passHash: true
            }
        });
        if (userResult == null) {   //user doesnt exist
            return res.status(404).json({ error: 'Invalid username or password' });
        }
        const passwordMatch = await bcrypt.compare(password, userResult.passHash);
        if (passwordMatch == true) {
            const token = jwt.sign({
                user: userResult.id
            }, privateKey, { expiresIn: "30d" });
            return res.json(token);
        } else {
            return res.status(404).json({ error: 'Invalid username or password' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

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