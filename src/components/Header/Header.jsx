import './header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const categories = useSelector((store)=>{
        return store.reducer.categories;
    });
    return (
        <header className='header'>
            <div className="container header-container">
                <h1 className='header-logo'>
                    <Link to={'/'}>Shop</Link>
                </h1>

                <nav className='header-nav'>
                    {
                        categories.map(item =>{
                            return <Link key={item} to={`/category/${item}`} >{item}</Link>
                        })
                    }
                    <Link to={'/'}>home</Link>
                    <Link to={'/cart'}>cart</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
