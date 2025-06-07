const { handleAmount } = require("./amountController");
const { handleGroupCreation, handleAddMember, handleGetAllGroups, handleGetOneGroup, handleGetAllMembers } = require("./groupController");
const { handleRegisterUser } = require("./userController");

module.exports = { handleRegisterUser, handleGroupCreation, handleAddMember, handleGetAllGroups, handleGetOneGroup, handleGetAllMembers, handleAmount }