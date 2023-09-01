import '../../assets/css/components/service/service.scss';

import { data } from '../../data/service/service'
import Headline from '../../components/atoms/Headline';
import MainSection from '../../components/templates/MainSection';

function Service() {
	const itemContents = data.map((item, i) => {
		return (
			<li className='service__item' key={ i }>
				{ item.contents }
				<h3 className='service__title'>{ item.title }</h3>
				<p className='service__text'>{ item.text }</p>
				<a href='./' className='service__link'>Learn more</a>
			</li>
		)
	})

	const contents = <>
		<Headline headline='Services to help you shop' />
		<ul className='service__list'>
			{ itemContents }
		</ul>
	</>
	return (
		<MainSection contents={ contents }/>
	)
}

export default Service