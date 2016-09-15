//simpletestJs.js

window.SimpleTestJsModule = (function(context) {
	var consoleElement;

	var createLogEntry = function(message, className) {
		var entry = document.createElement("li");
		entry.className = className;
		entry.appendChild(document.createTextNode(message));
		return entry;
	}

	var logEntry = function(message, className) {
		var entry = createLogEntry(message, className);
		consoleElement.appendChild(entry);
	};

	var API = {

		init: function(consoleId) {
			if(!consoleId)
				consoleId = "simpleTestJs";
			consoleElement = document.getElementById(consoleId);
			if(!consoleElement) {
				return;
			}
			var list = document.createElement("ul");
			consoleElement.appendChild(list);
			consoleElement = list;
		},

		status: function() {
			if(consoleElement) {
				console.log(consoleElement);
				logEntry('console ok');
			} else {
				console.log('something is wrong. consoleElement has not been set');
			}
		},

		assert: function(condition, message) {
			var className = condition ? "pass" : "fail";
			logEntry(message, className);
		},

		equal: function(expected, actual, message) {
			if(expected == actual) {
				logEntry(message, "pass");
			} else {
				logEntry(message + " ! expected " + expected + " actual " + actual, "fail");
			}
		},

		report: function(message) {
			logEntry(message);
		}

	};

	context.report = API.report;
	context.assert = API.assert;
	context.equal = API.equal;
	return API;

})(window);




window.addEventListener('load', function() {
	SimpleTestJsModule.init();	
});