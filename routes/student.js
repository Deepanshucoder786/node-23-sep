const express= require('express')
const studentcontoller=require('../controller/studentcontroller')
const router=express.Router()
router.use(express.urlencoded({extended:false}));
router.get('/', (req,res)=>{
    res.render('home.ejs')
})

router.post('/add/student', (req,res)=>{
  studentcontoller.addStudent(req,res);
})
router.get('/students',(req,res)=>{
  studentcontoller.getStudents(req,res);
})
module.exports=router