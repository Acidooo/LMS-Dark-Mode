// ==UserScript==
// @name         LMS KTUN Dark Mode
// @namespace    https://github.com/Acidooo/LMS-Dark-Mode
// @icon         https://lms.ktun.edu.tr/pluginfile.php/1/theme_remui/faviconurl/1589613162/imageedit_1_7336125810.png
// @version      1.1.11
// @author       Acido
// @description   Dark Mode for lms.ktun.edu.tr
// @include      *://lms.ktun.edu.tr/*
// @grant        GM_addStyle
// @downloadURL  https://github.com/Acidooo/LMS-Dark-Mode/raw/master/LMS%20KTUN%20Dark%20Mode.user.js
// @updateURL    https://github.com/Acidooo/LMS-Dark-Mode/raw/master/LMS%20KTUN%20Dark%20Mode.user.js
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// @run-at       document-start
// ==/UserScript==

GM_addStyle(`

/*profile image placeholders*/
//img { filter: invert(80%); } //img color invert

/*filemanager*/
.filemanager-toolbar { background-color: #999; }
.fp-iconview .fp-filename-field .fp-filename {background: #fff0;}


/*odev*/
.path-mod-assign div.submissionsummarytable table tbody tr td.c0 {background-color: #444;color: #dadada;}
#page-admin-course-index .editcourse tbody td, .forumheaderlist tbody td, .generaltable tbody td, form#movecourses table tbody td, table#defineroletable tbody td, table#explaincaps tbody td, table#listdirectories tbody td, table.collection tbody td, table.flexible tbody td, table.grading-report tbody td, table.rolecaps tbody td, table.userenrolment tbody td {     background-color: #555;       color: #dadada; }
.path-mod-assign td.submissionstatussubmitted, .path-mod-assign div.submissionstatussubmitted, .path-mod-assign a:link.submissionstatussubmitted {    background-color: #cfefcf;  }
.path-mod-assign td.submissiongraded, .path-mod-assign div.submissiongraded { }
.path-mod-assign td.earlysubmission, .path-mod-assign div.earlysubmission {}


/*quiz*/
table.quizreviewsummary td.cell {    background: #444!important;    color: #e4eaec;}
table.quizreviewsummary th.cell {    background: #333!important;    color: #daeae1;}
.que .info { background: #444!important;  }
.que h3.no { color: #ff3838!important;  }
.que .qtext {color: #dadada!important; }
.que.multichoice .answer div.r0, .que.multichoice .answer div.r1 {text-indent: 25px!important; }
.radio-custom label::before { margin-left: 20px!important; }
.radio-custom label::after { margin-left: 20px; }
#page-admin-course-index .editcourse tbody tr:nth-of-type(odd), .forumheaderlist tbody tr:nth-of-type(odd), .generaltable tbody tr:nth-of-type(odd), .table-striped tbody tr:nth-of-type(odd), form#movecourses table tbody tr:nth-of-type(odd), table#defineroletable tbody tr:nth-of-type(odd), table#explaincaps tbody tr:nth-of-type(odd), table#listdirectories tbody tr:nth-of-type(odd), table.collection tbody tr:nth-of-type(odd), table.flexible tbody tr:nth-of-type(odd), table.grading-report tbody tr:nth-of-type(odd), table.rolecaps tbody tr:nth-of-type(odd), table.userenrolment tbody tr:nth-of-type(odd) {
    background-color: #444;
    color: #dadada;  }
#page-admin-course-index .editcourse tbody td a, .forumheaderlist tbody td a, .generaltable tbody td a, form#movecourses table tbody td a, table#defineroletable tbody td a, table#explaincaps tbody td a, table#listdirectories tbody td a, table.collection tbody td a, table.flexible tbody td a, table.grading-report tbody td a, table.rolecaps tbody td a, table.userenrolment tbody td a {
    color: #ff3838;
}
.mr-5 {    background-color: #f96868;    color: #fff; }
#page-mod-quiz-view .generalbox#feedback h3 {color: #f96868;}
table.quizattemptsummary .noreviewmessage {    color: #dadada; }

.card-header:first-child { background-color: #444; }
ul.weeks li.section .content { background-color: #444; }
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
       background-color: #777;
}


/*takvim*/
.custom-select { background-color: #999; }

/*Duyuru*/
.bg-white { background-color: #555; }
.bg-grey-100 { background-color: #555!important; }
.pagelayout-frontpage .page-content h2 { color: #ff3838; }
.forumpost .content { background: #777; }


/*Mesaj*/
.messaging-area-container .messaging-area .contacts-area .tabs .tab.selected { background-color: #444; }
.messaging-area-container .messaging-area .contacts-area .tabs .tab { background-color: #444; }
.messaging-area-container .messaging-area .messages-area .response { background-color: #444; }
.messaging-area-container .messaging-area .messages-area .response.messaging { background-color: #444; }
.messaging-area-container .messaging-area .contacts-area .contacts .contact.selected { background-color: #999; }
.messaging-area-container .messaging-area .contacts-area .contacts .contact:hover { background-color: #444; }
.messaging-area-container * { color: #fff; }
.chat-left .chat-content { background-color: #3690c5; }
.messaging-area-container .messaging-area .contacts-area .searchtextarea .form-control { background-color: #444444; }
.response.messaging{ background-color: #444; }//


/*Collapsed sides*/
.navbar>.container-fluid .navbar-collapse, .navbar>.containers .navbar-collapse { background-color: #555; }
.site-menubar-body { background-color: #444; }
.site-menubar-fold .site-navbar .navbar-container { background-color: #555; }
.site-menubar-fold .page, .site-menubar-fold .site-footer { background-color: #555; }
.site-menubar-fold .site-menubar { background-color: #555; }


/*Ders Sayfasi*/
.collapse navbar-collapse .navbar-collapse-toolbar { background-color: #666; }
.no-overflow { color: #dadada; font-weight: bold; }
h4.sectionname a { color: #ff3838; }
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


/*User Profile*/
.nav-tabs-line .nav-link {    color: #dadada; }
[role=button], a, area, button, input, label, select, summary, textarea {    color: #fff; }
.mform .form-inline .custom-select, .mform .form-inline .form-control {    background-color: #dadada; }
.ftoggler {    background: #666; }
#page-enrol-users .page-profile #filterform, .page-profile #page-enrol-users #filterform, .page-profile .card-block, .page-profile .userprofile .profile_tree section, .page-profile .well, .page-profile .yui-skin-sam .yui-layout.path-mod-chat-gui_ajax #chat-messages .chat-message.course-theme, .page-profile .yui-skin-sam .yui-layout.path-mod-chat-gui_ajax .yui-layout-unit-bottom, .page-profile .yui-skin-sam .yui-layout.path-mod-chat-gui_ajax .yui-layout-unit-right, .userprofile .profile_tree .page-profile section, .yui-skin-sam .yui-layout.path-mod-chat-gui_ajax #chat-messages .page-profile .chat-message.course-theme, .yui-skin-sam .yui-layout.path-mod-chat-gui_ajax .page-profile .yui-layout-unit-bottom, .yui-skin-sam .yui-layout.path-mod-chat-gui_ajax .page-profile .yui-layout-unit-right {
background-color: #888; }
.page-profile .page-content .list-group-item {    background-color: #444; }
.page-profile .card-footer { background-color: #333; }
.additional-actions .col-12 .moodle-actionmenu, .additional-actions .col-12 a {background-color: #9990; color: #ffffff;}
.show>.dropdown-menu {    background-color: #999999a6;  }
.dropdown-item:focus, .dropdown-item:hover {    background-color: #7770; color:#333 }
.action-menu .dropdown-toggle {    background-color: #f96868; }
.wb-settings:before {    color: #fff; }
.h1, .h2, .h3, h1, h2, h3 {    color: #dadada; }


/*forum cevaplari*/
.forumpost #course-category-listings .content-mask, .forumpost #course-category-listings .options, .forumpost #course-category-listings .topic, .forumpost .row .content-mask, .forumpost .row .options, .forumpost .row .topic {
    background-color: #666666;
}

/*Odev gonderim penceresi*/
//#page-grade-grading-manage .actions .action, #rubric-rubric.gradingform_rubric #rubric-criteria .criterion .addlevel input, #rubric-rubric.gradingform_rubric .addcriterion, .btn, .qnbutton, .section-modchooser-link a {  background-color: #f96868; }
button, input {    border-radius: 15px; background-color: #efefef; color: black; }
.moodle-dialogue-base .moodle-dialogue-wrap .moodle-dialogue-hd.yui3-widget-hd { background-color: #656565; }
.modal-body, .moodle-dialogue-base .moodle-dialogue .moodle-dialogue-bd { background-color: #999; }
.filemanager .yui3-datatable-even .yui3-datatable-cell { color: #797979; }
.fp-filename {color: #6b6b6b; }
.fp-content-center { background-color: #777; }
.form-control { border-radius: 20px;    background-color: #dadada; }
select.form-control:not([size]):not([multiple]) { background-color: #dadada; }
#page-grade-grading-manage .actions .btn-group>.action:first-child:not(:last-child):not(.dropdown-toggle), #rubric-rubric.gradingform_rubric #rubric-criteria .criterion .addlevel .btn-group>input:first-child:not(:last-child):not(.dropdown-toggle), #rubric-rubric.gradingform_rubric .btn-group>.addcriterion:first-child:not(:last-child):not(.dropdown-toggle), .btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle), .btn-group>.qnbutton:first-child:not(:last-child):not(.dropdown-toggle), .section-modchooser-link .btn-group>a:first-child:not(:last-child):not(.dropdown-toggle) { color: #444; }
#page-grade-grading-manage .actions .btn-group>.action:not(:first-child):not(:last-child):not(.dropdown-toggle), #rubric-rubric.gradingform_rubric #rubric-criteria .criterion .addlevel .btn-group>input:not(:first-child):not(:last-child):not(.dropdown-toggle), #rubric-rubric.gradingform_rubric .btn-group>.addcriterion:not(:first-child):not(:last-child):not(.dropdown-toggle), .btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle), .btn-group>.qnbutton:not(:first-child):not(:last-child):not(.dropdown-toggle), .section-modchooser-link .btn-group>a:not(:first-child):not(:last-child):not(.dropdown-toggle) { color: #444;}
#page-grade-grading-manage .actions .btn-group>.action:last-child:not(:first-child), #rubric-rubric.gradingform_rubric #rubric-criteria .criterion .addlevel .btn-group>input:last-child:not(:first-child), #rubric-rubric.gradingform_rubric .btn-group>.addcriterion:last-child:not(:first-child), .btn-group>.btn:last-child:not(:first-child), .btn-group>.dropdown-toggle:not(:first-child), .btn-group>.qnbutton:last-child:not(:first-child), .section-modchooser-link .btn-group>a:last-child:not(:first-child) { color: #444; }








`);

setTimeout(function () {
    $(".p-10.course-cover-image.pb-30").attr('style', "background-image: none !important"); //Ders sayfasi baslik yazisi icin
    // $(".p-10.course-cover-image.pb-30").css({"background-image": "none !important"});
   }, 100);
