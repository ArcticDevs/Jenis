import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css";
import Logo from '../assets/logo.png'
import useBreakpoints from '../customHooks/useBreakpoints'
// import { motion } from "framer-motion";
// import { MdSearch } from "react-icons/md"
// import { FaUser } from "react-icons/fa"
// import { IoMdCart, IoMdClose } from "react-icons/io"
// import { IoBagHandleSharp } from "react-icons/io5"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import sub_menu_image from "../assets/Navbar/sub_menu.jpg"
// import { GiCardboardBoxClosed } from "react-icons/gi"
// import delivery_image_1 from '../assets/Navbar/delivery_menu_1.png'
// import delivery_image_2 from '../assets/Navbar/delivery_menu_2.png'

const DesktopSideBar = ({ showSidebar }) => {
    const [showSidebarSubMenu, setShowSidebarSubMenu] = useState(false)
    const [subSidebarValue, setSubSidebarValue] = useState("")

    const handleSidebarMenu = (data) => {
        setShowSidebarSubMenu(true)
        setSubSidebarValue(data)
    }

    useEffect(() => {
        if (!showSidebar) {
            setShowSidebarSubMenu(false);
            setSubSidebarValue("")
        }
    }, [showSidebar])

    return (
        <>
            <div className={`sidebar ${showSidebar && "show-sidebar"}`}>
                <ul className='sidebar-links-section'>
                    <li className='d-flex justify-content-between w-100 align-items-center'>
                        <Link to="/locations">Location</Link>
                        <button className='btn p-0' onClick={() => handleSidebarMenu("location")}>
                            <BsChevronRight className='nav-icon p-0' />
                        </button>
                    </li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li>
                        <Link to="/our_story">Our Story</Link>
                    </li>
                    <li className='d-flex justify-content-between w-100 align-items-center'>
                        <Link to="/shop">Menu</Link>
                        <button className='btn p-0' onClick={() => handleSidebarMenu("Shop")}>
                            <BsChevronRight className='nav-icon p-0' />
                        </button>
                    </li>
                    <li><Link to="/">Gallery</Link></li>
                </ul>
                <div className={`sidebar-sub-menu ${showSidebarSubMenu && subSidebarValue === "Shop" && "show-sidebar--sub-menu"}`}>
                    <div className='sidebar-menu-head'>
                        <button className='btn p-0' onClick={() => { setShowSidebarSubMenu(false); setSubSidebarValue("") }}>
                            <BsChevronLeft className='nav-icon p-0' />
                        </button>
                        <h3>Menu</h3>
                    </div>
                    <h3>Flavors</h3>
                    <ul>
                        <li><Link to="/">All Flavors</Link></li>
                        <li><Link to="/">New Arrivals</Link></li>
                        <li><Link to="/">Dairy Free</Link></li>
                        <li><Link to="/">Gluten Free</Link></li>
                    </ul>
                    <h3>Collections</h3>
                    <ul>
                        <li><Link to="/">All Collections</Link></li>
                        <li><Link to="/">Best Sellers</Link></li>
                        <li><Link to="/">Fall Favorites</Link></li>
                        <li><Link to="/">Single Servings</Link></li>
                    </ul>
                    <div className='sidebar-sub-menu-footer'>
                        <Link to="/" className='sidebar-sub-menu-footer-link'>
                            <div className='sidebar-sub-menu-image'>
                                <img src={sub_menu_image} alt="sub_menu_image" />
                            </div>
                            <p>Tap to Fall!</p>
                            <h5>Comforting ice creams made for cooler days.</h5>
                        </Link>
                    </div>
                </div>
                <div className={`sidebar-sub-menu ${showSidebarSubMenu && subSidebarValue === "location" && "show-sidebar-sub-menu"}`}>
                    <div className='sidebar-sub-menu-head'>
                        <button className='btn p-0' onClick={() => { setShowSidebarSubMenu(false); setSubSidebarValue("") }}>
                            <BsChevronLeft className='nav-icon p-0' />
                        </button>
                        <h3>Location</h3>
                    </div>
                    <ul>
                        <li><Link to="/location">Franchising</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

const Navbar = () => {

    const { isMd } = useBreakpoints();

    // const [showSearch, setShowSearch] = useState(false)
    // const [showSearchClose, setShowSearchClose] = useState(false)
    // const [searchValue, setSearchValue] = useState("")

    const [showMobMenu, setShowMobMenu] = useState(false)
    const [showMobSubMenu, setShowMobSubMenu] = useState(false)
    const [subMenuValue, setSubMenuValue] = useState("")

    const [showSidebar, setShowSidebar] = useState(false)
    const [showSidebarBtn, setShowSidebarBtn] = useState(false)

    const [showDesktopMenu, setShowDesktopMenu] = useState(false);
    const [showDesktopValue, setShowDesktopValue] = useState("");

    const [hideLinks, setHideLinks] = useState(false);
    const [hideReward, setHideReward] = useState(false);

    // const handleMobSearch = (e) => {
    //     setSearchValue(e.target.value)
    //     if (e.target.value === "")
    //         setShowSearchClose(false);
    //     else {
    //         setShowSearchClose(true)
    //     }
    // }

    const handleSubMenu = (data) => {
        setShowMobSubMenu(true)
        setSubMenuValue(data)
    }

    const handleDesktopHoverMenu = (trigger, data) => {
        setShowDesktopMenu(trigger)
        setShowDesktopValue(data)
    }

    useEffect(() => {
        if (showMobMenu)
            document.body.style.overflow = "hidden";
        else
            document.body.style.overflowY = "scroll";
    }, [showMobMenu])

    useEffect(() => {
        if (!isMd) {
            window.onscroll = function () {
                if (window.pageYOffset === 0 || window.scrollY === 0) {
                    setHideLinks(false)
                    setHideReward(false)
                    setShowSidebarBtn(false)
                    document.getElementById("header").style.zIndex = 5;
                }
                if (window.scrollY > 5) {
                    setHideLinks(true)
                    setShowSidebarBtn(true)
                }
                if (window.scrollY > 7) {
                    document.getElementById("header").style.zIndex = 10;
                }
                if (window.scrollY > 120) {
                    setHideReward(true);
                }

                return () => (window.onscroll = null);
            };
        }
        else {
            document.getElementById("header").style.zIndex = 10;
            window.onscroll = function () {
                if (window.pageYOffset === 0 || window.scrollY === 0) {
                    setHideReward(false)
                }
                if (window.scrollY > 100) {
                    setHideReward(true);
                }

                return () => (window.onscroll = null);
            };
        }
    }, [isMd])

    return (
        <header id='header'>
            {isMd ?
                <nav className='mobile'>
                    <div className={`nav-reward text-uppercase ${hideReward && "hide-nav-reward"}`}>All new flavors available</div>
                    <div className='nav-logo-section'>
                        <div className={`menu-btn-wrapper ${showMobMenu && "active"}`} onClick={() => { setShowMobSubMenu(false); setShowMobMenu(!showMobMenu); setSubMenuValue("") }}>
                            <div className="menu-btn-bar"></div>
                            <div className="menu-btn-bar"></div>
                            <div className="menu-btn-bar"></div>
                        </div>
                        <div className="nav-logo">
                            <img src={Logo} alt="Logo" />
                        </div>
                    </div>
                    <div className='mob-menu-container'>
                        <div className={`mob-menu ${showMobMenu && "show-mob-menu"}`}>
                            <ul className='nav-links-section'>
                                <li className='d-flex justify-content-between w-100 align-items-center'>
                                    <Link to="/locations">Location</Link>
                                    <button className='btn p-0' onClick={() => handleSubMenu("location")}>
                                        <BsChevronRight className='nav-icon p-0' />
                                    </button>
                                </li>
                                <li><Link to="/contact-us">Contact Us</Link></li>
                                <li>
                                    <Link to="/our_story">Our Story</Link>
                                </li>
                                <li className='d-flex justify-content-between w-100 align-items-center'>
                                    <Link to="/shop">Menu</Link>
                                    <button className='btn p-0' onClick={() => handleSubMenu("Shop")}>
                                        <BsChevronRight className='nav-icon p-0' />
                                    </button>
                                </li>
                                <li><Link to="/">Gallery</Link></li>
                            </ul>
                        </div>
                        <div className={`mob-sub-menu ${showMobSubMenu && subMenuValue === "Shop" && "show-mob-sub-menu"}`}>
                            <div className='sub-menu-head'>
                                <button className='btn p-0' onClick={() => { setShowMobSubMenu(false); setSubMenuValue("") }}>
                                    <BsChevronLeft className='nav-icon p-0' />
                                </button>
                                <h3>Menu</h3>
                            </div>
                            <h3>Flavors</h3>
                            <ul>
                                <li><Link to="/">All Flavors</Link></li>
                                <li><Link to="/">New Arrivals</Link></li>
                                <li><Link to="/">Dairy Free</Link></li>
                                <li><Link to="/">Gluten Free</Link></li>
                            </ul>
                            <h3>Collections</h3>
                            <ul>
                                <li><Link to="/">All Collections</Link></li>
                                <li><Link to="/">Best Sellers</Link></li>
                                <li><Link to="/">Fall Favorites</Link></li>
                                <li><Link to="/">Single Servings</Link></li>
                            </ul>
                            <div className='sub-menu-footer'>
                                <Link to="/" className='sub-menu-footer-link'>
                                    <div className='sub-menu-image'>
                                        <img src={sub_menu_image} alt="sub_menu_image" />
                                    </div>
                                    <p>Tap to Fall!</p>
                                    <h5>Comforting ice creams made for cooler days.</h5>
                                </Link>
                            </div>
                        </div>
                        <div className={`mob-sub-menu ${showMobSubMenu && subMenuValue === "location" && "show-mob-sub-menu"}`}>
                            <div className='sub-menu-head'>
                                <button className='btn p-0' onClick={() => { setShowMobSubMenu(false); setSubMenuValue("") }}>
                                    <BsChevronLeft className='nav-icon p-0' />
                                </button>
                                <h3>Location</h3>
                            </div>
                            <ul>
                                <li><Link to="/location">Franchising</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                :
                <nav className='desktop'>
                    <div className={`nav-reward text-uppercase ${hideReward && "hide-nav-reward"}`}>All new flavors available!</div>
                    <div className='nav-logo-section px-5 fixed-top'>
                        <div className="nav-logo">
                            <Link to="/">
                                <img src={Logo} alt="Logo" />
                            </Link>
                        </div>
                        <div className='logo-section-btns'>
                            {showSidebarBtn &&
                                <div className={`sidebar-btn-wrapper ${showSidebar && "sidebar--active"}`} onClick={() => { setShowSidebar(!showSidebar); }}>
                                    <div className="sidebar-btn-bar"></div>
                                    <div className="sidebar-btn-bar"></div>
                                    <div className="sidebar-btn-bar"></div>
                                </div>
                            }
                        </div>
                    </div>
                    <ul className={`nav-links-section ${hideLinks && "hide-nav-links"}`}>
                        <li className="nav-hover"><Link to="/our_story">Our Story</Link></li>
                        <li className="nav-hover" onMouseEnter={() => handleDesktopHoverMenu(true, "location")} onMouseLeave={() => handleDesktopHoverMenu(false, "")}>
                            <Link to="/locations" onClick={() => handleDesktopHoverMenu(false, "")}>Location</Link>
                        </li>
                        <li className="nav-hover"><Link to="/contact-us">Contact Us</Link></li>
                        <li className="nav-hover" onMouseEnter={() => handleDesktopHoverMenu(true, "Shop")} onMouseLeave={() => handleDesktopHoverMenu(false, "")}>
                            <Link to="/shop" onClick={() => handleDesktopHoverMenu(false, "")}>Menu</Link>
                        </li>
                        <li className="nav-hover"><Link to="/">Gallery</Link></li>
                    </ul>
                    <div className='desktop-hover-menu-wrap' onMouseEnter={() => handleDesktopHoverMenu(true, "Shop")} onMouseLeave={() => handleDesktopHoverMenu(false, "")}>
                        <div className={`desktop-hover-menu ${showDesktopMenu && showDesktopValue === "Shop" && "show-desktop-menu"}`}>
                            <div className='menu-grid-column'>
                                <div>
                                    <h3>Flavors</h3>
                                    <ul>
                                        <li><Link to="/">All Flavors</Link></li>
                                        <li><Link to="/">New Arrivals</Link></li>
                                        <li><Link to="/">Dairy Free</Link></li>
                                        <li><Link to="/">Gluten Free</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3>Collections</h3>
                                    <ul>
                                        <li><Link to="/">All Collections</Link></li>
                                        <li><Link to="/">Best Sellers</Link></li>
                                        <li><Link to="/">Fall Favorites</Link></li>
                                        <li><Link to="/">Single Servings</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='menu-grid-image-wrap'>
                                <div className='grid-image'>
                                    <img src={sub_menu_image} alt="menu_image" />
                                </div>
                                <div className="image-content">
                                    <h6>Tap to Fall!</h6>
                                    <p>Comforting ice creams made for cooler days.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='desktop-hover-menu-wrap location-hover-wrap' onMouseEnter={() => handleDesktopHoverMenu(true, "location")} onMouseLeave={() => handleDesktopHoverMenu(false, "")}>
                        <div className={`desktop-hover-menu location-hover ${showDesktopMenu && showDesktopValue === "location" && "show-desktop-menu"}`}>
                            <Link to="/location">Franchising</Link>
                        </div>
                    </div>
                    <div className="sidebar-wrap">
                        <DesktopSideBar showSidebar={showSidebar} />
                    </div>
                </nav>
            }
        </header >
    )
}

export default Navbar