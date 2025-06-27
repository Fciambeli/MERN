const create = (req, res) => {
    const {name, username, email, password, avatar, background} = req.body;

   if (!name || !username || !email || !password || !avatar || !background) {
    res.json("Submmit all field for registration")
   }

    res.json("OK")
};

module.exports = { create };


