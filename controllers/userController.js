// import express from "express";
// import mongoose from "mongoose";
import User from "../models/user.js";



const getData = async (req, res) => {
  const result = await User.find();
  res.json(result);
};

const update = async (req, res) => {
  const { userId } = req.params;
  const { username, role } = req.body;

  if (!username || !role) {
    res.status(400).json({ message: "All fields are required." });
  }
  // 4. Model UpdateByID and save update info
  // findOneAndUpdate(filter equal id, update info)
  const result = await User.findOneAndUpdate(
    { _id: userId },
    {
      $set: { username, role },
    }
  );

  // 5. Always send back the response to the client
  res.status(200).json({ message: "Updated successfully.", result });
};

const Delete = async (req, res) => {
  try {
    // 1. Need id from client to know which venue to delete
    const { id } = req.params;

    // 2. Model DeleteByID
    const result = await User.deleteOne({ _id: id });

    // 3. Always send back the response to the client
    res.json({ message: "Deleted successfully.", result });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user." });
  }
};

// ***HTTP Status Codes you should know: 200, 201, 400, 401, 404, 500***
// Research more about the meaning of each code

const Create = async (req, res) => {
  try {
    // 1. Need information from client to create new venue (can get request's body)
    // Destructuring object
    const { username, password, email, role } = req.body;

    // 2. Validation (make sure client's request has provided all the required fields)
    if (!username || !password || !email || !role) {
      res.status(400).json({ message: "All fields are required." });
    }
    const user = new User({
      username,
      password,
      email,
      role,
    });
    const result = await user.save();
    console.log(result);
    res.status(201).json({ message: "Created successfully.", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error." });
  }
};
export default {Create,Delete,update,getData};

