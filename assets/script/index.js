const firstPrices = document.querySelectorAll('.price'); //получаем все цены
const discountPrices = document.querySelectorAll('.discount_price'); //получаем инпуты для цен после дисконта
const weigths = document.querySelectorAll('.weight'); //получаем вес каждого товара
const allProducts = document.querySelector('.all_products'); //вывод общего количества товаров
const allDiscount = document.querySelector('.all_discount'); //вывод общей скидки
const total = document.querySelector('.total'); //общая стоимость корзины
const btnDiscount = document.querySelector('#discount'); //кнопка купона на скидку
const currency = ' руб.';
const weightCurrency = ' кг.';

let weight = 0;
const backetWeight = () => {
    weigths.forEach(el => {
        weight += +el.textContent;
    });
    return weight.toFixed(2);
}; //высчитываем суммарный вес корзины

let sum = 0;
let discountSum = 0;

const discountTotal = () => { 
    for (let i = 0; i < firstPrices.length; i++) {
        firstPrices[i].style.textDecoration = 'line-through';
        discountPrices[i].setAttribute('value', (+firstPrices[i].value - (firstPrices[i].value * 0.2)));
        discountSum += + discountPrices[i].value;
    }
    return discountSum;
}; //считаем общую сумму скидки и добавляем новую стоимость для товаров

const calcTotal = () => {
    firstPrices.forEach(el => {
        sum += +el.value;
    });
    return sum;
}; //считаем общую стоимость товаров до скидки

function outTotal() {
    sum = 0;
    weight = 0;
    allProducts.innerHTML = '';
    return allProducts.innerHTML = `Всего товаров(${firstPrices.length}/${backetWeight() + weightCurrency}): <span>${calcTotal()}${currency}</span>`;
} //выводим общее кол-во товаров, вес и стоимость

function outDiscount() {
    sum = 0;
    discountSum = 0;
    allDiscount.innerHTML = '';
    return allDiscount.innerHTML = `Скидка: <span>${calcTotal() - discountTotal()}${currency}</span>`;
} //выводим общую скидку

function outDiscountTotal() {
    discountSum = 0;
    total.innerHTML = '';
    return total.innerHTML = `Итоговая стоимость: <span>${discountTotal()}${currency}</span>`;
} //выводим общую стоимость с учетом скидки

function outAllData () {
    outTotal();
    outDiscount();
    outDiscountTotal();
} //функция-обертка для всех функций

document.addEventListener('DOMContentLoaded', function() {
    outTotal();
}); //событие вывода количества товаров, веса и стоимости без скидки в момент загрузки страницы

btnDiscount.addEventListener('click', outAllData, {once: true}); //одноразовое срабатывание купона

//del elem

const buttonsDelete = document.querySelectorAll('.delete');
console.log(buttonsDelete);

buttonsDelete.forEach(btn => {
    btn.addEventListener('click', (evt) => {
        const target = evt.target;
        const targetParent = target.closest('article');
        targetParent.remove();
    });
}); //удаление товара из корзины