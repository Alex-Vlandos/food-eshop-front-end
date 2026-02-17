class shoppingForm{
  constructor(){
  this.appetizersIcons=["https://i.ytimg.com/vi/8pAJlcIZJmw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA9bt4fGO7oyRCai5glv2FZSq_gTg",
  "https://www.powerinmeat.gr/wp-content/uploads/2021/11/Kotompoukies-pane-propsimenes.jpg",
  "https://eportorico.gr/wp-content/uploads/2021/03/%CE%A6%CE%AD%CF%84%CE%B1-%CE%A8%CE%B7%CF%84%CE%AE.jpg",
  "https://www.xima.gr/wp-content/uploads/2020/06/maniraria-pleurwtous-new.jpg"];
  this.appetizersName=["Cheese Croquettes","Chicken Bites","Greek Feta","Pleurotus Mushrooms"];
  this.appetizersPrice=["6.90 €","7.90 €","6.90 €","8.60 €"];
  this.appetizersDescription=["Chesse croquettes:The filling is a mixture of mozzarella cheese,<br> cream, flour and butter breaded with breadcrumbs.",
  "Chicken bites:Crispy, breaded, tender white-meat pieces with mustard dijon <br>on the side.","Greek feta with oregano and extra virgin olive oil.",
  "Crispy pan-fried pleurotus mushrooms sauteed with butter,<br> garlic and parsley leaves."];
  this.mainlyIcons=["https://www.foodandwine.com/thmb/2k2Kq24_fMvHCyLMPRSNrpg5QdE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/beef-wellington-FT-RECIPE0321-c9a63fccde3b45889ad78fdad078153f.jpg",
    "https://thebigmansworld.com/wp-content/uploads/2023/10/meatballs-and-gravy-recipe.jpg",
    "https://littlesunnykitchen.com/wp-content/uploads/2021/10/Baked-Chicken-and-Potatoes-1-2.jpg",
    "https://www.gressinghamduck.co.uk/wp-content/uploads/2022/11/tamarind-1440x686.jpg"];
  this.mainlyName=["Beef wellington","Meatballs in gravy","Marinated Chicken Fillet","Duck breast "];
  this.mainlyPrice=["17.00 €","12.00 €","12.00 €","15.00 €"];
  this.mainlyDescription=["Beef wellingtonn:Beef tenderloin cooked in a rich pastry crust <br> and embellished with pate de fois gras, truffles and cognac",
  "Meatballs in gravy:Tender meatballs smothered in brown gravy <br> with onions and served over creamy mashed potatoes.",
  "Chicken fillet marinated in a mix of soy sauce,Worcestershire sauce,<br>garlic powder and dried rosemary,with baby potatoes on the side",
  "Duck breast marinated with tamarind and ale sauce served <br> with mashed potatoes"];
  this.drinksIcons=["https://punchdrink.com/wp-content/uploads/2021/07/Social-Kingston-Negroni-Rum-Cocktail-Recipe.jpg",
  "https://www.thespruceeats.com/thmb/0noKFvArOC2N2Eg4pA7uwc0bC30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gin-and-tonic-recipe-759300-hero-01-aa12e6504f944c54b8b9c589cc1d0ac6.jpg",
  "https://hips.hearstapps.com/hmg-prod/images/black-russian-cocktail-3-1673360088.jpg",
  "https://cdn4.tuscanynowandmore.com/storage/app/media/discover-italy/amaretto-main-img.jpg"];
  this.drinksName=["Negroni cocktail","Gin Tonic","Black russian cocktail","Amaretto liquer"];
  this.drinksPrice=["8.30 €","9.00 €","10.00 €","7.50 €"];
  this.drinksDescription=["The Negroni is a classic cocktail. Equal parts gin, sweet vermouth, and bitter Campari come together to make the perfect sip.<br> Served in a glass with a big ice cube",
  "Gin tonic:Poured gin over ice,tonic water and lime juice, garnished with lime wedge.",
  "The Black Russian is a cocktail of vodka and coffee liqueur,served in a glass with ice cubes.",
  "Amaretto is a fragrant almond flavoured liqueur. <br> Traditionally, the almond flavour and slight bitterness come from oil extracted from bitter apricot kernels."];
  this.cart = JSON.parse(localStorage.getItem("cart")) || {};
  }
  startShopping(){
    document.getElementById("myCard").innerHTML=
    ` <div class="dropdown" id="dropdownCategories">
        <button id="menuButton" class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Menu
        </button>
        <div id="categoryTitle"></div>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#"><button style="color:black;" onclick="shop.appetizers()" type="button" class="btn">Appetizers</button></a></li>
          <li><a class="dropdown-item" href="#"><button style="color:black;" onclick="shop.mainlyDishes()" type="button" class="btn">Mainly dishes</button></a></li>
          <li><a class="dropdown-item" href="#"><button style="color:black;" onclick="shop.drinks()" type="button" class="btn">Drinks</button></a></li>
        </ul>
      </div>
          <div class="row">
            <div id="leftTable" class="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7"></div>
            <div id="emptyDiv" class="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1"></div>
            <div id="rightTable" class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <h2>My cart</h2>
              <div id="cartItems"></div>
              <div id="totalAmount"><h3>Total Amount:</h3>0.00€</div>
              <button id="submitOrderButton" type="button" onclick="shop.submitOrder()" class="btn btn-dark mt-2">Submit order</button>
          </div>
          `
          this.showCart();
          this.totalAmount();
          document.getElementById("myCard").classList.add("rotate-on-hover");
          setTimeout(()=>{
              let buttons=Array.from(document.getElementsByClassName("btn")).filter((btn) => {!btn.classList.contains("dropdown-toggle") && btn.id!=="submitOrderButton" && btn.id!=="confirmButton" && btn.id!=="cancelButton"});
              for(let j=0;j<buttons.length;j++){
                  buttons[j].addEventListener("click",()=>{
                     document.getElementById("categoryTitle").innerHTML=`<h2>${buttons[j].innerHTML}</h2>`;
                  },0);
              }
          })
  };
  appetizers(){
      this.showProducts(this.appetizersIcons,this.appetizersDescription,this.appetizersPrice,this.appetizersName,"Appetizers");
  }
  mainlyDishes(){
      this.showProducts(this.mainlyIcons,this.mainlyDescription,this.mainlyPrice,this.mainlyName,"Mainly dishes");    
  }
  drinks(){
      this.showProducts(this.drinksIcons,this.drinksDescription,this.drinksPrice,this.drinksName,"Drinks");
  }
  showProducts(image,description,price,name,category){
        document.getElementById("leftTable").innerHTML="";
        for(let i=0;i<description.length;i++){
                document.getElementById("leftTable").innerHTML+=
            `<ul class="list-group pb-2">
                  <li class="list-group-item">
                    <div class="row">
                      <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 myTable">
                        <img class="img-fluid image"src=${image[i]}>
                      </div>
                      <div id="emptyDiv" class="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1"></div>
                      <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 paddingTable">
                          ${description[i]}
                      </div>
                      <div id="emptyDiv" class="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1"></div>
                      <div class="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 paddingTable">
                          ${price[i]}
                      </div>
                      <div class="btn-group quantityButtons" role="group" aria-label="Basic mixed styles example">
                            <button id="minusButton-${category}-${i}" type="button" class="btn btn-success">-</button>
                            <button id="plusButton-${category}-${i}" type="button" class="btn btn-success">+</button>
                      </div>
                    </div>
                    </li>
              </ul>`;
              
              setTimeout(() => {
                    document.getElementById(`plusButton-${category}-${i}`).addEventListener("click", () => {      
                        let quantity = this.cart[name[i]] ? this.cart[name[i]].quantity : 0;
                        quantity += 1;
                        this.updateCart(name[i], quantity, price[i]);
                    });

                    document.getElementById(`minusButton-${category}-${i}`).addEventListener("click", () => {
                        let quantity = this.cart[name[i]] ? this.cart[name[i]].quantity : 0;
                        if (quantity > 0) {
                            quantity -= 1;
                            this.updateCart(name[i], quantity, price[i]);
                        }});
                }, 0);
                   
          }
    }
  updateCart(name,quantity,price){
    if(quantity<=0){
    delete this.cart[name];
    }
    else{
    price=(quantity * Number.parseFloat(price.replace("€",""))).toFixed(2)+"€";
    this.cart[name]={quantity:quantity,price:price};
    }
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.showCart();
    this.totalAmount();
    }
  showCart(){  
    document.getElementById("cartItems").innerHTML="";
    if(Object.keys(this.cart).length===0){document.getElementById("cartItems").innerHTML=`<p class="empty-cart">Your cart is empty!</p>`}
    else{
    for(let item in this.cart){
      document.getElementById("cartItems").innerHTML+=
      ` <ul class="list-group pb-2">
          <li class="list-group-item">
            <div class="row">
              <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 paddingTable">
                ${item}
              </div>
              <div id="emptyDiv" class="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1"></div>
              <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 paddingTable">
                ${this.cart[item].quantity}
              </div>
              <div id="emptyDiv" class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
              <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 paddingTable">
                ${this.cart[item].price}
              </div> 
            </div>
            </li>
      </ul>`;}
    }
    }
  totalAmount(){
    let total=0.00;
    if(Object.keys(this.cart).length === 0) {
      document.getElementById("totalAmount").innerHTML = `<h3>Total amount:</h3> 0.00€`;}
    
    for(let item in this.cart){
      total+=Number.parseFloat(this.cart[item].price.replace("€",""));
      
      document.getElementById("totalAmount").innerHTML=`<h3>Total amount:</h3>${total.toFixed(2)}€`;}
      return total;
    }
    submitOrder() {
      let total = 0.00;
      for (let item in this.cart) {
        total += Number.parseFloat(this.cart[item].price.replace("€", ""));
      }

      if (total === 0.00) {
        document.getElementById("modal-body").style.display="none";
        document.getElementById("modal-footer").style.display="none";
        document.getElementById("modal-title").innerHTML="You must add at least one item in cart!";
        new bootstrap.Modal(document.getElementById('orderModal')).show();
      } else {
        document.getElementById("modal-title").innerHTML="Confirm or cancel order!"
        document.getElementById("modal-body").style.display="initial";
        document.getElementById("modal-footer").style.display="initial";
        document.getElementById("loading").style.display = "block";
        setTimeout(()=>{
          loading.style.display = "none";
          let cartData = JSON.parse(localStorage.getItem("cart"));
          let orderList = document.getElementById("orderList");
          orderList.innerHTML = "";
              for (let item in cartData) {
                  let listItem = document.createElement("li");
                  listItem.textContent = `${item} - ${cartData[item].quantity} x ${cartData[item].price}`;
                  orderList.appendChild(listItem);
              }
              document.getElementById("finalAmount").innerHTML=`Total Amount:${this.totalAmount().toFixed(2)}€`
          var orderModal = new bootstrap.Modal(document.getElementById('orderModal'));
          orderModal.show();
        },2000);
      }
    }
}
let shop=new shoppingForm();
document.addEventListener("DOMContentLoaded", function () {
  let fish = document.getElementById("fish");
  let td = fish.closest("td");

  td.style.position = "relative";
  fish.style.position = "absolute";

  let tdRect = td.getBoundingClientRect();
  let fishRect = fish.getBoundingClientRect();

  let x = fishRect.left - tdRect.left;
  let y = fishRect.top - tdRect.top;

  let speedX = window.innerWidth < 768 ? 0.2 : 0.5;
  let speedY = window.innerWidth < 768 ? 0.2 : 0.5;

  function moveFish() {
    let tdRect = td.getBoundingClientRect();
    let fishRect = fish.getBoundingClientRect();

    let maxX = Math.max(0, tdRect.width - fishRect.width);
    let maxY = Math.max(0, tdRect.height - fishRect.height);

    if (x <= 0 || x >= maxX) {speedX = -speedX;}
    if (y <= 0 || y >= maxY) {speedY = -speedY;}

    x = Math.min(maxX, Math.max(0, x + speedX));
    y = Math.min(maxY, Math.max(0, y + speedY));

    fish.style.left = x + "px";
    fish.style.top = y + "px";

    requestAnimationFrame(moveFish);
  }

  moveFish();
});

function confirmOrCancelOrder(event) {
  let text=event.target.innerText;
  if(text==="Confirm Order"){
  document.getElementById("modal-body").style.display="none";
  document.getElementById("modal-footer").style.display="none";
  document.getElementById("modal-title").innerHTML="Your order was succesfully submitted!";
  setTimeout(()=>{localStorage.removeItem("cart");
  window.location.href = "eshop.html";},2000);
  }
  else if(text==="Cancel Order"){
  document.getElementById("modal-body").style.display="none";
  document.getElementById("modal-footer").style.display="none";
  document.getElementById("modal-title").innerHTML="Your order was cancelled!";
  setTimeout(()=>{localStorage.removeItem("cart");
  window.location.href = "eshop.html";},2000);
  }
}
document.getElementById("stopRotation").addEventListener("click",()=>{
  document.getElementById("myCard").classList.remove("rotate-on-hover");
});

document.getElementById("startRotation").addEventListener("click",()=>{
  document.getElementById("myCard").classList.add("rotate-on-hover");
});



