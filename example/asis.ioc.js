(function () {
    'use strict';

    window.asis = window.asis || {};
    var asis = window.asis,
        _modules = {},
        _backupModules;

    function clear() {
        _modules = {};
    }

    function register(key, dependencies, constructor) {
        _modules[key] = {
            dependencies: dependencies,
            constructor: constructor,
            instance: null
        };
        return asis.ioc;
    }

    function resolve(key) {
        var module = _modules[key];
        if (!module) {
            throw 'Cannot resolve "' + key + '".';
        }

        if (typeof module.constructor !== 'function') {
            return module.constructor;
        }

        if (!module.instance) {
            var args = $.map(module.dependencies, function (dependency) {
                return resolve(dependency);
            });
            module.instance = module.constructor.apply({}, args);
        }
        return module.instance;
    }

    function resolveWith(key, inputs) {
        var module = _modules[key];
        if (!module) {
            throw 'Cannot resolve "' + key + '".';
        }

        if (typeof module.constructor !== 'function') {
            return module.constructor;
        }

        inputs = inputs || {};
        var args = $.map(module.dependencies, function (dependency) {
            return inputs[dependency] || {};
        });

        return module.constructor.apply({}, args);
    }

    function backup () {
        _backupModules = $.extend({}, _modules);
        return asis.ioc;
    }

    function restore () {
        if (!_backupModules) {
            throw 'Cannot restore without backup.';
        }
        _modules = _backupModules;
        return asis.ioc;
    }

    asis.ioc = {
        register: register,
        resolve: resolve,
        resolveLazy: function (key) {
            return function() {
                return resolve(key);
            };
        },
        clear: clear, // only for testing
        resolveWith: resolveWith, // only for testing
        backup: backup, // only for testing
        restore: restore // only for testing
    };
}());