// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/Deferred esri/request jimu/portalUtils jimu/dijit/Message dijit/_WidgetBase".split(" "),function(f,d,g,h,m,k,l){return f([l],{_initialLoad:!0,postCreate:function(){},locateAddress:function(e){var a=new g;if(this.canGeocode){var c={};c={f:"json",location:JSON.stringify(e),distance:100,outSR:JSON.stringify(e.spatialReference),forStorage:!0};this.userToken&&(c.token=this.userToken);h({url:this.config.geocoderSettings.url+"/reverseGeocode",content:c,callbackParamName:"callback"}).then(d.hitch(this,
function(b){this._initialLoad=!1;b&&b.address&&(b=b.address);a&&a.resolve(b)}),d.hitch(this,function(){this._initialLoad&&(this._initialLoad=!1,new k({message:this.nls.unableToUseLocator}));a.resolve({})}))}else a.resolve({});return a.promise}})});