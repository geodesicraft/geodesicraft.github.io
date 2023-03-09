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
			// ring
			new Face().setVertices([this.vertices[0], this.vertices[1], this.vertices[2]]),
			new Face().setVertices([this.vertices[1], this.vertices[2], this.vertices[3]]),
			new Face().setVertices([this.vertices[2], this.vertices[3], this.vertices[4]]),
			new Face().setVertices([this.vertices[3], this.vertices[4], this.vertices[5]]),
			new Face().setVertices([this.vertices[4], this.vertices[5], this.vertices[6]]),
			new Face().setVertices([this.vertices[5], this.vertices[6], this.vertices[7]]),
			new Face().setVertices([this.vertices[6], this.vertices[7], this.vertices[8]]),
			new Face().setVertices([this.vertices[7], this.vertices[8], this.vertices[9]]),
			new Face().setVertices([this.vertices[8], this.vertices[9], this.vertices[0]]),
			new Face().setVertices([this.vertices[9], this.vertices[0], this.vertices[1]]),
			// top
			new Face().setVertices([this.vertices[10], this.vertices[0], this.vertices[2]]),
			new Face().setVertices([this.vertices[10], this.vertices[2], this.vertices[4]]),
			new Face().setVertices([this.vertices[10], this.vertices[4], this.vertices[6]]),
			new Face().setVertices([this.vertices[10], this.vertices[6], this.vertices[8]]),
			new Face().setVertices([this.vertices[10], this.vertices[8], this.vertices[0]]),
			// bottom
			new Face().setVertices([this.vertices[11], this.vertices[1], this.vertices[3]]),
			new Face().setVertices([this.vertices[11], this.vertices[3], this.vertices[5]]),
			new Face().setVertices([this.vertices[11], this.vertices[5], this.vertices[7]]),
			new Face().setVertices([this.vertices[11], this.vertices[7], this.vertices[9]]),
			new Face().setVertices([this.vertices[11], this.vertices[9], this.vertices[1]])
		];
	}
}
