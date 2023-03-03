import { Link } from 'react-router-dom';
import './header.css'

function Header() {
    return(
        <header>
            <Link className="logo" to="/">Virtual Store</Link>
            <Link className="btn-cart" to="/carrinho">Carrinho</Link>
        </header>
    )
}


export default Header;