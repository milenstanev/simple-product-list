
export const productSchema = {
    id: 0,
    title: '',
    description: '',
    created: new Date(),
    price: 0
};

export const fetchProducts = () => Promise.resolve([
    {
        ...productSchema,
        id: 1,
        title: 'Lorem ipsum title',
        description: 'Lorem ipsum description',
        created: new Date(9999999999),
        price: 200
    },{
        ...productSchema,
        id: 2,
        title: 'Lorem ipsum title',
        description: 'Lorem ipsum description',
        created: new Date(9999999999),
        price: 300
    }
]);

export const postProduct = () =>  Promise.resolve('OK')