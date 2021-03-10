var __reflect=this&&this.__reflect||function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n},__extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);n.prototype=t.prototype,e.prototype=new n},__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{l(r.next(e))}catch(t){o(t)}}function s(e){try{l(r["throw"](e))}catch(t){o(t)}}function l(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}l((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(i)throw new TypeError("Generator is already executing.");for(;l;)try{if(i=1,o&&(a=o[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(o,n[1])).done)return a;switch(o=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return l.label++,{value:n[1],done:!1};case 5:l.label++,o=n[1],n=[0];continue;case 7:n=l.ops.pop(),l.trys.pop();continue;default:if(a=l.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){l=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){l.label=n[1];break}if(6===n[0]&&l.label<a[1]){l.label=a[1],a=n;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(n);break}a[2]&&l.ops.pop(),l.trys.pop();continue}n=t.call(e,l)}catch(r){n=[6,r],o=0}finally{i=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,o,a,s,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,n){function r(r){t.call(n,r,e)}if(RES.hasRes(e)){var i=RES.getRes(e);i?r(i):RES.getResAsync(e,r,this)}else RES.getResByUrl(e,r,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var GotchaPage=function(e){function t(){var t=e.call(this)||this;return t.skinName="skins.gotchaPageSkin",t}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),this.gotchaBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.gotchatBtnOnClick,this)},t.prototype.gotchatBtnOnClick=function(){console.log("gotchatBtnOnClick");var e=new ResultPage;this.addChild(e)},t}(eui.Component);__reflect(GotchaPage.prototype,"GotchaPage");var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),e=new GotchaPage,this.addChild(e),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,this.loadTheme()];case 2:return n.sent(),[4,RES.loadGroup("preload",0,e)];case 3:return n.sent(),this.stage.removeChild(e),[3,5];case 4:return t=n.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,n){var r=new eui.Theme("resource/default.thm.json",e.stage);r.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){console.log("createGameScene");var e=this.createBitmapByName("bg_jpg");this.addChild(e);var t=this.stage.stageWidth,n=this.stage.stageHeight;e.width=t,e.height=n;var r=new egret.Shape;r.graphics.beginFill(0,.5),r.graphics.drawRect(0,0,t,172),r.graphics.endFill(),r.y=33,this.addChild(r);var i=this.createBitmapByName("egret_icon_png");this.addChild(i),i.x=26,i.y=33;var o=new egret.Shape;o.graphics.lineStyle(2,16777215),o.graphics.moveTo(0,0),o.graphics.lineTo(0,117),o.graphics.endFill(),o.x=172,o.y=61,this.addChild(o);var a=new egret.TextField;a.textColor=16777215,a.width=t-172,a.textAlign="center",a.text="Hello Egret",a.size=24,a.x=172,a.y=80,this.addChild(a);var s=new egret.TextField;this.addChild(s),s.alpha=0,s.width=t-172,s.textAlign=egret.HorizontalAlign.CENTER,s.size=24,s.textColor=16777215,s.x=172,s.y=135,this.textfield=s;var l=new eui.Button;l.label="Click!",l.horizontalCenter=0,l.verticalCenter=0,this.addChild(l),l.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onButtonClick,this)},t.prototype.createBitmapByName=function(e){var t=new egret.Bitmap,n=RES.getRes(e);return t.texture=n,t},t.prototype.startAnimation=function(e){var t=this,n=new egret.HtmlTextParser,r=e.map(function(e){return n.parse(e)}),i=this.textfield,o=-1,a=function(){o++,o>=r.length&&(o=0);var e=r[o];i.textFlow=e;var n=egret.Tween.get(i);n.to({alpha:1},200),n.wait(2e3),n.to({alpha:0},200),n.call(a,t)};a()},t.prototype.onButtonClick=function(e){var t=new eui.Panel;t.title="Title",t.horizontalCenter=0,t.verticalCenter=0,this.addChild(t)},t}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ResultPage=function(e){function t(){var t=e.call(this)||this;return t.skinName="skins.resultPageSkin",t}return __extends(t,e),t.prototype.createChildren=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return e.prototype.createChildren.call(this),this.backBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.backBtnOnClick,this),[4,this.loadJson()];case 1:return t.sent(),[2]}})})},t.prototype.loadJson=function(){var e=this,t=new Promise(function(t,n){RES.getResByUrl("resource/assets/Json/gotcha.json",function(n,r){console.log("data"),e.jsonData=n,t()},e,RES.ResourceItem.TYPE_JSON)});t.then(function(t){e.initGotcha()})},t.prototype.initGotcha=function(){console.log("initGotcha"),console.log("this.jsonData.length ",this.jsonData.length);var e=Math.floor(10*Math.random());this.resultNumberLbl.text=e.toString(),this.jsonData.length>=e?this.resultTextLbl.text=this.jsonData[e-1].key:this.resultTextLbl.text="ERROR"},t.prototype.backBtnOnClick=function(){console.log("backBtnOnClick"),this.parent.removeChild(this)},t}(eui.Component);__reflect(ResultPage.prototype,"ResultPage");var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,n,r){function i(e){t.call(r,e)}function o(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),n.call(r))}var a=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){t.call(r,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(e,n){window.JSONParseClass.setData(e),egret.callLater(function(){t.call(r,generateEUI2)},a)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(e.indexOf(".exml")>-1){var s=e.split("/");s.pop();var l=s.join("/")+"_EUI.json";generateJSON.paths[e]?egret.callLater(function(){t.call(r,generateJSON.paths[e])},this):RES.getResByUrl(l,function(n){window.JSONParseClass.setData(n),egret.callLater(function(){t.call(r,generateJSON.paths[e])},a)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){t.call(r,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),RES.getResByUrl(e,i,this,RES.ResourceItem.TYPE_TEXT)},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);