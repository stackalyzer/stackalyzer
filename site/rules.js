const rulesJsonFramework = {
    "1C-Bitrix": {
        "html": "(?:<link[^>]+components/bitrix|(?:src|href)=\"/bitrix/(?:js|templates))",
        "implies": "PHP"
    },
    "3dCart": {
        "cookies": {
            "3dvisit": ""
        }
    },
    "A-Frame": {
        "html": "<a-scene[^<>]*>",
        "implies": "three.js",
        "js": {
            "AFRAME.version": "^(.+)$\\;version:\\1"
        }
    },
    "AD EBiS": {
        "html": [
            "<!-- EBiS contents tag",
            "<!--EBiS tag",
            "<!-- Tag EBiS",
            "<!-- EBiS common tag"
        ]
    },
    "AT Internet Analyzer": {
        "js": {
            "ATInternet": "",
            "xtsite": ""
        }
    },
    "AT Internet XiTi": {
        "js": {
            "xt_click": ""
        }
    },
    "Accelerated Mobile Pages": {
        "html": "<html[^>]* (?:amp|⚡)"
    },
    "Act-On": {
        "js": {
            "ActOn": ""
        }
    },
    "AdRiver": {
        "html": "(?:<embed[^>]+(?:src=\"https?://mh\\d?\\.adriver\\.ru/|flashvars=\"[^\"]*(?:http:%3A//(?:ad|mh\\d?)\\.adriver\\.ru/|adriver_banner))|<(?:(?:iframe|img)[^>]+src|a[^>]+href)=\"https?://ad\\.adriver\\.ru/)",
        "js": {
            "adriver": ""
        }
    },
    "AdRoll": {
        "js": {
            "adroll_adv_id": "",
            "adroll_pix_id": ""
        }
    },
    "Adcash": {
        "js": {
            "SuLoaded": "",
            "SuUrl": "",
            "ac_bgclick_URL": "",
            "ct_nOpp": "",
            "ct_nSuUrl": "",
            "ct_siteunder": "",
            "ct_tag": ""
        }
    },
    "AddThis": {
        "js": {
            "addthis": ""
        }
    },
    "AddToAny": {
        "js": {
            "a2apage_init": ""
        }
    },
    "Adminer": {
        "html": [
            "Adminer</a> <span class=\"version\">([\\d.]+)</span>\\;version:\\1",
            "onclick=\"bodyClick\\(event\\);\" onload=\"verifyVersion\\('([\\d.]+)'\\);\">\\;version:\\1"
        ],
        "implies": "PHP"
    },
    "Adnegah": {
        "html": "<iframe [^>]*src=\"[^\"]+adnegah\\.net"
    },
    "Adobe ColdFusion": {
        "html": "<!-- START headerTags\\.cfm",
        "implies": "CFML",
        "js": {
            "_cfEmails": ""
        }
    },
    "Adobe Experience Manager": {
        "html": [
            "<div class=\"[^\"]*parbase",
            "<div[^>]+data-component-path=\"[^\"+]jcr:"
        ],
        "implies": "Java"
    },
    "Adobe RoboHelp": {
        "js": {
            "gbWhLang": "",
            "gbWhMsg": "",
            "gbWhProxy": "",
            "gbWhUtil": "",
            "gbWhVer": ""
        }
    },
    "Advanced Web Stats": {
        "html": "aws\\.src = [^<]+caphyon-analytics",
        "implies": "Java"
    },
    "Advert Stream": {
        "js": {
            "advst_is_above_the_fold": ""
        }
    },
    "Adyen": {
        "js": {
            "adyen.encrypt.version": "^(.+)$\\;version:\\1"
        }
    },
    "Adzerk": {
        "html": "<iframe [^>]*src=\"[^\"]+adzerk\\.net",
        "js": {
            "ados": "",
            "adosResults": ""
        }
    },
    "AfterBuy": {
        "html": [
            "<dd>This OnlineStore is brought to you by ViA-Online GmbH Afterbuy\\. Information and contribution at https://www\\.afterbuy\\.de</dd>"
        ]
    },
    "Ahoy": {
        "js": {
            "ahoy": ""
        },
        "cookies": {
            "ahoy_track": "",
            "ahoy_visit": "",
            "ahoy_visitor": ""
        }
    },
    "Akaunting": {
        "html": [
            "<link[^>]+akaunting-green\\.css",
            "Powered By Akaunting: <a [^>]*href=\"https?://(?:www\\.)?akaunting\\.com[^>]+>"
        ],
        "implies": "Laravel"
    },
    "Algolia Realtime Search": {
        "js": {
            "AlgoliaSearch": "",
            "algoliasearch.version": "^(.+)$\\;version:\\1"
        }
    },
    "All in One SEO Pack": {
        "html": "<!-- All in One SEO Pack ([\\d.]+) \\;version:\\1",
        "implies": "WordPress"
    },
    "AlloyUI": {
        "implies": [
            "Bootstrap",
            "YUI"
        ],
        "js": {
            "AUI": ""
        }
    },
    "Amazon ELB": {
        "cookies": {
            "AWSELB": ""
        },
        "implies": "Amazon Web Services"
    },
    "Amplitude": {
        "script": [
            "cdn\\.amplitude\\.com"
        ]
    },
    "Angular": {
        "excludes": [
            "AngularDart",
            "AngularJS"
        ],
        "html": "<[^>]+ ng-version=\"([\\d.]+)\"\\;version:\\1",
        "js": {
            "ng.coreTokens": "",
            "ng.probe": ""
        }
    },
    "Angular Material": {
        "implies": "AngularJS",
        "js": {
            "ngMaterial": ""
        }
    },
    "AngularDart": {
        "excludes": [
            "Angular",
            "AngularJS"
        ],
        "implies": "Dart",
        "js": {
            "ngTestabilityRegistries": ""
        }
    },
    "AngularJS": {
        "excludes": [
            "Angular",
            "AngularDart"
        ],
        "html": [
            "<(?:div|html)[^>]+ng-app=",
            "<ng-app"
        ],
        "js": {
            "angular": "",
            "angular.version.full": "^(.+)$\\;version:\\1"
        }
    },
    "Ant Design": {
        "html": [
            "<[^>]*class=\"ant-(?:btn|col|row|layout|breadcrumb|menu|pagination|steps|select|cascader|checkbox|calendar|form|input-number|input|mention|rate|radio|slider|switch|tree-select|time-picker|transfer|upload|avatar|badge|card|carousel|collapse|list|popover|tooltip|table|tabs|tag|timeline|tree|alert|modal|message|notification|progress|popconfirm|spin|anchor|back-top|divider|drawer)",
            "<i class=\"anticon anticon-"
        ],
        "implies": [
            "React"
        ],
        "js": {
            "antd": ""
        }
    },
    "Apache HBase": {
        "html": "<style[^>]+static/hbase",
        "implies": "Java"
    },
    "Apache Hadoop": {
        "html": "<style[^>]+static/hadoop"
    },
    "Apache JSPWiki": {
        "html": "<html[^>]* xmlns:jspwiki=",
        "implies": "Apache Tomcat"
    },
    "Apache Wicket": {
        "implies": "Java",
        "js": {
            "Wicket": ""
        }
    },
    "Apostrophe CMS": {
        "html": "<[^>]+data-apos-refreshable[^>]",
        "implies": "Node.js"
    },
    "AppNexus": {
        "html": "<(?:iframe|img)[^>]+adnxs\\.(?:net|com)"
    },
    "Arastta": {
        "excludes": "OpenCart",
        "html": "Powered by <a [^>]*href=\"https?://(?:www\\.)?arastta\\.org[^>]+>Arastta",
        "implies": "PHP"
    },
    "ArcGIS API for JavaScript": {
        "script": [
            "js\\.arcgis\\.com",
            "basemaps\\.arcgis\\.com"
        ]
    },
    "Artifactory": {
        "html": [
            "<span class=\"version\">Artifactory(?: Pro)?(?: Power Pack)?(?: ([\\d.]+))?\\;version:\\1"
        ],
        "js": {
            "ArtifactoryUpdates": ""
        }
    },
    "ArvanCloud": {
        "js": {
            "ArvanCloud": ""
        }
    },
    "AsciiDoc": {
        "js": {
            "asciidoc": ""
        }
    },
    "Asciinema": {
        "html": "<asciinema-player",
        "js": {
            "asciinema": ""
        }
    },
    "Atlassian Bitbucket": {
        "html": "<li>Atlassian Bitbucket <span title=\"[a-z0-9]+\" id=\"product-version\" data-commitid=\"[a-z0-9]+\" data-system-build-number=\"[a-z0-9]+\"> v([\\d.]+)<\\;version:\\1",
        "implies": "Python",
        "js": {
            "bitbucket": ""
        }
    },
    "Atlassian Confluence": {
        "html": "Powered by <a href=[^>]+atlassian\\.com/software/confluence(?:[^>]+>Atlassian Confluence</a> ([\\d.]+))?\\;version:\\1",
        "implies": "Java"
    },
    "Atlassian FishEye": {
        "cookies": {
            "FESESSIONID": ""
        },
        "html": "<title>(?:Log in to )?FishEye (?:and Crucible )?([\\d.]+)?</title>\\;version:\\1"
    },
    "Atlassian Jira": {
        "html": "Powered by\\s+<a href=[^>]+atlassian\\.com/(?:software/jira|jira-bug-tracking/)[^>]+>Atlassian\\s+JIRA(?:[^v]*v(?:ersion: )?(\\d+\\.\\d+(?:\\.\\d+)?))?\\;version:\\1",
        "implies": "Java",
        "js": {
            "jira": ""
        },
        "meta": {
            "ajs-version-number": "^(.+)$\\;version:\\1",
            "application-name": "JIRA"
        }
    },
    "Atlassian Jira Issue Collector": {
        "script": [
            "jira-issue-collector-plugin",
            "atlassian\\.jira\\.collector\\.plugin"
        ]
    },
    "Aurelia": {
        "html": [
            "<[^>]+aurelia-app=[^>]",
            "<[^>]+data-main=[^>]aurelia-bootstrapper",
            "<[^>]+au-target-id=[^>]\\d"
        ]
    },
    "Avangate": {
        "html": "<link[^>]* href=\"^https?://edge\\.avangate\\.net/",
        "js": {
            "__avng8_": "",
            "avng8_": ""
        }
    },
    "Awesomplete": {
        "html": "<link[^>]+href=\"[^>]*awesomplete(?:\\.min)?\\.css",
        "js": {
            "awesomplete": ""
        }
    },
    "BEM": {
        "html": "<[^>]+data-bem"
    },
    "BIGACE": {
        "html": "(?:Powered by <a href=\"[^>]+BIGACE|<!--\\s+Site is running BIGACE)",
        "implies": "PHP"
    },
    "Bablic": {
        "js": {
            "bablic": ""
        }
    },
    "Backbone.js": {
        "implies": "Underscore.js",
        "js": {
            "Backbone": "",
            "Backbone.VERSION": "^(.+)$\\;version:\\1"
        }
    },
    "Backdrop": {
        "excludes": "Drupal",
        "implies": "PHP",
        "js": {
            "Backdrop": ""
        }
    },
    "Banshee": {
        "html": "Built upon the <a href=\"[^>]+banshee-php\\.org/\">[a-z]+</a>(?:v([\\d.]+))?\\;version:\\1",
        "implies": "PHP"
    },
    "BigDump": {
        "html": "<!-- <h1>BigDump: Staggered MySQL Dump Importer ver\\. ([\\d.b]+)\\;version:\\1",
        "implies": [
            "MySQL",
            "PHP"
        ]
    },
    "Bigcommerce": {
        "html": "<link href=[^>]+cdn\\d+\\.bigcommerce\\.com/"
    },
    "Bigware": {
        "cookies": {
            "bigWAdminID": "",
            "bigwareCsid": ""
        },
        "html": "(?:Diese <a href=[^>]+bigware\\.de|<a href=[^>]+/main_bigware_\\d+\\.php)",
        "implies": "PHP"
    },
    "BittAds": {
        "js": {
            "bitt": ""
        }
    },
    "Bizweb": {
        "js": {
            "Bizweb": ""
        }
    },
    "Blesta": {
        "cookies": {
            "blesta_sid": ""
        }
    },
    "Blip.tv": {
        "html": "<(?:param|embed|iframe)[^>]+blip\\.tv/play"
    },
    "BoldGrid": {
        "html": [
            "<link rel=[\"']stylesheet[\"'] [^>]+boldgrid",
            "<link rel=[\"']stylesheet[\"'] [^>]+post-and-page-builder",
            "<link[^>]+s\\d+\\.boldgrid\\.com"
        ],
        "implies": "WordPress"
    },
    "Bonfire": {
        "cookies": {
            "bf_session": ""
        },
        "html": "Powered by <a[^>]+href=\"https?://(?:www\\.)?cibonfire\\.com[^>]*>Bonfire v([^<]+)\\;version:\\1",
        "implies": "CodeIgniter"
    },
    "Bootstrap": {
        "html": [
            "<style>/\\*!\\* Bootstrap v(\\d\\.\\d\\.\\d)\\;version:\\1",
            "<link[^>]+?href=[^\"]/css/([\\d.]+)/bootstrap\\.(?:min\\.)?css\\;version:\\1",
            "<link[^>]+?href=\"[^\"]*bootstrap(?:\\.min)?\\.css",
            "<div[^>]+class=\"[^\"]*glyphicon glyphicon-"
        ],
        "js": {
            "bootstrap.Alert.VERSION": "^(.+)$\\;version:\\1",
            "jQuery.fn.tooltip.Constructor.VERSION": "^(.+)$\\;version:\\1"
        }
    },
    "Bootstrap Table": {
        "html": "<link[^>]+href=\"[^>]*bootstrap-table(?:\\.min)?\\.css",
        "implies": [
            "Bootstrap",
            "jQuery"
        ]
    },
    "Bounce Exchange": {
        "js": {
            "bouncex": ""
        }
    },
    "Braintree": {
        "js": {
            "Braintree": "",
            "Braintree.version": "^(.+)$\\;version:\\1"
        }
    },
    "Bubble": {
        "implies": "Node.js",
        "js": {
            "appquery": ""
        }
    },
    "BugSnag": {
        "js": {
            "Bugsnag": "",
            "bugsnag": "",
            "bugsnagClient": ""
        }
    },
    "Bugzilla": {
        "html": [
            "href=\"enter_bug\\.cgi\">",
            "<main id=\"bugzilla-body\"",
            "<a href=\"https?://www\\.bugzilla\\.org/docs/([0-9.]+)/[^>]+>Help<\\;version:\\1",
            "<span id=\"information\" class=\"header_addl_info\">version ([\\d.]+)<\\;version:\\1"
        ],
        "cookies": {
            "Bugzilla_login_request_cookie": ""
        },
        "implies": "Perl",
        "js": {
            "BUGZILLA": ""
        }
    },
    "Bulma": {
        "html": "<link[^>]+?href=\"[^\"]+bulma(?:\\.min)?\\.css"
    },
    "Burning Board": {
        "html": "<a href=\"[^>]+woltlab\\.com[^<]+<strong>Burning Board",
        "implies": [
            "PHP",
            "Woltlab Community Framework"
        ]
    },
    "Business Catalyst": {
        "html": "<!-- BC_OBNW -->"
    },
    "BuySellAds": {
        "js": {
            "_bsa": "",
            "_bsaPRO": "",
            "_bsap": "",
            "_bsap_serving_callback": ""
        }
    },
    "CKEditor": {
        "js": {
            "CKEDITOR": "",
            "CKEDITOR.version": "^(.+)$\\;version:\\1",
            "CKEDITOR_BASEPATH": ""
        }
    },
    "CMS Made Simple": {
        "cookies": {
            "CMSSESSID": ""
        },
        "implies": "PHP"
    },
    "CS Cart": {
        "html": [
            "&nbsp;Powered by (?:<a href=[^>]+cs-cart\\.com|CS-Cart)",
            "\\.cm-noscript[^>]+</style>"
        ],
        "implies": "PHP",
        "js": {
            "fn_compare_strings": ""
        }
    },
    "CakePHP": {
        "cookies": {
            "cakephp": ""
        },
        "implies": "PHP"
    },
    "Captch Me": {
        "js": {
            "Captchme": ""
        }
    },
    "Carbon Ads": {
        "html": "<[a-z]+ [^>]*id=\"carbonads-container\"",
        "js": {
            "_carbonads": ""
        }
    },
    "Cargo": {
        "html": "<link [^>]+Cargo feed",
        "implies": "PHP"
    },
    "Catberry.js": {
        "implies": "Node.js",
        "js": {
            "catberry": "",
            "catberry.version": "^(.+)$\\;version:\\1"
        }
    },
    "Chamilo": {
        "html": "\">Chamilo ([\\d.]+)</a>\\;version:\\1",
        "implies": "PHP"
    },
    "Chart.js": {
        "js": {
            "Chart": "\\;confidence:50",
            "Chart.defaults.doughnut": "",
            "chart.ctx.bezierCurveTo": ""
        }
    },
    "Chartbeat": {
        "js": {
            "_sf_async_config": "",
            "_sf_endpt": ""
        }
    },
    "Chevereto": {
        "html": "Powered by <a href=\"https?://chevereto\\.com\">",
        "implies": "PHP"
    },
    "Chitika": {
        "js": {
            "ch_client": "",
            "ch_color_site_link": ""
        }
    },
    "Clarity": {
        "html": [
            "<clr-main-container",
            "<link [^>]*href=\"[^\"]*clr-ui(?:\\.min)?\\.css"
        ],
        "js": {
            "ClarityIcons": ""
        },
        "implies": [
            "Angular"
        ]
    },
    "ClickHeat": {
        "implies": "PHP",
        "js": {
            "clickHeatServer": ""
        }
    },
    "ClickTale": {
        "js": {
            "clickTaleStartEventSignal": ""
        }
    },
    "Clicky": {
        "js": {
            "clicky": ""
        }
    },
    "Clientexec": {
        "html": "clientexec\\.[^>]*\\s?=\\s?[^>]*;"
    },
    "CloudFlare": {
        "cookies": {
            "__cfduid": ""
        },
        "js": {
            "CloudFlare": ""
        }
    },
    "Cloudcoins": {
        "js": {
            "CLOUDCOINS": ""
        }
    },
    "CodeIgniter": {
        "cookies": {
            "ci_csrf_token": "^(.+)$\\;version:\\1?2+:",
            "ci_session": "",
            "exp_last_activity": "",
            "exp_tracker": ""
        },
        "html": "<input[^>]+name=\"ci_csrf_token\"\\;version:2+",
        "implies": "PHP"
    },
    "CodeMirror": {
        "js": {
            "CodeMirror": "",
            "CodeMirror.version": "^(.+)$\\;version:\\1"
        }
    },
    "CoinHive": {
        "js": {
            "CoinHive": ""
        }
    },
    "CoinHive Captcha": {
        "html": "(?:<div[^>]+class=\"coinhive-captcha[^>]+data-key|<div[^>]+data-key[^>]+class=\"coinhive-captcha)"
    },
    "Coinimp": {
        "js": {
            "Client.Anonymous": "\\;confidence:50"
        }
    },
    "Coinlab": {
        "js": {
            "Coinlab": ""
        }
    },
    "ColorMeShop": {
        "js": {
            "Colorme": ""
        }
    },
    "Comandia": {
        "html": "<link[^>]+=['\"]//cdn\\.mycomandia\\.com",
        "js": {
            "Comandia": ""
        }
    },
    "Combeenation": {
        "html": "<iframe[^>]+src=\"[^>]+portal\\.combeenation\\.com"
    },
    "Concrete5": {
        "implies": "PHP",
        "js": {
            "CCM_IMAGE_PATH": ""
        },
        "cookies": {
            "CONCRETE5": ""
        }
    },
    "Contao": {
        "html": [
            "<!--[^>]+powered by (?:TYPOlight|Contao)[^>]*-->",
            "<link[^>]+(?:typolight|contao)\\.css"
        ],
        "implies": "PHP"
    },
    "Contentful": {
        "html": "<[^>]+(?:https?:)?//(?:assets|downloads|images|videos)\\.(?:ct?fassets\\.net|contentful\\.com)"
    },
    "Coppermine": {
        "html": "<!--Coppermine Photo Gallery ([\\d.]+)\\;version:\\1",
        "implies": "PHP"
    },
    "Craft CMS": {
        "cookies": {
            "CraftSessionId": ""
        },
        "implies": "Yii"
    },
    "Crazy Egg": {
        "js": {
            "CE2": ""
        }
    },
    "Criteo": {
        "js": {
            "Criteo": "",
            "criteo_pubtag": "",
            "criteo_q": ""
        }
    },
    "Cross Pixel": {
        "js": {
            "cp_C4w1ldN2d9PmVrkN": ""
        }
    },
    "Crypto-Loot": {
        "js": {
            "CRLT.CONFIG.ASMJS_NAME": "",
            "CryptoLoot": ""
        }
    },
    "CubeCart": {
        "html": "(?:Powered by <a href=[^>]+cubecart\\.com|<p[^>]+>Powered by CubeCart)",
        "implies": "PHP"
    },
    "Cufon": {
        "js": {
            "Cufon": ""
        }
    },
    "D3": {
        "js": {
            "d3.version": "^(.+)$\\;version:\\1"
        }
    },
    "DM Polopoly": {
        "html": "<(?:link [^>]*href|img [^>]*src)=\"/polopoly_fs/",
        "implies": "Java"
    },
    "DNN": {
        "cookies": {
            "DotNetNukeAnonymous": ""
        },
        "html": [
            "<!-- by DotNetNuke Corporation",
            "<!-- DNN Platform"
        ],
        "implies": "Microsoft ASP.NET",
        "js": {
            "DotNetNuke": "",
            "dnn.apiversion": "^(.+)$\\;version:\\1"
        }
    },
    "DTG": {
        "html": [
            "<a[^>]+Site Powered by DTG"
        ],
        "implies": "Mono.net"
    },
    "Dart": {
        "excludes": [
            "Angular",
            "AngularJS"
        ],
        "html": "/(?:<script)[^>]+(?:type=\"application/dart\")/",
        "implies": "AngularDart",
        "js": {
            "___dart__$dart_dartObject_ZxYxX_0_": "",
            "___dart_dispatch_record_ZxYxX_0_": ""
        }
    },
    "Datadome": {
        "cookies": {
            "datadome": ""
        }
    },
    "DataLife Engine": {
        "implies": [
            "PHP",
            "Apache"
        ],
        "js": {
            "dle_root": ""
        }
    },
    "Day.js": {
        "js": {
            "dayjs": ""
        }
    },
    "DedeCMS": {
        "implies": "PHP",
        "js": {
            "DedeContainer": ""
        }
    },
    "DirectAdmin": {
        "html": "<a[^>]+>DirectAdmin</a> Web Control Panel",
        "implies": [
            "PHP",
            "Apache"
        ]
    },
    "Discourse": {
        "implies": "Ruby on Rails",
        "js": {
            "Discourse": ""
        }
    },
    "Discuz! X": {
        "implies": "PHP",
        "js": {
            "DISCUZCODE": "",
            "discuzVersion": "^(.+)$\\;version:\\1",
            "discuz_uid": ""
        }
    },
    "Disqus": {
        "html": "<div[^>]+id=\"disqus_thread\"",
        "js": {
            "DISQUS": "",
            "disqus_shortname": "",
            "disqus_url": ""
        }
    },
    "Django": {
        "html": "(?:powered by <a[^>]+>Django ?([\\d.]+)?<\\/a>|<input[^>]*name=[\"']csrfmiddlewaretoken[\"'][^>]*>)\\;version:\\1",
        "implies": "Python",
        "js": {
            "__admin_media_prefix__": "",
            "django": ""
        }
    },
    "Docusaurus": {
        "implies": [
            "React",
            "webpack"
        ],
        "js": {
            "search.indexName": ""
        }
    },
    "Docker": {
        "implies": "Linux",
        "html": "<!-- This comment is expected by the docker HEALTHCHECK  -->"
    },
    "Dojo": {
        "js": {
            "dojo": "",
            "dojo.version.major": "^(.+)$\\;version:\\1"
        }
    },
    "Dokeos": {
        "html": "(?:Portal <a[^>]+>Dokeos|@import \"[^\"]+dokeos_blue)",
        "implies": [
            "PHP",
            "Xajax",
            "jQuery",
            "CKEditor"
        ]
    },
    "DokuWiki": {
        "cookies": {
            "DokuWiki": ""
        },
        "html": [
            "<div[^>]+id=\"dokuwiki__>",
            "<a[^>]+href=\"#dokuwiki__"
        ],
        "implies": "PHP"
    },
    "DovetailWRP": {
        "html": "<link[^>]* href=\"\\/DovetailWRP\\/",
        "implies": "Microsoft ASP.NET"
    },
    "Doxygen": {
        "html": "(?:<!-- Generated by Doxygen ([\\d.]+)|<link[^>]+doxygen\\.css)\\;version:\\1"
    },
    "DreamWeaver": {
        "html": "<!--[^>]*(?:InstanceBeginEditable|Dreamweaver([^>]+)target|DWLayoutDefaultTable)\\;version:\\1",
        "js": {
            "MM_showMenu": "",
            "MM_preloadImages": "",
            "MM_showHideLayers": ""
        }
    },
    "Drupal": {
        "html": "<(?:link|style)[^>]+\"/sites/(?:default|all)/(?:themes|modules)/",
        "implies": "PHP",
        "js": {
            "Drupal": ""
        }
    },
    "Drupal Commerce": {
        "html": "<[^>]+(?:id=\"block[_-]commerce[_-]cart[_-]cart|class=\"commerce[_-]product[_-]field)",
        "implies": "Drupal"
    },
    "Dynamicweb": {
        "cookies": {
            "Dynamicweb": ""
        },
        "implies": "Microsoft ASP.NET"
    },
    "EC-CUBE": {
        "implies": "PHP"
    },
    "Elementor": {
        "html": [
            "<div class=(?:\"|')[^\"']*elementor",
            "<section class=(?:\"|')[^\"']*elementor",
            "<link [^>]*href=(?:\"|')[^\"']*elementor/assets",
            "<link [^>]*href=(?:\"|')[^\"']*uploads/elementor/css"
        ],
        "js": {
            "elementorFrontend.getElements": ""
        },
        "implies": "WordPress"
    },
    "ELOG": {
        "html": "<title>ELOG Logbook Selection</title>"
    },
    "EPages": {
        "html": "<div class=\"BoxContainer\">"
    },
    "EPiServer": {
        "cookies": {
            "EPiServer": "",
            "EPiTrace": ""
        },
        "implies": "Microsoft ASP.NET"
    },
    "EPrints": {
        "implies": "Perl",
        "js": {
            "EPJS_menu_template": "",
            "EPrints": ""
        }
    },
    "Element UI": {
        "implies": [
            "Vue"
        ],
        "html": [
            "<(?:div|button) class=\"el-(?:table-column|table-filter|popper|pagination|pager|select-group|form|form-item|color-predefine|color-hue-slider|color-svpanel|color-alpha-slider|color-dropdown|color-picker|badge|tree|tree-node|select|message|dialog|checkbox|checkbox-button|checkbox-group|container|steps|carousel|menu|menu-item|submenu|menu-item-group|button|button-group|card|table|select-dropdown|row|tabs|notification|radio|progress|progress-bar|tag|popover|tooltip|cascader|cascader-menus|cascader-menu|time-spinner|spinner|spinner-inner|transfer|transfer-panel|rate|slider|dropdown|dropdown-menu|textarea|input|input-group|popup-parent|radio-group|main|breadcrumb|time-range-picker|date-range-picker|year-table|date-editor|range-editor|time-spinner|date-picker|time-panel|date-table|month-table|picker-panel|collapse|collapse-item|alert|select-dropdown|select-dropdown__empty|select-dropdown__wrap|select-dropdown__list|scrollbar|switch|carousel|upload|upload-dragger|upload-list|upload-cover|aside|input-number|header|message-box|footer|radio-button|step|autocomplete|autocomplete-suggestion|loading-parent|loading-mask|loading-spinner|)"
        ]
    },
    "Eloqua": {
        "js": {
            "elqCurESite": "",
            "elqLoad": "",
            "elqSiteID": "",
            "elq_global": ""
        }
    },
    "Ember.js": {
        "implies": "Handlebars",
        "js": {
            "Ember": "",
            "Ember.VERSION": "^(.+)$\\;version:\\1"
        }
    },
    "Enyo": {
        "js": {
            "enyo": ""
        }
    },
    "Epoch": {
        "html": "<link[^>]+?href=\"[^\"]+epoch(?:\\.min)?\\.css",
        "implies": "D3"
    },
    "Epom": {
        "js": {
            "epomCustomParams": ""
        }
    },
    "Etherpad": {
        "implies": "Node.js",
        "js": {
            "padeditbar": "",
            "padimpexp": ""
        }
    },
    "Exhibit": {
        "js": {
            "Exhibit": "",
            "Exhibit.version": "^(.+)$\\;version:\\1"
        }
    },
    "ExpressionEngine": {
        "cookies": {
            "exp_csrf_token": "",
            "exp_last_activity": "",
            "exp_tracker": ""
        },
        "implies": "PHP"
    },
    "ExtJS": {
        "js": {
            "Ext": "",
            "Ext.version": "^(.+)$\\;version:\\1",
            "Ext.versions.extjs.version": "^(.+)$\\;version:\\1"
        }
    },
    "F5 BigIP": {
        "cookies": {
            "F5_ST": "",
            "MRHSHint": "",
            "F5_HT_shrinked": "",
            "F5_fullWT": "",
            "MRHSequence": "",
            "MRHSession": "",
            "LastMRH_Session": "",
            "TIN": ""
        }
    },
    "FAST ESP": {
        "html": "<form[^>]+id=\"fastsearch\""
    },
    "FAST Search for SharePoint": {
        "html": "<input[^>]+ name=\"ParametricSearch",
        "implies": [
            "Microsoft SharePoint",
            "Microsoft ASP.NET"
        ]
    },
    "FWP": {
        "html": "<!--\\s+FwP Systems"
    },
    "Fact Finder": {
        "html": "<!-- Factfinder"
    },
    "FancyBox": {
        "implies": "jQuery",
        "js": {
            "$.fancybox.version": "^(.+)$\\;version:\\1"
        }
    },
    "Fbits": {
        "js": {
            "fbits": ""
        }
    },
    "Fingerprintjs": {
        "js": {
            "Fingerprint": "(\\d)?$\\;version:\\1",
            "Fingerprint2": "",
            "Fingerprint2.VERSION": "^(.+)$\\;version:\\1"
        }
    },
    "Firebase": {
        "js": {
            "firebase.SDK_VERSION": "([\\d.]+)$\\;version:\\1"
        }
    },
    "Flarum": {
        "html": "<div id=\"flarum-loading\"",
        "implies": [
            "PHP",
            "MySQL"
        ],
        "js": {
            "app.cache.discussionList": "",
            "app.forum.freshness": ""
        }
    },
    "Flat UI": {
        "html": "<link[^>]* href=[^>]+flat-ui(?:\\.min)?\\.css",
        "implies": "Bootstrap"
    },
    "FlexCMP": {
        "html": "<!--[^>]+FlexCMP[^>v]+v\\. ([\\d.]+)\\;version:\\1"
    },
    "FlexSlider": {
        "implies": "jQuery"
    },
    "Flickity": {
        "js": {
            "Flickity": ""
        }
    },
    "FluxBB": {
        "html": "<p id=\"poweredby\">[^<]+<a href=\"https?://fluxbb\\.org/\">",
        "implies": "PHP"
    },
    "Flyspray": {
        "cookies": {
            "flyspray_project": ""
        },
        "html": "(?:<a[^>]+>Powered by Flyspray|<map id=\"projectsearchform)",
        "implies": "PHP"
    },
    "Font Awesome": {
        "html": [
            "<link[^>]* href=[^>]+(?:([\\d.]+)/)?(?:css/)?font-awesome(?:\\.min)?\\.css\\;version:\\1",
            "<script[^>]* src=[^>]+fontawesome(?:\\.js)?"
        ]
    },
    "Fortune3": {
        "html": "(?:<link [^>]*href=\"[^\\/]*\\/\\/www\\.fortune3\\.com\\/[^\"]*siterate\\/rate\\.css|Powered by <a [^>]*href=\"[^\"]+fortune3\\.com)"
    },
    "Foswiki": {
        "cookies": {
            "FOSWIKISTRIKEONE": "",
            "SFOSWIKISID": ""
        },
        "html": [
            "<div class=\"foswiki(?:Copyright|Page|Main)\">"
        ],
        "implies": "Perl",
        "js": {
            "foswiki": ""
        },
        "meta": {
            "foswiki.SERVERTIME": "",
            "foswiki.WIKINAME": ""
        }
    },
    "FreeTextBox": {
        "html": "/<!--\\s*\\*\\s*FreeTextBox v\\d+ \\(([.\\d]+)(?:(?:.|\\n)+?<!--\\s*\\*\\s*License Type: (Distribution|Professional)License)?/i\\;version:\\1 \\2",
        "implies": "Microsoft ASP.NET",
        "js": {
            "FTB_API": "",
            "FTB_AddEvent": ""
        }
    },
    "Froala Editor": {
        "html": "<[^>]+class=\"[^\"]*(?:fr-view|fr-box)",
        "implies": [
            "jQuery",
            "Font Awesome"
        ]
    },
    "FrontPage": {
        "meta": {
            "ProgId": "^FrontPage\\.",
            "generator": "Microsoft FrontPage(?:\\s((?:Express )?[\\d.]+))?\\;version:\\1"
        }
    },
    "Fusion Ads": {
        "js": {
            "_fusion": ""
        }
    },
    "GX WebManager": {
        "html": "<!--\\s+Powered by GX"
    },
    "Gallery": {
        "html": [
            "<div id=\"gsNavBar\" class=\"gcBorder1\">",
            "<a href=\"http://gallery\\.sourceforge\\.net\"><img[^>]+Powered by Gallery\\s*(?:(?:v|Version)\\s*([0-9.]+))?\\;version:\\1"
        ],
        "js": {
            "$.fn.gallery_valign": "",
            "galleryAuthToken": ""
        }
    },
    "Gambio": {
        "html": "(?:<link[^>]* href=\"templates/gambio/|<a[^>]content\\.php\\?coID=\\d|<!-- gambio eof -->|<!--[\\s=]+Shopsoftware by Gambio GmbH \\(c\\))",
        "implies": "PHP",
        "js": {
            "gambio": ""
        }
    },
    "Gatsby": {
        "html": [
            "<div id=\"___gatsby\">",
            "<style id=\"gatsby-inlined-css\">"
        ],
        "implies": [
            "React",
            "webpack"
        ]
    },
    "Gauges": {
        "cookies": {
            "_gauges_": ""
        },
        "js": {
            "_gauges": ""
        }
    },
    "Gerrit": {
        "html": [
            ">Gerrit Code Review</a>\\s*\"\\s*\\(([0-9.]+)\\)\\;version:\\1",
            "<(?:div|style) id=\"gerrit_"
        ],
        "implies": [
            "Java",
            "git"
        ],
        "js": {
            "Gerrit": "",
            "gerrit_ui": ""
        }
    },
    "Get Satisfaction": {
        "js": {
            "GSFN": ""
        }
    },
    "GitLab": {
        "cookies": {
            "_gitlab_session": ""
        },
        "html": [
            "<meta content=\"https?://[^/]+/assets/gitlab_logo-",
            "<header class=\"navbar navbar-fixed-top navbar-gitlab with-horizontal-nav\">"
        ],
        "implies": "Ruby on Rails",
        "js": {
            "GitLab": "",
            "gl.dashboardOptions": ""
        }
    },
    "Gitea": {
        "cookies": {
            "i_like_gitea": ""
        },
        "html": [
            "<div class=\"ui left\">\\n\\s+© Gitea Version: ([\\d.]+)\\;version:\\1"
        ]
    },
    "Gitiles": {
        "html": "Powered by <a href=\"https://gerrit\\.googlesource\\.com/gitiles/\">Gitiles<",
        "implies": [
            "Java",
            "git"
        ]
    },
    "Glyphicons": {
        "html": "(?:<link[^>]* href=[^>]+glyphicons(?:\\.min)?\\.css|<img[^>]* src=[^>]+glyphicons)"
    },
    "GoJS": {
        "js": {
            "go.version": "(.*)\\;version:\\1",
            "go.GraphObject": ""
        }
    },
    "GoSquared": {
        "js": {
            "_gs": "\\;confidence:30"
        }
    },
    "GoStats": {
        "js": {
            "_goStatsRun": "",
            "_go_track_src": "",
            "go_msie": ""
        }
    },
    "Gogs": {
        "cookies": {
            "i_like_gogits": ""
        },
        "html": [
            "<div class=\"ui left\">\\n\\s+© \\d{4} Gogs Version: ([\\d.]+) Page:\\;version:\\1",
            "<button class=\"ui basic clone button\" id=\"repo-clone-ssh\" data-link=\"gogs@"
        ]
    },
    "Google AdSense": {
        "js": {
            "Goog_AdSense_": "",
            "__google_ad_urls": "",
            "google_ad_": ""
        }
    },
    "Google Analytics": {
        "cookies": {
            "__utma": "",
            "_ga": "",
            "_gat": ""
        },
        "html": "<amp-analytics [^>]*type=[\"']googleanalytics[\"']",
        "js": {
            "GoogleAnalyticsObject": "",
            "gaGlobal": ""
        }
    },
    "Google Analytics Enhanced eCommerce": {
        "implies": "Google Analytics",
        "js": {
            "gaplugins.EC": ""
        }
    },
    "Google Charts": {
        "js": {
            "__googleVisualizationAbstractRendererElementsCount__": "",
            "__gvizguard__": ""
        }
    },
    "Google Code Prettify": {
        "js": {
            "prettyPrint": ""
        }
    },
    "Google Font API": {
        "html": "<link[^>]* href=[^>]+fonts\\.(?:googleapis|google)\\.com",
        "js": {
            "WebFonts": ""
        }
    },
    "Google Tag Manager": {
        "html": [
            "googletagmanager\\.com/ns\\.html[^>]+></iframe>",
            "<!-- (?:End )?Google Tag Manager -->"
        ],
        "js": {
            "google_tag_manager": "",
            "googletag": ""
        }
    },
    "Google Web Toolkit": {
        "implies": "Java",
        "js": {
            "__gwt_": ""
        }
    },
    "Graffiti CMS": {
        "cookies": {
            "graffitibot": ""
        },
        "implies": "Microsoft ASP.NET"
    },
    "Gravatar": {
        "html": "<[^>]+gravatar\\.com/avatar/",
        "js": {
            "Gravatar": ""
        }
    },
    "Gravity Forms": {
        "html": [
            "<div class=(?:\"|')[^>]*gform_wrapper",
            "<div class=(?:\"|')[^>]*gform_body",
            "<ul [^>]*class=(?:\"|')[^>]*gform_fields",
            "<link [^>]*href=(?:\"|')[^>]*wp-content/plugins/gravityforms/css/"
        ],
        "implies": "WordPress"
    },
    "Green Valley CMS": {
        "html": "<img[^>]+/dsresource\\?objectid=",
        "implies": "Apache Tomcat"
    },
    "HTTP/2": {
        "excludes": "SPDY"
    },
    "Haddock": {
        "html": "<p>Produced by <a href=\"http://www\\.haskell\\.org/haddock/\">Haddock</a> version ([0-9.]+)</p>\\;version:\\1"
    },
    "Hammer.js": {
        "js": {
            "Ha.VERSION": "^(.+)$\\;version:\\1",
            "Hammer": "",
            "Hammer.VERSION": "^(.+)$\\;version:\\1"
        }
    },
    "Handlebars": {
        "html": "<[^>]*type=[^>]text\\/x-handlebars-template",
        "js": {
            "Handlebars": "",
            "Handlebars.VERSION": "^(.+)$\\;version:\\1"
        }
    },
    "Haravan": {
        "js": {
            "Haravan": ""
        }
    },
    "HeadJS": {
        "html": "<[^>]*data-headjs-load",
        "js": {
            "head.browser.name": ""
        }
    },
    "Heap": {
        "js": {
            "heap": ""
        }
    },
    "Hello Bar": {
        "js": {
            "HelloBar": ""
        }
    },
    "Hexo": {
        "html": [
            "Powered by <a href=\"https?://hexo\\.io/?\"[^>]*>Hexo</"
        ]
    },
    "Highcharts": {
        "html": "<svg[^>]*><desc>Created with Highcharts ([\\d.]*)\\;version:\\1",
        "js": {
            "Highcharts": "",
            "Highcharts.version": "^(.+)$\\;version:\\1"
        }
    },
    "Highlight.js": {
        "js": {
            "hljs.highlightBlock": "",
            "hljs.listLanguages": ""
        }
    },
    "Highstock": {
        "html": "<svg[^>]*><desc>Created with Highstock ([\\d.]*)\\;version:\\1"
    },
    "Bloomreach": {
        "html": "<[^>]+/binaries/(?:[^/]+/)*content/gallery/"
    },
    "Hogan.js": {
        "js": {
            "Hogan": ""
        }
    },
    "Homeland": {
        "cookies": {
            "_homeland_": ""
        },
        "implies": "Ruby on Rails"
    },
    "Hotaru CMS": {
        "cookies": {
            "hotaru_mobile": ""
        },
        "implies": "PHP"
    },
    "Hotjar": {
        "js": {
            "HotLeadfactory": "",
            "HotleadController": "",
            "hj.apiUrlBase": ""
        }
    },
    "HubSpot": {
        "html": "<!-- Start of Async HubSpot",
        "js": {
            "_hsq": "",
            "hubspot": ""
        }
    },
    "Hugo": {
        "html": "powered by <a [^>]*href=\"http://hugo.spf13.com"
    },
    "Hybris": {
        "cookies": {
            "_hybris": ""
        },
        "html": "<[^>]+/(?:sys_master|hybr|_ui/(?:responsive/)?(?:desktop|common(?:/images|/img)?))/",
        "implies": "Java"
    },
    "IBM WebSphere Commerce": {
        "html": "href=\"(?:\\/|[^>]+)webapp\\/wcs\\/",
        "implies": "Java"
    },
    "INFOnline": {
        "js": {
            "iam_data": "",
            "szmvars": ""
        }
    },
    "IPB": {
        "cookies": {
            "ipbWWLmodpids": "",
            "ipbWWLsession_id": ""
        },
        "html": "<link[^>]+ipb_[^>]+\\.css",
        "implies": [
            "PHP",
            "MySQL"
        ],
        "js": {
            "IPBoard": "",
            "ipb_var": "",
            "ipsSettings": ""
        }
    },
    "IdoSell Shop": {
        "js": {
            "IAI_Ajax": ""
        }
    },
    "Immutable.js": {
        "js": {
            "Immutable": "",
            "Immutable.version": "^(.+)$\\;version:\\1"
        }
    },
    "ImpressCMS": {
        "cookies": {
            "ICMSSession": "",
            "ImpressCMS": ""
        },
        "implies": "PHP"
    },
    "InProces": {
        "html": "<!-- CSS InProces Portaal default -->"
    },
    "Indexhibit": {
        "html": "<(?:link|a href) [^>]+ndxz-studio",
        "implies": [
            "PHP",
            "Apache",
            "Exhibit"
        ]
    },
    "Indico": {
        "cookies": {
            "MAKACSESSION": ""
        },
        "html": "Powered by\\s+(?:CERN )?<a href=\"http://(?:cdsware\\.cern\\.ch/indico/|indico-software\\.org|cern\\.ch/indico)\">(?:CDS )?Indico( [\\d\\.]+)?\\;version:\\1"
    },
    "InfernoJS": {
        "js": {
            "Inferno": "",
            "Inferno.version": "^(.+)$\\;version:\\1"
        }
    },
    "Infusionsoft": {
        "html": [
            "<input [^>]*name=\"infusionsoft_version\" [^>]*value=\"([^>]*)\" [^>]*\\/>\\;version:\\1",
            "<input [^>]*value=\"([^>]*)\" [^>]*name=\"infusionsoft_version\" [^>]*\\/>\\;version:\\1"
        ]
    },
    "Inspectlet": {
        "html": [
            "<!-- (?:Begin|End) Inspectlet Embed Code -->"
        ],
        "js": {
            "__insp": "",
            "__inspld": ""
        }
    },
    "Instabot": {
        "js": {
            "Instabot": ""
        }
    },
    "InstantCMS": {
        "cookies": {
            "InstantCMS[logdate]": ""
        },
        "implies": "PHP"
    },
    "Intercom": {
        "js": {
            "Intercom": ""
        }
    },
    "Invenio": {
        "cookies": {
            "INVENIOSESSION": ""
        },
        "html": "(?:Powered by|System)\\s+(?:CERN )?<a (?:class=\"footer\" )?href=\"http://(?:cdsware\\.cern\\.ch(?:/invenio)?|invenio-software\\.org|cern\\.ch/invenio)(?:/)?\">(?:CDS )?Invenio</a>\\s*v?([\\d\\.]+)?\\;version:\\1"
    },
    "Inwemo": {
        "js": {
            "Inwemo": ""
        }
    },
    "Ionic": {
        "implies": "Angular",
        "js": {
            "Ionic.config": "",
            "Ionic.version": "^(.+)$\\;version:\\1"
        }
    },
    "Ionicons": {
        "html": "<link[^>]* href=[^>]+ionicons(?:\\.min)?\\.css"
    },
    "JBoss Web": {
        "excludes": "Apache Tomcat",
        "implies": "JBoss Application Server"
    },
    "JS Charts": {
        "js": {
            "JSChart": ""
        }
    },
    "JSEcoin": {
        "js": {
            "jseMine": ""
        }
    },
    "JTL Shop": {
        "cookies": {
            "JTLSHOP": ""
        },
        "html": "(?:<input[^>]+name=\"JTLSHOP|<a href=\"jtl\\.php)"
    },
    "Jahia DX": {
        "html": "<script id=\"staticAssetAggregatedJavascrip"
    },
    "Java": {
        "cookies": {
            "JSESSIONID": ""
        }
    },
    "JavaScript Infovis Toolkit": {
        "js": {
            "$jit": "",
            "$jit.version": "^(.+)$\\;version:\\1"
        }
    },
    "Jekyll": {
        "html": [
            "Powered by <a href=\"https?://jekyllrb\\.com\"[^>]*>Jekyll</",
            "<!-- Created with Jekyll Now -",
            "<!-- Begin Jekyll SEO tag"
        ]
    },
    "Jenkins": {
        "html": "<span class=\"jenkins_ver\"><a href=\"https://jenkins\\.io/\">Jenkins ver\\. ([\\d.]+)\\;version:\\1",
        "implies": "Java",
        "js": {
            "jenkinsCIGlobal": "",
            "jenkinsRules": ""
        }
    },
    "Jetshop": {
        "html": "<(?:div|aside) id=\"jetshop-branding\">",
        "js": {
            "JetshopData": ""
        }
    },
    "Jimdo": {
        "js": {
            "jimdoData": "",
            "jimdo_Data": ""
        }
    },
    "Jirafe": {
        "js": {
            "jirafe": ""
        }
    },
    "JobberBase": {
        "implies": "PHP",
        "js": {
            "Jobber": ""
        }
    },
    "Joomla": {
        "html": "(?:<div[^>]+id=\"wrapper_r\"|<(?:link|script)[^>]+(?:feed|components)/com_|<table[^>]+class=\"pill)\\;confidence:50",
        "implies": "PHP",
        "js": {
            "Joomla": "",
            "jcomments": ""
        }
    },
    "K2": {
        "html": "<!--(?: JoomlaWorks \"K2\"| Start K2)",
        "implies": "Joomla",
        "js": {
            "K2RatingURL": ""
        }
    },
    "KISSmetrics": {
        "js": {
            "KM_COOKIE_DOMAIN": ""
        }
    },
    "Kajabi": {
        "cookies": {
            "_kjb_session": ""
        },
        "js": {
            "Kajabi": ""
        }
    },
    "Kampyle": {
        "cookies": {
            "k_visit": ""
        },
        "js": {
            "KAMPYLE_COMMON": "",
            "k_track": "",
            "kampyle": ""
        }
    },
    "Kamva": {
        "js": {
            "Kamva": ""
        }
    },
    "Kendo UI": {
        "html": "<link[^>]*\\s+href=[^>]*styles/kendo\\.common(?:\\.min)?\\.css[^>]*/>",
        "implies": "jQuery",
        "js": {
            "kendo": "",
            "kendo.version": "^(.+)$\\;version:\\1"
        }
    },
    "Kentico CMS": {
        "cookies": {
            "CMSPreferredCulture": ""
        }
    },
    "Kibana": {
        "html": "<title>Kibana</title>",
        "implies": "Node.js"
    },
    "KineticJS": {
        "js": {
            "Kinetic": "",
            "Kinetic.version": "^(.+)$\\;version:\\1"
        }
    },
    "Klarna Checkout": {
        "js": {
            "_klarnaCheckout": ""
        }
    },
    "Knockout.js": {
        "js": {
            "ko.version": "^(.+)$\\;version:\\1"
        }
    },
    "Koala Framework": {
        "html": "<!--[^>]+This website is powered by Koala Web Framework CMS",
        "implies": "PHP"
    },
    "KobiMaster": {
        "implies": "Microsoft ASP.NET",
        "js": {
            "kmGetSession": "",
            "kmPageInfo": ""
        }
    },
    "Koha": {
        "html": [
            "<input name=\"koha_login_context\" value=\"intranet\" type=\"hidden\">",
            "<a href=\"/cgi-bin/koha/"
        ],
        "implies": "Perl",
        "js": {
            "KOHA": ""
        }
    },
    "Kohana": {
        "cookies": {
            "kohanasession": ""
        },
        "implies": "PHP"
    },
    "Koken": {
        "cookies": {
            "koken_referrer": ""
        },
        "html": [
            "<html lang=\"en\" class=\"k-source-essays k-lens-essays\">",
            "<!--\\s+KOKEN DEBUGGING"
        ],
        "implies": [
            "PHP",
            "MySQL"
        ]
    },
    "Koobi": {
        "html": "<!--[^K>-]+Koobi ([a-z\\d.]+)\\;version:\\1"
    },
    "Kubernetes Dashboard": {
        "html": "<html ng-app=\"kubernetesDashboard\">"
    },
    "Laravel": {
        "cookies": {
            "laravel_session": ""
        },
        "implies": "PHP",
        "js": {
            "Laravel": ""
        }
    },
    "Leaflet": {
        "js": {
            "L.DistanceGrid": "",
            "L.PosAnimation": "",
            "L.version": "^(.+)$\\;version:\\1\\;confidence:0"
        }
    },
    "Less": {
        "html": "<link[^>]+ rel=\"stylesheet/less\""
    },
    "Liferay": {
        "js": {
            "Liferay": ""
        }
    },
    "LightMon Engine": {
        "cookies": {
            "lm_online": ""
        },
        "html": "<!-- Lightmon Engine Copyright Lightmon",
        "implies": "PHP"
    },
    "Lightbox": {
        "html": "<link [^>]*href=\"[^\"]+lightbox(?:\\.min)?\\.css"
    },
    "Lightspeed eCom": {
        "html": "<!-- \\[START\\] 'blocks/head\\.rain' -->"
    },
    "Lighty": {
        "cookies": {
            "lighty_version": ""
        },
        "implies": "PHP"
    },
    "LinkSmart": {
        "js": {
            "LS_JSON": "",
            "LinkSmart": "",
            "_mb_site_guid": ""
        }
    },
    "List.js": {
        "js": {
            "List": ""
        }
    },
    "Lithium": {
        "cookies": {
            "LithiumVisitor": ""
        },
        "html": " <a [^>]+Powered by Lithium",
        "implies": "PHP",
        "js": {
            "LITHIUM": ""
        }
    },
    "LiveAgent": {
        "js": {
            "LiveAgent": ""
        }
    },
    "LiveStreet CMS": {
        "implies": "PHP",
        "js": {
            "LIVESTREET_SECURITY_KEY": ""
        }
    },
    "Livefyre": {
        "html": "<[^>]+(?:id|class)=\"livefyre",
        "js": {
            "FyreLoader": "",
            "L.version": "^(.+)$\\;confidence:0\\;version:\\1",
            "LF.CommentCount": "",
            "fyre": ""
        }
    },
    "Liveinternet": {
        "html": [
            "<script[^<>]*>[^]{0,128}?src\\s*=\\s*['\"]//counter\\.yadro\\.ru/hit(?:;\\S+)?\\?(?:t\\d+\\.\\d+;)?r",
            "<!--LiveInternet counter-->",
            "<!--/LiveInternet-->",
            "<a href=\"http://www\\.liveinternet\\.ru/click\""
        ]
    },
    "LocalFocus": {
        "html": "<iframe[^>]+localfocus",
        "implies": [
            "Angular",
            "D3"
        ]
    },
    "Locomotive": {
        "html": "<link[^>]*/sites/[a-z\\d]{24}/theme/stylesheets",
        "implies": [
            "Ruby on Rails",
            "MongoDB"
        ]
    },
    "Lodash": {
        "excludes": "Underscore.js",
        "js": {
            "_.VERSION": "^(.+)$\\;confidence:0\\;version:\\1",
            "_.differenceBy": ""
        }
    },
    "Luigi’s Box": {
        "js": {
            "Luigis": ""
        }
    },
    "MHonArc": {
        "html": "<!-- MHonArc v([0-9.]+) -->\\;version:\\1"
    },
    "MODX": {
        "html": [
            "<a[^>]+>Powered by MODX</a>",
            "<(?:link|script)[^>]+assets/snippets/\\;confidence:20",
            "<form[^>]+id=\"ajaxSearch_form\\;confidence:20",
            "<input[^>]+id=\"ajaxSearch_input\\;confidence:20"
        ],
        "implies": "PHP",
        "js": {
            "MODX": "",
            "MODX_MEDIA_PATH": ""
        }
    },
    "MYPAGE Platform": {
        "cookies": {
            "botble_session": ""
        },
        "implies": "Laravel"
    },
    "MadAdsMedia": {
        "js": {
            "setMIframe": "",
            "setMRefURL": ""
        }
    },
    "Magento": {
        "cookies": {
            "frontend": "\\;confidence:50"
        },
        "html": [
            "<script [^>]+data-requiremodule=\"mage/\\;version:2",
            "<script [^>]+data-requiremodule=\"Magento_\\;version:2",
            "<script type=\"text/x-magento-init\">"
        ],
        "implies": [
            "PHP",
            "MySQL"
        ],
        "js": {
            "Mage": "",
            "VarienForm": ""
        }
    },
    "MailChimp": {
        "html": [
            "<form [^>]*data-mailchimp-url",
            "<form [^>]*id=\"mc-embedded-subscribe-form\"",
            "<form [^>]*name=\"mc-embedded-subscribe-form\"",
            "<input [^>]*id=\"mc-email\"\\;confidence:20",
            "<!-- Begin MailChimp Signup Form -->"
        ]
    },
    "MakeShopKorea": {
        "js": {
            "Makeshop": "",
            "MakeshopLogUniqueId": ""
        }
    },
    "Mambo": {
        "excludes": "Joomla"
    },
    "MantisBT": {
        "html": "<img[^>]+ alt=\"Powered by Mantis Bugtracker",
        "implies": "PHP"
    },
    "Marionette.js": {
        "implies": [
            "Underscore.js",
            "Backbone.js"
        ],
        "js": {
            "Marionette": "",
            "Marionette.VERSION": "^(.+)$\\;version:\\1"
        }
    },
    "Marked": {
        "js": {
            "marked": ""
        }
    },
    "Marketo": {
        "js": {
            "Munchkin": ""
        }
    },
    "Material Design Lite": {
        "html": "<link[^>]* href=\"[^\"]*material(?:\\.[\\w]+-[\\w]+)?(?:\\.min)?\\.css",
        "js": {
            "MaterialIconToggle": ""
        }
    },
    "Materialize CSS": {
        "html": "<link[^>]* href=\"[^\"]*materialize(?:\\.min)?\\.css",
        "implies": "jQuery"
    },
    "MathJax": {
        "js": {
            "MathJax": "",
            "MathJax.version": "^(.+)$\\;version:\\1"
        }
    },
    "Matomo": {
        "cookies": {
            "PIWIK_SESSID": ""
        },
        "js": {
            "Matomo": "",
            "Piwik": "",
            "_paq": ""
        },
        "meta": {
            "apple-itunes-app": "app-id=737216887",
            "generator": "(?:Matomo|Piwik) - Open Source Web Analytics",
            "google-play-app": "app-id=org\\.piwik\\.mobile2"
        }
    },
    "Mattermost": {
        "html": "<noscript> To use Mattermost, please enable JavaScript\\. </noscript>",
        "implies": [
            "Go",
            "React"
        ],
        "js": {
            "mm_config": "",
            "mm_current_user_id": "",
            "mm_license": "",
            "mm_user": ""
        }
    },
    "Mautic": {
        "js": {
            "MauticTrackingObject": ""
        }
    },
    "MediaElement.js": {
        "js": {
            "mejs": "",
            "mejs.version": "^(.+)$\\;version:\\1"
        }
    },
    "MediaWiki": {
        "html": [
            "<body[^>]+class=\"mediawiki\"",
            "<(?:a|img)[^>]+>Powered by MediaWiki</a>",
            "<a[^>]+/Special:WhatLinksHere/"
        ],
        "implies": "PHP",
        "js": {
            "mw.util.toggleToc": ""
        }
    },
    "Meebo": {
        "html": "(?:<iframe id=\"meebo-iframe\"|Meebo\\('domReady'\\))"
    },
    "Melis CMS V2": {
        "html": "<!-- Rendered with Melis CMS V2"
    },
    "Mermaid": {
        "html": "<div [^>]*class=[\"']mermaid[\"']>\\;confidence:90",
        "js": {
            "mermaid": ""
        }
    },
    "Meteor": {
        "html": "<link[^>]+__meteor-css__",
        "implies": [
            "MongoDB",
            "Node.js"
        ],
        "js": {
            "Meteor": "",
            "Meteor.release": "^METEOR@([\\d.]+)\\;version:\\1"
        }
    },
    "Methode": {
        "html": "<!-- Methode uuid: \"[a-f\\d]+\" ?-->",
        "meta": {
            "eomportal-id": "\\d+",
            "eomportal-instanceid": "\\d+",
            "eomportal-lastUpdate": "",
            "eomportal-loid": "[\\d.]+",
            "eomportal-uuid": "[a-f\\d]+"
        }
    },
    "Microsoft ASP.NET": {
        "cookies": {
            "ASP.NET_SessionId": "",
            "ASPSESSION": ""
        },
        "html": "<input[^>]+name=\"__VIEWSTATE",
        "implies": "IIS\\;confidence:50"
    },
    "Microsoft Excel": {
        "html": "(?:<html [^>]*xmlns:w=\"urn:schemas-microsoft-com:office:excel\"|<!--\\s*(?:START|END) OF OUTPUT FROM EXCEL PUBLISH AS WEB PAGE WIZARD\\s*-->|<div [^>]*x:publishsource=\"?Excel\"?)",
        "meta": {
            "ProgId": "^Excel\\.",
            "generator": "Microsoft Excel( [\\d.]+)?\\;version:\\1"
        }
    },
    "Microsoft PowerPoint": {
        "html": "(?:<html [^>]*xmlns:w=\"urn:schemas-microsoft-com:office:powerpoint\"|<link rel=\"?Presentation-XML\"? href=\"?[^\"]+\\.xml\"?>|<o:PresentationFormat>[^<]+</o:PresentationFormat>[^!]+<o:Slides>\\d+</o:Slides>(?:[^!]+<o:Version>([\\d.]+)</o:Version>)?)\\;version:\\1",
        "meta": {
            "ProgId": "^PowerPoint\\.",
            "generator": "Microsoft PowerPoint ( [\\d.]+)?\\;version:\\1"
        }
    },
    "Microsoft Publisher": {
        "html": "(?:<html [^>]*xmlns:w=\"urn:schemas-microsoft-com:office:publisher\"|<!--[if pub]><xml>)",
        "meta": {
            "ProgId": "^Publisher\\.",
            "generator": "Microsoft Publisher( [\\d.]+)?\\;version:\\1"
        }
    },
    "Microsoft SharePoint": {
        "js": {
            "SPDesignerProgID": "",
            "_spBodyOnLoadCalled": ""
        }
    },
    "Microsoft Word": {
        "html": "(?:<html [^>]*xmlns:w=\"urn:schemas-microsoft-com:office:word\"|<w:WordDocument>|<div [^>]*class=\"?WordSection1[\" >]|<style[^>]*>[^>]*@page WordSection1)",
        "meta": {
            "ProgId": "^Word\\.",
            "generator": "Microsoft Word( [\\d.]+)?\\;version:\\1"
        }
    },
    "Mietshop": {
        "html": "<a href=\"https://ssl\\.mietshop\\.d"
    },
    "Milligram": {
        "html": [
            "<link[^>]+?href=\"[^\"]+milligram(?:\\.min)?\\.css"
        ]
    },
    "Minero.cc": {
        "script": [
            "//minero\\.cc/lib/minero(?:-miner|-hidden)?\\.min\\.js"
        ]
    },
    "MiniBB": {
        "html": "<a href=\"[^\"]+minibb[^<]+</a>[^<]+\\n<!--End of copyright link"
    },
    "Mint": {
        "js": {
            "Mint": ""
        }
    },
    "Mixpanel": {
        "js": {
            "mixpanel": ""
        }
    },
    "Mobify": {
        "js": {
            "Mobify": ""
        }
    },
    "Mobirise": {
        "html": [
            "<!-- Site made with Mobirise Website Builder v([\\d.]+)\\;version:\\1"
        ]
    },
    "MochiKit": {
        "js": {
            "MochiKit": "",
            "MochiKit.MochiKit.VERSION": "^(.+)$\\;version:\\1"
        }
    },
    "Modernizr": {
        "js": {
            "Modernizr._version": "^(.+)$\\;version:\\1"
        }
    },
    "Moguta.CMS": {
        "html": "<link[^>]+href=[\"'][^\"]+mg-(?:core|plugins|templates)/",
        "implies": "PHP"
    },
    "MoinMoin": {
        "cookies": {
            "MOIN_SESSION": ""
        },
        "implies": "Python",
        "js": {
            "show_switch2gui": ""
        }
    },
    "Mollom": {
        "html": "<img[^>]+\\.mollom\\.com"
    },
    "Moment.js": {
        "js": {
            "moment": "",
            "moment.version": "^(.+)$\\;version:\\1"
        }
    },
    "Monerominer": {
        "html": "<iframe[^>]+src=[\\'\"]https?://monerominer\\.rocks/miner\\.php\\?siteid="
    },
    "Mono.net": {
        "implies": "Matomo",
        "js": {
            "_monoTracker": ""
        }
    },
    "MooTools": {
        "js": {
            "MooTools": "",
            "MooTools.version": "^(.+)$\\;version:\\1"
        }
    },
    "Moodle": {
        "cookies": {
            "MOODLEID_": "",
            "MoodleSession": ""
        },
        "html": "<img[^>]+moodlelogo",
        "implies": "PHP",
        "js": {
            "M.core": "",
            "Y.Moodle": ""
        }
    },
    "MotoCMS": {
        "html": "<link [^>]*href=\"[^>]*\\/mt-content\\/[^>]*\\.css",
        "implies": [
            "PHP",
            "AngularJS",
            "jQuery"
        ]
    },
    "Mouse Flow": {
        "js": {
            "_mfq": ""
        }
    },
    "Mustache": {
        "js": {
            "Mustache.version": "^(.+)$\\;version:\\1"
        }
    },
    "MyBB": {
        "html": "(?:<script [^>]+\\s+<!--\\s+lang\\.no_new_posts|<a[^>]* title=\"Powered By MyBB)",
        "implies": [
            "PHP",
            "MySQL"
        ],
        "js": {
            "MyBB": ""
        }
    },
    "NVD3": {
        "html": "<link[^>]* href=[^>]+nv\\.d3(?:\\.min)?\\.css",
        "implies": "D3",
        "js": {
            "nv.addGraph": "",
            "nv.version": "^(.+)$\\;confidence:0\\;version:\\1"
        }
    },
    "Neos CMS": {
        "excludes": "TYPO3 CMS",
        "implies": "Neos Flow"
    },
    "Neos Flow": {
        "excludes": "TYPO3 CMS",
        "implies": "PHP"
    },
    "Neto": {
        "js": {
            "NETO": ""
        }
    },
    "Netsuite": {
        "cookies": {
            "NS_VER": ""
        }
    },
    "Nette Framework": {
        "cookies": {
            "nette-browser": ""
        },
        "html": [
            "<input[^>]+data-nette-rules",
            "<div[^>]+id=\"snippet-",
            "<input[^>]+id=\"frm-"
        ],
        "implies": "PHP",
        "js": {
            "Nette": "",
            "Nette.version": "^(.+)$\\;version:\\1"
        }
    },
    "New Relic": {
        "js": {
            "NREUM": "",
            "newrelic": ""
        }
    },
    "Next.js": {
        "implies": [
            "React",
            "webpack",
            "Node.js"
        ],
        "js": {
            "__NEXT_DATA__": ""
        }
    },
    "NextGEN Gallery": {
        "html": [
            "<!-- <meta name=\"NextGEN\" version=\"([\\d.]+)\" /> -->\\;version:\\1"
        ],
        "implies": [
            "WordPress"
        ]
    },
    "OWL Carousel": {
        "html": "<link [^>]*href=\"[^\"]+owl\\.carousel(?:\\.min)?\\.css",
        "implies": "jQuery"
    },
    "OXID eShop": {
        "html": "<!--[^-]*OXID eShop",
        "js": {
            "oxCookieNote": "",
            "oxInputValidator": "",
            "oxLoginBox": "",
            "oxModalPopup": "",
            "oxTopMenu": ""
        }
    },
    "October CMS": {
        "cookies": {
            "october_session=": ""
        },
        "implies": "Laravel"
    },
    "Octopress": {
        "html": "Powered by <a href=\"http://octopress\\.org\">",
        "implies": "Jekyll"
    },
    "Odoo": {
        "html": "<link[^>]* href=[^>]+/web/css/(?:web\\.assets_common/|website\\.assets_frontend/)\\;confidence:25",
        "implies": [
            "Python",
            "PostgreSQL",
            "Node.js",
            "Less"
        ]
    },
    "OneAPM": {
        "js": {
            "BWEUM": ""
        }
    },
    "OneStat": {
        "js": {
            "OneStat_Pageview": ""
        }
    },
    "Open AdStream": {
        "js": {
            "OAS_AD": ""
        }
    },
    "Open Classifieds": {
        "meta": {
            "author": "open-classifieds\\.com",
            "copyright": "Open Classifieds ?([0-9.]+)?\\;version:\\1"
        }
    },
    "Open Journal Systems": {
        "cookies": {
            "OJSSID": ""
        },
        "implies": "PHP"
    },
    "Open Web Analytics": {
        "html": "<!-- (?:Start|End) Open Web Analytics Tracker -->",
        "js": {
            "OWA.config.baseUrl": "",
            "owa_baseUrl": "",
            "owa_cmds": ""
        }
    },
    "Open eShop": {
        "implies": "PHP",
        "meta": {
            "author": "open-eshop\\.com",
            "copyright": "Open eShop ?([0-9.]+)?\\;version:\\1"
        }
    },
    "OpenCart": {
        "html": "(?:index\\.php\\?route=[a-z]+/|Powered By <a href=\"[^>]+OpenCart)",
        "implies": "PHP"
    },
    "OpenCms": {
        "html": "<link href=\"/opencms/",
        "implies": "Java"
    },
    "OpenGrok": {
        "cookies": {
            "OpenGrok": ""
        },
        "implies": "Java"
    },
    "OpenLayers": {
        "js": {
            "OpenLayers.VERSION_NUMBER": "([\\d.]+)\\;version:\\1",
            "ol.CanvasMap": ""
        }
    },
    "OpenText Web Solutions": {
        "html": "<!--[^>]+published by Open Text Web Solutions",
        "implies": "Microsoft ASP.NET"
    },
    "OpenUI5": {
        "js": {
            "sap.ui.version": "^(.+)$\\;version:\\1"
        }
    },
    "OpenX": {
        "script": [
            "https?://[^/]*\\.openx\\.net",
            "https?://[^/]*\\.servedbyopenx\\.com"
        ]
    },
    "Optimizely": {
        "js": {
            "optimizely": ""
        }
    },
    "Oracle Commerce": {
        "html": "<[^>]+_dyncharset"
    },
    "Oracle Commerce Cloud": {
        "html": "<[^>]+id=\"oracle-cc\""
    },
    "Outbrain": {
        "js": {
            "OB_releaseVer": "^(.+)$\\;version:\\1",
            "OutbrainPermaLink": ""
        }
    },
    "Outlook Web App": {
        "html": "<link\\s[^>]*href=\"[^\"]*?([\\d.]+)/themes/resources/owafont\\.css\\;version:\\1",
        "implies": "Microsoft ASP.NET",
        "js": {
            "IsOwaPremiumBrowser": ""
        }
    },
    "PDF.js": {
        "html": "<\\/div>\\s*<!-- outerContainer -->\\s*<div\\s*id=\"printContainer\"><\\/div>",
        "js": {
            "PDFJS": "",
            "PDFJS.version": "^(.+)$\\;version:\\1"
        }
    },
    "PHP": {
        "cookies": {
            "PHPSESSID": ""
        }
    },
    "PHP-Fusion": {
        "html": "Powered by <a href=\"[^>]+php-fusion",
        "implies": [
            "PHP",
            "MySQL"
        ]
    },
    "PHP-Nuke": {
        "html": "<[^>]+Powered by PHP-Nuke",
        "implies": "PHP"
    },
    "PHPDebugBar": {
        "js": {
            "PhpDebugBar": "",
            "phpdebugbar": ""
        }
    },
    "Pagevamp": {
        "js": {
            "Pagevamp": ""
        }
    },
    "Paper.js": {
        "js": {
            "paper.version": "^(.+)$\\;version:\\1"
        }
    },
    "Pardot": {
        "js": {
            "piAId": "",
            "piCId": "",
            "piHostname": "",
            "piProtocol": "",
            "piTracker": ""
        }
    },
    "Parse.ly": {
        "js": {
            "PARSELY": ""
        }
    },
    "PayPal": {
        "html": "<input[^>]+_s-xclick",
        "js": {
            "PAYPAL": ""
        }
    },
    "Pelican": {
        "html": [
            "powered by <a href=\"[^>]+getpelican\\.com",
            "powered by <a href=\"https?://pelican\\.notmyidea\\.org"
        ],
        "implies": "Python"
    },
    "Percussion": {
        "html": "<[^>]+class=\"perc-region\""
    },
    "Phabricator": {
        "cookies": {
            "phsid": ""
        },
        "html": "<[^>]+(?:class|id)=\"phabricator-",
        "implies": [
            "PHP"
        ]
    },
    "Phaser": {
        "js": {
            "Phaser": "",
            "Phaser.VERSION": "^(.+)$\\;version:\\1"
        }
    },
    "Phenomic": {
        "html": [
            "<[^>]+id=\"phenomic(?:root)?\""
        ],
        "implies": [
            "React"
        ]
    },
    "Play": {
        "cookies": {
            "PLAY_SESSION": ""
        },
        "implies": "Scala"
    },
    "Pligg": {
        "html": "<span[^>]+id=\"xvotes-0",
        "js": {
            "pligg_": ""
        }
    },
    "Plotly": {
        "implies": "D3",
        "js": {
            "Plotly.version": "([\\d.])\\;version:\\1"
        }
    },
    "Po.st": {
        "js": {
            "pwidget_config": ""
        }
    },
    "Polyfill": {
        "script": [
            "^https?://cdn\\.polyfill\\.io/",
            "/polyfill\\.min\\.js"
        ]
    },
    "Polymer": {
        "html": "(?:<polymer-[^>]+|<link[^>]+rel=\"import\"[^>]+/polymer\\.html\")",
        "js": {
            "Polymer.version": "^(.+)$\\;version:\\1"
        }
    },
    "Posterous": {
        "html": "<div class=\"posterous",
        "js": {
            "Posterous": ""
        }
    },
    "Powergap": {
        "html": [
            "<a[^>]+title=\"POWERGAP",
            "<input type=\"hidden\" name=\"shopid\""
        ]
    },
    "Prebid": {
        "js": {
            "PREBID_TIMEOUT": "",
            "pbjs": ""
        }
    },
    "Prefix-Free": {
        "js": {
            "PrefixFree": ""
        }
    },
    "PrestaShop": {
        "cookies": {
            "PrestaShop": ""
        },
        "html": [
            "Powered by <a\\s+[^>]+>PrestaShop",
            "<!-- /Block [a-z ]+ module (?:HEADER|TOP)?\\s?-->",
            "<!-- /Module Block [a-z ]+ -->"
        ],
        "implies": [
            "PHP",
            "MySQL"
        ],
        "js": {
            "freeProductTranslation": "\\;confidence:25",
            "priceDisplayMethod": "\\;confidence:25",
            "priceDisplayPrecision": "\\;confidence:25"
        }
    },
    "Prism": {
        "js": {
            "Prism": ""
        }
    },
    "Project Wonderful": {
        "html": "<div[^>]+id=\"pw_adbox_",
        "js": {
            "pw_adloader": ""
        }
    },
    "ProjectPoi": {
        "js": {
            "ProjectPoi": ""
        }
    },
    "Projesoft": {
        "script": [
            "projesoft\\.js"
        ]
    },
    "Prototype": {
        "js": {
            "Prototype.Version": "^(.+)$\\;version:\\1"
        }
    },
    "Protovis": {
        "js": {
            "protovis": ""
        }
    },
    "Proximis Omnichannel": {
        "html": "<html[^>]+data-ng-app=\"RbsChangeApp\"",
        "implies": [
            "PHP",
            "AngularJS"
        ],
        "js": {
            "__change": ""
        }
    },
    "Public CMS": {
        "cookies": {
            "PUBLICCMS_USER": ""
        },
        "implies": "Java"
    },
    "Pure CSS": {
        "html": [
            "<link[^>]+(?:([\\d.])+/)?pure(?:-min)?\\.css\\;version:\\1",
            "<div[^>]+class=\"[^\"]*pure-u-(?:sm-|md-|lg-|xl-)?\\d-\\d"
        ]
    },
    "Pygments": {
        "html": "<link[^>]+pygments\\.css[\"']"
    },
    "PyroCMS": {
        "cookies": {
            "pyrocms": ""
        },
        "implies": "Laravel"
    },
    "Quantcast": {
        "js": {
            "quantserve": ""
        }
    },
    "Question2Answer": {
        "html": "<!-- Powered by Question2Answer",
        "implies": "PHP"
    },
    "Quick.CMS": {
        "html": "<a href=\"[^>]+opensolution\\.org/\">CMS by"
    },
    "Quick.Cart": {
        "html": "<a href=\"[^>]+opensolution\\.org/\">(?:Shopping cart by|Sklep internetowy)"
    },
    "Quill": {
        "js": {
            "Quill": ""
        }
    },
    "RBS Change": {
        "html": "<html[^>]+xmlns:change=",
        "implies": "PHP"
    },
    "RD Station": {
        "js": {
            "RDStation": ""
        }
    },
    "RDoc": {
        "html": [
            "<link[^>]+href=\"[^\"]*rdoc-style\\.css",
            "Generated by <a[^>]+href=\"https?://rdoc\\.rubyforge\\.org[^>]+>RDoc</a> ([\\d.]*\\d)\\;version:\\1"
        ],
        "implies": "Ruby"
    },
    "RainLoop": {
        "html": [
            "<link[^>]href=\"rainloop/v/([0-9.]+)/static/apple-touch-icon\\.png/>\\;version:\\1"
        ],
        "implies": "PHP",
        "js": {
            "rainloopI18N": "",
            "rainloop": ""
        }
    },
    "Rakuten DBCore": {
        "meta": {
            "generator": "Rakuten DBCore",
            "generator:site": "http://ecservice\\.rakuten\\.com\\.br"
        }
    },
    "Rakuten Digital Commerce": {
        "js": {
            "RakutenApplication": ""
        }
    },
    "Raphael": {
        "js": {
            "Raphael.version": "^(.+)$\\;version:\\1"
        }
    },
    "Raychat": {
        "js": {
            "Raychat": ""
        }
    },
    "Rayo": {
        "implies": [
            "AngularJS",
            "Microsoft ASP.NET"
        ],
        "js": {
            "Rayo": ""
        }
    },
    "ReDoc": {
        "html": "<redoc ",
        "implies": "React",
        "js": {
            "Redoc.version": "^(.+)$\\;version:\\1"
        }
    },
    "React": {
        "html": "<[^>]+data-react",
        "js": {
            "React.version": "^(.+)$\\;version:\\1",
            "react.version": "^(.+)$\\;version:\\1"
        }
    },
    "Reddit": {
        "html": "(?:<a[^>]+Powered by Reddit|powered by <a[^>]+>reddit<)",
        "implies": "Python",
        "js": {
            "reddit": ""
        }
    },
    "Redmine": {
        "cookies": {
            "_redmine_session": ""
        },
        "html": "Powered by <a href=\"[^>]+Redmine",
        "implies": "Ruby on Rails"
    },
    "Reinvigorate": {
        "js": {
            "reinvigorate": ""
        }
    },
    "RequireJS": {
        "js": {
            "requirejs.version": "^(.+)$\\;version:\\1"
        }
    },
    "Reveal.js": {
        "implies": "Highlight.js",
        "js": {
            "Reveal.VERSION": "^(.+)$\\;version:\\1"
        }
    },
    "Revel": {
        "cookies": {
            "REVEL_FLASH": "",
            "REVEL_SESSION": ""
        },
        "implies": "Go"
    },
    "Revslider": {
        "html": [
            "<link[^>]* href=[\\'\"][^']+revslider[/\\w-]+\\.css\\?ver=([0-9.]+)[\\'\"]\\;version:\\1"
        ],
        "implies": "WordPress"
    },
    "Rickshaw": {
        "implies": "D3",
        "js": {
            "Rickshaw": ""
        }
    },
    "RightJS": {
        "js": {
            "RightJS": ""
        }
    },
    "Riot": {
        "js": {
            "riot": ""
        }
    },
    "Robin": {
        "js": {
            "_robin_getRobinJs": "",
            "robin_settings": "",
            "robin_storage_settings": ""
        }
    },
    "RoundCube": {
        "html": "<title>RoundCube",
        "implies": "PHP",
        "js": {
            "rcmail": "",
            "roundcube": ""
        }
    },
    "Ruby on Rails": {
        "implies": "Ruby",
        "cookies": {
            "_session_id": "\\;confidence:75"
        }
    },
    "RxJS": {
        "js": {
            "Rx.CompositeDisposable": "",
            "Rx.Symbol": ""
        }
    },
    "SDL Tridion": {
        "html": "<img[^>]+_tcm\\d{2,3}-\\d{6}\\."
    },
    "Sentry": {
        "html": "<script[^>]*>\\s*Raven\\.config\\('[^']*', {\\s+release: '([0-9\\.]+)'\\;version:\\1",
        "js": {
            "Raven.config": "",
            "ravenOptions.whitelistUrls": ""
        }
    },
    "SMF": {
        "html": "credits/?\" title=\"Simple Machines Forum\" target=\"_blank\" class=\"new_win\">SMF ([0-9.]+)</a>\\;version:\\1",
        "implies": "PHP",
        "js": {
            "smf_": ""
        }
    },
    "SOBI 2": {
        "html": "(?:<!-- start of Sigsiu Online Business Index|<div[^>]* class=\"sobi2)",
        "implies": "Joomla"
    },
    "SPDY": {
        "excludes": "HTTP/2"
    },
    "SQL Buddy": {
        "html": "(?:<title>SQL Buddy</title>|<[^>]+onclick=\"sideMainClick\\(\"home\\.php)",
        "implies": "PHP"
    },
    "SWFObject": {
        "js": {
            "SWFObject": ""
        }
    },
    "Sails.js": {
        "cookies": {
            "sails.sid": ""
        },
        "implies": "Express"
    },
    "Salesforce": {
        "cookies": {
            "com.salesforce": ""
        },
        "html": "<[^>]+=\"brandQuaternaryFgrs\"",
        "js": {
            "SFDCApp": "",
            "SFDCCmp": "",
            "SFDCPage": "",
            "SFDCSessionVars": ""
        }
    },
    "Salesforce Commerce Cloud": {
        "html": "<[^>]+demandware\\.edgesuite",
        "js": {
            "dwAnalytics": ""
        }
    },
    "Sazito": {
        "js": {
            "Sazito": ""
        }
    },
    "Segment": {
        "js": {
            "analytics": ""
        }
    },
    "Select2": {
        "implies": "jQuery",
        "js": {
            "jQuery.fn.select2": ""
        }
    },
    "Semantic-ui": {
        "html": [
            "<link[^>]+semantic(?:\\.min)\\.css\""
        ]
    },
    "Serendipity": {
        "implies": "PHP",
        "meta": {
            "Powered-By": "Serendipity v\\.([\\d.]+)\\;version:\\1",
            "generator": "Serendipity(?: v\\.([\\d.]+))?\\;version:\\1"
        }
    },
    "Shapecss": {
        "html": "<link[^>]* href=\"[^\"]*shapecss(?:\\.min)?\\.css",
        "js": {
            "Shapecss": ""
        }
    },
    "ShareThis": {
        "js": {
            "SHARETHIS": ""
        }
    },
    "ShellInABox": {
        "html": [
            "<title>Shell In A Box</title>",
            "must be enabled for ShellInABox</noscript>"
        ],
        "js": {
            "ShellInABox": ""
        }
    },
    "ShinyStat": {
        "html": "<img[^>]*\\s+src=['\"]?https?://www\\.shinystat\\.com/cgi-bin/shinystat\\.cgi\\?[^'\"\\s>]*['\"\\s/>]",
        "js": {
            "SSsdk": ""
        }
    },
    "Shopatron": {
        "html": [
            "<body class=\"shopatron",
            "<img[^>]+mediacdn\\.shopatron\\.com\\;confidence:50"
        ],
        "js": {
            "shptUrl": ""
        }
    },
    "Shopcada": {
        "js": {
            "Shopcada": ""
        }
    },
    "Shoper": {
        "js": {
            "shoper": ""
        }
    },
    "Shopfa": {
        "js": {
            "shopfa": ""
        }
    },
    "Shopify": {
        "html": "<link[^>]+=['\"]//cdn\\.shopify\\.com",
        "js": {
            "Shopify": ""
        }
    },
    "Shoptet": {
        "html": "<link [^>]*href=\"https?://cdn\\.myshoptet\\.com/",
        "implies": "PHP",
        "js": {
            "shoptet": ""
        }
    },
    "Shopware": {
        "html": "<title>Shopware ([\\d\\.]+) [^<]+\\;version:\\1",
        "implies": [
            "PHP",
            "MySQL",
            "jQuery"
        ]
    },
    "Signal": {
        "script": [
            "//s\\.btstatic\\.com/tag\\.js",
            "//s\\.thebrighttag\\.com/iframe\\?"
        ],
        "js": {
            "signalData": ""
        }
    },
    "SilverStripe": {
        "html": "Powered by <a href=\"[^>]+SilverStripe",
        "implies": "PHP"
    },
    "SiteCatalyst": {
        "js": {
            "s_INST": "",
            "s_account": "",
            "s_code": "",
            "s_objectID": ""
        }
    },
    "Sitecore": {
        "cookies": {
            "SC_ANALYTICS_GLOBAL_COOKIE": ""
        },
        "html": "<img[^>]+src=\"[^>]*/~/media/[^>]+\\.ashx"
    },
    "Sizmek": {
        "html": "(?:<a [^>]*href=\"[^/]*//[^/]*serving-sys\\.com/|<img [^>]*src=\"[^/]*//[^/]*serving-sys\\.com/)"
    },
    "Slick": {
        "html": "<link [^>]+(?:/([\\d.]+)/)?slick-theme\\.css\\;version:\\1",
        "implies": "jQuery"
    },
    "Slimbox": {
        "html": "<link [^>]*href=\"[^/]*slimbox(?:-rtl)?\\.css",
        "implies": "MooTools"
    },
    "Slimbox 2": {
        "html": "<link [^>]*href=\"[^/]*slimbox2(?:-rtl)?\\.css",
        "implies": "jQuery"
    },
    "Smart Ad Server": {
        "html": "<img[^>]+smartadserver\\.com\\/call",
        "js": {
            "SmartAdServer": ""
        }
    },
    "SmartSite": {
        "html": "<[^>]+/smartsite\\.(?:dws|shtml)\\?id="
    },
    "Snap.svg": {
        "js": {
            "Snap.version": "^(.+)$\\;version:\\1"
        }
    },
    "Snoobi": {
        "js": {
            "snoobi": ""
        }
    },
    "SobiPro": {
        "implies": "Joomla",
        "js": {
            "SobiProUrl": ""
        }
    },
    "Socket.io": {
        "implies": "Node.js",
        "js": {
            "io.Socket": "",
            "io.version": "^(.+)$\\;version:\\1"
        }
    },
    "Solodev": {
        "html": "<div class=[\"']dynamicDiv[\"'] id=[\"']dd\\.\\d\\.\\d(?:\\.\\d)?[\"']>",
        "implies": "PHP"
    },
    "Solusquare OmniCommerce Cloud": {
        "cookies": {
            "_solusquare": ""
        },
        "implies": "Adobe ColdFusion"
    },
    "Solve Media": {
        "js": {
            "ACPuzzle": "",
            "_ACPuzzle": "",
            "_adcopy-puzzle-image-image": "",
            "adcopy-puzzle-image-image": ""
        }
    },
    "SonarQubes": {
        "html": [
            "<link href=\"/css/sonar\\.css\\?v=([\\d.]+)\\;version:\\1",
            "<title>SonarQube</title>"
        ],
        "implies": "Java",
        "js": {
            "SonarMeasures": "",
            "SonarRequest": ""
        }
    },
    "SoundManager": {
        "js": {
            "BaconPlayer": "",
            "SoundManager": "",
            "soundManager.version": "V(.+) \\;version:\\1"
        }
    },
    "Sphinx": {
        "html": "Created using <a href=\"https?://sphinx-doc\\.org/\">Sphinx</a> ([0-9.]+)\\.\\;version:\\1",
        "js": {
            "DOCUMENTATION_OPTIONS": ""
        }
    },
    "SpinCMS": {
        "cookies": {
            "spincms_session": ""
        },
        "implies": "PHP"
    },
    "Splunk": {
        "html": "<p class=\"footer\">&copy; [-\\d]+ Splunk Inc\\.(?: Splunk ([\\d\\.]+(?: build [\\d\\.]*\\d)?))?[^<]*</p>\\;version:\\1"
    },
    "Spree": {
        "html": "(?:<link[^>]*/assets/store/all-[a-z\\d]{32}\\.css[^>]+>|<script>\\s*Spree\\.(?:routes|translations|api_key))",
        "implies": "Ruby on Rails"
    },
    "Squarespace": {
        "html": "<!-- This is Squarespace\\. -->",
        "js": {
            "Squarespace": ""
        }
    },
    "SquirrelMail": {
        "html": "<small>SquirrelMail version ([.\\d]+)[^<]*<br \\;version:\\1",
        "implies": "PHP",
        "js": {
            "squirrelmail_loginpage_onload": ""
        }
    },
    "Squiz Matrix": {
        "html": "<!--\\s+Running (?:MySource|Squiz) Matrix",
        "implies": "PHP"
    },
    "Stackla": {
        "js": {
            "Stackla": ""
        }
    },
    "Statcounter": {
        "js": {
            "_statcounter": "\\;confidence:100",
            "sc_project": "\\;confidence:50",
            "sc_security": "\\;confidence:50"
        }
    },
    "Store Systems": {
        "html": "Shopsystem von <a href=[^>]+store-systems\\.de\"|\\.mws_boxTop"
    },
    "Strato": {
        "html": "<a href=\"http://www\\.strato\\.de/\" target=\"_blank\">"
    },
    "Stripe": {
        "html": "<input[^>]+data-stripe",
        "js": {
            "Stripe.version": "^(.+)$\\;version:\\1"
        }
    },
    "SublimeVideo": {
        "js": {
            "sublimevideo": ""
        }
    },
    "SweetAlert": {
        "html": "<link[^>]+?href=\"[^\"]+sweet-alert(?:\\.min)?\\.css",
        "js": {
            "swal": ""
        }
    },
    "SweetAlert2": {
        "excludes": "SweetAlert",
        "html": "<link[^>]+?href=\"[^\"]+sweetalert2(?:\\.min)?\\.css",
        "js": {
            "Sweetalert2": ""
        }
    },
    "Swiftlet": {
        "html": "Powered by <a href=\"[^>]+Swiftlet",
        "implies": "PHP"
    },
    "Swiftype": {
        "js": {
            "Swiftype": ""
        }
    },
    "Sympa": {
        "html": "<a href=\"https?://www\\.sympa\\.org\">\\s*Powered by Sympa\\s*</a>",
        "implies": "Perl"
    },
    "Synology DiskStation": {
        "html": "<noscript><div class='syno-no-script'",
        "meta": {
            "application-name": "Synology DiskStation",
            "description": "^DiskStation provides a full-featured network attached storage"
        }
    },
    "SyntaxHighlighter": {
        "html": "<(?:script|link)[^>]*sh(?:Core|Brush|ThemeDefault)",
        "js": {
            "SyntaxHighlighter": ""
        }
    },
    "TWiki": {
        "cookies": {
            "TWIKISID": ""
        },
        "html": "<img [^>]*(?:title|alt)=\"This site is powered by the TWiki collaboration platform",
        "implies": "Perl"
    },
    "tailwindcss": {
        "html": "<link[^>]+?href=\"[^\"]+tailwindcss(?:\\.min)?\\.css"
    },
    "TYPO3 CMS": {
        "html": [
            "<link[^>]+ href=\"typo3(?:conf|temp)/",
            "<img[^>]+ src=\"typo3(?:conf|temp)/"
        ],
        "implies": "PHP"
    },
    "Taiga": {
        "implies": [
            "Django",
            "AngularJS"
        ],
        "js": {
            "taigaConfig": ""
        }
    },
    "Tealeaf": {
        "js": {
            "TeaLeaf": ""
        }
    },
    "Tealium": {
        "js": {
            "TEALIUMENABLED": ""
        }
    },
    "TeamCity": {
        "html": "<span class=\"versionTag\"><span class=\"vWord\">Version</span> ([\\d\\.]+)\\;version:\\1",
        "implies": [
            "Apache Tomcat",
            "Java",
            "jQuery",
            "Moment.js",
            "Prototype",
            "React",
            "Underscore.js"
        ]
    },
    "Telescope": {
        "implies": [
            "Meteor",
            "React"
        ],
        "js": {
            "Telescope": ""
        }
    },
    "Thelia": {
        "html": "<(?:link|style|script)[^>]+/assets/frontOffice/",
        "implies": [
            "PHP",
            "Symfony"
        ]
    },
    "Ticimax": {
        "script": [
            "cdn\\.ticimax\\.com/"
        ]
    },
    "Tictail": {
        "html": "<link[^>]*tictail\\.com"
    },
    "TiddlyWiki": {
        "html": "<[^>]*type=[^>]text\\/vnd\\.tiddlywiki",
        "js": {
            "tiddler": ""
        },
        "meta": {
            "application-name": "^TiddlyWiki$",
            "copyright": "^TiddlyWiki created by Jeremy Ruston",
            "generator": "^TiddlyWiki$",
            "tiddlywiki-version": "^(.+)$\\;version:\\1"
        }
    },
    "Tilda": {
        "html": "<link[^>]* href=[^>]+tilda(?:cdn|\\.ws|-blocks)"
    },
    "Timeplot": {
        "js": {
            "Timeplot": ""
        }
    },
    "TinyMCE": {
        "js": {
            "tinyMCE.majorVersion": "([\\d.]+)\\;version:\\1"
        }
    },
    "Titan": {
        "js": {
            "titan": "",
            "titanEnabled": ""
        }
    },
    "TomatoCart": {
        "js": {
            "AjaxShoppingCart": ""
        }
    },
    "Trac": {
        "html": [
            "<a id=\"tracpowered",
            "Powered by <a href=\"[^\"]*\"><strong>Trac(?:[ /]([\\d.]+))?\\;version:\\1"
        ],
        "implies": "Python"
    },
    "TrackJs": {
        "js": {
            "TrackJs": ""
        }
    },
    "Transifex": {
        "js": {
            "Transifex.live.lib_version": "(.+)\\;version:\\1"
        }
    },
    "Tumblr": {
        "html": "<iframe src=\"[^>]+tumblr\\.com"
    },
    "TweenMax": {
        "js": {
            "TweenMax.version": "^(.+)$\\;version:\\1"
        }
    },
    "Twitter Emoji (Twemoji)": {
        "js": {
            "twemoji": ""
        }
    },
    "Twitter Flight": {
        "implies": "jQuery",
        "js": {
            "flight": ""
        }
    },
    "Twitter typeahead.js": {
        "implies": "jQuery",
        "js": {
            "typeahead": ""
        }
    },
    "Typecho": {
        "implies": "PHP",
        "js": {
            "TypechoComment": ""
        }
    },
    "Typekit": {
        "js": {
            "Typekit.config.js": "^(.+)$\\;version:\\1"
        }
    },
    "UIKit": {
        "html": "<[^>]+class=\"[^\"]*(?:uk-container|uk-section)"
    },
    "UltraCart": {
        "html": "<form [^>]*action=\"[^\"]*\\/cgi-bin\\/UCEditor\\?(?:[^\"]*&)?merchantId=[^\"]",
        "js": {
            "ucCatalog": ""
        }
    },
    "Umbraco": {
        "html": "powered by <a href=[^>]+umbraco",
        "implies": "Microsoft ASP.NET",
        "js": {
            "UC_IMAGE_SERVICE|ITEM_INFO_SERVICE": "",
            "UC_ITEM_INFO_SERVICE": "",
            "UC_SETTINGS": "",
            "Umbraco": ""
        }
    },
    "Underscore.js": {
        "excludes": "Lodash",
        "js": {
            "_.VERSION": "^(.+)$\\;confidence:0\\;version:\\1",
            "_.restArguments": ""
        }
    },
    "Usabilla": {
        "js": {
            "usabilla_live": ""
        }
    },
    "user.com": {
        "html": "<div[^>]+/id=\"ue_widget\"",
        "js": {
            "UserEngage": ""
        }
    },
    "UserLike": {
        "script": [
            "userlike\\.min\\.js",
            "userlikelib\\.min\\.js"
        ]
    },
    "UserRules": {
        "js": {
            "_usrp": ""
        }
    },
    "UserVoice": {
        "js": {
            "UserVoice": ""
        }
    },
    "Ushahidi": {
        "cookies": {
            "ushahidi": ""
        },
        "implies": [
            "PHP",
            "MySQL",
            "OpenLayers"
        ],
        "js": {
            "Ushahidi": ""
        }
    },
    "VIVVO": {
        "cookies": {
            "VivvoSessionId": ""
        },
        "js": {
            "vivvo": ""
        }
    },
    "VP-ASP": {
        "html": "<a[^>]+>Powered By VP-ASP Shopping Cart</a>",
        "implies": "Microsoft ASP.NET"
    },
    "VTEX": {
        "cookies": {
            "VtexWorkspace": ""
        }
    },
    "Vaadin": {
        "implies": "Java",
        "js": {
            "vaadin": ""
        }
    },
    "Vanilla": {
        "html": "<body id=\"(?:DiscussionsPage|vanilla)",
        "implies": "PHP"
    },
    "Veoxa": {
        "html": "<img [^>]*src=\"[^\"]+tracking\\.veoxa\\.com",
        "js": {
            "VuVeoxaContent": ""
        }
    },
    "VideoJS": {
        "html": "<div[^>]+class=\"video-js+\">",
        "js": {
            "VideoJS": ""
        }
    },
    "VigLink": {
        "js": {
            "vglnk": "",
            "vl_cB": "",
            "vl_disable": ""
        }
    },
    "Vigbo": {
        "cookies": {
            "_gphw_mode": ""
        },
        "html": "<link[^>]* href=[^>]+(?:\\.vigbo\\.com|\\.gophotoweb\\.com)"
    },
    "Vignette": {
        "html": "<[^>]+=\"vgn-?ext"
    },
    "Vimeo": {
        "html": "(?:<(?:param|embed)[^>]+vimeo\\.com/moogaloop|<iframe[^>]player\\.vimeo\\.com)"
    },
    "VirtueMart": {
        "html": "<div id=\"vmMainPage",
        "implies": "Joomla"
    },
    "Virtuoso": {
        "meta": {
            "Copyright": "^Copyright &copy; \\d{4} OpenLink Software",
            "Keywords": "^OpenLink Virtuoso Sparql"
        }
    },
    "Visual WebGUI": {
        "implies": "Microsoft ASP.NET",
        "js": {
            "VWGEventArgs": ""
        }
    },
    "Visual Website Optimizer": {
        "html": [
            "<!-- (?:Start|End) Visual Website Optimizer A?Synchronous Code -->"
        ],
        "js": {
            "VWO": "",
            "__vwo": ""
        }
    },
    "Volusion (V1)": {
        "html": "<link [^>]*href=\"[^\"]*/vspfiles/",
        "implies": "Microsoft ASP.NET",
        "js": {
            "volusion": ""
        }
    },
    "Volusion (V2)": {
        "html": "<body [^>]*data-vn-page-name",
        "implies": "AngularJS"
    },
    "Vue.js": {
        "html": "<[^>]+data-v(?:ue)-",
        "js": {
            "Vue.version": "^(.+)$\\;version:\\1"
        }
    },
    "Nuxt.js": {
        "html": [
            "<div [^>]*id=\"__nuxt\"",
            "<script [^>]*>window\\.__NUXT__"
        ],
        "js": {
            "$nuxt": ""
        },
        "implies": "Vue.js"
    },
    "W3 Total Cache": {
        "html": "<!--[^>]+W3 Total Cache",
        "implies": "WordPress"
    },
    "WEBXPAY": {
        "html": "Powered by <a href=\"https://www\\.webxpay\\.com\">WEBXPAY<",
        "js": {
            "WEBXPAY": ""
        }
    },
    "WHMCS": {
        "cookies": {
            "WHMCS": ""
        }
    },
    "WP Rocket": {
        "html": "<!--[^>]+WP Rocket",
        "implies": "WordPress"
    },
    "WebGUI": {
        "cookies": {
            "wgSession": ""
        },
        "implies": "Perl"
    },
    "Webdev": {
        "html": "<!-- [a-zA-Z0-9_]+ [\\d/]+ [\\d:]+ WebDev \\d\\d ([\\d.]+) -->\\;version:\\1"
    },
    "Webix": {
        "js": {
            "webix": ""
        }
    },
    "Webmine": {
        "html": "<iframe[^>]+src=[\\'\"]https://webmine\\.cz/miner\\?key="
    },
    "Websocket": {
        "html": [
            "<link[^>]+rel=[\"']web-socket[\"']",
            "<(?:link|a)[^>]+href=[\"']wss?://"
        ]
    },
    "Website Creator": {
        "implies": [
            "PHP",
            "MySQL",
            "Vue.js"
        ],
        "meta": {
            "generator": "Website Creator by hosttech",
            "wsc_rendermode": ""
        }
    },
    "Webtrekk": {
        "js": {
            "webtrekk": ""
        }
    },
    "Webtrends": {
        "html": "<img[^>]+id=\"DCSIMG\"[^>]+webtrends",
        "js": {
            "WTOptimize": "",
            "WebTrends": ""
        }
    },
    "Weebly": {
        "implies": [
            "PHP",
            "MySQL"
        ],
        "js": {
            "_W.configDomain": ""
        }
    },
    "Weglot": {
        "script": [
            "cdn\\.weglot\\.com",
            "wp-content/plugins/weglot"
        ]
    },
    "Webzi": {
        "js": {
            "Webzi": ""
        }
    },
    "Wikinggruppen": {
        "html": [
            "<!-- WIKINGGRUPPEN"
        ]
    },
    "WikkaWiki": {
        "html": "Powered by <a href=\"[^>]+WikkaWiki"
    },
    "Wink": {
        "js": {
            "wink.version": "^(.+)$\\;version:\\1"
        }
    },
    "Wix": {
        "cookies": {
            "Domain": "\\.wix\\.com"
        },
        "js": {
            "wixData": "",
            "wixErrors": "",
            "wixEvents": ""
        }
    },
    "Wolf CMS": {
        "html": "(?:<a href=\"[^>]+wolfcms\\.org[^>]+>Wolf CMS(?:</a>)? inside|Thank you for using <a[^>]+>Wolf CMS)",
        "implies": "PHP"
    },
    "Woltlab Community Framework": {
        "html": "var WCF_PATH[^>]+",
        "implies": "PHP"
    },
    "WooCommerce": {
        "html": [
            "<!-- WooCommerce",
            "<link rel='[^']+' id='woocommerce-(?:layout|smallscreen|general)-css'  href='https?://[^/]+/wp-content/plugins/woocommerce/assets/css/woocommerce(?:-layout|-smallscreen)?\\.css?ver=([\\d.]+)'\\;version:\\1"
        ],
        "implies": "WordPress",
        "js": {
            "woocommerce_params": ""
        }
    },
    "Woosa": {
        "excludes": [
            "WordPress",
            "WooCommerce"
        ]
    },
    "WordPress": {
        "html": [
            "<link rel=[\"']stylesheet[\"'] [^>]+/wp-(?:content|includes)/",
            "<div[^>]*class=[\"']amp-wp-",
            "<link[^>]+s\\d+\\.wp\\.com"
        ],
        "implies": [
            "PHP",
            "MySQL"
        ],
        "js": {
            "wp_username": ""
        }
    },
    "WordPress Super Cache": {
        "html": "<!--[^>]+WP-Super-Cache",
        "implies": "WordPress"
    },
    "Wowza Media Server": {
        "html": "<title>Wowza Media Server \\d+ ((?:\\w+ Edition )?\\d+\\.[\\d\\.]+(?: build\\d+)?)?\\;version:\\1"
    },
    "X-Cart": {
        "cookies": {
            "xid": "[a-z\\d]{32}(?:;|$)"
        },
        "html": [
            "Powered by X-Cart(?: (\\d+))? <a[^>]+href=\"http://www\\.x-cart\\.com/\"[^>]*>\\;version:\\1",
            "<a[^>]+href=\"[^\"]*(?:\\?|&)xcart_form_id=[a-z\\d]{32}(?:&|$)"
        ],
        "implies": "PHP",
        "js": {
            "xcart_web_dir": "",
            "xliteConfig": ""
        }
    },
    "XAMPP": {
        "html": "<title>XAMPP(?: Version ([\\d\\.]+))?</title>\\;version:\\1",
        "implies": [
            "Apache",
            "MySQL",
            "PHP",
            "Perl"
        ]
    },
    "XMB": {
        "html": "<!-- Powered by XMB"
    },
    "XOOPS": {
        "implies": "PHP",
        "js": {
            "xoops": ""
        }
    },
    "XRegExp": {
        "js": {
            "XRegExp.version": "^(.+)$\\;version:\\1"
        }
    },
    "XWiki": {
        "excludes": "MediaWiki",
        "html": [
            "<html[^>]data-xwiki-[^>]>"
        ],
        "implies": "Java\\;confidence:99"
    },
    "XenForo": {
        "cookies": {
            "xf_csrf": "",
            "xf_session": ""
        },
        "html": [
            "(?:jQuery\\.extend\\(true, XenForo|Forum software by XenForo™|<!--XF:branding|<html[^>]+id=\"XenForo\")",
            "<html id=\"XF\" "
        ],
        "implies": [
            "PHP",
            "MySQL"
        ],
        "js": {
            "XF.GuestUsername": ""
        }
    },
    "Xeora": {
        "html": "<input type=\"hidden\" name=\"_sys_bind_\\d+\" id=\"_sys_bind_\\d+\" />"
    },
    "Xonic": {
        "html": [
            "Powered by <a href=\"http://www\\.xonic-solutions\\.de/index\\.php\" target=\"_blank\">xonic-solutions Shopsoftware</a>"
        ]
    },
    "YUI": {
        "js": {
            "YAHOO.VERSION": "^(.+)$\\;version:\\1",
            "YUI.version": "^(.+)$\\;version:\\1"
        }
    },
    "YUI Doc": {
        "html": "(?:<html[^>]* yuilibrary\\.com/rdf/[\\d.]+/yui\\.rdf|<body[^>]+class=\"yui3-skin-sam)"
    },
    "YaBB": {
        "html": "Powered by <a href=\"[^>]+yabbforum"
    },
    "Yahoo Advertising": {
        "html": [
            "<iframe[^>]+adserver\\.yahoo\\.com",
            "<img[^>]+clicks\\.beap\\.bc\\.yahoo\\.com"
        ],
        "js": {
            "adxinserthtml": ""
        }
    },
    "Yahoo! Ecommerce": {
        "html": "<link[^>]+store\\.yahoo\\.net",
        "js": {
            "YStore": ""
        }
    },
    "Yahoo! Tag Manager": {
        "html": "<!-- (?:End )?Yahoo! Tag Manager -->"
    },
    "Yahoo! Web Analytics": {
        "js": {
            "YWA": ""
        }
    },
    "Yandex.Direct": {
        "html": "<yatag class=\"ya-partner__ads\">",
        "js": {
            "yandex_ad_format": "",
            "yandex_partner_id": ""
        }
    },
    "Yandex.Metrika": {
        "js": {
            "yandex_metrika": ""
        }
    },
    "Yii": {
        "cookies": {
            "YII_CSRF_TOKEN": ""
        },
        "html": [
            "Powered by <a href=\"http://www\\.yiiframework\\.com/\" rel=\"external\">Yii Framework</a>",
            "<input type=\"hidden\" value=\"[a-zA-Z0-9]{40}\" name=\"YII_CSRF_TOKEN\" \\/>",
            "<!\\[CDATA\\[YII-BLOCK-(?:HEAD|BODY-BEGIN|BODY-END)\\]"
        ],
        "implies": [
            "PHP"
        ]
    },
    "Yoast SEO": {
        "html": [
            "<!-- This site is optimized with the Yoast (?:WordPress )?SEO plugin v([\\d.]+) -\\;version:\\1"
        ],
        "implies": "WordPress"
    },
    "WP-Statistics": {
        "html": [
            "<!-- Analytics by WP-Statistics v([\\d.]+) -\\;version:\\1"
        ],
        "implies": "WordPress"
    },
    "YouTrack": {
        "html": [
            "no-title=\"YouTrack\">",
            "data-reactid=\"[^\"]+\">youTrack ([0-9.]+)<\\;version:\\1",
            "type=\"application/opensearchdescription\\+xml\" title=\"YouTrack\"/>"
        ]
    },
    "YouTube": {
        "html": "<(?:param|embed|iframe)[^>]+youtube(?:-nocookie)?\\.com/(?:v|embed)"
    },
    "iEXExchanger": {
        "implies": [
            "PHP",
            "Apache"
        ],
        "cookies": {
            "iexexchanger_session": ""
        }
    },
    "ZK": {
        "html": "<!-- ZK [.\\d\\s]+-->",
        "implies": "Java"
    },
    "ZURB Foundation": {
        "html": [
            "<link[^>]+foundation[^>\"]+css",
            "<div [^>]*class=\"[^\"]*(?:small|medium|large)-\\d{1,2} columns"
        ],
        "js": {
            "Foundation.version": "([\\d.]+)\\;version:\\1"
        }
    },
    "Zabbix": {
        "html": "<body[^>]+zbxCallPostScripts",
        "implies": "PHP",
        "js": {
            "zbxCallPostScripts": ""
        }
    },
    "Zanox": {
        "html": "<img [^>]*src=\"[^\"]+ad\\.zanox\\.com",
        "js": {
            "zanox": ""
        }
    },
    "Zend": {
        "cookies": {
            "ZENDSERVERSESSID": ""
        }
    },
    "Zenfolio": {
        "js": {
            "Zenfolio": ""
        }
    },
    "Zepto": {
        "js": {
            "Zepto": ""
        }
    },
    "Zeuscart": {
        "html": "<form name=\"product\" method=\"post\" action=\"[^\"]+\\?do=addtocart&prodid=\\d+\"(?!<\\/form>.)+<input type=\"hidden\" name=\"addtocart\" value=\"\\d+\">",
        "implies": "PHP"
    },
    "Zone.js": {
        "js": {
            "Zone.root": ""
        }
    },
    "actionhero.js": {
        "implies": "Node.js",
        "js": {
            "actionheroClient": ""
        }
    },
    "amCharts": {
        "js": {
            "AmCharts": ""
        }
    },
    "animate.css": {
        "html": [
            "<link [^>]+(?:/([\\d.]+)/)?animate\\.(?:min\\.)?css\\;version:\\1"
        ]
    },
    "basket.js": {
        "js": {
            "basket.isValidItem": ""
        }
    },
    "cPanel": {
        "cookies": {
            "cpsession": "",
            "cprelogin": ""
        },
        "html": "<!-- cPanel"
    },
    "cgit": {
        "html": [
            "<[^>]+id='cgit'",
            "generated by <a href='http://git\\.zx2c4\\.com/cgit/about/'>cgit v([\\d.a-z-]+)</a>\\;version:\\1"
        ],
        "implies": "git"
    },
    "comScore": {
        "html": "<iframe[^>]* (?:id=\"comscore\"|scr=[^>]+comscore)|\\.scorecardresearch\\.com/beacon\\.js|COMSCORE\\.beacon",
        "js": {
            "COMSCORE": "",
            "_COMSCORE": ""
        }
    },
    "deepMiner": {
        "js": {
            "deepMiner": ""
        }
    },
    "e107": {
        "cookies": {
            "e107_tz": ""
        },
        "implies": "PHP"
    },
    "eSyndiCat": {
        "implies": "PHP",
        "js": {
            "esyndicat": ""
        }
    },
    "eZ Publish": {
        "cookies": {
            "eZSESSID": ""
        },
        "implies": "PHP"
    },
    "ef.js": {
        "js": {
            "ef.version": "^(.+)$\\;version:\\1",
            "efCore": ""
        }
    },
    "gitlist": {
        "html": "<p>Powered by <a[^>]+>GitList ([\\d.]+)\\;version:\\1",
        "implies": [
            "PHP",
            "git"
        ]
    },
    "gitweb": {
        "html": "<!-- git web interface version ([\\d.]+)?\\;version:\\1",
        "implies": [
            "Perl",
            "git"
        ]
    },
    "hapi.js": {
        "cookies": {
            "Fe26.2**": "\\;confidence:50"
        },
        "implies": "Node.js"
    },
    "ikiwiki": {
        "html": [
            "<link rel=\"alternate\" type=\"application/x-wiki\" title=\"Edit this page\" href=\"[^\"]*/ikiwiki\\.cgi",
            "<a href=\"/(?:cgi-bin/)?ikiwiki\\.cgi\\?do="
        ]
    },
    "imperia CMS": {
        "html": "<imp:live-info sysid=\"[0-9a-f-]+\"(?: node_id=\"[0-9/]*\")? *\\/>",
        "implies": "Perl",
        "meta": {
            "GENERATOR": "^IMPERIA ([0-9.]{2,})+$\\;version:\\1",
            "X-Imperia-Live-Info": ""
        }
    },
    "ip-label": {
        "js": {
            "clobs": ""
        }
    },
    "jQTouch": {
        "js": {
            "jQT": ""
        }
    },
    "jQuery": {
        "js": {
            "jQuery.fn.jquery": "([\\d.]+)\\;version:\\1"
        }
    },
    "jQuery Migrate": {
        "implies": "jQuery",
        "js": {
            "jQuery.migrateVersion": "([\\d.]+)\\;version:\\1",
            "jQuery.migrateWarnings": "",
            "jqueryMigrate": ""
        }
    },
    "jQuery Mobile": {
        "implies": "jQuery",
        "js": {
            "jQuery.mobile.version": "^(.+)$\\;version:\\1"
        }
    },
    "jQuery-pjax": {
        "implies": "jQuery",
        "meta": {
            "pjax-timeout": "",
            "pjax-replace": "",
            "pjax-push": ""
        },
        "js": {
            "jQuery.pjax": ""
        },
        "html": "<div[^>]+data-pjax-container"
    },
    "jQuery UI": {
        "implies": "jQuery",
        "js": {
            "jQuery.ui.version": "^(.+)$\\;version:\\1"
        }
    },
    "math.js": {
        "js": {
            "mathjs": ""
        }
    },
    "nopCommerce": {
        "cookies": {
            "Nop.customer": ""
        },
        "html": "(?:<!--Powered by nopCommerce|Powered by: <a[^>]+nopcommerce)",
        "implies": "Microsoft ASP.NET"
    },
    "osCSS": {
        "html": "<body onload=\"window\\.defaultStatus='oscss templates';\""
    },
    "osCommerce": {
        "cookies": {
            "osCsid": ""
        },
        "html": [
            "<br />Powered by <a href=\"https?://www\\.oscommerce\\.com",
            "<(?:input|a)[^>]+name=\"osCsid\"",
            "<(?:tr|td|table)class=\"[^\"]*infoBoxHeading"
        ],
        "implies": [
            "PHP",
            "MySQL"
        ]
    },
    "osTicket": {
        "cookies": {
            "OSTSESSID": ""
        },
        "implies": [
            "PHP",
            "MySQL"
        ]
    },
    "otrs": {
        "html": "<!--\\s+OTRS: Copyright \\d+-\\d+, OTRS AG",
        "implies": "Perl"
    },
    "ownCloud": {
        "html": "<a href=\"https://owncloud\\.com\" target=\"_blank\">ownCloud Inc\\.</a><br/>Your Cloud, Your Data, Your Way!",
        "implies": "PHP"
    },
    "papaya CMS": {
        "html": "<link[^>]*/papaya-themes/",
        "implies": "PHP"
    },
    "particles.js": {
        "html": "<div id=\"particles-js\">",
        "js": {
            "particlesJS": ""
        }
    },
    "PhotoShelter": {
        "html": [
            "<!--\\s+#+ Powered by the PhotoShelter Beam platform",
            "<link rel=[\"']dns-prefetch[\"'] [^>]+photoshelter.com"
        ],
        "implies": [
            "PHP",
            "MySQL",
            "jQuery"
        ]
    },
    "phpAlbum": {
        "html": "<!--phpalbum ([.\\d\\s]+)-->\\;version:\\1",
        "implies": "PHP"
    },
    "phpBB": {
        "cookies": {
            "phpbb": ""
        },
        "html": [
            "Powered by <a[^>]+phpBB",
            "<div class=phpbb_copyright>",
            "<[^>]+styles/(?:sub|pro)silver/theme",
            "<img[^>]+i_icon_mini",
            "<table class=\"[^\"]*forumline"
        ],
        "implies": "PHP",
        "js": {
            "phpbb": "",
            "style_cookie_settings": ""
        }
    },
    "phpCMS": {
        "implies": "PHP",
        "js": {
            "phpcms": ""
        }
    },
    "phpDocumentor": {
        "html": "<!-- Generated by phpDocumentor",
        "implies": "PHP"
    },
    "phpMyAdmin": {
        "html": "(?: \\| phpMyAdmin ([\\d.]+)<\\/title>|PMA_sendHeaderLocation\\(|<link [^>]*href=\"[^\"]*phpmyadmin\\.css\\.php)\\;version:\\1",
        "implies": [
            "PHP",
            "MySQL"
        ],
        "js": {
            "pma_absolute_uri": ""
        }
    },
    "phpPgAdmin": {
        "html": "(?:<title>phpPgAdmin</title>|<span class=\"appname\">phpPgAdmin)",
        "implies": "PHP"
    },
    "phpliteadmin": {
        "html": [
            "<span id='logo'>phpLiteAdmin</span> <span id='version'>v([0-9.]+)<\\;version:\\1",
            "<!-- Copyright [0-9]+ phpLiteAdmin (?:https?://www\\.phpliteadmin\\.org/) -->",
            "Powered by <a href='https?://www\\.phpliteadmin\\.org/'"
        ],
        "implies": [
            "PHP",
            "SQLite"
        ]
    },
    "phpwind": {
        "html": "(?:Powered|Code) by <a href=\"[^\"]+phpwind\\.net",
        "implies": "PHP"
    },
    "pirobase CMS": {
        "html": [
            "<(?:script|link)[^>]/site/[a-z0-9/._-]+/resourceCached/[a-z0-9/._-]+",
            "<input[^>]+cbi:///cms/"
        ],
        "implies": "Java"
    },
    "prettyPhoto": {
        "html": "(?:<link [^>]*href=\"[^\"]*prettyPhoto(?:\\.min)?\\.css|<a [^>]*rel=\"prettyPhoto)",
        "implies": "jQuery",
        "js": {
            "pp_alreadyInitialized": "",
            "pp_descriptions": "",
            "pp_images": "",
            "pp_titles": ""
        }
    },
    "punBB": {
        "js": {
            "PUNBB": ""
        },
        "html": "Powered by <a href=\"[^>]+punbb",
        "implies": "PHP"
    },
    "reCAPTCHA": {
        "html": [
            "<div[^>]+id=\"recaptcha_image",
            "<link[^>]+recaptcha",
            "<div[^>]+class=\"g-recaptcha\""
        ],
        "js": {
            "Recaptcha": "",
            "recaptcha": ""
        }
    },
    "script.aculo.us": {
        "js": {
            "Scriptaculous.Version": "^(.+)$\\;version:\\1"
        }
    },
    "scrollreveal": {
        "html": "<[^>]+data-sr(?:-id)",
        "js": {
            "ScrollReveal().version": "^(.+)$\\;version:\\1"
        }
    },
    "shine.js": {
        "js": {
            "Shine": ""
        }
    },
    "styled-components": {
        "html": [
            "<style[^>]*data-styled(?:-components)?[\\s\"]",
            "<style[^>]+data-styled-version=\"([0-9]+)\"\\;version:\\1"
        ],
        "implies": [
            "React"
        ],
        "js": {
            "styled": ""
        }
    },
    "three.js": {
        "js": {
            "THREE.REVISION": "^(.+)$\\;version:\\1"
        }
    },
    "uCore": {
        "cookies": {
            "ucore": ""
        },
        "implies": "PHP"
    },
    "uCoz": {
        "cookies": {
            "uCoz": ""
        }
    },
    "uKnowva": {
        "html": "<a[^>]+>Powered by uKnowva</a>",
        "implies": "PHP"
    },
    "vBulletin": {
        "html": "<div id=\"copyright\">Powered by vBulletin",
        "implies": "PHP",
        "js": {
            "vBulletin": ""
        },
        "cookies": {
            "bbsessionhash": "",
            "bblastactivity": "",
            "bblastvisit": ""
        }
    },
    "vibecommerce": {
        "excludes": "PrestaShop",
        "implies": "PHP",
        "meta": {
            "designer": "vibecommerce",
            "generator": "vibecommerce"
        }
    },
    "webEdition": {
        "meta": {
            "DC.title": "webEdition",
            "generator": "webEdition"
        }
    },
    "webpack": {
        "js": {
            "webpackJsonp": ""
        }
    },
    "parcel": {
        "js": {
            "parcelRequire": ""
        }
    },
    "wpCache": {
        "html": "<!--[^>]+wpCache",
        "implies": [
            "WordPress",
            "PHP"
        ],
        "meta": {
            "generator": "wpCache",
            "keywords": "wpCache"
        }
    },
    "xCharts": {
        "html": "<link[^>]* href=\"[^\"]*xcharts(?:\\.min)?\\.css",
        "implies": "D3",
        "js": {
            "xChart": ""
        }
    },
    "xtCommerce": {
        "html": "<div class=\"copyright\">[^<]+<a[^>]+>xt:Commerce"
    },
    "Halo": {
        "html": [
            "<link rel=[\"']stylesheet[\"'] [^>]+/halo-(?:backend|frontend|common)/"
        ],
        "implies": "Java"
    }
}