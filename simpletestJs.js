//simpletestJs.js

window.SimpleTestJsModule = (function() {
	var consoleElement;

	var createLogEntry = function(message, className) {
		var entry = document.createElement("li");
		entry.className += className;
		entry.appendChild(document.createTextNode(message));
		return entry;
	}

	var	logError = function(message) {
		var entry = createLogEntry(message, "error");
		consoleElement.appendChild(entry);
	};

	var logInfo = function(message) {
		var entry = createLogEntry(message, "info");
		consoleElement.appendChild(entry);
	};

	return {

		init: function(consoleId) {
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
				logInf('console ok');
			} else {
				console.log('something is wrong. consoleElement has not been set');
			}
		},

		assert: function(condition, message) {
			if(condition) {
				logInfo(message);
			} else {
				logError(message);
			}
		},

		report: function(message) {
			logInfo(message);
		}

	};


})();

window.assert =  SimpleTestJsModule.assert;
window.report =  SimpleTestJsModule.report;