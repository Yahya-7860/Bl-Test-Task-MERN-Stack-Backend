const { handleGroupCreation, handleAddMember, handleGetAllGroups, handleGetOneGroup } = require('../controller');

const groupRouter = require('express').Router();

groupRouter.post("/group/create", handleGroupCreation);
groupRouter.post("/group/member", handleAddMember);
groupRouter.get("/groups", handleGetAllGroups);
groupRouter.get("/group/:group_id", handleGetOneGroup);

module.exports = { groupRouter };