import TeaserContainer from '../../components/organisms/TeaserContainer'
import Gallery from "../../components/organisms/Gallery"
import { data } from '../../data/newLowerPrice/newLowerPrice'
import MainSection from '../../components/templates/MainSection';
import LeadLink from '../../components/atoms/LeadLink';

function NewLowerPrice() {
	const teaserData = {
		headline: 'New lower prices for you to create your perfect college space',
		paragraph: ['Create your perfect space with hundreds of new lower prices on furniture for your bedroom, living room, workspace and more.'],
		linkButtonTxt: 'Shop now',
	};

	const contents = <>
		<TeaserContainer { ...teaserData } />
		<Gallery data={ data } />
		<LeadLink text={ teaserData.linkButtonTxt } />
	</>

	return (
		<MainSection contents={contents} />
	)
}

export default NewLowerPrice