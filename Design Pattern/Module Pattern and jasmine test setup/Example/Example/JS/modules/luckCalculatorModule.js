
(function () {

    var examples = window.test.ns('examples');

    function getStringVal(str) {
        var total = 0;

        for (var i = 0; i < str.length; i++) {
            total = str.charCodeAt(i);
        }
        
        return total;
    }

    function calculateLuck(str) {
        var value = getStringVal(str);

        if (value == 0)
            return -1;
        else
            return Math.floor(value / str.length);
    }

    examples.luckCalculatorModule = {
        calculateLuck: calculateLuck
    };
}());
