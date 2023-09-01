import Brochure from '../../components/molecules/Brochure';
import TeaserContainer from '../../components/organisms/TeaserContainer';

import { images } from '../../data/brochure/brochure.js';
import MainSection from '../../components/templates/MainSection';

import LeadLink from '../../components/atoms/LeadLink';

function Topic() {
	const teaserData = {
		headline: 'The biggest sale of the season!',
		paragraph: ['Shop over a thousand offers, including 20% off bed and bath textiles, IKEA 365+ food storage and all desks. Visit your local store for even more savings. It’s all happening until 9/5/23!'],
		linkButtonTxt: 'Shop offers',
	};

	const contents = <>
		<TeaserContainer { ...teaserData } />
		<Brochure images={ images } />
		<LeadLink text={ teaserData.linkButtonTxt }/>
	</>;

	return (
		<MainSection contents={contents} />
	)
}

export default Topic