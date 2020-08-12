cc.Class({
	extends: cc.Component,
	properties: {
	},

	onClose: function () {
		this.node.destroy();
	},

	onTest: function () {
		console.log("this is a test!");
		if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
			console.log("call android function!");
			/* window.android.jsCallAndroid(); */
			window.android.showToast();
		}
		else {
			console.log("always called!");
			window.android.showToast();
		}
	},
});
