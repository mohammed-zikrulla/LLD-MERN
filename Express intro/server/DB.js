const mongoose = require("mongoose");

const dbString =
  "mongodb+srv://zikrulla16:lZDLZfGOChpHmEkf@cluster0.hbqzke7.mongodb.net/myEducationPlatform?appName=Cluster0";

mongoose
  .connect(dbString)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch(() => {
    console.log("connection unsuccessful");
  });

// schema for the data to be stored in the course collection
const courseSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  creator: String,
  isReleased: Boolean,
  releaseData: { type: Date, default: Date.now() },
});

// Model = (mapping the collection and its related schema)
const CourseModel = mongoose.model("course", courseSchema);

// Function to Add the Data to its respective Model.
async function createCourse() {
  let newCourse = new CourseModel({
    name: "java",
    rating: 4.5,
    creator: "Zik",
    isReleased: true,
  });
  await newCourse.save();
  console.log("added successfully");
}

// Function to update the saved Data.
async function updateCourse(id) {
  let course = await CourseModel.findById(id);
  if (!course) {
    console.log("course not found");
    return;
  }
  course.name = "Java with SQL";
  course.rating = 5;
  course.save();
  console.log("course updated");
}

async function deleteCourse(id) {
  let course = await CourseModel.findByIdAndDelete(id);
  if (!course) {
    console.log("course not found");
    return;
  }
  console.log("Deleted successfully");
}

async function getAllCourses() {
  let courses = await CourseModel.find({});
  console.log(courses);
}

// createCourse();
// updateCourse('6939a58340982ab246707952');
// deleteCourse('6939a58340982ab246707952');
getAllCourses();
