const userService = require('../services/user.service')
const mongoose = require("mongoose");

const create = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
<<<<<<< HEAD
        res.status(401).send({ message: "Submmit all field for registration" })
=======
        res.status(401).send({ message: "Submmit all fields for registration" })
>>>>>>> 85f9ff5 (feat: added patch)
    }

    const user = await userService.createService(req.body);

    if (!user) {
        return res.status(400).send({ message: "Error creating User" });
    }


    res.status(201).send({
        message: "user created successfully",
        user: {
            id: user._id,
            name,
            username,
            email,
            avatar,
            background,
        },
    })
};

const findAll = async (req, res) => {
    const users = await userService.findAllService();

    if (users.length === 0) {
        return res.send.status(400).send({ message: "There are no registered users" });
    }

    res.send(users)
};

const findById = async (req, res) => {
    const id = req.params.id;

<<<<<<< HEAD
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).send({ message: "Invalid ID" });
}
=======
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Invalid ID" });
    }
>>>>>>> 85f9ff5 (feat: added patch)

    const user = await userService.findByIdService(id);

    if (!user) {
        return res.status(400).send({ message: "User not found" });
    }

    res.send(user);
};

module.exports = { create, findAll, findById };


