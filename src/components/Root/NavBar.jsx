import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar'>
      <NavLink
        to='/add'
        className={navData =>
          navData.isActive ? 'navbar-link-active' : 'navbar-link'
        }
      >
        Add recipe
      </NavLink>
      <NavLink
        to='/edit'
        className={navData =>
          navData.isActive ? 'navbar-link-active' : 'navbar-link'
        }
      >
        Edit recipe
      </NavLink>
      <NavLink
        to='/Recipe'
        className={navData =>
          navData.isActive ? 'navbar-link-active' : 'navbar-link'
        }
      >
        Lookup recipe
      </NavLink>
      <NavLink
        to='/delete'
        className={navData =>
          navData.isActive ? 'navbar-link-active' : 'navbar-link'
        }
      >
        Delete recipe
      </NavLink>
    </div>
  );
}

export default NavBar;
