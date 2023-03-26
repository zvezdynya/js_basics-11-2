const firstPrices = document.querySelectorAll('.price');
const discountPrices = document.querySelectorAll('.discount_price');
const weigths = document.querySelectorAll('.weight');
console.log(weigths);

const allProducts = document.querySelector('.all_products');
const allDiscount = document.querySelector('.all_discount');
const total = document.querySelector('.total');
const btnDiscount = document.querySelector('#discount');
const currency = ' руб.';
const weightCurrency = ' кг.';

let weight = 0;
const backetWeight = () => {
    weigths.forEach(el => {
        weight += +el.textContent;
    });
    return weight.toFixed(2);
};

let sum = 0;
let discountSum = 0;

const discountTotal = () => { 
    for (let i = 0; i < firstPrices.length; i++) {
        firstPrices[i].style.textDecoration = 'line-through';
        discountPrices[i].setAttribute('value', (+firstPrices[i].value - (firstPrices[i].value * 0.2)));
        discountSum += + discountPrices[i].value;
    }
    return discountSum;
};

const calcTotal = () => {
    firstPrices.forEach(el => {
        sum += +el.value;
    });
    return sum;
};

function outTotal() {
    sum = 0;
    weight = 0;
    allProducts.innerHTML = '';
    return allProducts.innerHTML = `Всего товаров(${firstPrices.length}/${backetWeight() + weightCurrency}): <span>${calcTotal()}${currency}</span>`;
}

function outDiscount() {
    sum = 0;
    discountSum = 0;
    allDiscount.innerHTML = '';
    return allDiscount.innerHTML = `Скидка: <span>${calcTotal() - discountTotal()}${currency}</span>`;
}

function outDiscountTotal() {
    discountSum = 0;
    total.innerHTML = '';
    return total.innerHTML = `Итоговая стоимость: <span>${discountTotal()}${currency}</span>`;
}

function outAllData () {
    outTotal();
    outDiscount();
    outDiscountTotal();
}

document.addEventListener('DOMContentLoaded', function() {
    outTotal();
});

btnDiscount.addEventListener('click', outAllData, {once: true});

//del elem

const buttonsDelete = document.querySelectorAll('.delete');
console.log(buttonsDelete);

buttonsDelete.forEach(btn => {
    btn.addEventListener('click', (evt) => {
        const target = evt.target;
        const targetParent = target.closest('article');
        targetParent.remove();
    });
});