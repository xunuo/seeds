var Cmd = require('./cmd.js');

var TianmaCmd = Cmd.extend({
		name : 'tianma',
		_handler : function (error, stdout, stderr) {
			console.log(stdout);
		},
		start : function (fn) {
			this.exec('start', fn || this._handler);
		},
		restart : function (fn) {
			this.exec('restart', fn || this._handler);
		},
		stop : function (fn) {
			this.exec('stop', fn || this._handler);
		}
	});

module.exports = TianmaCmd;
