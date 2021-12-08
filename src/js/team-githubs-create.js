import '../sass/main.scss';

export const membersGithubs = [
    {
    name: "Dmytro",
    lastname: "Samyliak",
    githublink: "github.com",
    },
    {
    name: "Anatol",
    lastname: "Biełow",
    githublink: "github.com",
    },
    {
    name: "Ганна",
    lastname: "Батарчук",
    githublink: "github.com",
    },
    {
    name: "Yulia",
    lastname: "Semenyuk",
    githublink: "github.com",
    },
    {
    name: "Vsevolod",
    lastname: "Antonov",
    githublink: "github.com",
    },
    {
    name: "Galyna",
    lastname: "Maikovych",
    githublink: "github.com",
    },
    {
    name: "Vitalii",
    lastname: "Shulga",
    githublink: "github.com",
    },
    {
    name: "Василий",
    lastname: "Волобаев",
    githublink: "github.com",
    },
    {
    name: "Anastasiia",
    lastname: "Chorna",
    githublink: "github.com",
    },
    {
    name: "Dmytro",
    lastname: "Litinskyi",
    githublink: "notgithub.com",
    },
    {
    name: "Андрей",
    lastname: "Пенский",
    githublink: "github.com",
    },
];

export default function renderedTeam(membersGithubs) {

let markup = "";
    
    
    markup = membersGithubs.map((member) =>
         
    `<li class="team--member">
      <input type="checkbox" name="${member.lastname}" id="samyliak" value="yes" ${member.photo} />
      <label for="Samyliak">${member.name} ${member.lastname}</label>
    </li>`).join("");

    console.log(markup);

    return markup;
    
    
};

const teamGithubSelector = document.querySelector('.team--githubs-list');

let markup = renderedTeam(membersGithubs);
teamGithubSelector.insertAdjacentHTML("beforeend", markup);
