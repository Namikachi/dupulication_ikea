import '../../assets/css/components/about/about.scss';
import Headline from '../../components/atoms/Headline';
import MainSection from '../../components/templates/MainSection';

function About() {
	const contents = <>
		<Headline headline='This is IKEA' />
		<div className='about__wrapper'>
			<div className='about__inner'>
				<p className='about__subTitle'>Sustainable everyday</p>
				<p className='about__text'>How sustainable is IKEA? Well, more sustainable every day. With products like veggie hot dogs, and energy-saving solutions, we’re paving the way for more sustainable homes for the many.</p>
				<a className='about__link' href='./'>Learn more</a>
			</div>
			<div className='about__inner'>
				<p className='about__subTitle'>Climate and environment</p>
				<p className='about__text'>Find out how IKEA invests, inspires and acts to tackle environmental issues, reduce carbon footprints and drive positive change on a global scale.</p>
				<a className='about__link' href='./'>Learn more</a>
			</div>
			<div className='about__inner'>
				<p className='about__subTitle'>Work with us</p>
				<p className='about__text'>Coming from all over the world, our IKEA co-workers share a special set of values and a vision to enable people to live a better, more sustainable everyday life. They come together within diverse, inclusive, open IKEA work environments, where each of them offers something unique.</p>
				<a className='about__link' href='./'>Learn more</a>
			</div>
		</div>
	</>
	return (
		<MainSection contents={ contents } className='about' />
	)
}

export default About