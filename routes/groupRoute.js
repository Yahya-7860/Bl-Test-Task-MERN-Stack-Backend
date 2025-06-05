const { handleGroupCreation, handleAddMember, handleGetAllGroups, handleGetOneGroup, handleGetAllMembers } = require('../controller');

const groupRouter = require('express').Router();

groupRouter.post("/group/create", handleGroupCreation);
groupRouter.post("/group/member/:group_id", handleAddMember);
groupRouter.get("/group/members/:group_id", handleGetAllMembers);
groupRouter.get("/groups", handleGetAllGroups);
groupRouter.get("/group/:group_id", handleGetOneGroup);

module.exports = { groupRouter };