const carBasket = [
  {
    typeData: false,
    nameOfThing: "Camry 75",
    year: 2019,
    count: 1,
    price: 25500,
    totalPrice: 25500,
    color: "Black",
    id: "n1",
    image: "./img/Camry%2070.jpeg",
  },
  {
    typeData: false,
    nameOfThing: "BMW M4",
    year: 2015,
    count: 1,
    price: 55000,
    totalPrice: 55000,
    color: "Red",
    id: "n2",
    image: "./img/BMW%20M4.webp",
  },
  {
    typeData: false,
    nameOfThing: "Mersedes S",
    year: 2021,
    count: 1,
    price: 60000,
    totalPrice: 60000,
    color: "White",
    id: "n3",
    image: "./img/MERSEDES=BENZ%20S-CLASS.jpg",
  },
];

const container = document.createElement("div");
container.className = "container";
document.body.prepend(container);

const wrapper = document.createElement("div");
wrapper.className = "wrapper";
container.append(wrapper);

const h1 = document.createElement("h1");
h1.innerHTML = "Shopping Bag!";
h1.className = "title";
container.prepend(h1);

const btnDayNight = document.createElement("button");
btnDayNight.className = "day__night";
btnDayNight.innerText = "Day/Night";
container.prepend(btnDayNight);

const renderAllItems = () => {
  wrapper.innerHTML = "";
  carBasket.map((elem) => {
    func(elem);
    console.log(elem);
  });
};

function func(el) {
  const divOne = document.createElement("div");
  divOne.className = "div_one";
  wrapper.append(divOne);

  const imgDeleteBlack = document.createElement("img");
  imgDeleteBlack.src = "./img/x-symbol_black.webp";
  imgDeleteBlack.className = "img__delete__black";
  imgDeleteBlack.id = el.id;
  imgDeleteBlack.addEventListener("click", (event) => {
    console.dir(event.target);
    event.target.parentElement.remove();
  });
  divOne.append(imgDeleteBlack);

  const imgLoveBlack = document.createElement("img");
  const like =
    el.typeData === true ? "./img/love%20red.png" : "./img/love%20black.png";
  imgLoveBlack.src = like;
  imgLoveBlack.className = "img__love__black";

  imgLoveBlack.addEventListener("click", () => {
    carBasket.map((item) => {
      if (el.nameOfThing === item.nameOfThing) {
        const newLike = !el.typeData;
        el.typeData = newLike;
      }
    });
    renderAllItems();
  });
  divOne.append(imgLoveBlack);

  const imgPhoto = document.createElement("img");
  imgPhoto.src = el.image;
  imgPhoto.className = "img__photo";
  imgPhoto.image = el.image;
  divOne.append(imgPhoto);

  const nameDeck = document.createElement("div");
  nameDeck.className = "name__desk";
  divOne.append(nameDeck);

  const nameTheWords = document.createElement("h3");
  nameTheWords.className = "name__the__words";
  nameTheWords.innerText = el.nameOfThing;
  nameDeck.append(nameTheWords);

  const carYear = document.createElement("h4");
  carYear.className = "car__year";
  carYear.innerText = el.year;
  nameDeck.append(carYear);

  const carColor = document.createElement("h4");
  carColor.className = "car__color";
  carColor.innerText = el.color;
  nameDeck.append(carColor);

  const btnDecrement = document.createElement("button");
  let btnIncrement = document.createElement("button");

  btnDecrement.id = "btn__decrement__left";
  btnDecrement.innerHTML = "-";
  btnDecrement.addEventListener("click", () => {
    if (el.count > 1) {
      el.count = el.count -= 1;
      carCounter.innerText = el.count;

      el.price = el.price - el.totalPrice;
      price.innerText = `${el.price} $ `;
    }
    renderAllItems();
  });
  divOne.append(btnDecrement);

  const carCounter = document.createElement("h3");
  carCounter.className = "car__counter";
  carCounter.innerText = el.count;
  divOne.append(carCounter);

  btnIncrement.id = "btn__increment__right";
  btnIncrement.innerHTML = "+";
  btnIncrement.addEventListener("click", () => {
    el.count += 1;
    carCounter.innerText = el.count;
    el.price = el.price + el.totalPrice;
    price.innerText = `${el.price} $`;
  });
  divOne.append(btnIncrement);

  const price = document.createElement("h4");
  price.className = "car__price";
  price.innerText = `${el.price} $`;
  divOne.append(price);
}

renderAllItems();

btnDayNight.addEventListener("click", () => {
  const theme = document.getElementById("theme");
  if (theme.getAttribute("href") === "css/style.css") {
    theme.href = "css/night.css";
  } else {
    theme.href = "css/style.css";
  }
});

//---------------------------------------------------------------------------->
