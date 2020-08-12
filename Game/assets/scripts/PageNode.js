cc.Class({
	extends: cc.Component,
	properties: {
	},

	onClose: function () {
		this.node.destroy();
	},

	onTest: function () {
		console.log("cc.sys.os:", cc.sys.os);
		console.log("cc.sys.isBrowser", cc.sys.isBrowser);
		console.log("cc.sys.isNative", cc.sys.isNative);
		window.android.showToast();
	},
});
