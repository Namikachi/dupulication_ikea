import { useState } from 'react';
import '../../assets/css/components/molecules/product-list/m_product-list.scss';

import { ReactComponent as ChevronIcon } from '../../assets/images/chevron-icon.svg';

function Item({ item, hoverStart, setHoverStart, isFirstGallery, isFirstProduct }) {
	const [isActive, setIsActive] = useState(false);

	// judge show card or not by add className
	function judgeDisplayCard() {
		// a first gallery's first product is always shown except the other first gallery's products are hovered
		if(isFirstGallery && isFirstProduct && hoverStart !== 'product') {
			return true

		// hovered products
		} else if(isActive) {
			return true
		} else {
			return false
		}
	}

	const activeClass = judgeDisplayCard() ? 'm_product-list__item--active': '';
	const styleDot = window.innerWidth >= 900 ? item.position.dot.pc : window.innerWidth >= 600 ? item.position.dot.tb : item.position.dot.sp;
	const styleCard = 'm_product-list__cardLink--' + item.position.card;

	return (
		<li
			className={ 'm_product-list__item ' + activeClass }
			onMouseEnter={() => {
				setIsActive(true);
				setHoverStart('product');
			}}
			onMouseLeave={() => {
				setIsActive(false);
			}}
			style={{ top: styleDot.top + '%' , left: styleDot.left + '%' }}>
			{ item.new && <div></div> }
			<a href={ item.link } className='m_product-list__link m_product-list__link--pc'><span></span></a>
			<span className='m_product-list__link m_product-list__link--sp'><span></span></span>
			<a href={ item.link } className={'m_product-list__cardLink ' + styleCard}>
				<div className='m_product-list__cardTxtWrapper'>
					<h3>
						<div className='m_product-list__cardTxtInner'>
							<span className='m_product-list__cardTitle'>{ item.title }</span>
							<span className='m_product-list__cardTxt'>{ item.text }</span>
						</div>
					</h3>
					<span className='m_product-list__price'>
						<span className='m_product-list__dollar'>$</span>
						<span className='m_product-list__priceInteger'>{ String(item.price).split('.')[0] }</span>
						<span className='m_product-list__decimals'>.{ item.price.toFixed(2).slice(-2) }</span>
					</span>
				</div>
				<div className='m_product-list__cardIconWrapper'><ChevronIcon /></div>
			</a>
		</li>
	)
}

function ProductList({ data, hoverStart, setHoverStart, isFirstGallery }) {
	const activeGalleryClass = isFirstGallery || hoverStart !== 'end' ? 'm_product-list--active-gallery': '';
	const contents = data.map(( item, i ) => {
		return (
			<Item
				key={ i }
				item={ item }
				i={ i }
				hoverStart={ hoverStart }
				setHoverStart={ setHoverStart }
				isFirstGallery={ isFirstGallery }
				isFirstProduct={ i === 0 } />
		)
	})

	return (
		<ul className={'m_product-list ' + activeGalleryClass}>
			{ contents }
		</ul>
	)
}

export default ProductList