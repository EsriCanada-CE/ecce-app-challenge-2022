// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/SmartEditor/setting/layerAndFieldsApplyOn.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"esriCTSearchFieldNode" data-dojo-attach-point \x3d "searchNode"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point \x3d "layerAndFieldsMainDiv"\x3e\x3c/div\x3e\r\n  \x3cdiv style\x3d"margin-top: 5px;" class\x3d"esriCTHidden" data-dojo-attach-point \x3d "domainFieldHintMsg"\x3e\r\n    \x3cdiv class\x3d"esriCTDomainlistDiv"\x3e*\x3c/div\x3e\r\n    \x3cdiv\x3e${nls.actionPage.domainListTitle}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/Evented dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/on jimu/BaseWidgetSetting dijit/_TemplatedMixin jimu/dijit/CheckBox jimu/utils dojo/dom-attr dojo/dom-class dojo/query dojo/string dojo/dom-style dijit/form/ValidationTextBox dojo/text!./layerAndFieldsApplyOn.html dijit/form/CheckBox dijit/registry".split(" "),function(z,A,l,p,q,v,B,C,w,D,u,r,g,x,E,F,G,y,H){return z([B,A,C],{baseClass:"jimu-widget-smartEditor-setting-layersAndFieldsApplyOn",templateString:G,
checkBoxNodes:null,layerCheckBoxNodes:null,showDomainFieldIndicator:!1,searchTextBox:null,defalutFieldInfos:[{actionName:"Intersection",enabled:!1,fields:[]},{actionName:"Address",enabled:!1},{actionName:"Coordinates",enabled:!1,coordinatesSystem:"MapSpatialReference",field:"x"},{actionName:"Preset",enabled:!1}],nlsActionName:{Intersection:"Intersection1",Address:"Address1",Coordinates:"Coordinates1",Preset:"Preset1"},postCreate:function(){this.inherited(arguments);this.nlsActionName={Intersection:this.nls.actionPage.copyAction.intersection,
Address:this.nls.actionPage.copyAction.address,Coordinates:this.nls.actionPage.copyAction.coordinates,Preset:this.nls.actionPage.copyAction.preset};this.layerCheckBoxNodes={};this.checkBoxNodes={};this._prevAppliedOnLayers=[];this.appliedOn&&(this._prevAppliedOnLayers=l.clone(Object.keys(this.appliedOn)));this._addSearchControl();this._addLayerAndFields(!0)},_addSearchControl:function(){this.searchTextBox=new F({trim:!0,placeHolder:this.nls.actionPage.searchPlaceHolder,intermediateChanges:!0},q.create("div",
{},this.searchNode));E.set(this.searchTextBox.domNode,"width","350px");this.own(v(this.searchTextBox,"change",l.hitch(this,this._searchTextUpdated)));var a=q.create("div",{"class":"esriCTExpandAllNode"},this.searchNode),b=q.create("div",{"class":"esriCTExpandAllNode"},this.searchNode);this._expandAllCheckBox=new y({"class":"switch-toggle",checked:!1},q.create("div",{},a));q.create("label",{innerHTML:this.nls.actionPage.expandAllLabel,"class":"esriCTDojoCheckBoxLabel"},a);this._checkAllFieldsCheckBox=
new y({checked:!1},q.create("div",{},b));q.create("label",{innerHTML:this.nls.actionPage.selectAllLabel,"class":"esriCTDojoCheckBoxLabel"},b);this.noFieldsDOM=q.create("div",{innerHTML:this.nls.actionPage.noValidFieldTypeMsg,"class":"esriCTHidden"},this.searchNode);this.own(v(this._expandAllCheckBox,"change",l.hitch(this,function(c){c?(c=g(".esriCTToggleLayerIcon.esriCTToggleLayerCollapsed.esriCTToggleLayerExpanded",this.layerAndFieldsMainDiv))&&0<c.length&&p.forEach(c,function(d){d.click()}):(c=
g(".esriCTToggleLayerIcon.esriCTToggleLayerCollapsed",this.layerAndFieldsMainDiv))&&0<c.length&&p.forEach(c,function(d){r.contains(d,"esriCTToggleLayerExpanded")||d.click()})})));this.own(v(this._checkAllFieldsCheckBox,"change",l.hitch(this,function(c){var d;var f=""!==this.searchTextBox.get("value")?g("div[searchstring*\x3d'"+this.searchTextBox.get("value").toLowerCase()+"']",this.layerAndFieldsMainDiv):g(".esriCTFieldsDiv",this.layerAndFieldsMainDiv);p.forEach(f,l.hitch(this,function(e){d=H.byNode(g(".esriCTFieldsCheckBox",
e)[0]);c?d.check(!0):d.uncheck(!0)}));this.emit("layerFieldsUpdated",!1)})))},_searchTextUpdated:function(a){var b=a.toLowerCase();if(""!==b){a=g("[searchstring]",this.layerAndFieldsMainDiv);b=g("div[searchstring*\x3d'"+b+"']",this.layerAndFieldsMainDiv);a.style("display","none");a.removeClass("esriCTNotFilteredBySearch");a.addClass("esriCTFilteredBySearch");b.style("display","");b.replaceClass("esriCTNotFilteredBySearch","esriCTFilteredBySearch");a=this.layerDetails;for(var c in a){var d;if(0<Object.keys(a[c]).length){b=
g("[layermaindivid \x3d '"+c+"']",this.layerAndFieldsMainDiv);var f=g("[layerid\x3d'"+c+"']",this.layerAndFieldsMainDiv);var e=!0;for(d=0;d<f.length;d++)if(r.contains(f[d],"esriCTNotFilteredBySearch")){e=!1;break}e?b.style("display","none"):b.style("display","")}}}else g("[layermaindivid]",this.layerAndFieldsMainDiv).style("display",""),g("[searchstring]",this.layerAndFieldsMainDiv).style("display",""),g("[searchstring]",this.layerAndFieldsMainDiv).removeClass("esriCTFilteredBySearch"),g("[searchstring]",
this.layerAndFieldsMainDiv).addClass("esriCTNotFilteredBySearch");this._handleHeaderCheckBoxState()},_addLayerAndFields:function(){var a=[],b=!1;var c=this.layerDetails;for(var d in c)if(0<Object.keys(c[d]).length){b=!0;var f=q.create("div",{"class":"esriCTLayerMainDiv"},this.layerAndFieldsMainDiv);u.set(f,"layermaindivid",d);this._createLayerName(f,d);f=this._getLayersFieldValues(d);this.appliedOn&&this.appliedOn.hasOwnProperty(d)&&0<this.appliedOn[d].length&&a.push(d);for(var e in c[d])if(c[d][e].editable){var m=
!1,h=q.create("div",{"class":"esriCTFieldsDiv  esriCTHidden"},this.layerAndFieldsMainDiv);u.set(h,"layerid",d);if(f&&f.hasOwnProperty(e)){var k;p.some(f[e],function(n){if(n.actionName===this.actionName&&n.enabled&&(!n.hasOwnProperty("attributeActionGroupName")||n.hasOwnProperty("attributeActionGroupName")&&n.attributeActionGroupName!==this.prevName))return k=n,m=!0},this);"Preset"!==this.actionName||!m||!k||k.hasOwnProperty("attributeActionGroupName")&&""!==k.attributeActionGroupName||(m=!1)}this._createFieldName(c[d][e],
d,h,m,k?k.attributeActionGroupName:null)}}0<a.length&&setTimeout(l.hitch(this,function(){this._applyPrevSettings();p.forEach(a,l.hitch(this,function(n){var t=g('[rootnodelayerid\x3d"'+n+'"]');t&&0<t.length&&r.contains(t[0],"esriCTToggleLayerExpanded")&&(g('[rootnodelayerid\x3d"'+n+'"]').toggleClass("esriCTToggleLayerExpanded"),g('[layerid\x3d"'+n+'"]').toggleClass("esriCTHidden"))}));this.emit("layerFieldsUpdated",!0)}),100);b?r.add(this.noFieldsDOM,"esriCTHidden"):r.remove(this.noFieldsDOM,"esriCTHidden")},
_createLayerName:function(a,b){var c;this.layerCheckBoxNodes[b]=[];this.checkBoxNodes[b]=[];if(this.layerInfos.getLayerOrTableInfoById(b)){var d=this.layerInfos.getLayerOrTableInfoById(b).layerObject.name;var f=q.create("div",{"class":"esriCTToggleLayerIcon esriCTToggleLayerCollapsed esriCTToggleLayerExpanded"},a);u.set(f,"rootnodelayerid",b);this.own(v(f,"click",l.hitch(this,function(e){var m=!0,h=g(".esriCTToggleLayerIcon.esriCTToggleLayerCollapsed",this.layerAndFieldsMainDiv);r.toggle(e.currentTarget,
"esriCTToggleLayerExpanded");c=u.get(e.currentTarget,"rootnodelayerid");g('[layerid\x3d"'+c+'"]').toggleClass("esriCTHidden");p.some(h,l.hitch(this,function(k){if(r.contains(k,"esriCTToggleLayerExpanded"))return m=!1,!0}));this._expandAllCheckBox.set("checked",m,!1)})));a=q.create("div",{"class":"esriCTLayercheckBox"},a);q.create("div",{innerHTML:d},a);d=new w({label:d,checked:!1});this.layerCheckBoxNodes[b].push(d);u.set(d.domNode,"LayerCheckBoxId",b);v(d.domNode,"click",l.hitch(this,this._parentNodeStateChanged))}},
_getLayersFieldValues:function(a){var b;p.some(this._configInfos,function(c){if(c.featureLayer&&c.featureLayer.id===a)return c.fieldValues?b=c.fieldValues:c.fieldValues={},!0},this);return b},_getAllLayersFieldValues:function(a,b,c){p.forEach(b,function(d){d.featureLayer&&d.featureLayer.id===c&&(d.fieldValues?a||(a=[]):d.fieldValues={},a.push(d.fieldValues));d.relationshipInfos&&(a=this._getAllLayersFieldValues(a,d.relationshipInfos,c))},this);return a},_createFieldName:function(a,b,c,d,f){var e=
D.getDefaultPortalFieldInfo(a);var m=x.substitute(f?this.nls.attributeActionsPage.alreadyAppliedActionMsg:this.nls.attributeActionsPage.alreadyAppliedActionLayerMsg,{action:this.nlsActionName[this.actionName]});f&&(f=x.substitute(this.nls.attributeActionsPage.appliedGroupName,{groupName:f}),m=m+" "+f);m=q.create("div",{"class":"esriCTExistingExpressionDiv esriCTVisibilityHidden",title:m},c);d&&r.remove(m,"esriCTVisibilityHidden");this.showDomainFieldIndicator&&(d=q.create("div",{"class":"esriCTDomainlistDiv esriCTVisibilityHidden",
innerHTML:"*",title:this.nls.actionPage.domainListTitle},c),a.domain&&a.domain.codedValues&&(r.remove(d,"esriCTVisibilityHidden"),r.remove(this.domainFieldHintMsg,"esriCTHidden")));a=q.create("div",{"class":"esriCTFieldsCheckBox"},c);a=new w({label:e.label,value:e.fieldName,checked:!1},a);this.checkBoxNodes[b].push(a);u.set(c,"searchstring",e.label.toLowerCase());u.set(a.domNode,"fieldsCheckBoxId",b);v(a.domNode,"click",l.hitch(this,this._childNodeStateChanged));v(a,"change",l.hitch(this,function(){this._handleHeaderCheckBoxState()}))},
_handleHeaderCheckBoxState:function(){var a=!0;var b=""!==this.searchTextBox.get("value")?g("[searchstring*\x3d'"+this.searchTextBox.get("value").toLowerCase()+"']",this.layerAndFieldsMainDiv):g(".esriCTFieldsDiv",this.layerAndFieldsMainDiv);0<b.length?p.some(b,l.hitch(this,function(c){c=g(".checkbox",c)[0];if(!r.contains(c,"jimu-icon-checked"))return a=!1,!0})):a=!1;a?this._checkAllFieldsCheckBox.set("checked",!0,!1):this._checkAllFieldsCheckBox.set("checked",!1,!1)},_parentNodeStateChanged:function(a){var b=
u.get(a.currentTarget,"LayerCheckBoxId");a=this.layerCheckBoxNodes[b];b=this.checkBoxNodes[b];var c=a[0].getValue();p.forEach(b,l.hitch(this,function(d){c?d.setValue(!0):d.setValue(!1)}))},_childNodeStateChanged:function(a){var b=u.get(a.currentTarget,"fieldsCheckBoxId");a=this.layerCheckBoxNodes[b];b=this.checkBoxNodes[b];var c=!0;p.some(b,l.hitch(this,function(d){if(!d.getValue())return c=!1,!0}));a[0].setValue(c);this.emit("layerFieldsUpdated",!1)},getOnlyCheckedFields:function(){var a={},b;for(b in this.checkBoxNodes){a[b]=
[];for(var c in this.checkBoxNodes[b])this.checkBoxNodes[b][c].checked&&a[b].push(this.checkBoxNodes[b][c].get("value"))}return a},getCheckedFields:function(a){var b={},c;for(c in this.checkBoxNodes){b[c]=[];for(var d in this.checkBoxNodes[c])this.checkBoxNodes[c][d].checked&&b[c].push(this.checkBoxNodes[c][d].get("value"))}this._applySettingsInLayer(a,b);return b},_removeSettingsFromOtherGroups:function(a,b,c){var d;if(this.existingGroups)for(var f in this.existingGroups)if(f!==a&&f!==this.prevName&&
(d=this.existingGroups[f].appliedOn)&&d.hasOwnProperty(b)&&-1<d[b].indexOf(c)){var e=d[b].indexOf(c);d[b].splice(e,1)}},_removePrevSettingsFromLayerFields:function(a){var b=[];if((b=this._getAllLayersFieldValues(b,this._configInfos,a))&&0<b.length)for(var c=0;c<b.length;c++)if(a=b[c])for(var d in a)for(var f=a[d],e=0;e<f.length;e++)f[e].actionName===this.actionName&&f[e].hasOwnProperty("attributeActionGroupName")&&f[e].attributeActionGroupName===this.prevName&&(f[e].enabled=!1,delete f[e].attributeActionGroupName,
"Intersection"===this.actionName?(f[e].fields=[],f[e].ignoreLayerRanking=!1):"Address"===this.actionName?delete f[e].field:"Coordinates"===this.actionName&&(f[e].coordinatesSystem="MapSpatialReference",f[e].field="x"))},_applysettingsToField:function(a,b,c){var d=[];if((d=this._getAllLayersFieldValues(d,this._configInfos,a))&&0<d.length){for(var f=0;f<d.length;f++){var e=d[f];if(this.appliedOn&&this.appliedOn.hasOwnProperty(a)){var m=this.appliedOn[a];m&&0<m.length&&p.forEach(m,function(h){if(-1===
b.indexOf(h)&&e.hasOwnProperty(h)){h=e[h];for(var k=0;k<h.length;k++)h[k].actionName===this.actionName&&(h[k].enabled=!1,delete h[k].attributeActionGroupName,"Intersection"===this.actionName?(h[k].fields=[],h[k].ignoreLayerRanking=!1):"Address"===this.actionName?delete h[k].field:"Coordinates"===this.actionName&&(h[k].coordinatesSystem="MapSpatialReference",h[k].field="x"))}},this)}}p.forEach(b,function(h){for(var k=0;k<d.length;k++){e=d[k];e.hasOwnProperty(h)||(e[h]=l.clone(this.defalutFieldInfos));
var n=e[h];for(var t=0;t<n.length;t++)n[t].actionName===this.actionName&&(c.attributeInfo&&(n[t]=l.mixin(n[t],c.attributeInfo)),n[t].enabled=!0,n[t].attributeActionGroupName=c.name,this._removeSettingsFromOtherGroups(c.name,a,h))}},this)}},_applySettingsInLayer:function(a,b){for(var c in b){if(this._prevAppliedOnLayers&&-1<this._prevAppliedOnLayers.indexOf(c)){var d=this._prevAppliedOnLayers.indexOf(c);this._prevAppliedOnLayers.splice(d,1)}this._applysettingsToField(c,b[c],a)}this.deleteGroup()},
deleteGroup:function(){this._prevAppliedOnLayers&&p.forEach(this._prevAppliedOnLayers,function(a){this._removePrevSettingsFromLayerFields(a)},this)},_applyPrevSettings:function(){if(this.appliedOn)for(var a in this.appliedOn)if(this.appliedOn.hasOwnProperty(a)){var b=this.appliedOn[a];if(b&&0<b.length){var c=this.layerCheckBoxNodes[a],d=!0;p.forEach(this.checkBoxNodes[a],l.hitch(this,function(e){-1<b.indexOf(e.value)?e.setValue(!0):e.getValue()||(d=!1)}));d&&c&&c[0]&&c[0].setValue(d)}}var f=!0;a=
g(".esriCTFieldsDiv",this.layerAndFieldsMainDiv);0<a.length&&p.some(a,l.hitch(this,function(e){e=g(".checkbox",e)[0];if(!r.contains(e,"jimu-icon-checked"))return f=!1,!0}));this._expandAllCheckBox.set("checked",f,!1)}})});