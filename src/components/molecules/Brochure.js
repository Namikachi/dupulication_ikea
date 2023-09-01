import '../../assets/css/components/molecules/brochure/m_brochure.scss';

function Brochure({ images }) {
	const listItems = images.map(( item, i ) =>
		<li className='m_brochure__item' key={i}>
			<a href='./' className='m_brochure__link'>
				<span className='m_brochure__inner'>
					<img
						className='m_brochure__image' alt={ item.alt } src={ item.src + '?f=s' }
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
				</span>
			</a>
		</li>
	);

	return (
		<ul className='m_brochure__list'>{ listItems }</ul>
	)
}

export default Brochure