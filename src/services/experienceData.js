export const exps = [
  {
    id: "9d384aae-4f79-4f82-8034-0e77f84a115e",
    company: "Dunbrae Subic Inc.",
    role: "Full-Stack Engineer",
    description:[
      "Build API development and automations using ReactJS, Laravel, PHP and MySQL located at Subic Bay Freeport Zone",
      "Assist the business in terms of support, enhancement and development of applications and databases, interfaces and data.",
      "Work with all the relevant departments such as Call Centers, Invoicing and Spare Parts to advance research and development to leverage emerging technologies and services.",
      "Provide technical assistance and backup to the support teams to resolve issues impacting on our systems and data availability"
    ],
    duration: "August 2022 - Present",
    link: "https://dunbraesubic.ph/",
    img: [
      "../assets/images/dunbrae1.jpg",
      "../assets/images/dunbrae2.jpg",
      "../assets/images/dunbrae3.jpg"
    ]
  },
  {
    id: "f4cce117-5f69-46f5-9037-ab541edd732e",
    company: "Gordon College",
    role: "Computer Instructor",
    description: [
      "Part-time instructor teaching Computer Programming to Computer Science and ACT 1st year college students.",
      "Responsible for providing instruction on a wide range of computer science courses, including an introductory survey course, Programming with C Language and Java, and/or college-level computer science courses.",
      "Teach how to write computer programs, algorithms and programming languages."
    ],
    duration: "August 2022 - August 2023",
    link: "https://gordoncollegeccs.edu.ph/ccs/ccsweb/#/",
    img: [
      "../assets/images/gc1.jpg",
      "../assets/images/gc3.jpg",
      "../assets/images/gc2.jpg",
    ]
  },
  {
    id: "09ff2d76-e177-4227-b9b5-47f1cd826d0e",
    company: "Easypos Solution Inc.",
    role: "Android Developer Intern",
    description: [
      "Completing 400 hours OJT as an Android Mobile Developer.",
      "Designing and developing advanced applications for the Android platform using Kotlin and Android Studio",
      "Bug fixing and improving application performance"
    ],
    duration: "March - June 2022",
    link: "https://easypos.com.ph/",
    img: [
      "../assets/images/easypos1.jpg",
      "../assets/images/easypos2.jpg",
      "../assets/images/easypos3.jpg",
    ]
  },
];

export function getExp() {
  return exps.filter((e) => e);
}
