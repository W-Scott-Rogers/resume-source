;jQuery(document).ready(function ($) {

    var i = 0;
    var vendors = {};

    //Group repos keyed by vendor(username)
    $('.vcs-widget').each(function () {
        var repo       = $(this).data('repo'),
            vendorName = repo.split('/')[0],
            repoName   = repo.split('/')[1];
        if (!vendors[vendorName]) vendors[vendorName] = {};
        vendors[vendorName][repoName] = $(this);
    });

    if (vendors) {
        $('head').append('<link rel="stylesheet" type="text/css" href="../assets/css/source-control.css">');

        for (var vendor in vendors) {
            $.ajax({
                url:      'https://api.github.com/users/' + vendor + '/repos?per_page=100',
                dataType: 'jsonp',
                cache:    true,
                success:  function (results) {

                    $.each(results.data, function (repoIndex) {
                        var repo            = results.data[repoIndex];
                        var date, pushed_at = 'unknown',
                            vendorUrl       = "https://github.com/" + vendor,
                            repoUrl         = "https://github.com/" + vendor + '/' + repo.name;

                        var $widget = $(
                                '<div class="vcs-box repo">'
                                + '<div class="vcs-box-title">'
                                + '<h3>'
                                + '<a class="owner" href="' + vendorUrl + '" title="' + vendorUrl + '">' + vendor + '</a>'
                                + '/'
                                + '<a class="repo" href="' + repoUrl + '" title="' + repoUrl + '">' + repo.name + '</a>'
                                + '</h3>'
                                + '<div class="vcs-stats">'
                                + '<a class="watchers" href="' + repoUrl + '/watchers" title="See watchers">?</a>'
                                + '<a class="forks" href="' + repoUrl + '/network/members" title="See forkers">?</a>'
                                + '</div>'
                                + '</div>'
                                + '<div class="vcs-box-content">'
                                + '<p class="description"><span></span> &mdash; <a href="' + repoUrl + '#readme">Read More</a></p>'
                                + '<p class="link"></p>'
                                + '</div>'
                                + '<div class="vcs-box-download">'
                                + '<div class="updated"></div>'
                                + '<a class="download" href="' + repoUrl + '/zipball/master" title="Get an archive of this repository">Download as zip</a>'
                                + '</div>'
                                + '</div>'
                        );

                        $widget.appendTo(vendors[vendor][repo.name]);

                        if (repo.pushed_at) {
                            date      = new Date(repo.pushed_at);
                            pushed_at = (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear();
                        }

                        $widget.find('.watchers').text(repo.watchers);
                        $widget.find('.forks').text(repo.forks);
                        $widget.find('.description span').text(repo.description);
                        $widget.find('.updated').html('Latest commit to the <strong>' + repo.default_branch + '</strong> branch on ' + pushed_at);

                        // Don't show "null" if the repo has no homepage URL.
                        if (repo.homepage != null) $widget.find('.link').append($('<a />').attr('href', repo.homepage).text(repo.homepage));
                    });
                }
            });

        }
    }
});
