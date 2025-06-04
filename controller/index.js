const { handleGroupCreation, handleAddMember, handleGetAllGroups, handleGetOneGroup } = require("./groupController");
const { handleRegisterUser } = require("./userController");

module.exports = { handleRegisterUser, handleGroupCreation, handleAddMember, handleGetAllGroups, handleGetOneGroup }