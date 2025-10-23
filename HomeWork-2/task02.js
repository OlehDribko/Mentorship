const productsSelector = document.querySelector(".products");

const kitchenProducts = [
  { type: "grater", price: 10 },
  { type: "pastry-bag", price: 25 },
  { type: "scale", price: 5 },
  { type: "whisk", price: 15 },
];

const devicesProducts = [
  { type: "desktop", price: [100, 1000] },
  { type: "laptop", price: [50, 1500] },
  { type: "smartphone", price: [80, 2000] },
  { type: "tablet", price: [20, 1300] },
];

const cosmeticsProducts = [
  { type: "blush", price: 100 },
  { type: "eyeshadow", price: 50 },
  { type: "lipstick", price: 80 },
  { type: "nail-polish", price: 200 },
  { type: "perfume", price: 300 },
];

function Product(category, type, price) {
  this.category = category;
  this.type = type;
  this.price = price;
}

Product.prototype.render = function (category) {
  console.log(Array.isArray(this.price));
  return `
      <tr>
         <td>
            <img src="./HomeWork-2/images/${category}/${
    this.type
  }.svg" width="50"></img>
            </td>
            <td>${this.type}</td>
            <td>${
              Array.isArray(this.price)
                ? `${this.price[0]} - ${this.price[1]}`
                : this.price
            }</td> </tr>`;
};

function renderTablet(array, category) {
  return `<table border="1">
  <thead>
  <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        </tr>
      </thead>
      <tbody>

${array
  .map((el) => new Product(category, el.type, el.price).render(category))
  .join("")}</tbody></table>`;
}

productsSelector.insertAdjacentHTML(
  "afterbegin",
  renderTablet(kitchenProducts, "kitchen")
);

productsSelector.insertAdjacentHTML(
  "afterbegin",
  renderTablet(devicesProducts, "devices")
);
productsSelector.insertAdjacentHTML(
  "afterbegin",
  renderTablet(cosmeticsProducts, "cosmetics")
);
