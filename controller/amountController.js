const memberSchema = require("../models/memberModel");

const handleAmount = async (req, res) => {
    const { totalMember, amount, group_id, member_id } = req.body;

    if (!totalMember || !amount || !group_id || !member_id) {
        return res.status(400).json({ message: "required fields mission" });
    }

    const sharedAmount = (amount / totalMember).toFixed(2);
    const LentAmount = amount - sharedAmount;
    try {
        const memberOnTheGo = await memberSchema.findOne({ _id: member_id });
        const oldOwe = memberOnTheGo.owe;
        await memberSchema.updateMany({ group_id }, { owe: sharedAmount });
        await memberSchema.updateOne({ _id: member_id }, { owe: oldOwe, lent: LentAmount });
        res.status(200).json({ message: "members updated", oldOwe })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error", error })
    }
}

module.exports = { handleAmount };