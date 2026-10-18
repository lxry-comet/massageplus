import { useState } from 'react'
import karnety from "../../JSON/krt.json"
import '../App/App.css'
import css from './Coupon.module.css'

export default function Coupon() {
	return (
		<section className={css.coupon}>
			<div className={`container ${css.couponContainer}`}>
				<h2 className={css.couponTitle}>Karnety — taniej przy regularnych wizytach</h2>
				<p className={css.couponDisc}>Kupujesz pakiet, płacisz mniej niż za pojedyncze zabiegi.</p>
				<div className={css.couponPrice}>
					{karnety.map((karnet, index) => {
						const saved = karnet.originalPrice - karnet.price
						return (
							<div className={css.couponItem} key={karnet.id || index}>
								<h3>{karnet.title}</h3>
								<div className={css.n}>
									{karnet.price} zł</div>
								<div>{karnet.description}
								</div>
								<div className={css.s}>
									Zamiast {karnet.originalPrice} zł — <b>oszczędzasz {saved} zł</b>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}