import { useState } from 'react'
import "../styles/Footer.css"
import useBreakpoints from '../customHooks/useBreakpoints'
import { IoBagHandleSharp } from 'react-icons/io5'
import { MdLocationOn, MdIcecream } from 'react-icons/md'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { GrFacebookOption } from 'react-icons/gr'
import { BsChevronDown } from "react-icons/bs"
import { Link } from 'react-router-dom'

const footerData = [
	{
		id: 1,
		name: "Menu",
		subList: [{ head: "All Falvor", link: "/" }, { head: "Collections", link: "/" }, { head: "Best Sellers", link: "/" }, { head: "Fall Favorites", link: "/" }, { head: "Single Serving", link: "/" }]
	},
	{
		id: 2,
		name: "Company",
		subList: [{ head: "Our Story", link: "/" }, { head: "Join Our Team", link: "/" }, { head: "Locations", link: "/" }, { head: "Franchising", link: "/" }]
	},
	{
		id: 3,
		name: "Customer Service",
		subList: [{ head: "Contact Us", link: "/" }, { head: "FAQ", link: "/" }]
	},
]

const FooterSubMenu = ({ name, subData }) => {
	const [show, setShow] = useState(false);

	return (
		<div className='footer-item'>
			<div className='footer-link' onClick={() => setShow(!show)}>
				<h3>{name}</h3>
				<BsChevronDown className={`footer-link-icon ${show ? 'reverse-icon' : undefined}`} />
			</div>
			<div className="footer-sub-menu-wrap">
				<div className={`footer-sub-menu ${show && "show-footer-menu"}`}>
					<ul>
						{subData.map((val, index) =>
							<li key={index}><Link to={val.link} className="text-dark">{val.head}</Link></li>
						)}
					</ul>
				</div>
			</div>
		</div>
	)
}

const Footer = () => {

	const { isXl } = useBreakpoints();

	return (
		<div className='container-fluid p-0 footer'>
			{/* <div className="footer-head row m-0 d-flex align-items-center bg-primary bg-opacity-25 py-5 px-3">
				<div className="col-lg-5 col-12">
					<h2 className='fs-4 fw-bold'>NEED Lorem'S NOW?</h2>
				</div>
				<div className="col-lg-2 col-md-4 col-12 footer-head-btn">
					<button className='d-flex py-3 px-3 w-100 justify-content-center align-items-center rounded-0 bg-light'>
						<IoBagHandleSharp className='footer-icon p-0 fs-4 me-2' />
						<span className='text-uppercase fs-6 fw-semibold m-0 base-theme-text'>Local Delivery</span>
					</button>
				</div>
				<div className="col-lg-2 col-md-4 col-12 my-md-0 my-4 footer-head-btn">
					<button className='d-flex py-3 px-3 w-100 justify-content-center align-items-center rounded-0 bg-light'>
						<MdIcecream className='footer-icon p-0 fs-4 me-2' />
						<span className='text-uppercase fs-6 fw-semibold m-0 base-theme-text'>Scoop Shops</span>
					</button>
				</div>
				<div className="col-lg-3 col-md-4 col-12 footer-head-btn">
					<button className='d-flex py-3 px-3 w-100 justify-content-center align-items-center rounded-0 bg-light'>
						<MdLocationOn className='footer-icon p-0 fs-4 me-2' />
						<span className='text-uppercase fs-6 fw-semibold m-0 base-theme-text'>Grocery Locator</span>
					</button>
				</div>
			</div> */}
			<div className='footer-body row m-0'>
				<div className='footer-left bg-danger bg-opacity-10 col-lg-6 col-12 ps-4'>
					<h2 className='fs-4 fw-bold'>BE THE FIRST TO KNOW ABOUT NEW FLAVORS AND MORE</h2>
					<form action="">
						<div className='row footer-form my-5 '>
							<div className='col-md-8 col-12 ps-3'>
								<label htmlFor="email" className="form-label fw-bold">Your Email</label>
								<input type="email" className="form-control" id="email" placeholder="name@email.com" />
							</div>
							<div className='col-md-4 col-12 ps-3'>
								<label htmlFor="date" className="form-label fw-bold">Your Birthday</label>
								<input type="date" className="form-control text-uppercase" id="date" />
							</div>
						</div>
						<button className='text-white text-uppercase py-3 px-5 rounded-0 base-theme-back fw-bold fs-6' style={{ letterSpacing: '2px' }} type='submit'>Submit</button>
					</form>
					<div className="footer-social-icons">
						<a href="http://" target="_blank" rel="noopener noreferrer">
							<BsInstagram />
						</a>
						<a href="http://" target="_blank" rel="noopener noreferrer">
							<GrFacebookOption />
						</a>
						<a href="http://" target="_blank" rel="noopener noreferrer">
							<BsTwitter />
						</a>
					</div>
					{/* {!isXl &&
						<div className="footer-end d-flex justify-content-start w-100 gap-5 my-4">
							<a className='text-black fw-normal' href="http://" target="_blank" rel="noopener noreferrer">Terms of Use</a>
							<a className='text-black fw-normal' href="http://" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
							<a className='text-black fw-normal' href="http://" target="_blank" rel="noopener noreferrer">Accessbility Statement</a>
						</div>
					} */}
				</div>
				{!isXl ?
					<div className='footer-right col-lg-6 col-12 bg-light d-flex flex-column justify-content-between'>
						<div className='row'>
							<div className='col d-flex flex-column'>
								<h3 className='mb-4 fs-6 fw-bold text-uppercase'>Menu</h3>
								<ul className='p-0 m-0 d-flex flex-column gap-3'>
									<li className='fs-6 fw-normal text-capitalize'><Link to="/" className='text-dark'>All Flavors</Link></li>
									<li className='fs-6 fw-normal text-capitalize'><Link to="/" className='text-dark'>Collections</Link></li>
									<li className='fs-6 fw-normal text-capitalize'><Link to="/" className='text-dark'>Best Sellers</Link></li>
									<li className='fs-6 fw-normal text-capitalize'><Link to="/" className='text-dark'>Fall Favorites</Link></li>
									<li className='fs-6 fw-normal text-capitalize'><Link to="/" className='text-dark'>Single Serving</Link></li>
								</ul>
							</div>
							<div className='col d-flex flex-column'>
								<h3 className='mb-4 fs-6 fw-bold text-uppercase'>Company</h3>
								<ul className='p-0 m-0 d-flex flex-column gap-3'>
									<li className='fs-6 fw-normal text-capitalize'><Link to="/our_story" className='text-dark'>Our Story</Link></li>
									<li className='fs-6 fw-normal text-capitalize'><Link to="/join" className='text-dark'>Join our Team</Link></li>
									<li className='fs-6 fw-normal text-capitalize'><Link to="/" className='text-dark'>Location</Link></li>
									<li className='fs-6 fw-normal text-capitalize'><Link to="/" className='text-dark'>Franchising</Link></li>
								</ul>
							</div>
							<div className='col d-flex flex-column'>
								<h3 className='mb-4 fs-6 fw-bold text-uppercase'>Customer Service</h3>
								<ul className='p-0 m-0 d-flex flex-column gap-3'>
									<li className='fs-6 fw-normal text-capitalize'><Link to="/" className='text-dark'>Contact us</Link></li>
									<li className='fs-6 fw-normal text-capitalize'><Link to="/" className='text-dark'>FaQ</Link></li>
								</ul>
							</div>
						</div>
						<div className="row footer-end mt-auto">
							<h5 className='fw-normal text-uppercase fs-6 w-100'>©2022 The Bros Creamery, LLC. ALL RIGHTS RESERVED</h5>
						</div>
					</div>
					:
					<div className='footer-mob-grid px-3 ps-4'>
						<div className='footer-menu '>
							{footerData.map((val, index) =>
								<FooterSubMenu name={val.name} subData={val.subList} key={index} />
							)}
						</div>
						{/* <div className="footer-end border-top border-bottom border-1 border-opacity-50 border-dark d-flex justify-content-start w-100 gap-5 py-4">
							<a className='text-black fw-normal' href="http://" target="_blank" rel="noopener noreferrer">Terms of Use</a>
							<a className='text-black fw-normal' href="http://" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
							<a className='text-black fw-normal' href="http://" target="_blank" rel="noopener noreferrer">Accessbility Statement</a>
						</div> */}
						<div className="footer-end pt-3">
							<h5 className='fw-normal text-uppercase fs-6 w-100'>©2022 The Bros Creamery, LLC. ALL RIGHTS RESERVED</h5>
						</div>
					</div>
				}
			</div>
		</div>
	)
}

export default Footer