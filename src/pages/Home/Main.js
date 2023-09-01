import '../../assets/css/pages/home/main/main.scss';
import Topic from './Topic';
import Offers from './Offers';
import Sale from './Sale';
import GiftCard from './GiftCard';
import Classics from './Classics';
import RightNow from './RightNow';
import FamilyMember from './FamilyMember';
import NewLowerPrice from './NewLowerPrice';
import PopularCategory from './PopularCategory';
import Service from './Service';
import AllServices from './AllServices';
import Instagram from './Instagram';
import Ideas from './Ideas';
import LearnMore from './LearnMore';
import About from './About';
import Message from './Message';

function Main() {
	return (
		<main className='main'>
			<Topic />
			<Offers />
			<Sale />
			<GiftCard />
			<Classics />
			<RightNow />
			<FamilyMember />
			<NewLowerPrice />
			<PopularCategory />
			<Service />
			<AllServices />
			<Instagram />
			<Ideas />
			<LearnMore />
			<About />
			<Message />
		</main>
	);
}

export default Main;