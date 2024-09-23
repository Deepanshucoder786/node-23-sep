const Student=require('../models/Student')
 async function addStudent(req,res) {
    try {
        console.log(req.body)
        let student= new Student(req.body);
        await student.save();
        res.render('studentInsert.ejs')
    } catch (err) {
        console.log(err)
    }
    
}

async function getStudents(req,res) {
    try {
        let students= await Student.find({})
        res.render('studentList.ejs',{
            students:students
        })
    } catch (err) {
        console.log(err)
    }
    
}
module.exports={
    addStudent,
    getStudents
}