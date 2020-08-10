import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.json({ ok: true });
});

app.listen(3333, () => {
  console.log("i'm running on 3333...");
});
