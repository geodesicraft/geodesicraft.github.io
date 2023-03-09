import type Vertex from '$lib/scripts/Vertex';

export default class Face {
	#vertices: Array<Vertex> = [];

	constructor(vertices: Array<Vertex>) {
		// these vertices reference the original vertex objects; not copies
		for (const vertex of vertices) {
			this.#vertices.push(vertex);
		}
	}

	getVertices() {
		return this.#vertices;
	}
}
