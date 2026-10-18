import { useState } from 'react'
import logo from './logo.svg'
import '../App/App.css'
import css from './Footer.module.css'

export default function Footer() {
	return (
		<footer className={css.footer}>
			<div className={`container ${css.footerContainer}`}>
				<span className={css.footerTitle}>
					© 2026 Massage Plus, Świnoujście
				</span>
				<a 
				className={css.footerPrj} 
				href='https://sitedotcom.pl'
				target="_blank" 
  			rel="noopener noreferrer"
				>
					Projected by
					<img 
						src={logo} 
						alt="SDC Logo" 
						className={css.sdcLogo} 
						width="24" 
						height="24" />

					<span className={css.sdcText}>
						SDC
					</span>
				</a>
			</div>
		</footer>
	)
}