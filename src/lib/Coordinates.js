import cartesianToSpherical from '$lib/cartesianToSpherical.js';
import sphericalToCartesian from '$lib/sphericalToCartesian.js';

export default class Coordinates {
	#rho;
	#theta;
	#phi;

	getSpherical() {
		return [this.#rho, this.#theta, this.#phi];
	}

	setSpherical(rho, theta, phi) {
		this.#rho = rho;
		this.#theta = theta;
		this.#phi = phi;

		return this;
	}

	getCartesian() {
		return sphericalToCartesian(...this.getSpherical());
	}

	setCartesian(x, y, z) {
		this.setSpherical(...cartesianToSpherical(x, y, z));

		return this;
	}
}
