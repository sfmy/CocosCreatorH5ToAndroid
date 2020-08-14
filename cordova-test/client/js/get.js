function get () {
	$.get("http://192.168.1.102:3000/get", {data: "test"}, function (data) {
		console.log(data);
		$("#id1").text(data);
	});
}

$(document).ready(function () {
	$("#id1").text("服务器没有返回数据!");
	get();
});
