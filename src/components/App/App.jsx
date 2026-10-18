import { useState } from 'react'
import React, { Component } from 'react';
import './App.css'
//? =============================================
import Header from '../Header/Header.jsx'
import Hero from '../Hero/Hero.jsx'
import Price from '../Price/Price.jsx'
import Coupon from '../Coupon/Coupon.jsx'
import Bio from '../Bio/Bio.jsx'
import Contacts from '../Contacts/Contacts.jsx'
import Footer from '../Footer/Footer.jsx'

export class App extends Component {
	render() {
		return (
			<>
				<Header/>
				<Hero/>
				<Price/>
				<Coupon/>
				<Bio/>
				<Contacts/>
				<Footer/>
			</>
		)
	}
	
}