;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);


	$doc.ready(function() {
		var $svgIcons = $('.svg-icon');

		$svgIcons.each(function(){
			var $this = $(this);
			var iconUrl = $this.data('src');

			$.ajax({
				url: iconUrl,
				type: 'GET',
				dataType: 'html'

			})
			.done(function(value) {
				var html = value;

				$this.replaceWith(html);
			})
			.fail(function() {
				console.log("error");
			});
		});
	});
})(jQuery, window, document);