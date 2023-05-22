import "./styles.css"
import { FaBeer } from 'react-icons/fa';

const Header = ()=>{
    return (

        <header className="topo">
        GREENMIND
        <ul>
            <li>Home</li>  
            <li>Products</li>
            <li>Contact</li>
        </ul>
        
        <div>
<FaBeer></FaBeer>
        </div>

        </header>

    )
}

export default Header;