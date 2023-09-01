import '../../assets/css/components/templates/overlay/overlay.scss';

function Overlay({ isOpenedDrawer, setIsOpenedDrawer }) {
	const modifier = isOpenedDrawer ? 't_overlay--show' : '';
	return (
		<div className={ 't_overlay ' + modifier } onClick={() => setIsOpenedDrawer(!isOpenedDrawer)}></div>
	)
}

export default Overlay