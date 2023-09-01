import '../../assets/css/components/atoms/link-button/a_link-button.scss'

function LinkButton({ text, type, svg, theme }) {
	const contents = <>{ svg && svg }<span className='a_link-button__text'>{ text }</span></>;
	const className = 'a_link-button ' + ( theme ? 'a_link-button--' + theme : '' );
	function anchorLink() { return <a href='./' className={ className }>{ contents }</a>}
	function button() { return <button className={ className }>{ contents }</button>}

	if(type=== 'a') {
		return anchorLink();
	} else if(type=== 'button') {
		return button();
	} else {
		return <></>
	}
}

export default LinkButton