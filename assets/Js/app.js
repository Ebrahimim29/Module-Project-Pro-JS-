import { images1, images2, products } from "./modules/data.js";
import { createProductCard } from "./modules/product.js";
import { createAutoSlider } from "./modules/slider.js";
import { toggleTheme } from "./modules/theme.js";

//ایجاد کارت
const productsContainer = document.getElementById('products');
products.forEach(product =>{
  const card = createProductCard(product);
  productsContainer.appendChild(card);
});

//اسلایدر
createAutoSlider('slider1', images1, 500);
createAutoSlider('slider2', images2, 4000);

//رویداد کلیک دکمه برای تغییر تم
document.getElementById('themeToggle').onclick = toggleTheme;