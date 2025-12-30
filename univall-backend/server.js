require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose")

const app = express();
app.use(cors());

app.use(express.json());



const clientt = new MongoClient(process.env.MONGO_URI);

async function connectDB() {
    await clientt.connect();
    console.log("MongoDB Connected");
}
connectDB();

const db = clientt.db("univall");
const collection = db.collection("submissions");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.post("/submit", async (req, res) => {
    const data = req.body;

    await collection.insertOne(data);

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "New Form Submission",
        text: JSON.stringify(data, null, 2),
    });

    res.json({ success: true });
});

app.use("/api/founding-member", require("./routes/foundingMember"));


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});