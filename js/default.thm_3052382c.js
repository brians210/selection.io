window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skin/mainPageSkin.exml'] = window.skins.mainPageSkin = (function (_super) {
	__extends(mainPageSkin, _super);
	function mainPageSkin() {
		_super.call(this);
		this.skinParts = ["enterBtn","importBtn","nameInput","msgLabel"];
		
		this.height = 720;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.enterBtn_i(),this.importBtn_i(),this.nameInput_i(),this.msgLabel_i()];
	}
	var _proto = mainPageSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x514242;
		t.height = 720;
		t.width = 1280;
		return t;
	};
	_proto.enterBtn_i = function () {
		var t = new eui.Button();
		this.enterBtn = t;
		t.label = "enter";
		t.scaleX = 2;
		t.scaleY = 2;
		t.x = 136;
		t.y = 260;
		return t;
	};
	_proto.importBtn_i = function () {
		var t = new eui.Button();
		this.importBtn = t;
		t.label = "import";
		t.scaleX = 2;
		t.scaleY = 2;
		t.visible = false;
		t.x = 497;
		t.y = 62;
		return t;
	};
	_proto.nameInput_i = function () {
		var t = new eui.TextInput();
		this.nameInput = t;
		t.height = 56;
		t.width = 307;
		t.x = 82.5;
		t.y = 84;
		return t;
	};
	_proto.msgLabel_i = function () {
		var t = new eui.Label();
		this.msgLabel = t;
		t.text = "";
		t.textColor = 0xe50d0d;
		t.x = 87;
		t.y = 178;
		return t;
	};
	return mainPageSkin;
})(eui.Skin);generateEUI.paths['resource/skin/resultPageSkin.exml'] = window.skins.resultPageSkin = (function (_super) {
	__extends(resultPageSkin, _super);
	function resultPageSkin() {
		_super.call(this);
		this.skinParts = ["backBtn","previousBtn","nextBtn","pageNumberLbl","vLine","hLine","label","nameABLbl","assigneeABLbl","membershipABLbl","yrABLbl","starABLbl","stemABLbl","seasonABLbl","branchABLbl","constellationABLbl","actualABLbl","grpABInfo","nameALbl","assigneeALbl","membershipALbl","yrALbl","starALbl","stemALbl","seasonALbl","branchALbl","constellationALbl","actualALbl","grpA","nameBLbl","assigneeBLbl","membershipBLbl","yrBLbl","starBLbl","stemBLbl","seasonBLbl","branchBLbl","constellationBLbl","actualBLbl","grpB"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Rect1_i(),this.backBtn_i(),this.previousBtn_i(),this.nextBtn_i(),this.pageNumberLbl_i(),this._Group1_i()];
	}
	var _proto = resultPageSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x000000;
		t.height = 720;
		t.width = 1280;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "Back";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1094;
		t.y = 600;
		return t;
	};
	_proto.previousBtn_i = function () {
		var t = new eui.Button();
		this.previousBtn = t;
		t.label = "previous";
		t.x = 78;
		t.y = 600;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Button();
		this.nextBtn = t;
		t.label = "next";
		t.x = 402;
		t.y = 600;
		return t;
	};
	_proto.pageNumberLbl_i = function () {
		var t = new eui.Label();
		this.pageNumberLbl = t;
		t.text = "---";
		t.x = 275;
		t.y = 609;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 83;
		t.y = 41;
		t.elementsContent = [this._Rect2_i(),this.vLine_i(),this.hLine_i(),this.label_i(),this.grpABInfo_i(),this.grpA_i(),this.grpB_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x5b4646;
		t.height = 405;
		t.width = 800;
		return t;
	};
	_proto.vLine_i = function () {
		var t = new eui.Group();
		this.vLine = t;
		t.elementsContent = [this._Rect3_i(),this._Rect4_i(),this._Rect5_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd81313;
		t.height = 405;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 5;
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD81313;
		t.height = 405;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 5;
		t.x = 399.99999999999994;
		t.y = 0;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD81313;
		t.height = 405;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 5;
		t.x = 600;
		return t;
	};
	_proto.hLine_i = function () {
		var t = new eui.Group();
		this.hLine = t;
		t.elementsContent = [this._Rect6_i(),this._Rect7_i(),this._Rect8_i(),this._Rect9_i(),this._Rect10_i(),this._Rect11_i(),this._Rect12_i(),this._Rect13_i(),this._Rect14_i(),this._Rect15_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD81313;
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 800;
		t.x = 0;
		t.y = 45;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD81313;
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 800;
		t.x = 0;
		t.y = 85;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD81313;
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 800;
		t.x = 0;
		t.y = 125;
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD81313;
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 800;
		t.x = 0;
		t.y = 165;
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD81313;
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 800;
		t.x = 0;
		t.y = 205;
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD81313;
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 800;
		t.x = 0;
		t.y = 245;
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD81313;
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 800;
		t.x = 0;
		t.y = 285;
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD81313;
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 800;
		t.x = 0;
		t.y = 325;
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD81313;
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 800;
		t.x = 0;
		t.y = 365;
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD81313;
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 800;
		t.x = 0;
		t.y = 405;
		return t;
	};
	_proto.label_i = function () {
		var t = new eui.Group();
		this.label = t;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Label10_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Name";
		t.x = 10;
		t.y = 10.000000000000007;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Assignee";
		t.x = 10;
		t.y = 50;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Membership";
		t.x = 10;
		t.y = 90;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "年份";
		t.x = 10;
		t.y = 130;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "星座";
		t.x = 10;
		t.y = 169.99999999999997;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "天干";
		t.x = 10;
		t.y = 210;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "四季";
		t.x = 10;
		t.y = 250;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "⽇元地⽀";
		t.x = 10;
		t.y = 290;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "星宿";
		t.x = 10;
		t.y = 330;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "Actual %";
		t.x = 10;
		t.y = 370;
		return t;
	};
	_proto.grpABInfo_i = function () {
		var t = new eui.Group();
		this.grpABInfo = t;
		t.x = 205;
		t.elementsContent = [this.nameABLbl_i(),this.assigneeABLbl_i(),this.membershipABLbl_i(),this.yrABLbl_i(),this.starABLbl_i(),this.stemABLbl_i(),this.seasonABLbl_i(),this.branchABLbl_i(),this.constellationABLbl_i(),this.actualABLbl_i()];
		return t;
	};
	_proto.nameABLbl_i = function () {
		var t = new eui.Label();
		this.nameABLbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 10.000000000000007;
		return t;
	};
	_proto.assigneeABLbl_i = function () {
		var t = new eui.Label();
		this.assigneeABLbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 54;
		return t;
	};
	_proto.membershipABLbl_i = function () {
		var t = new eui.Label();
		this.membershipABLbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 94;
		return t;
	};
	_proto.yrABLbl_i = function () {
		var t = new eui.Label();
		this.yrABLbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 134;
		return t;
	};
	_proto.starABLbl_i = function () {
		var t = new eui.Label();
		this.starABLbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 174;
		return t;
	};
	_proto.stemABLbl_i = function () {
		var t = new eui.Label();
		this.stemABLbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 214;
		return t;
	};
	_proto.seasonABLbl_i = function () {
		var t = new eui.Label();
		this.seasonABLbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 254;
		return t;
	};
	_proto.branchABLbl_i = function () {
		var t = new eui.Label();
		this.branchABLbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 294;
		return t;
	};
	_proto.constellationABLbl_i = function () {
		var t = new eui.Label();
		this.constellationABLbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 334;
		return t;
	};
	_proto.actualABLbl_i = function () {
		var t = new eui.Label();
		this.actualABLbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 374;
		return t;
	};
	_proto.grpA_i = function () {
		var t = new eui.Group();
		this.grpA = t;
		t.x = 405;
		t.elementsContent = [this.nameALbl_i(),this.assigneeALbl_i(),this.membershipALbl_i(),this.yrALbl_i(),this.starALbl_i(),this.stemALbl_i(),this.seasonALbl_i(),this.branchALbl_i(),this.constellationALbl_i(),this.actualALbl_i()];
		return t;
	};
	_proto.nameALbl_i = function () {
		var t = new eui.Label();
		this.nameALbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 10.000000000000007;
		return t;
	};
	_proto.assigneeALbl_i = function () {
		var t = new eui.Label();
		this.assigneeALbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 54;
		return t;
	};
	_proto.membershipALbl_i = function () {
		var t = new eui.Label();
		this.membershipALbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 94;
		return t;
	};
	_proto.yrALbl_i = function () {
		var t = new eui.Label();
		this.yrALbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 134;
		return t;
	};
	_proto.starALbl_i = function () {
		var t = new eui.Label();
		this.starALbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 174;
		return t;
	};
	_proto.stemALbl_i = function () {
		var t = new eui.Label();
		this.stemALbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 214;
		return t;
	};
	_proto.seasonALbl_i = function () {
		var t = new eui.Label();
		this.seasonALbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 254;
		return t;
	};
	_proto.branchALbl_i = function () {
		var t = new eui.Label();
		this.branchALbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 294;
		return t;
	};
	_proto.constellationALbl_i = function () {
		var t = new eui.Label();
		this.constellationALbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 334;
		return t;
	};
	_proto.actualALbl_i = function () {
		var t = new eui.Label();
		this.actualALbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 374;
		return t;
	};
	_proto.grpB_i = function () {
		var t = new eui.Group();
		this.grpB = t;
		t.x = 605;
		t.elementsContent = [this.nameBLbl_i(),this.assigneeBLbl_i(),this.membershipBLbl_i(),this.yrBLbl_i(),this.starBLbl_i(),this.stemBLbl_i(),this.seasonBLbl_i(),this.branchBLbl_i(),this.constellationBLbl_i(),this.actualBLbl_i()];
		return t;
	};
	_proto.nameBLbl_i = function () {
		var t = new eui.Label();
		this.nameBLbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 10.000000000000007;
		return t;
	};
	_proto.assigneeBLbl_i = function () {
		var t = new eui.Label();
		this.assigneeBLbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 54;
		return t;
	};
	_proto.membershipBLbl_i = function () {
		var t = new eui.Label();
		this.membershipBLbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 94;
		return t;
	};
	_proto.yrBLbl_i = function () {
		var t = new eui.Label();
		this.yrBLbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 134;
		return t;
	};
	_proto.starBLbl_i = function () {
		var t = new eui.Label();
		this.starBLbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 174;
		return t;
	};
	_proto.stemBLbl_i = function () {
		var t = new eui.Label();
		this.stemBLbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 214;
		return t;
	};
	_proto.seasonBLbl_i = function () {
		var t = new eui.Label();
		this.seasonBLbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 254;
		return t;
	};
	_proto.branchBLbl_i = function () {
		var t = new eui.Label();
		this.branchBLbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 294;
		return t;
	};
	_proto.constellationBLbl_i = function () {
		var t = new eui.Label();
		this.constellationBLbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 334;
		return t;
	};
	_proto.actualBLbl_i = function () {
		var t = new eui.Label();
		this.actualBLbl = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "---";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 195;
		t.y = 374;
		return t;
	};
	return resultPageSkin;
})(eui.Skin);