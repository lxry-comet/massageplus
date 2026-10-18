import { useState } from 'react'
import '../App/App.css'
import css from './Contacts.module.css'

export default function Contacts() {
	return (
		<section className={css.contacts}>
			<div className='container'>
				<h2 className={css.contactsTitle}>Kontakt</h2>
				<div className={css.contactsContainer}>
					<dl>
						<dt>Adres</dt>
						<dd>Świnoujście, ul. Jana Kasprowicza 15<br />
							<span className={css.contactsWhere}>obok „Apartamenty Posejdon”</span>
						</dd>
						<dt>Telefon</dt>
						<dd>
							<a href="tel:+48889942449">+48 889 942 449</a> (Inna)<br />
							<a href="tel:+48913211007">+48 91 321 10 07</a>
						</dd>
						<dt>Godziny otwarcia</dt>
						<dd>
							<div className={css.hrs}>
								<span>Poniedziałek – piątek</span>
								<span className={css.t}>9:00 – 17:00</span>
								<span>Sobota</span>
								<span className={css.t}>9:00 – 14:00</span>
								<span>Niedziela</span>
								<span className={css.cl}>nieczynne</span>
							</div>
						</dd>
					</dl>
					<div className={css.contactsMap}>
						<div>
							<b>ul. Kasprowicza 15</b>
							<br/>
							<br/>
							<a 
								className={`${css.btn} ${css.o}`} 
								href='https://www.google.com/maps/search/?api=1&amp;query=Świnoujście+Kasprowicza+15'
								target='_blank' 
								rel='noopener'>
								Otwórz w Mapach
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}