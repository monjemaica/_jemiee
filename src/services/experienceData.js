export const exps = [
  {
    id: "9d384aae-4f79-4f82-8034-0e77f84a115e",
    company: "Dunbrae Subic Inc.",
    description: [
      "Developing API development and automations using PHP and MySQL.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reiciendis corporis accusantium! Excepturi, sed ullam perferendis dicta nam voluptate assumenda hic necessitatibus delectus repellat, exercitationem ipsam praesentium sapiente quis dolor atque animi vel earum adipisci iusto corrupti dolore aperiam tempora? Obcaecati, reiciendis. Maiores repudiandae eos impedit quo animi deserunt quia?",
      "Developing API development and automations using PHP and MySQL.",
      "Developing API development and automations using PHP and MySQL.",
      "Developing API development and automations using PHP and MySQL.",
    ],
    duration: "August - Present",
  },
  {
    id: "f4cce117-5f69-46f5-9037-ab541edd732e",
    company: "Gordon College",
    description: ["Part-time instructor teaching Computer Programming."],
    duration: "August - Present",
  },
  {
    id: "09ff2d76-e177-4227-b9b5-47f1cd826d0e",
    company: "Easypos Solution Inc.",
    description: ["Completing 400 hours OJT as an Android Mobile Dev."],
    duration: "March - June 2022",
  },
];

export function getExp() {
  return exps.filter((e) => e);
}
