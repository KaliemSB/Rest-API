import express from "express";
const Message = require("../models/message");

const router = express.Router();

router.get("/", async (_request, response) => {
    try {
        const messages = await Message.find();

        response.json(messages);
    } catch (error) {
        response.json({ message: error })
    }
});

router.get("/:messageId", async (request, response) => {
    try {
        const messages = await Message.find({ _id: request.params.messageId });

        response.json(messages);
    } catch (error) {
        response.json({ message: error })
    }
});

router.post("/", async (request, response) => {
    const message = new Message({
        text: request.body.text,
        author: request.body.author,
    });

    try {
        const savedMessage = await message.save();

        response.json(savedMessage);
    } catch (error) {
        response.json({ message: error });
    };
});

router.delete("/:messageId", async (request, response) => {
    try {
        const removedMessage = await Message.findOneAndDelete({ _id: request.params.messageId })

        response.json(removedMessage)
    } catch (error) {
        response.json({ message: error })
    }
})

module.exports = router;