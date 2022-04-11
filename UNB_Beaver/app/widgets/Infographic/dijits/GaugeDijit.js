// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/_base/html ./BaseDijit jimu/utils jimu/dijit/Chart ../utils ./clientStatistic".split(" "),function(t,q,r,u,l,v,m,n){return t([u],{templateString:'\x3cdiv style\x3d"width:100%;height:100%;"\x3e\x3cdiv data-dojo-attach-point\x3d"noDataDiv"class\x3d"no-data-tip"\x3e${nls.noData}\x3c/div\x3e\x3cdiv class\x3d"gauge-dom" data-dojo-attach-point\x3d"gaugeDomNode"\x3e\x3c/div\x3e\x3c/div\x3e',type:"gauge",baseClass:"infographic-gauge-dijit",config:null,defValueStyle:{state:!0,
isRatio:!1,font:{font:{fontFamily:"Arial",bold:!1,italic:!1,underline:!1},textColor:"#59bad8"},dataFormat:{unit:"none",decimalPlaces:"",prefix:"",suffix:""}},constructor:function(a){this.inherited(arguments);this.visible=a.visible},postCreate:function(){this.inherited(arguments);this._features=null;this._upgradeConfig(this.config);this.setConfig(this.config);this._updateBackGroundColor()},_upgradeConfig:function(a){var b=a&&a.display&&a.display.currentValue;(b=b&&b.dataFormat)&&"undefined"===typeof b.digitSeparator&&
(b.digitSeparator=!0);b=(a=a&&a.display&&a.display.dataLabels)&&a.dataFormat||{};"undefined"===typeof b.digitSeparator&&(b.digitSeparator=!0);a.dataFormat=b},setLayerInfo:function(){},setVisible:function(a){this.visible=a},resetData:function(){this.gaugeValue=this._valueObj=this._r2fs=this._r1fs=this._features=this.dataSource=null},onDataSourceDataUpdate:function(a){this._valueObj=a},setMainFeatures:function(a){a&&(this._features=m.cleanFeatures(a))},setRangeFeatures:function(a,b){"range1"===b?this._r1fs=
m.cleanFeatures(a):"range2"===b&&(this._r2fs=m.cleanFeatures(a))},resize:function(){this.chart&&this.chart.resize()},setDataSource:function(a){this.inherited(arguments);this.dataSource=a},setConfig:function(a){a&&(this.config=a)},startRendering:function(){if(this._shouldRenderGauge()){this.chart||this._createJimuChart();this._updateBackGroundColor();var a=this._calculateGaugeValue();0===a?this.showNodata():-1===a?this.showNodata(this.nls.invalidRangeTip):(a=this._createChartOption(),this.chart.updateConfig(a))}},
_splitStatistic:function(a){if(a&&a.length){var b={};a.forEach(function(c){if("value"===c.type)b.value=c.config.value;else if("range"===c.type){var d=c.name;"stat"===c.config.type?b[d]=c.config.value.statistic:"fixed"===c.config.type&&(b[d]={value:c.config.value})}});return b}},_getValueObjForSetting:function(){var a=this.config&&this.config.statistics;if(a&&a.length){var b=this._splitStatistic(a),c=b.value,d=b.range1;b=b.range2;var e=this.dataSource;a=m.mockDataSourceForGaugeRange(a);c=n.statistic(c,
e,this._features);"undefined"!==typeof d.value?d=d.value:(d=n.statistic(d,a[0],this._r1fs),d=n.formatterRangeNumber(d));"undefined"!==typeof b.value?b=b.value:(b=n.statistic(b,a[1],this._r2fs),b=n.formatterRangeNumber(b));return{value:c,ranges:[d,b]}}},_calculateGaugeValue:function(){var a=this.inSettingPage?this._getValueObjForSetting():this._valueObj;if(!m.isValidValue(a)||!m.isValidValue(a.value))return 0;if(!this._isEffectiveRange(a))return-1;this.gaugeValue=a;return 1},_createChartOption:function(){var a=
this._splitValueObj(this.gaugeValue),b=a.min,c=a.max,d=a.value;d=this._parseRealValueDecimal(d);var e=this.config;a=e.display&&e.display.dataLabels&&e.display.dataLabels.dataFormat;d={tooltip:{confine:!0,trigger:"item"},series:[{data:[d]}]};d.shape=e.shape;d.type="gauge";d.theme=this.isDarkTheme()?"dark":"light";e=this._createGaugeOption();d.gaugeOption=e;d.max={value:c,format:a};d.min={value:b,format:a};return d},_parseRealValueDecimal:function(a){var b=this._getVaildValueDisplay();if(b=this._getVaildDecimalPlaces(b))a=
a.toFixed(b),a=Number(a);return a},_createGaugeOption:function(){var a=this._splitValueObj(this.gaugeValue),b=a.value,c=this.config,d=c.display&&c.display.dataLabels&&c.display.dataLabels.dataFormat,e={},f=this._getValueStyle();f&&(e.valueStyle=f);this._setGaugeDisplay(e);a=this._getIndicatorInfo(c,b,a);a.targetValue&&(b=this._isShowTargetValue()?a.targetValue:[],e.targetValue=b.map(function(h){return{value:h,format:d}}));a.columnColor&&(e.columnColor=a.columnColor);return e},_getIndicatorInfo:function(a,
b,c){var d=!1,e=!1,f=!1,h=this._getIndicatorValues(a,c);l.isNotEmptyObject(h,!0)&&(d=h);if(a=a.indicators)(b=m.getVaildIndicator(b,a,c.max))&&b.gaugeColor&&(e=b.gaugeColor),b&&b.valueColor&&(f=b.valueColor);return{targetValue:d,columnColor:e,valueColor:f}},_getIndicatorValues:function(a,b){var c=[];a.indicators&&(a.indicators.forEach(function(d){d.value&&d.value.forEach(q.hitch(this,function(e){c.push(this.betterDisplayNumberOfMultiDecimal(d.isRatio?e/100*b.max:e,2))}))}.bind(this)),c.sort(function(d,
e){return d-e}),c=l.uniqueArray(c));return c},betterDisplayNumberOfMultiDecimal:function(a,b){if("number"!==typeof a)return a;var c=0,d=a.toString().split(".");1===d.length?c=0:2===d.length&&(c=d[1].length);return c?(c>b&&(c=b),a=a.toFixed(c),parseFloat(a)):a},_splitValueObj:function(a){var b=a.value;a=a.ranges;a.sort(function(c,d){return c-d});return{min:a[0],max:a[1],value:b}},_isEffectiveRange:function(a){var b=this._splitValueObj(a);a=b.min;b=b.max;return"undefined"===typeof a||"undefined"===
typeof b||b===a?!1:!0},_isRangeNeedFeatures:function(a,b){var c=!1;a=a.statistics;if(!a||!a.length)return c;a.some(function(d){if("range"===d.type&&d.name===b&&"stat"===d.config.type)return c=!0});return c},_shouldRenderGauge:function(){if(this.visible&&this.config){if(this.inSettingPage){var a=this._isRangeNeedFeatures(this.config,"range1");var b=this._isRangeNeedFeatures(this.config,"range2");a=a?this._r1fs:!0;b=b?this._r2fs:!0;b=this.domNode&&this._features&&a&&b}else a=(b=this._valueObj)&&b.ranges,
b=this.domNode&&b&&a&&"number"===typeof b.value&&"number"===typeof a[0]&&"number"===typeof a[1];b?this.hideNodata():this.showNodata();return!!b}},_updateBackGroundColor:function(){var a=this.config;(a=a&&a.display&&a.display.backgroundColor)&&r.setStyle(this.domNode,"backgroundColor",a)},_createJimuChart:function(){var a=this._getDefaultChartOption();this.chart=new v({chartDom:this.gaugeDomNode,config:a});this.chart.placeAt(this.gaugeDomNode);this.chart.resize()},_generateValueFormatter:function(a){var b=
this._splitValueObj(this.gaugeValue),c=b.max,d=b.min;if(a)return q.hitch(this,function(e,f){var h="",g=e.dataFormat;if(!g)return f;var k=g.decimalPlaces;var p=g.digitSeparator;if(k||0===k)k=Number(k);e.isRatio?f=f<=d?l.convertNumberToPercentage(0,k,p):l.convertNumberToPercentage((f-d)/(c-d),k,p):"percentage"===g.unit?f=l.convertNumberToPercentage(f,k,p):"thousand"===g.unit?(h=this.nls.thousandAbbreviation,f/=1E3):"million"===g.unit?(h=this.nls.millionAbbreviation,f/=1E6):"billion"===g.unit&&(h=this.nls.billionAbbreviation,
f/=1E9);e.isRatio||"percentage"===g.unit||(f=l.localizeNumberByFieldInfo(f,{format:{places:k,digitSeparator:p}}));h&&(f+=h);e=f;g.prefix&&(e=g.prefix+" "+e);g.suffix&&(e+=" "+g.suffix);return e},a,b.value)},_getVaildDecimalPlaces:function(a){if(a){if((a=(a=a.dataFormat)&&a.decimalPlaces)||0===a)a=Number(a);if("number"===typeof a)return a}},_getVaildValueDisplay:function(){var a=this.config;if(a=a&&a.display)return a.currentValue&&a.currentValue.state?a.currentValue:q.clone(this.defValueStyle)},_generateTextStyle:function(a){var b=
this._splitValueObj(this.gaugeValue);b=this._getIndicatorInfo(this.config,b.value,b);var c=a&&a.font;if(c){a={};"undefined"!==typeof c.fontSize&&(a.fontSize=Number(c.fontSize));a.color=b.valueColor||c.textColor;b=c.font;if(!b)return a;a.fontWeight=b.bold?"bold":"normal";b.fontFamily&&(a.fontFamily=b.fontFamily);a.fontStyle=b.italic?"italic":"normal";return a}},_isShowTargetValue:function(){var a=this.config&&this.config.display&&this.config.display.dataLabels;if(a)return!!a.targetValue},_setGaugeDisplay:function(a){var b=
this.config.display;b&&(b.gaugeColor&&(a.columnColor=b.gaugeColor),b.bgColor&&(a.bgColor=b.bgColor),b.dataLabels&&b.dataLabels.state&&(b=b.dataLabels,a.showDataRangeLabel=!!b.dataRange,a.showTargetValueLabel=!!b.targetValue,a.labelColor=b.textColor||""))},_getValueStyle:function(){var a=this._getVaildValueDisplay();if(a){var b={},c=this._getVaildDecimalPlaces(a);"number"===typeof c&&(b.decimalPlaces=c);b.formatter=this._generateValueFormatter(a);if(a=this._generateTextStyle(a))b.textStyle=a;return b}},
_getDefaultChartOption:function(){var a={type:"gauge",confine:!0,shape:"curved",min:0,max:100,series:[{data:[0]}]};this.config&&this.config.shape&&(a.shape=this.config.shape);a.theme=this.isDarkTheme()?"dark":"light";return a},showNodata:function(a){this.chart&&this.chart.clear();r.addClass(this.domNode,"no-data");a&&(this.noDataDiv.innerHTML=l.sanitizeHTML(a))},hideNodata:function(){r.removeClass(this.domNode,"no-data")}})});