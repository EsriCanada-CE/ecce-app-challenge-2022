// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:jimu/dijit/templates/ShareOptions.html":'\x3cdiv class\x3d"shareOptions"\x3e\r\n  \x3cdiv class\x3d"shareOptionsWrapper"\x3e\r\n    \x3cdiv class\x3d"subTitle"\x3e${nls.shareMap}\x3c/div\x3e\r\n    \x3cdiv class\x3d"tips"\x3e${nls.shareMapTips}\x3c/div\x3e\r\n    \x3cdiv id\x3d"share-everyone-check_div" class\x3d"shareOptionItems" data-dojo-attach-point\x3d"share-everyone-check_div"\x3e\r\n      \x3cinput id\x3d"share-everyone-check" data-dojo-attach-point\x3d"shareEveryoneCheck" data-dojo-type\x3d"dijit/form/CheckBox" type\x3d"checkbox"/\x3e\r\n      \x3clabel id\x3d"share-everyone-check-label" for\x3d"share-everyone-check" class\x3d"labels"\x3e${nls.everyone}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv id\x3d"share-account-check_div" class\x3d"shareOptionItems displaynone" data-dojo-attach-point\x3d"share-account-check_div"\x3e\r\n      \x3cinput id\x3d"share-account-check" data-dojo-attach-point\x3d"share-account-check" data-dojo-type\x3d"dijit/form/CheckBox" type\x3d"checkbox"/\x3e\r\n      \x3clabel id\x3d"share-account-check-label" for\x3d"share-account-check" class\x3d"labels"\x3e\x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv id\x3d"share-groups-div" class\x3d"shareOptionItems displaynone" data-dojo-attach-point\x3d"share-groups-div"\x3e\r\n      \x3cinput id\x3d"share-groups-check" data-dojo-attach-point\x3d"shareGroupsCheck" data-dojo-type\x3d"dijit/form/CheckBox" type\x3d"checkbox"/\x3e\r\n      \x3clabel id\x3d"share-groups-check-label" for\x3d"share-groups-check" class\x3d"labels"\x3e${nls.theseGroups}\x3c/label\x3e\r\n      \x3cdiv class\x3d"share-groups-wrapper"\x3e\r\n        \x3cdiv data-dojo-type\x3d"dijit/layout/BorderContainer" gutters\x3d"false" design\x3d"headline" class\x3d"borderContainer"\x3e\r\n          \x3cdiv id\x3d"share-groups-list" class\x3d"share-groups-list" dojotype\x3d"dijit.layout.ContentPane" region\x3d"middle" splitter\x3d"false"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/_base/lang esri/lang dojo/_base/array dojo/dom-style dojo/on dojo/dom dojo/query dojo/topic dojo/text!./templates/ShareOptions.html jimu/shareUtils jimu/utils dijit/form/Textarea dijit/form/CheckBox dijit/layout/BorderContainer".split(" "),function(x,y,z,A,m,B,t,h,r,g,C,D,E,q,w){return x([y,z,A],{templateString:E,declaredClass:"jimu.dijit.ShareOptions",postMixInProperties:function(){this.inherited(arguments);
this.nls=window.jimuNls.shareOptions},constructor:function(a){this.portalUrl=a},startup:function(){q.getShareInfo(this.portalUrl).then(m.hitch(this,function(a){this._initShow(a);this.own(r(g.byId("share-everyone-check"),"change",m.hitch(this,this.clickEveryone)))}))},_initShow:function(a){this.shareInfo=a;this.shareInfo.items=[this.shareInfo.item];this.shareInfo.sortField="title";(this.shareInfo.userRole.isAdmin()||this.shareInfo._roleCanUpdateItems&&this.shareInfo._roleCanShare||this.shareInfo._roleCanShareOthersItems)&&
this.shareInfo.itemUser?this.showAdmin(this.shareInfo.user.groups,this.shareInfo.itemUser,this.shareInfo.adminGroups):this.shareInfo.user&&q._isUserOwnTheApp(this.shareInfo.user)?this.show(this.shareInfo.user.groups):this.shareInfo.user&&("public"===this.shareInfo.item.access||"shared"===this.shareInfo.item.access||"org"===this.shareInfo.item.access&&this.shareInfo.currentUser.orgId)?this.showGroups(this.shareInfo.user.groups):this.show(this.shareInfo.user.groups)},clear:function(){g.byId("share-groups-list").innerHTML=
"";g.byId("share-everyone-check").setAttribute("value",!1);g.byId("share-account-check").setAttribute("value",!1);g.byId("share-groups-check").setAttribute("value",!1);h.set(g.byId("share-everyone-check_div"),"display","none");h.set(g.byId("share-account-check_div"),"display","none");this.shareInfo.shareType="item"},showAdmin:function(a,c,b){this.shareInfo.itemUser=c;this.shareInfo.userGroups=t.filter(a||[],m.hitch(this,function(){return!this.shareInfo.item.capabilities||!this.shareInfo.item.capabilities.length}));
this.shareInfo.userGroups.sort(m.hitch(this,this._sortFunc));this.shareInfo.adminGroups=this.filterAdminGroups(b);this.checkForAccount("admin")},filterAdminGroups:function(a){if(a){for(var c=[],b=0;b<this.shareInfo.user.groups.length;b++)c.push(this.shareInfo.user.groups[b].id);var d=[];for(b=0;b<a.length;b++)-1!==t.indexOf(c,a[b].id)||a[b].capabilities&&a[b].capabilities.length||d.push(a[b]);return d}return null},showGroups:function(a){this.shareInfo.userGroups=this.filterOwnedGroups(a);this.shareInfo.userGroups&&
this.shareInfo.userGroups.sort(m.hitch(this,this._sortFunc));this.clear();this.shareInfo.shareType="group";this.checkForAccount("group")},filterOwnedGroups:function(a){if(a){for(var c=[],b,d=0;d<a.length;d++)b=a[d],!b.userMembership||"owner"!==b.userMembership.memberType&&"admin"!==b.userMembership.memberType||b.capabilities&&b.capabilities.length||c.push(b);return c}return null},show:function(a){this.shareInfo.userGroups=this.filterViewOnlyGroups(a);this.shareInfo.userGroups.sort(m.hitch(this,this._sortFunc));
this.checkForAccount("item")},filterViewOnlyGroups:function(a){if(a){for(var c=[],b,d=0;d<a.length;d++)b=a[d],b.capabilities&&b.capabilities.length||(!b.userMembership||"owner"!==b.userMembership.memberType&&"admin"!==b.userMembership.memberType)&&B.isDefined(b.isViewOnly)&&b.isViewOnly||c.push(b);return c}return null},checkForAccount:function(a){g.byId("share-account-check-label").innerHTML=w.sanitizeHTML(this.shareInfo.organization.name);!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToOrg||
this.shareInfo._roleCanShareOthersItemsToOrg||h.set(g.byId("share-account-check_div"),"display","none");this.clear();this.shareInfo.shareType=a;var c=this.shareInfo.items[0];this.shareInfo.lowestAccess=this.findLowestAccessLevel(this.shareInfo.items);q.getItemById(c,this.portalUrl).then(m.hitch(this,function(b){c.sharing=b.sharing;"admin"===this.shareInfo.shareType?q.getItemByUserAndItemId(c,this.shareInfo.itemUser,this.shareInfo.user,this.portalUrl).then(m.hitch(this,function(d){c.sharing=d.sharing;
this.buildAdminList()})):"group"===this.shareInfo.shareType?q.getItemsGroups(c,this.portalUrl).then(m.hitch(this,function(d){var e=[];if(d.admin)for(var f=0;f<d.admin.length;f++)e.push(d.admin[f].id);c.sharing={groups:e};this.buildGroupList()})):"item"===this.shareInfo.shareType&&q.getItemByUserAndItemId(c,this.shareInfo.itemUser,this.shareInfo.user,this.portalUrl).then(m.hitch(this,function(d){c.sharing=d.sharing;this.buildList()}))}))},buildAdminList:function(){var a,c;if(this.shareInfo.user.groups&&
0<this.shareInfo.user.groups.length||this.shareInfo.adminGroups&&0<this.shareInfo.adminGroups.length&&1<this.shareInfo.lowestAccess)!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToGroup||this.shareInfo._roleCanShareOthersItemsToGroup?h.set(g.byId("share-groups-div"),"display","block"):h.set(g.byId("share-groups-div"),"display","none");this.shareInfo.itemsAreSharedToGroups=",";var b=[],d=null,e=null;var f=[];for(a=0;a<this.shareInfo.items.length;a++)if(d=this.shareInfo.items[a],d.sharing)for(c=
0;c<d.sharing.groups.length;c++)if(e=d.sharing.groups[c],-1===this.shareInfo.itemsAreSharedToGroups.indexOf(","+e+","))this.shareInfo.itemsAreSharedToGroups+=e+",",f=[],f[0]=e,f[1]=1,b[b.length]=f;else for(f=0;f<b.length;f++)if(b[f][0]===e){b[f][1]+=1;break}d="";c=!1;for(a=0;a<this.shareInfo.user.groups.length;a++){e=this.shareInfo.user.groups[a];var k="";var l=this.shareInfo.items.length;if(-1<this.shareInfo.itemsAreSharedToGroups.indexOf(","+e.id+","))for(k="checked",c=!0,f=0;f<b.length;f++)if(b[f][0]===
e.id){l=b[f][1];break}d=l<this.shareInfo.items.length?d+('\x3cdiv id\x3d"img_group_'+a+"_div\" style\x3d\"display:block;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0' class\x3d'share-groups-table'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cimg id\x3d\"img_group_"+a+'" src\x3d"'+this._checkboxImgUrl+'" border\x3d"0"\x3e\x3c/td\x3e\x3ctd\x3e'+e.title+'\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e\x3cdiv id\x3d"group_'+a+"_div\" style\x3d\"display:none;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0' class\x3d'share-groups-table'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cinput id\x3d\"group_"+
a+'" '+k+' value\x3d"'+e.id+'" type\x3d"checkbox" class\x3d\'share-groups-input-checkbox\' dojoType\x3d"dijit.form.Checkbox" /\x3e\x3c/td\x3e\x3ctd\x3e\x3clabel for\x3d\'group_'+a+"' class\x3d'labels'\x3e"+e.title+"\x3c/label\x3e"):d+('\x3cdiv id\x3d"group_'+a+"_div\" style\x3d\"display:block;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0' class\x3d'share-groups-table'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cinput id\x3d\"group_"+a+'" '+k+' value\x3d"'+e.id+'" type\x3d"checkbox" class\x3d\'share-groups-input-checkbox\' dojoType\x3d"dijit.form.Checkbox" /\x3e\x3c/td\x3e\x3ctd\x3e\x3clabel for\x3d\'group_'+
a+"' class\x3d'labels'\x3e"+e.title+"\x3c/label\x3e");d=this._addOpenDataStr(e,d);d+="\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e"}if(this.shareInfo.adminGroups&&this.shareInfo.adminGroups.length&&1<this.shareInfo.lowestAccess)for(d+='\x3cdiv style\x3d"display:block;"\x3e\x3chr/\x3e\x3c/div\x3e',f=0;f<this.shareInfo.adminGroups.length;f++){e=this.shareInfo.adminGroups[f];k="";l=this.shareInfo.items.length;if(-1<this.shareInfo.itemsAreSharedToGroups.indexOf(","+e.id+",")){k="checked";c=!0;for(var n=
0;n<b.length;n++)if(b[n][0]===e.id){l=b[n][1];break}}d=l<this.shareInfo.items.length?d+('\x3cdiv id\x3d"img_group_'+(f+a)+"_div\" style\x3d\"display:block;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0' class\x3d'share-groups-table'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cimg id\x3d\"img_group_"+(f+a)+'" src\x3d"'+this._checkboxImgUrl+'" border\x3d"0"\x3e\x3c/td\x3e\x3ctd\x3e'+e.title+'\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e\x3cdiv id\x3d"group_'+(f+a)+"_div\" style\x3d\"display:none;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cinput id\x3d\"group_"+
(f+a)+'" '+k+' value\x3d"'+e.id+'" type\x3d"checkbox"class\x3d\'share-groups-input-checkbox\' dojoType\x3d"dijit.form.Checkbox" /\x3e\x3c/td\x3e\x3ctd\x3e\x3clabel for\x3d\'group_'+a+"'\x3e"+e.title+"\x3c/label\x3e"):d+('\x3cdiv id\x3d"group_'+(f+a)+"_div\" style\x3d\"display:block;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0' class\x3d'share-groups-table'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cinput id\x3d\"group_"+(f+a)+'" '+k+' value\x3d"'+e.id+'" type\x3d"checkbox"class\x3d\'share-groups-input-checkbox\' dojoType\x3d"dijit.form.Checkbox" /\x3e\x3c/td\x3e\x3ctd\x3e\x3clabel for\x3d\'group_'+
a+"'\x3e"+e.title+"\x3c/label\x3e");d=this._addOpenDataStr(e,d);d+="\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e"}this.own(r(g.byId("share-groups-list"),"click",m.hitch(this,this.checkGroup)));g.byId("share-groups-list").innerHTML=w.sanitizeHTML(d);if(this.shareInfo.organization){for(a=b=0;a<this.shareInfo.items.length;a++)this.shareInfo.items[a].sharing&&"org"===this.shareInfo.items[a].sharing.access&&b++;!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToOrg||this.shareInfo._roleCanShareOthersItemsToOrg?
(0===b?(dijit.byId("share-account-check").set("checked",!1),dijit.byId("share-account-check").set("disabled",!1)):b===this.shareInfo.items.length?(dijit.byId("share-account-check").set("checked",!0),dijit.byId("share-account-check").set("disabled",!1)):(dijit.byId("share-account-check").set("checked",!0),dijit.byId("share-account-check").set("disabled",!0)),h.set(g.byId("share-account-check_div"),"display","block")):(dijit.byId("share-account-check").set("disabled",!0),h.set(g.byId("share-account-check_div"),
"display","none"))}if(!this.shareInfo.organization||this.shareInfo._orgUserCanSharePublicOrOverride){for(a=b=0;a<this.shareInfo.items.length;a++)this.shareInfo.items[a].sharing&&"public"===this.shareInfo.items[a].sharing.access&&b++;0===b?(dijit.byId("share-everyone-check").set("checked",!1),h.set(g.byId("share-everyone-check_div"),"display","block")):(b===this.shareInfo.items.length?(dijit.byId("share-everyone-check").set("checked",!0),h.set(g.byId("share-everyone-check_div"),"display","block")):
dijit.byId("share-everyone-check").set("checked",!0),this.shareInfo.organization&&(!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToOrg||this.shareInfo._roleCanShareOthersItemsToOrg)&&(dijit.byId("share-account-check").set("checked",!0),dijit.byId("share-account-check").set("disabled",dijit.byId("share-everyone-check").get("checked"))));this.clickEveryone()}else dijit.byId("share-everyone-check").set("checked",!1),h.set(g.byId("share-everyone-check_div"),"display","none");c?dijit.byId("share-groups-check").set("checked",
!0):dijit.byId("share-groups-check").set("checked",!1);this.own(r(g.byId("share-groups-check"),"click",m.hitch(this,this.checkGroups)));this.shareInfo.organization&&(!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToOrg||this.shareInfo._roleCanShareOthersItemsToOrg)&&this.own(r(g.byId("share-account-check"),"click",m.hitch(this,this.clickAccount)))},buildList:function(){var a;!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToGroup||this.shareInfo._roleCanShareOthersItemsToGroup?
this.shareInfo.userGroups&&0<this.shareInfo.userGroups.length&&h.set(g.byId("share-groups-div"),"display","block"):h.set(g.byId("share-groups-div"),"display","none");this.shareInfo.itemsAreSharedToGroups=",";var c=[];for(a=0;a<this.shareInfo.items.length;a++){var b=this.shareInfo.items[a];if(b.sharing)for(var d=0;d<b.sharing.groups.length;d++){var e=b.sharing.groups[d];if(-1===this.shareInfo.itemsAreSharedToGroups.indexOf(","+e+",")){this.shareInfo.itemsAreSharedToGroups+=e+",";var f=[];f[0]=e;f[1]=
1;c[c.length]=f}else for(f=0;f<c.length;f++)if(c[f][0]===e){c[f][1]+=1;break}}}d="";b=!1;for(a=0;a<this.shareInfo.userGroups.length;a++){e=this.shareInfo.userGroups[a];var k="",l=this.shareInfo.items.length;if(-1<this.shareInfo.itemsAreSharedToGroups.indexOf(","+e.id+","))for(k="checked",b=!0,f=0;f<c.length;f++)if(c[f][0]===e.id){l=c[f][1];break}d=l<this.shareInfo.items.length?d+('\x3cdiv id\x3d"img_group_'+a+"_div\" style\x3d\"display:block;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0' class\x3d'share-groups-table'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cimg id\x3d\"img_group_"+
a+'" src\x3d"'+this._checkboxImgUrl+'" border\x3d"0"\x3e\x3c/td\x3e\x3ctd\x3e'+e.title+'\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e\x3cdiv id\x3d"group_'+a+"_div\" style\x3d\"display:none;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cinput id\x3d\"group_"+a+'" '+k+' value\x3d"'+e.id+'" type\x3d"checkbox"class\x3d\'share-groups-input-checkbox\' dojoType\x3d"dijit.form.Checkbox" /\x3e\x3c/td\x3e\x3ctd\x3e\x3clabel for\x3d\'group_'+
a+"'\x3e"+e.title+"\x3c/label\x3e"):d+('\x3cdiv id\x3d"group_'+a+"_div\" style\x3d\"display:block;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0' class\x3d'share-groups-table'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cinput id\x3d\"group_"+a+'" '+k+' value\x3d"'+e.id+'" type\x3d"checkbox"class\x3d\'share-groups-input-checkbox\' dojoType\x3d"dijit.form.Checkbox" /\x3e\x3c/td\x3e\x3ctd\x3e\x3clabel for\x3d\'group_'+a+"'\x3e"+e.title+"\x3c/label\x3e");d=this._addOpenDataStr(e,
d);d+="\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e"}this.own(r(g.byId("share-groups-list"),"click",m.hitch(this,this.checkGroup)));g.byId("share-groups-list").innerHTML=w.sanitizeHTML(d);if(this.shareInfo.organization&&this.shareInfo.userRole&&(!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToOrg||this.shareInfo._roleCanShareOthersItemsToOrg)){for(a=c=0;a<this.shareInfo.items.length;a++)this.shareInfo.items[a].sharing&&"org"===this.shareInfo.items[a].sharing.access&&c++;0===c?dijit.byId("share-account-check").set("checked",
!1):dijit.byId("share-account-check").set("checked",!0);h.set(g.byId("share-account-check_div"),"display","block")}if(!this.shareInfo.organization||this.shareInfo._orgUserCanSharePublicOrOverride){for(a=c=0;a<this.shareInfo.items.length;a++)this.shareInfo.items[a].sharing&&"public"===this.shareInfo.items[a].sharing.access&&c++;0===c?(dijit.byId("share-everyone-check").set("checked",!1),h.set(g.byId("share-everyone-check_div"),"display","block")):(c===this.shareInfo.items.length?(dijit.byId("share-everyone-check").set("checked",
!0),h.set(g.byId("share-everyone-check_div"),"display","block")):dijit.byId("share-everyone-check").set("checked",!0),this.shareInfo.organization&&this.shareInfo.userRole&&(!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToOrg||this.shareInfo._roleCanShareOthersItemsToOrg)&&(dijit.byId("share-account-check").set("checked",!0),h.set(g.byId("share-everyone-check_div"),"display","block")));this.clickEveryone()}else if(this.shareInfo.organization&&!this.shareInfo.organization.canSharePublic){for(a=
c=0;a<this.shareInfo.items.length;a++)this.shareInfo.items[a].sharing&&"public"===this.shareInfo.items[a].sharing.access&&c++;c?(dijit.byId("share-everyone-check").set("checked",!0),this.shareInfo.organization&&this.shareInfo.userRole&&(!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToOrg||this.shareInfo._roleCanShareOthersItemsToOrg)&&(dijit.byId("share-account-check").set("checked",!0),h.set(g.byId("share-account-check_div"),"display","block"))):(dijit.byId("share-everyone-check").set("checked",
!1),h.set(g.byId("share-everyone-check_div"),"display","none"))}else dijit.byId("share-everyone-check").set("checked",!1),h.set(g.byId("share-everyone-check_div"),"display","none");b?dijit.byId("share-groups-check").set("checked",!0):dijit.byId("share-groups-check").set("checked",!1);this.own(r(g.byId("share-groups-check"),"click",m.hitch(this,this.checkGroups)));this.shareInfo.organization&&(!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToOrg||this.shareInfo._roleCanShareOthersItemsToOrg)&&
this.own(r(g.byId("share-account-check"),"click",m.hitch(this,this.clickAccount)))},buildGroupList:function(){var a;!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToGroup||this.shareInfo._roleCanShareOthersItemsToGroup?0<this.shareInfo.userGroups.length&&h.set(g.byId("share-groups-div"),"display","block"):h.set(g.byId("share-groups-div"),"display","none");this.shareInfo.itemsAreSharedToGroups=",";var c=[];for(a=0;a<this.shareInfo.items.length;a++){var b=this.shareInfo.items[a];if(b.sharing)for(var d=
0;d<b.sharing.groups.length;d++){var e=b.sharing.groups[d];if(-1===this.shareInfo.itemsAreSharedToGroups.indexOf(","+e+",")){this.shareInfo.itemsAreSharedToGroups+=e+",";var f=[];f[0]=e;f[1]=1;c[c.length]=f}else for(f=0;f<c.length;f++)if(c[f][0]===e){c[f][1]+=1;break}}}b="";d=!1;for(a=0;a<this.shareInfo.userGroups.length;a++){e=this.shareInfo.userGroups[a];var k="";var l=this.shareInfo.items.length;if(-1<this.shareInfo.itemsAreSharedToGroups.indexOf(","+e.id+","))for(k="checked",d=!0,f=0;f<c.length;f++)if(c[f][0]===
e.id){l=c[f][1];break}b=l<this.shareInfo.items.length?b+('\x3cdiv id\x3d"img_group_'+a+"_div\" style\x3d\"display:block;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0' class\x3d'share-groups-table'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cimg id\x3d\"img_group_"+a+'" src\x3d"'+this._checkboxImgUrl+'" border\x3d"0"\x3e\x3c/td\x3e\x3ctd\x3e'+e.title+'\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e\x3cdiv id\x3d"group_'+a+"_div\"style\x3d\"display:none;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cinput id\x3d\"group_"+
a+'" '+k+' value\x3d"'+e.id+'" type\x3d"checkbox"class\x3d\'share-groups-input-checkbox\' dojoType\x3d"dijit.form.Checkbox" /\x3e\x3c/td\x3e\x3ctd\x3e\x3clabel for\x3d\''+e.id+"'\x3e"+e.title+"\x3c/label\x3e"):b+('\x3cdiv id\x3d"group_'+a+"_div\" style\x3d\"display:block;\"\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0' class\x3d'share-groups-table'\x3e\x3ctr\x3e\x3ctd width\x3d'17' valign\x3d'bottom'\x3e\x3cinput id\x3d\"group_"+a+'" '+k+' value\x3d"'+e.id+'" type\x3d"checkbox"class\x3d\'share-groups-input-checkbox\' dojoType\x3d"dijit.form.Checkbox" /\x3e\x3c/td\x3e\x3ctd\x3e\x3clabel for\x3d\'group_'+
a+"'\x3e"+e.title+"\x3c/label\x3e");b=this._addOpenDataStr(e,b);b+="\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e"}this.own(r(g.byId("share-groups-list"),"click",m.hitch(this,this.checkGroup)));g.byId("share-groups-list").innerHTML=w.sanitizeHTML(b);d?dijit.byId("share-groups-check").set("checked",!0):dijit.byId("share-groups-check").set("checked",!1);this.own(r(g.byId("share-groups-check"),"click",m.hitch(this,this.checkGroups)))},share:function(a){"group"===this.shareInfo.shareType?this.shareItemToGroups():
"admin"===this.shareInfo.shareType?this.shareItemAsAdmin(a):this.shareItem(a)},checkGroup:function(a){-1<a.target.id.indexOf("img_group_")&&(h.set(g.byId(a.target.id+"_div"),"display","none"),h.set(g.byId(a.target.id.substring(4,a.target.id.length)+"_div"),"display","block"));!0===a.target.checked&&-1<a.target.id.indexOf("group_")&&dijit.byId("share-groups-check").set("checked",!0)},checkGroups:function(){},clickEveryone:function(){var a=dijit.byId("share-everyone-check").get("checked");if(!0===a){var c=
g.byId("share-account-check_div");this.shareInfo.organization&&c&&"block"===h.get(c,"display")&&(dijit.byId("share-account-check").set("checked",!0),dijit.byId("share-account-check").set("disabled",!0))}else this.shareInfo.organization&&this.shareInfo.userRole&&(!this.shareInfo._isCustomRole||this.shareInfo._roleCanShareToOrg||this.shareInfo._roleCanShareOthersItemsToOrg)&&h.set(g.byId("share-account-check_div"),"display","block"),dijit.byId("share-account-check").set("disabled",!1);D.publish("ShareOptions/onClickEveryone",
a)},clickAccount:function(){!0===dijit.byId("share-account-check").get("checked")?(this.shareInfo._orgUserCanSharePublicOrOverride&&("none"===h.get(g.byId("share-everyone-check_div"),"display")&&h.set(g.byId("share-everyone-check_div"),"display","block"),dijit.byId("share-everyone-check").set("checked",!1)),dijit.byId("share-account-check").set("checked",!0)):dijit.byId("share-account-check").set("checked",!1)},shareItemAsAdmin:function(){var a="",c="";t.forEach(this.shareInfo.items,function(v){a+=
c+v.id;c=","});var b=!1,d=!1;g.byId("share-everyone-check_div")&&"block"===h.get(g.byId("share-everyone-check_div"),"display")&&(b=dijit.byId("share-everyone-check").get("checked"));g.byId("share-account-check_div")&&"block"===h.get(g.byId("share-account-check_div"),"display")&&(d=dijit.byId("share-account-check").get("checked"));var e="",f="",k="",l="",n=0;if(dijit.byId("share-groups-check").get("checked")){if(this.shareInfo.user.groups&&this.shareInfo.user.groups.length)for(n=0;n<this.shareInfo.user.groups.length;n++){var p=
this.shareInfo.user.groups[n].id;"block"===h.get(g.byId("group_"+n+"_div"),"display")&&(g.byId("group_"+n).checked?(e+=k+p,k=","):(f+=l+p,l=","))}if(this.shareInfo.adminGroups&&this.shareInfo.adminGroups.length&&1<this.shareInfo.lowestAccess)for(var u=0;u<this.shareInfo.adminGroups.length;u++)p=this.shareInfo.adminGroups[u].id,"block"===h.get(g.byId("group_"+(u+n)+"_div"),"display")&&(g.byId("group_"+(u+n)).checked?(e+=k+p,k=","):(f+=l+p,l=","))}else l="",this.shareInfo.user.groups&&this.shareInfo.user.groups.length&&
t.forEach(this.shareInfo.user.groups,function(v){f+=l+v.id;l=","}),this.shareInfo.adminGroups&&this.shareInfo.adminGroups.length&&1<this.shareInfo.lowestAccess&&t.forEach(this.shareInfo.adminGroups,function(v){f+=l+v.id;l=","});if(0<f.length)for(k={items:a,groups:f},n=0;n<this.shareInfo.items.length;n++)q._unshareItemById(k,this.shareInfo.items[n].id,this.portalUrl).then(m.hitch(this,this.unShareHandler_admin,this.shareInfo.items,a,e,b,d));else this.unShareHandler_admin(this.shareInfo.items,a,e,b,
d)},unShareHandler_admin:function(a,c,b,d,e){var f=a.length,k=function(){f--};c={items:c,groups:b,everyone:d,account:e};for(b=0;b<a.length;b++)d=a[b],this.shareInfo.user.shareItem(c,d.id,d.folderId).then(m.hitch(this,k))},shareItem:function(){var a="",c="";t.forEach(this.shareInfo.items,function(p){a+=c+p.id;c=","});var b=!1,d=!1;g.byId("share-everyone-check_div")&&"block"===h.get(g.byId("share-everyone-check_div"),"display")&&(b=dijit.byId("share-everyone-check").get("checked"));g.byId("share-account-check_div")&&
"block"===h.get(g.byId("share-account-check_div"),"display")&&(d=dijit.byId("share-account-check").get("checked"));var e=dijit.byId("share-groups-check").get("checked"),f="",k="",l="",n="";this.shareInfo.userGroups=this.shareInfo.user.group;e?this.shareInfo.userGroups&&this.shareInfo.userGroups.length&&t.forEach(this.shareInfo.userGroups,function(p,u){p=p.id;"block"===h.get(g.byId("group_"+u+"_div"),"display")&&(g.byId("group_"+u).checked?(f+=l+p,l=","):(k+=n+p,n=","))}):(n="",this.shareInfo.userGroups&&
this.shareInfo.userGroups.length&&t.forEach(this.shareInfo.userGroups,function(p){k+=n+p.id;n=","}));0<k.length?(e={items:a,groups:k},this.shareInfo.itemUser&&null!==this.shareInfo.itemUser?q.unshareItemsByUser(this.shareInfo.itemUser.username?this.shareInfo.itemUser.username:this.shareInfo.itemUser.email,e,this.portalUrl).then(m.hitch(this,this.unShareHandler_item,this.shareInfo.itemUser,a,f,b,d)):q.unshareItems(this.shareInfo.itemUser,e,this.portalUrl).then(m.hitch(this,this.unShareHandler_item,
this.shareInfo.itemUser,a,f,b,d))):this.unShareHandler_item(this.shareInfo.itemUser,a,f,b,d)},unShareHandler_item:function(a,c,b,d,e){c={items:c,groups:b,everyone:d,account:e};a&&null!==a?q.shareItemsByUser(a.username?a.username:a.email,c,this.portalUrl).then(m.hitch()):q.shareItems(a,c,this.portalUrl).then()},findLowestAccessLevel:function(a){for(var c=3,b,d,e=0;e<a.length;e++)(d=a[e].access)||(d="private"),1===d.length&&(d=d[0]),"public"===d?b=3:"org"===d?b=2:"shared"===d?b=1:"private"===d&&(b=
0),b<c&&(c=b);return c},_sortFunc:function(a,c){a=a[this.shareInfo.sortField].toLowerCase();c=c[this.shareInfo.sortField].toLowerCase();return null===a||null===c||a===c?0:a<c?-1:1},_addOpenDataStr:function(a,c){a.isOpenData&&!q.portal.isPortal&&(c+=" "+this.i18n.openData);return c},_clearGroupCheckboxes:function(){if(!1===dijit.byId("share-groups-check").get("checked"))for(var a=C(".share-groups-input-checkbox"),c=0,b=a.length;c<b;c++)a[c].setAttribute("value",!1)}})});