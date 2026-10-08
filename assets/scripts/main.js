import { teaObject } from '../data.js'

const titleProduct = document.querySelector('.product-name');
const procutCategory = document.querySelector('.product-category');
const select = document.getElementById('packaging');
const priceEl = document.getElementById('price');
const oldEl = document.getElementById('oldPrice');
const articleEl = document.getElementById('article');

titleProduct.textContent = teaObject.name;
procutCategory.textContent = teaObject.category

teaObject.packaging.forEach((item, index) => {
	const option = document.createElement('option');
	option.value = index;
	option.textContent = `${item.weight} г`;
	select.appendChild(option);
});

function updatePrice() {
	const item = teaObject.packaging[select.value];
	priceEl.textContent = `${item.price.toFixed(2)} ₽`;
	articleEl.textContent = `Артикул: ${item.article}`;

	if (item.oldPrice && item.oldPrice > item.price) {
		oldEl.textContent = `${item.oldPrice.toFixed(2)} ₽`;
		oldEl.style.display = '';
	} else {
		oldEl.style.display = 'none';
	}
}

select.addEventListener('change', updatePrice);

updatePrice();