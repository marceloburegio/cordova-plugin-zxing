// Constructor
function ZXingPlugin() {};

// The function that passes work along to native shells
ZXingPlugin.prototype.scan = function(params, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'ZXingPlugin', 'scan', [params]);
};
module.exports = new ZXingPlugin;