function displayCategories(elm){
    elm.innerHTML = "";
    for(let p in products){

        let pd = '<div class="card m-5">'+
                    '<img src="'+products[p].imgs[0] +'" alt="'+products[p].title+'" class="card-img-top">'+
                    '<div class="card-body">' +
                     '   <h5 class="card-title">'+products[p].title+'</h5>' +
                        '<p class="card-text"> Item</p>' +
                        '<p class="card-text">$'+products[p].price+'</p>' +
                        '<p class="card-text"><small class="text-body-secondary">updated 1 min. ago </small></p>' +
                        '<button type="button" class="btn btn-primary" data-id="'+p+'" onclick="displayDetails(this)">Details</button>' +  
                        
                        '<button type="button" class="btn btn-primary" button onclick="+addToCart(, products[p].price)+">Add to Cart</button>' +
                    '</div>' +
                '</div>' 
        elm.innerHTML +=pd 
    }   
}
let cart = [];

  function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    updateCart();
  }

document.addEventListener("DOMContentLoaded", ()=>{

    displayCategories(document.getElementById("productCat"))
    document.getElementById("productDetails").style.display= "none"

})

function displayDetails(elm){
    let pid = elm.dataset.id 
    var imglist ="" 
    products[pid].imgs.forEach(src=>{
        imglist +='<img src="'+src +'" alt="'+products[pid].title+'" class="card-img-top">'     
    })
    let details = '<div class="card m-5">'+
                   
                    imglist+
                    '<div class="card-body">' +
                     '   <h5 class="card-title">'+products[pid].title+'</h5>' +
                        '<p class="card-text"> Here are some great options for your style</p>' +
                        '<p class="card-text">$'+products[pid].price+'</p>' +
                        '<p class="card-text"><small class="text-body-secondary">updated 1 min. ago </small></p>' +
                        '<button type="button" class="btn btn-danger" data-id="'+pid+'" onclick="closeDetails(this)">Close</button>' +
                        '<button type="button" class="btn btn-primary" data-id="'+pid+'" onclick="addToShoppingCart(this)">Add</button>' +
                    '</div>' +
                '</div>' 
    document.getElementById("productCat").style.visibility = "none"
    document.getElementById("productDetails").style.display = "flex"
    document.getElementById("productDetails").innerHTML = details
}

function closeDetails(){
    displayCategories(document.getElementById("productCat"))
    document.getElementById("productCat").style.display="flex"
    document.getElementById("productDetails").innerHTML = ""
    document.getElementById("productDetails").style.display= "none"
}

function addToShoppingCart(elm){
    let pid = elm.dataset.id
    let price = products[pid].price
    let qty = 1
    let shoppingCart=[]

    if(Cookies.get("shoppingcart")){
        shoppingCart = JSON.parse(Cookies.get("shoppingcart"))
        shoppingCart.forEach(p=>{
            if(p.pid == pid){
                p.qty+=1

            }
        })
        if(hasUpdated){
            Cookies.set("shoppingcart", JSON.stringify(shoppingCart))
        }else{
            shoppingCart.push({"pid":pid, "qty":qty, "price":price})
            Cookies.set("shoppingcart", JSON.stringify(shoppingCart))
        }
        
    }else{
        Cookies.set("shoppingcart", JSON.stringify(shoppingCart))

    }
  
}