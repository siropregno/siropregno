let initialGold = 0
const cart = []

let myGold = JSON.stringify(initialGold);
let currentGold = localStorage.getItem("myGold");


function currentMoney() {document.getElementById("money").innerHTML = 
`<p id="moneynumber">${currentGold}</p>`
}
currentMoney()

function addToInventory(item){ cart.push(item); document.getElementById("tablabodyinv").innerHTML += `
    <tr>
        <td>${item.id}</td>
        <td><img id="icon" src=${item.image} alt="..."></td>
        <td id="${item.category}" >${item.name}</td>
        <td>${item.price}</td>
    </tr>
    `;
}

function renderizeItems() { for(const item of itemIds) { document.getElementById("tablabody").innerHTML += 
        `<tr>
            <td>${item.id}</td>
            <td><img id="icon" src=${item.image} alt="..."></td>
            <td id="${item.category}">${item.name}</td>
            <td>${item.price}</td>
            <td><button id='btn${item.id}' class="btn btn-primary">Buy now</button></td>
         </tr>`
        };

        itemIds.forEach((item)=>{ document.getElementById(`btn${item.id}`).addEventListener("click",function(){buyNow(item);}); });
}
renderizeItems()

function buyNow(item) { if (item.price <= currentGold ){

    Swal.fire({
        title: 'Are you sure you want to buy this item?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Buy'
      }).then((result) => {
        if ((result.isConfirmed)) { currentGold -= item.price; localStorage.setItem("myGold",currentGold); currentMoney(); addToInventory(item);
            Swal.fire(
            'Item purchased!',
            'Item successfully added to your inventory.',
            'success' )}


        })}
        else {Swal.fire("You don't have enough gold!")}
}

function buyPoints() {

Swal.fire({
    title: 'Are you sure you want to complete the transaction?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Buy points'
  }).then((result) => {
    if (result.isConfirmed) { currentGold += 10000; localStorage.setItem("myGold",currentGold); currentMoney();
      
      
        Swal.fire(
        'Transaction completed!',
        'Enjoy your points.',
        'success' )}})}