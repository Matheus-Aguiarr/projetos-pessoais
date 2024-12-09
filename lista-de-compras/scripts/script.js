const product = document.querySelector('#product');
const price = document.querySelector('#price');
const quantity = document.querySelector('#quantity');
const btnAdd = document.querySelector('.add');
const total = document.querySelector('.total');

let myShopList = [];

function totalCalc() {
    let totalSum = 0;

    // Soma o total de todos os produtos na lista
    myShopList.forEach(item => {
        totalSum += item.preco * item.quantidade;
    });

    // Atualiza o HTML para exibir o total
    total.innerHTML = `Total: R$ ${totalSum.toFixed(2)}`;
}

function addListProducts() {
    myShopList.push({
        produto: product.value,
        preco: parseFloat(price.value),  
        quantidade: parseInt(quantity.value),  
    });
    product.value = '';
    price.value = '';
    quantity.value = '';

    showNewList();
    totalCalc();  // Chama o cálculo total depois de adicionar um novo item
}

function removeItem(index) {
    // Remove o item do array com base no índice
    myShopList.splice(index, 1);
    showNewList();
    totalCalc();  // Recalcula o total após remover um item
}

function showNewList() {
    let newLi = '';

    myShopList.forEach((item, index) => {
        newLi += `
            <li class="product-attributes">
                <p>
                    ${item.produto}
                </p>
                <p>
                    Preço: R$ ${(item.preco * item.quantidade).toFixed(2)}
                </p>
                <p>
                    qtd. ${item.quantidade}
                </p>
                <i class="fa-solid fa-trash remove" data-index="${index}"></i>
            </li>
        `;
    });

    const completeList = document.querySelector('.list-products');
    completeList.innerHTML = newLi;

    // Adiciona o evento de clique para remover os itens
    const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            removeItem(index);
        });
    });
}


document.addEventListener('keypress', (e) => {
    console.log(e);
    
    if(e.charCode === 13) {
        addListProducts();
    } 
    
    if(e.charCode === 63) {
        total.innerHTML = "Eu te amo, carolzinha."
    }
})
btnAdd.addEventListener('click', () => {
    addListProducts();
});