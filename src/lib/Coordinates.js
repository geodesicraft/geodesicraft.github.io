export default class Coordinates {
	static #sphericalToCartesian([rho, theta, phi]) {
		// radius, inclination, aziumuth
		const x = rho * Math.sin(theta) * Math.sin(phi);
		const y = rho * Math.cos(theta);
		const z = rho * Math.sin(theta) * Math.cos(phi);
		return [x, y, z];
	}

	// https://en.wikipedia.org/wiki/Spherical_coordinate_system#Cartesian_coordinates
	// These formulas are modified so x, y, z is consistent with Minecraft and Three.js

	static #cartesianToSpherical([x, y, z]) {
		// TODO
		const rho = Math.sqrt((x ^ 2) + (y ^ 2) + (z ^ 2));
		const theta = 0;
		const phi = 0;
		return [rho, theta, phi];
	}

	#rho;
	#theta;
	#phi;

	getSpherical() {
		return [this.#rho, this.#theta, this.#phi];
	}

	setSpherical(sphericalCoordinates) {
		[this.#rho, this.#theta, this.#phi] = sphericalCoordinates;

		return this;
	}

	getCartesian() {
		return Coordinates.#sphericalToCartesian([this.#rho, this.#theta, this.#phi]);
	}

	setCartesian([x, y, z]) {
		[this.#rho, this.#theta, this.#phi] = Coordinates.#cartesianToSpherical([x, y, z]);

		return this;
	}
}
