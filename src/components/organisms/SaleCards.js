import '../../assets/css/components/organisms/sale-cards/o_sale-cards.scss';
import LinkButton from '../atoms/LinkButton';
import Teaser from '../molecules/Teaser';
// import TeaserContainer from './TeaserContainer';

function SaleCards({ data, isColumn }) {
	const listItems = data.map(( item, i ) => {
		const teaserData = (({ headline, paragraph, linkButtonTxt }) => ({ headline, paragraph, linkButtonTxt }))( item );

	return (
		<li className='o_sale-cards__item' key={i}>
			<a href='./' className='o_sale-cards__link'>
				<img
					className='o_sale-cards__image' alt={ item.alt } src={ item.src + '?f=s' }
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
					sizes='(min-width: 112.5em) 384px, (min-width: 56.25em) 20vw, 43vw'
					loading='lazy' />
			</a>
			<Teaser headline={ teaserData.headline } paragraph={ teaserData.paragraph } />
			<LinkButton text={ teaserData.linkButtonTxt } type='button'  />
		</li>
	)}
	);

	return (
		<ul className='o_sale-cards__list'>{ listItems }</ul>
	)
}

export default SaleCards