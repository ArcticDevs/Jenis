import React from 'react'
import "../styles/Home.css"
import home_1 from "../assets/home/Home_1.jpg"
import sparkle_1 from "../assets/home/sparkle_1.png"
import sparkle_2 from "../assets/home/sparkle_2.png"
import { Link } from 'react-router-dom'
import carousel_sec3_1 from '../assets/home/carousel_section_3/carousel_sec3_1.jpg'
import carousel_sec3_2 from '../assets/home/carousel_section_3/carousel_sec3_2.jpg'
import carousel_sec3_3 from '../assets/home/carousel_section_3/carousel_sec3_3.jpg'
import hover_sec3_1 from '../assets/home/carousel_section_3/hover_sec3_1.jpg'
import hover_sec3_2 from '../assets/home/carousel_section_3/hover_sec3_2.jpg'
import hover_sec3_3 from '../assets/home/carousel_section_3/hover_sec3_3.jpg'
import hover_sec3_4 from '../assets/home/carousel_section_3/hover_sec3_4.jpg'
import hover_sec3_5 from '../assets/home/carousel_section_3/hover_sec3_5.jpg'
import hover_sec3_6 from '../assets/home/carousel_section_3/hover_sec3_6.jpg'
import carousel_sec7_1 from '../assets/home/carousel_section_7/carousel_sec7_1.jpg'
import carousel_sec7_2 from '../assets/home/carousel_section_7/carousel_sec7_2.jpg'
import carousel_sec7_3 from '../assets/home/carousel_section_7/carousel_sec7_3.jpg'
import hover_sec7_1 from '../assets/home/carousel_section_7/hover_sec7_1.jpg'
import hover_sec7_2 from '../assets/home/carousel_section_7/hover_sec7_2.jpg'
import hover_sec7_3 from '../assets/home/carousel_section_7/hover_sec7_3.jpg'
import hover_sec7_4 from '../assets/home/carousel_section_7/hover_sec7_4.jpg'
import hover_sec7_5 from '../assets/home/carousel_section_7/hover_sec7_5.jpg'
import hover_sec7_6 from '../assets/home/carousel_section_7/hover_sec7_6.jpg'
import Carousel from '../components/Carousel'
import home_sec4 from "../assets/home/home_sec4.jpg"
import home_sec5_1 from "../assets/home/home_sec5_1.png"
import home_sec5_2 from "../assets/home/home_sec5_2.png"
import home_sec5_3 from "../assets/home/home_sec5_3.png"
// import home_delivery from "../assets/home/home_delivery.gif"
import home_del_1 from "../assets/home/home_del_1.png"
import home_del_2 from "../assets/home/home_del_2.png"
import home_del_3 from "../assets/home/home_del_3.png"
import home_sec8 from "../assets/home/home_sec8.jpg"
import home_sec8_1 from "../assets/home/home_sec8_1.png"
import home_sec8_2 from "../assets/home/home_sec8_2.png"
import home_sec8_3 from "../assets/home/home_sec8_3.png"
import quote from "../assets/quote.png"
import Slider from "react-slick";
import home_sec9_1 from "../assets/home/home_sec9_1.png"
import home_sec9_2 from "../assets/home/home_sec9_2.jpg"
import home_sec9_3 from "../assets/home/home_sec9_3.jpg"
import home_sec9_4 from "../assets/home/home_sec9_4.jpg"
import story_1 from '../assets/story_1.jpg'
import useBreakpoints from '../customHooks/useBreakpoints'

const carouselSection3 = [
	{
		id: 1,
		image: carousel_sec3_1,
		hoverImage: hover_sec3_1,
		title: "Flavor 1",
		body: "Sweet heirloom pumpkin ice cream swirled with spiced sweet cream cheese and cake.",
		price: "XX.XX",
	},
	{
		id: 2,
		image: carousel_sec3_2,
		hoverImage: hover_sec3_2,
		title: "Flavor 2",
		body: "Scratch-made darkest-chocolate cookies with flecks of white chocolate in vanilla-scented cream.",
		price: "XX.XX",
	},
	{
		id: 3,
		image: carousel_sec3_3,
		hoverImage: hover_sec3_3,
		title: "Flavor 3",
		body: "Peppermint cream with crunchy, bittersweet chocolate.",
		price: "XX.XX",
	},
	{
		id: 4,
		image: carousel_sec3_1,
		hoverImage: hover_sec3_4,
		title: "Flavor 4",
		body: "Peanut butter, caramel, chocolate, and pretzels in perfect harmony.",
		price: "XX.XX",
	},
	{
		id: 5,
		image: carousel_sec3_2,
		hoverImage: hover_sec3_5,
		title: "Flavor 5",
		body: "A salted vanilla custard layered with yellow cake pieces and darkest chocolate fudge.",
		price: "XX.XX",
	},
	{
		id: 6,
		image: carousel_sec3_3,
		hoverImage: hover_sec3_6,
		title: "Flavor 6",
		body: "Bright, candy-like vanilla custard with a pinch of sea salt. Toasted pastry flakes nod to the distinct texture of an Old World cream puff.",
		price: "XX.XX",
	},
]
const carouselSection7 = [
	{
		id: 1,
		image: carousel_sec7_1,
		hoverImage: hover_sec7_1,
		title: "Brambleberry Crisp",
		body: "Oven-toasted oat streusel and a sweet-tart brambleberry jam layered throughout vanilla ice cream.",
		price: "XX.XX",
	},
	{
		id: 2,
		image: carousel_sec7_2,
		hoverImage: hover_sec7_2,
		title: "Brown Butter Almond Brittle",
		body: "Brown butter almond candy crushed into buttercream ice cream.",
		price: "XX.XX",
	},
	{
		id: 3,
		image: carousel_sec7_3,
		hoverImage: hover_sec7_3,
		title: "Gooey Butter Cake",
		body: "Cream cheese ice cream layered with crumbles of vanilla cake and a swirl of caramel-butterscotch sauce.",
		price: "XX.XX",
	},
	{
		id: 4,
		image: carousel_sec7_1,
		hoverImage: hover_sec7_4,
		title: "Salted Peanut Butter With Chocolate Flecks",
		body: "Salted and roasted ground peanuts with grass-grazed milk and crunchy, dark chocolate flecks.",
		price: "XX.XX",
	},
	{
		id: 5,
		image: carousel_sec7_2,
		hoverImage: hover_sec7_5,
		title: "Salty Caramel",
		body: "Fire-toasted sugar with sea salt, vanilla, and grass-grazed milk. A perfect balance of salty and sweet.",
		price: "XX.XX",
	},
	{
		id: 6,
		image: carousel_sec7_3,
		hoverImage: hover_sec7_6,
		title: "Darkest Chocolate",
		body: "Packed with Fair Trade cocoa and not much else.",
		price: "XX.XX",
	},
]

const section8Data = [
	{
		id: 1,
		image: home_sec8_1,
		head: "The best ice cream in the whole damn world."
	},
	{
		id: 2,
		image: home_sec8_2,
		head: "No one else makes ice cream like Lorem."
	},
	{
		id: 3,
		image: home_sec8_3,
		head: "All it takes one bite to get hooked."
	},
]

const Home = () => {

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true
	};

	const { isMd } = useBreakpoints();

	return (
		<div className='container-fluid p-0'>
			<div className="home-section-1">
				<div className='home-sec1-image'>
					<img src={home_1} alt="home_image" />
				</div>
				<div className="home-section-1-content">
					<h4 className="small-text-above-content">Hold Up</h4>
					<h2>EXQUISITE ORGANIC FLAVOR COLLECTION</h2>
					<h4 className='my-4'>Ice creams that’ll ease you out of summer.</h4>
					<button className='btn' type='button'>EXPLORE BLENDS </button>
				</div>
			</div>
			<div className="home-section-2 pt-5 mt-5 mx-auto">
				
				<div className='d-flex justify-content-between align-items-start'>
					<img src={sparkle_1} alt="sparkle_image" />
					<h2 className='fw-bold'>THE POTENTIAL OF BLENDED FLAVORS</h2>
					<img src={sparkle_2} alt="sparkle_image" />
				</div>
				<h3 className='my-4 mb-5 fs-6 text-center'>We fuse exceptional flavours with a range of 25000+ combinations to create luscious swirls for you.</h3>
				<div className='text-center'><Link to="/" className='text-transform-uppercase fw-bold pb-2 border-bottom border-1'>EXPLORE THE FLAVORS</Link></div>
				
			</div>
			<div className="home-section-3">
				<div className="sec-head">
					<h2 className='text-uppercase'>TRUE INGREDIENTS FOR THE BEST FLAVORS </h2>
					<p>Gather your loved ones, turn up the holiday cheer, and enjoy these holiday favourite flavours with numerous ingredients to choose from.</p>
				</div>
				<Carousel carouselData={carouselSection3} />
			</div>
			<div className="home-section-4">
				<div className='sec4-image'>
					<img src={home_sec4} alt="Sec4_Image" />
				</div>
				<div className='sec4-content-wrap'>
					<div className="sec4-content">
						<h4 className="small-text-above-content">Personalise your Palette</h4>
						<h2>THE IDEAL MIX JUST FOR YOU</h2>
						<h4 className='my-4'>Our love for ice cream is as deep as your playlist. So we want you to use our flavours to craft your own ice cream box, customized just for you!</h4>
						<button className='btn' type='button'>SAVOR THE SWEETNESS</button>
					</div>
				</div>
			</div>
			<div className="home-section-5">
				<h2 style={{textTransform: "uppercase"}}>Looking for a new flavour ?</h2>
				<div className="home-sec5-grid">
					<div className='home-sec5-item'>
						<div className='home-sec5-grid--image'>
							<img src={home_sec5_1} alt="" />
						</div>
						<div className='home-sec5-grid--content'>
							<h3 style={{margin:'-10px 0'}}>Looking for a new flavour ?</h3>
							<p>We use fresh, natural ingredients without preservatives, artificial flavours, or dyes to craft our delicious frozen creations.</p>
						</div>
					</div>
					<div className='home-sec5-item'>
						<div className='home-sec5-grid--image'>
							<img src={home_sec5_2} alt="" />
						</div>
						<div className='home-sec5-grid--content'>
							<h3 style={{margin:'-10px 0'}}>SUPERLATIVE QUALITY </h3>
							<p>Unlike other ice cream makers, our unique process makes the ice cream inside stay soft & swirly all the way down to the bottom of the cones.</p>
						</div>
					</div>
					<div className='home-sec5-item'>
						<div className='home-sec5-grid--image'>
							<img src={home_sec5_3} alt="" />
						</div>
						<div className='home-sec5-grid--content'>
							<h3 style={{margin:'-10px 0'}}>UNCANNY UNIQUENESS</h3>
							<p>We've created the world’s most unique ice cream flavors that you simply won't find anywhere else.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="home-section-6">
				<div className="home-sec6-content-wrap">
					<div className="home-sec6-content">
						<h6 className="small-text-above-content">So Much to Choose From</h6>
						<h3>We're the new ice cream guys and we're just getting started.</h3>
						<div className='sec6-content-list'>
							<div className='content-item'>
								{/* <div className='item-image'>
									<img src={home_del_1} alt="" />
								</div> */}
								<p>Treat yourself with a taste of adventure and spice up your daily routine with new flavors, or indulge in the classics. We’ve got it all!</p>
							</div>
							<div className='content-item'>
								{/* <div className='item-image'>
									<img src={home_del_2} alt="" />
								</div> */}
								<p>Think chocolate-covered espresso beans or brownie batter or ganache. Make that moment and make it sweet, because our flavors are out of this world and so are you.</p>
							</div>
							<div className='content-item'>
								{/* <div className='item-image'>
									<img src={home_del_3} alt="" />
								</div> */}
								<p>From classics like Cookie Dough & Mint, to combinations like our Caramel & Chocolate Fudge Brownie, we will always have your back when it comes to ice cream satisfaction.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="home-sec6-image">
					<img src={story_1} alt="Delivery" />
				</div>
			</div>
			<div className="home-section-7">
				<div className="sec-head">
					<h2>The Best of the Best</h2>
					<p>If you're looking for a flavor that really pops, our ice creams will do just the trick. These unique combinations will wow you and everyone that tries a bite! </p>
				</div>
				<Carousel carouselData={carouselSection7} />
			</div>
			<div className="home-section-8">
				<div className="sec8-content">
					<Slider {...settings}>
						{section8Data.map((val, index) =>
							<div className='sec8-item' key={index}>
								<div className='sec8-quote-image'>
									<img src={quote} alt="" />
								</div>
								<h3>{val.head}</h3>
								<div className='sec8-item-image'>
									<img src={val.image} alt="" />
								</div>
							</div>
						)}
					</Slider>
				</div>
				<div className="sec8-image">
					<img src={home_sec8} alt="" />
				</div>
			</div>
			<div className="home-section-9">
				<h3 className='mb-5'>FOLLOW US ON INSTAGRAM</h3>
				<a href="https://instagram.com/jenisicecreams" target="_blank" rel="noopener noreferrer">@jenisicecreams</a>
				<div className='sec9-grid-wrap mt-5'>
					<div className='sec9-grid'>
						<div className='sec9-image'>
							<img src={home_sec9_1} alt="" />
						</div>
						<div className='sec9-image'>
							<img src={home_sec9_2} alt="" />
						</div>
						<div className='sec9-image'>
							<img src={home_sec9_3} alt="" />
						</div>
						<div className='sec9-image'>
							<img src={home_sec9_4} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home