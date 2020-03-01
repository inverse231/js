const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];

const renderProduct = (title="Item", price="150") => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Buy</button>
            </div>`
};
const renderPage = (list=[]) => {
    const productsList = list.map(({title, price}) => renderProduct(title, price));
    productsList.forEach(element => {
        document.querySelector('.products').innerHTML += element;
    });
};

renderPage(products);