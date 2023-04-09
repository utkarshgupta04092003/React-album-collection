import '../style/Navbar.css';
import { Link } from 'react-router-dom';

//navbar component
function Navbar(){
    return (
        <div className='Navbar'>
            
            <div className='navbar-button'>
                <span className='album'>ALBUM</span>
                <span>LIST</span>
            </div>
            <Link to={'/addalbum'}><button className='add-album-button'>Add ALBUM</button></Link>
            


        </div>
    )
}

export default Navbar;