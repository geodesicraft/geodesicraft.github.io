import type { Vector3Tuple } from 'three';

export default class Vertex {
	#x = 0;
	#y = 0;
	#z = 0;

	getCartesian(): Vector3Tuple {
		return [this.#x, this.#y, this.#z];
	}

	setCartesian([x, y, z]: Vector3Tuple): Vertex {
		this.#x = x;
		this.#y = y;
		this.#z = z;

		return this;
	}
}
