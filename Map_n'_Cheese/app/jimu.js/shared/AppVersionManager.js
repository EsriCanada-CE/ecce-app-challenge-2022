// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["./BaseVersionManager","./utils"],function(n,p){function m(){this.versions=[{version:"1.0",description:"The version embedded in portal 10.3 final.",upgrader:function(a){return a},compatible:!0},{version:"1.1",description:"The version embedded in online3.6, and used in developer edition 1.0.",upgrader:function(a){a.widgetOnScreen&&a.widgetOnScreen.panel&&("themes/FoldableTheme/panels/TitlePanel/Panel"===a.widgetOnScreen.panel.uri||"jimu/BaseWidgetPanel"===a.widgetOnScreen.panel.uri)&&(a.widgetOnScreen.panel.uri=
"jimu/PreloadWidgetIconPanel");return a},compatible:!0},{version:"1.2",description:"The version embedded in online3.7.",upgrader:function(a){var c=0;if(a.widgetOnScreen&&a.widgetOnScreen.widgets){var b=!1;for(c=0;c<a.widgetOnScreen.widgets.length;c++)"widgets/Splash/Widget"===a.widgetOnScreen.widgets[c].uri&&(b=!0);b||a.widgetOnScreen.widgets.push({uri:"widgets/Splash/Widget",visible:!1,positionRelativeTo:"browser",version:"1.2"});b=!1;for(c=0;c<a.widgetOnScreen.widgets.length;c++)"widgets/TimeSlider/Widget"===
a.widgetOnScreen.widgets[c].uri&&(b=!0);b||a.widgetOnScreen.widgets.push({uri:"widgets/TimeSlider/Widget",visible:!1,position:{bottom:55,left:7},version:"1.2"});b=!1;for(c=0;c<a.widgetOnScreen.widgets.length;c++)"widgets/Swipe/Widget"===a.widgetOnScreen.widgets[c].uri&&(b=!0);b||a.widgetOnScreen.widgets.push({uri:"widgets/Swipe/Widget",visible:!1,position:{top:145,left:7},version:"1.2"})}return a},compatible:!0},{version:"1.3",description:"The version embedded in online3.8 \x26 online3.9.",upgrader:function(a){(function(c){p.visitElement(c,
function(e){e.positionRelativeTo&&(e.position?e.position.relativeTo=e.positionRelativeTo:e.position={relativeTo:e.positionRelativeTo},e.panel&&(e.panel.position?e.panel.position.relativeTo=e.panel.positionRelativeTo:e.panel.position={relativeTo:e.panel.positionRelativeTo}))});var b=c.widgetOnScreen;b&&b.panel&&b.panel.positionRelativeTo&&(b.panel.position?b.panel.position.relativeTo=b.panel.positionRelativeTo:b.panel.position={relativeTo:b.panel.positionRelativeTo});(b=c.widgetPool)&&b.panel&&b.panel.positionRelativeTo&&
(b.panel.position?b.panel.position.relativeTo=b.panel.positionRelativeTo:b.panel.position={relativeTo:b.panel.positionRelativeTo})})(a);a.widgetOnScreen&&a.widgetOnScreen.panel&&"jimu/PreloadWidgetIconPanel"===a.widgetOnScreen.panel.uri&&(a.widgetOnScreen.panel.uri="jimu/OnScreenWidgetPanel");(function(c){if(c.widgetOnScreen&&c.widgetOnScreen.widgets&&c.theme&&"FoldableTheme"===c.theme.name){var b=null,e=null;if(b=c.widgetOnScreen.widgets[4])void 0!==b.position.top?(b={position:{left:205,top:45}},
e={position:{left:255,top:45}}):(b={position:{left:205,bottom:55}},e={position:{left:255,bottom:55}}),c.widgetOnScreen.widgets.splice(7,0,b,e)}})(a);(function(){var c=0,b=0,e=!1;for(c=0;c<a.widgetOnScreen.widgets.length;c++)if("widgets/Geocoder/Widget"===a.widgetOnScreen.widgets[c].uri){e=!0;break}var d=!1;for(b=0;b<a.widgetOnScreen.widgets.length;b++)if("widgets/Search/Widget"===a.widgetOnScreen.widgets[b].uri){d=!0;break}!d&&e&&(c=a.widgetOnScreen.widgets[c],c.uri="widgets/Search/Widget",c.name=
"Search")})(a);(function(c){var b=0;for(b=c.widgetOnScreen.widgets.length-1;0<=b;b--){var e=c.widgetOnScreen.widgets[b];if("widgets/Swipe/Widget"===e.uri&&!e.closeable&&(c.widgetOnScreen.widgets.splice(b,1),!1!==e.visible)){e.closeable=!0;var d;a:{for(d=d=0;d<c.widgetOnScreen.widgets.length;d++)if(!c.widgetOnScreen.widgets[d].uri)break a;d=-1}0<=d&&(e.position=c.widgetOnScreen.widgets[d].position,c.widgetOnScreen.widgets[d]=e)}"widgets/TimeSlider/Widget"===e.uri&&(!1===e.visible?c.widgetOnScreen.widgets.splice(b,
1):e.closeable=!0)}})(a);a.widgetOnScreen.widgets.push({uri:"widgets/ZoomSlider/Widget",position:{top:5,left:7},version:"1.3"});a.loadingPage||(a.loadingPage={backgroundColor:"#508dca",backgroundImage:{visible:!1},loadingGif:{visible:!0,uri:"configs/loading/images/predefined_loading_1.gif",width:58,height:58}});return a},compatible:!0},{version:"1.4",description:"The version embedded in online3.10.",upgrader:function(a){if(a.theme){var c=a.theme.name;if(("FoldableTheme"===c||"JewelryBoxTheme"===c)&&
a.widgetOnScreen){var b=a.widgetOnScreen.widgets;if(b&&0<b.length){c="themes/"+c+"/widgets/HeaderController/Widget";for(var e=null,d=0;d<b.length;d++)(e=b[d])&&e.uri===c&&e.position&&310===e.position.paddingRight&&(e.position.paddingRight=275)}}}return a},compatible:!0},{version:"2.0beta",description:"The version for Developer Edition beta 2.0.",upgrader:function(a){a.keepAppState=!0;return a},compatible:!0},{version:"2.0",description:"The version for Online 4.1.",upgrader:function(a){return a},compatible:!0},
{version:"2.0.1",description:"The version for Developer Edition 2.0.",upgrader:function(a){return a},compatible:!0},{version:"2.1",description:"The version for Online 4.2.",upgrader:function(a){return a},compatible:!0},{version:"2.2",description:"The version for Online 4.3.",upgrader:function(a){return a},compatible:!0},{version:"2.3",description:"The version for Online 4.4.",upgrader:function(a){function c(d,f){if(!d||!f)return!1;for(var g in f)if(f.hasOwnProperty(g))if("object"===typeof f[g]){if(!c(d[g],
f[g]))return!1}else if(d[g]!==f[g])return!1;return!0}function b(d){function f(){var h=c(d[3],{uri:"widgets/MyLocation/Widget",position:{left:15,top:120}}),k=c(d[12],{position:{top:10,right:195}});return h&&k}function g(){var h=c(d[3],{uri:"widgets/MyLocation/Widget",position:{left:15,bottom:45}}),k=c(d[12],{position:{left:15,top:233}});return h&&k}function l(){var h=c(d[3],{uri:"widgets/MyLocation/Widget",position:{left:15,top:120}}),k=c(d[12],{position:{right:15,top:195}});return h&&k}(function(){var h=
c(d[3],{uri:"widgets/MyLocation/Widget",position:{left:15,top:120}}),k=c(d[12],{position:{left:240,top:53}});return h&&k})()?d.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{left:15,top:159},version:"2.3"}):f()?d.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{left:15,top:159},version:"2.3"}):g()?d.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{left:15,bottom:195},version:"2.3"}):l()&&d.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{left:15,
top:159},version:"2.3"})}function e(d){function f(){var l=c(d[9],{uri:"widgets/MyLocation/Widget",position:{left:7,top:110}}),h=c(d[2],{uri:"widgets/Search/Widget",position:{left:55,top:5}}),k=c(d[4],{position:{left:7,bottom:70}});return l&&h&&k}function g(){var l=c(d[9],{uri:"widgets/MyLocation/Widget",position:{left:7,top:110}}),h=c(d[2],{uri:"widgets/Search/Widget",position:{right:2,top:2,relativeTo:"browser"}}),k=c(d[4],{position:{left:7,bottom:70}});return l&&h&&k}(function(){var l=c(d[9],{uri:"widgets/MyLocation/Widget",
position:{left:7,top:110}}),h=c(d[2],{uri:"widgets/Search/Widget",position:{left:55,top:5}}),k=c(d[4],{position:{left:55,top:45}});return l&&h&&k}()||f()||g())&&d.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{top:148,left:7},version:"2.3"})}(function(d,f,g){d=d.theme&&d.theme.name;if("FoldableTheme"===d)if(c(f[11],{uri:"widgets/MyLocation/Widget",position:{left:7,top:110}}))f.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{top:150,left:7},version:"2.3"});else if(c(f[11],
{uri:"widgets/MyLocation/Widget",position:{left:12,bottom:164}}))f.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{left:12,bottom:203},version:"2.3"}),g&&g.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{right:12,top:211},version:"2.3"});else{if(c(f[11],{uri:"widgets/MyLocation/Widget",position:{left:164,bottom:14}})){f.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{left:203,bottom:14,height:30},version:"2.3"});for(d=0;d<f.length;d++){var l=f[d];c(l,{uri:"widgets/Scalebar/Widget",
position:{left:220,bottom:5}})&&(l.position.left=288);c(l,{uri:"widgets/Coordinate/Widget",position:{left:395,bottom:5}})&&(l.position.left=463)}g&&g.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{top:209,left:12},version:"2.3"})}}else if("BillboardTheme"===d)b(f);else if("BoxTheme"===d)f.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{left:10,top:131},version:"2.3"});else if("JewelryBoxTheme"===d)e(f);else if("LaunchpadTheme"===d){if(c(f[6],{uri:"widgets/MyLocation/Widget",
position:{left:25,top:215}})||c(f[6],{uri:"widgets/MyLocation/Widget",position:{left:25,top:215}}))f.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{top:255,left:25},version:"2.3"}),g&&g.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{right:10,bottom:238},version:"2.3"})}else"PlateauTheme"===d?(c(f[6],{uri:"widgets/MyLocation/Widget",position:{left:7,top:110}})&&f.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{top:149,left:7},version:2.3}),c(f[6],{uri:"widgets/MyLocation/Widget",
position:{left:12,bottom:164}})&&f.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{left:12,bottom:201},version:2.3})):"TabTheme"===d&&c(f[11],{uri:"widgets/MyLocation/Widget",position:{left:7,top:110}})&&f.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{top:149,left:7},version:"2.3"})})(a,a.widgetOnScreen.widgets,a.mobileLayout&&a.mobileLayout.widgetOnScreen&&a.mobileLayout.widgetOnScreen.widgets);return a},compatible:!0},{version:"2.4",description:"The version for Online 5.1.",
upgrader:function(a){return a},compatible:!0},{version:"2.5",description:"The version for Online 5.2.",upgrader:function(a){function c(b,e){if(!b||!e)return!1;for(var d in e)if(e.hasOwnProperty(d))if("object"===typeof e[d]){if(!c(b[d],e[d]))return!1}else if(b[d]!==e[d])return!1;return!0}(function(b,e){b=b.theme&&b.theme.name;if("BillboardTheme"===b){b=c(e[8],{position:{left:60,top:53}});var d=c(e[8],{position:{left:15,top:53}});b||d?e.push({uri:"widgets/FullScreen/Widget",visible:!1,position:{right:8,
top:8},version:"2.5"}):e.push({uri:"widgets/FullScreen/Widget",visible:!1,position:{right:8,bottom:55},version:"2.5"})}else if("BoxTheme"===b){a:{b=0;for(d=e.length;b<d;b++){var f=e[b];if(f&&f.uri&&"themes/BoxTheme/widgets/BoxController/Widget"===f.uri){b=f;break a}}b=null}c(b,{position:{right:0,bottom:0}})?e.push({uri:"widgets/FullScreen/Widget",visible:!1,position:{right:8,top:8},version:"2.5"}):e.push({uri:"widgets/FullScreen/Widget",visible:!1,position:{right:8,bottom:8},version:"2.5"})}else"DartTheme"===
b?e.push({uri:"widgets/FullScreen/Widget",visible:!1,position:{right:8,top:8},version:"2.5"}):"FoldableTheme"===b?e.push({uri:"widgets/FullScreen/Widget",visible:!1,position:{right:8,top:8},version:"2.5"}):"DashboardTheme"===b?e.push({uri:"widgets/FullScreen/Widget",visible:!1,position:{right:8,top:8},version:"2.5"}):"JewelryBoxTheme"===b?e.push({uri:"widgets/FullScreen/Widget",visible:!1,position:{right:8,top:8},version:"2.5"}):"LaunchpadTheme"===b?e.push({uri:"widgets/FullScreen/Widget",visible:!1,
position:{right:70,top:20},version:"2.5"}):"PlateauTheme"===b?e.push({uri:"widgets/FullScreen/Widget",visible:!1,position:{right:8,top:8},version:"2.5"}):"TabTheme"===b&&(c(e[7],{position:{left:45,top:45}})?e.push({uri:"widgets/FullScreen/Widget",visible:!1,position:{right:8,top:8},version:"2.5"}):e.push({uri:"widgets/FullScreen/Widget",visible:!1,position:{right:8,bottom:55},version:"2.5"}))})(a,a.widgetOnScreen.widgets);return a},compatible:!0},{version:"2.6",description:"The version for Online 5.3.",
upgrader:function(a){return a},compatible:!0},{version:"2.7",description:"The version for Online 5.4.",upgrader:function(a){return a},compatible:!0},{version:"2.8",description:"The version for Online 6.1.",upgrader:function(a){function c(b){var e=[];if("object"===typeof b)for(var d in b){var f=b[d];"FeatureStatistics"===f.type&&e.push(f)}return e}(function(b){(b=b.dataSource&&b.dataSource.dataSources)&&(b=c(b))&&b.length&&b.forEach(function(e){(e=e.dataSchema&&e.dataSchema.statistics)&&e.length&&
e.forEach(function(d){if(d&&"count"===d.statisticType&&"count"===d.outStatisticFieldName)d.outStatisticFieldName="STAT_COUNT";else{var f=(f=d.outStatisticFieldName)&&f.toUpperCase();d.outStatisticFieldName=f}})})})(a);return a},compatible:!0},{version:"2.9",description:"The version for Online 6.2.",upgrader:function(a){return a},compatible:!0},{version:"2.10",description:"The version for Online 6.3.",upgrader:function(a){return a},compatible:!0},{version:"2.11",description:"The version for Online 6.4.",
upgrader:function(a){return a},compatible:!0},{version:"2.12",description:"The version for Online 7.1",upgrader:function(a){return a},compatible:!0},{version:"2.13",description:"The version for Online 7.2",upgrader:function(a){if(a.theme&&"PlateauTheme"===a.theme.name&&a.widgetOnScreen&&a.widgetOnScreen.widgets)for(var c=a.widgetOnScreen.widgets,b=0;b<c.length;b++)if("widgets/AttributeTable/Widget"===c[b].uri&&c[b].position){c[b].position.relativeTo="browser";break}return a},compatible:!0},{version:"2.14",
description:"The version for Online 7.3",upgrader:function(a){return a},compatible:!0},{version:"2.15",description:"The version for Online 7.4",upgrader:function(a){return a},compatible:!0},{version:"2.16",description:"The version for Online 8.1",upgrader:function(a){return a},compatible:!0},{version:"2.17",description:"The version for Online 8.2",upgrader:function(a){return a},compatible:!0},{version:"2.18",description:"The version for Online 8.3",upgrader:function(a){return a},compatible:!0},{version:"2.19",
description:"The version for Online 8.4",upgrader:function(a){return a},compatible:!0},{version:"2.20",description:"The version for Online 9.1",upgrader:function(a){return a},compatible:!0},{version:"2.21",description:"The version for Online 9.2",upgrader:function(a){return a},compatible:!0},{version:"2.22",description:"The version for Online 9.3",upgrader:function(a){return a},compatible:!0},{version:"2.23",description:"The version for Online 9.4",upgrader:function(a){return a},compatible:!0}];this.isCompatible=
function(a,c){a=this.getVersionIndex(a);c=this.getVersionIndex(c);for(a+=1;a<=c;a++)if(!1===this.versions[a].compatible)return!1;return!0}}m.prototype=new n;return m.prototype.constructor=m});