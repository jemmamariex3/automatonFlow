// when one of those divs are clicked, expand the divs right and output number of divs according to size of that object
//import { hierarchy, tree } from 'd3-hierarchy'

var sample = [
    person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    },
    person2 = {
        firstName: "Kevin",
        lastName: "Ray",
        age: 52,
        eyeColor: "blue"
    },
    person3 = {
        firstName: "Peter",
        lastName: "Me",
        age: 54,
        eyeColor: "blue"
    }
];
var data = {
    "name": "Eve",
    "children": [{
        "name": "Cain"
    }, {
        "name": "Seth",
        "children": [{
            "name": "Enos"
        }, {
            "name": "Noam"
        }]
    }, {
        "name": "Abel"
    }, {
        "name": "Awan",
        "children": [{
            "name": "Enoch"
        }]
    }, {
        "name": "Azura"
    }]
};


$(document).ready(function () { 

    //dynamically adds node body containers in container class
    for (var j = 0; j < sample.length; j++) {
        var node_body = document.createElement('div');
        node_body.className = "node_body";
        $(".container").append(node_body);
    }

    //To Do: append node_main into node_body
    //should only be one node_main for every node_body
    for (var i = 0; i < document.getElementsByClassName("node_body").length; i++) {
        var node_main = document.createElement('div');
        node_main.className = "node_main";
        for (var propName in sample[i]) {
            node_main.innerHTML += "" + sample[i][propName] + "<br/>";
        }

        document.getElementsByClassName("node_body")[i].append(node_main);
    }

    $(document).on('click', '.node_main', function (e) {
        var target = $(e.target);

        var divAdd = document.createElement('div');
        divAdd.className = "node_added";
        $(".node_div").append(divAdd);


        //consoles out the selected element
        document.getElementsByClassName('node_main')[0].appendChild(divAdd);
        console.log("current target div has been clicked: ", e.currentTarget);

        //checks to see if the div clicked has the parent node called node_div
        if (target.parents('div.node_div').length) {
            alert('Your clicked element is having div.node_div as parent');
        }
    })



    //to-do : parse incoming acif-configs.js 

    //var hierarchy = d3.hierarchy(data);
    var hierarchy = d3.hierarchy(sample);

    var tree = d3.tree();

    var links = tree(hierarchy).links();

    console.log(links)

    var svg = d3.select("body")
        .append("svg")
        .attr("height", "100%").attr("width", "100%")
        .call(d3.behavior.zoom().on("zoom", redraw))
        .append("g")
        .attr("transform", "translate(" + margin.top + "," + margin.left + ")");

});

//https://bl.ocks.org/d3noob/8375092


//var treeData = [
//    {
//        "name": "Top Level",
//        "parent": "null",
//        "children": [
//            {
//                "name": "Level 2: A",
//                "parent": "Top Level",
//                "children": [
//                    {
//                        "name": "Son of A",
//                        "parent": "Level 2: A"
//                    },
//                    {
//                        "name": "Daughter of A",
//                        "parent": "Level 2: A"
//                    }
//                ]
//            },
//            {
//                "name": "Level 2: B",
//                "parent": "Top Level"
//            }
//        ]
//    }
//];


//// ************** Generate the tree diagram	 *****************
//var margin = { top: 20, right: 120, bottom: 20, left: 120 },
//    width = 960 - margin.right - margin.left,
//    height = 500 - margin.top - margin.bottom;

//var i = 0,
//    duration = 750,
//    root;

////var tree = d3.layout.tree().size([height, width]);
//var tree = d3.tree().size([height, width]);


////var diagonal = d3.svg.diagonal()
////    .projection(function (d) { return [d.y, d.x]; });


//var link = d3.linkHorizontal()
//    .x(function (d) {
//        return d.x;
//    })
//    .y(function (d) {
//        return d.y;
//    });

//var svg = d3.select("body").append("svg")
//    .attr("d", d3.linkHorizontal()
//        .x(function (d) { return d.y; })
//        .y(function (d) { return d.x; }));
//    //.attr("width", width + margin.right + margin.left)
//    //.attr("height", height + margin.top + margin.bottom)
//    //.append("g")
//    //.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//root = treeData[0];
//root.x0 = height / 2;
//root.y0 = 0;

//update(root);

//d3.select(self.frameElement).style("height", "500px");

//function update(source) {


//    // Compute the new tree layout.
//    //var nodes = tree.nodes(root).reverse(),
//    var nodes = tree.nodeSize(),
//        links = node.links(nodes);



//    // Normalize for fixed-depth.
//    nodes.forEach(function (d) { d.y = d.depth * 180; });

//    // Update the nodes…
//    var node = svg.selectAll("g.node")
//        .data(nodes, function (d) { return d.id || (d.id = ++i); });

//    // Enter any new nodes at the parent's previous position.
//    var nodeEnter = node.enter().append("g")
//        .attr("class", "node")
//        .attr("transform", function (d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
//        .on("click", click);

//    nodeEnter.append("circle")
//        .attr("r", 1e-6)
//        .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });

//    nodeEnter.append("text")
//        .attr("x", function (d) { return d.children || d._children ? -13 : 13; })
//        .attr("dy", ".35em")
//        .attr("text-anchor", function (d) { return d.children || d._children ? "end" : "start"; })
//        .text(function (d) { return d.name; })
//        .style("fill-opacity", 1e-6);

//    // Transition nodes to their new position.
//    var nodeUpdate = node.transition()
//        .duration(duration)
//        .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });

//    nodeUpdate.select("circle")
//        .attr("r", 10)
//        .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });

//    nodeUpdate.select("text")
//        .style("fill-opacity", 1);

//    // Transition exiting nodes to the parent's new position.
//    var nodeExit = node.exit().transition()
//        .duration(duration)
//        .attr("transform", function (d) { return "translate(" + source.y + "," + source.x + ")"; })
//        .remove();

//    nodeExit.select("circle")
//        .attr("r", 1e-6);

//    nodeExit.select("text")
//        .style("fill-opacity", 1e-6);

//    // Update the links…
//    var link = svg.selectAll("path.link")
//        .data(links, function (d) { return d.target.id; });

//    // Enter any new links at the parent's previous position.
//    link.enter().insert("path", "g")
//        .attr("class", "link")
//        .attr("d", function (d) {
//            var o = { x: source.x0, y: source.y0 };
//            return diagonal({ source: o, target: o });
//        });

//    // Transition links to their new position.
//    link.transition()
//        .duration(duration)
//        .attr("d", diagonal);

//    // Transition exiting nodes to the parent's new position.
//    link.exit().transition()
//        .duration(duration)
//        .attr("d", function (d) {
//            var o = { x: source.x, y: source.y };
//            return diagonal({ source: o, target: o });
//        })
//        .remove();

//    // Stash the old positions for transition.
//    nodes.forEach(function (d) {
//        d.x0 = d.x;
//        d.y0 = d.y;
//    });
//}

//// Toggle children on click.
//function click(d) {
//    if (d.children) {
//        d._children = d.children;
//        d.children = null;
//    } else {
//        d.children = d._children;
//        d._children = null;
//    }
//    update(d);
//}
