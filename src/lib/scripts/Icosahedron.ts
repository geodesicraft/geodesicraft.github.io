import Vertex from '$lib/scripts/Vertex';
import Edge from '$lib/scripts/Edge';
import Face from '$lib/scripts/Face';

export default class Icosahedron {
	vertices: Array<Vertex>;
	edges: Array<Edge>;
	faces: Array<Face>;

	constructor() {
		this.vertices = [
			// zig zag ring
			new Vertex().setSpherical([1, Math.PI / 2 - Math.atan(1 / 2), ((Math.PI * 2) / 10) * 0]),
			new Vertex().setSpherical([1, Math.PI / 2 + Math.atan(1 / 2), ((Math.PI * 2) / 10) * 1]),
			new Vertex().setSpherical([1, Math.PI / 2 - Math.atan(1 / 2), ((Math.PI * 2) / 10) * 2]),
			new Vertex().setSpherical([1, Math.PI / 2 + Math.atan(1 / 2), ((Math.PI * 2) / 10) * 3]),
			new Vertex().setSpherical([1, Math.PI / 2 - Math.atan(1 / 2), ((Math.PI * 2) / 10) * 4]),
			new Vertex().setSpherical([1, Math.PI / 2 + Math.atan(1 / 2), ((Math.PI * 2) / 10) * 5]),
			new Vertex().setSpherical([1, Math.PI / 2 - Math.atan(1 / 2), ((Math.PI * 2) / 10) * 6]),
			new Vertex().setSpherical([1, Math.PI / 2 + Math.atan(1 / 2), ((Math.PI * 2) / 10) * 7]),
			new Vertex().setSpherical([1, Math.PI / 2 - Math.atan(1 / 2), ((Math.PI * 2) / 10) * 8]),
			new Vertex().setSpherical([1, Math.PI / 2 + Math.atan(1 / 2), ((Math.PI * 2) / 10) * 9]),
			// top
			new Vertex().setSpherical([1, 0, 0]),
			// bottom
			new Vertex().setSpherical([1, Math.PI, 0])
		];

		this.edges = [
			// zig zag ring
			new Edge().setVertices([this.vertices[0], this.vertices[1]]),
			new Edge().setVertices([this.vertices[1], this.vertices[2]]),
			new Edge().setVertices([this.vertices[2], this.vertices[3]]),
			new Edge().setVertices([this.vertices[3], this.vertices[4]]),
			new Edge().setVertices([this.vertices[4], this.vertices[5]]),
			new Edge().setVertices([this.vertices[5], this.vertices[6]]),
			new Edge().setVertices([this.vertices[6], this.vertices[7]]),
			new Edge().setVertices([this.vertices[7], this.vertices[8]]),
			new Edge().setVertices([this.vertices[8], this.vertices[9]]),
			new Edge().setVertices([this.vertices[9], this.vertices[0]]),
			// upper ring
			new Edge().setVertices([this.vertices[0], this.vertices[2]]),
			new Edge().setVertices([this.vertices[2], this.vertices[4]]),
			new Edge().setVertices([this.vertices[4], this.vertices[6]]),
			new Edge().setVertices([this.vertices[6], this.vertices[8]]),
			new Edge().setVertices([this.vertices[8], this.vertices[0]]),
			// lower ring
			new Edge().setVertices([this.vertices[1], this.vertices[3]]),
			new Edge().setVertices([this.vertices[3], this.vertices[5]]),
			new Edge().setVertices([this.vertices[5], this.vertices[7]]),
			new Edge().setVertices([this.vertices[7], this.vertices[9]]),
			new Edge().setVertices([this.vertices[9], this.vertices[1]]),
			// top
			new Edge().setVertices([this.vertices[10], this.vertices[0]]),
			new Edge().setVertices([this.vertices[10], this.vertices[2]]),
			new Edge().setVertices([this.vertices[10], this.vertices[4]]),
			new Edge().setVertices([this.vertices[10], this.vertices[6]]),
			new Edge().setVertices([this.vertices[10], this.vertices[8]]),
			// bottom
			new Edge().setVertices([this.vertices[11], this.vertices[1]]),
			new Edge().setVertices([this.vertices[11], this.vertices[3]]),
			new Edge().setVertices([this.vertices[11], this.vertices[5]]),
			new Edge().setVertices([this.vertices[11], this.vertices[7]]),
			new Edge().setVertices([this.vertices[11], this.vertices[9]])
		];

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
