export const project = [
    {
      id: "9d384aae-4f79-4f82-8034-0e77f84a115e",
      header: "Available on Google Play",
      project: "GCIAN",
      badge:["Angular", "MongoDB", "NodeJs"],
      img: "../assets/images/projects/project1.jpg",
      description:"A Web and Mobile-Based Interactive Network Application For Gordon College. GCIAN is a Gordon College-exclusive social media networking platform that allows students to freely communicate and express their opinions, knowledge, and ideas to a broad audience, as well as interact with other student's posts."
    },
    {
      id: "9d384aae-4f79-4f82-8034-0e77f84a115e",
      header: "Featured Project",
      project: "PetSpotShop",
      badge:["ReactJs", "MongoDB", "NodeJs"],
      img: "../assets/images/projects/project7.jpg",
      description:" PetSpotShop is an e-commerce website designed with pets, services for pet shops, accessories for pet shops, and other products in mind. The platform is an e-commerce website designed with pets, pet store services, pet store supplies, and other products in mind."
    },
    {
      id: "9d384aae-4f79-4f82-8034-0e77f84a115e",
      header: "Featured Project",
      project: "Payroll System",
      badge:["C#", "MySQL"],
      img: "../assets/images/projects/project8.jpg",
      description:"Payroll System is an application of the software that automates the computation and distribution of employee paychecks. As it resolves payment and deduction concerns and digitally records them in its database, the software automatically calculates salaries, tax deductions, incentives, bonuses, salaries, tax deductions, incentives, and bonuses automatically."
    }
  ];
  
  export function getProject() {
    return project.filter((e) => e);
  }
  