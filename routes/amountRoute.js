const { handleAmount, handleAmountSettle } = require("../controller");

const amountRouter = require("express").Router();

amountRouter.patch('/amount/update', handleAmount);
amountRouter.patch('/amount/settle', handleAmountSettle);


module.exports = { amountRouter };