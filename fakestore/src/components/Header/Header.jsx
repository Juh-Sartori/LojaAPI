import "./styles.css"
import { BsCart } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';

const Header = ()=>{
    return (

        <header className="topo">
            <div className="name">
                    GREENMIND
                <ul>
                    <li>Home</li>  
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
            </div>
            
            <div className="icon">
                <BsCart/>
                <BsPerson/> 
                <p>|</p>
                <BiMenuAltRight/>
            </div>

        </header>

    )
}

export default Header;