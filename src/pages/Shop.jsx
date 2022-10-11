import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import "../styles/Shop.css"

const shop_card = [
	{
		id: 1,
		body: "Peanut butter, caramel, chocolate, and pretzels in perfect harmony.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/Jenis_HighFiveCandyBar-VolcanoPint-1500px.jpg?v=1648044550",
		price: 12,
		title: "High Five Candy Bar"
	},
	{
		id: 2,
		body: "Sweet heirloom pumpkin ice cream swirled with spiced sweet cream cheese and cake.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/Jenis_PumpkinCakeRoll-VolcanoPint-1500px.jpg?v=1648301970",
		price: 12,
		title: "Pumpkin Cake Roll"
	},
	{
		id: 3,
		body: "Vanilla cake with lemon, blackberries, and buttercream icing. A tiered perfection.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/PDP-WeddingCake-VolcanoPint-1500px.jpg?v=1660146015",
		price: 12,
		title: "Wedding Cake"
	},
	{
		id: 4,
		body: "Double vanilla cream with gooey fudge and chocolate-covered waffle cone chunks.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/BombasticSundaeCone-VolcanoPint-1500px.jpg?v=1655841890",
		price: 12,
		title: "Bombastix Sundae Cone"
	},
	{
		id: 5,
		body: "Like an uber creamy, tart candied watermelon.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/PDP-WatermelonTaffy-VolcanoPint-1500px.jpg?v=1656534404",
		price: 12,
		title: "Watermelon Taffy"
	},
	{
		id: 6,
		body: "Sun-popped popcorn ice cream with a butterscotch crunch.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/ButterscotchPopcorn-VolcanoPint-1500px.jpg?v=1655842018",
		price: 12,
		title: "Butterscotch Popcorn"
	},
	{
		id: 7,
		body: "Tastes like fading summer sunlight topped with cracked caramel.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/Jenis_GoldenNectar-VolcanoPint-1500px.jpg?v=1646930246",
		price: 12,
		title: "Golden Nectar"
	},
	{
		id: 8,
		body: "Sun-kissed lemon and sweet-tart tangerine with radiant passion fruit. Tastes like sunshine on a cloudy day.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/Jenis_Sunshine-VolcanoPint-1500px.jpg?v=1648566482",
		price: 12,
		title: "Sunshine"
	},
	{
		id: 9,
		body: "Vanilla custard, raspberry jelly, and a brown sugar donut crumble.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/Jenis_PowderedJellyDonut-VolcanoPint-1500px.jpg?v=1648302210",
		price: 12,
		title: "Powdered Jelly Donut"
	},
	{
		id: 10,
		body: "Buttercream frosting, golden cake, and a rainbow of sprinkles.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/PDP-Buttercreambirthdaycake-VolPint.jpg?v=1644607773",
		price: 12,
		title: "Buttercream Birthday Cake"
	},
	{
		id: 11,
		body: "Cream cheese ice cream with everything bagel gravel.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/PDP-SoldOut-VolcanoPint-EverythingBagel-1500px.jpg?v=1664303257",
		price: 12,
		title: "Everything Bagel"
	},
	{
		id: 12,
		body: "Scratch-made darkest-chocolate cookies with flecks of white chocolate in vanilla-scented cream.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/PDP-CookiesinCream-VolcanoPint-1500px.jpg?v=1646320894",
		price: 12,
		title: "Cookies in Cream"
	},
	{
		id: 13,
		body: "Oven-toasted oat streusel and a sweet-tart brambleberry jam layered throughout vanilla ice cream.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/PDP-BrambleberryCrisp-VolPint-1500px.jpg?v=1646238144",
		price: 12,
		title: "Brambleberry Crisp"
	},
	{
		id: 14,
		body: "Salted and roasted ground peanuts with grass-grazed milk and crunchy, dark chocolate flecks.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/Jenis_SaltedPeanutbutterWithChocolateFlecks-VolcanoPint-1500px.jpg?v=1648297373",
		price: 12,
		title: "Salted Peanut Butter with Chocolate Flecks"
	},
	{
		id: 15,
		body: "Fire-toasted sugar with sea salt, vanilla, and grass-grazed milk. A perfect balance of salty and sweet.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/Jenis_SaltyCaramel-VolcanoPint-1500pc.jpg?v=1648297864",
		price: 12,
		title: "Salty Caramel"
	},
	{
		id: 16,
		body: "A chocolate ice cream quadruple threat with cake, extra-bitter fudge, and chocolate pieces.",
		image: "https://cdn.shopify.com/s/files/1/0592/5476/7822/products/PDP-BlackoutChocolateCake-VolcanoPint-1500px.jpg?v=1646319915",
		price: 12,
		title: "Blackout Chocolate Cake"
	}
]

const Shop = () => {
	return (
		<div>
			<div className='bg-danger bg-opacity-10 text-center py-5'>
				<h1 className='text-uppercase fw-bold fs-2' style={{ letterSpacing: '1.5px' }}>ALL FLAVORS</h1>
				<p className='pt-3 w-50 m-auto fs-6 fw-normal'>Our order minimum is 4 pints. But after that it's up to you. Our boxes are designed to neatly hold up to 6, 9, or 18 pints.</p>
			</div>
			<div className=''>
				<div></div>
				<div className='shop-card-wrap py-5'>
					{shop_card.map((val, index) =>
						<div className='shop-card'>
							<Card cardData={val} key={index} />
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Shop