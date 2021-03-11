import React, { useEffect } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import Footer from '../components/Footer';
import { useHistory } from 'react-router-dom';

const Home = () => {
	let history = useHistory();

	useEffect(() => {
		if (localStorage.getItem('phone')) {
			history.push('/thankYou');
		} else {
			history.push('/');
		}
	}, [history]);

	return (
		<div className="Home">
			<Header />
			<div className="Home__DestopContainer3">
				<div className="Home__Para">
					You have WON Paytm Gift Card Rs. 200 for
					<span className="Home__ParaBold">
						placing the order on Man Matters
					</span>
				</div>
				<Form />
				<Footer />
			</div>
		</div>
	);
};
export default Home;
