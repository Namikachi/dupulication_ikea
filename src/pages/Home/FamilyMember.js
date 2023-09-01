import Banner from '../../components/organisms/Banner';
import MainSection from '../../components/templates/MainSection';

function FamilyMember() {
	const teaserData = {
		headline: 'IKEA Family members save 5% in-store on all furniture and décor',
		paragraph: [`Members save more every day, every visit! You now save 5% off in-store on all furniture and décor and on select delivery options*. Plus, you get special offers, free in-store perks, price protection, and more. It’s free to join, and you’ll be saving in no time.
			<br />
			*Some restrictions apply, see full <a href='./'>Terms & Conditions</a>.`,
			`Already a member? <a href='./'>Login now.</a>`],
		linkButtonTxt: 'Join for free',
		theme: 'blue',
	};

	const contents = <Banner {...teaserData} />

	return (
		<MainSection contents={contents} />
	)
}

export default FamilyMember