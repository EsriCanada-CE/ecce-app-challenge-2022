// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/array dojo/_base/lang dojo/dom-class dojo/dom-geometry dojo/dom-style esri/tasks/query esri/geometry/geometryEngine esri/geometry/Polyline ./CSVUtils jimu/utils".split(" "),function(k,m,n,v,q,C,l,D,B,t){function w(a){return function(b,d){return b.attributes[a]<d.attributes[a]?-1:b.attributes[a]>d.attributes[a]?1:0}}return{getFields:function(a,b,d,e){var c=this.getSkipFields(a),g=[];if(!d&&b.advStat&&b.advStat.stats&&b.advStat.stats.outFields&&0<b.advStat.stats.outFields.length)k.forEach(b.advStat.stats.outFields,
function(a){g.push(a.expression)});else{if(a.infoTemplate)b=a.infoTemplate.info.fieldInfos;else if(0<e.map.itemInfo.itemData.operationalLayers.length){e=e.map.itemInfo.itemData.operationalLayers;b=null;var f=0;a:for(;f<e.length;f++){var h=e[f];if("ArcGISMapServiceLayer"===h.layerType&&"undefined"!==typeof h.layers)for(var u=0;u<h.layers.length;u++){var p=h.layers[u];if(p.id===a.layerId&&p.popupInfo){b=p.popupInfo.fieldInfos;break a}}}b||(b=a.fields)}else b=a.fields;if(b)for(e=0;e<b.length;e++)f=b[e],
d||"undefined"===typeof f.visible?(f=f.name?f.name:f.fieldName,-1===c.indexOf(f)&&g.push(f)):f.visible&&-1===c.indexOf(f.fieldName)&&g.push(f.fieldName)}a=this.getSpecialFields(a);return{dateFields:a.dateFields,specialFields:a.specialFields,typeIdField:a.typeIdField,types:a.types,fields:3<g.length&&!d?g.slice(0,3):g,allFields:g}},getField:function(a,b){for(var d=0;d<a.length;d++){var e=a[d];if(e.name===b||e.alias===b)return e}},getFieldValue:function(a,b,d,e,c,g,f,h,k,p){g=!1;f=b;d[a]&&"esriFieldTypeDate"===
d[a].type&&(g=!0,-1<Object.keys(e).indexOf(a)?(d=e[a],c="undefined"!==typeof d?{dateFormat:d}:{dateFormat:c}):c={dateFormat:c},f=t.fieldFormatter.getFormattedDate(new Date(b),c));!g&&h&&k&&(f=(a=t.getDisplayValueForCodedValueOrSubtype(h,a,k))&&a.hasOwnProperty("displayValue")&&a.isCodedValueOrSubtype?a.displayValue:this.formatNumber(f,p).num);return f},getSkipFields:function(a){var b=[];if(a.fields)for(var d=0;d<a.fields.length;d++){var e=a.fields[d];e&&e.type&&e.name&&"esriFieldTypeGeometry"===e.type&&
b.push(e.name)}return b},getSpecialFields:function(a){var b={},d=[];a.fields&&k.forEach(a.fields,m.hitch(this,function(e){if("esriFieldTypeDate"===e.type||e.domain||e.name===a.typeIdField){if("esriFieldTypeDate"===e.type&&a.infoTemplate)for(var c in a.infoTemplate._fieldsMap)"undefined"!==typeof a.infoTemplate._fieldsMap[c].fieldName&&a.infoTemplate._fieldsMap[c].fieldName===e.name&&a.infoTemplate._fieldsMap[c].format&&"undefined"!==typeof a.infoTemplate._fieldsMap[c].format.dateFormat&&(d[e.name]=
a.infoTemplate._fieldsMap[c].format.dateFormat);b[e.name]=e}}));return{specialFields:b,dateFields:d,typeIdField:a.typeIdField,types:a.types}},getSummaryFields:function(){},getPopupFields:function(a){var b=[];0<a.tabLayers.length&&k.forEach(a.tabLayers,m.hitch(this,function(a){var d=this.getSkipFields(a);"undefined"!==typeof a.popupInfo?k.forEach(a.popupInfo.fieldInfos,m.hitch(this,function(a){if(a.visible&&-1===d.indexOf(a.fieldName)){var c={value:0};c.expression=a.fieldName;c.label=a.label;b.push(c)}})):
a.infoTemplate&&k.forEach(a.infoTemplate.info.fieldInfos,m.hitch(this,function(a){if(a.visible&&-1===d.indexOf(a.fieldName)){var c={value:0};c.expression=a.fieldName;c.label=a.label;b.push(c)}}))}));return b},getDisplayFields:function(a){var b;"undefined"!==typeof a.advStat&&"undefined"!==typeof a.advStat.stats&&"undefined"!==typeof a.advStat.stats.outFields?b=a.advStat.stats.outFields:(b=[],0<a.tabLayers.length&&k.forEach(a.tabLayers,m.hitch(this,function(a){"undefined"!==typeof a.popupInfo?k.forEach(a.popupInfo.fieldInfos,
m.hitch(this,function(a){if(a.visible){var c={value:0};c.expression=a.fieldName;c.label=a.label;b.push(c)}})):a.infoTemplate?k.forEach(a.infoTemplate.info.fieldInfos,m.hitch(this,function(a){if(a.visible){var c={value:0};c.expression=a.fieldName;c.label=a.label;b.push(c)}})):k.forEach((a.layerObject?a.layerObject:a).fields,m.hitch(this,function(a){var c={value:0};c.expression=a.name;c.label=a.alias;b.push(c)}))})));return b},exportToCSV:function(a,b,d,e,c){if(0===a.length)return!1;var g=c.baseLabel,
f=[],h=[];"proximity"===c.type&&a.sort(this.compareDistance);var u;"undefined"===typeof b.altKey?u=b:(u=!1,d=c.csvAllFields);k.forEach(a,m.hitch(this,function(a){"closest"===c.type&&delete a.attributes.DISTANCE;"proximity"===c.type&&(a.attributes.DISTANCE=this.getDistanceLabel(a.attributes.DISTANCE,c.unit,c.approximateLabel));f.push(a.attributes)}));if("summary"===c.type||"grouped"===c.type)if(c.hasOwnProperty("csvAllFields")&&"allFields"===c.csvAllFields||c.hasOwnProperty("csvAllFields")&&(!0===
c.csvAllFields||"true"===c.csvAllFields))for(var p in f[0])h.push(p);else if(c.hasOwnProperty("csvAllFields")&&"popUpFields"===c.csvAllFields)if(c.allFields)for(a=0;a<c.summaryFields.length;a++)h.push(c.summaryFields[a].field);else if(0===c.configuredPopUpFields.length)f=[],f.push({});else for(a=0;a<c.configuredPopUpFields.length;a++)h.push(c.configuredPopUpFields[a]);else for(a=0;a<c.summaryFields.length;a++)h.push(c.summaryFields[a].field);else for(var z in f[0])h.push(z);a=c.layer;p=a.fields;if(a&&
a.loaded&&p||u){z=b?[]:this.getSkipFields(a);var r={};if(c.opLayers&&c.opLayers._layerInfos){var l=c.opLayers.getLayerInfoById(a.id);l&&(r.popupInfo=l.getPopupInfo())}var l=[],n=0;for(;n<h.length;n++){var q=h[n];if(-1===z.indexOf(q)){var v=!1,t,A=0;b:for(;A<p.length;A++)if(t=p[A],t.name===q){v=!0;break b}v?l.push(t):l.push({name:q,alias:q,show:!0,type:"esriFieldTypeString"})}}r.datas=f;r.fromClient=!1;r.withGeometry=!1;r.outFields=l;r.formatDate=!0;r.formatCodedValue=!0;r.formatNumber=!1;var x=[],
y=[];if(!b&&d&&"undefined"!==typeof e)switch(c.type){case "proximity":x.push(c.nlsCount);y.push(e);break;case "closest":var w=0;k.forEach(e,m.hitch(this,function(a){0===w&&(k.forEach(a,function(a){x.push(a.label)}),w+=1);var b=[];k.forEach(a,function(a){b.push(a.value)});y.push(b)}));break;case "summary":k.forEach(e,m.hitch(this,function(a){var b=a.info.replace("\x3cbr/\x3e",""),d=!1,e=0;a:for(;e<c.calcFields.length;e++)if(b===c.calcFields[e].alias){d=!0;break a}d&&(x.push(b),y.push(a.total))}));
break;case "grouped":k.forEach(e,function(a){x.push(a.info.replace("\x3cbr/\x3e",""));y.push(a.total)})}if(u)return{summaryLayer:a,details:l};B.exportCSVFromFeatureLayer(g,a,r);return{summaryLayer:a,details:{appendColumns:x,appendDatas:y,name:g,type:c.nlsValue}}}B.exportCSV(g,f,h)},isURL:function(a){return/(https?:\/\/|ftp:)/g.test(a)},isEmail:function(a){return/\S+@\S+\.\S+/.test(a)},queryTabCount:function(){},performQuery:function(){},getFilter:function(a,b){var d="";b.traversal(function(b){if(a===
b.id&&b.getFilter())return d=b.getFilter(),!0});return d},getGeoms:function(a){for(var b=[],d=[],e=0;e<a.length;e++){var c=a[e].geometry?a[e].geometry:a[e];if("polygon"===c.type&&-1===b.indexOf(e)){for(var g=0;g<a.length;g++)if(g!==e&&-1===b.indexOf(g)){var f=a[g].geometry?a[g].geometry:a[g];"polygon"===f.type?l.intersects(c,f)&&(b.push(g),c=l.union(c,f)):b.push(g)}d.push(c)}}return d},createDefArray:function(a,b,d,e){for(var c=[],g=0;g<a.length;g++){var f=a[g];if(f){var h=new C;h.returnGeometry=
!1;h.geometry=b;var k=-1===[null,void 0,""].indexOf(f.id)?f.id:e.layers;h.where=this.getFilter(k,d);"undefined"!==typeof f.queryCount?c.push(f.queryCount(h)):"undefined"!==typeof f.queryIds?c.push(f.queryIds(h)):"undefined"!==typeof f.queryFeatures&&c.push(f.queryFeatures(h))}}return c},updateTabCount:function(a,b,d,e,c){var g="undefined"!==typeof c&&0<c?!0:!1;c=v.position(b).w;"undefined"!==typeof a&&0===a?(n.remove(b,"noFeatures"),n.remove(b,"noFeaturesActive"),n.add(b,g?"noFeaturesActive":"noFeatures")):
(g&&n.contains(b,"noFeatures")&&n.remove(b,"noFeatures"),g&&n.contains(b,"noFeaturesActive")&&n.remove(b,"noFeaturesActive"));d&&(a="undefined"!==typeof a?e+" ("+t.localizeNumber(a).toString()+")":e,b.innerHTML=a);d=v.position(b).w;a=0;var f;d>c?(f=!0,a=d-c):c>d&&(f=!1,a=c-d);c=v.position(b.parentNode).w;if(0<c){f=f?c+a:c-a;q.set(b.parentNode,"width",f+"px");b=b.parentNode.parentNode;c=b.parentNode;var h;if(c&&c.children&&0<c.children.length)for(a=0;a<c.children.length;a++)if(d=c.children[a],-1<d.className.indexOf("SA_panelRight")){h=
d;break}h&&b&&(f>v.position(c).w?(q.set(b,"right","58px"),q.set(h,"display","block")):(q.set(b,"right","24px"),q.set(h,"display","none")))}},getDistanceLabel:function(a,b,d){return Math.round(100*a)/100+" "+b+" ("+d+")"},getSum:function(a,b){var d=0;k.forEach(a,function(a){d+=a.attributes[b]});return d},getMin:function(a,b){a.sort(w(b));return a[0].attributes[b]},getMax:function(a,b){a.sort(w(b));a.reverse();return a[0].attributes[b]},getArea:function(a,b,d,e,c){var g=0;d=m.clone(d);d.miles=109413;
d.kilometers=109414;d.feet=109405;d.meters=109404;d.yards=109442;d.nauticalMiles=109409;var f=d[e],h;c&&c.stats&&c.stats.area&&0<c.stats.area.length&&(h=c.stats.area[0]);k.forEach(a,function(a){for(var c=0;c<b.length;c++){var d=l.intersect(a.geometry,b[c]);if(null!==d){var e=d.spatialReference;g=4326===e.wkid||e.isWebMercator()||e.isGeographic&&e.isGeographic()?g+l.geodesicArea(d,f):g+l.planarArea(d,f)}}});return this.formatNumber(g,h).total},getLength:function(a,b,d,e,c){var g=0,f=d[e],h;c&&c.stats&&
c.stats.length&&0<c.stats.length.length&&(h=c.stats.length[0]);k.forEach(a,function(a){for(var c=0;c<b.length;c++){var d=l.intersect(a.geometry,b[c]);if(null!==d){var e=d.spatialReference;g=4326===e.wkid||e.isWebMercator()||e.isGeographic&&e.isGeographic()?g+l.geodesicLength(d,f):g+l.planarLength(d,f)}}});return this.formatNumber(g,h).total},getDistance:function(a,b,d){var e="point"!==a.type?a.getExtent().getCenter():a;b="point"!==b.type?b.getExtent().getCenter():b;e=new D([[e.x,e.y],[b.x,b.y]]);
e.spatialReference=a.spatialReference;d="nauticalMiles"===d?"nautical-miles":d;return 4326===a.spatialReference.wkid||a.spatialReference.isWebMercator()?l.geodesicLength(e,d):l.planarLength(e,d)},compareDistance:function(a,b){return a.attributes.DISTANCE<b.attributes.DISTANCE?-1:a.attributes.DISTANCE>b.attributes.DISTANCE?1:0},formatNumber:function(a,b){var d=a;if(!isNaN(a)&&null!==a&&""!==a){var d=b&&b.modify&&!isNaN(a),e;d&&"undefined"!==typeof b.truncatePlaces&&!isNaN(b.truncatePlaces)&&(e=new RegExp(0<
b.truncatePlaces?"^\\d*[.]?\\d{0,"+b.truncatePlaces+"}":"^\\d*"));d=d&&b.round?1*a.toFixed(b.roundPlaces):d&&b.truncate?1*e.exec(a)[0]:a;isNaN(d)&&(d=0)}return{total:d,num:isNaN(d)||null===d||""===d?d:t.localizeNumber(d)}},getPopupConfiguredFields:function(a){var b=[];"undefined"!==typeof a.popupInfo?k.forEach(a.popupInfo.fieldInfos,m.hitch(this,function(a){a.visible&&b.push(a.fieldName)})):a.infoTemplate&&k.forEach(a.infoTemplate.info.fieldInfos,m.hitch(this,function(a){a.visible&&b.push(a.fieldName)}));
return b}}});