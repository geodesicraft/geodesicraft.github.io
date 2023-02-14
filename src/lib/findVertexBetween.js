export const findVertexBetween = function (vertex1, vertex2) {
	// [x, y z], [x, y, z]

	const difference = vertex1.map((value, index) => value - vertex2[index]);

	const vertexBetween = vertex1.map((value, index) => value - difference[index] / 2);

	return vertexBetween;
};
