import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../service/api";

import './details.css'

function Details(){
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        async function loadProduct(){
            await api.get(`/produtos/${id}`)
        
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch(() => {
                console.log("Produto nao encontrado");
                navigate("/", { replace: true});
                return;
            })
        }
        loadProduct();

        return () => {
            console.log("componente desmontado");
        }

    }, [navigate, id])

    function addCart(){
        const list = localStorage.getItem("@store");

        let products = JSON.parse(list) || [];

        products.push(product);
        localStorage.setItem("@store", JSON.stringify(products));
        toast.success("Adicionado ao carrinho com sucesso!");
    }

    if(loading){
        return(
            <div className="product-info">
                <h1>Carregando detalhes do produto...</h1>
            </div>
        )
    }

    return(
        <div className="product-info">
            <h1>{product.nome}</h1>
            <img src={product.foto} alt={product.nome} />
            <h3>Preço: {product.preco}</h3>

            <h3>Descrição do Produto</h3>
            <span>{product.descricao}</span>

            <div className="area-buttons">
                <button onClick={addCart}>Adicionar o carrinho</button>
                <Link to={`/`} className="btn-return">Voltar</Link>
            </div>
        </div>
    )

}

export default Details;