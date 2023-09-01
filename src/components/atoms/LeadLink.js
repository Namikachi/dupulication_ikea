import { ReactComponent as ChevronSmallIcon } from '../../assets/images/chevron-small-icon.svg';
import '../../assets/css/components/atoms/lead-link/lead-link.scss';

function LeadLink({ text }) {
	return (
		<a className='a_lead-link' href='./'>
			<span className='a_lead-link__text'>{ text }</span>
			<ChevronSmallIcon />
		</a>
	)
}

export default LeadLink