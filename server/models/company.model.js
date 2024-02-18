const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    company_name: {
        type: String,
        required: true,
    },
    company_email: {
        type: String,
        required: true,
    },
    company_website_url : {
        type : String,
        default : ' '
    },
    organization_type : {
        type : String,
        default : ' '
    },
    industry_sector : {
        type : String,
        default : ' '
    },
    about_company : {
        type : String,
        default : ' '
    },

    // Job Profile
    job_profile : {
        type : String,
        required: true
    },
    passout_batch : {
        type : String,
        required : true
    },
    recruitment : {
        type : String,
        required : true
    },
    duration : {
        type : String,
        default : ' '
    },
    posting_location : {
        type : String,
        default : ' '
    },
    joining_date : {
        type : Date
    },
    job_description : {
        type : String,
        default : ' '
    },

    // student eligibility
    eligibility : {
        type : Object
    },
    min_cgpa : {
        type : String, // todo convert float
        default : 'NA'
    },
    min_10_percent : {
        type : String,
        default : 'NA'
    },
    min_12_percent : {
        type : String,
        default : 'NA'
    },
    medical_requirement : {
        type : String,
        default : 'NA'
    },
    service_agreement : {
        type : String,
        default : 'NA'
    },
    service_agreement_duration : {
        type : String,
        default : 'NA'
    },
    other_eligibility : {
        type : String,
        default : 'NA'
    },

    // Package Details
    package : {
        type : Object
    },
    company_accommodation : {
        type : String,
        default : 'NA'
    },
    other_facility : {
        type : String,
        default : 'NA'
    },

    // Selection Process
    selection_process : {
        type : Object
    },
    waitlist : {
        type : String
    },
    final_offer : {
        type : String
    },

    // registration deadline
    deadline_date : {
        type : Date,
        required : true
    },

    // Students registration
    // tempo attendance status
    attendance : {
        type : Boolean
    },
    company_otp : {
        type : String
    },
    candidates : [{
        uid : {
            type : String,
            required: true
        },
        candidate_status : {
            type : String,
            default : 'Applied',
            enum : ['Applied','Appeared for Test','Absent','Shortlisted','Selected']
        },
        timestamp : {
            type : Date,
            required : true
        }
    }],
    timestamp: {
        type : Date,
        required : true,
        default: Date.now()
    }
});

    


const Company = mongoose.model('Company', companySchema);
module.exports = Company;