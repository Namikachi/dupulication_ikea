import { ReactComponent as HamburgerMenu } from '../../assets/images/hamburger-menu.svg';
import IconButton from '../../components/atoms/IconButton';

import '../../assets/css/components/molecules/menu-button/m_menu-button.scss';

function MenuButton({ isOpenedDrawer, setIsOpenedDrawer }) {
	return (
		<div className='m_menu-button'>
			<IconButton svg={ <HamburgerMenu /> } onClick={() => setIsOpenedDrawer(!isOpenedDrawer)} />
			<button className='m_menu-button__button'>
				<span>Menu</span>
			</button>
		</div>
	)
}

export default MenuButton