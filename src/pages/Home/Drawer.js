import '../../assets/css/pages/home/drawer/drawer.scss';
import { mainData, subData } from '../../data/menu/menu';
import LinkButton from '../../components/atoms/LinkButton';
import { ReactComponent as IkeaLogo } from '../../assets/images/ikea-logo.svg';
import { ReactComponent as EarthIcon } from '../../assets/images/earth-icon.svg';
import { ReactComponent as CloseIcon } from '../../assets/images/close-icon.svg';
import IconButton from '../../components/atoms/IconButton';

function Drawer({ isOpenedDrawer, setIsOpenedDrawer }) {
	const modifier = isOpenedDrawer ? 'drawer--show' : '';
	const mainListItems = mainData.map((item, i) => {
		const sizeClass = item.isLarge ? 'drawer__itemLink--large' : 'drawer__itemLink--medium';
		return (
			<li className='drawer__item' key={ i }>
				<a href='./' className={ 'drawer__itemLink ' + sizeClass }>{ item.text }</a>
			</li>
		)
	});
	const subListItems = subData.map(((item, i) => {
		return (
			<li className='drawer__item drawer__item--sub' key={ i }>
				<a href='./' className='drawer__itemLink drawer__itemLink--xs'>{ item }</a>
			</li>
		)
	}));
	return (
		<aside className={'drawer ' + modifier } >
			<div className='drawer__topWrapper'>
				<IconButton svg={<CloseIcon />} cn='drawer__closeBtn' onClick={() => setIsOpenedDrawer(!isOpenedDrawer)} />
				<a href='./' className='drawer__ikeaLink'>
					<IkeaLogo />
				</a>
			</div>
			<ul className='drawer__list'>{ mainListItems }</ul>
			<ul className='drawer__list drawer__list--aux'>{ subListItems }</ul>
			<div className='drawer__countryBtn'>
				<LinkButton text='Change country' type='a' svg={<EarthIcon />} />
			</div>
		</aside>
	)
}

export default Drawer