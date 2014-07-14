var os = require('os');
var dgram = require("dgram");
const DNSADDRESS = "202.101.224.68";
const DNSPORT = "53";
console.log("DNS Server: " + DNSADDRESS + ":" + DNSPORT);
dgram.createSocket("udp4", function(msg, rinfo) {
	console.log(rinfo);
	var server = this;
	var client = dgram.createSocket("udp4");
	var address = rinfo.address;
	var port = rinfo.port;
	
	client.send(msg, 0, msg.length, DNSPORT, DNSADDRESS);

	var tid = 0,
		buf = null;

	client.on("message", function(msg, rinfo) {
		buf = msg;
		if (tid) clearTimeout(tid);
		tid = setTimeout(function() {
			tid = 0;
			server.send(buf, 0, buf.length, port, address);
			client.close();
		}, 15);
	});


}).bind(53);


/**
 * 返回本机 IP 地址
 */
function getLocalIP() {
	var nifs = os.networkInterfaces();
	for(var i in nifs) {
		var adapters = nifs[i];

		for(var j in adapters) {
			var cfg = adapters[j];
			if (cfg.family != 'IPv4') {
				continue;
			}
			if (! /^(0|127|169)/.test(cfg.address)) {
				return cfg.address;
			}
		}
	}
}


console.log(getLocalIP());