import Vertex from '$lib/scripts/Vertex';
import Edge from '$lib/scripts/Edge';
import Face from '$lib/scripts/Face';
import type { Vector3Tuple } from 'three';

export default class Icosahedron {
	vertices: Array<Vertex>;
	edges: Array<Edge>;
	faces: Array<Face>;

	constructor() {
		const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio

		this.vertices = [
			[-1, phi, 0],
			[1, phi, 0],
			[-1, -phi, 0],
			[1, -phi, 0],
			[0, -1, phi],
			[0, 1, phi],
			[0, -1, -phi],
			[0, 1, -phi],
			[phi, 0, -1],
			[phi, 0, 1],
			[-phi, 0, -1],
			[-phi, 0, 1]
		].map((vertex) => new Vertex().setCartesian(<Vector3Tuple>vertex));

		this.edges = [
			[0, 1],
			[0, 4],
			[0, 5],
			[0, 8],
			[0, 10],
			[1, 6],
			[1, 7],
			[1, 8],
			[1, 10],
			[1, 11],
			[2, 3],
			[2, 4],
			[2, 5],
			[2, 9],
			[2, 11],
			[3, 6],
			[3, 7],
			[3, 9],
			[3, 10],
			[3, 11],
			[4, 8],
			[4, 9],
			[4, 10],
			[5, 9],
			[5, 10],
			[5, 11],
			[6, 7],
			[6, 9],
			[7, 8],
			[7, 11]
		].map((edge) => new Edge().setVertices([this.vertices[edge[0]], this.vertices[edge[1]]]));

		this.faces = [
			[0, 1, 5],
			[0, 4, 1],
			[0, 5, 8],
			[0, 10, 4],
			[0, 8, 10],
			[1, 6, 7],
			[1, 7, 8],
			[1, 8, 5],
			[1, 10, 6],
			[1, 11, 10],
			[2, 3, 4],
			[2, 4, 9],
			[2, 5, 3],
			[2, 9, 11],
			[2, 11, 5],
			[3, 6, 7],
			[3, 7, 9],
			[3, 9, 4],
			[3, 10, 6],
			[3, 11, 10]
		].map((face) =>
			new Face().setVertices([
				this.vertices[face[0]],
				this.vertices[face[1]],
				this.vertices[face[2]]
			])
		);
	}
}
