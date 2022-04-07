// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/setting/SmartActionGroup.html":'\x3cdiv class\x3d"esriCTSmartActionsGroupContainer"\x3e\r\n  \x3cdiv class\x3d"esriCTRowContainer row"\x3e\r\n    \x3cdiv class\x3d"esriCTlabel"\x3e\r\n      ${nls.smartActionsPage.groupNameLabel}\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTLayerField"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"groupNameTextBoxNode"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTRowContainer row"\x3e\r\n    \x3cdiv class\x3d"esriCTlabelParentContainer"\x3e\r\n      \x3cdiv class\x3d"esriCTlabel"\x3e\r\n        ${nls.smartActionsPage.layerForExpressionLabel}\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTLayerFieldDropBox"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"layerSelectorDiv"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTHintCheck"\x3e\r\n      ${nls.smartActionsPage.layerForExpressionNote}\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTRowContainer row"\x3e\r\n    \x3cdiv class\x3d"esriCTlabel"\x3e${nls.smartActionsPage.expressionText}\x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTExpression"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"expressionTextBoxNode" class\x3d"esriCTExpressionTextBoxNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"editExpressionIconNode" title\x3d"${nls.smartActionsPage.editExpressionLabel}"\x3e\r\n        \x3cdiv class\x3d"jimu-icon jimu-icon-edit" data-dojo-attach-point\x3d"editExpressionIconNode"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTRowContainer row"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"submitWhenHiddenNode" class\x3d"esriCTlabel esriCTSubmitAttributeDataText"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTRowContainer row"\x3e\r\n    \x3cfieldset class\x3d"esriCTFieldset"\x3e\r\n      \x3clegend class\x3d"esriCTLegendTitle"\x3e${nls.smartActionsPage.layerAndFieldsApplyLabel}\x3c/legend\x3e\r\n      \x3cdiv class\x3d"esriCTTableParentContainer" data-dojo-attach-point\x3d"tableParentContainer"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/fieldset\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/Evented dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/dom-class dojo/dom-style dojo/dom-attr dojox/html/entities dojo/on dojo/query dojo/Deferred dojo/text!./SmartActionGroup.html dijit/_TemplatedMixin jimu/dijit/LayerChooserFromMap jimu/dijit/LayerChooserFromMapWithDropbox jimu/BaseWidgetSetting jimu/dijit/SimpleTable jimu/dijit/Popup dijit/form/ValidationTextBox jimu/dijit/CheckBox dijit/form/CheckBox jimu/dijit/Message ./FilterPage jimu/utils dijit/registry".split(" "),
function(I,J,k,q,l,t,B,u,K,y,n,L,M,N,C,O,P,Q,F,D,E,R,S,T,U,z){return I([P,J,N],{baseClass:"jimu-widget-smartEditor-setting-smartActionGroup",templateString:M,_totalLayers:[],_prevAppliedOn:[],filterInfo:{filter:""},searchTextBox:null,postCreate:function(){this.inherited(arguments);this._totalLayers=[];this._prevAppliedOnLayers=[];this.appliedOn&&(this._prevAppliedOnLayers=k.clone(Object.keys(this.appliedOn)));this._initComponents();this._handleParentCheckBoxState()},_initComponents:function(){this.groupNameTextBox=
new D({required:!0,trim:!0,"class":"esriCTGroupNameTextBox"},l.create("div",{},this.groupNameTextBoxNode));this.groupNameTextBox.validator=k.hitch(this,function(a){return a?a!==this.prevName&&this.editUtils.isDuplicateGroupName(a,this.existingGroupNames)?(this.groupNameTextBox.set("invalidMessage",this.nls.smartActionsPage.uniqueGroupNameMsg),!1):!0:(this.groupNameTextBox.set("invalidMessage",this.nls.smartActionsPage.requiredGroupNameMsg),!1)});this.name&&this.groupNameTextBox.set("value",this.name);
this._initLayerSelector();this.expressionTextBox=new D({disabled:!0,required:!0,"class":"esriCTTextBoxNode",promptMessage:this.nls.smartActionsPage.invalidExpression},l.create("div",{},this.expressionTextBoxNode));this.filterInfo&&this.filterInfo.expression&&this.expressionTextBox.set("value",this.filterInfo.expression);this.own(y(this.editExpressionIconNode,"click",k.hitch(this,this._showFilter)));this._submitHidden=new E({label:this.nls.smartActionsPage.submitAttributeText},l.create("div",{},this.submitWhenHiddenNode));
this.submitWhenHidden&&this._submitHidden.setValue(this.submitWhenHidden);this._createTable(this.appliedOn)},_addLayersDropDown:function(){var a=this._createLayerChooserMapArgs();a=new C(a);a.startup();a=new O({layerChooser:a});a.placeAt(this.layerSelectorDiv);a.startup();this._layerSelector=a;var b=this._totalLayers[0];this.layerForExpression&&(a=this._jimuLayerInfos.getLayerOrTableInfoById(this.layerForExpression))&&(b=a.layerObject);this._layerSelector.setSelectedLayer(b);this.own(y(this._layerSelector,
"selection-change",k.hitch(this,function(){this.expressionTextBox.get("value")&&(new S({message:this.nls.smartActionsPage.warningMsgOnLayerChange}),this.onFilterInfoChanged({expression:"",filter:null,submitWhenHidden:!1}))})))},_createLayerChooserMapArgs:function(){return{multiple:!1,onlyShowWebMapLayers:!0,createMapResponse:this.map.webMapResponse,filter:this._createFiltersForLayerSelector()}},_createFiltersForLayerSelector:function(){return C.createFeaturelayerFilter(["point","polyline","polygon"],
!1,!0)},_initLayerSelector:function(){var a=this._createLayerChooserMapArgs();this._layerChooserFromMap=new C(a);this._layerChooserFromMap.startup();a=this._layerChooserFromMap.layerInfosObj.getLayerInfoArrayOfWebmap();var b=this._layerChooserFromMap.layerInfosObj.getTableInfoArrayOfWebmap();b&&0<b.length&&(a=a.concat(b));this._getAllFilteredLayers(a,[])},_isLayerEditable:function(a){var b=!1;a&&a.layerObject&&(a=a.layerObject.getEditCapabilities(),a.canCreate||a.canUpdate||a.canDelete||a.canUpdateGeometry)&&
(b=!0);return b},_getAllFilteredLayers:function(a,b){q.forEach(a,k.hitch(this,function(c){if(c.isLeaf()){var d=new L;this._layerChooserFromMap.filter(c).then(k.hitch(this,function(e){e&&this._isLayerEditable(c)&&this._totalLayers.push(c);d.resolve()}));b.push(d)}else this._getAllFilteredLayers(c.newSubLayers,b)}))},_validateGroup:function(){if(!this.groupNameTextBox.isValid())return this.groupNameTextBox.focus(),!1;if(this._layerSelector){var a=this._layerSelector.getSelectedItem();if(!a||!a.layerInfo||
!a.layerInfo.layerObject)return!1}else return!1;return this.expressionTextBox.isValid()?!0:(this.expressionTextBox.set("disabled",!1),this.expressionTextBox.focus(),this.expressionTextBox.set("disabled",!0),!1)},showDialog:function(){this._addLayersDropDown();var a=new F({titleLabel:this.nls.smartActionsPage.smartActionLabel,width:900,maxHeight:550,autoHeight:!1,content:this,"class":this.baseClass,buttons:[{label:this.nls.ok,onClick:k.hitch(this,function(){var b={},c=this._layerSelector.getSelectedItem().layerInfo.layerObject;
if(this._validateGroup()){b.name=this.groupNameTextBox.get("value");b.submitWhenHidden=this._submitHidden.checked;b.layerForExpression=c.id;b.filterInfo=this.filterInfo;b.appliedOn=this.appliedOn;this._applySettingsInLayer(b);for(var d in b.appliedOn){c=b.appliedOn[d];for(var e in c)c[e].hasOwnProperty("Priority")&&delete c[e].Priority,c[e].hasOwnProperty("ExistingExpressions")&&delete c[e].ExistingExpressions}this.emit("groupInfoUpdated",b);a.close()}})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],
onClick:k.hitch(this,function(){a.close()})}],onClose:k.hitch(this,function(){})});this.groupNameTextBox.focus();this._setMaxWidth()},_getTableData:function(){var a=[],b;q.forEach(this._layerTable.getRows(),k.hitch(this,function(c){c.layerSelector&&(b={},b.layerId=c.layerSelector.getSelectedItem().layerInfo.id,b.field=c.layerFields.getValue(),a.push(b))}));return a},_showFilter:function(a){if(!this.groupNameTextBox.isValid())return this.groupNameTextBox.focus(),!1;this._filterPage&&this._filterPage.destroy();
var b=this._layerSelector.getSelectedItem().layerInfo.layerObject;this._filterPage=new T({nls:this.nls,_resourceInfo:this._resourceInfo,_url:b.url,_layerId:b.id,_filterInfo:this.filterInfo,_groupName:this.groupNameTextBox.get("value"),_layerDefinition:b});this.own(y(this._filterPage,"filterInfo",k.hitch(this,function(c){this.onFilterInfoChanged(c)})));this._filterPage.popup(a)},onFilterInfoChanged:function(a){this.filterInfo=k.clone(a);this.filterInfo.filter=JSON.parse(K.decode(this.filterInfo.filter));
this.expressionTextBox.set("value",a.expression);this._destroyTable();this._createTable(this.appliedOn);this._handleParentCheckBoxState()},_destroyTable:function(){l.empty(this.tableParentContainer)},_createHeaderObj:function(a,b,c){var d,e=["","Hide","Required","Disabled"],f=l.create("th"),h=l.create("div",{innerHTML:a.title,title:a.title});a.hasOwnProperty("headerIcon")&&(d=l.create("div",{title:a.title}));0<c&&(t.add(f,"esriCTTableTH"),t.add(h,"esriCTTableHeaderTitle "),a.hasOwnProperty("headerIcon")&&
t.add(d,"esriCTTableHeaderIcon "+a.headerIcon));var g=l.create("div",{"class":"esriCTPriorityColumnParentContainer"}),m=l.create("div",{"class":"esriCTPriorityColumnParentDiv"});m.appendChild(h);a.hasOwnProperty("headerIcon")&&m.appendChild(d);d=l.create("div",{"class":"esriCTPriorityNumberDiv"});if(3>=c){t.add(d,"esriCTSAHeaderCheckbox");var p,r;var x=new E({label:""},l.create("div",{},d));u.set(x.domNode,"action",e[c]);y(x,"change",k.hitch(this,function(v){var w=u.get(x.domNode,"action");p=""!==
this.searchTextBox.get("value")?n("tr[searchstring^\x3d'"+this.searchTextBox.get("value").toLowerCase()+"']",this.tableParentContainer):n("tr.esriCTSmartActionGroupRow",this.tableParentContainer);q.forEach(p,k.hitch(this,function(A){var G=u.get(A,"layerid");var H=u.get(A,"field");G&&H&&(this.appliedOn[G][H][w]=v);(r=n("[action\x3d"+w+"]",A))&&r[0]&&(r=z.byNode(r[0]),v?r.check(!0):r.uncheck(!0))}))}))}4===c&&(l.create("div",{"class":"esriCTPriorityOneDiv",innerHTML:this.nls.smartActionsPage.priorityOneText},
d),l.create("div",{"class":"esriCTPriorityTwoDiv",innerHTML:this.nls.smartActionsPage.priorityTwoText},d),l.create("div",{"class":"esriCTPriorityThreeDiv",innerHTML:this.nls.smartActionsPage.priorityThreeText},d));0===c?this._addSearchControl(g):(g.appendChild(m),g.appendChild(d));f.appendChild(g);B.set(f,"width",a.width);b.appendChild(f)},_addSearchControl:function(a){this.searchTextBox=new D({trim:!0,placeHolder:this.nls.actionPage.searchPlaceHolder,intermediateChanges:!0},l.create("div",{},a));
B.set(this.searchTextBox.domNode,"width","350px");this.own(y(this.searchTextBox,"change",k.hitch(this,this._searchTextUpdated)));a=l.create("div",{"class":"esriCTExpandAllNode"},a);this._expandAllCheckBox=new R({"class":"switch-toggle",checked:!1},l.create("div",{},a));l.create("label",{innerHTML:this.nls.actionPage.expandAllLabel},a);this.own(y(this._expandAllCheckBox,"change",k.hitch(this,function(b){b?(b=n(".esriCTToggleLayerIcon.esriCTToggleLayerCollapsed.esriCTToggleLayerExpanded",this.layerAndFieldsMainDiv))&&
0<b.length&&q.forEach(b,function(c){c.click()}):(b=n(".esriCTToggleLayerIcon.esriCTToggleLayerCollapsed",this.layerAndFieldsMainDiv))&&0<b.length&&q.forEach(b,function(c){t.contains(c,"esriCTToggleLayerExpanded")||c.click()})})))},_searchTextUpdated:function(a){a=a.toLowerCase();if(""!==a){var b=n("[searchstring]",this.tableParentContainer);var c=n("tr[searchstring^\x3d'"+a+"']",this.tableParentContainer);b.style("display","none");b.removeClass("esriCTNotFilteredBySearch");b.addClass("esriCTFilteredBySearch");
c.style("display","");c.replaceClass("esriCTNotFilteredBySearch","esriCTFilteredBySearch");a=this.appliedOn;this._handleParentCheckBoxState(c);for(var d in a){var e;if(0<Object.keys(a[d]).length){c=n("[layermaindivid \x3d '"+d+"']",this.tableParentContainer);b=n("[layerid\x3d'"+d+"']",this.tableParentContainer);var f=!0;for(e=0;e<b.length;e++)if(t.contains(b[e],"esriCTNotFilteredBySearch")){f=!1;break}f?c.style("display","none"):c.style("display","")}}}else n("[layermaindivid]",this.tableParentContainer).style("display",
""),n("[searchstring]",this.tableParentContainer).style("display",""),n("[searchstring]",this.tableParentContainer).removeClass("esriCTFilteredBySearch"),n("[searchstring]",this.tableParentContainer).addClass("esriCTNotFilteredBySearch"),this._handleParentCheckBoxState(c)},_handleParentCheckBoxState:function(a){var b=!0,c=!0,d=!0,e,f,h;a||(a=n("tr.esriCTSmartActionGroupRow",this.tableParentContainer));q.forEach(a,k.hitch(this,function(p){e=n("[action\x3d'Hide']",p);f=n("[action\x3d'Required']",p);
h=n("[action\x3d'Disabled']",p);0<e.length&&0<f.length&&0<h.length&&(e=z.byNode(e[0]),f=z.byNode(f[0]),h=z.byNode(h[0]),e.getValue()||(b=!1),f.getValue()||(c=!1),h.getValue()||(d=!1))}));a=z.byNode(n(".esriCTTableTH [action\x3d'Hide']",this.tableParentContainer)[0]);var g=z.byNode(n(".esriCTTableTH [action\x3d'Required']",this.tableParentContainer)[0]);var m=z.byNode(n(".esriCTTableTH [action\x3d'Disabled']",this.tableParentContainer)[0]);b?a.check(!0):a.uncheck(!0);c?g.check(!0):g.uncheck(!0);d?
m.check(!0):m.uncheck(!0)},_createHeaders:function(a){var b=[{title:"",icon:"",width:"41%"},{title:this.nls.actionPage.actions.hide,width:"13%",headerIcon:"esriCTHide"},{title:this.nls.actionPage.actions.required,width:"13%",headerIcon:"esriCTRequired"},{title:this.nls.actionPage.actions.disabled,width:"13%",headerIcon:"esriCTDisabled"},{title:this.nls.smartActionsPage.priorityColumnText,icon:"",width:"20%"}];var c=l.create("thead",{style:{height:"58px !important"}});var d=c.insertRow(0);t.add(d,
"esriCTTableRow");q.forEach(b,k.hitch(this,function(e,f){this._createHeaderObj(e,d,f)}));a.appendChild(c)},_setMaxWidth:function(){var a=n(".esriCTTableHeaderTitle");q.forEach(a,k.hitch(this,function(b){var c=B.getComputedStyle(b).width;B.set(b,"max-width",c)}))},_createPriorityIcons:function(a,b){var c=b.Priority;a=l.create("td",{style:{width:"20%"}},a);var d=l.create("div",{"class":"esriCTPriorityIconMainDiv"},a);q.forEach(c,k.hitch(this,function(e){l.create("div",{"class":"esriCTPriorityIcons esriCT"+
e,title:this.nls.actionPage.actions[e.toLowerCase()]},d)}));c=l.create("div",{"class":"jimu-icon jimu-icon-edit esriCTPriorityEditIcon",title:this.nls.smartActionsPage.priorityPopupTitle},d);this.own(y(c,"click",k.hitch(this,function(e){this._createPriorityTable(e.currentTarget.parentNode);this._createPriorityPopup(e.currentTarget.parentNode,b)})))},_createPriorityTable:function(a){this._priorityTable=new Q({fields:[{name:"priorityName",title:this.nls.smartActionsPage.priorityPopupColumnTitle,type:"empty",
width:"80%"},{name:"actions",title:this.nls.intersectionPage.actionsText,type:"actions",width:"20%",actions:["up","down"],"class":"actions"}],selectable:!1});this._priorityTable.startup();this._populatePriorityTable(a)},_getExistingPriority:function(a){var b={esriCTHide:"Hide",esriCTRequired:"Required",esriCTDisabled:"Disabled"},c=[];q.forEach(a.childNodes,k.hitch(this,function(d,e){if(3>e)for(var f in b)t.contains(d,f)&&c.push(b[f])}));return c},_populatePriorityTable:function(a){a=this._getExistingPriority(a);
q.forEach(a,k.hitch(this,function(b){var c=l.create("div",{innerHTML:this.nls.actionPage.actions[b.toLowerCase()],title:this.nls.actionPage.actions[b.toLowerCase()]});t.add(c,"esriCTTablePriorityTitle");u.set(c,"priority",b);var d=l.create("div",{title:this.nls.actionPage.actions[b.toLowerCase()]});t.add(d,"esriCTPriorityPopupIcon esriCT"+b);b=this._priorityTable.addRow({}).tr;b=n(".simple-table-cell",b)[0];b.appendChild(d);b.appendChild(c)}))},_fetchPriority:function(){var a=this._priorityTable.getRows(),
b=[];q.forEach(a,k.hitch(this,function(c){b.push(u.get(c.childNodes[0].childNodes[1],"priority"))}));return b},_changePriority:function(a,b){q.forEach(a,k.hitch(this,function(c,d){q.forEach(b.childNodes,k.hitch(this,function(e,f){d===f&&(q.forEach(["Hide","Required","Disabled"],k.hitch(this,function(h){t.remove(e,"esriCT"+h)})),t.add(e,"esriCT"+c),u.set(e,"title",this.nls.actionPage.actions[c.toLowerCase()]))}))}))},_createPriorityPopup:function(a,b){var c=new F({titleLabel:this.nls.smartActionsPage.priorityPopupTitle,
width:450,maxHeight:445,autoHeight:!0,content:this._priorityTable,"class":this.baseClass,buttons:[{label:this.nls.ok,onClick:k.hitch(this,function(){var d=this._fetchPriority();this._changePriority(d,a);b.Priority=d;c.close()})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:k.hitch(this,function(){c.close()})}],onClose:k.hitch(this,function(){})})},_createLayerName:function(a,b){var c=b,d=l.create("td"),e=l.create("div",{"class":"esriCTLayerNameRowParent"},d);this._jimuLayerInfos.getLayerInfoById(b)?
c=this._jimuLayerInfos.getLayerInfoById(b).layerObject.name:this._jimuLayerInfos.getTableInfoById(b)&&(c=this._jimuLayerInfos.getTableInfoById(b).layerObject.name);var f=l.create("div",{"class":"esriCTToggleLayerIcon esriCTToggleLayerCollapsed esriCTToggleLayerExpanded",style:{"margin-top":"5px"}},e);l.create("div",{"class":"esriCTLayerTitle",innerHTML:c,title:c},e);u.set(f,"rootnodelayerid",b);this.own(y(f,"click",k.hitch(this,function(h){var g=!0,m=n(".esriCTToggleLayerIcon.esriCTToggleLayerCollapsed",
this.layerAndFieldsMainDiv);t.toggle(h.currentTarget,"esriCTToggleLayerExpanded");h=u.get(h.currentTarget,"rootnodelayerid");n('tr[layerid\x3d"'+h+'"]').toggleClass("esriCTHidden");q.some(m,k.hitch(this,function(p){if(t.contains(p,"esriCTToggleLayerExpanded"))return g=!1,!0}));this._expandAllCheckBox.set("checked",g,!1)})));a.appendChild(d)},_createFieldNameTd:function(a,b){var c=l.create("td",{innerHTML:b,"class":"esriCTLayerFields"});a.appendChild(c);u.set(a,"searchstring",b.toLowerCase())},_addRows:function(a,
b){var c=b.layerDetails;b=b.fieldLabels;var d=[],e;for(e in c){var f=c[e],h=l.create("tr",{"class":"esriCTSmartActionGroupRow esriCTLayerNameRow"});this._createLayerName(h,e);u.set(h,"layermaindivid",e);a.appendChild(h);for(var g in f){h=l.create("tr",{"class":"esriCTSmartActionGroupRow esriCTLayerFieldRow esriCTHidden"});u.set(h,"layerid",e);u.set(h,"field",g);this._createFieldNameTd(h,b[e][g]);var m={layerid:e,field:g,action:"Hide"},p="";f[g].ExistingExpressions.hasOwnProperty("Hide")&&(p=f[g].ExistingExpressions.Hide);
this._createCheckBox(h,m,f[g].Hide,p);m.action="Required";p="";f[g].ExistingExpressions.hasOwnProperty("Required")&&(p=f[g].ExistingExpressions.Required);this._createCheckBox(h,m,f[g].Required,p);m.action="Disabled";p="";f[g].ExistingExpressions.hasOwnProperty("Disabled")&&(p=f[g].ExistingExpressions.Disabled);this._createCheckBox(h,m,f[g].Disabled,p);-1===d.indexOf(e)&&(f[g].Hide||f[g].Required||f[g].Disabled)&&d.push(e);this._createPriorityIcons(h,f[g]);a.appendChild(h)}}0<d.length&&setTimeout(k.hitch(this,
function(){q.forEach(d,function(r){n('div[rootnodelayerid\x3d"'+r+'"]').toggleClass("esriCTToggleLayerExpanded");n('tr[layerid\x3d"'+r+'"]').toggleClass("esriCTHidden")})}),100)},_createCheckBox:function(a,b,c,d){var e=l.create("td",{style:{width:"13%"}}),f=!0,h,g;t.add(e,"esriCTCheckBoxTD");var m=l.create("div");c&&d&&(c=!1);var p=l.create("div");t.add(p,"esriCTCheckBoxMainDiv");var r=l.create("div");c=new E({checked:c},r);u.set(r,"action",b.action);u.set(r,"field",b.field);u.set(r,"layerid",b.layerid);
var x=this.appliedOn[b.layerid][b.field];this.own(y(c,"change",k.hitch(this,function(v){var w=u.get(r,"action");f=!0;x[w]=v;fieldsMatchingNodes=""!==this.searchTextBox.get("value")?n("tr[searchstring^\x3d'"+this.searchTextBox.get("value").toLowerCase()+"']",this.tableParentContainer):n("tr.esriCTSmartActionGroupRow",this.tableParentContainer);0<fieldsMatchingNodes.length?q.some(fieldsMatchingNodes,k.hitch(this,function(A){if((A=n("[action\x3d"+w+"]",A))&&A[0]&&(h=z.byNode(A[0]))&&!h.getValue())return f=
!1,!0})):f=!1;g=z.byNode(n(".esriCTTableTH [action\x3d"+w+"]",this.tableParentContainer)[0]);f&&!g.getValue()?g.check(!0):g.uncheck(!0)})));p.appendChild(r);m.appendChild(p);d&&(b=l.create("div",{title:d}),t.add(b,"esriCTExistingExpressionDiv"),m.appendChild(b));e.appendChild(m);a.appendChild(e)},_createTable:function(a){var b=l.create("table");t.add(b,"esriCTTableMainNode tableBodyScroll");this._createHeaders(b);this.tableParentContainer.appendChild(b);var c=l.create("tbody",{style:"width: 808px"});
(a=this._createLayerDetails(k.clone(a)))&&a.layerDetails&&a.fieldLabels&&(this.appliedOn=a.layerDetails,this._addRows(c,a));b.appendChild(c)},_validateIfLayerHaveUsedFields:function(a,b){if(b){var c=b.length;q.forEach(a,function(d){q.forEach(b,function(e){d.name===e.fieldObj.name&&d.type===e.fieldObj.type&&c--})},this)}return 0===c?!0:!1},_mergeActions:function(a,b){for(var c=0;c<a.length;c++)for(var d=0;d<b.length;d++)if(b[d].filter&&b[d].actionName===a[c].actionName){a[c]=k.clone(b[d]);break}return a},
_mergeFieldValidations:function(a){var b={};q.forEach(a,function(c){for(var d in c)b.hasOwnProperty(d)?b[d]=this._mergeActions(b[d],c[d]):b[d]=k.clone(c[d])},this);return b},_getLayersFieldValidations:function(a,b,c){q.forEach(b,function(d){d.featureLayer&&d.featureLayer.id===c&&d.fieldValidations&&(a||(a=[]),a.push(d.fieldValidations));d.relationshipInfos&&(a=this._getLayersFieldValidations(a,d.relationshipInfos,c))},this);return a},_getPartsInExpression:function(a,b){b&&q.forEach(b,k.hitch(this,
function(c){c.parts?this._getPartsInExpression(a,c.parts):a.push(c)}));return a},_createLayerDetails:function(a){var b;var c=null;this.filterInfo&&this.filterInfo.filter&&(b=this._getPartsInExpression([],this.filterInfo.filter.parts));c={};var d={};q.forEach(this._totalLayers,function(e){if(!e.isTable||e.isTable&&0<e.layerObject.relationships.length){var f=[];var h=!1;var g={};h=this._jimuLayerInfos.getLayerOrTableInfoById(e.id);g.allFields=h.layerObject.fields;h&&(h=this.editUtils.getConfigInfo(h,
{}),g.fieldInfos=h.fieldInfos);h=this._validateIfLayerHaveUsedFields(g.allFields,b);g&&g.fieldInfos&&(h||!b)&&(f=this._getLayersFieldValidations(f,this._configInfos,e.id),g.fieldValidations=this._mergeFieldValidations(f),c[e.id]={},d[e.id]={},q.forEach(g.fieldInfos,function(m){var p=U.getDefaultPortalFieldInfo(m);"esriFieldTypeGeometry"!==m.type&&"esriFieldTypeOID"!==m.type&&"esriFieldTypeBlob"!==m.type&&"esriFieldTypeGlobalID"!==m.type&&"esriFieldTypeRaster"!==m.type&&"esriFieldTypeXML"!==m.type&&
(d[e.id][m.name]=p.label,c[e.id][m.name]=a&&a[e.id]&&a[e.id][m.name]?a[e.id][m.name]:{Hide:!1,Required:!1,Disabled:!1},g.fieldValidations&&g.fieldValidations[m.name]?(p=this._getPriorites(g.fieldValidations[m.name]),c[e.id][m.name].Priority=p.Priority,c[e.id][m.name].ExistingExpressions=p.ExistingExpressions):(c[e.id][m.name].Priority=["Hide","Required","Disabled"],c[e.id][m.name].ExistingExpressions=[]))},this))}},this);return{layerDetails:c,fieldLabels:d}},_getPriorites:function(a){var b=[],c={};
q.forEach(a,function(d){b.push(d.actionName);d.filter&&d.filter.displaySQL&&(!d.filter.hasOwnProperty("smartActionGroupName")||!this.prevName||d.filter.hasOwnProperty("smartActionGroupName")&&this.prevName&&this.prevName!==d.filter.smartActionGroupName)&&(c[d.actionName]=d.filter.displaySQL)},this);return{Priority:b,ExistingExpressions:c}},_getVaidationForAction:function(a,b){var c=null;q.some(a,function(d){if(d.actionName===b&&d.filter&&d.filter.displaySQL)return c=d,!0});return c},_applysettingsToField:function(a,
b){var c=[];c=this._getLayersFieldValidations(c,this._configInfos,a);var d=b.appliedOn[a];for(var e=0;e<c.length;e++){var f=c[e];if(f)for(var h in d){for(var g=d[h],m=[],p=!1,r=0;r<g.Priority.length;r++){var x=g.Priority[r],v={};v.actionName=x;v.submitWhenHidden=!1;if(g[x])p=!0,"Hide"===x&&(v.submitWhenHidden=b.submitWhenHidden),v.expression=b.filterInfo.expression,v.filter=k.clone(b.filterInfo).filter,v.filter.smartActionGroupName=b.name,this._removeSettingsFromOtherGroups(b.name,a,h,x);else if(f&&
f[h]){var w=this._getVaidationForAction(f[h],x);w&&w.filter&&!g[x]&&w.filter.hasOwnProperty("smartActionGroupName")&&w.filter.smartActionGroupName===this.prevName?p=!0:w&&(v.expression=w.filter.expr,v.filter=w.filter)}m.push(v)}p&&(f||(f={}),f[h]=m)}}},_removePrevSettingsFromLayerFields:function(a){var b=[];if(b=this._getLayersFieldValidations(b,this._configInfos,a))for(var c=0;c<b.length;c++)if(a=b[c])for(var d in a)a&&a[d]&&q.forEach(a[d],function(e){e&&e.filter&&e.filter.hasOwnProperty("smartActionGroupName")&&
e.filter.smartActionGroupName===this.prevName&&(e.submitWhenHidden=!1,e.hasOwnProperty("expression")&&delete e.expression,delete e.filter)},this)},_removeSettingsFromOtherGroups:function(a,b,c,d){var e;if(this.existingGroups)for(var f in this.existingGroups)f!==a&&f!==this.prevName&&(e=this.existingGroups[f].appliedOn)&&e.hasOwnProperty(b)&&e[b].hasOwnProperty(c)&&e[b][c].hasOwnProperty(d)&&(e[b][c][d]=!1)},_applySettingsInLayer:function(a){for(var b in a.appliedOn){if(this._prevAppliedOnLayers&&
-1<this._prevAppliedOnLayers.indexOf(b)){var c=this._prevAppliedOnLayers.indexOf(b);this._prevAppliedOnLayers.splice(c,1)}this._applysettingsToField(b,a)}this.deleteGroup()},deleteGroup:function(){this._prevAppliedOnLayers&&q.forEach(this._prevAppliedOnLayers,function(a){this._removePrevSettingsFromLayerFields(a)},this)}})});