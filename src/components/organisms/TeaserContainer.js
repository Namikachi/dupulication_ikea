import '../../assets/css/components/organisms/teaser-container/o_teaser-container.scss';

import LinkButton from "../atoms/LinkButton"
import Teaser from "../molecules/Teaser"

function TeaserContainer({ ...teaserData } ) {

	return (
		<div className={'o_teaser-container' }>
			<Teaser headline={ teaserData.headline } paragraph={ teaserData.paragraph } />
			<LinkButton text={ teaserData.linkButtonTxt } type='a' />
		</div>
	)
}

export default TeaserContainer