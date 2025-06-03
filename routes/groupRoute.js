const { handleGroupCreation, handleAddMember, handleGetAllGroups } = require('../controller');

const groupRouter = require('express').Router();

groupRouter.post("/group/create", handleGroupCreation);
groupRouter.post("/group/member", handleAddMember);
groupRouter.get("/groups", handleGetAllGroups);

module.exports = { groupRouter };