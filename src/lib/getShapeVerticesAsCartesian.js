export default function getShapeVerticesAsCartesian(shape) {
	return shape.getVertices().map((vertex) => vertex.getCartesian());
}
