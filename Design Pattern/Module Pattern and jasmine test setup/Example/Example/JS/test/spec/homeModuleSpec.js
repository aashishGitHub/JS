describe("Home", function () {
    var calcModuleMock, homeModule;

    beforeEach(function () {
        jasmine.getFixtures().fixturesPath = 'fixtures';
        loadFixtures('home.html');

        calcModuleMock = {
            calculateLuck: function (str) {
                return 10;
            }
        };

        homeModule = window.examples.homeModule;
        homeModule.init(calcModuleMock);
    });

    it("when Show clicked, valid value must be displayed", function () {
        $('#btnShow').click();
        expect($('#luck').text()).toEqual('10');
    });

    it("when Alert clicked, alert must be called", function () {
        spyOn(window, 'alert');
        $('#btnAlert').click();

        expect(window.alert).toHaveBeenCalledWith(10);
    });
});

