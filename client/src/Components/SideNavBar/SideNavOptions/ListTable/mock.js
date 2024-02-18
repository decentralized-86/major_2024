// import { faker } from "@faker-js/faker";
// import { format } from "rsuite/esm/utils/dateUtils";

// function mockUsers(length) {
//   const createRowData = (rowIndex) => {
//     const firstName = faker.person.firstName();
//     const lastName = faker.person.lastName();
//     const name = faker.person.fullName({ firstName, lastName });

//     const batch = faker.helpers.arrayElement([
//       "2017",
//       "2018",
//       "2019",
//       "2020",
//       "2021",
//       "2022",
//     ]);
//     const branch = faker.helpers.arrayElement(["CE", "IT", "ME", "ELEC"]);
//     const uid =
//       faker.helpers.arrayElement(["CE", "ME", "IT"]) +
//       faker.helpers.arrayElement(["17", "18", "19", "20", "21", "22"]) +
//       faker.location.zipCode("F###");
//     const Year = Math.floor(Math.random() * (2025 - 2000) + 2000);
//     const gender = faker.person.sex();
//     const contact = faker.phone.number();
//     const college_email = faker.internet.email({
//       firstName,
//       lastName,
//       provider: "fy20@stvincentngp.edu.in",
//     });
//     const degree = faker.helpers.arrayElement(["B.Tech", "M.Tech", "PhD"]);
//     const avg_cgpa = (Math.random() * 4).toFixed(2);
//     const ssc_marks = (Math.random() * 100).toFixed(2);
//     const ssc_board = faker.helpers.arrayElement(["CBSE", "ICSE", "State"]);
//     const hsc_marks = (Math.random() * 100).toFixed(2);
//     const hsc_board = faker.helpers.arrayElement(["CBSE", "ICSE", "State"]);

//     const address = faker.location.street();
//     const city = faker.location.city();
//     const post_code = faker.location.zipCode();
//     const state = faker.location.state();
//     const country = faker.location.country();

//     const linkedln_link = faker.internet.url();
//     const resume_url = faker.internet.url();
//     const password = faker.internet.password();

//     return {
//       id: rowIndex + 1,
//       name,
//       uid,
//       batch,
//       branch,
//       Year,
//       gender,
//       contact,
//       college_email,
//       degree,
//       avg_cgpa,
//       ssc_marks,
//       ssc_board,
//       hsc_marks,
//       hsc_board,
//       linkedln_link,
//       resume_url,
//       password,
//       location: {
//         address,
//         city,
//         post_code,
//         state,
//         country,
//       },
//     };
//   };

//   return Array.from({ length }).map((_, index) => {
//     return createRowData(index);
//   });
// }

// export { mockUsers };

// /*
// student: {
//         name : {type : String, required: true },
//         uid : {  type : String, required : true},
//         batch : {type : String,   required: true, },
//         branch : { type : String,  required: true },
//         gender : {  type : String, required:true,  default : 'M' },
//         contact : {  type : String, required: true},
//         college_email : { type : String, required: true, },
//         degree : { type : String, required: true,  },
//        avg_cgpa : { type : String, required: true },
//         ssc_marks : {type : String, required: true  },
//         ssc_board : { type : String,  required: true,},
//         hsc_marks : { type : String, required: true },
//         hsc_board : { type : String, required: true,  },
//  },

//  location: {
//     address : {  type : String, required: true },
//     city : { type : String,  required: true},
//     post_code : {type : String, required: true},
//     state : { type : String, required: true,  },
//     country : { type : String, required: true },
//  },

//     linkedln_link: {
//         type : String
//     },
//     resume_url : {
//         type : String
//     },
//     password : {
//         type : String,
//         required: true,

//     },
// */

import { faker } from "@faker-js/faker";
import { format } from "rsuite/esm/utils/dateUtils";

function mockUsers(length) {
  const createRowData = (rowIndex) => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const name = faker.person.fullName({ firstName, lastName });

    const batch = faker.helpers.arrayElement([
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
    ]);
    const branch = faker.helpers.arrayElement(["CE", "IT", "ME", "ELEC"]);
    const uid =
      faker.helpers.arrayElement(["CE", "ME", "IT"]) +
      faker.helpers.arrayElement(["17", "18", "19", "20", "21", "22"]) +
      faker.location.zipCode("F###");
    const Year = Math.floor(Math.random() * (2025 - 2000) + 2000);
    const gender = faker.person.sex();
    const contact = faker.phone.number();
    const college_email = faker.internet.email({
      firstName,
      lastName,
      provider: "fy20@stvincentngp.edu.in",
    });
    const degree = faker.helpers.arrayElement(["B.Tech", "M.Tech", "PhD"]);
    const avg_cgpa = (Math.random() * 4).toFixed(2);
    const ssc_marks = (Math.random() * 100).toFixed(2);
    const ssc_board = faker.helpers.arrayElement(["CBSE", "ICSE", "State"]);
    const hsc_marks = (Math.random() * 100).toFixed(2);
    const hsc_board = faker.helpers.arrayElement(["CBSE", "ICSE", "State"]);

    const address = faker.location.street();
    const city = faker.location.city();
    const post_code = faker.location.zipCode();
    const state = faker.location.state();
    const country = faker.location.country();

    const linkedln_link = faker.internet.url();
    const resume_url = faker.internet.url();
    const password = faker.internet.password();

    return {
      id: rowIndex + 1,
      name,
      uid,
      batch,
      branch,
      Year,
      gender,
      contact,
      college_email,
      degree,
      avg_cgpa,
      ssc_marks,
      ssc_board,
      hsc_marks,
      hsc_board,
      linkedln_link,
      resume_url,
      password,
      location: {
        address,
        city,
        post_code,
        state,
        country,
      },
    };
  };

  return Array.from({ length }).map((_, index) => {
    return createRowData(index);
  });
}

export { mockUsers };
