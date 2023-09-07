//REF:https://www.youtube.com/watch?v=NmkY4JgS21A
//para el arranque de express
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import apiRoutes from "./routes/api.routes.js";
import dateRoutes from "./routes/date.routes.js";
import { FRONTEND_URL } from "./config.js";


const app = express();

app.use(cors({
    origin: FRONTEND_URL,
    credentials: true,
})); //cors para permitir que los dominios se comuniquen
app.use(morgan('dev'));
app.use(express.json()); // Para que express permita leer los request de formato json en js
app.use(cookieParser());

app.use("/api", apiRoutes);
app.use("/api/", dateRoutes);

if (process.env.NODE_ENV === "production") {
    const path = await import("path");
    app.use(express.static("cliente/dist"));

    app.get("*", (req, res) => {
        console.log(path.resolve("cliente", "dist", "index.html"));
        res.sendFile(path.resolve("cliente","dist", "index.html"));
    });
}

export default app;
