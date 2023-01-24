# Carrinho com JavaScript Vanilla

Funções criadas para o teste técnico da empresa Cuponomia. No arquivo há um Array de dados mockados contendo: id, nome e valor. Também há a função 'addCartToProduct' que adiciona um produto no carrinho recebendo o id dele como parâmetro e a função 'removeProductFromCart', que remove o produto do carrinho recebendo também o id dele como parêmetro. 

A função de adicionar é executada 3 vezes, adicionando o 'Produto 1' duas vezes no carrinho e adicionando o 'Produto 2' apenas uma vez. 

Por fim, a função de remover é executada 2 vezes, removendo os dois 'Produto 1'. 

- Como executar o arquivo:

```bash
# Com o node instalado execute
$ node cart.js
# Você receberá as seguites saídas:
# Carrinho:  { '2': { id: '2', name: 'Produto 2', value: 20, amount: 1 } }
# Total:  20
```
