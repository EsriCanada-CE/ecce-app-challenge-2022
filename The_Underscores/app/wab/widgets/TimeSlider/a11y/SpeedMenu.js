// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/on dojo/query dojo/_base/array dojo/_base/html dojo/keys dijit/a11yclick".split(" "),function(d,e,l,m,k,c,n){return{a11y_init:function(){k.setAttr(this.speedLabelNode,"role","button");k.setAttr(this.speedLabelNode,"aria-label",this.nls.speed)},a11y_setAriaLabel:function(a,b){k.setAttr(a,"aria-label",b)},a11y_focusOnSelectedItem:function(){var a=l(".check:not(.hide)",this.speedMenu)[0],b;a&&(a.parentElement||a.parentNode)&&(b=a.parentElement||a.parentNode);b&&b.focus&&
b.focus()},a11y_initEvents:function(){var a=l('[tabindex $\x3d"0"]',this.speedMenu);a&&(this.a11y_firstNode=a[0],this.a11y_lastNode=a[a.length-1]);this.own(e(this.speedLabelNode,n,d.hitch(this,function(a){this._onSpeedLabelClick(a)})));this.own(e(this.speedMenu,"keydown",d.hitch(this,function(a){a.keyCode===c.ESCAPE&&(a.stopPropagation(),a.preventDefault(),this._closeSpeedMenu(),this.speedLabelNode.focus())})));a&&a.length&&(this.a11y_firstNode=a[0],this.a11y_lastNode=a[length-1],m.forEach(a,d.hitch(this,
function(b,f){var g;g=0===f?a[a.length-1]:a[f-1];this.own(e(b,"keydown",d.hitch(this,function(a){a.stopPropagation();a.preventDefault();a.keyCode===c.UP_ARROW&&g&&g.focus&&g.focus()})));var h;h=f===a.length-1?a[0]:a[f+1];this.own(e(b,"keydown",d.hitch(this,function(a){a.stopPropagation();a.preventDefault();(a.keyCode===c.DOWN_ARROW||a.keyCode===c.TAB)&&h&&h.focus&&h.focus()})));this.own(e(b,"keydown",d.hitch(this,function(a){a.stopPropagation();a.preventDefault();if(a.keyCode===c.ENTER||a.keyCode===
c.SPACE)e.emit(b,"click",{cancelable:!1,bubbles:!0}),this.speedLabelNode.focus();a.keyCode===c.ESCAPE&&(this._closeSpeedMenu(),this.speedLabelNode.focus())})))})))}}});