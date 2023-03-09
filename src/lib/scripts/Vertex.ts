import type { Vector3Tuple } from 'three';

export default class Vertex {
	#x: number;
	#y: number;
	#z: number;

	constructor([x, y, z]: Vector3Tuple) {
		this.#x = x;
		this.#y = y;
		this.#z = z;
	}

	getCartesian(): Vector3Tuple {
		return [this.#x, this.#y, this.#z];
	}
}
