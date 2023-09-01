import '../../assets/css/components/atoms/icon-button/a_icon-button.scss';

function IconButton({ svg, cn, link, onClick, text }) {
	const baseClassName = 'a_icon-button';
	const additionalClassName = cn ? cn : '';
	const txt = text ? <span className='a_icon-button__text'>{ text }</span> : '';
	const tag = link ? 
		<a href={ link } className={ baseClassName + ' ' + additionalClassName }>{ svg } { txt }</a> : 
		<button className={ baseClassName + ' ' + additionalClassName } onClick={ onClick } >{ svg }</button>;
	
	return (
		<>
			{ tag }
		</>
	)
}

export default IconButton