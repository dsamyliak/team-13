export const members = [
    {
    name: "Dmytro",
    lastname: "Samyliak",
    photo: "checked",
    },
    {
    name: "Anatol",
    lastname: "Biełow",
    photo: "checked",
    },
    {
    name: "Ганна",
    lastname: "Батарчук",
    photo: "checked",
    },
    {
    name: "Yulia",
    lastname: "Semenyuk",
    photo: "checked",
    },
    {
    name: "Vsevolod",
    lastname: "Antonov",
    photo: "checked",
    },
    {
    name: "Galyna",
    lastname: "Maikovych",
    photo: "checked",
    },
    {
    name: "Vitalii",
    lastname: "Shulga",
    photo: "checked",
    },
    {
    name: "Василий",
    lastname: "Волобаев",
    photo: "checked",
    },
    {
    name: "Anastasiia",
    lastname: "Chorna",
    photo: "checked",
    },
    {
    name: "Dmytro",
    lastname: "Litinskyi",
    photo: "notchecked",
    },
    {
    name: "Андрей",
    lastname: "Пенский",
    photo: "notchecked",
    },
];

export default function renderedTeam(members) {

let markup = "";
    
    
    markup = members.map((member) =>
         
    `<li class="team--member">
      <input type="checkbox" name="${member.lastname}" id="samyliak" value="yes" ${member.photo} />
      <label for="Samyliak">${member.name} ${member.lastname}</label>
    </li>`).join("");

    console.log(markup);

    return markup;
    
    
};