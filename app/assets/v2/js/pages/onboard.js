var onboard = {};
var current = 0;
var words = [];

if ($('.logged-in').length) {
  $('.nav-item.dropdown #navbarDropdown').css('visibility', 'visible');
  $('.nav_avatar').css('visibility', 'visible');
}

$('.js-select2').each(function() {
  $(this).select2({
    minimumResultsForSearch: Infinity
  });
});

// removes tooltip
if ($('#job').parent().css('display') !== 'none') {
  $('#job select').each(function(evt) {
    $('.select2-selection__rendered').tooltip('destroy');
  });
}

onboard.showTab = function(num) {
  $($('.step')[num]).addClass('block').outerWidth();
  $($('.step')[num]).addClass('show');

  if (num === 0) {
    $('#prev-btn').hide();
  } else {
    $('#prev-btn').show();
    window.history.pushState('', '', '/onboard/' + flow + '/' + $($('.step')[num]).attr('link'));
  }

  if (num === 2 || $($('.step')[num]).attr('link') === 'avatar') {
    $('.controls').hide();
  } else {
    $('.controls').show();
  }

  if (num == ($('.step').length) - 1) {
    $('#next-btn').html(gettext('Done'));
    $('#next-btn').attr('onclick', 'redirectURL()');
  } else if (num > ($('.step').length) - 1) {
    $('#next-btn').hide();
    $('#next-btn').attr('onclick', 'changeStep(1))');
  } else {
    $('#next-btn').removeClass('completed');
    $('#next-btn').html(gettext('Next'));
    $('#next-btn').attr('onclick', 'changeStep(1)');
  }
  onboard.highlightStep(num);
  $('#next-btn').addClass('completed');
};

onboard.highlightStep = function(currentStep) {
  var steps = $('.step-state');

  for (i = 0; i < steps.length; i++) {
    if (i <= currentStep)
      $(steps[i]).addClass('finish');
  }
};

onboard.getFilters = function(savedKeywords, currentKeywords) {
  $('.suggested-tag input[type=checkbox]:checked + span i').removeClass('fa-plus').addClass('fa-check');
  $('.suggested-tag input[type=checkbox]:not(:checked) + span i').removeClass('fa-check').addClass('fa-plus');

  var _filters = [];
  var _words = [];
  var search_keywords = $('#keywords').val();

  if (search_keywords && search_keywords != '') {
    search_keywords.split(',').forEach(function(word) {
      _words.push(word);
      _filters.push('<a class=filter-tag><i class="fas fa-check"></i>' + word + '</a>');
    });
  }

  if (currentKeywords) {
    $.each(currentKeywords, function(k, value) {
      if (keywords.includes(value.toLowerCase())) {
        $('input[type=checkbox][name=tech-stack][value="' + value.toLowerCase() + '"]').prop('checked', true);
      } else {
        if ($('#keywords').val() != '') {
          $('#keywords').val($('#keywords').val() + ',');
        }

        $('#keywords').val($('#keywords').val() + value.toLowerCase());
        _words.push(value.toLowerCase());
        _filters.push('<a class=filter-tag><i class="fas fa-check"></i>' + value.toLowerCase() + '</a>');
      }
    });
  }

  $.each($('input[type=checkbox][name=tech-stack]:checked'), function() {
    $('.suggested-tag input[type=checkbox]:checked + span i').removeClass('fa-plus').addClass('fa-check');
    var value = $(this).attr('value');

    _words.push(value);
  });

  if (_filters.length == 0)
    $('#selected-skills').css('display', 'none');
  else
    $('#selected-skills').css('display', 'inherit');

  $('.filter-tags').html(_filters);

  if (savedKeywords) {

    words = [...new Set(_words)];
    var settings = {
      url: '/settings/matching',
      method: 'POST',
      headers: {'X-CSRFToken': csrftoken},
      data: {
        'keywords': words.join(),
        'submit': 'Go'
      }
    };

    $.ajax(settings).done(function(response) {
      onboard.getFilters(false, response.keywords);
    }).fail(function(error) {
      // TODO: Handle Error
    });
  }
};

var changeStep = function(n) {
  if (current == 0 && n == -1)
    return;

  var steps = $('.step');

  if ($($('.step')[current]).attr('link') === 'skills') {
    var level = $('#experienceLevel').find(':selected').val();

    localStorage['experience_level'] = level;
    localStorage['referrer'] = 'onboard';
  }

  if ($($('.step')[current]).attr('link') === 'job') {
    save_job_status();
  }

  $(steps[current]).removeClass('show');
  $(steps[current]).removeClass('block');
  $('.alert').remove();

  current += n;
  if (current > steps.length - 1) {
    redirectURL();
  } else {
    onboard.showTab(current);
  }
};

steps.forEach(function(step, index) {
  if (window.location.pathname.endsWith(step))
    current = index;
});

onboard.showTab(current);
