/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var trianglesCount = 0;
  for (var i = 0; i < preferences.length; i++) {
	  var fstLoves, secLoves, thdLoves;
	  fstLoves = preferences[i] - 1;
	  secLoves = preferences[fstLoves] - 1;
	  thdLoves = preferences[secLoves] - 1;
	  
	  if (thdLoves === i) trianglesCount++;
  };
  return trianglesCount;
};
