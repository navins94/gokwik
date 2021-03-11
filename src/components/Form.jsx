import React, { useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';

export default function Form() {
	const [phone, setPhone] = useState('');
	const [phoneValid, setPhoneValid] = useState('');
	let history = useHistory();

	const submitForm = (e) => {
		e.preventDefault();
		localStorage.setItem('phone', phone);
		history.push('/thankYou');
	};

	const checkPhoneValidity = (e) => {
		const validPhone = /^[789]\d{9}$/.test(e.target.value);
		if (validPhone) {
			setPhoneValid(true);
			setPhone(e.target.value);
		} else {
			setPhoneValid(false);
			setPhone('');
		}
	};

	return (
		<div className="Form">
			<input
				className="Form__Input"
				onChange={checkPhoneValidity}
				type="number"
				placeholder="Enter Mobile Number"
			/>
			<div className="Form__Para">
				Enter the same number used on Man Matters
			</div>
			{phoneValid === false && (
				<div className="Form__ParaError">Mobile number not valid</div>
			)}
			<button
				disabled={!phoneValid}
				className="Form__Button"
				onClick={submitForm}
				style={phoneValid === true ? { background: '#009ae0' } : {}}
			>
				<div className="Form__Button--Para">Wow! Get my Paytm Gift Card</div>
				<BsChevronRight className="Form__Button--Icon" />
			</button>
		</div>
	);
}
