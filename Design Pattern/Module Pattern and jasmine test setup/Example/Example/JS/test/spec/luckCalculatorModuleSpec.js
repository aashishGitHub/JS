describe("Luck Calculator", function () {
    var luckModule;

    beforeEach(function () {
        luckModule = window.examples.luckCalculatorModule;
    });

    it("must return -1 for empty string", function () {
        var value = luckModule.calculateLuck('');
        expect(value).toEqual(-1);
    });

    it("must return valid value for correct string", function () {
        var value = luckModule.calculateLuck('test');
        expect(value).toEqual(30);
    });
});
