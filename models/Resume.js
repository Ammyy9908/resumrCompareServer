const {model,Schema} = require('mongoose');


const resumeSchema = new Schema({
   
        first_name:{
            type:"String",
            required:true
        },
        last_name:{
            type:"String",
            default:null
        },
        job_description:{
            type:"String",
            required:true
        },
        about:{
            type:"String",
            default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        email:{
            type:"String",
            required:true

        },
        phone:{
            type:"String",
            required:true
        },
        github:{
            type:"String",
            default:null
        },
        linkedin:{
            type:"String",
            default:null
        },
        address:{
            type:"String",
            default:null
        },
    
        tech_skills:{
        type:"Array",
        default:[]
    },
    interests:{
        type:"Array",
        default:[]
    },
    education:{
        type:"Array",
        default:[]
    },
    rating:{
        type:"String",
        default:"0"
    }

});


const Resume = model('resume',resumeSchema);

module.exports = Resume;