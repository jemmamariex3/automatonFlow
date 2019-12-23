// Using a JS object,
// find the length/size of the object,
// in for loop or for each, create that many divs on click

// when one of those divs are clicked, expand the divs right and output number of divs according to size of that object
$(document).ready(function () { 
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
    ]

    var sampleLen = 0;

    for (var i = 0; i < sample.length; i++) {
        sampleLen++;
    }
    console.log(sampleLen);

    //dynamically adds 3 node body containers in container class
    for (var j = 0; j < sampleLen; j++) {
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
});