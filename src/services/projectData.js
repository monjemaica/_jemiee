export const project = [
  {
    id: "9d384aae-4f79-4f82-8034-0e77f84a115e",
    header: "Available on Google Play",
    project: "GCIAN",
    badge: ["Angular", "Ionic", "MongoDB", "NodeJs"],
    type: ["Application", "Website"],
    category: "Social Media",
    img: "../assets/images/projects/project1.jpg",
    imgs: [
      "../assets/images/projects/project1.jpg",
      "../assets/images/projects/enterChatroom.jpg",
      "../assets/images/projects/editButtonInProfile.jpg",
      "../assets/images/projects/login.jpg",
      "../assets/images/projects/chatroomMessage.jpg",
    ],
    description:
      "A Web and Mobile-Based Interactive Network Application For Gordon College. GCIAN is a Gordon College-exclusive social media networking platform that allows students to freely communicate and express their opinions, knowledge, and ideas to a broad audience, as well as interact with other student's posts.",
  },
  {
    id: "9d384aae-4f79-4f82-8034-0e77f84a115d",
    header: "Capstone Project",
    project: "PetSpotShop",
    badge: ["ReactJs", "TypeScript", "MongoDB", "NodeJs"],
    category: "Business",
    type: ["Website"],
    img: "../assets/images/projects/project7.jpg",
    imgs: [
      "../assets/images/projects/project7.jpg",
      "../assets/images/projects/orderDetails.jpg",
      "../assets/images/projects/paypalPage.jpg",
      "../assets/images/projects/homePage.jpg",
      "../assets/images/projects/adminShop.jpg",
    ],
    description:
      " PetSpotShop is an e-commerce website designed with pets, services for pet shops, accessories for pet shops, and other products in mind. The platform is an e-commerce website designed with pets, pet store services, pet store supplies, and other products in mind.",
  },
  {
    id: "9d384aae-4f79-4f82-8034-0e77f84a115g",
    header: "Capstone Project",
    project: "Payroll System",
    badge: ["C#", "MySQL"],
    type: ["Software"],
    category: "Finance",
    img: "../assets/images/projects/project8.jpg",
    imgs: [
      "../assets/images/projects/payrol1.jpg",
      "../assets/images/projects/payrol2.jpg",
      "../assets/images/projects/payrol3.jpg",
      "../assets/images/projects/payrol4.jpg",
      "../assets/images/projects/payrol5.jpg",
    ],
    description:
      "Payroll System is an application of the software that automates the computation and distribution of employee paychecks. As it resolves payment and deduction concerns and digitally records them in its database, the software automatically calculates salaries, tax deductions, incentives, salaries, and bonuses.",
  },
];

export function getProjects() {
  return project.filter((e) => e);
}

export function getProject(id) {
  return project.find((e) => e.id === id);
}
