import '../../assets/css/components/molecules/teaser/m_teaser.scss'
import Headline from '../atoms/Headline'

import parse from 'html-react-parser'

function Teaser({ headline, paragraph }) {
	const p = paragraph.map((item, i) => <p className='m_teaser-text' key={i}>{ parse(item) }</p>);

	
	return (
		<div>
			<Headline headline={ headline } />
			{ p }	
		</div>
	)
}

export default Teaser