export default class Face {
	#vertices = [];

	setVertices(vertices) {
		// these vertices reference the original vertex objects; not copies
		for (let vertex of vertices) {
			vertex.addConnectedFace(this);
			this.#vertices.push(vertex);
		}
		return this;
	}

	getVertices() {
		return this.#vertices;
	}
}
