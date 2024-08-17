//classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return '${this.client} owes ${this.amount} for ${this.details}';
    };
    return Invoice;
}());
var inOne = new Invoice('mario', 'work', 250);
var inTwo = new Invoice('Luci', 'Pending', 300);
var invoices = [];
invoices.push(inOne);
invoices.push(inTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format);
});
console.log(invoices);
var form = document.querySelector('.new-item-form');
//console.log(form.children);
//INPUTS
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
