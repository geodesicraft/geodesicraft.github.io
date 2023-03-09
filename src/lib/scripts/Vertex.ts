import type { Vector3Tuple } from 'three';

export default class Vertex {
	#x: number;
	#y: number;
	#z: number;
	#index: number;

	constructor([x, y, z]: Vector3Tuple, index: number) {
		this.#x = x;
		this.#y = y;
		this.#z = z;
		this.#index = index;
	}

	getCartesian(): Vector3Tuple {
		return [this.#x, this.#y, this.#z];
	}

	getIndex(): number {
		return this.#index;
	}
}
