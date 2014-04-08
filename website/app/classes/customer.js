define(["require", "exports"], function(require, exports) {
    (function (customer) {
        var Customer = (function () {
            function Customer(arg) {
                if (typeof arg === "undefined") { arg = { firstName: "", lastName: "" }; }
                this.firstName = arg.firstName;
                this.lastName = arg.lastName;
            }
            Customer.prototype.fullName = function () {
                return this.lastName + ", " + this.firstName;
            };
            return Customer;
        })();
        customer.Customer = Customer;
    })(exports.customer || (exports.customer = {}));
    var customer = exports.customer;
});
