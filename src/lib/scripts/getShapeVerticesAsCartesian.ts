import type Edge from '$lib/scripts/Edge';
import type Face from '$lib/scripts/Face';

export default function getShapeVerticesAsCartesian(shape: Edge | Face) {
	return shape.getVertices().map((vertex) => vertex.getCartesian());
}
