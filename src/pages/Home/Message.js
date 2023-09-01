import '../../assets/css/pages/home/message/message.scss';
import Headline from '../../components/atoms/Headline';
import MainSection from '../../components/templates/MainSection';

function Message() {
	const contents = 
		<div className='message__wrapper'>
			<Headline headline='Furniture and inspiration for a better everyday life at home'/>
			<p className='message__text'>Welcome to IKEA, where you will always find affordable furniture, stylish home décor and innovative modern home solutions, as well as design inspiration and unique home ideas! If you are online furniture shopping or if you are visiting a local IKEA store near you, you can expect super low prices on a wide variety of exciting home essentials that are perfect for larger homes and small space living. So what are you waiting for? Refresh your home with affordable options for the living room, bed, bath and beyond today! </p>
			<p className='message__text'>If you want to save even more money when you are shopping at IKEA, be sure to join IKEA Family so you can take advantage of our regular furniture sales, amazing deals on home furnishings and special offers on home accessories. Get ready for big savings whether you are refreshing your space with small upgrades, like new curtains or sheets, or planning bigger home renovation projects, like remodeling your kitchen or doing a DIY bathroom makeover! </p>
			<p className='message__text'>So, now you are probably wondering, “How do I find an IKEA furniture store near me?” Check out the IKEA Store Locator and we hope to see you soon! IKEA also has many new ways to shop. Want to shop online from the comfort of your sofa? No problem, we’ve made shopping online at IKEA easier than ever. Browse our full store experience online to find affordable home goods for every room, including home office, living room, kitchen, bathroom, bedroom and outdoor furniture, and get deliveries straight to your doorstep! We also offer Click-and-collect where you can buy online and pick-up in store for even faster and easier shopping. </p>
		</div>
	return (
		<MainSection contents={ contents }/>
	)
}

export default Message