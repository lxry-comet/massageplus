import { useState } from 'react'
import msg from "../../JSON/msg_services.json"
import '../App/App.css'
import css from './Price.module.css'

export default function Price() {
	return (
		<section className={css.price}>
			<div className={`container ${css.priceContainer}`}>
				<h2 className={css.priceTitle}>Cennik zabiegów</h2>
				<p className={css.priceDisc}>Wybierz rodzaj masażu i czas. Ceny podane za jedną wizytę.</p>
				<div className={css.priceCategorry}>
					<button>Wszystkie</button>
					<button>Klasyczne</button>
					<button>Ciepło i aromat</button>
					<button>Twarz i głowa</button>
					<button>Stopy i nogi</button>
				</div>
				<div className={css.priceList}>
					bla bla bla
				</div>
			</div>
		</section>
	)
}