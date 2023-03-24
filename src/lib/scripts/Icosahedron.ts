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
			[0.0, 0.0, 1.0],
			[0.894, 0.0, 0.447],
			[0.276, 0.851, 0.447],
			[-0.724, 0.526, 0.447],
			[-0.724, -0.526, 0.447],
			[0.276, -0.851, 0.447],
			[0.724, 0.526, -0.447],
			[-0.276, 0.851, -0.447],
			[-0.894, 0.0, -0.447],
			[-0.276, -0.851, -0.447],
			[0.724, -0.526, -0.447],
			[0.0, 0.0, -1.0]
		].map((vertex, index) => new Vertex(<Vector3Tuple>vertex, index));

		this.edges = [
			[0, 1],
			[0, 2],
			[0, 3],
			[0, 4],
			[0, 5],
			[1, 2],
			[1, 5],
			[1, 6],
			[1, 10],
			[2, 3],
			[2, 6],
			[2, 7],
			[3, 4],
			[3, 7],
			[3, 8],
			[4, 5],
			[4, 8],
			[4, 9],
			[5, 9],
			[5, 10],
			[6, 7],
			[6, 10],
			[6, 11],
			[7, 8],
			[7, 11],
			[8, 9],
			[8, 11],
			[9, 10],
			[9, 11],
			[10, 11]
		].map((edge) => new Edge([this.vertices[edge[0]], this.vertices[edge[1]]]));

		this.faces = [
			[0, 1, 2],
			[0, 2, 3],
			[0, 3, 4],
			[0, 4, 5],
			[0, 5, 1],
			[1, 6, 2],
			[2, 7, 3],
			[3, 8, 4],
			[4, 9, 5],
			[5, 10, 1],
			[1, 10, 6],
			[2, 6, 7],
			[3, 7, 8],
			[4, 8, 9],
			[5, 9, 10],
			[6, 10, 11],
			[7, 6, 11],
			[8, 7, 11],
			[9, 8, 11],
			[10, 9, 11]
		].map(
			(face) => new Face([this.vertices[face[0]], this.vertices[face[1]], this.vertices[face[2]]])
		);
	}
}
