const Student = require('../models/student');

const getAllStudents = async(req,res)=>{
    const students =await Student.find();
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                students
            }
        })
    }
    catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
}

const createStudent= async(req,res)=>{
    const {name,rollNo,standard} = req.body;
    const student = new Student({name,rollNo,standard});

    

    try{
        await student.save()
        res.status(201).json({
            status: 'Success',
            data : {
                student
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }

}

    
    const deleteStudent = async(req,res)=>{ 
        const result=await Student.findByIdAndDelete(req.params.id);
        
        try{
            res.status(204).json({
                status : 'Success',
                data : {result}
            })
          }catch(err){
              res.status(500).json({
                  status: 'Failed',
                  message : err
              })
          }
    }


module.exports={
    getAllStudents,
    createStudent,
    deleteStudent
}