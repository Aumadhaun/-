$(document).ready(function() {
var i;
var test;
var testClone;
test = $("#color");
testClone = $("#field");
for (i = 1; i < 100; i++){
test.clone().appendTo(testClone);
};
testClone.appendTo( $("#field"));
});