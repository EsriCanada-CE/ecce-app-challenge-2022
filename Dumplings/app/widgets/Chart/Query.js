// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred esri/tasks/query esri/tasks/QueryTask jimu/utils jimu/dijit/Message".split(" "),function(m,f,t,k,n,p,u,v){function r(){return{url:"",layerInfo:null,limit:1E4,spatialReference:null,queryType:-1,objectIdField:"",query:{maxRecordCount:1E3,where:"",geometry:null,relationship:n.SPATIAL_REL_INTERSECTS,outFields:["*"],nextIndex:0,allCount:0,objectIds:[],features:[]}}}m=m(null,{currentAttrs:null,constructor:function(a){this.currentAttrs=
r();this.currentAttrs.url=a.url;this.currentAttrs.layerInfo=a.layerInfo;this.currentAttrs.spatialReference=a.spatialReference;this.currentAttrs.query.where=a.where;this.currentAttrs.query.geometry=a.geometry;this.currentAttrs.query.maxRecordCount=a.layerInfo.maxRecordCount||1E3;this.currentAttrs.queryType=this._getQueryType(a.layerInfo);this.currentAttrs.objectIdField=u.getObjectIdField(a.layerInfo);a.relationship&&(this.currentAttrs.query.relationship=a.relationship);a.outFields&&(this.currentAttrs.query.outFields=
a.outFields);if(0<a.limit||a.limit>this.currentAttrs.query.maxRecordCount)this.currentAttrs.limit=a.limit},getFeatures:function(){var a=new k;a=this.currentAttrs.query.where;var b=this.currentAttrs.query.geometry,e=this.currentAttrs.query.relationship;return a=2===this.currentAttrs.queryType?this._getAllFeatures_SupportObjectIds(a,b,e):this._getAllFeatures_NotSupportObjectIds(a,b,e)},_getQueryType:function(a){var b=-1;return b=this._isSupportObjectIds(a)?2:3},_isSupportObjectIds:function(a){var b=
0;a.currentVersion&&(b=parseFloat(a.currentVersion));return 10<=b||a.hasOwnProperty("typeIdField")},_getAllFeatures_SupportObjectIds:function(a,b,e){return this._queryIds(a,b,e).then(f.hitch(this,function(c){if(!(c&&0<c.length))return this.currentAttrs.query.allCount=0,{status:1,count:0,features:[]};var d=c.length;this.currentAttrs.query.allCount=d;this.currentAttrs.query.objectIds=c;this.currentAttrs.query.nextIndex=0;return d>this.currentAttrs.query.maxRecordCount?this._isContinue().then(f.hitch(this,
function(g){return g?this._onResultsScroll_SupportObjectIds():{status:-1,count:d,features:[]}})):this._onResultsScroll_SupportObjectIds()}))},_isContinue:function(){var a=new k,b=window.jimuNls.queryFeatures,e=new v({message:b.tooManyFeaturesTip+" "+b.askForContinue,buttons:[{label:window.jimuNls.common.continue1,onClick:f.hitch(this,function(){a.resolve(!0);e.close()})},{label:window.jimuNls.common.cancel,onClick:f.hitch(this,function(){a.resolve(!1);e.close()})}]});return a},_onResultsScroll_SupportObjectIds:function(){var a=
new k,b=this.currentAttrs.query.objectIds,e=this.currentAttrs.query.allCount,c=this.currentAttrs.query.nextIndex,d=this.currentAttrs.query.maxRecordCount,g=this.currentAttrs.query.relationship;if(c>=e)return a.resolve({status:1,count:e,features:this.currentAttrs.query.features}),a;b=b.slice(c,c+Math.min(b.length-c,d));return 0===b.length?(a.resolve({status:1,count:e,features:this.currentAttrs.query.features}),a):this._queryByObjectIds(b,!0,g).then(f.hitch(this,function(h){h=h.features;this.currentAttrs.query.nextIndex+=
h.length;this.currentAttrs.query.features=this.currentAttrs.query.features.concat(h);return this._onResultsScroll_SupportObjectIds()}))},_getAllFeatures_NotSupportObjectIds:function(a,b,e){return this._doQuery_NotSupportObjectIds(a,b,e).then(f.hitch(this,function(c){return{status:1,count:c.length,features:c}}))},_doQuery_NotSupportObjectIds:function(a,b,e){var c=new k;this._query(a,b,!0,e).then(f.hitch(this,function(d){d=d.features;this.currentAttrs.query.allCount=d.length;c.resolve(d)}),f.hitch(this,
function(d){console.error(d);c.reject(d)}));return c},_getOutputFields:function(){return["*"]},_query:function(a,b,e,c){var d=new n;d.where=a;b&&(d.geometry=b);d.outSpatialReference=this.currentAttrs.spatialReference;d.returnGeometry=!!e;d.spatialRelationship=c;d.outFields=this._getOutputFields();return(new p(this.currentAttrs.url)).execute(d)},_queryIds:function(a,b,e){var c=new n;c.where=a;b&&(c.geometry=b);c.returnGeometry=!1;c.spatialRelationship=e;c.outSpatialReference=this.currentAttrs.spatialReference;
return(new p(this.currentAttrs.url)).executeForIds(c)},_queryByObjectIds:function(a,b,e){var c=new k,d=new n;d.returnGeometry=!!b;d.outSpatialReference=this.currentAttrs.spatialReference;d.outFields=this._getOutputFields();d.objectIds=a;d.spatialRelationship=e;(new p(this.currentAttrs.url)).execute(d).then(f.hitch(this,function(g){c.resolve(g)}),f.hitch(this,function(g){if(400===g.code){var h=this.currentAttrs.objectIdField,q="",w=a.length;t.forEach(a,f.hitch(this,function(l,x){q+=h+" \x3d "+l;x!==
w-1&&(q+=" OR ")}));this._query(q,null,b,e).then(f.hitch(this,function(l){c.resolve(l)}),f.hitch(this,function(l){c.reject(l)}))}else c.reject(g)}));return c}});m.getCleanCurrentAttrsTemplate=r;return m});