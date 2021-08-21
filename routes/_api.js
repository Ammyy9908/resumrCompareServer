const router = require('express').Router();
const Resume = require('../models/Resume');

router.post('/new',async (req,res)=>{
    const {first_name,last_name,job_description,about,email,phone,github,linkedin,address,tech_skills,interests,education} = req.body;

    new Resume({
        first_name,
        last_name,
        job_description,
        about,
        email,
        phone,
        github,
        linkedin,
        address,
        tech_skills,
        interests,
        education
    }).save().then((newRecord)=>{
        return res.status(200).send({message:"Your Resume Created",resume:newRecord});
    }).catch((e)=>{
        res.status(500).send({message:e.message});
    })





})
.put('/edit/:id',async (req,res)=>{
    const {id} = req.params;
    const {first_name,last_name,job_description,about,email,phone,github,linkedin,address,tech_skills,interests,education} = req.body;

    Resume.findOneAndUpdate({_id:id},{
        first_name,
        last_name,
        job_description,
        about,
        email,
        phone,
        github,
        linkedin,
        address,
        tech_skills,
        interests,
        education
    }).then((isUpdated)=>{
        res.status(200).send({message:"Resume updated!",updatedResume:isUpdated});
    }).catch((e)=>{
        res.staus(200).send({error:e.message});
    })
})
.get('/all',async (req,res)=>{
    const resumes = await Resume.find();
    res.status(200).send({resumes});
})
.get('/read/:id',async (req,res)=>{
    const {id} = req.params;

    //find a resume with this id

    const resume = await Resume.findOne({_id:id});

    if(resume){
        res.status(200).send({resume});
    }
})
.put('/rating/:id',async (req,res)=>{
    const {id} = req.params;
    const {rating} = req.body;



    Resume.updateOne({_id:id},{
        rating
    }).then(()=>{
        res.status(200).send({message:"Thanks for Rating 🙏"})
    })
})


// CRUD CREATE READ UPDATE DELETE

// CREATE POST

// READ GET

// UPDATE PUT

//DELETE DELETE


module.exports = router;