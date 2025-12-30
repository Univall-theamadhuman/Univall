const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const FoundingMember = require("../models/FoundingMember");

router.post("/", upload.single("govtId"), async (req, res) => {
    try {
        const member = new FoundingMember({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            country: req.body.country,
            city: req.body.city,
            status: req.body.status,
            qualification: req.bodyuification,
            govId: req.file.filename,
            agreed: req.body.agreed
        });

        await member.save();
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false });
    }
});

module.exports = router;
