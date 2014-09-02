



<!DOCTYPE html>
<html lang="en" class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>jquery.serializeJSON/jquery.serializejson.js at master · marioizquierdo/jquery.serializeJSON</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="marioizquierdo/jquery.serializeJSON" name="twitter:title" /><meta content="jquery.serializeJSON - Serialize an HTML Form to a JavaScript Object, supporting nested attributes and arrays." name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/242139?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/242139?v=2&amp;s=400" property="og:image" /><meta content="marioizquierdo/jquery.serializeJSON" property="og:title" /><meta content="https://github.com/marioizquierdo/jquery.serializeJSON" property="og:url" /><meta content="jquery.serializeJSON - Serialize an HTML Form to a JavaScript Object, supporting nested attributes and arrays." property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="18C1F5D3:7B5F:39F1DCE4:54050012" name="octolytics-dimension-request_id" /><meta content="7882649" name="octolytics-actor-id" /><meta content="altucode" name="octolytics-actor-login" /><meta content="546ecf5a73f4b9ebf0e8b4a21b06d30c30aba59438292e21547a71df0cfd341d" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="Ym7RWCj0b2IE09MGNZSpZ4Wd/D7SZjTKennxVCWhH1CQfr3kSbytXudY1P1ZzRpkcPJMHLDs/Hx8BXSRV8N+gw==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-2f010074d65499cb8aaa1ae087582cb156e544c4.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-bd1d16204c9d8b7092836e4709c50ae7cc341da4.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="e5380a360077fb07abffca60a7971977">

      
  <meta name="description" content="jquery.serializeJSON - Serialize an HTML Form to a JavaScript Object, supporting nested attributes and arrays.">
  <meta name="go-import" content="github.com/marioizquierdo/jquery.serializeJSON git https://github.com/marioizquierdo/jquery.serializeJSON.git">

  <meta content="242139" name="octolytics-dimension-user_id" /><meta content="marioizquierdo" name="octolytics-dimension-user_login" /><meta content="5476727" name="octolytics-dimension-repository_id" /><meta content="marioizquierdo/jquery.serializeJSON" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="5476727" name="octolytics-dimension-repository_network_root_id" /><meta content="marioizquierdo/jquery.serializeJSON" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/marioizquierdo/jquery.serializeJSON/commits/master.atom" rel="alternate" title="Recent Commits to jquery.serializeJSON:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search">
          <form accept-charset="UTF-8" action="/marioizquierdo/jquery.serializeJSON/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/marioizquierdo/jquery.serializeJSON/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left">
        <li class="header-nav-item explore" data-ga-click="Header, go to explore, text:explore">
          <a class="header-nav-link" href="/explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/altucode" data-ga-click="Header, go to profile, text:username">
      <img alt="altucode" class="avatar" data-user="7882649" height="20" src="https://avatars1.githubusercontent.com/u/7882649?v=2&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">altucode</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="marioizquierdo/jquery.serializeJSON">This repository</span>
    </li>
      <li>
        <a href="/marioizquierdo/jquery.serializeJSON/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="/Lmm4CujITeCpt3BDebZyBMfLmL4pEoeVDSSlsFzIfuqYR8I170CiHjYkjYYSLVw8GaYeM2YgHRHSXxVwYCmdQ==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        
<div class="flash-global js-notice flash-warn">
<div class="container">
    <h2>
      You don't have any verified emails.  We recommend <a href="https://github.com/settings/emails">verifying</a> at least one email.
    </h2>
    <p>
      Email verification helps our support team help you in case you have any email issues or lose your password.
    </p>


















</div>
</div>


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="vL57UXb9wwgY6FMvFk0w0bP2XGOQnoX09H0iKzkqWAw6CgTFH0s58pVujwXcbwx3odNnkV9khaplay1WnJzipA==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="5476727" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/marioizquierdo/jquery.serializeJSON/watchers">
        18
      </a>
      <a href="/marioizquierdo/jquery.serializeJSON/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/marioizquierdo/jquery.serializeJSON/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="1yPKMbu0qbdLoJbyG250UmpNv4FjJcIraTy2fZXCwMKFDJ6UmHgsTjUuOizMOcDMjlzt5zJceJaAOm7zouG8jg==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar marioizquierdo/jquery.serializeJSON">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/marioizquierdo/jquery.serializeJSON/stargazers">
          439
        </a>
</form>
    <form accept-charset="UTF-8" action="/marioizquierdo/jquery.serializeJSON/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="RlYYiQx2KErVHZjypohgJ9M3A2qOQCTVDSUy0WDvr0gL+esHCVgnEzZz3yLDwijUUHjv6C1TbP+VfBWBtvc++w==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star marioizquierdo/jquery.serializeJSON">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/marioizquierdo/jquery.serializeJSON/stargazers">
          439
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/marioizquierdo/jquery.serializeJSON/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of marioizquierdo/jquery.serializeJSON to your account" aria-label="Fork your own copy of marioizquierdo/jquery.serializeJSON to your account" rel="facebox nofollow">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/marioizquierdo/jquery.serializeJSON/network" class="social-count">72</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/marioizquierdo" class="url fn" itemprop="url" rel="author"><span itemprop="title">marioizquierdo</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/marioizquierdo/jquery.serializeJSON" class="js-current-repository js-repo-home-link">jquery.serializeJSON</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" data-issue-count-url="/marioizquierdo/jquery.serializeJSON/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/marioizquierdo/jquery.serializeJSON" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /marioizquierdo/jquery.serializeJSON">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/marioizquierdo/jquery.serializeJSON/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /marioizquierdo/jquery.serializeJSON/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/marioizquierdo/jquery.serializeJSON/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /marioizquierdo/jquery.serializeJSON/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/marioizquierdo/jquery.serializeJSON/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /marioizquierdo/jquery.serializeJSON/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/marioizquierdo/jquery.serializeJSON/pulse/weekly" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /marioizquierdo/jquery.serializeJSON/pulse/weekly">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/marioizquierdo/jquery.serializeJSON/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /marioizquierdo/jquery.serializeJSON/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/marioizquierdo/jquery.serializeJSON.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/marioizquierdo/jquery.serializeJSON.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:marioizquierdo/jquery.serializeJSON.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:marioizquierdo/jquery.serializeJSON.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/marioizquierdo/jquery.serializeJSON" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/marioizquierdo/jquery.serializeJSON" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/marioizquierdo/jquery.serializeJSON" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save marioizquierdo/jquery.serializeJSON to your computer and use it in GitHub Desktop." aria-label="Save marioizquierdo/jquery.serializeJSON to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/marioizquierdo/jquery.serializeJSON/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download marioizquierdo/jquery.serializeJSON as a zip file"
                   title="Download marioizquierdo/jquery.serializeJSON as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/marioizquierdo/jquery.serializeJSON/blob/6566d37acc760de9b88c68284e8428e2022aa7b9/jquery.serializejson.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:b230c232ee2fa8c79f797cd27fc720f5 -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/blob/master/jquery.serializejson.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/2.1.0/jquery.serializejson.js"
                 data-name="2.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.1.0">2.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/2.0.0/jquery.serializejson.js"
                 data-name="2.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="2.0.0">2.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/1.3.0/jquery.serializejson.js"
                 data-name="1.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.3.0">1.3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/1.2.3/jquery.serializejson.js"
                 data-name="1.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.3">1.2.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/1.2.2/jquery.serializejson.js"
                 data-name="1.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.2">1.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/1.2.1/jquery.serializejson.js"
                 data-name="1.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.1">1.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/1.2.0/jquery.serializejson.js"
                 data-name="1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.2.0">1.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/1.1.1/jquery.serializejson.js"
                 data-name="1.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.1">1.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/1.1.0/jquery.serializejson.js"
                 data-name="1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.1.0">1.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/1.0.2/jquery.serializejson.js"
                 data-name="1.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.2">1.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/1.0.1/jquery.serializejson.js"
                 data-name="1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.1">1.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/marioizquierdo/jquery.serializeJSON/tree/1.0.0/jquery.serializejson.js"
                 data-name="1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.0.0">1.0.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/marioizquierdo/jquery.serializeJSON/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="jquery.serializejson.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/marioizquierdo/jquery.serializeJSON" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jquery.serializeJSON</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.serializejson.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Mario Izquierdo" class="avatar" data-user="1399519" height="24" src="https://avatars2.githubusercontent.com/u/1399519?v=2&amp;s=48" width="24" />
        <span class="author"><a href="/MarioLinden" rel="contributor">MarioLinden</a></span>
        <time datetime="2014-06-08T23:25:49-07:00" is="relative-time">June 08, 2014</time>
        <div class="commit-title">
            <a href="/marioizquierdo/jquery.serializeJSON/commit/d416f21210937a60818c41813e8e99be88a31cbf" class="message" data-pjax="true" title="Update 2.1.0 Changelog with the added parseWithFunction option. Update .min file">Update 2.1.0 Changelog with the added parseWithFunction option. Updat…</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>2</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="MarioLinden" href="/marioizquierdo/jquery.serializeJSON/commits/master/jquery.serializejson.js?author=MarioLinden"><img alt="Mario Izquierdo" class="avatar" data-user="1399519" height="20" src="https://avatars0.githubusercontent.com/u/1399519?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="diaswrd" href="/marioizquierdo/jquery.serializeJSON/commits/master/jquery.serializejson.js?author=diaswrd"><img alt="William Dias" class="avatar" data-user="800417" height="20" src="https://avatars0.githubusercontent.com/u/800417?v=2&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Mario Izquierdo" data-user="1399519" height="24" src="https://avatars2.githubusercontent.com/u/1399519?v=2&amp;s=48" width="24" />
            <a href="/MarioLinden">MarioLinden</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="William Dias" data-user="800417" height="24" src="https://avatars2.githubusercontent.com/u/800417?v=2&amp;s=48" width="24" />
            <a href="/diaswrd">diaswrd</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>166 lines (146 sloc)</span>
          <span class="meta-divider"></span>
        <span>7.913 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/marioizquierdo/jquery.serializeJSON/raw/master/jquery.serializejson.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/marioizquierdo/jquery.serializeJSON/blame/master/jquery.serializejson.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/marioizquierdo/jquery.serializeJSON/commits/master/jquery.serializejson.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw js-conduit-openfile-check"
             href="http://mac.github.com"
             data-url="github-mac://openRepo/https://github.com/marioizquierdo/jquery.serializeJSON?branch=master&amp;filepath=jquery.serializejson.js"
             aria-label="Open this file in GitHub for Mac"
             data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/marioizquierdo/jquery.serializeJSON/edit/master/jquery.serializejson.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/marioizquierdo/jquery.serializeJSON/delete/master/jquery.serializejson.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="cm">/*!</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="cm">  SerializeJSON jQuery plugin.</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="cm">  https://github.com/marioizquierdo/jquery.serializeJSON</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line"><span class="cm">  version 2.1.0 (May, 2014)</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="cm">  Copyright (c) 2014 Mario Izquierdo</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="cm">  Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line"><span class="cm">  and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line"><span class="cm">*/</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line"><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">  <span class="s2">&quot;use strict&quot;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">  <span class="c1">// jQuery(&#39;form&#39;).serializeJSON()</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">  <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">serializeJSON</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">    <span class="kd">var</span> <span class="nx">serializedObject</span><span class="p">,</span> <span class="nx">formAsArray</span><span class="p">,</span> <span class="nx">keys</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">f</span><span class="p">,</span> <span class="nx">opts</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">    <span class="nx">f</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">serializeJSON</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">    <span class="nx">formAsArray</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">serializeArray</span><span class="p">();</span> <span class="c1">// array of objects {name, value}</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">    <span class="nx">opts</span> <span class="o">=</span> <span class="nx">f</span><span class="p">.</span><span class="nx">optsWithDefaults</span><span class="p">(</span><span class="nx">options</span><span class="p">);</span> <span class="c1">// calculate values for options {parseNumbers, parseBoolens, parseNulls}</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">    <span class="nx">serializedObject</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">    <span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">formAsArray</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">input</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">      <span class="nx">keys</span> <span class="o">=</span> <span class="nx">f</span><span class="p">.</span><span class="nx">splitInputNameIntoKeysArray</span><span class="p">(</span><span class="nx">input</span><span class="p">.</span><span class="nx">name</span><span class="p">);</span> <span class="c1">// &quot;some[deep][key]&quot; =&gt; [&#39;some&#39;, &#39;deep&#39;, &#39;key&#39;]</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">      <span class="nx">value</span> <span class="o">=</span> <span class="nx">f</span><span class="p">.</span><span class="nx">parseValue</span><span class="p">(</span><span class="nx">input</span><span class="p">.</span><span class="nx">value</span><span class="p">,</span> <span class="nx">opts</span><span class="p">);</span> <span class="c1">// string, number, boolean or null</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">parseWithFunction</span><span class="p">)</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">parseWithFunction</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span> <span class="c1">// allow for custom parsing</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">      <span class="nx">f</span><span class="p">.</span><span class="nx">deepSet</span><span class="p">(</span><span class="nx">serializedObject</span><span class="p">,</span> <span class="nx">keys</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">opts</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">    <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">    <span class="k">return</span> <span class="nx">serializedObject</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">  <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">  <span class="c1">// Use $.serializeJSON as namespace for the auxiliar functions</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">  <span class="c1">// and to define defaults</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">  <span class="nx">$</span><span class="p">.</span><span class="nx">serializeJSON</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">    <span class="nx">defaultOptions</span><span class="o">:</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">      <span class="nx">parseNumbers</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="c1">// convert values like &quot;1&quot;, &quot;-2.33&quot; to 1, -2.33</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">      <span class="nx">parseBooleans</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="c1">// convert &quot;true&quot;, &quot;false&quot; to true, false</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">      <span class="nx">parseNulls</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="c1">// convert &quot;null&quot; to null</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">      <span class="nx">parseAll</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span> <span class="c1">// all of the above</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">      <span class="nx">parseWithFunction</span><span class="o">:</span> <span class="kc">null</span><span class="p">,</span> <span class="c1">// to use custom parser, use a function like: function (val) =&gt; parsed_val</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">      <span class="nx">useIntKeysAsArrayIndex</span><span class="o">:</span> <span class="kc">false</span> <span class="c1">// name=&quot;foo[2]&quot; value=&quot;v&quot; =&gt; {foo: [null, null, &quot;v&quot;]}, instead of {foo: [&quot;2&quot;: &quot;v&quot;]}</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">    <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">    <span class="c1">// Merge options with defaults to get {parseNumbers, parseBoolens, parseNulls, useIntKeysAsArrayIndex}</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">    <span class="nx">optsWithDefaults</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">      <span class="kd">var</span> <span class="nx">f</span><span class="p">,</span> <span class="nx">parseAll</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">options</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="nx">options</span> <span class="o">=</span> <span class="p">{};</span> <span class="c1">// arg default value = {}</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">      <span class="nx">f</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">serializeJSON</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">      <span class="nx">parseAll</span> <span class="o">=</span> <span class="nx">f</span><span class="p">.</span><span class="nx">optWithDefaults</span><span class="p">(</span><span class="s1">&#39;parseAll&#39;</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">      <span class="k">return</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">        <span class="nx">parseNumbers</span><span class="o">:</span>  <span class="nx">parseAll</span> <span class="o">||</span> <span class="nx">f</span><span class="p">.</span><span class="nx">optWithDefaults</span><span class="p">(</span><span class="s1">&#39;parseNumbers&#39;</span><span class="p">,</span>  <span class="nx">options</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">        <span class="nx">parseBooleans</span><span class="o">:</span> <span class="nx">parseAll</span> <span class="o">||</span> <span class="nx">f</span><span class="p">.</span><span class="nx">optWithDefaults</span><span class="p">(</span><span class="s1">&#39;parseBooleans&#39;</span><span class="p">,</span> <span class="nx">options</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">        <span class="nx">parseNulls</span><span class="o">:</span>    <span class="nx">parseAll</span> <span class="o">||</span> <span class="nx">f</span><span class="p">.</span><span class="nx">optWithDefaults</span><span class="p">(</span><span class="s1">&#39;parseNulls&#39;</span><span class="p">,</span>    <span class="nx">options</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">        <span class="nx">parseWithFunction</span><span class="o">:</span>         <span class="nx">f</span><span class="p">.</span><span class="nx">optWithDefaults</span><span class="p">(</span><span class="s1">&#39;parseWithFunction&#39;</span><span class="p">,</span> <span class="nx">options</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">        <span class="nx">useIntKeysAsArrayIndex</span><span class="o">:</span>    <span class="nx">f</span><span class="p">.</span><span class="nx">optWithDefaults</span><span class="p">(</span><span class="s1">&#39;useIntKeysAsArrayIndex&#39;</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">    <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">    <span class="nx">optWithDefaults</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">      <span class="k">return</span> <span class="p">(</span><span class="nx">options</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">options</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">||</span> <span class="nx">$</span><span class="p">.</span><span class="nx">serializeJSON</span><span class="p">.</span><span class="nx">defaultOptions</span><span class="p">[</span><span class="nx">key</span><span class="p">]);</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">    <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">    <span class="c1">// Convert the string to a number, boolean or null, depending on the enable option and the string format.</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">    <span class="nx">parseValue</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">,</span> <span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">      <span class="kd">var</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">f</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">      <span class="nx">f</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">serializeJSON</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">parseNumbers</span>  <span class="o">&amp;&amp;</span> <span class="nx">f</span><span class="p">.</span><span class="nx">isNumeric</span><span class="p">(</span><span class="nx">str</span><span class="p">))</span> <span class="k">return</span> <span class="nb">Number</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span> <span class="c1">// number</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">parseBooleans</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">str</span> <span class="o">===</span> <span class="s2">&quot;true&quot;</span> <span class="o">||</span> <span class="nx">str</span> <span class="o">===</span> <span class="s2">&quot;false&quot;</span><span class="p">))</span> <span class="k">return</span> <span class="nx">str</span> <span class="o">===</span> <span class="s2">&quot;true&quot;</span><span class="p">;</span> <span class="c1">// boolean</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">parseNulls</span>    <span class="o">&amp;&amp;</span> <span class="nx">str</span> <span class="o">==</span> <span class="s2">&quot;null&quot;</span><span class="p">)</span> <span class="k">return</span> <span class="kc">null</span><span class="p">;</span> <span class="c1">// null</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">      <span class="k">return</span> <span class="nx">str</span><span class="p">;</span> <span class="c1">// otherwise, keep same string</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">    <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">    <span class="nx">isObject</span><span class="o">:</span>          <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">obj</span> <span class="o">===</span> <span class="nb">Object</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span> <span class="p">},</span> <span class="c1">// is this variable an object?</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">    <span class="nx">isUndefined</span><span class="o">:</span>       <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">obj</span> <span class="o">===</span> <span class="k">void</span> <span class="mi">0</span><span class="p">;</span> <span class="p">},</span> <span class="c1">// safe check for undefined values</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">    <span class="nx">isValidArrayIndex</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="sr">/^[0-9]+$/</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nb">String</span><span class="p">(</span><span class="nx">val</span><span class="p">));</span> <span class="p">},</span> <span class="c1">// 1,2,3,4 ... are valid array indexes</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">    <span class="nx">isNumeric</span><span class="o">:</span>         <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">obj</span> <span class="o">-</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span> <span class="p">},</span> <span class="c1">// taken from jQuery.isNumeric implementation. Not using jQuery.isNumeric to support old jQuery and Zepto versions</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">    <span class="c1">// Split the input name in programatically readable keys</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">    <span class="c1">// &quot;foo&quot;              =&gt; [&#39;foo&#39;]</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">    <span class="c1">// &quot;[foo]&quot;            =&gt; [&#39;foo&#39;]</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">    <span class="c1">// &quot;foo[inn][bar]&quot;    =&gt; [&#39;foo&#39;, &#39;inn&#39;, &#39;bar&#39;]</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">    <span class="c1">// &quot;foo[inn][arr][0]&quot; =&gt; [&#39;foo&#39;, &#39;inn&#39;, &#39;arr&#39;, &#39;0&#39;]</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">    <span class="c1">// &quot;arr[][val]&quot;       =&gt; [&#39;arr&#39;, &#39;&#39;, &#39;val&#39;]</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">    <span class="nx">splitInputNameIntoKeysArray</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">      <span class="kd">var</span> <span class="nx">keys</span><span class="p">,</span> <span class="nx">last</span><span class="p">,</span> <span class="nx">f</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">      <span class="nx">f</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">serializeJSON</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">name</span><span class="p">))</span> <span class="p">{</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;ArgumentError: param &#39;name&#39; expected to be a string, found undefined&quot;</span><span class="p">);</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">      <span class="nx">keys</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="nx">name</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;[&#39;</span><span class="p">),</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">        <span class="nx">last</span> <span class="o">=</span> <span class="nx">key</span><span class="p">[</span><span class="nx">key</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">        <span class="k">return</span> <span class="nx">last</span> <span class="o">===</span> <span class="s1">&#39;]&#39;</span> <span class="o">?</span> <span class="nx">key</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">key</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">)</span> <span class="o">:</span> <span class="nx">key</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">      <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">keys</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">shift</span><span class="p">();</span> <span class="p">}</span> <span class="c1">// &quot;[foo][inn]&quot; should be same as &quot;foo[inn]&quot;</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">      <span class="k">return</span> <span class="nx">keys</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">    <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">    <span class="c1">// Set a value in an object or array, using multiple keys to set in a nested object or array:</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">    <span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">    <span class="c1">// deepSet(obj, [&#39;foo&#39;], v)               // obj[&#39;foo&#39;] = v</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">    <span class="c1">// deepSet(obj, [&#39;foo&#39;, &#39;inn&#39;], v)        // obj[&#39;foo&#39;][&#39;inn&#39;] = v // Create the inner obj[&#39;foo&#39;] object, if needed</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">    <span class="c1">// deepSet(obj, [&#39;foo&#39;, &#39;inn&#39;, &#39;123&#39;], v) // obj[&#39;foo&#39;][&#39;arr&#39;][&#39;123&#39;] = v //</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">    <span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">    <span class="c1">// deepSet(obj, [&#39;0&#39;], v)                                   // obj[&#39;0&#39;] = v</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">    <span class="c1">// deepSet(arr, [&#39;0&#39;], v, {useIntKeysAsArrayIndex: true})   // arr[0] = v</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">    <span class="c1">// deepSet(arr, [&#39;&#39;], v)                                    // arr.push(v)</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">    <span class="c1">// deepSet(obj, [&#39;arr&#39;, &#39;&#39;], v)                             // obj[&#39;arr&#39;].push(v)</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">    <span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">    <span class="c1">// arr = [];</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">    <span class="c1">// deepSet(arr, [&#39;&#39;, v]          // arr =&gt; [v]</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">    <span class="c1">// deepSet(arr, [&#39;&#39;, &#39;foo&#39;], v)  // arr =&gt; [v, {foo: v}]</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">    <span class="c1">// deepSet(arr, [&#39;&#39;, &#39;bar&#39;], v)  // arr =&gt; [v, {foo: v, bar: v}]</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">    <span class="c1">// deepSet(arr, [&#39;&#39;, &#39;bar&#39;], v)  // arr =&gt; [v, {foo: v, bar: v}, {bar: v}]</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">    <span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">    <span class="nx">deepSet</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">o</span><span class="p">,</span> <span class="nx">keys</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">      <span class="kd">var</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">nextKey</span><span class="p">,</span> <span class="nx">tail</span><span class="p">,</span> <span class="nx">lastIdx</span><span class="p">,</span> <span class="nx">lastVal</span><span class="p">,</span> <span class="nx">f</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">opts</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="nx">opts</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">      <span class="nx">f</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">serializeJSON</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">o</span><span class="p">))</span> <span class="p">{</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;ArgumentError: param &#39;o&#39; expected to be an object or array, found undefined&quot;</span><span class="p">);</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">keys</span> <span class="o">||</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;ArgumentError: param &#39;keys&#39; expected to be an array with least one element&quot;</span><span class="p">);</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">      <span class="nx">key</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">      <span class="c1">// Only one key, then it&#39;s not a deepSet, just assign the value.</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">      <span class="k">if</span> <span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">key</span> <span class="o">===</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">          <span class="nx">o</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span> <span class="c1">// &#39;&#39; is used to push values into the array (assume o is an array)</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">          <span class="nx">o</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span> <span class="c1">// other keys can be used as object keys or array indexes</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">      <span class="c1">// With more keys is a deepSet. Apply recursively.</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">      <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">        <span class="nx">nextKey</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">        <span class="c1">// &#39;&#39; is used to push values into the array,</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">        <span class="c1">// with nextKey, set the value into the same object, in object[nextKey].</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">        <span class="c1">// Covers the case of [&#39;&#39;, &#39;foo&#39;] and [&#39;&#39;, &#39;var&#39;] to push the object {foo, var}, and the case of nested arrays.</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">key</span> <span class="o">===</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">          <span class="nx">lastIdx</span> <span class="o">=</span> <span class="nx">o</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="c1">// asume o is array</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">          <span class="nx">lastVal</span> <span class="o">=</span> <span class="nx">o</span><span class="p">[</span><span class="nx">lastIdx</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span><span class="nx">lastVal</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">lastVal</span><span class="p">[</span><span class="nx">nextKey</span><span class="p">])</span> <span class="o">||</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">2</span><span class="p">))</span> <span class="p">{</span> <span class="c1">// if nextKey is not present in the last object element, or there are more keys to deep set</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">            <span class="nx">key</span> <span class="o">=</span> <span class="nx">lastIdx</span><span class="p">;</span> <span class="c1">// then set the new value in the same object element</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">          <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">            <span class="nx">key</span> <span class="o">=</span> <span class="nx">lastIdx</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span> <span class="c1">// otherwise, point to set the next index in the array</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">        <span class="c1">// o[key] defaults to object or array, depending if nextKey is an array index (int or &#39;&#39;) or an object key (string)</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">o</span><span class="p">[</span><span class="nx">key</span><span class="p">]))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">nextKey</span> <span class="o">===</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// &#39;&#39; is used to push values into the array.</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">            <span class="nx">o</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">          <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">useIntKeysAsArrayIndex</span> <span class="o">&amp;&amp;</span> <span class="nx">f</span><span class="p">.</span><span class="nx">isValidArrayIndex</span><span class="p">(</span><span class="nx">nextKey</span><span class="p">))</span> <span class="p">{</span> <span class="c1">// if 1, 2, 3 ... then use an array, where nextKey is the index</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">            <span class="nx">o</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="p">[];</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">          <span class="p">}</span> <span class="k">else</span> <span class="p">{</span> <span class="c1">// for anything else, use an object, where nextKey is going to be the attribute name</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">            <span class="nx">o</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">        <span class="c1">// Recursively set the inner object</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">        <span class="nx">tail</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">1</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">        <span class="nx">f</span><span class="p">.</span><span class="nx">deepSet</span><span class="p">(</span><span class="nx">o</span><span class="p">[</span><span class="nx">key</span><span class="p">],</span> <span class="nx">tail</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">opts</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">  <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line"><span class="p">}(</span><span class="nb">window</span><span class="p">.</span><span class="nx">jQuery</span> <span class="o">||</span> <span class="nb">window</span><span class="p">.</span><span class="nx">Zepto</span> <span class="o">||</span> <span class="nb">window</span><span class="p">.</span><span class="nx">$</span><span class="p">));</span></td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04061s from github-fe140-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-bc28a4f6b05fd6cd91bbc92310bbbc53e54c6ec2.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-46193212c1e9feb8753d1ecfdfcfad0a23a015d2.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

