// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/_base/fx dojo/Deferred dojo/promise/all dojo/on dojo/topic dojo/when require ./utils ./WidgetManager".split(" "),function(u,f,l,e,m,d,v,n,p,g,q,w,x){var h,k=null;h=u(null,{constructor:function(){this.panels=[];this.widgetManager=x.getInstance();n(window,"resize",f.hitch(this,this.onWindowResize));this.activePanel=null;p.subscribe("/dnd/move/start",f.hitch(this,this._onMoveStart));p.subscribe("widgetActived",f.hitch(this,
this._onWidgetActived))},showPanel:function(a){var b=new d,c=this.getPanelById(a.id+"_panel");c?("closed"===c.state&&this.openPanel(c),b.resolve(c)):v({Panel:this._loadPanelClass(a.panel.uri),nls:this._loadThemeI18N(a.panel.uri)}).then(f.hitch(this,function(c){var e=a.id+"_panel",d=this.getPanelById(e),r={label:a.label,config:a,uri:a.panel.uri,position:a.panel.position,map:this.map,widgetManager:this.widgetManager,panelManager:this,id:e,gid:a.gid,nls:c.nls};f.mixin(r,a.panel.options);try{d=new c.Panel(r),
console.log("panel ["+e+"] created.")}catch(t){console.log("create panel error: "+t+", panelId: "+e);b.reject(t);return}d.setPosition(a.panel.position);w.setVerticalCenter(d.domNode);this.openPanel(d);d.domNode.addEventListener("click",f.hitch(this,this._onPanelClick,d),{capture:!0});b.resolve(d)}));return b},setMap:function(a){this.map=a;n(this.map,"resize",f.hitch(this,this.onMapResize))},closeOtherPanelsInTheSameGroup:function(a){if("string"===typeof a&&(a=this.getPanelById(a),!a))return;for(var b=
0;b<this.panels.length;b++)this.panels[b].gid===a.gid&&this.panels[b].id!==a.id&&this.closePanel(this.panels[b])},closeAllPanelsInGroup:function(a){for(var b=0;b<this.panels.length;b++)this.panels[b].gid===a&&this.closePanel(this.panels[b])},openPanel:function(a){var b=new d;if("string"===typeof a){if(a=this.getPanelById(a),!a)return b.reject(),b}else this.panels.some(function(b){return b.id===a.id})||this.panels.push(a);if(!a.started)try{a.started=!0,a.startup()}catch(c){console.error("fail to startup panel "+
a.id+". "+c.stack)}if("opened"===a.state)return this._activePanel(a),b.resolve(a),b;a.setState("opened");return this.playOpenPanelAnimation(a).then(f.hitch(this,function(){e.setStyle(a.domNode,"display","");a.onOpen();this._activePanel(a);return a}))},closePanel:function(a){var b=new d;return"string"===typeof a&&(a=this.getPanelById(a),!a)||"closed"===a.state?(b.resolve(),b):this.playClosePanelAnimation(a).then(f.hitch(this,function(){this.activePanel&&this.activePanel.id===a.id&&(this.activePanel.onDeActive(),
this.activePanel=null);a.setState("closed");a.onClose();a.domNode&&e.setStyle(a.domNode,"display","none")}))},minimizePanel:function(a){if("string"===typeof a&&(a=this.getPanelById(a),!a))return;"closed"===a.state&&this.openPanel(a);a.setWindowState("minimized");try{a.onMinimize()}catch(b){console.log(console.error("fail to minimize panel "+a.id+". "+b.stack))}},maximizePanel:function(a){if("string"===typeof a&&(a=this.getPanelById(a),!a))return;"closed"===a.state&&this.openPanel(a);a.setWindowState("maximized");
try{a.onMaximize()}catch(b){console.log(console.error("fail to maximize panel "+a.id+". "+b.stack))}},normalizePanel:function(a){if("string"===typeof a&&(a=this.getPanelById(a),!a))return;"closed"===a.state&&this.openPanel(a);a.setWindowState("normal");try{a.onNormalize()}catch(b){console.log(console.error("fail to noralize panel "+a.id+". "+b.stack))}},changeWindowStateTo:function(a,b){if("string"===typeof a&&(a=this.getPanelById(a),!a))return;"normal"===b?this.normalizePanel(a):"minimized"===b?
this.minimizePanel(a):"maximized"===b?this.maximizePanel(a):console.log("error state: "+b)},getPanelById:function(a){for(var b=0;b<this.panels.length;b++)if(this.panels[b].id===a)return this.panels[b]},onWindowResize:function(){for(var a=0;a<this.panels.length;a++)"closed"!==this.panels[a].state&&"map"!==this.panels[a].position.relativeTo&&this.panels[a].resize()},onMapResize:function(){for(var a=0;a<this.panels.length;a++)"closed"!==this.panels[a].state&&"map"===this.panels[a].position.relativeTo&&
this.panels[a].resize()},destroyPanel:function(a){if("string"===typeof a&&(a=this.getPanelById(a),!a))return;if(a.domNode){"closed"!==a.state&&this.closePanel(a);this._removePanel(a);try{a.destroy()}catch(b){console.log(console.error("fail to destroy panel "+a.id+". "+b.stack))}}},destroyAllPanels:function(){var a=l.map(this.panels,function(a){return a.id});l.forEach(a,function(a){this.destroyPanel(a)},this);this.panels=[]},playOpenPanelAnimation:function(a){if("string"===typeof a&&(a=this.getPanelById(a),
!a)||!a.openAnimation||0===a.animationDuration)return g();var b=new d;"string"===typeof a.openAnimation?"fadeIn"===a.openAnimation?(e.setStyle(a.domNode,{opacity:0,display:""}),m.fadeIn({node:a.domNode,duration:a.animationDuration,onEnd:function(){b.resolve()}}).play()):b.resolve():b.resolve();return b},playClosePanelAnimation:function(a){if("string"===typeof a&&(a=this.getPanelById(a),!a)||!a.closeAnimation||0===a.animationDuration)return g();var b=new d;"string"===typeof a.closeAnimation&&("fadeOut"===
a.closeAnimation?m.fadeOut({node:a.domNode,duration:a.animationDuration,onEnd:function(){b.resolve()}}).play():b.resolve());return b},getPositionOnMobile:function(a){if("string"===typeof a&&(a=this.getPanelById(a),!a))return{};var b=e.getMarginBox(window.jimuConfig.layoutId),c=b.h/2;a.titleHeight||(a.titleHeight=35);return"maximized"===a.windowState?{left:0,right:0,top:0,bottom:0,width:"auto",height:"auto",contentHeight:b.h-a.titleHeight,borderRadiusStyle:{borderTopLeftRadius:0,borderTopRightRadius:0,
borderBottomLeftRadius:0,borderBottomRightRadius:0}}:"minimized"===a.windowState?(c=0,this.panels.filter(function(b){return"minimized"===b.windowState&&"closed"!==b.state&&b.id!==a.id}).some(function(a){return 0===a._mobileBottom})&&(c=a.titleHeight),a._mobileBottom=c,b.h>b.w?{left:0,right:0,top:"auto",bottom:c,width:"auto",height:a.titleHeight,contentHeight:0,borderRadiusStyle:{borderTopLeftRadius:"4px",borderTopRightRadius:"4px",borderBottomLeftRadius:0,borderBottomRightRadius:0}}:{left:b.w-b.w/
2,right:0,top:"auto",bottom:c,width:b.w/2,height:a.titleHeight,contentHeight:b.h,borderRadiusStyle:window.isRTL?{borderTopLeftRadius:0,borderTopRightRadius:"4px",borderBottomLeftRadius:0,borderBottomRightRadius:"4px"}:{borderTopLeftRadius:"4px",borderTopRightRadius:0,borderBottomLeftRadius:"4px",borderBottomRightRadius:0}}):b.h>b.w?{left:0,right:0,top:c,bottom:0,width:"auto",height:"auto",contentHeight:b.h-c-a.titleHeight,borderRadiusStyle:{borderTopLeftRadius:"4px",borderTopRightRadius:"4px",borderBottomLeftRadius:0,
borderBottomRightRadius:0}}:{left:b.w-b.w/2,right:0,top:0,bottom:0,width:b.w/2,height:"auto",contentHeight:b.h-c-a.titleHeight,borderRadiusStyle:window.isRTL?{borderTopLeftRadius:0,borderTopRightRadius:"4px",borderBottomLeftRadius:0,borderBottomRightRadius:"4px"}:{borderTopLeftRadius:"4px",borderTopRightRadius:0,borderBottomLeftRadius:"4px",borderBottomRightRadius:0}}},_onPanelClick:function(a){this._activePanel(a)},activatePanel:function(a){"closed"!==a.state&&this._activePanel(a)},_activePanel:function(a){if(this.activePanel){if(this.activePanel.id===
a.id){this.activePanel.moveTopOnActive&&e.setStyle(this.activePanel.domNode,"zIndex",101);return}"active"===this.activePanel.state&&(this.activePanel.setState("opened"),e.setStyle(this.activePanel.domNode,"zIndex","undefined"!==typeof this.activePanel.position.zIndex?this.activePanel.position.zIndex:"auto"),this.activePanel.onDeActive())}var b=this.widgetManager.activeWidget;b&&"active"===b.state&&b.getPanel()!==a&&(b.setState("opened"),!1===b.inPanel&&e.setStyle(b.domNode,"zIndex","undefined"!==
typeof b.position.zIndex?b.position.zIndex:"auto"),b.onDeActive(),this.widgetManager.activeWidget=null);this.activePanel=a;"active"!==this.activePanel.state&&(this.activePanel.setState("active"),this.activePanel.moveTopOnActive&&e.setStyle(this.activePanel.domNode,"zIndex",101),this.activePanel.onActive())},_removePanel:function(a){var b=this.panels.indexOf(a);-1<b&&this.panels.splice(b,1);this.activePanel&&this.activePanel.id===a.id&&(this.activePanel=null)},_onMoveStart:function(a){l.forEach(this.panels,
function(b){b.domNode===a.node&&this._activePanel(b)},this)},_onWidgetActived:function(a){this.activePanel&&"active"===this.activePanel.state&&a.getPanel()!==this.activePanel&&(this.activePanel.setState("opened"),e.setStyle(this.activePanel.domNode,"zIndex","undefined"!==typeof this.activePanel.position.zIndex?this.activePanel.position.zIndex:"auto"),this.activePanel.onDeActive(),this.activePanel=null)},_loadPanelClass:function(a){var b=new d;q([a],function(a){b.resolve(a)});return b},_loadThemeI18N:function(a){var b=
new d;a.startWith("themes")?(a=a.split("/"),q(["dojo/i18n!"+(a[0]+"/"+a[1]+"/nls/strings")],function(a){b.resolve(a)})):b.resolve({});return b}});h.getInstance=function(){null===k&&(k=new h,window._panelManager=k);return k};return h});