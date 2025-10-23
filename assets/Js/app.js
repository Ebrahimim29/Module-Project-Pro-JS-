import { createProductCard } from "./modules/product.js";
import { products} from "./modules/data.js";

// ایجاد کارت
const productsContainer = document.getElementById('products');
products.forEach(product => {
    const card = createProductCard(product);
    productsContainer.appendChild(card);
});
