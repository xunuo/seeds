// 托盘
(function(){
	var isShowWindow = true;

    var win = gui.Window.get();

	// 创建托盘
	var tray = new gui.Tray({
		title: '天马',
		icon: 'img/app.png'
	});

	// 初始化菜单
	var menu = new gui.Menu();

    menu.append(new gui.MenuItem({
        click : function(){
            console.log('hello');
        },
        label: '选择目录',
        tooltip : '选择你的天马安装目录'
    }));

	menu.append(new gui.MenuItem({
		label: '启动'
	}));

    menu.append(new gui.MenuItem({
        label: '停止'
    }));
    menu.append(new gui.MenuItem({
        type: 'separator'
    }));

    menu.append(new gui.MenuItem({
        label: '关闭',
        click : function(){
            win.close(true);
        }
    }));

    tray.menu = menu;

	tray.on('click',
		function(o)
		{
            console.log(o);
            var win = gui.Window.get();
            win.show();
		}
	);

})();