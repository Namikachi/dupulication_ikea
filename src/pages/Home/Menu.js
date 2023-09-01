import '../../assets/css/pages/home/menu/menu.scss';
import MenuButton from '../../components/molecules/MenuButton';

function Menu({ isOpenedDrawer, setIsOpenedDrawer }) {
	return (
		<div className='menu'>
			<div className='menu__wrapper'>
				<MenuButton isOpenedDrawer={ isOpenedDrawer } setIsOpenedDrawer={ setIsOpenedDrawer } />
			</div>
		</div>
	)
}

export default Menu