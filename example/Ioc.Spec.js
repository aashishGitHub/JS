
describe('asis.ioc.js', function () {
    'use strict';

    beforeEach(function () {
        asis.ioc.clear();
    });

    afterEach(function () {
        asis.ioc.clear();
    });

    describe('register moduleA,', function () {
        beforeEach(function () {
            asis.ioc.register('moduleA', [], function () {
                return {
                    name: 'A'
                };
            });
        });

        describe('when resolving moduleA,', function () {
            var moduleA;
            beforeEach(function () {
                moduleA = asis.ioc.resolve('moduleA');
            });

            it('should create an instance of moduleA.', function () {
                expect(moduleA).toBeDefined();
                expect(moduleA.name).toBe('A');
            });

            describe('when resolving moduleA again,', function () {
                var moduleA2;
                beforeEach(function () {
                    moduleA2 = asis.ioc.resolve('moduleA');
                });

                it('should return the same instance.', function () {
                    expect(moduleA2 === moduleA).toBeTruthy();
                });
            });
        });

        describe('register moduleB which depends on moduleA,', function () {
            beforeEach(function () {
                asis.ioc.register('moduleB', ['moduleA'], function (ma) {
                    return {
                        name: ma.name + 'B'
                    };
                });
            });

            describe('when resolving moduleB,', function () {
                var moduleB;
                beforeEach(function () {
                    moduleB = asis.ioc.resolve('moduleB');
                });

                it('should create an instance of moduleB with moduleA injected.', function () {
                    expect(moduleB).toBeDefined();
                    expect(moduleB.name).toBe('AB');
                });
            });
        });
    });

    describe('register an object,', function () {
        var expected = { favouriteProject: 'asis' };
        beforeEach(function () {
            asis.ioc.register('myObject', [], expected);
        });

        describe('when resolving it,', function () {
            var actual;
            beforeEach(function () {
                actual = asis.ioc.resolve('myObject');
            });

            it('should return it.', function () {
                expect(expected === actual).toBeTruthy();
            });
        });
    });
});