const User = require("../models/User");

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const updateService = (
    id,
    name,
    username,
    password,
    avatar,
    background
) => 
    User.findOneAndUpdate(
        {_id: id},
        { name, username, password, avatar, background }
    );

module.exports = {
        createService,
        findAllService,
        findByIdService,
        updateService,
};