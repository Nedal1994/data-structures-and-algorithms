'use strict';

const Edge = require('./edge')

class Graph {
    constructor(){
        this.list = new Map();
    }

    addVertix(vertex){
        this.list.set(vertex, [] )
    }

    addDirectedEdge(startVertex, endVertex, weight = 0){
        if(! this.list.has(startVertex) || ! this.list.has(endVertex))
        {
           return ('Invaild nodes');
        }

        const edge = new Edge(endVertex, weight);
        const start = this.list.get(startVertex);
        start.push(edge);
    }
    printAll()
    {
        for(const [vertex, edge] of this.list.entries())
        {
            console.log(vertex, edge)
        }
    }
    getNodes()
    {
        return this.list
    }
    getNeighbors(vertex)
    {
        if(!this.list.has(vertex))
        {
            return ('Invalid vertex')
        }
    }
    size()
    {
        return this.list.size
    }
    included(vertex)
    {
        return this.list.get(vertex) ? true:false
    }
    isEmpty()
    {
        return this.list.size > 0 ? false:null
    }
}
module.exports=Graph