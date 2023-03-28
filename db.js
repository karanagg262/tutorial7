const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://karan:karan123@tutorial6.kbxwpc1.mongodb.net/tutorial6?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = mongoose;
