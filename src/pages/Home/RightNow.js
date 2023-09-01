import '../../assets/css/pages/home/rightNow/rightNow.scss';
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow-icon.svg';
import Headline from '../../components/atoms/Headline';

import { data } from '../../data/rightNow/rightNow'
import MainSection from '../../components/templates/MainSection';

function RightNow() {
	const listItems = data.map(( item, i ) => {
		const modifier = 'rightNow__inner--' + item.theme;
		return (
			<li className='rightNow__item' key={ i }>
				<a href='./' className='rightNow__link'>
					<img className='rightNow__image' alt={ item.alt } src={ item.src + '?f=s' } 
						srcSet={
							item.src + '?f=sg 1600w,' +
							item.src + '?f=xxxl 1400w,' +
							item.src + '?f=xxl 950w,' +
							item.src + '?f=xl 800w,' +
							item.src + '?f=l 750w,' +
							item.src + '?f=m 600w,' +
							item.src + '?f=s 500w,' +
							item.src + '?f=xs 400w,' +
							item.src + '?f=xxs 300w,' +
							item.src + '?f=xxxs 240w'
						}
						sizes='(min-width: 56.25em) 27vw, (min-width: 37.5em) 43vw, 85vw' loading="lazy" />
					<div className={ 'rightNow__inner ' + modifier }>
						<div>
							<h3 className='rightNow__subTitle'>{ item.headline }</h3>
							<p className='rightNow__text'>{ item.paragraph }</p>
						</div>
						<span className='rightNow__arrowWrapper'>
							<ArrowIcon className='rightNow__arrowIcon'/>
						</span>
					</div>
				</a>
			</li>
		)
	})

	const contents = <>
		<Headline headline='Right Now at IKEA' />
		<div className='rightNow__cardWrapper'>
			<button aria-controls='carousel'></button>
			<div className='rightNow__cardInner'>
				<ul className='rightNow__list' id='carousel'>
					{	listItems }
				</ul>
			</div>
			<button aria-controls='carousel'></button>
		</div>
		<div
			className='rightNow__indicator'
			role='scrollbar'
			aria-controls='carousel'
			aria-valuemin='0'
			aria-valuenow='0'
			aria-valuemax='100'
			>
		</div>
	</> 

	return (
		<MainSection contents={ contents }/>
	)
}

export default RightNow