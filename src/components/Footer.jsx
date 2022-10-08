import React from 'react'
import "../styles/Footer.css"
import { IoBagHandleSharp } from 'react-icons/io5'
import { MdLocationOn, MdIcecream } from 'react-icons/md'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { GrFacebookOption } from 'react-icons/gr'

const Footer = () => {
	return (
		<div className='container-fluid p-0 footer'>
			<div className="footer-head row d-flex align-items-center bg-primary bg-opacity-25 py-5 px-3">
				<div className="col-5">
					<h2 className='fs-4 fw-bold'>NEED JENI'S NOW?</h2>
				</div>
				<div className="col-2 footer-head-btn">
					<button className='d-flex py-3 px-3 w-100 justify-content-center align-items-center rounded-0 bg-light'>
						<IoBagHandleSharp className='footer-icon p-0 fs-4 me-2' />
						<span className='text-uppercase fs-6 fw-semibold m-0 jeni-theme-text'>Local Delivery</span>
					</button>
				</div>
				<div className="col-2 footer-head-btn">
					<button className='d-flex py-3 px-3 w-100 justify-content-center align-items-center rounded-0 bg-light'>
						<MdIcecream className='footer-icon p-0 fs-4 me-2' />
						<span className='text-uppercase fs-6 fw-semibold m-0 jeni-theme-text'>Scoop Shops</span>
					</button>
				</div>
				<div className="col-3 footer-head-btn">
					<button className='d-flex py-3 px-3 w-100 justify-content-center align-items-center rounded-0 bg-light'>
						<MdLocationOn className='footer-icon p-0 fs-4 me-2' />
						<span className='text-uppercase fs-6 fw-semibold m-0 jeni-theme-text'>Grocery Locator</span>
					</button>
				</div>
			</div>
			<div className='footer-body row px-3'>
				<div className='footer-left bg-danger bg-opacity-10 col-6'>
					<h2 className='fs-4 fw-bold'>BE THE FIRST TO KNOW ABOUT NEW FLAVORS AND MORE</h2>
					<form action="">
						<div className='footer-form my-5'>
							<div className='col-8'>
								<label htmlFor="email" className="form-label fw-bold">Your Email</label>
								<input type="email" className="form-control" id="email" placeholder="name@email.com" />
							</div>
							<div className='col'>
								<label htmlFor="date" className="form-label fw-bold">Your Birthday</label>
								<input type="date" className="form-control text-uppercase" id="date" />
							</div>
						</div>
						<button className='text-white text-uppercase py-3 px-5 rounded-0 jeni-theme-back fw-bold fs-6' style={{ letterSpacing: '2px' }} type='submit'>Submit</button>
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
					<div className="footer-end d-flex justify-content-start w-100 gap-5 my-4">
						<a className='text-black fw-normal' href="http://" target="_blank" rel="noopener noreferrer">Terms of Use</a>
						<a className='text-black fw-normal' href="http://" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
						<a className='text-black fw-normal' href="http://" target="_blank" rel="noopener noreferrer">Accessbility Statement</a>
					</div>
				</div>
				<div className='footer-right col-6 bg-light d-flex flex-column justify-content-between'>
					<div className='row'>
						<div className='col d-flex flex-column'>
							<h3 className='mb-4 fs-6 fw-bold text-uppercase'>SHOP</h3>
							<ul className='p-0 m-0 d-flex flex-column gap-3'>
								<li className='fs-6 fw-normal text-capitalize'>All Falvors</li>
								<li className='fs-6 fw-normal text-capitalize'>Collections</li>
								<li className='fs-6 fw-normal text-capitalize'>Pint Club</li>
								<li className='fs-6 fw-normal text-capitalize'>Merch</li>
								<li className='fs-6 fw-normal text-capitalize'>Gift Cards</li>
							</ul>
						</div>
						<div className='col d-flex flex-column'>
							<h3 className='mb-4 fs-6 fw-bold text-uppercase'>Company</h3>
							<ul className='p-0 m-0 d-flex flex-column gap-3'>
								<li className='fs-6 fw-normal text-capitalize'>Our Story</li>
								<li className='fs-6 fw-normal text-capitalize'>Jeni Britton</li>
								<li className='fs-6 fw-normal text-capitalize'>Join our Team</li>
								<li className='fs-6 fw-normal text-capitalize'>Events & catering</li>
								<li className='fs-6 fw-normal text-capitalize'>Corporate Gifting</li>
								<li className='fs-6 fw-normal text-capitalize'>Fundraising</li>
							</ul>
						</div>
						<div className='col d-flex flex-column'>
							<h3 className='mb-4 fs-6 fw-bold text-uppercase'>Customer Service</h3>
							<ul className='p-0 m-0 d-flex flex-column gap-3'>
								<li className='fs-6 fw-normal text-capitalize'>Contact us</li>
								<li className='fs-6 fw-normal text-capitalize'>FaQ</li>
								<li className='fs-6 fw-normal text-capitalize'>Shipping & Returns</li>
								<li className='fs-6 fw-normal text-capitalize'>Ingredients & Nutrition</li>
								<li className='fs-6 fw-normal text-capitalize'>wholesale</li>
							</ul>
						</div>
					</div>
					<div className="row footer-end mt-auto">
						<h5 className='fw-normal text-uppercase fs-6 w-100'>©2022 JENI'S SPLENDID ICE CREAMS, LLC. ALL RIGHTS RESERVED</h5>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer