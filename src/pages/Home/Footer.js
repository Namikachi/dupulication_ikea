import '../../assets/css/components/footer/footer.scss';
import { ReactComponent as FacebookIcon } from '../../assets/images/facebook-icon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/images/instagram-icon.svg';
import { ReactComponent as PinterestIcon } from '../../assets/images/pinterest-icon.svg';
import { ReactComponent as TwitterIcon } from '../../assets/images/twitter-icon.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/images/youtube-icon.svg';
import { ReactComponent as EarthIcon } from '../../assets/images/earth-icon.svg';
import { ReactComponent as ChevronIcon } from '../../assets/images/chevron-icon.svg';
import LinkButton from '../../components/atoms/LinkButton';
import { data } from '../../data/footer/footer.js';
import { useState } from 'react';

function PullDown({ item }) {
	const [isShown, setIsShown] = useState(false);
	const showClass = isShown ? 'footer__itemPrimary--shown': '';
	return (
		<li className={'footer__itemPrimary ' + showClass}>
			<h3 className='footer__title footer__title--small' onClick={() => setIsShown(!isShown)}>{ item.title } <span className='footer__chevron'><ChevronIcon /></span></h3>
			<ul className='footer__listSecondary' >
				{(
					item.list.map(( text, i ) => {
						return (
							<li className='footer__itemSecondary' key={ i }><a href='./' className='footer__linkSecondary'>{ text }</a></li>
						)
					})
				)}
			</ul>
		</li>
	)
}

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__wrapper'>
				<div className='footer__outer'>
					<div className='footer__block'>
						<div className='footer__inner'>
							<h3 className='footer__title'>Join IKEA Family</h3>
							<p className='footer__text'>Bring your ideas to life with special discounts, inspiration, and lots of good things in store. It's all free.</p>
							<a href='./' className='footer__link'>See more</a>
							<LinkButton text='Join or log in' type='a' theme='black' />
						</div>
						<div className='footer__inner'>
							<h3 className='footer__title'>Join IKEA Business Network</h3>
							<p className='footer__text'>Enjoy a number of unique benefits to create a better life at work.</p>
							<a href='./' className='footer__link'>See more</a>
							<LinkButton text='Join or log in' type='a' theme='black' />
						</div>
					</div>
					<ul className='footer__listPrimary'>
						{(
							data.map(( item, i ) => {
								return (
									<PullDown key={ i } item={ item } />
								)
							})
						)}
					</ul>
				</div>
				<div className='footer__socialWrapper'>
					<div className='footer__snsPay'>
						<ul className='footer__snsList'>
							<li className='footer__snsItem'>
								<a href='./' className='footer__iconLink'>
									<FacebookIcon />
								</a>
							</li>
							<li className='footer__snsItem'>
								<a href='./' className='footer__iconLink'>
									<InstagramIcon />
								</a>
							</li>
							<li className='footer__snsItem'>
								<a href='./' className='footer__iconLink'>
									<PinterestIcon />
								</a>
							</li>
							<li className='footer__snsItem'>
								<a href='./' className='footer__iconLink'>
									<TwitterIcon />
								</a>
							</li>
							<li className='footer__snsItem'>
								<a href='./' className='footer__iconLink'>
									<YoutubeIcon />
								</a>
							</li>
						</ul>
						<ul className='footer__paymentList'>
							<li className='footer__paymentItem'>
								<img className='footer__paymentImg' src="https://www.ikea.com/global/assets/logos/external-payment-providers/visa.svg" alt="Visa" />
							</li>
							<li className='footer__paymentItem'>
								<img className='footer__paymentImg' src="https://www.ikea.com/global/assets/logos/external-payment-providers/master-card.svg" alt="Mastercard" />
							</li>
							<li className='footer__paymentItem'>
								<img className='footer__paymentImg' src="https://www.ikea.com/global/assets/logos/external-payment-providers/discover.svg" alt="Discover" />
							</li>
							<li className='footer__paymentItem'>
								<img className='footer__paymentImg' src="https://www.ikea.com/global/assets/logos/external-payment-providers/american-express.svg" alt="Amex" />
							</li>
							<li className='footer__paymentItem'>
								<img className='footer__paymentImg' src="https://www.ikea.com/global/assets/logos/external-payment-providers/ikea-credit-card.svg" alt="IKEA credit card" />
							</li>
							<li className='footer__paymentItem'>
								<img className='footer__paymentImg' src="https://www.ikea.com/global/assets/logos/external-payment-providers/paypal.svg" alt="Paypal" />
							</li>
							<li className='footer__paymentItem'>
								<img className='footer__paymentImg' src="https://www.ikea.com/global/assets/logos/external-payment-providers/apple-pay.svg" alt="Apple Pay" />
							</li>
							<li className='footer__paymentItem'>
								<img className='footer__paymentImg' src="https://www.ikea.com/global/assets/logos/external-payment-providers/union-pay.svg" alt="Union Pay" />
							</li>
							<li className='footer__paymentItem'>
								<img className='footer__paymentImg' src="https://www.ikea.com/global/assets/logos/external-payment-providers/jcb.svg" alt="JCB" />
							</li>
							<li className='footer__paymentItem'>
								<img className='footer__paymentImg' src="https://www.ikea.com/global/assets/logos/external-payment-providers/diners-club.svg" alt="Diners" />
							</li>
							<li className='footer__paymentItem'>
								<img className='footer__paymentImg' src="https://www.ikea.com/global/assets/logos/external-payment-providers/ikea-gift-card.svg" alt="IKEA gift card" />
							</li>
						</ul>
					</div>
					<LinkButton text='Change country' type='a' svg={<EarthIcon />} />
				</div>
				<div className='footer__legalLinks'>
					<div>
						<p className='footer__copyright'>© Inter IKEA Systems B.V. 1999-2023</p>
					</div>
					<div className='footer__legalLinkInner'>
						<a href='./' className='footer__cookie'>Cookie policy</a>
						<a href='./' className='footer__cookie'>Cookie settings</a>
					</div>
				</div>
	
			</div>
		</footer>
	)
}

export default Footer