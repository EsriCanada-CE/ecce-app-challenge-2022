// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Visibility/templates/VisibilityControl.html":'\x3cdiv\x3e\r\n\x3cdiv class\x3d"" data-dojo-attach-point\x3d"visibiltyWidget"\x3e\r\n    \x3cdiv class\x3d"esriCTFullWidth esriCTNewHeader"\x3e\r\n\x3c!-- Panel Title --\x3e\r\n\x3cdiv class\x3d"esriCTMainTitleDiv esriCTEllipsis" title\x3d"${nls.mainPageTitle}"\x3e\r\n  ${nls.mainPageTitle}\r\n  \x3c/div\x3e\r\n  \x3c!-- Settings Icon --\x3e\r\n  \x3cdiv class\x3d"esriCTRightSideButton"\x3e\r\n    \x3cdiv class\x3d"esriCTSettingsIcon esriCTPointer" title\x3d"${nls.settingsTitle}" tabindex\x3d"0" role\x3d\'button\'\r\n    aria-label\x3d\'${nls.settingsTitle}\' data-dojo-attach-point\x3d"settingsIcon"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTSaveToLayerIcon esriCTPointer esriCTHidden" title\x3d"${nls.resultsTitle}" tabindex\x3d"0"  role\x3d\'button\' aria-label\x3d\'${nls.resultsTitle}\' data-dojo-attach-point\x3d"saveToLayerIcon"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3clabel data-dojo-attach-point\x3d"errorText" style\x3d"display: none"\x3e\x3c/label\x3e\r\n  \x3cdiv class\x3d"controls" data-dojo-attach-point\x3d"controls"\x3e\r\n    \x3cdiv class\x3d"controlGroup"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"observerCoordsContainer"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"controlGroup"\x3e\r\n      \x3clabel class\x3d"titleLabel" data-dojo-attach-point\x3d"FOVLabel"\x3e${nls.fieldOfView}\x3c/label\x3e\r\n      \x3cdiv class\x3d"center" data-dojo-attach-point\x3d"FOVGroup"\x3e\r\n        \x3cinput type\x3d"text" value\x3d"360" class\x3d"fov" data-displayInput\x3d"true" data-cursor\x3d"true" disabled\x3d"true"\r\n          data-dojo-attach-point\x3d"FOVInput" aria-label\x3d"${nls.fieldOfView}" /\x3e\r\n        \x3cp class\x3d"cursortooltip" data-dojo-attach-point\x3d"tooltip" hidden\x3d\'true\'\x3e\x3c/p\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"controlGroup"\x3e\r\n      \x3cinput class\x3d"switch-toggle" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"angleUnits" checked\x3d"false" aria-label\x3d"${nls.useMilsText}"/\x3e\r\n      \x3clabel class\x3d"titleLabel"\x3e${nls.useMilsText}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"controlGroup"\x3e\r\n      \x3clabel class\x3d"titleLabel"\x3e${nls.observerHeight}\x3c/label\x3e\r\n      \x3cdiv\x3e\r\n        \x3cinput class\x3d"inputNumberTextbox" data-dojo-type\x3d\'dijit/form/NumberTextBox\' required\x3d"true" value\x3d"2"\r\n          data-dojo-props\x3d\'constraints: {min: 0}\' data-dojo-attach-point\x3d"observerHeight" aria-label\x3d"${nls.observerHeight}"\x3e\r\n        \x3cselect style\x3d"width: 100px" class\x3d"controlSpace noResize" data-dojo-type\x3d"jimu/dijit/formSelect"\r\n          data-dojo-attach-point\x3d"observerHeightDD" aria-label\x3d"${nls.observerHeight}"\x3e\r\n        \x3c/select\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"controlGroup"\x3e\r\n      \x3clabel class\x3d"titleLabel"\x3e${nls.minObsDistance}\x3c/label\x3e\r\n      \x3cdiv\x3e\r\n        \x3cinput class\x3d"inputNumberTextbox" data-dojo-type\x3d\'dijit/form/NumberTextBox\' required\x3d"true" value\x3d"3"\r\n          data-dojo-props\x3d\'constraints: {min: 0},intermediateChanges:true\' data-dojo-attach-point\x3d"minObsRange"\r\n          aria-label\x3d"${nls.minObsDistance}"\x3e\r\n        \x3cselect style\x3d"width: 100px" class\x3d"controlSpace noResize" data-dojo-type\x3d"jimu/dijit/formSelect"\r\n          data-dojo-attach-point\x3d"distanceUnitDD" aria-label\x3d"${nls.minObsDistance}"\x3e\r\n        \x3c/select\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"controlGroup"\x3e\r\n      \x3clabel class\x3d"titleLabel"\x3e${nls.maxObsDistance}\x3c/label\x3e\r\n      \x3cdiv\x3e\r\n        \x3cinput class\x3d"inputNumberTextbox" data-dojo-type\x3d\'dijit/form/NumberTextBox\' required\x3d"true" value\x3d"5"\r\n          data-dojo-props\x3d\'constraints: {min: 0}\' data-dojo-attach-point\x3d"maxObsRange" aria-label\x3d"${nls.maxObsDistance}"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"buttonContainer" data-dojo-attach-point\x3d"buttonContainer"\x3e\r\n      \x3cdiv class\x3d"btnContainer HalfWidthLeft"\x3e\r\n        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"btnCreate" tabindex\x3d"0" role\x3d"button" aria-label\x3d"${nls.createBtn}"\x3e${nls.createBtn}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"btnContainer HalfWidthRight"\x3e\r\n        \x3cdiv class\x3d"jimu-btn controlSpace" data-dojo-attach-point\x3d"btnClear" tabindex\x3d"0" role\x3d"button" aria-label\x3d"${nls.clearBtn}"\x3e${nls.clearBtn}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n\x3c/div\x3e\r\n\x3cdiv class\x3d"esriCTHidden" data-dojo-attach-point\x3d"portalPublishContainer"\x3e\x3c/div\x3e\r\n\x3cdiv class\x3d"esriCTHidden" data-dojo-attach-point\x3d"settingsContainer"\x3e\r\n  \x3cdiv\x3e\r\n    \x3cdiv class\x3d"esriCTFullWidth esriCTSettingHeader"\x3e\r\n      \x3cdiv class\x3d"esriCTBackButton" title\x3d"${nls.back}"\x3e\r\n        \x3cdiv class\x3d"esriCTItemLeftArrow" data-dojo-attach-point\x3d"settingsPanelBackButton" tabindex\x3d"0"\r\n          aria-label\x3d"${nls.back}" role\x3d"button"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTTitleDiv esriCTEllipsis" title\x3d"${nls.settingsTitle}"\x3e${nls.settingsTitle}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTMainPageRow"\x3e\r\n      \x3cdiv style\x3d"overflow: hidden;" data-dojo-attach-point\x3d"symbologySettingsNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/kernel dojo/_base/event dojo/Deferred dojo/_base/lang dojo/_base/array dojo/on dojo/number dojo/string dojo/dom-style dojo/mouse dojo/promise/all dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!../templates/VisibilityControl.html jimu/dijit/Message esri/dijit/util/busyIndicator esri/graphic esri/layers/GraphicsLayer esri/tasks/FeatureSet esri/graphicsUtils esri/symbols/SimpleMarkerSymbol esri/renderers/SimpleRenderer esri/Color esri/dijit/analysis/CreateViewshed esri/layers/FeatureLayer esri/geometry/Polygon esri/geometry/geometryEngine ./geometryUtils jimu/dijit/CoordinateControl ./util jimu/utils dojo/keys dijit/focus ./portal-publish dojo/dom-class dojo/dom-construct esri/renderers/UniqueValueRenderer jimu/LayerStructure ../js/symbologySettings esri/tasks/GeometryService dijit/form/NumberTextBox jimu/dijit/CheckBox ./jquery.knob.min".split(" "),
function(D,J,K,A,e,r,g,L,M,v,x,N,O,P,Q,R,B,S,t,E,T,F,U,V,p,W,X,C,u,w,Y,Z,y,n,G,aa,m,H,I,ba,ca,da){return D([O,P,Q],{templateString:R,baseClass:"jimu-widget-visibility-control",FOV:180,LA:180,map:null,_currentOpenPanel:"mainPage",portalPublishObj:null,_renderer:null,Azimuth1:null,Azimuth2:null,graphics:null,_layerList:null,fillStyles:null,lineStyles:null,constructor:function(a){D.safeMixin(this,a);this.nls=a.nls},postCreate:function(){this.openAtStartAysn=!0;this.fillStyles={esriSFSBackwardDiagonal:"backwarddiagonal",
esriSFSCross:"cross",esriSFSDiagonalCross:"diagonalcross",esriSFSForwardDiagonal:"forwarddiagonal",esriSFSHorizontal:"horizontal",esriSFSNull:"none",esriSFSSolid:"solid",esriSFSVertical:"vertical"};this.lineStyles={esriSLSDash:"dash",esriSLSDashDot:"dashdot",esriSLSDashDotDot:"longdashdotdot",esriSLSDot:"dot",esriSLSLongDash:"longdash",esriSLSLongDashDot:"longdashdot",esriSLSNull:"none",esriSLSShortDash:"shortdash",esriSLSShortDashDot:"shortdashdot",esriSLSShortDashDotDot:"shortdashdotdot",esriSLSShortDot:"shortdot",
esriSLSSolid:"solid"};var a=[],b;r.forEach("meters kilometers miles feet yards nauticalMiles".split(" "),e.hitch(this,function(d){b={value:d,label:window.jimuNls.units[d]};a.push(b)}));this.observerHeightDD.addOption(a);this.utils=new Z({appConfig:this.appConfig,nls:this.nls});this.distanceUnitDD.addOption(e.clone(a));this.config.hasOwnProperty("observeHeight")&&this.observerHeight.setValue(this.config.observeHeight);this.config.hasOwnProperty("minimumObservableDistanceValue")&&this.minObsRange.setValue(this.config.minimumObservableDistanceValue);
this.config.hasOwnProperty("maximumObservableDistanceValue")&&this.maxObsRange.setValue(this.config.maximumObservableDistanceValue);this.observerHeightDD.set("value",this.config.defaultObserverHeightUnit);this.distanceUnitDD.set("value",this.config.defaultObservableDistanceUnit);this.angleUnits.setValue(this.config.defaultAngleUnits);if(this.portalUrl){this._initGL();this._createSettings();this._layerList=this._getAllMapLayers();this._ptSym=new U(this.pointSymbol);var c=new V(this._ptSym);this._observerLocation=
new E({id:"observerLocation"});this._observerLocation.spatialReference=this.map.spatialReference;this._observerLocation.setRenderer(c);this.map.addLayer(this._observerLocation);this.distanceUnit=this.distanceUnitDD.get("value");this.observerHeightUnit=this.observerHeightDD.get("value");this.inputControl=new Y({parentWidget:this.parentWidget,label:this.nls.observerLocation,input:!0,showCopyButton:!1,showFormatButton:!0,showDrawPoint:!0,drawButtonLabel:this.nls.addPointToolTip,graphicsLayer:this._observerLocation});
this.inputControl.placeAt(this.observerCoordsContainer);this.inputControl.startup();this._syncEvents();this.minObsRange.invalidMessage=this.nls.invalidMessage;this.minObsRange.rangeMessage=this.nls.minimumRangeMessage;this.maxObsRange.invalidMessage=this.nls.invalidMessage;this.maxObsRange.rangeMessage=this.nls.maximumRangeMessage;this.observerHeight.invalidMessage=this.nls.invalidMessage;this.observerHeight.rangeMessage=this.nls.observerRangeMessage}else this._showPortalURLError(this.nls.portalURLError);
this.resetInputColor();setTimeout(e.hitch(this,function(){this._suppoprtAccessibility()}),100)},startup:function(){this.busyIndicator=S.create({target:this.domNode.parentNode.parentNode.parentNode,backgroundOpacity:0});this.FOVInput.id="fovinput"+this.parentWidget.id;var a=e.hitch(this,function(b,c,d){this.LA=this.angleUnits.checked?b/17.777777777778:b;this.FOV=Math.round(c);this.tooltip.innerHTML=this.angleUnits.checked?$("#"+this.FOVInput.id).val()+" "+this.nls.milsLabel:d+" "+this.nls.degreesLabel});
$("#"+this.FOVInput.id).knob({min:0,max:360,cursor:360,width:160,height:160,draw:function(){a(this.v,this.o.cursor,this.cv);window.isRTL&&this.i.css({"margin-right":"-"+(3*this.w/4+2>>0)+"px","margin-left":"auto"})}})},destroy:function(){this.map.removeLayer(this._observerLocation);this.map.removeLayer(this.graphicsLayer)},_showPortalURLError:function(a){v.set(this.controls,"display","none");v.set(this.buttonContainer,"display","none");this.errorText.innerHTML=a;v.set(this.errorText,"display","")},
_initGL:function(){this.graphicsLayer=new E;this.graphicsLayer.name="Viewshed Layer";this.map.addLayer(this.graphicsLayer)},_syncEvents:function(){this.own(g(this.btnCreate,"click",e.hitch(this,this.createButtonWasClicked)),g(this.btnCreate,"keydown",e.hitch(this,function(a){a.keyCode!==n.ENTER&&a.keyCode!==n.SPACE||this.createButtonWasClicked()})),g(this.btnClear,"click",e.hitch(this,function(){m.add(this.saveToLayerIcon,"esriCTHidden");this.onClearBtnClicked();this._suppoprtAccessibility()})),g(this.btnClear,
"keydown",e.hitch(this,function(a){if(a.keyCode===n.ENTER||a.keyCode===n.SPACE)m.add(this.saveToLayerIcon,"esriCTHidden"),this.onClearBtnClicked(),this._suppoprtAccessibility()})),g(this.minObsRange,"change",e.hitch(this,this.minObsRangeKeyWasPressed)),g(this.FOVInput,"mousemove",e.hitch(this,this.mouseMoveOverFOVInput)),g(this.FOVInput,x.leave,e.hitch(this,this.mouseMoveOutFOVInput)),g(this.FOVGroup,x.leave,e.hitch(this,function(){this.tooltip.hidden=!0})),g(this.FOVGroup,x.enter,e.hitch(this,this.mouseMoveOverFOVGroup)),
g(this.FOVInput,x.enter,e.hitch(this,function(){this.tooltip.hidden=!0})),g(this.FOVInput,"keypress",e.hitch(this,function(a){isNaN(a.key)&&13!==a.charCode&&K.stop(a)})),this.angleUnits.on("change",e.hitch(this,this.angleUnitsDidChange)),this.observerHeightDD.on("change",e.hitch(this,this.distanceUnitDDDidChange)),this.distanceUnitDD.on("change",e.hitch(this,this.distanceUnitDDDidChange)),g(this.inputControl.dt,"DrawComplete",e.hitch(this,function(){this.feedbackDidComplete();G.focus(this.inputControl.coordtext)})),
g(this.inputControl,"get-coordinate-complete",e.hitch(this,this.feedbackDidComplete)),g(this.saveToLayerIcon,"click",e.hitch(this,function(){m.contains(this.saveToLayerIcon,"esriCTHidden")||this._showPanel("publishPage")})),g(this.saveToLayerIcon,"keydown",e.hitch(this,function(a){if(a.keyCode===n.ENTER||a.keyCode===n.SPACE)m.contains(this.saveToLayerIcon,"esriCTHidden")||this._showPanel("publishPage")})),g(this.settingsIcon,"click",e.hitch(this,function(){m.contains(this.settingsIcon,"esriCTHidden")||
this._showPanel("settingsPage")})),g(this.settingsIcon,"keydown",e.hitch(this,function(a){if(a.keyCode===n.ENTER||a.keyCode===n.SPACE)m.contains(this.settingsIcon,"esriCTHidden")||this._showPanel("settingsPage")})),g(this.settingsPanelBackButton,"click",e.hitch(this,function(){m.contains(this.settingsPanelBackButton,"esriCTHidden")||(this._SettingsInstance.onSettingsChanged(),this._showPanel("mainPage"))})),g(this.settingsPanelBackButton,"keydown",e.hitch(this,function(a){a.keyCode!==n.ENTER&&a.keyCode!==
n.SPACE||m.contains(this.settingsPanelBackButton,"esriCTHidden")||(this._SettingsInstance.onSettingsChanged(),this._showPanel("mainPage"))})))},minObsRangeKeyWasPressed:function(){this.minObsRange.isValid()&&(this.maxObsRange.constraints.min=Number(this.minObsRange.value)+.001,this.maxObsRange.set("value",Number(this.minObsRange.value)+1),this.maxObsRange.set("value",this.maxObsRange.value&&this.maxObsRange.value>this.minObsRange.value?this.maxObsRange.value:Number(this.minObsRange.value)+1))},mouseMoveOverFOVGroup:function(){!1===
this.FOVInput.disabled&&(this.mouseMoveOverFOVInput(),this.tooltip.hidden=!1)},mouseMoveOverFOVInput:function(){var a=this.tooltip;!1===this.FOVInput.disabled&&$(document).ready(function(){$(document).mousemove(function(b){v.set(a,{left:b.pageX+10+"px",top:b.pageY+10+"px"})})})},mouseMoveOutFOVInput:function(){this.tooltip.hidden=!1;this.FOVInput.blur()},angleUnitsDidChange:function(){this.angleUnits.checked?($("#"+this.FOVInput.id).trigger("configure",{max:6400,units:"mils",milsValue:6400}),$("#"+
this.FOVInput.id).val(6400).trigger("change")):($("#"+this.FOVInput.id).trigger("configure",{max:360,units:"degrees",milsValue:6400}),$("#"+this.FOVInput.id).val(360).trigger("change"));this.resetInputColor()},distanceUnitDDDidChange:function(){var a="",b={};this.distanceUnit=this.distanceUnitDD.get("value");this.observerHeightUnit=this.observerHeightDD.get("value");if(this.distanceUnit){switch(this.distanceUnit){case "miles":b.max=31;break;case "nauticalMiles":b.max=26.9383;break;case "kilometers":b.max=
50;break;case "yards":b.max=54680;break;case "feet":b.max=164041;break;case "meters":b.max=5E4}a=M.substitute(this.nls.maximumRangeMessage,{units:window.jimuNls.units[this.distanceUnit],limit:L.format(b.max,{places:2,locale:J.locale})});b.min=Number(this.minObsRange.value)+.001;this.maxObsRange.set("constraints",b);this.maxObsRange.set("rangeMessage",a)}},feedbackDidComplete:function(){this.inputControl.deactivateDrawTool();this.map.enableMapNavigation();this.enableFOVDial()},enableFOVDial:function(){this.FOVInput.disabled&&
(this.FOVInput.disabled=!1,$("#"+this.FOVInput.id).trigger("configure",{fgColor:"#00ff66",bgColor:"#f37371",inputColor:"#ccc"}));this.resetInputColor()},_createWedgesUsingBuffers:function(a,b,c,d){b=F.getGeometries(b);d=u.geodesicBuffer(b,[d],"meters",!0);0<c?(c=u.geodesicBuffer(b,[c],"meters",!0),d=u.difference(d[0],c[0])):d=d[0];a.resolve([d,d])},_createWedgesUsingAngles:function(a,b,c,d,k,f){b=b.geometry;var l=[];var h=[];this.Azimuth1=c>d?c-360:c;f=w.getPointsForArc(c,d,b,f);h.push([b.x,b.y]);
r.forEach(f,function(q){h.push([q.x,q.y])});h.push([b.x,b.y]);if(0<k){var z=w.getDestinationPoint(b,c,k);c=w.getPointsForArc(c,d,b,k);l.push([z.x,z.y]);r.forEach(f,function(q){l.push([q.x,q.y])});c.reverse();r.forEach(c,function(q){l.push([q.x,q.y])});l.push([z.x,z.y])}else l=h;c=new C(l);c.setSpatialReference(b.spatialReference);d=new C(h);d.setSpatialReference(b.spatialReference);a.resolve([c,d])},_createWedges:function(a,b,c){var d=new A;this.Azimuth1=parseInt(this.LA-this.FOV/2,10);0>this.Azimuth1&&
(this.Azimuth1+=360);this.Azimuth2=parseInt(this.LA+this.FOV/2,10);360<this.Azimuth2&&(this.Azimuth2-=360);360===this.FOV?(this.Azimuth1=0,this.Azimuth2=360,this._createWedgesUsingBuffers(d,a,b,c)):this._createWedgesUsingAngles(d,a[0],this.Azimuth1,this.Azimuth2,b,c);return d.promise},_getFeatureCollectionLayer:function(a){r.forEach(a,e.hitch(this,function(b,c){b.attributes={};b.attributes.ObjectID=c}));return new X({featureSet:{features:a,geometryType:"esriGeometryPoint"},layerDefinition:{name:"InputLayer",
geometryType:"esriGeometryPoint",objectIdField:"ObjectID",fields:[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"}]}})},_initAnalysisProcess:function(a){this._createWedges(a.InputObserver.features,a.MinimumRadius,a.MaximumRadius).then(e.hitch(this,function(b){var c=[];if(b&&2===b.length){var d=this.appConfig.geometryService;var k=new da(d);d=w.getProjectedGeometry(b[0],this.map.spatialReference,k).then(e.hitch(this,function(f){this._wedgeGeometry=f}));c.push(d);b=w.getProjectedGeometry(b[1],
this.map.spatialReference,k).then(e.hitch(this,function(f){this._fullWedgeGeometry=f}));c.push(b);N(c).then(e.hitch(this,function(){this._createViewShed(a)}))}}))},_createViewShed:function(a){a={portalUrl:this.portalUrl,inputLayer:this._getFeatureCollectionLayer(a.InputObserver.features),maxDistanceUnits:"Meters",maximumDistance:a.MaximumRadius,observerHeightUnits:"Meters",observerHeight:a.ObserverHeight,showSelectAnalysisLayer:!1,targetHeightUnits:"Meters",map:this.map,showChooseExtent:!1,returnFeatureCollection:!0};
a=new W(a);a.startup();a.on("job-result",e.hitch(this,this._onViewShedCreated));a.on("job-status",e.hitch(this,function(b){"esriJobFailed"===b.jobStatus&&this._showJobError(b)}));a.on("job-fail",e.hitch(this,this._showJobError));a._form.validate()?(this.busyIndicator.show(),a._handleSaveBtnClick()):new B({message:this.nls.validationError})},_showJobError:function(a){new B({message:a.message});this.busyIndicator.hide()},_onViewShedCreated:function(a){var b=[];r.forEach(a.value.featureSet.features,
e.hitch(this,function(c){c=new C(c.geometry);c.setSpatialReference(this.map.spatialReference);(c=u.difference(this._wedgeGeometry,c))&&(c=u.difference(this._wedgeGeometry,c));c=new t(c);c.setAttributes({type:1});b.push(c)}));this._showGraphicsOnMap(b)},_drawWedge:function(a,b){for(var c=new A,d=0,k=a.length;d<k;d++){var f=a[d];f&&f.geometry&&(b?f.setAttributes({type:2}):f.setAttributes({type:3}),this.graphicsLayer.add(f))}c.resolve("success");return c.promise},_drawViewshed:function(a){var b=new A;
this.graphics=[];var c=new t(this._wedgeGeometry);c.setAttributes({type:0,regionType:"nonVisible"});for(var d=0,k=a.length;d<k;d++){var f=a[d];if(f&&f.geometry){var l=f.geometry;f.setAttributes({type:1,regionType:"visible"});var h=f;this.graphicsLayer.add(f)}}l&&(this.graphics.push(h),a=u.difference(this._wedgeGeometry,l),c=new t(a),c.setAttributes({type:0,regionType:"nonVisible"}));this.graphics.push(c);this.graphicsLayer.add(c);b.resolve("success");return b.promise},_showGraphicsOnMap:function(a){this._drawWedge([new t(this._fullWedgeGeometry)],
!0);this._drawWedge([new t(this._wedgeGeometry)],!1);this._drawViewshed(a).then(e.hitch(this,function(){this.map.setExtent(F.graphicsExtent(this.graphicsLayer.graphics),!0);m.remove(this.saveToLayerIcon,"esriCTHidden");this.busyIndicator.hide();this._createPortalPublishUI();this._suppoprtAccessibility()}))},createButtonWasClicked:function(){if(this.inputControl.getMapCoordinateDD()&&this.minObsRange.isValid()&&this.maxObsRange.isValid()&&this.observerHeight.isValid()&&0!==parseInt(this.FOVInput.value,
10)&&!isNaN(parseInt(this.FOVInput.value,10))){var a=new t(this.inputControl.getMapCoordinateDD()),b=new T;b.features=[a];a={InputObserver:b,MinimumRadius:this.utils.convertToMeters(this.minObsRange.value,this.distanceUnit),MaximumRadius:this.utils.convertToMeters(this.maxObsRange.value,this.distanceUnit),ObserverHeight:this.utils.convertToMeters(this.observerHeight.value,this.observerHeightUnit)};this._initAnalysisProcess(a)}else new B({message:this.nls.validationError})},onClearBtnClicked:function(){this.angleUnits&&
(this.angleUnits.setValue(this.config.defaultAngleUnits),this.observerHeightDD.set("value",this.config.defaultObserverHeightUnit),this.distanceUnitDD.set("value",this.config.defaultObservableDistanceUnit),this.config.hasOwnProperty("observeHeight")&&this.observerHeight.setValue(this.config.observeHeight),this.config.hasOwnProperty("minimumObservableDistanceValue")&&this.minObsRange.setValue(this.config.minimumObservableDistanceValue),this.config.hasOwnProperty("maximumObservableDistanceValue")&&setTimeout(e.hitch(this,
function(){this.maxObsRange.setValue(this.config.maximumObservableDistanceValue)}),100),this.minObsRangeKeyWasPressed(),this.graphicsLayer.clear(),this.inputControl.clear(),this.FOVInput.disabled=!0,this.angleUnitsDidChange(),$("#"+this.FOVInput.id).trigger("configure",{fgColor:"#ccc",bgColor:"#ccc",inputColor:"#ccc"}),this.tooltip.hidden=!0,this.resetInputColor())},resetInputColor:function(){setTimeout(e.hitch(this,function(){v.set(this.FOVInput,"color","gray")}),100)},_suppoprtAccessibility:function(){"mainPage"===
this._currentOpenPanel&&(y.initFirstFocusNode(this.parentWidget.domNode,this.settingsIcon),y.isAutoFocusFirstNodeWidget(this)&&G.focus(this.settingsIcon),y.initLastFocusNode(this.parentWidget.domNode,this.btnClear));"publishPage"===this._currentOpenPanel&&this.portalPublishObj._setFirstLastFocusNodes();"settingsPage"===this._currentOpenPanel&&(y.initFirstFocusNode(this.parentWidget.domNode,this.settingsPanelBackButton),this._SettingsInstance._setLastFocusNode())},_createPortalPublishUI:function(){this.portalPublishObj=
new aa({config:this.config,appConfig:this.appConfig,graphicsLayer:this.graphicsLayer,graphics:this.graphics,_renderer:this._renderer,map:this.map,nls:this.nls,parentNode:this.parentWidget.domNode,observerHeight:this.observerHeight.value,minObsRange:this.minObsRange.value,maxObsRange:this.maxObsRange.value,distanceUnitDD:this.distanceUnitDD.getOptions(this.distanceUnitDD.value).label,observerHeightDD:this.observerHeightDD.getOptions(this.observerHeightDD.value).label,angleUnits:this.nls.degreesLabel,
centerPoint:this.inputControl.coordtext.value,fovStartAngle:this.Azimuth1,fovEndAngle:this.Azimuth2,_layerList:this._layerList});H.empty(this.portalPublishContainer);this.portalPublishObj.placeAt(this.portalPublishContainer);this.portalPublishObj.startup();this.own(g(this.portalPublishObj,"displayMainPageOnBack",e.hitch(this,function(){this._showPanel("mainPage")})));this._showPanel("publishPage")},_showPanel:function(a){if(this._currentOpenPanel){var b=this._getNodeByName(this._currentOpenPanel);
m.add(b,"esriCTHidden")}b=this._getNodeByName(a);m.remove(b,"esriCTHidden");this._lastOpenPanel=this._currentOpenPanel;this._currentOpenPanel=a;this._suppoprtAccessibility()},_getNodeByName:function(a){switch(a){case "mainPage":var b=this.visibiltyWidget;break;case "publishPage":b=this.portalPublishContainer;break;case "settingsPage":b=this.settingsContainer}return b},_createRendererForPublishLayer:function(a){var b=new p(a.visibleSectionFillColor.color),c=255*(1-a.visibleSectionFillColor.transparency),
d=new p(a.visibleSectionOutlineColor.color),k=255*(1-a.visibleSectionOutlineColor.transparency),f=new p(a.nonVisibleSectionFillColor.color),l=255*(1-a.nonVisibleSectionFillColor.transparency),h=new p(a.nonVisibleSectionOutlineColor.color);this._renderer=new I({type:"uniqueValue",field1:"RegionType",uniqueValueInfos:[{value:1,symbol:{color:[b.r,b.g,b.b,c],outline:{color:[d.r,d.g,d.b,k],width:.75,type:"esriSLS",style:a.visibleSectionOutlineColor.type},type:"esriSFS",style:a.visibleSectionFillColor.type}},
{value:0,symbol:{color:[f.r,f.g,f.b,l],outline:{color:[h.r,h.g,h.b,255*(1-a.nonVisibleSectionOutlineColor.transparency)],width:1,type:"esriSLS",style:a.nonVisibleSectionOutlineColor.type},type:"esriSFS",style:a.nonVisibleSectionFillColor.type}}]});this._renderer.removeValue("others")},_createRendererForGraphicsLayer:function(a){var b=new p(a.visibleSectionFillColor.color),c=255*(1-a.visibleSectionFillColor.transparency),d=new p(a.visibleSectionOutlineColor.color),k=255*(1-a.visibleSectionOutlineColor.transparency),
f=new p(a.nonVisibleSectionFillColor.color),l=255*(1-a.nonVisibleSectionFillColor.transparency),h=new p(a.nonVisibleSectionOutlineColor.color);a=new I({type:"uniqueValue",field1:"type",uniqueValueInfos:[{value:1,symbol:{color:[b.r,b.g,b.b,c],outline:{color:[d.r,d.g,d.b,k],width:.75,type:"esriSLS",style:a.visibleSectionOutlineColor.type},type:"esriSFS",style:a.visibleSectionFillColor.type}},{value:0,symbol:{color:[f.r,f.g,f.b,l],outline:{color:[h.r,h.g,h.b,255*(1-a.nonVisibleSectionOutlineColor.transparency)],
width:1,type:"esriSLS",style:a.nonVisibleSectionOutlineColor.type},type:"esriSFS",style:a.nonVisibleSectionFillColor.type}},{value:2,symbol:{color:[0,0,0,0],outline:{color:[0,0,0,1],width:1,type:"esriSLS",style:"esriSLSDash"},type:"esriSFS",style:"esriSFSSolid"}},{value:3,symbol:{color:[0,0,0,0],outline:{color:[255,0,0,1],width:1,type:"esriSLS",style:"esriSLSSolid"},type:"esriSFS",style:"esriSFSSolid"}}]});a.removeValue("others");this.graphicsLayer.setRenderer(a);this.graphicsLayer.refresh()},_getAllMapLayers:function(){var a=
[];ba.getInstance().traversal(function(b){"undefined"!==typeof b._layerInfo.layerObject.type&&-1===b._layerInfo.layerObject.type.indexOf("tile")&&"esriGeometryPolygon"===b._layerInfo.layerObject.geometryType&&a.push(b._layerInfo.layerObject)});return a},_createSettings:function(){this._SettingsInstance=new ca({nls:this.nls,config:this.config,appConfig:this.appConfig,refDomNode:this.parentWidget.domNode},H.create("div",{},this.symbologySettingsNode));this.own(this._SettingsInstance.on("settingsChanged",
e.hitch(this,function(a){this._createRendererForPublishLayer(a);this._createRendererForGraphicsLayer(a)})));this._SettingsInstance.startup()}})});