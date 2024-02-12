class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(verTex) {
    if (!this.adjacencyList[verTex]) {
      this.adjacencyList[verTex] = new Set();
    }
  }

  removeEdge(verTex1, verTex2) {
    this.adjacencyList[verTex1].delete(verTex2);
    this.adjacencyList[verTex2].delete(verTex1);
  }
  removeVertex(verTex) {
    if (!this.adjacencyList[verTex]) {
      return;
    }
    for (let adjacencyList of this.adjacencyList[verTex]) {
      this.removeEdge(verTex, adjacencyList);
    }
    delete this.adjacencyList[verTex];
  }
  hasedges(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }
  bfs(start) {
    let queue = [start];
    let visited = new Set();

    while (queue.length > 0) {
      let node = queue.shift();
      if (!visited.has(node)) {
        console.log(node);
        visited.add(node);
        let adjacent = graph[node];
        for (let n of adjacent) {
          if (!visited.has(n)) {
            queue.push(n);
          }
        }
      }
    }
  }
  display() {
    for (let verTex in this.adjacencyList) {
      console.log(verTex + "->" + [...this.adjacencyList[verTex]]);
    }
  }
}

const greph = new Graph();

greph.addVertex("a");
greph.addVertex("b");
greph.addVertex("c");

greph.addEdge("a", "b");
greph.addEdge("b", "c");

console.log(greph.hasedges("a", "d"));

greph.removeEdge("a", "b");
greph.display();
