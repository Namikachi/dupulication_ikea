import '../../assets/css/components/atoms/link-text/a_link-text.scss';

function LinkText({ text }) {
	return (
		<a href='./' className='a_link-text'>{ text }</a>
	)
}

export default LinkText