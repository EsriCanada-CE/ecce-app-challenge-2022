// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","./SettingDropdown","./SettingInputLabeled","./SettingObject"],function(b,d,e,c){return b(c,{_inputControl:null,_inputModifier:null,constructor:function(a,f,b,c,g,h,k,l,m,n,p,q,r){this._inputModifier=new d(null,n,p,q);this._inputControl=new e(null,f,b,c,g,h,k,l,m,this._inputModifier,r);this._mainDiv=this._inputControl.div()},setValue:function(a){this._inputControl&&this._inputControl.setValue(a)},setModifier:function(a){this._inputModifier&&this._inputModifier.setValue(a)},
getValue:function(){return this._inputControl?this._inputControl.getValue():null},getModifier:function(){return this._inputModifier?this._inputModifier.getValue():null},setConfig:function(){this._inputControl&&this._config&&this.setValue(this._config)},getConfig:function(a,b){this._inputControl&&(this._config=this.getValue())}})});