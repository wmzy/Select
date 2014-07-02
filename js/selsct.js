function selectChange(x) {
	var id = $(x).attr("id");
	if ($(x).attr("checked") === "checked") {
		$("#selected").append("<li onclick=\"removeit(this)\" tar=\"" + id + "\">" + $(x).next().text() + "</li>");
	} else {
		$("#selected").children("li[tar='" + id + "']").remove();
	}
}
function removeit(x) {
	$("#" + $(x).attr("tar")).removeAttr("checked");
	$(x).remove();
}

function selectAll() {
	var s = $("#selected");
	s.empty();
	$("#selection").children("input").each(function() {
		$(this).attr("checked", "checked");
		s.append("<li onclick=\"removeit(this)\" tar=\"" + $(this).attr("id") + "\">" + $(this).next().text() + "</li>");
	});
}

function reverseSelect(objs, e) {
	var s = $("#selected");
	s.empty();
	$("#selection").children("input").each(function() {
		if ($(this).attr("checked") === "checked") {
			$(this).removeAttr("checked");
		} else {
			$(this).attr("checked", "checked");
			s.append("<li onclick=\"removeit(this)\" tar=\"" + $(this).attr("id") + "\">" + $(this).next().text() + "</li>");
		}
	});
}

function sendBack() {
	window.returnValue = "";
	$("#selected").children().each(function() {
		window.returnValue += $(this).text() + ",";
	});
	if (window.returnValue != "") {
		window.returnValue = window.returnValue.substring(0,window.returnValue.length - 1);
	}
	window.close();
}