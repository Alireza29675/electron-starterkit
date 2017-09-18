'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _electron = require('electron');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App(publicPath) {
		_classCallCheck(this, App);

		this.publicPath = publicPath;
		this.mainWindow = null;
		this.setAppListeners();
	}

	_createClass(App, [{
		key: 'setAppListeners',
		value: function setAppListeners() {
			var _this = this;

			_electron.app.on('window-all-closed', function () {
				if (process.platform !== 'darwin') _electron.app.quit();
			});
			_electron.app.on('activate-with-no-open-windows', function () {
				if (!_this.mainWindow) _this.mainWindow = _this.createMainWindow();
			});
			_electron.app.on('ready', function () {
				return _this.mainWindow = _this.createMainWindow();
			});
		}
	}, {
		key: 'createMainWindow',
		value: function createMainWindow() {
			var win = new _electron.BrowserWindow({
				width: 800,
				height: 500
			});
			win.loadURL('file:' + (this.publicPath + '/index.html'));
			win.on('closed', this.onClosed.bind(this));
			return win;
		}
	}, {
		key: 'onClosed',
		value: function onClosed() {
			this.mainWindow = null;
		}
	}]);

	return App;
}();

exports.default = App;