define(["require", "exports", "app/classes/customer"], function(require, exports, cust) {
    var AppMain = (function () {
        function AppMain() {
        }
        AppMain.prototype.run = function () {
            $.get("/customer/99").done(function (data) {
                var c = new cust.customer.Customer(JSON.parse(data));
                $("#fullname").text(c.fullName());
            });
        };
        return AppMain;
    })();
    exports.AppMain = AppMain;
});
