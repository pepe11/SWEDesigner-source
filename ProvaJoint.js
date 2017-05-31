/**
 * Created by Socs on 31/05/2017.
 */
var graph = new joint.dia.Graph();

var paper = new joint.dia.Paper({
    el: $('#canvas'),
    width: $('#main').width(),
    height: $('#canvasRow').height(),
    model: graph,
    gridSize: 10,
    drawGrid: true
});

var rect = new joint.shapes.basic.Rect({
    position: { x: 100, y: 30 },
    size: { width: 100, height: 30 },
    attrs: { rect: { fill: 'blue' }, text: { text: 'my box', fill: 'white' } }
});

var rect2 = rect.clone();
rect2.translate(300);

var link = new joint.dia.Link({
    source: { id: rect.id },
    target: { id: rect2.id }
});

graph.addCells([rect, rect2, link]);
