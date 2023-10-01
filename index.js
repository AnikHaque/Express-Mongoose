const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'})

const app = require("./app");

const port= process.env.RUNNING_PORT || 8080




mongoose.connect(`${process.env.DATABASE_URI}`)
.then(()=>{
    console.log(`Database connection is successful ` );
    
    app.listen(port, () => {
        console.log(`Server Running on Port ${port}`)
    })
});
  


