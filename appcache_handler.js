function get_appcache_state() {
    var appCache = window.applicationCache;

    switch (appCache.status) {
        case appCache.UNCACHED: // UNCACHED == 0
            return 'UNCACHED';
            break;
        case appCache.IDLE: // IDLE == 1
            return 'IDLE';
            break;
        case appCache.CHECKING: // CHECKING == 2
            return 'CHECKING';
            break;
        case appCache.DOWNLOADING: // DOWNLOADING == 3
            return 'DOWNLOADING';
            break;
        case appCache.UPDATEREADY:  // UPDATEREADY == 4
            return 'UPDATEREADY';
            break;
        case appCache.OBSOLETE: // OBSOLETE == 5
            return 'OBSOLETE';
            break;
        default:
            return 'UKNOWN CACHE STATUS';
            break;
    };

}

function add_cache_event_toasts() {
    // showToast('Appcache state: ' + get_appcache_state());
    var appCache = window.applicationCache;
    
    if (!navigator.onLine) {
        showToast('\u60a8\u5904\u4e8e\u8131\u673a\u72b6\u6001.');
    }

    appCache.addEventListener('cached', function (e) {
        showToast('\u5df2\u5b8c\u6210\u7f13\u5b58.');
    }, false);

    // appCache.addEventListener('checking', function (e) {
    //     showToast('Checking for updates.');
    // }, false);

    appCache.addEventListener('downloading', function (e) {
        showToast('\u6b63\u5728\u4e0b\u8f7d\u65b0\u7f13\u5b58.');
    }, false);

    appCache.addEventListener('error', function (e) {
        // only show error toast if we're online
        if (navigator.onLine) {
            showToast('\u7f13\u5b58\u7f51\u7ad9\u65f6\u51fa\u9519.', 5000);
        }
    }, false);

    appCache.addEventListener('noupdate', function (e) {
        showToast('\u7f13\u5b58\u662f\u6700\u65b0\u7684.');
    }, false);

    appCache.addEventListener('obsolete', function (e) {
        showToast('\u7f51\u7ad9\u5df2\u5e9f\u5f03.');
    }, false);

    // appCache.addEventListener('progress', function (e) {
    //     showToast('Caching site.');
    // }, false);

    appCache.addEventListener('updateready', function (e) {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
            showToast('\u7f51\u7ad9\u5df2\u66f4\u65b0\u3002\u5237\u65b0\u4ee5\u5207\u6362\u5230\u66f4\u65b0\u7684\u7248\u672c',8000);
        }
    }, false);




 }