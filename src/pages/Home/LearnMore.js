import '../../assets/css/components/learnMore/learnMore.scss';
import LinkButton from '../../components/atoms/LinkButton';
import MainSection from '../../components/templates/MainSection';

function LearnMore() {
	const contents = <div className='learnMore__box'>
		<div className='learnMore__wrapper'>
			<div className='learnMore__inner'>
				<a href='./' className='learnMore__link'>
					<img className='learnMore__image' alt="Link to Chest and Dresser Recall " src="https://www.ikea.com/images/link-to-chest-and-dresser-recall-1e59a5365507c74ed0c8ab234d946a5a.jpg?f=s" srcSet="https://www.ikea.com/images/link-to-chest-and-dresser-recall-1e59a5365507c74ed0c8ab234d946a5a.jpg?f=sg 1600w,
						https://www.ikea.com/images/link-to-chest-and-dresser-recall-1e59a5365507c74ed0c8ab234d946a5a.jpg?f=xxxl 1400w,
						https://www.ikea.com/images/link-to-chest-and-dresser-recall-1e59a5365507c74ed0c8ab234d946a5a.jpg?f=xxl 950w,
						https://www.ikea.com/images/link-to-chest-and-dresser-recall-1e59a5365507c74ed0c8ab234d946a5a.jpg?f=xl 800w,
						https://www.ikea.com/images/link-to-chest-and-dresser-recall-1e59a5365507c74ed0c8ab234d946a5a.jpg?f=l 750w,
						https://www.ikea.com/images/link-to-chest-and-dresser-recall-1e59a5365507c74ed0c8ab234d946a5a.jpg?f=m 600w,
						https://www.ikea.com/images/link-to-chest-and-dresser-recall-1e59a5365507c74ed0c8ab234d946a5a.jpg?f=s 500w,
						https://www.ikea.com/images/link-to-chest-and-dresser-recall-1e59a5365507c74ed0c8ab234d946a5a.jpg?f=xs 400w,
						https://www.ikea.com/images/link-to-chest-and-dresser-recall-1e59a5365507c74ed0c8ab234d946a5a.jpg?f=xxs 300w,
						https://www.ikea.com/images/link-to-chest-and-dresser-recall-1e59a5365507c74ed0c8ab234d946a5a.jpg?f=xxxs 240w" sizes="(min-width: 37.5em) 40vw, 90vw" loading="lazy" onerror="this.onerror=null; const parent = this.closest('div'); parent.classList.add('e6qunvq')" />
				</a>
				<a href='./' className='learnMore__text'>IKEA Chest and Dresser Safety Recall</a>
				<LinkButton text='Learn More' type='a' theme='black' />
			</div>
			<div className='learnMore__inner'>
				<a href='./' className='learnMore__link'>
					<img className='learnMore__image' alt="Link to BLÅVINGAD recall" src="https://www.ikea.com/images/link-to-blavingad-recall-497fccfab4617b634ce3114614d4f335.jpg?f=s" srcSet="https://www.ikea.com/images/link-to-blavingad-recall-497fccfab4617b634ce3114614d4f335.jpg?f=sg 1600w,
						https://www.ikea.com/images/link-to-blavingad-recall-497fccfab4617b634ce3114614d4f335.jpg?f=xxxl 1400w,
						https://www.ikea.com/images/link-to-blavingad-recall-497fccfab4617b634ce3114614d4f335.jpg?f=xxl 950w,
						https://www.ikea.com/images/link-to-blavingad-recall-497fccfab4617b634ce3114614d4f335.jpg?f=xl 800w,
						https://www.ikea.com/images/link-to-blavingad-recall-497fccfab4617b634ce3114614d4f335.jpg?f=l 750w,
						https://www.ikea.com/images/link-to-blavingad-recall-497fccfab4617b634ce3114614d4f335.jpg?f=m 600w,
						https://www.ikea.com/images/link-to-blavingad-recall-497fccfab4617b634ce3114614d4f335.jpg?f=s 500w,
						https://www.ikea.com/images/link-to-blavingad-recall-497fccfab4617b634ce3114614d4f335.jpg?f=xs 400w,
						https://www.ikea.com/images/link-to-blavingad-recall-497fccfab4617b634ce3114614d4f335.jpg?f=xxs 300w,
						https://www.ikea.com/images/link-to-blavingad-recall-497fccfab4617b634ce3114614d4f335.jpg?f=xxxs 240w" sizes="(min-width: 37.5em) 40vw, 90vw" loading="lazy" onerror="this.onerror=null; const parent = this.closest('div'); parent.classList.add('e6qunvq')" />
				</a>
				<a href='./' className='learnMore__text'>IKEA recalls BLÅVINGAD fishing game</a>
				<LinkButton text='Learn More' type='a' theme='black' />
			</div>
		</div>
	</div>
	return (
		<MainSection contents={ contents } className='learnMore'/>
	)
}

export default LearnMore