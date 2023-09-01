import LinkButton from '../../components/atoms/LinkButton';
import MainSection from '../../components/templates/MainSection';

function AllServices() {
	const contents = <LinkButton text='View all services' type='a' theme='black' />

	return (
		<MainSection contents={ contents }/>
	)
}

export default AllServices