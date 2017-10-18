
(function () {

    var examples = window.test.ns('examples'),
        luckCalculator;

    function init(calc) {
        luckCalculator = calc;
        $('#btnShow').click(function () {
            checkLuck();
        });

        $('#btnAlert').click(function () {
            checkLuckShowAlert();
        });
    }

    function checkLuck() {
        var input = $('#yname').val();
        var result = luckCalculator.calculateLuck(input);
        $('#luck').text(result);
    }

    function checkLuckShowAlert() {
        var input = $('#yname').val();
        var result = luckCalculator.calculateLuck(input);
        alert(result);
    }

    examples.homeModule = {
        init: init
    };
}());
