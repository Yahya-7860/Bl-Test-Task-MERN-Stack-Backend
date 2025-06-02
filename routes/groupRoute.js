const { handleGroupCreation, handleAddMember } = require('../controller');

const groupRouter = require('express').Router();

groupRouter.post("/group/create", handleGroupCreation);
groupRouter.post("/group/member", handleAddMember);

module.exports = { groupRouter };