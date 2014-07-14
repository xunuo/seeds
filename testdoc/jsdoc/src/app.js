/**
 * @name Uploader
 * @class 异步文件上传组件，支持ajax、flash、iframe三种方案
 * @constructor
 * @extends Base
 * @requires UrlsInput
 * @requires IframeType
 * @requires  AjaxType
 * @param {Object} config 组件配置（下面的参数为配置项，配置会写入属性，详细的配置说明请看属性部分）
 * @param {Button} config.button *，Button按钮的实例
 * @param {Queue} config.queue *，Queue队列的实例
 * @param {String|Array} config.type *，采用的上传方案
 * @param {Object} config.serverConfig *，服务器端配置
 * @param {String} config.urlsInputName *，存储文件路径的隐藏域的name名
 * @param {Boolean} config.isAllowUpload 是否允许上传文件
 * @param {Boolean} config.autoUpload 是否自动上传
 * @demo http://abc.com
 * @example
var uploader = new Uploader({
	button:button,
	queue:queue,
	serverConfig:{
		action:'test.php'
	}
})
 */
function Uploader(config) { 

}