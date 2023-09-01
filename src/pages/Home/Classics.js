import TeaserContainer from '../../components/organisms/TeaserContainer'
import Gallery from "../../components/organisms/Gallery"
import { data } from '../../data/classics/classics'
import MainSection from '../../components/templates/MainSection'
import LeadLink from '../../components/atoms/LeadLink';

function Classics() {
	const teaserData = {
		headline: 'IKEA classics with an 80th anniversary twist',
		paragraph: ['To celebrate our 80th, the Nytillverkad collection reimagines popular IKEA designs with joyful colors to match the bold outlook of the next generation.'],
		linkButtonTxt: 'Shop the Nytillverkad collection',
	};

	const contents = <>
		<TeaserContainer { ...teaserData } />
		<Gallery data={ data } />
		<LeadLink text='Shop now' />
	</>

	return (
		<MainSection contents={contents} />
	)
}

export default Classics