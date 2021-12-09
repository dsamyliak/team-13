import '../sass/main.scss';

export const members = [
    {
    name: "Dmytro",
    lastname: "Samyliak",
    photo: "checked",
    photoUrl: "",
    },
    {
    name: "Anatol",
    lastname: "Biełow",
    photo: "checked",
    photoUrl: "",
    },
    {
    name: "Ганна",
    lastname: "Батарчук",
    photo: "checked",
    photoUrl: "",
    },
    {
    name: "Yulia",
    lastname: "Semenyuk",
    photo: "checked",
    photoUrl: "",
    },
    {
    name: "Vsevolod",
    lastname: "Antonov",
    photo: "checked",
    photoUrl: "",
    },
    {
    name: "Galyna",
    lastname: "Maikovych",
    photo: "checked",
    photoUrl: "",
    },
    {
    name: "Vitalii",
    lastname: "Shulga",
    photo: "checked",
    photoUrl: "",
    },
    {
    name: "Василий",
    lastname: "Волобаев",
    photo: "checked",
    photoUrl: "",
    },
    {
    name: "Anastasiia",
    lastname: "Chorna",
    photo: "checked",
    photoUrl: "",
    },
    {
    name: "Dmytro",
    lastname: "Litinskyi",
    photo: "checked",
    },
    {
    name: "Андрей",
    lastname: "Пенский",
    photo: "checked",
    photoUrl: "",
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

const teamMemberSelector = document.querySelector('.team--list');

let markup = renderedTeam(members);
teamMemberSelector.insertAdjacentHTML("beforeend", markup);
