export default class Coordinates {
	static #sphericalToCartesian(rho, theta, phi) {
		// radius, inclination, aziumuth
		const x = rho * Math.sin(theta) * Math.sin(phi);
		const y = rho * Math.cos(theta);
		const z = rho * Math.sin(theta) * Math.cos(phi);
		return [x, y, z];
	}
	// https://en.wikipedia.org/wiki/Spherical_coordinate_system#Cartesian_coordinates
	// This formula is modified so x, y, z is consistent with Minecraft and Three.js

	static #cartesianToSpherical(x, y, z) {
		// TODO
		const rho = 0;
		const theta = 0;
		const phi = 0;
		return [rho, theta, phi];
	}

	#rho = 0;
	#theta = 0;
	#phi = 0;

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
		return Coordinates.#sphericalToCartesian(this.#rho, this.#theta, this.#phi);
	}

	setCartesian(x, y, z) {
		[this.#rho, this.#theta, this.#phi] = Coordinates.#cartesianToSpherical(x, y, z);

		return this;
	}
}
