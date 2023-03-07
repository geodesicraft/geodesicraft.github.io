import type Vertex from '$lib/scripts/Vertex';

export default class Face {
	#vertices: Array<Vertex> = [];

	setVertices(vertices: Array<Vertex>) {
		// these vertices reference the original vertex objects; not copies
		for (let vertex of vertices) {
			this.#vertices.push(vertex);
		}
		return this;
	}

	getVertices() {
		return this.#vertices;
	}
}
