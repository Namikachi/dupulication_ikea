import '../../assets/css/components/header/header.scss';
import { ReactComponent as IkeaLogo } from '../../assets/images/ikea-logo.svg';
import { ReactComponent as PersonIcon } from '../../assets/images/person-icon.svg';
import { ReactComponent as TrackIcon } from '../../assets/images/track-icon.svg';
import { ReactComponent as HeartIcon } from '../../assets/images/heart-icon.svg';
import { ReactComponent as BagIcon } from '../../assets/images/bag-icon.svg';
import { ReactComponent as SearchIcon } from '../../assets/images/search-icon.svg';
import { ReactComponent as CameraIcon } from '../../assets/images/camera-icon.svg';
import { ReactComponent as StoreIcon } from '../../assets/images/store-icon.svg';
import { ReactComponent as MapIcon } from '../../assets/images/map-icon.svg';
import IconButton from '../../components/atoms/IconButton';
import MenuButton from '../../components/molecules/MenuButton';
import { useEffect, useRef } from 'react';

function SearchInput({ device }) {
	return (
		<div className={'header__searchWrap ' + ( device === 'mt' ? 'header__searchWrap--mt' : '') }>
			<button className='header__searchBtn'>
				<SearchIcon />
			</button>
			<input
				className='header__searchInput'
				placeholder='What are you looking for?' />
			<button className='header__cameraBtn'>
				<CameraIcon />
			</button>
		</div>
	)
}

function Header({ isOpenedDrawer, setIsOpenedDrawer}) {
	const headerRef = useRef();
	const headerBottomRef = useRef();
	
	useEffect(() => {
		const headerBottomPosition = headerBottomRef.current.getBoundingClientRect().top;
		const header = headerRef.current;
    const onScroll = () => {
      if (headerBottomPosition < window.scrollY) {
				header.className = "header header--fixed";
      } else {
				header.className = "header";
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
	}, [])
	return (
		<header className='header' ref={ headerRef }>
			<div className="header__top">
				<div className='header__topContainer'>
					<a href='./' className='header__homeBtn'>
						<IkeaLogo />
					</a>
					<SearchInput />
					<ul className='header__iconsList'>
						<li className='header__iconItem header__iconItem--profile'>
							<IconButton svg={<PersonIcon />} link='./' cn='header__profile' text='Hej! Log in or sign up'/>
						</li>
						<li className='header__iconItem header__iconItem--track'>
							<IconButton svg={<TrackIcon />} link='./' />
						</li>
						<li className='header__iconItem'>
							<IconButton svg={<HeartIcon />} link='./' />
						</li>
						<li className='header__iconItem'>
							<IconButton svg={<BagIcon />} link='./' />
						</li>
						<li className='header__iconItem header__iconItem--menu'>
							<MenuButton isOpenedDrawer={ isOpenedDrawer } setIsOpenedDrawer={ setIsOpenedDrawer }/>
						</li>
					</ul>
				</div>
			</div>
			<SearchInput device='mt' />
			<nav className='header__bottom' ref={ headerBottomRef }>
				<div className='header__bottomWrapper'>
					<ul className='header__bottomList'>
						<li className='header__bottomItem'><a href='./' className='header__bottomLink'>Products</a></li>
						<li className='header__bottomItem'><a href='./' className='header__bottomLink'>Home Accessories</a></li>
						<li className='header__bottomItem'><a href='./' className='header__bottomLink'>Rooms</a></li>
						<li className='header__bottomItem'><a href='./' className='header__bottomLink'>Ideas & Inspiration</a></li>
						<li className='header__bottomItem'><a href='./' className='header__bottomLink'>Design</a></li>
						<li className='header__bottomItem'><a href='./' className='header__bottomLink'>Deals</a></li>
						<li className='header__bottomItem'><a href='./' className='header__bottomLink'>College Essentials</a></li>
					</ul>
					<div className='header__locations'>
						<div className='header__location'>
							<StoreIcon />
							<div className='header__locationInner'>
								<small className='header__locationSmall'>Opens at 10:00am</small>
								<span className='header__locationLabel'>Stoughton</span>
							</div>
						</div>
						<div className='header__location'>
							<MapIcon />
							<div className='header__locationInner'>
								<small className='header__locationSmall'>Deliver to</small>
								<span className='header__locationLabel'>02140</span>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
