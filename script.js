let mainPage = document.querySelector(".main");
let blogContent = document.querySelector(".blogContent");
let shoping = document.querySelector(".cardContainer");
// let cardgirl = document.querySelector(".cardgirl");
let aboutPage = document.querySelector(".about");
let contactus = document.querySelector(".contact");
let cart = document.querySelector(".addCart");

function blogs() {
  document.getElementById("blog").style.color = "rgb(52, 132, 132)";
  document.getElementById("home").style.color = "black";
  document.getElementById("contact").style.color = "black";
  document.getElementById("shop").style.color = "black";
  document.getElementById("cart").style.color = "black";
  document.getElementById("about").style.color = "black";
}

function homes() {
  mainPage.style.display = "flex";
  //    cardMen.style.display = "block";
  //    cardgirl.style.display = "block";
  shoping.style.display = "block";
  blogContent.style.display = "none";
  contactus.style.display = "none";
  cart.style.display = "none";
  document.getElementById("blog").style.color = "black";
  document.getElementById("shop").style.color = "black";
  document.getElementById("home").style.color = "rgb(1, 190, 190)";
  document.getElementById("about").style.color = "black";
  document.getElementById("contact").style.color = "black";
  document.getElementById("cart").style.color = "black";
}

function shops() {
  // cardMen.style.display = "block";
  // cardgirl.style.display = "block";
  shoping.style.display = "flex";
  mainPage.style.display = "none";
  blogContent.style.display = "none";
  aboutPage.style.display = "none";
  contactus.style.display = "none";
  cart.style.display = "none";
  document.getElementById("blog").style.color = "black";
  document.getElementById("about").style.color = "black";
  document.getElementById("shop").style.color = "rgb(1, 190, 190)";
  document.getElementById("home").style.color = "black";
  document.getElementById("contact").style.color = "black";
  document.getElementById("cart").style.color = "black";
}

function blogs() {
  shoping.style.display = "none";
  mainPage.style.display = "none";
  blogContent.style.display = "block";
  aboutPage.style.display = "none";
  contactus.style.display = "none";
  cart.style.display = "none";
  document.getElementById("blog").style.color = "rgb(1, 190, 190)";
  document.getElementById("home").style.color = "black";
  document.getElementById("shop").style.color = "black";
  document.getElementById("about").style.color = "black";
  document.getElementById("contact").style.color = "black";
  document.getElementById("cart").style.color = "black";
}

function abouts() {
  aboutPage.style.display = "block";
  shoping.style.display = "none";
  mainPage.style.display = "none";
  blogContent.style.display = "none";
  contactus.style.display = "none";
  cart.style.display = "none";
  document.getElementById("blog").style.color = "black";
  document.getElementById("home").style.color = "black";
  document.getElementById("shop").style.color = "black";
  document.getElementById("about").style.color = "rgb(1, 190, 190)";
  document.getElementById("contact").style.color = "black";
  document.getElementById("cart").style.color = "black";
}

function contacts() {
  contactus.style.display = "block";
  aboutPage.style.display = "none";
  shoping.style.display = "none";
  mainPage.style.display = "none";
  blogContent.style.display = "none";
  cart.style.display = "none";
  document.getElementById("blog").style.color = "black";
  document.getElementById("home").style.color = "black";
  document.getElementById("shop").style.color = "black";
  document.getElementById("about").style.color = "black";
  document.getElementById("cart").style.color = "black";
  document.getElementById("contact").style.color = "rgb(1, 190, 190)";
}
function carts() {
  contactus.style.display = "none";
  aboutPage.style.display = "none";
  shoping.style.display = "none";
  mainPage.style.display = "none";
  blogContent.style.display = "none";
  cart.style.display = "block";
  document.getElementById("blog").style.color = "black";
  document.getElementById("home").style.color = "black";
  document.getElementById("shop").style.color = "black";
  document.getElementById("about").style.color = "black";
  document.getElementById("cart").style.color = "rgb(1, 190, 190)";
  document.getElementById("contact").style.color = "black";
}

//  cart
function show(img) {
  let newImg = document.getElementById("newImg");
  newImg.src = img.src;
  document.querySelector(".cart").style.display = "flex";
  contactus.style.display = "none";
  aboutPage.style.display = "none";
  cardMen.style.display = "none";
  cardgirl.style.display = "none";
  mainPage.style.display = "none";
  blogContent.style.display = "none";
}

//Get data from api
async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = res.json();
  // console.log(data);
  data.map((ele) => {
    let createImgEle = document.createElement("img");
    createImgEle.setAttribute("src", ele.image);
    cardgirl.appendChild(createImgEle);
  });
}



let try1 = document.querySelector(".cardContainer");
// let cartContainer = document.querySelector(".addCart");


async function getData() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    // console.log(data);

    // let outerContainer = document.createElement("div");
    // outerContainer.setAttribute("class", "card");
    data.map((ele) => {
      let innerContainer = document.createElement("div");
      innerContainer.setAttribute("class", "card");
     
      let cardText = document.createElement("div");
      cardText.setAttribute("class", "cardText");

      let createImgEle = document.createElement("img");
      let createTitle = document.createElement("p");
      let createTextTitle = document.createTextNode(`${ele.title.slice(0,35)}...`);
      let createPriceElement = document.createElement("p");
      let createPriceText = document.createTextNode(`Price: $${ele.price}`);
      let btnEle = document.createElement("button");
      let btnText = document.createTextNode("Add to cart");
      createTitle.appendChild(createTextTitle);
      createTitle.setAttribute('class',"productTitle")
      createImgEle.setAttribute("src", ele.image);
      //   createImgEle.setAttribute("class", "myImages");
      createPriceElement.append(createPriceText);
      createPriceElement.setAttribute("class","priceElement")
      btnEle.appendChild(btnText);
      
      cardText.appendChild(createTitle);
      cardText.appendChild(btnEle);
      cardText.appendChild(createPriceElement);

      innerContainer.appendChild(createImgEle);
      innerContainer.appendChild(cardText);
      // outerContainer.appendChild(innerContainer);
      
      try1.appendChild(innerContainer);
      function addToCart(img, price) {
        // console.log(`My Image ${img}`);
        // console.log(`My Price  ${price}`)
        let cartOuterContainer=document.createElement('div');
        cartOuterContainer.setAttribute('class','cartBox');
    
        let cartContainer=document.createElement('div');
        cartContainer.setAttribute('class','cart');
        let cartTrashBtn = document.createElement("button");
        cartTrashBtn.setAttribute("class", "trash");

        let cartTrashText = document.createTextNode("Remove");
        cartTrashBtn.appendChild(cartTrashText);

        let cartImgEle = document.createElement("img");
        cartImgEle.setAttribute("src", img);
        cartImgEle.setAttribute("class", "cartImg");
        let cartPriceEle = document.createElement("p");
        cartPriceEle.setAttribute('class',"price");
        let createPriceText = document.createTextNode(`Price : $${price}`);
        cartPriceEle.appendChild(createPriceText);
        cartContainer.appendChild(cartImgEle);
        cartContainer.appendChild(cartPriceEle);
        cartContainer.appendChild(cartTrashBtn);
        cartContainer.setAttribute('class',"card3");
        cartOuterContainer.appendChild(cartContainer);
        cart.appendChild(cartOuterContainer);
        cartTrashBtn.addEventListener("click", () => removeFromCart(cartOuterContainer));
        // cartMainContainer.appendChild(cartContainer);
        alert("Added to cart");
        // location.reload();
      }
      function removeFromCart(item) {
        item.remove();
      }

      btnEle.addEventListener("click", () => addToCart(ele.image, ele.price));
    }
  );

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getData();
