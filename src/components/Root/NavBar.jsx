import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar'>
      <Link to='/add' className='navbar-link'>
        Add recipe
      </Link>
      <Link to='/edit' className='navbar-link'>
        Edit recipe
      </Link>
      <Link to='/Recipe' className='navbar-link'>
        Lookup recipe
      </Link>
    </div>
  );
}

export default NavBar;
