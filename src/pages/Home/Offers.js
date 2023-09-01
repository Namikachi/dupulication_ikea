import Headline from '../../components/atoms/Headline';
import LinkText from '../../components/atoms/LinkText';
import MainSection from '../../components/templates/MainSection';

function Offers() {
	const teaserData = {
		headline: '80th Anniversary offers',
		linkText: 'Shop all offers'
	};
	const contents = <>
		<Headline headline={ teaserData.headline } />
		<LinkText text={ teaserData.linkText }/>
	</>;

	return (
		<MainSection contents={contents} />
	)
}

export default Offers
