import express from 'express';
import fs from "fs";
import dotenv from "dotenv/config";
import cors from 'cors';
import bodyParser from 'body-parser';
import WebSocket, { WebSocketServer } from "ws";
import { create } from 'express-handlebars';
import { fakerFR as faker } from "@faker-js/faker";

import { initAllRoutes } from "./imports/routes.js";

const app = express();
const port = 8000;

async function initApp() {
  const handlebars = create({
    helpers: {
      isHome: (value) => (value === "home" ? "active" : ""),
    },
  });

  app.engine("handlebars", handlebars.engine);
  app.set("view engine", "handlebars");
  app.set("views", "./views");

  app.use(express.static("./public"));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  return app;
}

/* ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */

async function launchApp(app) {
  const wss = new WebSocketServer({ port: port + 1 });
  wss.on("connection", function connection(ws) {
    ws.on("error", console.error);
    ws.on("message", function message(data) {
      data = JSON.stringify(data.toString());
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.parse(data));
        }
      });
    });
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

/* ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- */

async function initMiddlewares(app)
 {
  app.use(cors())
  app.use(express.static("./public"));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
}

async function init() {
  let app = await initApp();

  await initMiddlewares(app);
  await initAllRoutes(app);
  await launchApp(app);
}
init();
