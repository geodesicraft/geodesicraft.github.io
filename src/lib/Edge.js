export default class Edge {
	#vertex1;
	#vertex2;

	setVertices(vertex1, vertex2) {
		// variable references the same object; not a copy
		this.#vertex1 = vertex1;
		this.#vertex2 = vertex2;

		this.#vertex1.addConnectedEdge(this);
		this.#vertex2.addConnectedEdge(this);

		return this;
	}
}
