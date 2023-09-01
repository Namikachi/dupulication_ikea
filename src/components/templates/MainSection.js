import '../../assets/css/components/templates/mainSection/t_main-section.scss';

function MainSection({ contents, className }) {
	return (
		<section className={'t_main-section ' + (className ? className : '')}>
			{ contents }
		</section>
	)
}

export default MainSection