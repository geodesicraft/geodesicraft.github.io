import type { Vector3Tuple } from 'three';

export const findVertexBetweenCartesian = function (vertex1: Vector3Tuple, vertex2: Vector3Tuple) {
	// [x, y z], [x, y, z]

	const difference = vertex1.map((value, index) => value - vertex2[index]);

	const vertexBetween = vertex1.map((value, index) => value - difference[index] / 2);

	return vertexBetween;
};
