var findCenter = function (edges) {
  let graph = new Map()
  //create an adjacency list
  for (let [v, e] of edges) {
    if (graph.has(v)) {
      graph.get(v).push(e)
    } else {
      graph.set(v, [e])
    }
    if (graph.has(e)) {
      graph.get(e).push(v)
    } else {
      graph.set(e, [v])
    }
    //check if the length of either v or e is more than one
    //if it is return e or v as that is the center of the star graph
    if (graph.get(v).length > 1) {
      return v
    }
    if (graph.get(e).length > 1) {
      return e
    }
  }
};

//Time: O(n)
//Space: O(n)