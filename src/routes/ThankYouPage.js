import React from 'react';
import Banner from '../components/Banner';
import DetailCard from '../components/DetailCard';
import Footer from '../components/Footer';
import GiftCard from '../components/GiftCard';

const ThankYouPage = () => {
	return (
		<div className="ThankYouPage">
			<div className="ThankYouPage__DesktopContainer2">
				<Banner />
				<GiftCard />
			</div>
			<div className="ThankYouPage__DesktopContainer3">
				<DetailCard />
				<Footer />
			</div>
		</div>
	);
};

export default ThankYouPage;
