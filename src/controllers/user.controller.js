const create = (req, res) => {
    const {name, username, email, password, avatar, background} = req.body;

   if (!name || !username || !email || !password || !avatar || !background) {
    res.status(401).send({message: "Submmit all field for registration"})
   }

    res.status(201).send({
        message: "user created successfully",
        user: {
            name,
            username,
            email,
            avatar,
            background,
        },
    })
};

module.exports = { create };


