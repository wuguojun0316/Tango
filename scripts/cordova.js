cordova.define("com.laoxc.cordova.amap.AMap", function(require, exports, module) 
{ 
	var exec = require('cordova/exec');

	exports.exec = function (action, args, success, error)
	{
	   exec(success, error, "AMap", action, args);
	};

	exports.cargoLocation = function (shipmentLat, shipmentLng, unloadLat, unloadLng, pointData, successCallback, errorCallback) 
	{
	   successCallback = successCallback || function () { };
	   errorCallback = errorCallback || function () { };
	   exports.exec('CargoLocation', [shipmentLat, shipmentLng, unloadLat, unloadLng, pointData], successCallback, errorCallback);
	};
	exports.offlineMap = function ( successCallback, errorCallback) 
	{
	   successCallback = successCallback || function () { };
	   errorCallback = errorCallback || function () { };
	   exports.exec('OfflineMap', [], successCallback, errorCallback);
	};
	
});