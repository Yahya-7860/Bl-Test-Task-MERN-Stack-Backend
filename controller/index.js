const { handleGroupCreation, handleAddMember, handleGetAllGroups } = require("./groupController");
const { handleRegisterUser } = require("./userController");

module.exports = { handleRegisterUser, handleGroupCreation, handleAddMember, handleGetAllGroups }