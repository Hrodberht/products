const productDOM = document.querySelector(".product");
const url =
  "https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog";

const fetchProduct = async () => {
  try {
    productDOM.innerHTML = '<h4 class="product-loading">Loading...</h4>';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    productDOM.innerHTML =
      '<p class="error">There was a problem loading the product. Please try again later.</h4>';
  }
};

const displayProduct = (product) => {
  console.log(product);
};

const start = async () => {
  const data = await fetchProduct();
  displayProduct(data);
};

start();
