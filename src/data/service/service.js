import { ReactComponent as TrackIcon } from '../../assets/images/track-icon.svg';
import { ReactComponent as OnlineStoreIcon } from '../../assets/images/online-store-icon.svg';
import { ReactComponent as AssemblyIcon } from '../../assets/images/assembly-icon.svg';
import { ReactComponent as CardIcon } from '../../assets/images/card-icon.svg';

export const data = [
	{
		contents: <TrackIcon />,
		title: 'Delivery',
		text: 'Shop from home and get it delivered to your front door.',
	},
	{
		contents: <OnlineStoreIcon />,
		title: 'Click & Collect',
		text: 'Buy online, pick-up in store.',
	},
	{
		contents: <AssemblyIcon />,
		title: 'Taskrabbit Assembly',
		text: 'Find flexible and affordable ways to get your to-dos done.',
	},
	{
		contents: <CardIcon />,
		title: 'Ways to pay',
		text: 'Finance your dream home with our credit cards.',
	}
]