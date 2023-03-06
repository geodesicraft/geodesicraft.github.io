export default class Face {
	#vertices = [];

	setVertices(vertices) {
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
