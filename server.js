/// <reference path="../DefinitelyTyped/node/node.d.ts" />
/// <reference path="../DefinitelyTyped/express/express.d.ts" />
/// <reference path="./customer.ts" />
var express = require("express");
var cust = require("./customer");

var app = express();

app.get("/customer/:id", function (req, resp) {
    var customerId = req.params.id;
    var c = new cust.customer.Customer({ firstName: "Win #" + customerId.toString(), lastName: "Days" });
    console.log(c.fullName());
    resp.send(JSON.stringify(c));
});

app.get("/customer", function (req, resp) {
    var customers;
    customers = new Array();
    for (var i = 0; i < 10; i++) {
        customers.push(new cust.customer.Customer({ firstName: "Win #" + i.toString(), lastName: "Days" }));
    }
    resp.send(JSON.stringify(customers));
});

app.use("/", express.static(__dirname + "/website/"));

var port = process.env.PORT || 1337;
app.listen(port);
