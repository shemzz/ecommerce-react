import { BasketToggle } from '@/components/basket';
import { FilterOutlined, ShoppingOutlined, MenuOutlined } from '@ant-design/icons';
import * as ROUTE from '@/constants/routes';
import { Drawer } from 'antd';
import { HOME, SIGNIN } from '@/constants/routes';
import PropType from 'prop-types';
import React, {useState} from 'react';
import {NavLink, Link, useLocation } from 'react-router-dom';
import UserNav from '@/views/account/components/UserAvatar';
import Badge from './Badge';
import FiltersToggle from './FiltersToggle';
import SearchBar from './SearchBar';
import logo from '@/images/favicon.png';

const Navigation = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const {
    isAuthenticating, basketLength, disabledPaths, user
  } = props;
  const { pathname } = useLocation();
  const showMenu = () => {
    setOpenMenu(true)
  }
  const onClose = () => {
    setOpenMenu(false)
  }
  const onClickLink = (e) => {
    if (isAuthenticating) e.preventDefault();
  };

  return (
    <nav className="mobile-navigation">
      <div className="mobile-navigation-main">
        <div className="mobile-navigation-logo">
        <div className="logo mobile">
            <Link onClick={onClickLink} to={HOME}><img alt="Logo" src={logo} /></Link>
            <h4>ChristaGold</h4>
      </div>
        </div>

        <BasketToggle>
          {({ onClickToggle }) => (
            <button
              className="button-link navigation-menu-link basket-toggle"
              onClick={onClickToggle}
              disabled={disabledPaths.includes(pathname)}
              type="button"
            >

              <Badge count={basketLength}>
                <i className="fa fa-shopping-bag" style={{ fontSize: '2rem', color: "red" }} />
                <ShoppingOutlined style={{ fontSize: '2.4rem' }} />
              </Badge>
            </button>
          )}
        </BasketToggle>
        <ul className="mobile-navigation-menu">
          {user ? (
            <li className="mobile-navigation-item">
              <UserNav />
            </li>
          ) : (
            <>
              {pathname !== SIGNIN && (
                <li className="mobile-navigation-item">
                  <Link
                    className="navigation-menu-link"
                    onClick={onClickLink}
                    to={SIGNIN}
                  >
                    Sign In
                  </Link>
                </li>
              )}
            </>
          )}
          <li className='mobile-navigation-item'>
            <MenuOutlined onClick={showMenu} style={{ fontSize: "2.4rem" }} />
          </li>
        </ul>
      </div>
      <div className="mobile-navigation-sec">
        {/* <SearchBar /> */}
        {/* <FiltersToggle>
          <button className="button-link button-small" type="button">
            <i className="fa fa-filter" />
          </button>
        </FiltersToggle> */}

        <Drawer
          title="Navigation"
          placement='left'
          onClose={onClose}
          open={openMenu}
          key='left'
        >
          <ul className="mobile-menu">
            {/* <li>
              <div>
              <SearchBar /> 
            </div>
            </li> */}
            <li onClick={onClose}><NavLink activeClassName="navigation-menu-active" exact to={ROUTE.HOME}>Home</NavLink></li>
        <li onClick={onClose}><NavLink activeClassName="navigation-menu-active" to={ROUTE.SHOP}>Shop</NavLink></li>
        <li onClick={onClose}><NavLink activeClassName="navigation-menu-active" to={ROUTE.FEATURED_PRODUCTS}>Featured</NavLink></li>
        <li onClick={onClose}><NavLink activeClassName="navigation-menu-active" to={ROUTE.RECOMMENDED_PRODUCTS}>Recommended</NavLink></li>
      </ul>
          </Drawer>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  isAuthenticating: PropType.bool.isRequired,
  basketLength: PropType.number.isRequired,
  disabledPaths: PropType.arrayOf(PropType.string).isRequired,
  user: PropType.oneOfType([
    PropType.bool,
    PropType.object
  ]).isRequired
};

export default Navigation;
