import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css";
import Logo from '../assets/logo-colored.png'
import useBreakpoints from '../customHooks/useBreakpoints'
// import { motion } from "framer-motion";
import { MdSearch } from "react-icons/md"
import { FaUser } from "react-icons/fa"
import { IoMdCart, IoMdClose } from "react-icons/io"
import { IoBagHandleSharp } from "react-icons/io5"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import sub_menu_image from "../assets/Navbar/sub_menu.jpg"
import { GiCardboardBoxClosed } from "react-icons/gi"
import delivery_image_1 from '../assets/Navbar/delivery_menu_1.png'
import delivery_image_2 from '../assets/Navbar/delivery_menu_2.png'

const Navbar = () => {

    const { isMd } = useBreakpoints();

    const [showSearch, setShowSearch] = useState(false)
    const [showSearchClose, setShowSearchClose] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    const [showMobMenu, setShowMobMenu] = useState(false)
    const [showMobSubMenu, setShowMobSubMenu] = useState(false)
    const [subMenuValue, setSubMenuValue] = useState("")

    const [showDesktopMenu, setShowDesktopMenu] = useState(false);
    const [showDesktopValue, setShowDesktopValue] = useState("");

    const [hideLinks, setHideLinks] = useState(false);
    const [hideReward, setHideReward] = useState(false);

    const handleMobSearch = (e) => {
        setSearchValue(e.target.value)
        if (e.target.value === "")
            setShowSearchClose(false);
        else {
            setShowSearchClose(true)
        }
    }

    const handleSubMenu = (data) => {
        setShowMobSubMenu(true)
        setSubMenuValue(data)
    }

    const handleDesktopHoverMenu = (trigger, data) => {
        setShowDesktopMenu(trigger)
        setShowDesktopValue(data)
    }

    useEffect(() => {
        window.onscroll = function () {
            if (window.pageYOffset === 0 || window.scrollY===0) {
                setHideLinks(false)
                setHideReward(false)
                document.getElementById("header").style.zIndex = 5;
            }
            if (window.scrollY > 5 ) {
                setHideLinks(true)
            }
            if (window.scrollY > 7) {
                document.getElementById("header").style.zIndex = 10;
            }
            if (window.scrollY > 120) {
                setHideReward(true);
            }

            return () => (window.onscroll = null);
        };
    })

    return (
        <header id='header'>
            {isMd ?
                <nav className='mobile'>
                    <div className={`nav-reward ${hideReward && "hide-nav-reward"}`}>Get the perks: Join Splendid Rewards</div>
                    <div className='nav-logo-section'>
                        <div className={`menu-btn-wrapper ${showMobMenu && "active"}`} onClick={() => { setShowMobSubMenu(false); setShowMobMenu(!showMobMenu); setSubMenuValue("") }}>
                            <div className="menu-btn-bar"></div>
                            <div className="menu-btn-bar"></div>
                            <div className="menu-btn-bar"></div>
                        </div>
                        <div className="nav-logo">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div>
                            <IoMdCart className='nav-icon' />
                        </div>
                    </div>
                    <div className='mob-menu-container'>
                        <div className={`mob-menu ${showMobMenu && "show-mob-menu"}`}>
                            <ul className='nav-links-section'>
                                <li className='d-flex mob-search mb-2'>
                                    <button className='search-btn'>
                                        <MdSearch className='nav-icon' />
                                    </button>
                                    <input type="text" className="search" placeholder='Search' aria-label="Search" value={searchValue} onChange={handleMobSearch} />
                                    <button type='button' className={showSearchClose ? "show-btn" : "hide-btn"} onClick={() => setSearchValue("")}>
                                        <IoMdClose className='nav-icon' />
                                    </button>
                                </li>
                                <li className='d-flex justify-content-between w-100 align-items-center'>
                                    <Link to="/">Shop</Link>
                                    <button className='btn p-0' onClick={() => handleSubMenu("Shop")}>
                                        <BsChevronRight className='nav-icon p-0' />
                                    </button>
                                </li>
                                <li className='d-flex justify-content-between w-100 align-items-center'>
                                    <Link to="/">Gifting</Link>
                                    <button className='btn p-0' onClick={() => handleSubMenu("Gift")}>
                                        <BsChevronRight className='nav-icon p-0' />
                                    </button>
                                </li>
                                <li className='d-flex justify-content-between w-100 align-items-center'>
                                    <Link to="/">Delivery</Link>
                                    <button className='btn p-0' onClick={() => handleSubMenu("Delivery")}>
                                        <BsChevronRight className='nav-icon p-0' />
                                    </button>
                                </li>
                                <li>
                                    <Link to="/">Visit Us</Link>
                                </li>
                                <li>
                                    <Link to="/">Grocery</Link>
                                </li>
                                <li>
                                    <Link to="/">Our Story</Link>
                                </li>
                            </ul>
                            <div className='mob-footer'>
                                <h4>
                                    <Link to="/">Rewards</Link>
                                </h4>
                                <div>
                                    <FaUser className='nav-icon' />
                                    <span>Log In</span>
                                </div>
                            </div>
                        </div>
                        <div className={`mob-sub-menu ${showMobSubMenu && subMenuValue === "Shop" && "show-mob-sub-menu"}`}>
                            {/* <div className="mob-sub-menu"> */}
                            <div className='sub-menu-head'>
                                <button className='btn p-0' onClick={() => { setShowMobSubMenu(false); setSubMenuValue("") }}>
                                    <BsChevronLeft className='nav-icon p-0' />
                                </button>
                                <h3>Shop</h3>
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
                            <h3>Merch</h3>
                            <h4><Link to="/">View All Merch</Link></h4>
                            <div className='sub-menu-footer'>
                                <Link to="/" className='sub-menu-footer-link'>
                                    <div className='sub-menu-image'>
                                        <img src={sub_menu_image} alt="sub_menu_image" />
                                    </div>
                                    <p>Tap to Fall!</p>
                                    <h5>Comforting ice creams made for cooler days.</h5>
                                </Link>
                            </div>
                            {/* </div> */}
                        </div>
                        <div className={`mob-sub-menu ${showMobSubMenu && subMenuValue === "Gift" && "show-mob-sub-menu"}`}>
                            {/* <div className="mob-sub-menu"> */}
                            <div className='sub-menu-head'>
                                <button className='btn p-0' onClick={() => { setShowMobSubMenu(false); setSubMenuValue("") }}>
                                    <BsChevronLeft className='nav-icon p-0' />
                                </button>
                                <h3>Gifting</h3>
                            </div>
                            <h3>Occasions</h3>
                            <ul>
                                <li><Link to="/">BirthDay</Link></li>
                                <li><Link to="/">Thank You</Link></li>
                                <li><Link to="/">Congratulations</Link></li>
                                <li><Link to="/">Party</Link></li>
                            </ul>
                            <h3>Gifts</h3>
                            <ul>
                                <li><Link to="/">Pick Your Own Mix</Link></li>
                                <li><Link to="/">Pint Club</Link></li>
                                <li><Link to="/">Corporate Gifts</Link></li>
                                <li><Link to="/">Gift Cards</Link></li>
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
                            {/* </div> */}
                        </div>
                        <div className={`mob-sub-menu ${showMobSubMenu && subMenuValue === "Delivery" && "show-mob-sub-menu"}`}>
                            {/* <div className="mob-sub-menu"> */}
                            <div className='sub-menu-head'>
                                <button className='btn p-0' onClick={() => { setShowMobSubMenu(false); setSubMenuValue("") }}>
                                    <BsChevronLeft className='nav-icon p-0' />
                                </button>
                                <h3>Delivery</h3>
                            </div>
                            <div className='delivery-btn'>
                                <button className='rounded-0'>
                                    <IoBagHandleSharp className='nav-icon p-0' />
                                    <span className='text-uppercase fs-6 fw-bold m-0'>Local Delivery</span>
                                </button>
                                <button className='rounded-0'>
                                    <GiCardboardBoxClosed className='nav-icon p-0' />
                                    <span className='text-uppercase fs-6 fw-bold m-0'>Nationwide Shipping</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
                :
                <nav className='desktop'>
                    <div className={`nav-reward ${hideReward && "hide-nav-reward"}`}>Get the perks: Join Jeni's Splendid Rewards</div>
                    <div className='nav-logo-section px-5 fixed-top'>
                        <div className="nav-logo">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className='logo-section-btns'>
                            <div className='d-flex'>
                                <button className='search-btn' onClick={() => setShowSearch(true)}>
                                    <MdSearch className='nav-icon' />
                                </button>
                                <div className={`search-section ${!showSearch && "hide"}`}>
                                    <input type="text" className="search" placeholder='Search' aria-label="Search" />
                                    <button type='button' onClick={() => setShowSearch(false)}>
                                        <IoMdClose className='nav-icon' />
                                    </button>
                                </div>
                            </div>
                            <h3>Rewards</h3>
                            <FaUser className='nav-icon user' />
                            <IoMdCart className='nav-icon cart' />
                        </div>
                    </div>
                    <ul className={`nav-links-section ${hideLinks && "hide-nav-links"}`}>
                        <li className={showDesktopMenu && showDesktopValue === "Shop" ? "nav-hover" : undefined} onMouseEnter={() => handleDesktopHoverMenu(true, "Shop")} onMouseLeave={() => handleDesktopHoverMenu(false, "")}>
                            <Link to="/">Shop</Link>
                        </li>
                        <li className={showDesktopMenu && showDesktopValue === "Gift" ? "nav-hover" : undefined} onMouseEnter={() => handleDesktopHoverMenu(true, "Gift")} onMouseLeave={() => handleDesktopHoverMenu(false, "")}>
                            <Link to="/">Gifting</Link>
                        </li>
                        <li className={showDesktopMenu && showDesktopValue === "Delivery" ? "nav-hover" : undefined} onMouseEnter={() => handleDesktopHoverMenu(true, "Delivery")} onMouseLeave={() => handleDesktopHoverMenu(false, "")}>
                            <Link to="/">Delivery</Link>
                        </li>
                        <li><Link to="/">Visit Us</Link></li>
                        <li><Link to="/">Grocery</Link></li>
                        <li><Link to="/">Our Story</Link></li>
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
                                <div>
                                    <h3>Merch</h3>
                                    <h4><Link to="/">View All Merch</Link></h4>
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
                    <div className='desktop-hover-menu-wrap' onMouseEnter={() => handleDesktopHoverMenu(true, "Gift")} onMouseLeave={() => handleDesktopHoverMenu(false, "")}>
                        <div className={`desktop-hover-menu ${showDesktopMenu && showDesktopValue === "Gift" && "show-desktop-menu"}`}>
                            <div className='menu-grid-column'>
                                <div>
                                    <h3>Occasions</h3>
                                    <ul>
                                        <li><Link to="/">BirthDay</Link></li>
                                        <li><Link to="/">Thank You</Link></li>
                                        <li><Link to="/">Congratulations</Link></li>
                                        <li><Link to="/">Party</Link></li>
                                    </ul>
                                </div>
                                <div className='gift-menu'>
                                    <h3>Gifts</h3>
                                    <ul>
                                        <li><Link to="/">Pick Your Own Mix</Link></li>
                                        <li><Link to="/">Pint Club</Link></li>
                                        <li><Link to="/">Corporate Gifts</Link></li>
                                        <li><Link to="/">Gift Cards</Link></li>
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
                    <div className='desktop-hover-menu-wrap' onMouseEnter={() => handleDesktopHoverMenu(true, "Delivery")} onMouseLeave={() => handleDesktopHoverMenu(false, "")}>
                        <div className={`desktop-hover-menu ${showDesktopMenu && showDesktopValue === "Delivery" && "show-desktop-menu"}`}>
                            <div className='delivery'>
                                <div className='delivery-image-wrap mb-2'>
                                    <img src={delivery_image_1} alt="delivery_image" />
                                </div>
                                <h3>Local Delivery</h3>
                            </div>
                            <div className='delivery'>
                                <div className='delivery-image-wrap mb-2'>
                                    <img src={delivery_image_2} alt="delivery_image" />
                                </div>
                                <h3>Nationwide Shipping</h3>
                            </div>
                        </div>
                    </div>
                </nav>
            }
        </header >
    )
}

export default Navbar