// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/OverviewMap/setting/BaseLayerConfig.html":'\x3cdiv class\x3d"baselayer-config"\x3e\r\n  \x3ctable class\x3d"baselayer-table" cellspacing\x3d"0"\x3e\r\n    \x3ctbody\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"label-column" nowrap\x3d"nowrap"\x3e\r\n          \x3clabel for\x3d"baseLayerType"\x3e${nls.baseLayerType}\x3c/label\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"input-column"\x3e\r\n          \x3cselect data-dojo-attach-point\x3d"baseLayerType" data-dojo-type\x3d"dijit/form/Select" id\x3d"baseLayerType"\x3e\r\n            \x3coption value\x3d"${TYPE.BASE_MAP}"\x3e${nls.BaseMap}\x3c/option\x3e\r\n\r\n            \x3coption value\x3d"${TYPE.ARCGIS_TILED_MAP}"\x3e${nls.tiledMapService}\x3c/option\x3e\r\n            \x3coption value\x3d"${TYPE.ARCGIS_DYNAMIC_MAP_SERVICE}"\x3e${nls.dynamicMapService}\x3c/option\x3e\r\n            \x3coption value\x3d"${TYPE.ARCGIS_IMAGE_SERVICE}"\x3e${nls.imageService}\x3c/option\x3e\r\n\r\n            \x3coption value\x3d"${TYPE.OSM}"\x3e${nls.OSM}\x3c/option\x3e\r\n            \x3c!--\x3coption id\x3d"WebTiled" value\x3d"WebTiled"\x3e${nls.WebTiled}\x3c/option\x3e--\x3e\r\n            \x3coption data-dojo-attach-point\x3d"bingAerialOption" value\x3d"${TYPE.BING_AERIAL}"\x3e${nls.bingAerial}\x3c/option\x3e\r\n            \x3coption data-dojo-attach-point\x3d"bingHybridOption" value\x3d"${TYPE.BING_HYBRID}"\x3e${nls.bingHybrid}\x3c/option\x3e\r\n            \x3coption data-dojo-attach-point\x3d"bingRoadOption" value\x3d"${TYPE.BING_ROAD}"\x3e${nls.bingRoad}\x3c/option\x3e\r\n          \x3c/select\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"input-column" width\x3d"100%"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"baseLayerContainer" class\x3d"hide"\x3e\r\n            \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" placeholder\x3d"${nls.layerPlaceholder}" data-dojo-attach-point\x3d"tiledMapServiceUrlInput"\r\n              required\x3d"true" data-dojo-type\x3d"jimu/dijit/URLInput" style\x3d"width:100%;padding:0"/\x3e\r\n\r\n            \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" placeholder\x3d"${nls.layerPlaceholder}" data-dojo-attach-point\x3d"dynamicMapServiceUrlInput"\r\n              required\x3d"true" data-dojo-type\x3d"jimu/dijit/URLInput" style\x3d"width:100%;padding:0"/\x3e\r\n\r\n            \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" placeholder\x3d"${nls.layerPlaceholder}" data-dojo-attach-point\x3d"imageServiceUrlInput"\r\n              required\x3d"true" data-dojo-type\x3d"jimu/dijit/URLInput" style\x3d"width:100%;padding:0"/\x3e\r\n          \x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3c!--\r\n      \x3ctr data-dojo-attach-point\x3d"tileLayerContainer" class\x3d"hide"\x3e\r\n        \x3ctd class\x3d"label-column"\x3e\x3c/td\x3e\r\n        \x3ctd class\x3d"input-column"\x3e\x3c/td\x3e\r\n        \x3ctd class\x3d"input-column"\x3e\r\n          \x3clabel for\x3d"tileLayerUrl"\x3e${nls.tileLayerUrl}\x3c/label\x3e\r\n          \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" data-dojo-attach-point\x3d"tileLayerUrl" id\x3d"tileLayerUrl" /\x3e\r\n          \x3clabel for\x3d"tile"\x3e${nls.tile}\x3c/label\x3e\r\n          \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" data-dojo-attach-point\x3d"tile" id\x3d"tile" /\x3e\r\n          \x3clabel for\x3d"credits"\x3e${nls.credits}\x3c/label\x3e\r\n          \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" data-dojo-attach-point\x3d"credits" id\x3d"credits" /\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"subdomainContainer" class\x3d"hide"\x3e\r\n            \x3clabel for\x3d"subdomain"\x3e${nls.subdomain}\x3c/label\x3e\r\n            \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" data-dojo-attach-point\x3d"subdomain" id\x3d"subdomain" /\x3e\r\n          \x3c/div\x3e\r\n          \x3clabel for\x3d"extent"\x3e${nls.extent}\x3c/label\x3e\r\n          \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" data-dojo-attach-point\x3d"extent" id\x3d"extent" /\x3e\r\n          \x3clabel for\x3d"tileInfo"\x3e${nls.tileInfo}\x3c/label\x3e\r\n          \x3cinput class\x3d"jimu-input" type\x3d"text" value\x3d"" data-dojo-attach-point\x3d"tileInfo" id\x3d"tileInfo" /\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      --\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"label-column"\x3e\x3c/td\x3e\r\n        \x3ctd class\x3d"input-column"\x3e\x3c/td\x3e\r\n        \x3ctd class\x3d"input-column"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"errorNode" class\x3d"error-node"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/on dojo/_base/html dojo/_base/array dojo/Deferred dojo/text!./BaseLayerConfig.html ../utils jimu/utils jimu/dijit/LoadingShelter dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin".split(" "),function(k,d,e,c,g,l,m,f,h,n,p,q,r){return k([p,q,r],{templateString:m,nls:null,TYPE:f.TYPE,postCreate:function(){this.shelter=new n({hidden:!0});this.shelter.placeAt(this.domNode);this.inherited(arguments)},startup:function(){this._toggleVELayerByKey();
this._setBaseLayerStyle();this.own(e(this.baseLayerType,"change",d.hitch(this,function(a){this._setBaseLayerStyle(a)})));this.initVerification();this.inherited(arguments)},initVerification:function(){this.own(e(this.baseLayerType,"change",d.hitch(this,function(){this._showErrMsg(null)})));this.own(e(this.baseLayerType,"blur",d.hitch(this,function(){this._showErrMsg(null)})));g.forEach([this.tiledMapServiceUrlInput,this.dynamicMapServiceUrlInput,this.imageServiceUrlInput],d.hitch(this,function(a){this.own(e(a,
"change",d.hitch(this,function(){this.isValid()})));this.own(e(a,"blur",d.hitch(this,function(){this.isValid()})))}))},isValid:function(){this.shelter.show();var a=new l;c.addClass(this.domNode,"validating");f.valid.baseLayerVerification(this.getValues(),this.map).then(d.hitch(this,function(b){c.removeClass(this.domNode,"validating");this._showErrMsg(null);if(b&&!0===b.res)c.removeClass(this.domNode,"error"),this.shelter.hide(),a.resolve(!0);else{c.addClass(this.domNode,"error");var d=this._getType();
if(d===this.TYPE.ARCGIS_TILED_MAP||d===this.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE||d===this.TYPE.ARCGIS_IMAGE_SERVICE)this._setArcGISLayerInputState("Error"),c.removeClass(this.errorNode,"hide"),(b=b.err)&&("wkid"===b?this._showErrMsg(this.nls.errWkid):"layerType"===b?this._showErrMsg(this.nls.errUrl):b.name&&-1!==b.name.indexOf("SyntaxError")?this._showErrMsg(this.nls.errUrl):b.name&&-1!==b.name.indexOf("RequestError")?this._showErrMsg(this.nls.errUrl):!b.name||-1===b.message.indexOf("Invalid URL")&&-1===
b.message.indexOf("Unexpected token \x3c")?b.name&&-1!==b.message.indexOf("Timeout exceeded")?this._showErrMsg(this.nls.errReqTimeout):this._showErrMsg(this.nls.errUrl):this._showErrMsg(this.nls.errUrl));this.shelter.hide();a.resolve(!1)}}),d.hitch(this,function(){c.removeClass(this.domNode,"validating");c.removeClass(this.domNode,"error");this.shelter.hide();a.resolve(!1)}));return a},isUrlEmpty:function(){c.addClass(this.domNode,"validating");var a=this._getType();(a=this._getArcLayerInputsValue(a))&&
""!==a?(c.removeClass(this.domNode,"validating"),this._showErrMsg(null)):this._showErrMsg(this.nls.errUrl)},getValues:function(){var a=this._getType();return{url:this._getArcLayerInputsValue(a),type:a,veLayerInfo:{isKeyInPortal:f.valid.isHaveBingKey()}}},setValues:function(a){if(a.overviewMap.baseLayer){var b=a.overviewMap.baseLayer.type;this._setArcLayerInputsValue(a.overviewMap.baseLayer.url,b);this.baseLayerType.set("value",b)}},_getType:function(){return this.baseLayerType.value},_setArcLayerInputsValue:function(a,
b){(b=this._getArcGISLayerInput(b))&&b.setValue&&b.setValue(h.stripHTML(a||""))},_getArcGISLayerInput:function(a){switch(a){case this.TYPE.ARCGIS_TILED_MAP:return this.tiledMapServiceUrlInput;case this.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE:return this.dynamicMapServiceUrlInput;case this.TYPE.ARCGIS_IMAGE_SERVICE:return this.imageServiceUrlInput}},_setArcGISLayerInputState:function(a){var b=this._getType();(b=this._getArcGISLayerInput(b))&&b.set("state",a)},_getArcLayerInputsValue:function(a){var b;(a=this._getArcGISLayerInput(a))&&
a.value&&(b=a.value,""!==b&&!1===/^\/\//.test(b)&&!1===/(^(.+):\/\/)/.test(b)&&(b="http://"+b));return h.stripHTML(b||"")},_showErrMsg:function(a){a?(this._setArcGISLayerInputState("Error"),c.removeClass(this.errorNode,"hide")):(this._setArcGISLayerInputState(""),c.addClass(this.errorNode,"hide"),this.errorNode.innerHTML="");var b=this._getType();(b=this._getArcGISLayerInput(b))&&b.displayMessage&&b.displayMessage(a);this.errorNode.innerHTML=a},_toggleVELayerByKey:function(){f.valid.isHaveBingKey()||
(this.baseLayerType.removeOption(this.TYPE.BING_AERIAL),this.baseLayerType.removeOption(this.TYPE.BING_HYBRID),this.baseLayerType.removeOption(this.TYPE.BING_ROAD))},_setBaseLayerStyle:function(a){var b=a;!a&&this.config.overviewMap.baseLayer&&this.config.overviewMap.baseLayer.type&&(b=this.config.overviewMap.baseLayer.type);c.addClass(this.baseLayerContainer,"hide");c.addClass(this.tiledMapServiceUrlInput.domNode,"hide");c.addClass(this.dynamicMapServiceUrlInput.domNode,"hide");c.addClass(this.imageServiceUrlInput.domNode,
"hide");switch(b){case this.TYPE.ARCGIS_TILED_MAP:c.removeClass(this.baseLayerContainer,"hide");c.removeClass(this.tiledMapServiceUrlInput.domNode,"hide");break;case this.TYPE.ARCGIS_DYNAMIC_MAP_SERVICE:c.removeClass(this.baseLayerContainer,"hide");c.removeClass(this.dynamicMapServiceUrlInput.domNode,"hide");break;case this.TYPE.ARCGIS_IMAGE_SERVICE:c.removeClass(this.baseLayerContainer,"hide"),c.removeClass(this.imageServiceUrlInput.domNode,"hide")}},_onTileLayerUrlChange:function(a){-1<this.tileLayerUrl.value.toLowerCase().indexOf("{subdomain}")?
c.removeClass(this.subdomainContainer,"hide"):(c.addClass(this.subdomainContainer,"hide"),a&&(this.subdomain.value=""))},_getSubDomains:function(){this._onTileLayerUrlChange(!0);var a=null;this.subdomain.value&&0<this.subdomain.value.length&&(a=this.subdomain.value.split(","),a=g.map(a,function(a){return d.trim(a)}));return a},_getTileInfo:function(){var a=this.tileInfo.value;f.valid.tileInfoStr(a);return a}})});