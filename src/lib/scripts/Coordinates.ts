import cartesianToSpherical from '$lib/scripts/cartesianToSpherical';
import sphericalToCartesian from '$lib/scripts/sphericalToCartesian';
import type { Vector3Tuple } from 'three';

export default class Coordinates {
	#rho = 0;
	#theta = 0;
	#phi = 0;

	getSpherical(): Vector3Tuple {
		return [this.#rho, this.#theta, this.#phi];
	}

	setSpherical([rho, theta, phi]: Vector3Tuple) {
		this.#rho = rho;
		this.#theta = theta;
		this.#phi = phi;

		return this;
	}

	getCartesian() {
		return sphericalToCartesian(this.getSpherical());
	}

	setCartesian([x, y, z]: Vector3Tuple) {
		this.setSpherical(cartesianToSpherical([x, y, z]));

		return this;
	}
}
