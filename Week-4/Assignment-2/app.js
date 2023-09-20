function ajax(src, callback) {
  const productRequest = new XMLHttpRequest();
  productRequest.onreadystatechange = function () {
    if (productRequest.readyState === 4) {
      const data = JSON.parse(productRequest.responseText);
      callback(data);
      console.log(data);
    }
  };
  productRequest.open("GET", src);
  productRequest.send();
}

function render(data) {
  const products = document.getElementsByClassName("product");
  console.log(products.length);
  for (let i = 0; i < products.length; i++) {
    const name = document.createElement("div");
    const price = document.createElement("div");
    const description = document.createElement("div");
    name.innerHTML = `name: ${data[i].name}`;
    price.innerHTML = `price: ${data[i].price}`;
    description.innerHTML = `description: ${data[i].description}`;
    products[i].appendChild(name);
    products[i].appendChild(price);
    products[i].appendChild(description);
  }
}

ajax(
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products",
  function (response) {
    render(response);
  }
);
