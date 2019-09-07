// ==UserScript==
// @name         S3 Mobile Style
// @namespace    https://github.com/ipcjs
// @version      1.0.1
// @description  S3简单适配手机版网页
// @author       ipcjs
// @match        *://ac.stage3rd.com/*
// @grant        GM_addStyle
// @grant        GM.addStyle
// @require      https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @run-at       document-start
// ==/UserScript==
var css = "@charset \"UTF-8\";\n@media (max-width: 700px) {\n  #top_PageLink select,\n  #top_PageLink + td select,\n  .showpage td select, ._forumTopicList_asp .PageSubject > td:nth-child(1), ._forumTopicList_asp .rowbg1 > td:nth-child(1),\n  ._forumTopicList_asp .rowbg2 > td:nth-child(1), ._forumTopicList_asp .PageSubject > td:nth-child(4), ._forumTopicList_asp .rowbg1 > td:nth-child(4),\n  ._forumTopicList_asp .rowbg2 > td:nth-child(4), ._forumTopicList_asp .rowbg1 > td:nth-child(2) .button_page,\n  ._forumTopicList_asp .rowbg2 > td:nth-child(2) .button_page, ._forumTopicRead_asp form[name=\"w\"] tr:nth-child(1) > td:nth-child(1), ._forumTopicRead_asp form[name=\"w\"] tr:nth-child(2) > td:nth-child(1), ._forumTopicRead_asp form[name=\"w\"] tr:nth-child(4) > td:nth-child(1), ._forumTopicRead_asp form[name=\"w\"] tr:nth-child(5) > td:nth-child(1), ._forumTopicRead_asp form[name=\"topicReplys\"] .TopicBg1 > tbody > tr > td:nth-child(1) > div br,\n  ._forumTopicRead_asp form[name=\"topicReplys\"] .TopicBg2 > tbody > tr > td:nth-child(1) > div br,\n  ._forumTopicRead_asp #main > .TopicBg1 > tbody > tr > td:nth-child(1) > div br,\n  ._forumTopicRead_asp #main > .TopicBg2 > tbody > tr > td:nth-child(1) > div br, ._forumTopicRead_asp form[name=\"topicReplys\"] .TopicBg1 > tbody > tr > td:nth-child(2) tr:nth-child(1) > td:nth-child(2) > a,\n  ._forumTopicRead_asp form[name=\"topicReplys\"] .TopicBg2 > tbody > tr > td:nth-child(2) tr:nth-child(1) > td:nth-child(2) > a,\n  ._forumTopicRead_asp #main > .TopicBg1 > tbody > tr > td:nth-child(2) tr:nth-child(1) > td:nth-child(2) > a,\n  ._forumTopicRead_asp #main > .TopicBg2 > tbody > tr > td:nth-child(2) tr:nth-child(1) > td:nth-child(2) > a, ._forumTopicRead_asp form[name=\"topicReplys\"] .TopicBg1 div[align=\"right\"],\n  ._forumTopicRead_asp form[name=\"topicReplys\"] .TopicBg2 div[align=\"right\"],\n  ._forumTopicRead_asp #main > .TopicBg1 div[align=\"right\"],\n  ._forumTopicRead_asp #main > .TopicBg2 div[align=\"right\"] {\n    display: none; }\n  ._forumTopicRead_asp form[name=\"topicReplys\"] .TopicBg1 > tbody > tr > td:nth-child(2) tr:nth-child(1) > td:nth-child(1),\n  ._forumTopicRead_asp form[name=\"topicReplys\"] .TopicBg2 > tbody > tr > td:nth-child(2) tr:nth-child(1) > td:nth-child(1),\n  ._forumTopicRead_asp #main > .TopicBg1 > tbody > tr > td:nth-child(2) tr:nth-child(1) > td:nth-child(1),\n  ._forumTopicRead_asp #main > .TopicBg2 > tbody > tr > td:nth-child(2) tr:nth-child(1) > td:nth-child(1) {\n    white-space: nowrap; }\n  #main > table:nth-child(2) tr:nth-child(2) td:nth-child(1), ._forumTopicList_asp .PageSubject > td:nth-child(3), ._forumTopicList_asp .rowbg1 > td:nth-child(3),\n  ._forumTopicList_asp .rowbg2 > td:nth-child(3), ._forumTopicList_asp .PageSubject > td:nth-child(5), ._forumTopicList_asp .rowbg1 > td:nth-child(5),\n  ._forumTopicList_asp .rowbg2 > td:nth-child(5) {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden; }\n  /* 全局 */\n  #main {\n    width: 100% !important; }\n    #main table {\n      table-layout: fixed; }\n  /* 首尾页签 */\n  #top_PageLink,\n  #top_PageLink + td,\n  .showpage td {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%; }\n    #top_PageLink > .button_nopage,\n    #top_PageLink + td > .button_nopage,\n    .showpage td > .button_nopage {\n      flex: auto; }\n  /* 列表页面 */\n  ._forumTopicList_asp .rowbg1 > td:nth-child(2),\n  ._forumTopicList_asp .rowbg2 > td:nth-child(2) {\n    font-size: 0px; }\n    ._forumTopicList_asp .rowbg1 > td:nth-child(2) a,\n    ._forumTopicList_asp .rowbg2 > td:nth-child(2) a {\n      font-size: 16px; }\n    ._forumTopicList_asp .rowbg1 > td:nth-child(2) img,\n    ._forumTopicList_asp .rowbg2 > td:nth-child(2) img {\n      display: none !important; }\n  ._forumTopicList_asp .PageSubject > td:nth-child(3), ._forumTopicList_asp .rowbg1 > td:nth-child(3),\n  ._forumTopicList_asp .rowbg2 > td:nth-child(3) {\n    width: 13%; }\n  ._forumTopicList_asp .PageSubject > td:nth-child(5), ._forumTopicList_asp .rowbg1 > td:nth-child(5),\n  ._forumTopicList_asp .rowbg2 > td:nth-child(5) {\n    width: 18%; }\n  /* 详细页面 */\n  ._forumTopicRead_asp form[name=\"topicReplys\"] .TopicBg1 > tbody > tr > td:nth-child(1),\n  ._forumTopicRead_asp form[name=\"topicReplys\"] .TopicBg2 > tbody > tr > td:nth-child(1),\n  ._forumTopicRead_asp #main > .TopicBg1 > tbody > tr > td:nth-child(1),\n  ._forumTopicRead_asp #main > .TopicBg2 > tbody > tr > td:nth-child(1) {\n    font-size: 0px;\n    width: 50px !important; }\n    ._forumTopicRead_asp form[name=\"topicReplys\"] .TopicBg1 > tbody > tr > td:nth-child(1) > div,\n    ._forumTopicRead_asp form[name=\"topicReplys\"] .TopicBg2 > tbody > tr > td:nth-child(1) > div,\n    ._forumTopicRead_asp #main > .TopicBg1 > tbody > tr > td:nth-child(1) > div,\n    ._forumTopicRead_asp #main > .TopicBg2 > tbody > tr > td:nth-child(1) > div {\n      width: 50px !important; }\n    ._forumTopicRead_asp form[name=\"topicReplys\"] .TopicBg1 > tbody > tr > td:nth-child(1) img,\n    ._forumTopicRead_asp form[name=\"topicReplys\"] .TopicBg2 > tbody > tr > td:nth-child(1) img,\n    ._forumTopicRead_asp #main > .TopicBg1 > tbody > tr > td:nth-child(1) img,\n    ._forumTopicRead_asp #main > .TopicBg2 > tbody > tr > td:nth-child(1) img {\n      width: 40px; }\n  ._forumTopicRead_asp form[name=\"topicReplys\"] .TopicBg1 > tbody > tr > td:nth-child(2) > div,\n  ._forumTopicRead_asp form[name=\"topicReplys\"] .TopicBg1 > tbody > tr > td:nth-child(2) > table,\n  ._forumTopicRead_asp form[name=\"topicReplys\"] .TopicBg2 > tbody > tr > td:nth-child(2) > div,\n  ._forumTopicRead_asp form[name=\"topicReplys\"] .TopicBg2 > tbody > tr > td:nth-child(2) > table,\n  ._forumTopicRead_asp #main > .TopicBg1 > tbody > tr > td:nth-child(2) > div,\n  ._forumTopicRead_asp #main > .TopicBg1 > tbody > tr > td:nth-child(2) > table,\n  ._forumTopicRead_asp #main > .TopicBg2 > tbody > tr > td:nth-child(2) > div,\n  ._forumTopicRead_asp #main > .TopicBg2 > tbody > tr > td:nth-child(2) > table {\n    height: auto !important; }\n  ._forumTopicRead_asp #main > .TopicBg1 + table.TopicBg1 {\n    visibility: hidden; }\n  ._forumTopicRead_asp .topic_msg img[loaded] {\n    width: 100%;\n    object-fit: scale-down; } }\n";

const log = console.log.bind(console, `[${GM_info.script.name}]`);

function setupMeta() {
    //<meta name="viewport" content="initial-scale=1.0, user-scalable=no" /> 
    const $meta = document.createElement('meta');
    $meta.name = 'viewport';
    $meta.content = 'initial-scale=1.0, user-scalable=no';
    document.head.appendChild($meta);
}

function setupStyle() {
    // 设置rootClass, 方便对具体页面设置css
    const rootClass = location.pathname.replace(/[\/.]/g, '_');
    document.documentElement.className += ` ${rootClass}`;
    log('rootClass:', rootClass);
    GM.addStyle(css.toString());
}

setupMeta();
setupStyle();
