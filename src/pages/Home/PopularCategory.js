import '../../assets/css/pages/home/popularCategory/popularCategory.scss';
import Headline from '../../components/atoms/Headline';

import { data } from '../../data/popularCategories/popularCategories'
import MainSection from '../../components/templates/MainSection';
import LinkButton from '../../components/atoms/LinkButton';

function PopularCategory() {
	const listItemsGrid = data.map((item, i) => {
		return (
			<li className='popularCategory__itemGrid' key={ i }>
				<a href='./'>
					<span className='popularCategory__inner'>
						<img className='popularCategory__image' alt={ item.alt } src={ item.src } loading="lazy" />
					</span>
				</a>
				<a href='./' className='popularCategory__txtLink'>{ item.text }</a>
			</li>
		)
	})

	const listItemsFlex = data.map((item, i) => {
		if( i > 4 ) return false;
		return (
			<li className='popularCategory__itemFlex' key={ i }>
				<a href='./' className='popularCategory__linkFlex'>
					<span className='popularCategory__wrapperFlex'>
						<span className='popularCategory__innerFlex'>
							<img className='popularCategory__imageFlex' alt={ item.alt } src={ item.src } loading="lazy" />
						</span>
					</span>
					<span className='popularCategory__textFlex'>{ item.text }</span>
				</a>
			</li>
		)
	})

	const contents = <>
		<Headline headline='Popular categories' />
			<ul className='popularCategory__listGrid'>
				{ listItemsGrid }
			</ul>
			<ul className='popularCategory__listFlex'>
				{ listItemsFlex }
			</ul>
			<div className='popularCategory__more'>
				<LinkButton text='View all categories' type='button' />
			</div>
		</>
	return (
		<MainSection contents={ contents }/>
	)
}

export default PopularCategory