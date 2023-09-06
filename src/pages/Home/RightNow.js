import { useState, useRef, useEffect } from 'react';
import '../../assets/css/pages/home/rightNow/rightNow.scss';
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow-icon.svg';
import Headline from '../../components/atoms/Headline';

import { data } from '../../data/rightNow/rightNow'
import MainSection from '../../components/templates/MainSection';

function RightNow() {
	const [ valueNow, setValueNow ] = useState(0);
	const indicatorBarElement = useRef();
	const scrollElement = useRef();

	useEffect(() => {
		function calculateWidth() {
			const element = scrollElement.current;
			const margin = window.innerWidth < 900 ? (element.scrollLeft + element.children[0].getBoundingClientRect().left) : 0;
			const indicatorWidth = (element.clientWidth - margin) / (element.scrollWidth - margin) * 100;
			indicatorBarElement.current.style.width = indicatorWidth + '%';
		}

		calculateWidth()
		window.addEventListener("resize", calculateWidth)
		return () => {
			window.removeEventListener("resize", calculateWidth)
		}
	}, [])
	
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

	const handleScroll = (e) => {
		const element = scrollElement.current;
		const margin = window.innerWidth < 900 ? (element.scrollLeft + element.children[0].getBoundingClientRect().left) : 0;
		const clientWidth = element.clientWidth - margin * 2;
		const scrollWidth = element.scrollWidth - margin;

		// aria-valuenow
		const maxScrollWidth = scrollWidth - clientWidth;
		const currentScrollPosition = e.target.scrollLeft;
		const scrollRatio = currentScrollPosition / maxScrollWidth * 100; 
		setValueNow(Math.floor(scrollRatio));

		// scroll bar position
		const y = clientWidth - clientWidth * (clientWidth / scrollWidth);
		const x = y / indicatorBarElement.current.offsetWidth;
		const d = x * scrollRatio;
		indicatorBarElement.current.style.transform = `translateX(${d}%)`;
	}

	const handleMoveScroll = (e) => {
		const element = scrollElement.current;
		const parentMargin = window.innerWidth < 900 ? (element.scrollLeft + element.children[0].getBoundingClientRect().left) : 0;
		const clientWidth = element.clientWidth - parentMargin * 2;

		const listElement = scrollElement.current.children[0];
		const getItemRect = (i) => { return listElement.children[i].getBoundingClientRect()};
		const margin = getItemRect(1).left - getItemRect(0).left - getItemRect(0).width;
		const itemWidth = getItemRect(0).width + margin;
		const countDisplayedSlides = Math.floor(clientWidth / itemWidth);

		let left = 0;
		if(e.key === 'ArrowLeft') {
			left = scrollElement.current.scrollLeft - itemWidth * countDisplayedSlides;
		} else if(e.key === 'ArrowRight') {
			left = scrollElement.current.scrollLeft + itemWidth * countDisplayedSlides;
		}

		if(e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
			scrollElement.current.scrollTo({
				left: left, 
				behavior: 'smooth',
			});
		}
	}

	const contents = <>
		<Headline headline='Right Now at IKEA' />
		<div className='rightNow__cardWrapper'>
			<button aria-controls='scroll'></button>
			<div className='rightNow__cardInner' onScroll={ handleScroll } ref={ scrollElement }>
				<ul className='rightNow__list' id='scroll'>
					{	listItems }
				</ul>
			</div>
			<button aria-controls='scroll'></button>
		</div>
		<div
			className='rightNow__indicator'
			role='scrollbar'
			aria-controls='scroll'
			aria-orientation='horizontal'
			aria-valuemin='0'
			aria-valuenow={ valueNow }
			aria-valuemax='100'
			tabIndex={0}
			onKeyDown={ handleMoveScroll }
			>
			<span className='rightNow__indicatorWrapper'>
				<span className='rightNow__indicatorBar' ref={ indicatorBarElement }></span>
			</span>
		</div>
	</> 

	return (
		<MainSection contents={ contents }/>
	)
}

export default RightNow