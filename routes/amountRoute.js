const { handleAmount } = require("../controller");

const amountRouter = require("express").Router();

amountRouter.patch('/amount/update', handleAmount);

module.exports = { amountRouter };