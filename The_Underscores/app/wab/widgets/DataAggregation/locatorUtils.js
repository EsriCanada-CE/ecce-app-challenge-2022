// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/Deferred dojo/when dojo/promise/all jimu/portalUtils esri/request".split(" "),function(e,f,h,k,l,m){return{map:null,layerInfosObj:null,appConfig:null,_esriLocatorRegExp:/geocode(.){0,3}\.arcgis.com\/arcgis\/rest\/services\/World\/GeocodeServer/g,setMap:function(a){this.map=a},setAppConfig:function(a){this.appConfig=a},setDefaultXYFields:function(a){this.defaultXYFields=a},getConfigInfo:function(a){return a&&a.sources&&0<a.sources.length?a:h(this._getSoucesFromPortalAndWebmap()).then(e.hitch(this,
function(a){return{allPlaceholder:"",showInfoWindowOnSelect:!0,sources:a}}))},_getSoucesFromPortalAndWebmap:function(){var a=[];return l.getPortalSelfInfo(this.appConfig.portalUrl).then(e.hitch(this,function(c){if((c=c.helperServices&&c.helperServices.geocode)&&0<c.length)for(var d=0,f=c.length;d<f;d++){var g=c[d];g&&a.push(this._processSingleLine(g))}return k(a).then(e.hitch(this,function(a){for(var c=[],d=0;d<a.length;d++){var b=a[d];b&&(b&&"query"===b.type||(b={name:b.name||this._getGeocodeName(b.url),
url:b.url,singleLineFieldName:b.singleLineFieldName,placeholder:b.placeholder||b.name||this._getGeocodeName(b.url),maxResults:6,searchInCurrentMapExtent:!1,type:"locator"},b.enableLocalSearch=this._isEsriLocator(b.url),b.localSearchMinScale=3E5,b.localSearchDistance=5E4),c.push(b))}return c}))}))},_isEsriLocator:function(a){this._esriLocatorRegExp.lastIndex=0;return this._esriLocatorRegExp.test(a)},_processSingleLine:function(a){if(a.singleLineFieldName)return a;if(this._isEsriLocator(a.url))return a.singleLineFieldName=
"SingleLine",a;var c=new f;m({url:a.url,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then(e.hitch(this,function(d){d.singleLineAddressField&&d.singleLineAddressField.name?(a.singleLineFieldName=d.singleLineAddressField.name,c.resolve(a)):(console.warn(a.url+"has no singleLineFieldName"),c.resolve(null))}),e.hitch(this,function(a){console.error(a);c.resolve(null)}));return c.promise},_getGeocodeName:function(a){if("string"!==typeof a)return"geocoder";a=a.split("/");return a[a.length-
2]||"geocoder"},getGeocoderName:function(a){return this._getGeocodeName(a)},hasAppSearchInfo:function(a){return a.itemInfo&&a.itemInfo.itemData&&a.itemInfo.itemData.applicationProperties&&a.itemInfo.itemData.applicationProperties.viewing&&a.itemInfo.itemData.applicationProperties.viewing.search}}});