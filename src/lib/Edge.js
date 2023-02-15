export default class Edge {
	#vertices = [];

	setVertices(vertices) {
		// these vertices reference the original vertex objects; not copies
		for (let vertex of vertices) {
			vertex.addConnectedEdge(this);
			this.#vertices.push(vertex);
		}
		return this;
	}

	getVertices() {
		return this.#vertices;
	}
}
