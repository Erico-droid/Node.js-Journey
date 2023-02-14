const name = 'Eric';
const age = 21;

const user = {
    name,
    age,
    location: 'Africa'
}

console.log(user);

//object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const {label:productLabel, price, stock, salePrice} = product

// console.log(productLabel);

const transaction = (type, {label, price, stock, salePrice}) => {
    console.log(salePrice);
}

transaction('order', product);