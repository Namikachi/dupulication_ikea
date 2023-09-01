import '../../assets/css/components/organisms/banner/o_banner.scss';
import LinkButton from '../atoms/LinkButton';
import Teaser from '../molecules/Teaser';

function Banner(text) {
	const modifier = 'o_banner--' + text.theme;
	const buttonTheme = text.theme === 'yellow' ? 'black' : '';
	return (
		<div className={'o_banner ' + modifier }>
			<Teaser headline={ text.headline } paragraph={ text.paragraph }/>
			<LinkButton text={ text.linkButtonTxt } type='a' theme={ buttonTheme } />
		</div>
	)
}

export default Banner