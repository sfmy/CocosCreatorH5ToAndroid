cc.Class({
	extends: cc.Component,
	properties: {
		pageNode: cc.Prefab,
	},

	onLoad: function () {
	},

	onShow: function () {
		let node = cc.instantiate(this.pageNode);
		node.parent = this.node;
	},
});
