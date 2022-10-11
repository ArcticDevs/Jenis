import React from 'react'
import { Link } from 'react-router-dom'
import carousel_sec3_1 from '../assets/home/carousel_section_3/carousel_sec3_1.jpg'
import carousel_sec3_2 from '../assets/home/carousel_section_3/carousel_sec3_2.jpg'
import carousel_sec3_3 from '../assets/home/carousel_section_3/carousel_sec3_3.jpg'
import carousel_sec3_4 from '../assets/home/carousel_section_3/carousel_sec3_4.jpg'
import carousel_sec3_5 from '../assets/home/carousel_section_3/carousel_sec3_5.jpg'
import carousel_sec3_6 from '../assets/home/carousel_section_3/carousel_sec3_6.jpg'
import hover_sec3_1 from '../assets/home/carousel_section_3/hover_sec3_1.jpg'
import hover_sec3_2 from '../assets/home/carousel_section_3/hover_sec3_2.jpg'
import hover_sec3_3 from '../assets/home/carousel_section_3/hover_sec3_3.jpg'
import hover_sec3_4 from '../assets/home/carousel_section_3/hover_sec3_4.jpg'
import hover_sec3_5 from '../assets/home/carousel_section_3/hover_sec3_5.jpg'
import hover_sec3_6 from '../assets/home/carousel_section_3/hover_sec3_6.jpg'
import carousel_sec7_1 from '../assets/home/carousel_section_7/carousel_sec7_1.jpg'
import carousel_sec7_2 from '../assets/home/carousel_section_7/carousel_sec7_2.jpg'
import carousel_sec7_3 from '../assets/home/carousel_section_7/carousel_sec7_3.jpg'
import carousel_sec7_4 from '../assets/home/carousel_section_7/carousel_sec7_4.jpg'
import carousel_sec7_5 from '../assets/home/carousel_section_7/carousel_sec7_5.jpg'
import carousel_sec7_6 from '../assets/home/carousel_section_7/carousel_sec7_6.jpg'
import hover_sec7_1 from '../assets/home/carousel_section_7/hover_sec7_1.jpg'
import hover_sec7_2 from '../assets/home/carousel_section_7/hover_sec7_2.jpg'
import hover_sec7_3 from '../assets/home/carousel_section_7/hover_sec7_3.jpg'
import hover_sec7_4 from '../assets/home/carousel_section_7/hover_sec7_4.jpg'
import hover_sec7_5 from '../assets/home/carousel_section_7/hover_sec7_5.jpg'
import hover_sec7_6 from '../assets/home/carousel_section_7/hover_sec7_6.jpg'

const shop_card = [
	{
		id: 1,
		image: carousel_sec3_1,
		hoverImage: hover_sec3_1,
		title: "Pumpkin Cake Roll",
		body: "Sweet heirloom pumpkin ice cream swirled with spiced sweet cream cheese and cake.",
		price: 12.00,
	},
	{
		id: 2,
		image: carousel_sec3_2,
		hoverImage: hover_sec3_2,
		title: "Cookies in Cream",
		body: "Scratch-made darkest-chocolate cookies with flecks of white chocolate in vanilla-scented cream.",
		price: 12.00,
	},
	{
		id: 3,
		image: carousel_sec3_3,
		hoverImage: hover_sec3_3,
		title: "Green Mint Chip",
		body: "Peppermint cream with crunchy, bittersweet chocolate.",
		price: 12.00,
	},
	{
		id: 4,
		image: carousel_sec3_4,
		hoverImage: hover_sec3_4,
		title: "High Five Candy Bar",
		body: "Peanut butter, caramel, chocolate, and pretzels in perfect harmony.",
		price: 12.00,
	},
	{
		id: 5,
		image: carousel_sec3_5,
		hoverImage: hover_sec3_5,
		title: "Boston Cream Pie",
		body: "A salted vanilla custard layered with yellow cake pieces and darkest chocolate fudge.",
		price: 12.00,
	},
	{
		id: 6,
		image: carousel_sec3_6,
		hoverImage: hover_sec3_6,
		title: "Cream Puff",
		body: "Bright, candy-like vanilla custard with a pinch of sea salt. Toasted pastry flakes nod to the distinct texture of an Old World cream puff.",
		price: 12.00,
	},
	{
		id: 1,
		image: carousel_sec7_1,
		hoverImage: hover_sec7_1,
		title: "Brambleberry Crisp",
		body: "Oven-toasted oat streusel and a sweet-tart brambleberry jam layered throughout vanilla ice cream.",
		price: 12.00,
	},
	{
		id: 2,
		image: carousel_sec7_2,
		hoverImage: hover_sec7_2,
		title: "Brown Butter Almond Brittle",
		body: "Brown butter almond candy crushed into buttercream ice cream.",
		price: 12.00,
	},
	{
		id: 3,
		image: carousel_sec7_3,
		hoverImage: hover_sec7_3,
		title: "Gooey Butter Cake",
		body: "Cream cheese ice cream layered with crumbles of vanilla cake and a swirl of caramel-butterscotch sauce.",
		price: 12.00,
	},
	{
		id: 4,
		image: carousel_sec7_4,
		hoverImage: hover_sec7_4,
		title: "Salted Peanut Butter With Chocolate Flecks",
		body: "Salted and roasted ground peanuts with grass-grazed milk and crunchy, dark chocolate flecks.",
		price: 12.00,
	},
	{
		id: 5,
		image: carousel_sec7_5,
		hoverImage: hover_sec7_5,
		title: "Salty Caramel",
		body: "Fire-toasted sugar with sea salt, vanilla, and grass-grazed milk. A perfect balance of salty and sweet.",
		price: 12.00,
	},
	{
		id: 6,
		image: carousel_sec7_6,
		hoverImage: hover_sec7_6,
		title: "Darkest Chocolate",
		body: "Packed with Fair Trade cocoa and not much else.",
		price: 12.00,
	},
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
                <div></div>
            </div>
        </div>
    )
}

export default Shop