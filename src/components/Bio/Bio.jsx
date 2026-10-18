import { useState } from 'react'
import '../App/App.css'
import img from './inna.png'
import css from './Bio.module.css'

export default function Bio() {
	return (
		<section className={css.bio}>
			<div className={`container ${css.bioContainer}`}>
					<div className={css.bioPhoto}>
						<img src={img} alt="Inna Masażysta" />
					</div>
					<div>
						<h2 className={css.bioTitle}>Jedna specjalistka, pełna uwaga</h2>
						<p>Massage Plus prowadzi Inna. Od 2000 roku pracuje w masażu i medycynie, więc zna ciało nie tylko z kursów, ale z ponad dwudziestu lat praktyki.</p>
						<p>W gabinecie nie zmieniają się terapeuci. Przychodzisz do osoby, która pamięta, co robiliście ostatnio i jak zareagowało Twoje ciało.</p>
						<ul className={css.bioList}>
							<li className={css.bioItem}>
								<b>Od 2000 roku w zawodzie</b>
								<span>Ponad dwadzieścia lat pracy z ciałem i zdrowiem.</span>
							</li>
							<li className={css.bioItem}>
								<b>Zawsze ta sama osoba</b>
								<span>Bez zmian terapeuty między wizytami.</span>
							</li>
							<li className={css.bioItem}>
								<b>Zabieg dopasowany do Ciebie</b>
								<span>Nacisk, tempo i zakres ustalamy na początku wizyty.</span>
							</li>
						</ul>
					</div>
			</div>
		</section>
	)
}