import { useState } from 'react'
import '../App/App.css'
import css from './Hero.module.css'

export default function Hero() {
	return (
		<section className={css.hero}>
			<div className={`container ${css.heroContainer}`}>
				<div className={css.heroWrap}>
					<h1>
						Dotyk, który przywraca spokój ciału
					</h1>
					<p>
						Gabinet masażu w Świnoujściu. Każdy zabieg wykonuje ta sama osoba — Inna, w masażu i medycynie od 2000 roku.
					</p>
					<div className={css.heroBtn}>
						<button className={`${css.btn} ${css.tel}`}>
							Umów wizytę
						</button>
						<button className={`${css.btn} ${css.prc}`}>
							Zobacz cennik
						</button>
					</div>
					<div className={css.heroStatus}>
						<span className={css.heroSpanDot}></span>
						<span>Teraz zamknięte — pn–pt 9:00–17:00, sob 9:00–14:00</span>
					</div>
				</div>
				<svg className={`${css.seal} ${css.rise}`} viewBox="0 0 400 400" role="img" aria-label="Od 2000 roku w masażu i medycynie" style={{ animationDelay: '.15s' }}>
					<defs>
						<radialGradient id="g" cx="50%" cy="50%">
							<stop offset="0" stopColor="#d4a24c" stopOpacity=".25"></stop>
							<stop offset="1" stopColor="#d4a24c" stopOpacity="0"></stop>
						</radialGradient>
						<path id="c" d="M200,200 m-150,0 a150,150 0 1,1 300,0 a150,150 0 1,1 -300,0"></path>
					</defs>
					<circle cx="200" cy="200" r="190" fill="url(#g)"></circle>
					<g fill="none" stroke="#d4a24c">
						<circle cx="200" cy="200" r="178" strokeOpacity=".35"></circle>
						<circle cx="200" cy="200" r="132" strokeOpacity=".6"></circle>
						<circle cx="200" cy="200" r="86" strokeOpacity=".9"></circle>
					</g>
					<text fill="#d4a24c" fontSize="17" letterSpacing="5">
						<textPath href="#c" startOffset="0">MASAŻ • MEDYCYNA • DOŚWIADCZENIE • ŚWINOUJŚCIE •</textPath>
					</text>
					<text x="200" y="188" textAnchor="middle" fill="#a39d90" fontSize="22" fontStyle="italic">od roku</text>
					<text x="200" y="244" textAnchor="middle" fill="#f0cf8a" fontSize="64" fontWeight="600">2000</text>
				</svg>
			</div>
		</section>
	)
}