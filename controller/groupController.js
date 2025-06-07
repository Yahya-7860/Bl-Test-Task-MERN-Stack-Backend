const groupSchema = require("../models/groupModel");
const memberSchema = require("../models/memberModel");
const { sendMail } = require("../utils/sendMails");

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
    const { memberName, email, AuthUserEmail, AuthUserName, groupName } = req.body;
    const group_id = req.params.group_id;

    try {
        if (!memberName || !email || !group_id) {
            return res.status(400).json({ message: "all fields required" });
        }
        const newMember = await memberSchema.create({ memberName, email, owe: 0, lent: 0, group_id });
        await sendMail(AuthUserEmail, AuthUserName, email, groupName)
        res.status(201).json({ message: "member added", newMember })
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: "Server error" })
    }
}

const handleGetAllMembers = async (req, res) => {
    const group_id = req.params.group_id;
    try {
        const members = await memberSchema.find({ group_id })
        if (members) {
            res.status(200).json({ message: "Fetched", members })
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error })
    }
}

const handleGetAllGroups = async (req, res) => {
    try {
        const groups = await groupSchema.find();
        res.status(200).json({ groups });
    } catch (error) {
        console.error(error)
        res.status(500).json({ error })
    }
}

const handleGetOneGroup = async (req, res) => {
    const { group_id } = req.params;
    try {
        const group = await groupSchema.findOne({ _id: group_id });
        res.status(200).json({ group });
    } catch (error) {
        console.error(error)
        res.status(500).json({ error })
    }
}

module.exports = { handleGroupCreation, handleAddMember, handleGroupCreation, handleGetAllGroups, handleGetOneGroup, handleGetAllMembers };