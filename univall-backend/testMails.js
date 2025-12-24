import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "univallfounder@gmail.com",
        pass: "bzzvxmnahjhsramn"
    }
});

async function sendmail() {
    await transporter.sendMail({
        from: "Univall <univallfounder@gmail.com>",
        to: "theamadhuman@gmail.com",
        subject: "Final Email Test",
        html: "<h2>Email system humara kaam kar raha hai ji </h2>"
    });

    console.log("Email sent Successfully")
    
}

sendmail();