import { useState } from 'react'
import '../App/App.css'
import css from './Header.module.css'

export default function Header() {
	return(
		<header className={css.header}>
			<div className={`container ${css.headerContainer}`}>
				<h1 className={css.headerTitle}>
					Massage <span>Plus</span>
				</h1>
				<nav className={css.headerNav}>
					<div className={css.headerNavList}>{"Cennik"}</div>
					<div className={css.headerNavList}>{"Karnety"}</div>
					<div className={css.headerNavList}>{"O gabinecie"}</div>
					<div className={css.headerNavList}>{"Pytania"}</div>
					<div className={css.headerNavList}>{"Kontakt"}</div>
				</nav>
				<p className={css.headerContactTel}>{"+48 889 942 449"}</p>
			</div>
		</header>
	)
}