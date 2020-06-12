// ==UserScript==
// @name         LMS KTUN Dark Mode
// @namespace    https://github.com/Acidooo
// @version      1.1.1
// @author       Acido
// @include      *://lms.ktun.edu.tr/*
// @grant        GM_addStyle
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

// $(".navbar-brand-logo.h-full.w-full").css('background-image', 'url(https://github.com/Acidooo/LMS-Dark-Mode/raw/master/logo.png)');
// var logo = document.getElementsByClassName("navbar-brand-logo h-full w-full");
// logo.foreach( x => )
// console.log(logo)



GM_addStyle(`

ul.weeks li.section .content {
    margin: 0;
    background-color: #444;
}


.p-0{background-color:none;}

body { color: #dadada; }

/*dropdown message*/
a.list-group-item:focus, a.list-group-item:hover{ background-color: #555; }
.dropdown-menu-media .dropdown-menu-header { background-color: #444; }
.dropdown-menu-media>.dropdown-menu-footer>a { background-color: #444!important; }
.dropdown-menu-media>.dropdown-menu-footer>a:hover { background-color: #444!important; }
.dropdown-menu-media .list-group-item { background-color: #444; }
a.list-group-item { color: #d6d4d4; }


/*dropdown profile*/
.dropdown-item {color: #f3f7f9;}
.navbar-right .dropdown-menu { background-color:#888}

/*kayıt*/
.panel>:not(.panel-loading):not(.collapsing) { background-color: #666; }
.site-menubar-unfold .page, .site-menubar-unfold .site-footer { background-color: #555; }

/*sag container*/
.site-sidebar-nav.nav-tabs>.nav-item>.nav-link { background-color: #444; }
.h4, .h5, .h6, h4, h5, h6 { color: #ff3838; }
.block .minicalendarblock { background-color: #444; }
.px-20 { background-color: #333; }
.page-aside-section:first-child { background-color: #333; }
#page-enrol-users #filterform, .card, .groupinfobox, .que .history, .userprofile .profile_tree section, .well, .yui-skin-sam .yui-layout.path-mod-chat-gui_ajax #chat-messages .chat-message.course-theme, .yui-skin-sam .yui-layout.path-mod-chat-gui_ajax .yui-layout-unit-bottom, .yui-skin-sam .yui-layout.path-mod-chat-gui_ajax .yui-layout-unit-right {
       background-color: #333;
}

/*takvim*/
.custom-select { background-color: #999; }

/*Duyuru*/
.bg-white { background-color: #555; }
.bg-grey-100 { background-color: #555!important; }
.pagelayout-frontpage .page-content h2 { color: #ff3838; }
.forumpost .content { background: #666; }


/*Mesaj*/
.messaging-area-container .messaging-area .contacts-area .tabs .tab.selected { background-color: #444; }
.messaging-area-container .messaging-area .contacts-area .tabs .tab { background-color: #444; }
.messaging-area-container .messaging-area .messages-area .response { background-color: #444; }
.messaging-area-container .messaging-area .contacts-area .contacts .contact.selected { background-color: #666; }
.messaging-area-container * { color: #fff; }
.chat-left .chat-content { background-color: #3690c5; }
.messaging-area-container .messaging-area .contacts-area .searchtextarea .form-control { background-color: #444444; }

/*Collapsed sides*/

.navbar>.container-fluid .navbar-collapse, .navbar>.containers .navbar-collapse { background-color: #555; }
.site-menubar-body { background-color: #444; }
.site-menubar-fold .site-navbar .navbar-container { background-color: #555; }
.site-menubar-fold .page, .site-menubar-fold .site-footer { background-color: #555; }
.site-menubar-fold .site-menubar { background-color: #555; }

/*Ders Sayfasi*/

.collapse navbar-collapse .navbar-collapse-toolbar { background-color: #666; }
.no-overflow { color: #dadada; font-weight: bold; }
h4.sectionname a { color: #b90000; }
.section li.activity { background-color: #444; }
.section .activity.list-group-item:first-child { background-color: #444; }
//.p-0 { background-color: #666; }
.p-10 .course-cover-image .pb-30{ background-image: none; background-color: #4440; }

/*anasayfa*/
.page-header+.page-content{ background-color: #555; }
#categoryselect { background-color: #a2a2a2; }
.container { background-color: #555; }
.page-title { color: #ff3838; }
#page-enrol-users #filterform, .card-block, .userprofile .profile_tree section, .well, .yui-skin-sam .yui-layout.path-mod-chat-gui_ajax #chat-messages .chat-message.course-theme, .yui-skin-sam .yui-layout.path-mod-chat-gui_ajax .yui-layout-unit-bottom, .yui-skin-sam .yui-layout.path-mod-chat-gui_ajax .yui-layout-unit-right {
    background-color: #666;
}
.blue-grey-600 { color: #dadada!important; }
.h-200 { height: 0px!important; }
.card-text:last-child { color: #e2e2e2; }
.bg-green-500 { background-color: #5cd29db3!important; }
.bg-purple-500 { background-color: #a58addb3!important; }
.w-full { background-color: #444; }
.d-block { display: contents !important; background-color: #444 !important; }

/*sol container*/
.scrollable-vertical.is-enabled .scrollable-container { background-color: #444; }
.site-menubar-unfold .site-menu>.site-menu-item>a .site-menu-title { color: #fff; }
.site-menubar-light .site-menubar-footer>a { background-color: #333; }
.site-menubar-light .site-menubar-footer>a:hover { background-color: #666; }


/*nav-bar*/
.navbar-default .navbar-toolbar .nav-link { color: #ffffff; }
.site-menubar-unfold .site-navbar .navbar-container { background-color: #555; }
.site-navbar.navbar .navbar-header { background-color: #666; }


/*footer*/
.bg-primary-600{ background-color: #555!important; }

/*mobile*/
.d-block { background-color: #444; }


`);