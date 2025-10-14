const tabletSelector = document.querySelector(".tablet");
const newTablet = document.createElement("div");
const marvelHeroes = [{ name: "Thor" }, { name: "Spider Man" }];

const dcHeroes = [
  { name: "Superman" },
  { name: "Batman" },
  { name: "Deadpool" },
];
Array.prototype.heroesRender = function (folderName) {
  return `
  <table border="1">
    <thead>
      <th>Name</th>
      <th>Icon</th>
    </thead>
    <tbody>${this.map(
      (hero) => `<tr>
    <td>${hero.name}</td>
    <td>
      <img
        src="./images/${folderName}/${hero.name
        .split(" ")
        .join("")
        .toLowerCase()}.svg"
        alt="Hero Icon"
        width="50"
      />
    </td>
    `
    ).join("")}
    
     
    </tbody>
  </table>`;
};

tabletSelector.insertAdjacentHTML("afterbegin", dcHeroes.heroesRender("dc"));
{
  /* <img src="../images/dc/batman.svg"></img>; */
}
