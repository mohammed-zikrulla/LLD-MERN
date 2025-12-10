const mongoose = require('mongoose');

const dbString = 'mongodb+srv://zikrulla16:lZDLZfGOChpHmEkf@cluster0.hbqzke7.mongodb.net/myEducationPlatform?appName=Cluster0';


mongoose.connect(dbString).then(()=>{
    console.log('connection successful');
})
.catch(()=>{
    console.log('connection failed');
})

const userSchema = new mongoose.Schema({
    userName: String,
    userRating: Number,
    userType: String,
    isActive: Boolean
})

const userModel = mongoose.model('user', userSchema);

async function createUser(){
    let newUser = new userModel({
        userName: 'zik',
        userRating: 4.9,
        userType: 'student',
        isActive: true
    })
    await newUser.save();
    console.log('new user saved');
}

async function updateUser(id){
    let user = await userModel.findById(id);
    if(!user){
        console.log('user not found');
        return;
    }
    user.userName = 'mahtab';
    user.userRating = 4.9;

    user.save();
    console.log('userSaved');
}

async function deleteUser(id){
        let user = await userModel.findByIdAndDelete(id);
        if(!user){
            console.log('user not found');
            return;
        }
        console.log('userDeleted');
}

async function getUsers(){
        let users = await userModel.find({});
        console.log(users);
}


// createUser();
// getUsers();
// updateUser('6939e24c67347ee70da10a50');
deleteUser('6939e24c67347ee70da10a50');
