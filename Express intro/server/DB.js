const mongoose = require('mongoose');

const dbString = 'mongodb+srv://zikrulla16:lZDLZfGOChpHmEkf@cluster0.hbqzke7.mongodb.net/myEducationPlatform?appName=Cluster0';

mongoose.connect(dbString).then(()=>{
    console.log('Connection Successful');
}).catch(()=>{
    console.log('connection unsuccessful')
})

// schema for the data to be stored in the course collection
    const courseSchema = new mongoose.Schema({
        name: String,
        rating: Number,
        creator: String,
        isReleased: Boolean,
        releaseData: {type: Date, default: Date.now()}
    });

    const CourseModel = mongoose.model('course', courseSchema);

    async function createCourse(){
        let newCourse = new CourseModel({
            name: "java",
            rating: 4.5,
            creator: 'Zik',
            isReleased: true
        });
        await newCourse.save();
        console.log("added successfully")
    }

    createCourse();
