//Local database connection setup

const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/sim-track-2-0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})



// const mongoose = require('mongoose')

// const url = 'mongodb+srv://newUser1:passWord@cluster0.hktv0gp.mongodb.net/?retryWrites=true&w=majority';

// const connectionParams={
//     useNewUrlParser: true,
//     //useCreateIndex: true,
//     useUnifiedTopology: true 
// }
// mongoose.connect(process.env.ATLAS_URL || url,connectionParams)
//     .then( () => {
//         console.log('Connected to the Atlas-remote ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. n${err}`);
//     })



