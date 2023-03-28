const crypto = require("crypto");
const express = require('express');
const router = express.Router();
const model = require('./model');

router.get('/users', async (req, res) => {
    try {
      const users = await model.find({});
      res.status(200).json({
        message: "Users retrieved",
        success: true,
        users: users
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Error retrieving users",
        success: false
      });
    }
  });

router.post('/add', (req, res) => {
    const input = req.body;
    if(input.email && input.firstName){
        id = crypto.randomBytes(4).toString("hex");
        const data = {
            "email" : input.email,
            "firstname" : input.firstName,
            "id" : id
        }
        console.log(data);
        const product = model.create(data);
        res.status(201).json({
            message: "User added", 
            success: true
        })
    }
    else {
        res.status(500).json({
            message: "Error"
        })
    }
})

router.put('/update/:id',async (req, res) => {
    const id = req.params.id;
    const input = req.body;
    try {
        const users = await model.updateOne(
            {id: id}, 
            { $set: input }
        );
        res.status(201).json({
            message: "User updated", 
            success: true
        })
      } catch (error) {
        console.error(error);
        res.status(500).json({
          message: "Error updating user",
          success: false
        });
      }
})

router.get('/user/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const users = await model.findOne(
            {id: id}
        );
        res.status(200).json({
            success: true,
            user:users
        })
      } catch (error) {
        console.error(error);
        res.status(500).json({
          message: "Error retrieving user",
          success: false
        });
      }
})

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const users = await model.deleteOne(
            {id: id}
        );
        res.status(200).json({
            success: true,
            message:"User deleted"
        })
      } catch (error) {
        console.error(error);
        res.status(500).json({
          message: "Error retrieving user",
          success: false
        });
      }
})
module.exports = router