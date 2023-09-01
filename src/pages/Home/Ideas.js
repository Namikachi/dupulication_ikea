import '../../assets/css/pages/home/ideas/ideas.scss';
import Headline from '../../components/atoms/Headline';
import LinkButton from '../../components/atoms/LinkButton';
import MainSection from '../../components/templates/MainSection';

import { categories, data } from '../../data/ideas/ideas';

function Ideas() {
	const contentsItem = categories.map(( item, i ) => {
		const firstItem = i === 0 ? 'ideas__button--active': '';
		return (
			<li className='ideas__item' key={ i }><button className={'ideas__button ' + firstItem}>{ item }</button></li>
		)
	})

	const contentsImage = data.map(( item, i ) => {
		const squareClass = i === 1 ? 'ideas__imgItem--square' : '';
		return (
			<li className={ 'ideas__imgItem ' + squareClass } key={ i }>
				<a href='./' className='ideas__imgLink'>
					<span className='ideas__imgInner'>
						<img className='ideas__img'
							alt={ item.alt }
							src={ item.src + '?f=s'}
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
							calc(50vw - 2.5rem + (0.625rem))" loading="lazy" />
					</span>
				</a>
			</li>
		)
	})
	const contents = <>
		<Headline headline='Design inspiration and modern home ideas' />
		<div className='ideas__wrapper ideas__wrapper--room'>
			<ul className='ideas__list'>
				{ contentsItem }
			</ul>
		</div>
		{/* <div className='ideas__divider'></div> */}
		{/* <div className='ideas__wrapper ideas__wrapper--filter'>
			<ul className='ideas__list'>
				<li className='ideas__item'><button className='ideas__button'>Activity</button></li>
				<li className='ideas__item'><button className='ideas__button'>Color</button></li>
				<li className='ideas__item'><button className='ideas__button'>Style</button></li>
			</ul>
		</div> */}
		<ul className='ideas__imgList'>
			{ contentsImage }
		</ul>
		<div className='ideas__loadBtnWrapper'>
			<LinkButton type='button' text='Load 12 more' theme='black' />
		</div>

	</>;

	return (
		<MainSection contents={ contents } className='ideas'/>
	)
}

export default Ideas