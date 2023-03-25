import Vertex from '$lib/scripts/Vertex';
import Edge from '$lib/scripts/Edge';
import Face from '$lib/scripts/Face';
import type { Vector3Tuple } from 'three';

export default class Icosahedron {
	vertices: Array<Vertex>;
	edges: Array<Edge>;
	faces: Array<Face>;

	constructor() {
		const phi = (1 + Math.sqrt(5)) / 2;

		this.vertices = [
			[-1 / phi, 1, 0],
			[1 / phi, 1, 0],
			[-1 / phi, -1, 0],
			[1 / phi, -1, 0],
			[0, -1 / phi, 1],
			[0, 1 / phi, 1],
			[0, -1 / phi, -1],
			[0, 1 / phi, -1],
			[1, 0, -1 / phi],
			[1, 0, 1 / phi],
			[-1, 0, -1 / phi],
			[-1, 0, 1 / phi]
		].map((vertex, index) => new Vertex(<Vector3Tuple>vertex, index));
		// TODO: make these 1/phi or similar so that the radius is 1
		// this.vertices = [
		// 	[-1, phi, 0],
		// 	[1, phi, 0],
		// 	[-1, -phi, 0],
		// 	[1, -phi, 0],
		// 	[0, -1, phi],
		// 	[0, 1, phi],
		// 	[0, -1, -phi],
		// 	[0, 1, -phi],
		// 	[phi, 0, -1],
		// 	[phi, 0, 1],
		// 	[-phi, 0, -1],
		// 	[-phi, 0, 1]
		// ].map((vertex, index) => new Vertex(<Vector3Tuple>vertex, index));

		this.edges = [
			[0, 1],
			[0, 5],
			[0, 7],
			[0, 10],
			[0, 11],
			[1, 7],
			[1, 5],
			[1, 8],
			[1, 9],
			[2, 3],
			[2, 4],
			[2, 6],
			[2, 10],
			[2, 11],
			[3, 4],
			[3, 6],
			[3, 8],
			[3, 9],
			[4, 5],
			[4, 9],
			[4, 11],
			[5, 9],
			[5, 11],
			[6, 7],
			[6, 8],
			[6, 10],
			[7, 8],
			[7, 10],
			[8, 9],
			[10, 11]
		].map((edge) => new Edge([this.vertices[edge[0]], this.vertices[edge[1]]]));

		this.faces = [
			[0, 1, 5],
			[0, 1, 7],
			[0, 5, 11],
			[0, 7, 10],
			[0, 10, 11],
			[1, 5, 9],
			[1, 7, 8],
			[1, 8, 9],
			[2, 3, 4],
			[2, 3, 6],
			[2, 4, 11],
			[2, 6, 10],
			[2, 10, 11],
			[3, 4, 9],
			[3, 6, 8],
			[3, 8, 9],
			[4, 5, 9],
			[4, 5, 11],
			[6, 7, 8],
			[6, 7, 10]
		].map(
			(face) => new Face([this.vertices[face[0]], this.vertices[face[1]], this.vertices[face[2]]])
		);
	}
}
