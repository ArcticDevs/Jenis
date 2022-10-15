import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import "../styles/Shop.css"
import { BsChevronDown } from 'react-icons/bs'
import hover_1 from '../assets/home/carousel_section_3/hover_sec3_1.jpg'

const shop_card = [
	{
		id: 1,
		body: "Peanut butter, caramel, chocolate, and pretzels in perfect harmony.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/Jenis_HighFiveCandyBar-VolcanoPint-1500px.jpg?v=1648044550",
		price: 12,
		hoverImage: hover_1,
		title: "High Five Candy Bar"
	},
	{
		id: 2,
		body: "Sweet heirloom pumpkin ice cream swirled with spiced sweet cream cheese and cake.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/Jenis_PumpkinCakeRoll-VolcanoPint-1500px.jpg?v=1648301970",
		price: 12,
		hoverImage: hover_1,
		title: "Pumpkin Cake Roll"
	},
	{
		id: 3,
		body: "Vanilla cake with lemon, blackberries, and buttercream icing. A tiered perfection.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/PDP-WeddingCake-VolcanoPint-1500px.jpg?v=1660146015",
		price: 12,
		hoverImage: hover_1,
		title: "Wedding Cake"
	},
	{
		id: 4,
		body: "Double vanilla cream with gooey fudge and chocolate-covered waffle cone chunks.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/BombasticSundaeCone-VolcanoPint-1500px.jpg?v=1655841890",
		price: 12,
		hoverImage: hover_1,
		title: "Bombastix Sundae Cone"
	},
	{
		id: 5,
		body: "Like an uber creamy, tart candied watermelon.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/PDP-WatermelonTaffy-VolcanoPint-1500px.jpg?v=1656534404",
		price: 12,
		hoverImage: hover_1,
		title: "Watermelon Taffy"
	},
	{
		id: 6,
		body: "Sun-popped popcorn ice cream with a butterscotch crunch.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/ButterscotchPopcorn-VolcanoPint-1500px.jpg?v=1655842018",
		price: 12,
		hoverImage: hover_1,
		title: "Butterscotch Popcorn"
	},
	{
		id: 7,
		body: "Tastes like fading summer sunlight topped with cracked caramel.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/Jenis_GoldenNectar-VolcanoPint-1500px.jpg?v=1646930246",
		price: 12,
		hoverImage: hover_1,
		title: "Golden Nectar"
	},
	{
		id: 8,
		body: "Sun-kissed lemon and sweet-tart tangerine with radiant passion fruit. Tastes like sunshine on a cloudy day.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/Jenis_Sunshine-VolcanoPint-1500px.jpg?v=1648566482",
		price: 12,
		hoverImage: hover_1,
		title: "Sunshine"
	},
	{
		id: 9,
		body: "Vanilla custard, raspberry jelly, and a brown sugar donut crumble.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/Jenis_PowderedJellyDonut-VolcanoPint-1500px.jpg?v=1648302210",
		price: 12,
		hoverImage: hover_1,
		title: "Powdered Jelly Donut"
	},
	{
		id: 10,
		body: "Buttercream frosting, golden cake, and a rainbow of sprinkles.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/PDP-Buttercreambirthdaycake-VolPint.jpg?v=1644607773",
		price: 12,
		hoverImage: hover_1,
		title: "Buttercream Birthday Cake"
	},
	{
		id: 11,
		body: "Cream cheese ice cream with everything bagel gravel.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/PDP-SoldOut-VolcanoPint-EverythingBagel-1500px.jpg?v=1664303257",
		price: 12,
		hoverImage: hover_1,
		title: "Everything Bagel"
	},
	{
		id: 12,
		body: "Scratch-made darkest-chocolate cookies with flecks of white chocolate in vanilla-scented cream.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/PDP-CookiesinCream-VolcanoPint-1500px.jpg?v=1646320894",
		price: 12,
		hoverImage: hover_1,
		title: "Cookies in Cream"
	},
	{
		id: 13,
		body: "Oven-toasted oat streusel and a sweet-tart brambleberry jam layered throughout vanilla ice cream.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/PDP-BrambleberryCrisp-VolPint-1500px.jpg?v=1646238144",
		price: 12,
		hoverImage: hover_1,
		title: "Brambleberry Crisp"
	},
	{
		id: 14,
		body: "Salted and roasted ground peanuts with grass-grazed milk and crunchy, dark chocolate flecks.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/Jenis_SaltedPeanutbutterWithChocolateFlecks-VolcanoPint-1500px.jpg?v=1648297373",
		price: 12,
		hoverImage: hover_1,
		title: "Salted Peanut Butter with Chocolate Flecks"
	},
	{
		id: 15,
		body: "Fire-toasted sugar with sea salt, vanilla, and grass-grazed milk. A perfect balance of salty and sweet.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/Jenis_SaltyCaramel-VolcanoPint-1500pc.jpg?v=1648297864",
		price: 12,
		hoverImage: hover_1,
		title: "Salty Caramel"
	},
	{
		id: 16,
		body: "A chocolate ice cream quadruple threat with cake, extra-bitter fudge, and chocolate pieces.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/PDP-BlackoutChocolateCake-VolcanoPint-1500px.jpg?v=1646319915",
		price: 12,
		hoverImage: hover_1,
		title: "Blackout Chocolate Cake"
	}
]

const DropdownCheckbox = ({ label, value }) => {
	return (
		<div className='dropdown-input'>
			<input className="form-check-input" type="checkbox" value={value} id="flexCheckChecked" />
			<label className="form-check-label" for="flexCheckChecked">
				{label}
			</label>
		</div>
	)
}

const Shop = () => {
	return (
		<div>
			<div className='bg-danger bg-opacity-10 text-center py-5'>
				<h1 className='text-uppercase fw-bold fs-2' style={{ letterSpacing: '1.5px' }}>ALL FLAVORS</h1>
				<p className='pt-3 w-50 m-auto fs-6 fw-normal'>Our order minimum is 4 pints. But after that it's up to you. Our boxes are designed to neatly hold up to 6, 9, or 18 pints.</p>
			</div>
			<div className=''>
				<div className='py-4 px-3'>
					<div className='d-flex justify-content-between align-items-center'>
						<div className='filter-wrap d-flex align-items-center'>
							<h3 className='fs-6 fw-bold m-0'>Filter:</h3>
							<div className="btn-group">
								<button className="btn filter-drop-btn" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
									<span className='fs-6 fw-bold'>More Filters</span>
									<BsChevronDown />
								</button>
								<ul className="dropdown-menu">
									<li>
										<div className='filter-menu-head d-flex justify-content-between align-items-center'>
											<h3 className='m-0'>0 selected</h3>
											<button>Reset</button>
										</div>
									</li>
									<li><hr className="dropdown-divider" /></li>
									<li><DropdownCheckbox label={"Dairy-Free"} value="dairy" /></li>
									<li><DropdownCheckbox label={"Fall"} value="fall" /></li>
									<li><DropdownCheckbox label={"Gluten-Free"} value="gluten" /></li>
									<li><DropdownCheckbox label={"New Arrival"} value="new" /></li>
									<li><DropdownCheckbox label={"Top Sellers"} value="top" /></li>
								</ul>
							</div>
						</div>
						<div className='sort-menu d-flex justify-content-between align-items-center gap-5'>
							<div className='select-btn d-flex align-items-center'>
								<span className=''>Sort by:</span>
								<select className="form-select" aria-label="Default select example">
									<option selected>Featured</option>
									<option value="1">Best Selling</option>
									<option value="2">Alphabetically, A-Z</option>
									<option value="3">Alphabetically, Z-A</option>
									<option value="4">Price, low to high</option>
									<option value="5">Price, High to low</option>
									<option value="6">Date, old to new</option>
									<option value="7">Date, new to old</option>
								</select>
							</div>
							<h3>{shop_card.length + " products"}</h3>
						</div>
					</div>
					<div className='chips'></div>
				</div>
				<div className='shop-card-wrap'>
					{shop_card.map((val, index) =>
						<div className='shop-card'>
							<Card cardData={val} key={index} />
						</div>
					)}
				</div>
			</div>
			<div>
				<nav aria-label="Page navigation example">
					<ul className="pagination">
						<li className="page-item">
							<a className="page-link" href="#" aria-label="Previous">
								<span aria-hidden="true">&laquo;</span>
							</a>
						</li>
						<li className="page-item"><a className="page-link" href="#">1</a></li>
						<li className="page-item"><a className="page-link" href="#">2</a></li>
						<li className="page-item"><a className="page-link" href="#">3</a></li>
						<li className="page-item">
							<a className="page-link" href="#" aria-label="Next">
								<span aria-hidden="true">&raquo;</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Shop