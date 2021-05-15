import express from "express";

const PORT = process.env.PORT || 4000;
const app = express();

const handleListening = () => console.log("🚀 Start");

app.listen(PORT, handleListening);
