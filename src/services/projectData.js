export const project = [
    {
      id: "9d384aae-4f79-4f82-8034-0e77f84a115e",
      header: "Featured Project",
      project: "Project Name",
      badge:["ReactJs", "MongoDB", "NodeJs"],
      img: "../assets/images/projects/project1.jpg"
    },
    {
      id: "9d384aae-4f79-4f82-8034-0e77f84a115e",
      header: "Featured Project",
      project: "Project Name",
      badge:["ReactJs", "MongoDB", "NodeJs"],
      img: "../assets/images/projects/project1.jpg"
    },
    {
      id: "9d384aae-4f79-4f82-8034-0e77f84a115e",
      header: "Featured Project",
      project: "Project Name",
      badge:["ReactJs", "MongoDB", "NodeJs"],
      img: "../assets/images/projects/project1.jpg"
    }
  ];
  
  export function getProject() {
    return project.filter((e) => e);
  }
  