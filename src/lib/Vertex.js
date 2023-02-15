import Coordinates from '$lib/Coordinates';

export default class Vertex extends Coordinates {
	#connectedEdges = [];
	#connectedFaces = [];

	addConnectedEdge(edge) {
		this.#connectedEdges.push(edge);
	}

	addConnectedFace(face) {
		this.#connectedFaces.push(face);
	}

	getConnectedEdges() {
		return this.#connectedEdges;
	}

	getConnectedFaces() {
		return this.#connectedFaces;
	}
}
