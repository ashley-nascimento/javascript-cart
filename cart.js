const listProducts = [
    {
        id: '1',
        name: 'Produto 1',
        value: 10
    },{
        id: '2',
        name: 'Produto 2',
        value: 20
    },{
        id: '3',
        name: 'Produto 3',
        value: 30
    }
]

let cartProducts = {}

let cartTotal = 0

function addCartToProduct(id){
    const selectedProduct = listProducts.filter(item => item.id === id)[0]
    
    if(cartProducts[id]){        
        cartProducts[id].amount ++
    } else {
        cartProducts[id] = {
            id: selectedProduct.id,
            name: selectedProduct.name,
            value: selectedProduct.value,
            amount: 1
        }
    }
    cartTotal += + selectedProduct.value 

    return cartProducts, cartTotal 
}

function removeProductFromCart(id){
    const valueRemoved = cartProducts[id].value

    if(cartProducts[id].amount > 1){        
        cartProducts[id].amount --
    } else {
        delete cartProducts[id]
    }

    cartTotal += - valueRemoved 

    return cartProducts, cartTotal 
}

addCartToProduct('1')
addCartToProduct('1')
addCartToProduct('2') 
removeProductFromCart('1')
removeProductFromCart('1')

console.log('Carrinho: ', cartProducts) // { '2': { id: '2', name: 'Produto 2', value: 20, amount: 1 } }
console.log('Total: ', cartTotal) // 20