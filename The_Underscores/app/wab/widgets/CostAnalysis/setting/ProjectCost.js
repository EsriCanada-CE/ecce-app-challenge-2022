// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/setting/ProjectCost.html":'\x3cdiv\x3e\r\n    \x3c!--Add Addtional Project cost button--\x3e\r\n    \x3cdiv class\x3d"esriCTProjectCostContainer" data-dojo-attach-point\x3d"btnAddProjectCostNodeWrapper"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"btnAddProjectCostNode" class\x3d"esriCTBtnProjectCostAddSection"\x3e\r\n            \x3cspan class\x3d"esriCTBtnAddProjectCostIcon"\x3e\x3c/span\x3e\r\n            \x3cspan class\x3d"esriCTBtnProjectCostAddLabel"\x3e ${nls.projectCostSettings.addProjectCostLabel} \x3c/span\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTProjectCostTableWrapper" data-dojo-attach-point\x3d"projectCostTableWrapper"\x3e\r\n        \x3cdiv class\x3d"esriCTProjectCostTableNode" data-dojo-attach-point\x3d"projectCostTableNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!--Add/delete/reorder buttons--\x3e\r\n    \x3cdiv class\x3d"esriCTStatisticsButtonParentDiv"\x3e\r\n        \x3cdiv class\x3d"esriCTAddStatisticsIcon esriCTStatisticsButtons" data-dojo-attach-point\x3d"btnAddNode"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTDeleteStatisticsIcon esriCTStatisticsButtons" data-dojo-attach-point\x3d"btnCrossNode"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTStatisticsUpIcon esriCTStatisticsButtons" data-dojo-attach-point\x3d"btnUpNode"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTStatisticsDownIcon esriCTStatisticsButtons" data-dojo-attach-point\x3d"btnDownNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./ProjectCost.html dojo/_base/lang dojo/on jimu/dijit/SimpleTable dojo/query dijit/form/ValidationTextBox dojo/dom-construct dijit/form/Select dojo/_base/array dojo/store/Memory".split(" "),function(k,l,m,n,p,d,g,q,r,h,e,t,f,u){return k([l,m,n],{templateString:p,baseClass:"jimu-widget-cost-analysis-project-cost-settings",_costFieldStore:null,postCreate:function(){this.inherited(arguments);this._handleClickEvents()},
_setConfig:function(){this.config&&this.config.projectCostSettings&&0<this.config.projectCostSettings.length&&f.forEach(this.config.projectCostSettings,d.hitch(this,function(a){this._addProjectCostLayerRow(a)}))},startup:function(){this.inherited(arguments);this._createProjectCostFieldTable();this._createProjectCostTypeFieldStore();this._setConfig()},getConfig:function(){var a,b;a=this._projectCostTable.getRows();b=[];f.some(a,d.hitch(this,function(a){b.push({label:a.projectCostLabelTextBox.getValue(),
type:a.projectCostTypeDropdown.getValue(),value:a.projectCostValueTextBox.getValue()})}));return b},validateProjectCostData:function(){var a,b;a=this._projectCostTable.getRows();for(var c in a){b=a[c];if(!b.projectCostLabelTextBox.isValid())return this._setErrorMessage(b.projectCostLabelTextBox,this.nls.projectCostSettings.invalidProjectCostMessage),{isValid:!1};if(!b.projectCostValueTextBox.isValid())return this._setErrorMessage(b.projectCostValueTextBox,this.nls.projectCostSettings.invalidProjectCostMessage),
{isValid:!1}}return{isValid:!0}},_setErrorMessage:function(a,b){a.set("state","Error");a.set("invalidMessage",b);a.focus();a.isValid()},_handleClickEvents:function(){this.own(g(this.btnAddProjectCostNode,"click",d.hitch(this,function(){this._addProjectCostBtnClicked()})));this.own(g(this.btnCrossNode,"click",d.hitch(this,function(){this._deleteLayerRow()})))},_createProjectCostFieldTable:function(){this._projectCostTable=new q({fields:[{name:"editable",title:this.nls.common.label,type:"empty",editable:!1,
width:"35%"},{name:"field",title:this.nls.common.type,type:"empty",editable:!1,width:"20%"},{name:"field",title:this.nls.projectCostSettings.additionalCostValueColumnHeader,type:"empty",editable:!0,width:"35%"},{name:"actions",title:this.nls.common.actions,width:"10%",type:"actions",actions:["up","down","delete"]}],selectable:!1,autoHeight:!0});this._projectCostTable.placeAt(this.projectCostTableNode);this._projectCostTable.startup()},_addProjectCostBtnClicked:function(){this._addProjectCostLayerRow()},
_addProjectCostLayerRow:function(a){var b,c;b=this._projectCostTable.addRow({});if(c=r(".simple-table-cell",b.tr))b=b.tr,this._addProjectCostLabelTextBox(c[0],b,a),this._addProjectCostTypeDropdown(c[1],b,a),this._addProjectCostValueTextBox(c[2],b,a)},_addProjectCostLabelTextBox:function(a,b,c){a=e.create("div",{"class":"esriCTTextBoxContainer"},a);b.projectCostLabelTextBox=new h({"class":"esriCTProjectCostLabelTextbox esriCTAddProjectCostTableNode",invalidMessage:"Invalid Entry for project cost"},
a);b.projectCostLabelTextBox.startup();c&&c.label&&b.projectCostLabelTextBox.set("value",c.label);b.projectCostLabelTextBox.validator=d.hitch(this,this._validateProjectCostLabelFields)},_validateProjectCostLabelFields:function(a){return""===d.trim(a)?!1:!0},_addProjectCostTypeDropdown:function(a,b,c){a=e.create("div",{"class":"esriCTProjectCostTypeDropDownContainer esriCTAddProjectCostTableNode"},a);b.projectCostTypeDropdown=new t({name:"layerSelect",store:this._projectCostFieldStore,labelAttr:"name",
"class":"esriCTProjectCostTypeDropdown"},a);c&&c.type&&b.projectCostTypeDropdown.set("value",c.type);b.projectCostTypeDropdown.startup()},_addProjectCostValueTextBox:function(a,b,c){a=e.create("div",{"class":"esriCTProjectCostTextBoxContainer esriCTAddProjectCostTableNode"},a);b.projectCostValueTextBox=new h({"class":"esriCTProjectCostLabelTextbox",trim:!0,invalidMessage:"Invalid Entry for project cost"},a);b.projectCostValueTextBox.startup();c&&c.value&&b.projectCostValueTextBox.set("value",c.value);
b.projectCostValueTextBox.validator=d.hitch(this,this._validateProjectCostValueFields)},_validateProjectCostValueFields:function(a){a=Number(a);return""===a||isNaN(a)||"0"===a||0===a?!1:!0},_deleteLayerRow:function(){var a=this._projectCostTable.getRows(),b=this._projectCostTable.getData();f.forEach(b,d.hitch(this,function(b,d){b.editable&&this._projectCostTable.deleteRow(a[d])}))},_createProjectCostTypeFieldStore:function(){var a;a=[];a.push({name:"+",value:"+"});a.push({name:"*",value:"*"});a.push({name:"-",
value:"_"});a.push({name:"%",value:"%"});this._projectCostFieldStore=new u({idProperty:"value",data:a})}})});