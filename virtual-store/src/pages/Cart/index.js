import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './cart.css'

function Cart() {
    const [products, setProducts] = useState([]);

    var total = products.reduce(getTotalPrice, 0);

    useEffect(() => {
        const products = localStorage.getItem("@store");
        setProducts(JSON.parse(products) || []);
    }, [])


    function deleteProduct(item){
        let filterProduct = products.filter((product) => {
            return product !== item;
        })

        setProducts(filterProduct);
        localStorage.removeItem("@store", JSON.stringify(filterProduct));
        toast.success("Produto deletado do carrinho.")
    }

    function getTotalPrice(total, item){
        return total + (item.preco);
    }
    
    return(
        <div className="cart">
            <h1>Carrinho:</h1>
                {products.length === 0 && <span>Você não possui itens no carrinho.</span>}
            <ul>
                {products.map((product) => {
                    return(
                        <li key={product.id}>
                            <img src={product.foto} alt={product.nome} />
                            <span>Produto: {product.nome}</span>
                            <span>Preço: R$ {product.preco}</span>
                            <div>
                            <Link to={`/produtos/${product.id}`}>Ver Detalhes</Link>
                            <button onClick={() => deleteProduct(product)} className="btn-delete">Excluir</button>
                            </div>
                        </li>
                        
                    )
                })}
            </ul>
            <h3>Preço total: R${total}</h3>
        </div>
    )
}

export default Cart;