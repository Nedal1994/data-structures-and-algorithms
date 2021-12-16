'use strict'

const Graph = require('../graph')
const Vertex = require('../vertex')

describe('Graphs',()=>{
    it('Node can be successfully added to the graph',()=>{
        let graph = new Graph()

        graph.addVertix(10)
        expect(graph.included(10)).toEqual(true)
    })
    it('An edge can be successfully added to the graph',()=>{
        let graph = new Graph()

        graph.addVertix(20)
        graph.addVertix(30)
        graph.addDirectedEdge(20,30)
        expect(graph.included(20)).toEqual(true)
    })
    it('A collection of all nodes can be properly retrieved from the graph',()=>{
        let graph = new Graph()

        let node1 = new Vertex(1)
        let node2 = new Vertex(2)
        let node3 = new Vertex(3)

        graph.addVertix(node1)
        graph.addVertix(node2)
        graph.addVertix(node3)

        graph.addDirectedEdge(node1,node2)
        graph.addDirectedEdge(node2,node3)

        expect(graph.size()).toEqual(3)
    })
    it('All appropriate neighbors can be retrieved from the graph',()=>{
        let graph = new Graph()

        let node1 = new Vertex(1)
        let node2 = new Vertex(2)
        let node3 = new Vertex(3)

        graph.addVertix(node1)
        graph.addVertix(node2)
        graph.addVertix(node3)

        graph.addDirectedEdge(node1,node2)
        graph.addDirectedEdge(node2,node3)

        expect(graph.getNeighbors(node3)).toEqual()
    })
    it('Neighbors are returned with the weight between nodes included',()=>{
        let graph = new Graph()

        let node1 = graph.addVertix('A')
        let node2 = graph.addVertix('B')
        let node3 = graph.addVertix('C')

        graph.addDirectedEdge(node1,node3)
        graph.addDirectedEdge(node1,node2)
        graph.addDirectedEdge(node2,node3)

        let neighbors = graph.getNeighbors(node1)

        expect(neighbors[0].weight).toEqual()
    })
    it('The proper size is returned, representing the number of nodes in the graph',()=>{
        let graph = new Graph()

        let node1 = graph.addVertix('A')
        let node2 = graph.addVertix('B')
        let node3 = graph.addVertix('C')

        graph.addDirectedEdge(node1,node3)
        graph.addDirectedEdge(node1,node2)
        graph.addDirectedEdge(node2,node3)

        expect(graph.size()).toEqual(3)
    })
    it('A graph with only one node and edge can be properly returned',()=>{
        let graph = new Graph()
        let node1 = graph.addVertix(1)

        graph.addVertix(node1)
        graph.addDirectedEdge(node1,node1)

        expect(graph.size()).toEqual(2)
    })
    it('An empty graph properly returns null',()=>{
        let graph = new Graph()
        expect(graph.size()).toEqual(0)
    })
})