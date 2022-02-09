import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import {
  Navbar,
  NavContent,
  LogoImg,
  PopUpContainer,
  PopUpCloseBtn,
  HamburgerBtn,
  NavLinksList,
  NavLinkItem,
  NavLink,
  NavLinkContent,
} from './styledComponents'

import './index.css'

const Header = () => (
  <Navbar>
    <NavContent>
      <Link to="/">
        <LogoImg
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <HamburgerBtn data-testid="hamburgerIconButton">
            <GiHamburgerMenu size="30" />
          </HamburgerBtn>
        }
        className="popup-content"
      >
        {close => (
          <PopUpContainer>
            <PopUpCloseBtn
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </PopUpCloseBtn>
            <NavLinksList>
              <NavLinkItem>
                <NavLink to="/" onClick={() => close()}>
                  <AiFillHome size="36" />
                  <NavLinkContent>Home</NavLinkContent>
                </NavLink>
              </NavLinkItem>
              <NavLinkItem>
                <NavLink to="/about" onClick={() => close()}>
                  <BsInfoCircleFill size="36" />
                  <NavLinkContent>About</NavLinkContent>
                </NavLink>
              </NavLinkItem>
            </NavLinksList>
          </PopUpContainer>
        )}
      </Popup>
    </NavContent>
  </Navbar>
)

export default withRouter(Header)
