var fs = require('fs');

var tianmaConfigUrl = '', // config.js 路径

	tianmaConfigDir = '', // 本地tianma目录

	deployDir = ''; //本地静态部署文件目录

var reWriteContent = "require('tianma')"
	    + ".play('http://tianma.alif2e.com/conf/icbu-standard.js', {"
        + "root: '{deployDir}'"
    + "});";

// 获取tianma本地目录
$('#tianmaSite').on('change', function (e) {
	tianmaConfigUrl = this.value;

	tianmaConfigDir = tianmaConfigUrl.replace('/config.js', '');

	console.log('tianmaConfigUrl: ' + tianmaConfigUrl);
	console.log('tianmaConfigDir: ' + tianmaConfigDir);
});

// 获取本地部署目录
$('#deployDir').on('change', function (e) {
	deployDir = this.value;
	console.log('selected dir: ' + deployDir);

	reWriteContent = reWriteContent.replace('{deployDir}', deployDir);

	// 重写config.js中本地静态部署目录
	fs.writeFile(tianmaConfigUrl, reWriteContent, function (err, data) {
		if (err) throw err;
		console.log("It's saved!");
	});
});

// start tianma
$('#startTianma').click(function(){

});

// restart tianma
$('#restartTianma').click(function(){
	
});

