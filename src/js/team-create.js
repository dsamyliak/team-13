export const members = [
    {
    name: "Dmytro",
    lastname: "Samyliak",
    photo: "checked",
    },
    {
    name: "Dmytro",
    lastname: "Samyliak",
    photo: "checked",
    },
    {
    name: "Dmytro",
    lastname: "Samyliak",
    photo: "checked",
    },
    {
    name: "Dmytro",
    lastname: "Samyliak",
    photo: "checked",
    },
    {
    name: "Dmytro",
    lastname: "Samyliak",
    photo: "checked",
    },
    {
    name: "Dmytro",
    lastname: "Samyliak",
    photo: "checked",
    },
    {
    name: "Dmytro",
    lastname: "Samyliak",
    photo: "checked",
    },
    {
    name: "Dmytro",
    lastname: "Samyliak",
    photo: "checked",
    },
    {
    name: "Dmytro",
    lastname: "Samyliak",
    photo: "checked",
    },
    {
    name: "Dmytro",
    lastname: "Samyliak",
    photo: "checked",
    },
    {
    name: "Dmytro",
    lastname: "Samyliak",
    photo: "checked",
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