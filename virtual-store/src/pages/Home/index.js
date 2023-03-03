import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../service/api";
import './home.css'


function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function loadProducts() {
            const response = await api.get("/produtos");
            setProducts(response.data);
            setLoading(false);
        }
        loadProducts();
    }, [])

    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando produtos...</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="product-list">
                {products.map((product) => {
                    return (
                        <div key={product.id}>
                            <div className='card'>
                                <img src={product.foto} alt={product.nome} />
                                <h1>{product.nome}</h1>
                                <p className="price"> R${product.preco}</p>
                                <Link to={`/produtos/${product.id}`}>Ver Detalhes</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;