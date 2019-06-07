import { ProductApi } from './../services/resources/index';
window.onload = () => {
    const products = ProductApi.getProducts();
    if (!products) {
        console.log("data null");
        return;
    }
    // Insert hmtl elements in dom
    const container = getProductsContainer();
    if (!container) {
        console.log("container null");
        return;
    }
    for (let product of products) {
        let ele = getComponent(product);
        container.appendChild(ele);
    }
};
function getComponent(data) {
    if (!data) {
        return;
    }
    const el = document.createElement("div");
    const childEle = document.createElement("div");
    el.className = "product-container";
    childEle.className = "inner-product-container";
    const { title, buildDate, shortDescription } = data;
    const titleEle = document.createElement("div");
    const dateEle = document.createElement("div");
    const descriptionEle = document.createElement("div");
    titleEle.innerText = title;
    dateEle.innerText = buildDate;
    descriptionEle.innerText = shortDescription;
    childEle.appendChild(titleEle);
    el.appendChild(childEle);
    return el;
}
function getProductsContainer() {
    return document.querySelector("#products-container");
}
