import { useState, useMemo } from 'react';
import '../../assets/css/components/organisms/gallery/o_gallery.scss'
import ProductList from '../molecules/ProductList'

function Item({ item, i }) {
	const [ hoverStart, setHoverStart ] = useState('end'); // 'end', 'gallery', 'product'

	const contents = useMemo(() =>
		<img
			className='o_gallery__image'
			alt={ item.alt }
			src={ item.src + '?f=s' }
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
			sizes={ item.main ? '(min-width: 112.5em) 789px, (min-width: 56.25em) 43vw, 88vw' : '(min-width: 112.5em) 384px, (min-width: 56.25em) 20vw, 43vw' }
			loading='lazy' />,
			// eslint-disable-next-line react-hooks/exhaustive-deps
			[] );

	return (
		<li
			className={ 'o_gallery__item '}
			onMouseEnter={() => setHoverStart('gallery')}
			onMouseLeave={() => setHoverStart('end')}>
			<a href='./' className='o_gallery__link'>
				{ contents }
			</a>
			{ item.details && 
				<ProductList
					data={ item.details }
					hoverStart={ hoverStart }
					setHoverStart={setHoverStart}
					isFirstGallery={ i === 0 } />
			}
		</li>
	)
}

function Gallery({ data }) {

	const contents = data.map((item, i) => {
		return (
			<Item item={ item } i={ i } key={ i } />
		)
	})
	return (
		<ul className='o_gallery__list'>
			{ contents }
		</ul>
	)
}

export default Gallery