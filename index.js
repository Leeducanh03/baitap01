let productArray = [
    {
        image: "./image/anh2.jpg",
        name: "AirPod",
        price: "USD 249000000",
        prices: 249000000,
        amount: 0,
        id: 1
    }, {
        image: "./image/anh3.jpg",
        name: "Nintendo Switch",
        price: "USD 299",
        prices: 299,
        amount: 0,
        id: 2
    }, {
        image: "./image/anh4.jpg",
        name: "PS5",
        price: "USD 499",
        prices: 499,
        amount: 0,
        id: 3
    }, {
        image: "./image/anh5.jpg",
        name: "Xbox Series X",
        price: "USD 499",
        prices: 499,
        amount: 0,
        id: 4
    }, {
        image: "./image/anh6.jpg",
        name: "Iphone 14 Pro Max",
        price: "USD 1,599",
        prices: 1.599,
        amount: 0,
        id: 5
    }, {
        image: "./image/anh7.jpg",
        name: "Samsung S22 Ultra",
        price: "USD 1,399",
        prices: 1.399,
        amount: 0,
        id: 6
    }, {
        image: "./image/anh8.jpg",
        name: "MacBook Pro 14' M1 Max",
        price: "USD 4,699",
        prices: 4.699,
        amount: 0,
        id: 7
    }, {
        image: "./image/anh9.jpg",
        name: "2022 Mac Studio M1 Ultra",
        price: "USD 6,999",
        prices: 6.999,
        amount: 0,
        id: 8
    }, {
        image: "./image/anh10.jpg",
        name: "Pro Gaming PC",
        price: "USD 4,950",
        prices: 4.950,
        amount: 0,
        id: 9
    }, {
        image: "./image/anh11.jpg",
        name: "Razer Blade 14 Top spec",
        price: "USD 2,799",
        prices: 2.799,
        amount: 0,
        id: 10
    }
]
function showProducts() {
    let products = ""
    for (let i = 0; i < productArray.length; i++) {
        products += `
       <div class="element">
       <img src= "${productArray[i].image}" alt="AirPod">
       <p id="name">${productArray[i].name}</p>
       <span id="${productArray[i].price}">${productArray[i].price}</span>
       <div class="buyAndSellContainer" data-price="249">
           <button onclick = decreaseAmount(${productArray[i].id}) id = "disabled${productArray[i].id}" disabled class="btn-sell" >Sell</button>
           <span id="amount${productArray[i].id}">${productArray[i].amount}</span>
           <button onclick = accreteAmount(${productArray[i].id}) id = "amount${productArray[i].id}" class="btn-buy" >Buy</button>
       </div>
   </div>
       `
    }
    document.getElementById("allElement").innerHTML = products;
}

showProducts();
let btnBuy = document.getElementsByClassName("btn-buy");
let btnSell = document.getElementsByClassName("btn-sell");
// let spans = document.getElementById("amount");
let totalMoney = 217000000000
let totalTien = totalMoney
let sum = 0;
let totalParent = 0;
document.getElementById('money').innerHTML = `Remaining:${totalMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} USD`
document.getElementById('percent').innerHTML = `You only spent 0.000000 % of the total!`
function accreteAmount(idProduct) {
    for (let i = 0; i < productArray.length; i++) {
        if (productArray[i].id == idProduct) {
            // console.log(idProduct);
            let count = document.getElementById(`amount${idProduct}`);
            productArray[i].amount = ++count.innerHTML;
            totalMoney = totalMoney - productArray[i].prices
            document.getElementById('money').innerText = `Remaining:${totalMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} USD`
            sum = sum + productArray[i].prices
            console.log(sum, "65666666");
            // productArray[i].amount++
            // console.log(productArray[i].amount);
            if (count.innerHTML !== 0) {
                document.getElementById(`disabled${productArray[i].id}`).disabled = false;
            }
        }
    }
    console.log(document.getElementById('percent').innerText);
    document.getElementById('percent').innerHTML = `You only spent ${((sum / totalMoney) * 100).toFixed(6)} % of the total!`
    console.log(`${((sum / totalMoney) * 100).toFixed(6)}`);
    
}
function decreaseAmount(idProduct) {
    for (let i = 0; i < productArray.length; i++) {
        if (productArray[i].id == idProduct) {
            let count = document.getElementById(`amount${idProduct}`).innerHTML;
            count--;
            document.getElementById(`amount${idProduct}`).innerHTML = count
            totalMoney = totalMoney + productArray[i].prices
            document.getElementById('money').innerHTML = `Remaining:${totalMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} USD`
            // sum = sum - productArray[i].amount * productArray[i].prices
            // document.getElementById('percent').innerText = `You only spent ${(sum / totalMoney).toFixed(7)}% of the total!`

            if (count == 0) {
                document.getElementById(`disabled${productArray[i].id}`).disabled = true;
            } else {
                document.getElementById(`disabled${productArray[i].id}`).disabled = false;
            }
        }
    }
}
































// function showData() {
//     let btnSell = document.getElementsByClassName("btn-sell");
//     let btnBuy = document.getElementsByClassName("btn-buy");
//     let spands = document.getElementById("amount");
//     console.log(btnBuy);
//     function accreteAmount(idProduct) {
//         let findIndexIdProduct = productArray.findIndex((itemProduct)=> {
//             return itemProduct.id === idProduct;
//         })
//         productArray[findIndexIdProduct].amount += 1
//         showProducts()
//     }
//     if(amount === 0){
//         btnSell.disabled = true ;
//     }
//     function decreaseAmount(idProduct) {
//         let findIndexIdProduct = productArray.findIndex((itemProduct)=> {
//             return itemProduct.id === idProduct;
//         })
//         productArray[findIndexIdProduct].amount -=1
//         showProducts()
//     }
// }