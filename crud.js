const productName = document.getElementById("pn");
const productPrics = document.getElementById("pp");
const productCategory = document.getElementById("pc");
const productDesc = document.getElementById("pd");

let kobry;
let allProducts = []

if (localStorage.getItem('allProducts') != null) {
    allProducts = JSON.parse(localStorage.getItem('allProducts'))
    disblayAllProducts()
}

function addNewElemant() {
    if (document.getElementById('addBtn'.trim()).innerText == 'ADD') {
        let product = {
            name: productName.value,
            price: productPrics.value,
            category: productCategory.value,
            desc: productDesc.value,
        }
        allProducts.push(product)
        console.log(allProducts);
        localStorage.setItem('allProducts', JSON.stringify(allProducts))
        ClearForm()
        disblayAllProducts()
    }
    else {
        let updateProduct = {
            name: productName.value,
            price: productPrics.value,
            category: productCategory.value,
            desc: productDesc.value,
        }
        allProducts.splice(kobry, 1, updateProduct)
        localStorage.setItem('allProducts', JSON.stringify(allProducts))
        disblayAllProducts()
        ClearForm()
        document.getElementById('addBtn').innerText = 'ADD'
    }
}

function ClearForm() {
    productName.value = ''
    productPrics.value = ''
    productCategory.value = ''
    productDesc.value = ''
}

function disblayAllProducts() {
    let cartona = ''
    for (let i = 0; i < allProducts.length; i++) {
        cartona += ` <tr>

        <td> ${allProducts[i].name} </td>
        <td>${allProducts[i].price}</td>
        <td>${allProducts[i].category}</td>
        <td>${allProducts[i].desc}</td>
        <td> <button onclick='deleteProduct( ${i} )' class="btn btn-danger " >Delete</button> </td>
        <td> <button onclick='updateProduct( ${i} )' class="btn btn-warning  " >Update</button> </td>
        
        </tr> `
    }
    document.getElementById('tbody').innerHTML = cartona
}

function deleteProduct(index) {
    allProducts.splice(index, 1)
    disblayAllProducts()
    localStorage.setItem('allProducts', JSON.stringify(allProducts))
}

function updateProduct(index) {
    kobry = index
    productName.value = allProducts[index].name
    productPrics.value = allProducts[index].price
    productCategory.value = allProducts[index].category
    productDesc.value = allProducts[index].desc

    document.getElementById('addBtn').innerText = 'Update'
}

const search = (term) => {
    let cartona = ''
    for (let i = 0; i < allProducts.length; i++) {
        if (allProducts[i].name.toLowerCase().indexOf(term.toLowerCase()) == 0 ||
            allProducts[i].category.toLowerCase().includes(term.toLowerCase())) {
            cartona += ` <tr>

                <td> ${allProducts[i].name} </td>
                <td>${allProducts[i].price}</td>
                <td>${allProducts[i].category}</td>
                <td>${allProducts[i].desc}</td>
                <td> <button onclick='deleteProduct( ${i} )' class="btn btn-danger " >Delete</button> </td>
                <td> <button onclick='updateProduct( ${i} )' class="btn btn-warning  " >Update</button> </td>
    
                </tr> `
        }
    }
    document.getElementById('tbody').innerHTML = cartona

}



