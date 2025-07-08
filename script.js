//-- use prompt to get user information and store it in an object

let userInfo = {
  name: "",
  age: "",
  job: "",
};

let name = document.getElementById("name");
let age = document.getElementById("age");
let job = document.getElementById("job");
let form = document.getElementById("userForm");
let userList = document.getElementById("userTableBody");
let addBtn = document.querySelector(".register");
let deleteBtn = document.querySelector(".delete");

const findListItem = (name) =>
  [...userList.children].find((li) => li.textContent.includes(name));

addBtn.addEventListener("click", (e) => {
  const nameValue = name.value.trim();
  const ageValue = age.value.trim();
  const jobValue = job.value.trim();
  if (nameValue && ageValue && jobValue) {
    userInfo.name = nameValue;
    userInfo.age = ageValue;
    userInfo.job = jobValue;
    const listItem = document.createElement("tr");
    [nameValue, ageValue, jobValue].forEach((input) => {
      const cell = document.createElement("td");
      cell.textContent = input;
      listItem.appendChild(cell);
    });
    userTableBody.appendChild(listItem);
    form.reset();
  }
});
deleteBtn.addEventListener("click", (e) => {
  const nameValue = name.value.trim();
  if (nameValue) {
    const listItem = findListItem(nameValue);
    if (listItem) {
      userList.removeChild(listItem);
      alert(`${nameValue} adlı kullanıcı silindi.`);
    } else {
      alert(`${nameValue} adlı kullanıcı bulunamadı.`);
    }
  } else {
    alert("Lütfen silmek istediğiniz kullanıcının adını giriniz.");
  }

  form.reset();
});

/*


// -- use prompt to get user information and store it in an object


const obj = {
  name: "",
  age: "",
  job: "",
};

let name = prompt("Enter your name: ");
obj.name = name;
let age = prompt("Yaş giriniz: ");
obj.age = age;
let job = prompt("mesleği giriniz: ");
obj.job = job;
console.log("Kullanıcı bilgileri: " + JSON.stringify(obj));




// -- add product name and price by using array and object

const products = [];

function addProduct() {
  while (true) {
    const productName = prompt("Ürün adını giriniz (çıkmak için q basınız): ");
    if (productName === null) return;
    if (productName.trim().toLowerCase() === "q") {
      break;
    }

    const productPrice = parseFloat(prompt("Ürün fiyatını giriniz: "));

    if (isNaN(productPrice) || productPrice <= 0) {
      alert("Lütfen geçerli bir fiyat giriniz.");
      continue;
    }

    // Add product to the array
    const product = {
      name: productName,
      price: productPrice,
    };

    products.push(product);

    console.log(
      `${product.name} ürünü sepete eklendi. Fiyat: ${product.price.toFixed(
        2
      )} TL`
    );
  }

  // Summarize the products
  console.log("Sepetteki ürünler:");
  console.table(products);
  const total = products.reduce((sum, p) => sum + p.price, 0);
  console.log(`Toplam tutar: ${total.toFixed(2)} TL`);
}

function removeProduct() {
  const productName = prompt("Silmek istediğiniz ürünün adını giriniz: ");
  const index = products.findIndex((p) => p.name === productName);
  if (index !== -1) {
    const removedProduct = products.splice(index, 1)[0];
    console.log(`${removedProduct.name} ürünü sepetten silindi.`);
    console.log("Sepetteki ürünler:");
    console.table(products);
    const total = products.reduce((sum, p) => sum + p.price, 0);
    console.log(`Toplam tutar: ${total.toFixed(2)} TL`);
  } else {
    console.log("Ürün bulunamadı.");
  }
}

*/
