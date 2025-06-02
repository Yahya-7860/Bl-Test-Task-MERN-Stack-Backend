const groupSchema = require("../models/groupModel");
const memberSchema = require("../models/memberModel");

const handleGroupCreation = async (req, res) => {
    const { name } = req.body;

    try {
        if (!name) {
            return res.status(401).json({ message: "group name can't be empty" })
        }
        const group = await groupSchema.create({ name });
        res.status(201).json({ message: "group created", group })
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: "Server error" })
    }
}

const handleAddMember = async (req, res) => {
    const { memberName, email, groupId } = req.body;
    if (!memberName || !email || !groupId) {
        return res.status(400).json({ message: "all fields required" });
    }
    try {
        const newMember = await memberSchema.create({ memberName, email, groupId });
        res.status(201).json({ message: "member added", newMember })
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: "Server error" })
    }
}

module.exports = { handleGroupCreation, handleAddMember, handleGroupCreation };