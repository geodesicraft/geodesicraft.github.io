import cartesianToSpherical from '$lib/scripts/cartesianToSpherical';
import sphericalToCartesian from '$lib/scripts/sphericalToCartesian';

export default class Coordinates {
	#rho = 0;
	#theta = 0;
	#phi = 0;

	getSpherical(): [number, number, number] {
		return [this.#rho, this.#theta, this.#phi];
	}

	setSpherical([rho, theta, phi]: [number, number, number]) {
		this.#rho = rho;
		this.#theta = theta;
		this.#phi = phi;

		return this;
	}

	getCartesian() {
		return sphericalToCartesian(this.getSpherical());
	}

	setCartesian([x, y, z]: [number, number, number]) {
		this.setSpherical(cartesianToSpherical([x, y, z]));

		return this;
	}
}
