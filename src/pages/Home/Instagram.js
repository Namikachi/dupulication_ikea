import '../../assets/css/components/instagram/instagram.scss';
import Teaser from '../../components/molecules/Teaser';
import MainSection from '../../components/templates/MainSection';

import { data } from '../../data/instagram/instagram'

function Instagram() {
	const itemContents = data.map((item, i) => {
		return (
			<li className='instagram__item' key={ i }>
				<a href='./'>
					<img className='instagram__image'
						alt={ item.alt }
						src={ item.src + '?f=s' }
						srcSet={
							item.src + '?f=xxxs 240w, ' +
							item.src + '?f=xxs 300w, ' +
							item.src + '?f=xs 400w, ' +
							item.src + '?f=s 500w, ' +
							item.src + '?f=m 600w, ' +
							item.src + '?f=l 750w, ' +
							item.src + '?f=xl 800w, ' +
							item.src + '?f=xxl 950w, ' +
							item.src + '?f=xxxl 1400w, '
						}
						sizes="(min-width: 1824px) 508.333px,
						(min-width: 1200px) calc(((100vw - (2.8125rem + 3.125rem)) - (((100vw - (2.8125rem + 3.125rem)) / 13) + 1.25rem))/3 - (1.25rem / 2)),
						(min-width: 900px) calc(33.333vw - ((1.25rem * 2) / 3) - ((3.125rem * 2) / 3)),
						(min-width: 600px) calc((100vw - 3.75rem - (0.9375rem * 2)) / 3),
						calc(50vw - 2.5rem + (0.625rem))" loading="eager" />
				</a>
			</li>
		)
	})
	const contents = <>
		<Teaser headline='As seen on Instagram' paragraph={['See how our products look in real homes! Share your photos on Instagram with #MyIKEAUSA or tag @IKEAUSA for a chance to be seen here.']} />
		<div className='instagram__wrapper'>
			<ul className='instagram__list'>
				{ itemContents }
			</ul>
		</div>
	</>
	return (
		<MainSection contents={ contents } className='instagram' />
	)
}

export default Instagram