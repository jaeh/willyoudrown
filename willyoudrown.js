setInterval( function() {
	var tasks = document.getElementsByTagName('a'),
      evt = document.createEvent("HTMLEvents"),
      chore;

	for ( chore in tasks ) {
		if ( tasks.hasOwnProperty(chore) && tasks[chore].dispatchEvent ) {
			evt = document.createEvent("HTMLEvents");
			evt.initEvent('click', true, true ); // event type, bubbling, cancelable
			tasks[chore].dispatchEvent(evt);
		}
	}
}, 100);
