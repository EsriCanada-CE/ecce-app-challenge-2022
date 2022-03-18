// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Infographic/setting/dijitsSetting/_dijits/ValueProvider/FieldStatistics.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"row stat-row"\x3e\r\n    \x3cdiv class\x3d"col-2"\x3e\r\n      \x3cspan class\x3d"label"\x3e${nls.statistic}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"col-2"\x3e\r\n        \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d\'style:{width:"99%"}\' data-dojo-attach-point\x3d"operationSelect" data-dojo-attach-event\x3d"change:_onOperationChanged" class\x3d"restrict-select-width"\x3e\r\n            \x3coption value\x3d"count"\x3e${nls.countString}\x3c/option\x3e\r\n            \x3coption value\x3d"sum"\x3e${nls.sumOption}\x3c/option\x3e\r\n            \x3coption value\x3d"avg"\x3e${nls.averageOption}\x3c/option\x3e\r\n            \x3coption value\x3d"max"\x3e${nls.maxOption}\x3c/option\x3e\r\n            \x3coption value\x3d"min"\x3e${nls.minOption}\x3c/option\x3e\r\n        \x3c/select\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"fieldContaiber" class\x3d"row hide"\x3e\r\n    \x3cdiv class\x3d"col-2"\x3e\r\n        \x3cspan class\x3d"label"\x3e${nls.valueField}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"col-2"\x3e\r\n        \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d\'style:{width:"99%"}\' data-dojo-attach-point\x3d"fieldSelect" data-dojo-attach-event\x3d"change:_onFieldSelectChanged" class\x3d"restrict-select-width"\x3e\r\n        \x3c/select\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./FieldStatistics.html ../../../utils dijit/form/RadioButton dijit/form/Select".split(" "),function(e,f,c,g,h,k,l,m,d){return e([h,k,l,g],{baseClass:"infographic-field-statistics",templateString:m,getConfig:function(){if(!this.isValid())return!1;var a=this.operationSelect.get("value"),b;"count"!==a&&(b=this.fieldSelect.get("value"));a={type:a};b&&
(a.field=b);return a},isValid:function(){var a=this.operationSelect.get("value"),b=this.fieldSelect.get("value");return"count"!==a?!!b:!0},setConfig:function(a){if(a&&a.type){this._ignoreEvent=!0;var b=a.type;a=a.field;b&&d.updateOptions(this.operationSelect,null,b);a&&d.updateOptions(this.fieldSelect,null,a);setTimeout(function(){this._ignoreEvent=!1}.bind(this),200)}},setLayerDefinition:function(a){a&&(this.definition=a,this._fillFieldsSelect(a))},reset:function(){this.operationSelect.set("value",
"count");this.fieldSelect.removeOption(this.fieldSelect.getOptions())},_onChange:function(){this._ignoreEvent||this.isValid()&&this.emit("change")},_fillFieldsSelect:function(a){if(a=this._getFields(a))a=d.getFieldSelectOptions(a),this.fieldSelect.removeOption(this.fieldSelect.getOptions()),this.fieldSelect.set("value"),this.fieldSelect.addOption(a)},_getFields:function(a){if(a){var b=f.clone(a.fields);if(b&&b.length){var c=a.groupByFields&&a.groupByFields[0];a=b.filter(function(a){return a.name!==
c});return d.getNumberFields(a)}}},_onOperationChanged:function(a){"count"===a?this._hideFieldContainer():this._showFieldContainer();this._onChange()},_onFieldSelectChanged:function(){this._onChange()},_showFieldContainer:function(){c.removeClass(this.fieldContaiber,"hide")},_hideFieldContainer:function(){c.addClass(this.fieldContaiber,"hide")}})});