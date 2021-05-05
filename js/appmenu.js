"use strict";
const mainMealsContainer = document.getElementsByClassName("main-dishes")[0];
const mealsContainer = document.getElementsByClassName("my-meal")[0];
const cartItems = document.getElementsByClassName("cart-items")[0];
let totalSection = document.getElementsByClassName("cart-total")[0];

let total = 0;

const startMeals = [
  {
    id: 1,
    filePath:
      "https://d2j8k8fxwhe17j.cloudfront.net/images/slider/%D8%A7%D9%84%D8%AD%D9%85%D8%B5.jpeg",
    name: "Hommos",
    price: "2",
    description: "one bowl",
  },

  {
    id: 2,
    filePath:
      "https://pulses.org/images/com_yoorecipe/cropped-Isreal_Falafel-4055.jpg",
    name: "Flafel",
    price: "1",
    description: "10 PSC",
  },

  {
    id: 3,
    filePath: "https://www.justfood.tv/big/0Pannenkoeken.000.jpg",
    name: "Lazaqeyat",
    price: "2",
    description: "3 PSC",
  },

  {
    id: 4,
    filePath:
      "https://www.skynewsarabia.com/images/v1/2019/10/19/1291708/800/450/1-1291708.jpg",
    name: "Red Tea",
    price: "1",
    description: "cup",
  },

  {
    id: 5,
    filePath:
      "https://dinas-kitchen.com/wp-content/uploads/2018/03/IMGP1218-1024x681.jpg",
    name: "Coffee",
    price: "2",
    description: "cup ",
  },
  {
    id: 6,
    filePath:
      "https://kitchen.sayidaty.net/uploads/small/ee/ee32b405fe806e947788addb05e37671_w750_h500.jpg",
    name: "Tomato frying pan",
    price: "3",
    description: "one bowl",
  },

  {
    id: 7,
    filePath:
      "https://i2.wp.com/alghad.com/wp-content/uploads/2019/07/2-10.jpg?fit=630%2C395&ssl=1",
    name: "Shrak",
    price: "1",
    description: "2 PSC ",
  },

  {
    id: 8,
    filePath:
      "https://img.youm7.com/ArticleImgs/2019/8/9/90719-%D9%81%D8%AA%D8%A9-%D8%A7%D9%84%D8%AD%D9%85%D8%B5-%D8%A7%D9%84%D8%A3%D8%B1%D8%AF%D9%86%D9%8A%D8%A9--(2).jpg",
    name: "Fatteh",
    price: "5",
    description: "one bowl",
  },
  {
    id: 9,
    filePath:
      "https://rs-menus-api.roocdn.com/images/c4317ece-e77b-46a0-b6b4-ad5555d85b93/image.jpeg?width=1200&height=630&auto=webp&format=jpg&fit=crop&v=",
    name: "Mansaf",
    price: "7",
    main: true,
    description: "Rice Bowl + 2 Pieces of Meat + Jameed Milk",
  },

  {
    id: 10,
    filePath:
      "https://matbakharabi.com/wp-content/uploads/2020/07/wsi-imageoptim-%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D8%AA%D8%AD%D8%B6%D9%8A%D8%B1-%D8%A7%D9%84%D9%85%D9%82%D9%84%D9%88%D8%A8%D8%A9-%D8%A7%D9%84%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86%D9%8A%D8%A9-1140x500.jpg",
    name: "Maqlooba",
    price: "7",
    main: true,
    description: "Rice Bowl + 2 Pieces of Peat + Yogurt",
  },

  {
    id: 11,
    filePath:
      "data:image/jpeg;base64,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",
    name: "Zarp",
    price: "7",
    main: true,
    description: "Rice Bowl + 2 Pieces of Meat + Yogurt",
  },

  {
    id: 12,
    filePath:
      "https://img-global.cpcdn.com/recipes/a8f5db08a0299a69/1200x630cq70/photo.jpg",
    name: "Rashof",
    price: "2",
    main: true,
    description: "Meduim Bowl+Shrak",
  },

  {
    id: 13,
    filePath:
      "https://www.supermama.me/system/App/Entities/Recipe/images/000/106/827/watermarked/%D8%A7%D9%84%D9%85%D9%83%D9%85%D9%88%D8%B1%D8%A9-%D8%A7%D9%84%D8%A7%D8%B1%D8%AF%D9%86%D9%8A%D8%A9.jpg",
    name: "Makmora",
    price: "7",
    main: true,
    description: "1 Piece (250gm)",
  },
  {
    id: 14,
    filePath:
      "https://www.aljazeera.net/wp-content/uploads/2021/04/78%D8%B4%D8%B38%D8%B4%D8%B3.jpg?resize=1200,630",
    name: "Jareesh",
    price: "9",
    main: true,
    description: "one bowl",
  },
];
let allMeals = [];
const Product = function (
  id,
  filePath,
  name,
  price,
  quantity,
  selected,
  total,
  main,
  description
) {
  this.id = id;
  this.filePath = filePath;
  this.name = name;
  this.price = price;
  this.quantity = quantity || 0;
  this.selected = selected || false;
  this.total = total || 0;
  this.main = main || false;
  this.description = description;
  allMeals.push(this);
};
if (JSON.parse(localStorage.getItem("savedMeals"))) {
  render(JSON.parse(localStorage.getItem("savedMeals")));
  renderCart();
} else {
  render(startMeals);
}

function render(array) {
  let container;
  for (let index = 0; index < array.length; index++) {
    let selectedMeal = array[index];

    const meal = new Product(
      selectedMeal.id,
      selectedMeal.filePath,
      selectedMeal.name,
      selectedMeal.price,
      selectedMeal.quantity,
      selectedMeal.selected,
      selectedMeal.total,
      selectedMeal?.main,
      selectedMeal.description
    );
    if (meal.main == true) {
      container = mainMealsContainer;
    } else {
      container = mealsContainer;
    }
    container.innerHTML += `
<div class="col-lg-3 col-md-6">
<div class="single-other-issue">
  <div class="thumb">
    <img
      class="img-fluid" id=""
      src=${meal.filePath}
      alt=""
    />
  </div>
  <div class="thumb back">
    <h4 class="shop-Title">${meal.name}</h4>
  </a>
  <p>
  ${meal.description}
  </p>
  <a class="price-botton" id=${meal.id} ><i class="fas fa-shopping-basket"></i> Add To Basket </a>
  <p style="margin-top: 10px;font-weight: bold;" class="shop-item-price">${meal.price}.00 JD</p>
</div>
</div>
</div>
`;

    localStorage.setItem("savedMeals", JSON.stringify(allMeals));
  }

  let addToCartButtons = document.getElementsByClassName("price-botton");
  for (let index = 0; index < addToCartButtons.length; index++) {
    let button = addToCartButtons[index];
    button.addEventListener("click", addTOCardClicked);
  }
}

function renderCart() {
  let deleteButton = document.getElementsByClassName("btn-danger");
  let itemInputs = document.getElementsByClassName("cart-quantity-input");
  cartItems.innerHTML = "";
  for (let index = 0; index < allMeals.length; index++) {
    const selectedMeal = allMeals[index];
    if (selectedMeal.selected === true) {
      cartItems.innerHTML += `
      <div class="row-container">
  <div class="cart-item cart-column">
  <img
    class="cart-item-image"
    src="${selectedMeal.filePath}"
    width="100"
    height="100"
  />
  <span class="cart-item-title">${selectedMeal.name}</span>
</div>
<span class="cart-price cart-column">${selectedMeal.price} JD</span>
<div class="cart-quantity cart-column">
  <input id="${selectedMeal.id}" class="cart-quantity-input" type="number" value="${selectedMeal.quantity}" />
  <button id="${selectedMeal.id}" class="btn btn-danger" type="button">Remove</button>
</div>
</div>`;
    }
  }

  for (let index = 0; index < deleteButton.length; index++) {
    let button = deleteButton[index];
    button.addEventListener("click", removeItem);
  }

  for (let index = 0; index < itemInputs.length; index++) {
    let button = itemInputs[index];
    button.addEventListener("click", changeQuantity);
  }
  totalSection.innerHTML = ` <strong class="cart-total-title">Total</strong>
  <span class="cart-total-price">${
    localStorage.getItem("total") || total
  } JD</span>`;
}

function addTOCardClicked(e) {
  const mealId = e.target.id;

  for (let index = 0; index < allMeals.length; index++) {
    let selectedMeal = allMeals[index];
    if (selectedMeal.id == mealId) {
      selectedMeal.selected = true;
      selectedMeal.quantity++;
      selectedMeal.total = selectedMeal.price * selectedMeal.quantity;
    }
  }
  localStorage.setItem("savedMeals", JSON.stringify(allMeals));
  renderCart();
  renderTotal();
}

function removeItem(e) {
  let itemId = e.target.id;
  let selectedMeal;
  for (let index = 0; index < allMeals.length; index++) {
    selectedMeal = allMeals[index];
    if (selectedMeal.id == itemId) {
      selectedMeal.selected = !selectedMeal.selected;
      selectedMeal.quantity = 0;
      selectedMeal.total = 0;
    }
  }
  localStorage.setItem("savedMeals", JSON.stringify(allMeals));
  renderCart();
  renderTotal();
}

function changeQuantity(e) {
  let itemId = e.target.id;
  let quantity = e.target.value;
  let selectedMeal;
  for (let index = 0; index < allMeals.length; index++) {
    if (allMeals[index].id == itemId) {
      selectedMeal = allMeals[index];
      let price = selectedMeal.price;
      selectedMeal.quantity = quantity;
      selectedMeal.total = price * selectedMeal.quantity;
    }
  }
  localStorage.setItem("savedMeals", JSON.stringify(allMeals));

  console.log("total", total);
  renderTotal();
}

function renderTotal() {
  total = 0;
  for (let index = 0; index < allMeals.length; index++) {
    if (allMeals[index].total) {
      console.log("hii");
      total += allMeals[index].total;
    }
  }
  localStorage.setItem("total", total);

  totalSection.innerHTML = ` <strong class="cart-total-title">Total</strong>
  <span class="cart-total-price">${
    localStorage.getItem("total") || total
  } JD</span>`;
}

function removeTotal() {
  for (let index = 0; index < allMeals.length; index++) {
    if (allMeals[index].total) {
      allMeals[index].total = 0;
    }
    if (allMeals[index].selected) {
      allMeals[index].selected = false;
    }
    if (allMeals[index].quantity) {
      allMeals[index].quantity = 0;
    }
  }
  total = 0;
  localStorage.setItem("total", total);

  totalSection.innerHTML = ` <strong class="cart-total-title">Total</strong>
  <span class="cart-total-price">${
    localStorage.getItem("total") || total
  } JD</span>`;
  localStorage.setItem("savedMeals", JSON.stringify(allMeals));
  renderCart();
  removeItem();
}
