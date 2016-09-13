//simpletestJs.js

window.SimpleTestJsModule = (function() {
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

	return {

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

		report: function(message) {
			logEntry(message);
		}

	};

})();


window.assert =  SimpleTestJsModule.assert;
window.report =  SimpleTestJsModule.report;

window.addEventListener('load', function() {
	SimpleTestJsModule.init();	
});