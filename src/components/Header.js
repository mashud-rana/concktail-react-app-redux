import {Link} from 'react-router-dom'
const Header = () => {
    return ( 
        <div>
            <nav className="navbar navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 header-title text-success">
                    <Link to="/">Find Your Favourite Cocktail</Link>
                    </span>
                </div>
            </nav>
        </div>
     );
}
 
export default Header;