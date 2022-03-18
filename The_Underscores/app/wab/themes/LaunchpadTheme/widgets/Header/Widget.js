// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"themes/LaunchpadTheme/widgets/Header/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/LaunchpadTheme/widgets/Header/Widget.html":'\x3cdiv role\x3d"title" data-a11y-label-by\x3d"launchpad-label launchpad-title launchpad-subtitle"\x3e\r\n  \x3cdiv class\x3d"logo" data-dojo-attach-point\x3d"logoWrapperNode"\x3e\r\n    \x3ca role\x3d"link" data-dojo-attach-point\x3d"logoLinkNode" target\x3d"_blank"\x3e\r\n     \x3cimg data-dojo-attach-point\x3d"logoNode"\x3e\r\n    \x3c/a\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"titles" data-dojo-attach-point\x3d"titlesNode"\x3e\r\n    \x3cdiv class\x3d"screen-readers-only" data-a11y-label-id\x3d"launchpad-label"\x3e${label}\x3c/div\x3e\r\n    \x3ch1 class\x3d"jimu-title" data-dojo-attach-point\x3d"titleNode" data-a11y-label-id\x3d"launchpad-title"\x3e\x3c/h1\x3e\r\n    \x3ch2 class\x3d"jimu-subtitle" data-dojo-attach-point\x3d"subtitleNode" data-a11y-label-id\x3d"launchpad-subtitle"\x3e\x3c/h2\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"search-bar" data-dojo-attach-point\x3d"searchNode"\x3e\r\n  \x3c/div\x3e\r\n  \x3cspan role\x3d\'button\' aria-haspopup\x3d\'true\' class\x3d"links-icon" data-dojo-attach-point\x3d"linksIconNode"\x3e\r\n    \x3cimg data-dojo-attach-point\x3d"linksIconImageNode"\x3e\r\n    \x3cdiv class\x3d"links hidden" data-dojo-attach-point\x3d"linksNode"\x3e\r\n      \x3cspan class\x3d"dynamic-section" data-dojo-attach-point\x3d"dynamicLinksNode"\x3e\x3c/span\x3e\r\n      \x3ca role\x3d"link" class\x3d"link aboutLink" href\x3d"#" data-dojo-attach-point\x3d"aboutNode" data-dojo-attach-event\x3d"onclick:_onAboutClick,onkeydown:_onAboutKeydown"\x3e${nls.about}\x3c/a\x3e\r\n    \x3c/div\x3e\r\n  \x3c/span\x3e\r\n\x3c/div\x3e',
"url:themes/LaunchpadTheme/widgets/Header/css/style.css":".jimu-widget-header {display: flex; max-width: calc(100% - 300px);}.jimu-widget-header .hide-logo{display: none;}.jimu-widget-header .logo {margin-right: auto; padding: 0 10px; margin-top: -2px; flex: 0 0 auto;}.jimu-widget-header .logo img {margin: 0 auto; max-height: 40px;}.jimu-widget-header .titles{height: 100%; min-width: 10px; display: flex;}.jimu-widget-header .jimu-title{padding: 0 5px; text-align: center; height: 100%; margin: 0;}.jimu-widget-header .jimu-subtitle{padding: 0 5px; text-align: center; height: 100%; margin: 0;}.jimu-widget-header .search-bar {width: auto; margin-left: auto; height: 100%; flex: 0 0 auto;}.jimu-widget-header .search-bar .jimu-widget-search {margin: 8px 0 !important;}.jimu-widget-header .links{background-color: #fff; position: absolute;}.jimu-widget-header .links.hidden {display: none;}.jimu-widget-header .links-icon{margin: 10px; padding: 5px; cursor: pointer; flex: 0 0 auto;}.jimu-widget-header .links-icon img{width: 16px;}.jimu-widget-header .links .link{height: 100%; display: block;}.jimu-rtl .jimu-widget-header .links .link{margin-left: auto;}.jimu-widget-header .signin-section .link{color: #d9dde0;}.jimu-widget-header .group-icon-node{float: right; cursor: pointer; opacity: 0.4; text-align: center; border-right: 1px solid #323e4f;}.jimu-widget-header .group-icon-node:first-child{border: none;}.jimu-widget-header .group-icon-node:hover{opacity: 1;}.jimu-widget-header .group-icon-node.jimu-state-selected{background-color: #697a8c; opacity: 1; border: none; border-top: 2px solid #8491a1;}.popup-links{background-color: #252824;}.popup-links .popup-title{}.popup-links .title{color:#fff; text-align: center; font-size: 24px;}.popup-links .line{width: 100%; height: 4px; border-top: 1px solid #14161a; border-bottom: 1px solid #393c40;}.popup-links .link-section{width: 100%; height: 66px; background-color: #252824;}.popup-links a{color: #6d7685; margin-left: 20px; font-size: 14px; height: 100%; width: 95%; display: inline-block;}.jimu-rtl .popup-links a {margin-right: 20px; margin-left: auto;}.popup-links .link-section.signin a{color: #d9dde0;}",
"*now":function(m){m(['dojo/i18n!*preload*themes/LaunchpadTheme/widgets/Header/nls/Widget*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/_base/window dojo/window dojo/query dojo/on dojo/keys dojo/Deferred jimu/BaseWidget jimu/WidgetManager jimu/LayoutManager jimu/utils dojo/NodeList-dom dojo/NodeList-manipulate".split(" "),function(m,d,n,b,k,p,l,h,f,q,r,t,u,g){return m([r],{baseClass:"jimu-widget-header jimu-main-background",name:"Header",switchableElements:{},_boxSizes:null,_searchWidgetId:"",moveTopOnActive:!1,postMixInProperties:function(){this.inherited(arguments);
this.isRenderIdForAttrs=!0},constructor:function(){this.height=this.getHeaderHeight()+"px";this.widgetManager=t.getInstance();this.LayoutManager=u.getInstance()},postCreate:function(){this.inherited(arguments);this._boxSizes={};this.own(h(this.widgetManager,"widget-created",d.hitch(this,function(a){"Search"===a.name&&this._initSearchWidgetAfterCreated()})));this.own(h(this.widgetManager,"widget-destroyed",d.hitch(this,function(a){a&&a===this._searchWidgetId&&(this._detachSearchWidget(),this.resize())})));
this._initSearchWidgetAfterCreated();var a=this.getLogoWidth()+"px";this.position&&this.position.height&&(this.height=this.position.height);this.switchableElements.logo=l(".logo",this.domNode);this.switchableElements.title=l(".jimu-title",this.domNode);this.switchableElements.subtitle=l(".jimu-subtitle",this.domNode);this._handleTitleColorAndLogoLink(this.appConfig);this.switchableElements.logo.style({height:a});this._setElementsSize()},_initSearchWidgetAfterCreated:function(){if(!this._isInitSearchWidget||
"config"===this.appConfig.mode){var a=this._getSearchWidgetInHeader();a&&(b.setAttr(a.domNode,"tabindex",this.tabIndex),b.addClass(a.domNode,"has-transition"),a&&!a.searchDijit?this._searchDijitDomReady(a).then(d.hitch(this,function(){this.resize()})):this.resize(),this._isInitSearchWidget=!0)}},_attachSearchWidget:function(a){a||(a=this._getSearchWidgetInHeader());a&&!b.isDescendant(a.domNode,this.searchNode)&&(a.domNode.style.position="relative",a.domNode.style.left="auto",a.domNode.style.right=
"auto",a.domNode.style.top="auto",a.domNode.style.bottom="auto",a.domNode.style.width="280px",b.place(a.domNode,this.searchNode),this._boxSizes.searchWidgetBox={w:280,h:30})},_detachSearchWidget:function(){b.empty(this.searchNode);this._boxSizes.searchWidgetBox={w:0,h:0}},_getSearchWidgetInHeader:function(){var a,b=this.widgetManager.getWidgetsByName("Search");n.some(b,d.hitch(this,function(b){if(!b.closeable&&b.isOnScreen)return a=b,this._searchWidgetId=b.id,!0}));return a},startup:function(){this.inherited(arguments);
this.appConfig&&this.appConfig.logo?(this.logoNode.src=this.appConfig.logo,this.own(h(this.logoNode,"load",d.hitch(this,function(){this._boxSizes.logoBox=b.getMarginSize(this.logoWrapperNode);this.resize()}))),b.removeClass(this.logoWrapperNode,"hide-logo")):(this.logoNode.src="",b.addClass(this.logoWrapperNode,"hide-logo"));this.switchableElements.title.innerHTML(g.sanitizeHTML(this.appConfig.title?this.appConfig.title:""));this.switchableElements.subtitle.innerHTML(g.sanitizeHTML(this.appConfig.subtitle?
this.appConfig.subtitle:""));this._createDynamicLinks(this.appConfig.links);this.appConfig.about?b.setStyle(this.aboutNode,"display",""):b.setStyle(this.aboutNode,"display","none");this._determineLinksButtonVisibility(this.appConfig.links)},_searchDijitDomReady:function(a){var b=0,e=new q,v=setInterval(d.hitch(this,function(){5E3<b||a.searchDijit?(clearInterval(v),e.resolve()):b+=200}),200);return e},onAppConfigChanged:function(a,b,e){switch(b){case "attributeChange":this._onAttributeChange(a,e);
this._updateBoxsizes();this.resize();break;case "widgetChange":"Search"===e.name&&this.resize();break;default:return}this.appConfig=a},_onAttributeChange:function(a,c){"title"in c&&c.title!==this.appConfig.title&&(this.switchableElements.title.innerHTML(g.sanitizeHTML(c.title)),b.setStyle(this.titleNode,{display:c.title?"":"none"}));"subtitle"in c&&c.subtitle!==this.appConfig.subtitle&&(this.switchableElements.subtitle.innerHTML(g.sanitizeHTML(c.subtitle)),b.setStyle(this.subtitleNode,{display:c.subtitle?
"":"none"}));"none"===b.getStyle(this.titleNode,"display")&&"none"===b.getStyle(this.subtitleNode,"display")||b.setStyle(this.titlesNode,"width","1000px");"logo"in c&&c.logo!==this.appConfig.logo&&(c.logo?(b.setAttr(this.logoNode,"src",c.logo),b.removeClass(this.logoWrapperNode,"hide-logo")):(b.removeAttr(this.logoNode,"src"),b.addClass(this.logoWrapperNode,"hide-logo")));"links"in c&&(this._createDynamicLinks(c.links),this._determineLinksButtonVisibility(c.links));this._handleTitleColorAndLogoLink(a)},
_handleTitleColorAndLogoLink:function(a){a.titleColor?b.setStyle(this.switchableElements.title,"color",a.titleColor):b.setStyle(this.switchableElements.title,"color","");g.themesHeaderLogoA11y(a,this.tabIndex,{link:this.logoLinkNode,logo:this.logoNode,icon:this.logoNode})},_setElementsSize:function(){b.setStyle(this.logoNode,{height:"30px",marginTop:(this.getLogoWidth()-30)/2+"px"});b.setStyle(this.titleNode,{lineHeight:this.height+"px"});b.setStyle(this.subtitleNode,{lineHeight:this.height+"px"})},
_createDynamicLinks:function(a){b.empty(this.dynamicLinksNode);n.forEach(a,function(a){b.create("a",{role:"link",tabindex:"0",href:a.url,target:"_blank",rel:"noopener noreferrer",innerHTML:g.sanitizeHTML(a.label),"class":"link"},this.dynamicLinksNode)},this)},_determineLinksButtonVisibility:function(a){a.length||this.appConfig.about?this._showLinksIcon():this._hideLinksIcon()},_showLinksIcon:function(){b.setAttr(this.linksIconNode,"tabindex",this.tabIndex);this._firstLink=g.getFocusNodesInDom(this.linksNode)[0];
var a=l("a",this.dynamicLinksNode);this._lastDynamicLink=a[a.length-1];b.setAttr(this.linksIconImageNode,"src",this.folderUrl+"images/link_icon.png");b.setStyle(this.linksIconNode,"display","block");b.addClass(k.body(),"header-has-links");this.linksIconClicked||(this.linksIconClicked=h(this.linksIconNode,"click",d.hitch(this,function(){this._toggleLinksMenu()})),h(this.linksIconNode,"keydown",d.hitch(this,function(a){var c=a.target;if(b.hasClass(c,"links-icon"))a.keyCode===f.ENTER&&(this._toggleLinksMenu(),
this._firstLink.focus());else if(a.keyCode===f.ESCAPE||a.keyCode===f.TAB)a.preventDefault(),a.stopPropagation(),this._toggleLinksMenu(),this.linksIconNode.focus();else{var d;a.keyCode===f.DOWN_ARROW?(d=c.nextElementSibling)||(d=this.appConfig.about?this.aboutNode:c):a.keyCode===f.UP_ARROW?d=c===this._firstLink?this._firstLink:c===this.aboutNode?this._lastDynamicLink:c.previousSibling:a.keyCode===f.HOME?d=this._firstLink:a.keyCode===f.END&&(d=this.appConfig.about?this.aboutNode:this._lastDynamicLink);
d&&d.focus()}})))},_hideLinksIcon:function(){b.setStyle(this.linksIconNode,"display","none");b.removeClass(k.body(),"header-has-links")},_toggleLinksMenu:function(){b.toggleClass(this.linksNode,"hidden")},_onAboutClick:function(){this.widgetManager.loadWidget({id:this.appConfig.about+"_1",uri:this.appConfig.about,label:"About"}).then(d.hitch(this,function(a){b.place(a.domNode,jimuConfig.layoutId);a.startup()}))},_onAboutKeydown:function(a){a.keyCode===f.ENTER&&this._onAboutClick()},_updateBoxsizes:function(){var a=
this._boxSizes.logoBox,a="none"!==b.getStyle(this.logoWrapperNode,"display")?b.getMarginSize(this.logoWrapperNode):{w:0,h:0};this._boxSizes.logoBox=a;a=this._boxSizes.titleBox;"none"!==b.getStyle(this.titleNode,"display")&&this.switchableElements.title.innerHTML()&&(a=b.getMarginSize(this.titleNode));a||(a={w:0,h:0});this._boxSizes.titleBox=a;a=this._boxSizes.subTitleBox;"none"!==b.getStyle(this.subtitleNode,"display")&&this.switchableElements.subtitle.innerHTML()&&(a=b.getMarginSize(this.subtitleNode));
a||(a={w:0,h:0});this._boxSizes.subTitleBox=a;b.setStyle(this.titlesNode,"width","auto");a=this._boxSizes.LinksIconBox;a="none"!==this.linksIconNode.style.display?b.getMarginSize(this.linksIconNode):{w:0,h:0};this._boxSizes.LinksIconBox=a;this._boxSizes.searchWidgetBox||(this._boxSizes.searchWidgetBox={w:0,h:0})},setPosition:function(a,c){this.position=a;var e=g.getPositionStyle(this.position);e.position="absolute";e.width="auto";c||(c="map"===a.relativeTo?this.map.id:window.jimuConfig.layoutId);
b.place(this.domNode,c);b.setStyle(this.domNode,e);this.started&&setTimeout(d.hitch(this,this.resize),200)},resize:function(){if(this._started){this._boxSizes.logoBox&&this._boxSizes.titleBox&&this._boxSizes.subTitleBox&&this._boxSizes.searchWidgetBox&&this._boxSizes.LinksIconBox||this._updateBoxsizes();var a=this._boxSizes;if(window.appInfo.isRunInMobile)b.addClass(k.body(),"is-mobile"),this._detachSearchWidget();else{b.removeClass(k.body(),"is-mobile");this._attachSearchWidget();var c=p.getBox(),
d=a.logoBox.w+a.titleBox.w+a.subTitleBox.w+a.searchWidgetBox.w+a.LinksIconBox.w;0===d?b.setStyle(this.domNode,"visibility","hidden"):(b.setStyle(this.domNode,"visibility","visible"),d===a.logoBox.w||d===a.LinksIconBox.w?b.setStyle(this.titlesNode,"display","none"):b.setStyle(this.titlesNode,"display","flex"),15+d+300<c.w?(this.titleNode.style.display="block",this.subtitleNode.style.display="block"):(this.titleNode.style.display=15+d-a.subTitleBox.w+300<c.w?"block":"none",this.subtitleNode.style.display=
"none"))}}},getHeaderHeight:function(){return 44},getLogoWidth:function(){return 50},getLinksWidth:function(){return 36},destroy:function(){this.inherited(arguments)}})});