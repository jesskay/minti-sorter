var currentPonies = [];
var alreadyStarted = false;

// Don't ask the same pairing twice.
var sort, sortCallback, cache = [];
var cacheKey = "";

$(function() {
	$('#categories button').each(function(idx, btn) {
		$(btn).prop('disabled', (categories[$(btn).text()] === undefined));
	});

	$('#categories').on('submit', function(e) {
		e.preventDefault();

		if($('#categories button').filter('.active').length === 0)
			return false;

		// Make sure they know they'll loose their progress.
		if(alreadyStarted && !confirm("Are you sure you wish to change your selected catergories?\n\nThis will reset your current progress."))
			return false;

		currentPonies = [];

		$('#categories button').each(function(idx, btn) {
			if($(btn).hasClass('active'))
				currentPonies = currentPonies.concat(categories[$(btn).text()]);
		});

		$('#categories_wrapper').slideUp();
		$('#war_zone').removeClass('preview');

		$('#first button, #first img').click(function() {
			if(cacheKey != "") cache[cacheKey] = false;
			sortCallback && sortCallback(false);
		});

		$('#second button, #second img').click(function() {
			if(cacheKey != "") cache[cacheKey] = false;
			sortCallback && sortCallback(true);
		});

		sort = HeapSort(currentPonies, function(a, b, callback) {
			if(cache[a + '!!' + b] !== undefined)
				return callback(cache[a + '!!' + b]);
			if(cache[b + '!!' + a] !== undefined)
				return callback(!cache[b + '!!' + a]);

			var pony1 = Ponies[a];
			$('#first').fadeTo('fast', 0.0, function() {
				$('#first button').text(a);
				$('#first img').attr('src', pony1.image);
				$('#first img').attr('title', pony1.alt);
				$('#first a').attr('href', pony1.source);

				$('#first img').load(function() {
					$('#first').fadeTo('fast', 1.0);
				});
			});

			var pony2 = Ponies[b];
			$('#second').fadeTo('fast', 0.0, function() {
				$('#second button').text(b);
				$('#second img').attr('src', pony2.image);
				$('#second img').attr('title', pony2.alt);
				$('#second a').attr('href', pony2.source);

				$('#second img').load(function() {
					$('#second').fadeTo('fast', 1.0);
				});
			});

			cacheKey = a + '!!' + b;
			sortCallback = callback;
		}, function(result) {
			alreadyStarted = false;
			$('.pony-picker img, .pony-picker button').off('click');
			$('#war_zone').fadeOut(100, function() {
				var html = "";
				for(var i = 0; i < result.length; i++) {
					html += '<tr><th>' + prefixize(i + 1) + "</th><td>" + result[i] + "</td></tr>";
				}
				$('#results #results_container').html(html);
				$('#results').fadeIn(100);
			});
		});

		return false;
	});
});

function prefixize(n) {
	if(n % 10 == 1)
		return n + "st";
	if(n % 10 == 2)
		return n + "nd";
	if(n % 10 == 3)
		return n + "rd";
	return n + 'th';
}