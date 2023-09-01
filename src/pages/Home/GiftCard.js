import Banner from '../../components/organisms/Banner';
import MainSection from '../../components/templates/MainSection';

function GiftCard() {
	const teaserData = {
		headline: 'Mystery gift card give-away',
		paragraph: ['The first 80 IKEA Family members to visit their local store on 8/18/23 get a mystery IKEA gift card worth $5-$100 in value. Don’t miss this and more IKEA 80th anniversary sale offers! '],
		linkButtonTxt: 'Find store',
		theme: 'yellow',
	};

	const contents = <Banner {...teaserData} />

	return (
		<MainSection contents={ contents } />
	)

}

export default GiftCard