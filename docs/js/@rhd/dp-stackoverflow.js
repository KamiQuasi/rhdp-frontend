System.register(["../@rhelements/rhelement/rhelement.js"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var rhelement_js_1, DPStackOverflow;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (rhelement_js_1_1) {
                rhelement_js_1 = rhelement_js_1_1;
            }
        ],
        execute: function () {
            DPStackOverflow = (function (_super) {
                __extends(DPStackOverflow, _super);
                function DPStackOverflow() {
                    return _super.call(this, DPStackOverflow) || this;
                }
                Object.defineProperty(DPStackOverflow.prototype, "html", {
                    get: function () {
                        return "\n        <style>\n\n        </style>\n        <label for=\"filterByProduct\">Filter by Product</label>\n        <select id=\"filterByProduct\" name=\"filter-by-product\" ng-change=\"updateSearch(); resetPagination();\" ng-model=\"params.product\">\n<div ng-app=\"search\">\n<div class=\"row\" ng-controller=\"SearchController\">\n    <div class=\"large-24 columns\">\n    <div class=\"row\">\n        <div class=\"large-24 columns\">\n        <form class=\"search-bar\" ng-submit=\"updateSearch(); resetPagination();\" role=\"search\"> </form>\n        </div>\n        <div class=\"large-24 columns\" id=\"scrollPoint\">\n        <div class=\"row\">\n            <div class=\"large-14 columns stackoverflow-filters\">\n            <label for=\"filterByProduct\">Filter by Product</label>\n\n            <div class=\"styled-select\">\n<select id=\"filterByProduct\" name=\"filter-by-product\" ng-change=\"updateSearch(); resetPagination();\" ng-model=\"params.product\">\n    <option value=\"\">Show all</option>\n    <option value=\"openjdk\">OpenJDK</option>\n    <option value=\"rhamt\">Red Hat Application Migration Toolkit</option>\n    <option value=\"cdk\">Red Hat Developer Container Kit</option>\n    <option value=\"developertoolset\">Red Hat Developer Toolset</option>\n    <option value=\"rhel\">Red Hat Enterprise Linux</option>\n    <option value=\"amq\">Red Hat JBoss AMQ</option>\n    <option value=\"rhpam\">Red Hat Process Automation Manager</option>\n    <option value=\"brms\">Red Hat Decision Manager</option>\n    <option value=\"datagrid\">Red Hat JBoss Data Grid</option>\n    <option value=\"datavirt\">Red Hat JBoss Data Virtualization</option>\n    <option value=\"devstudio\">Red Hat JBoss Developer Studio</option>\n    <option value=\"eap\">Red Hat JBoss Enterprise Application Platform</option>\n    <option value=\"fuse\">Red Hat JBoss Fuse</option>\n    <option value=\"webserver\">Red Hat JBoss Web Server</option>\n    <option value=\"rhmap\">Red Hat Mobile Application Platform</option>\n    <option value=\"rhoar\">Red Hat Openshift Application Runtimes</option>\n    <option value=\"openshift\">Red Hat OpenShift Container Platform</option>\n    <option value=\"softwarecollections\">Red Hat Software Collections</option>\n    <option value=\"dotnet\">.NET Core for Red Hat Enterprise Linux</option>\n</select>\n</div>\n            </div>\n\n            <div class=\"large-10 columns\">\n            <div class=\"sorting so-sorting\">\n                <p ng-if=\"totalCount &gt; 10\">Show<select class=\"results-count\" ng-change=\"updateSearch()\" ng-model=\"params.size\"><option value=\"10\">10</option>\n<option value=\"25\">25</option>\n<option value=\"50\">50</option>\n<option value=\"100\">100</option></select>results per page</p>\n            </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"large-24 columns\">\n            <h3 class=\"results-title\" ng-bind-template=\"No results found\" ng-if=\"totalCount &lt;= 0\"> </h3>\n\n            <h4 class=\"results-sub-title\" ng-bind-template=\"Please select a different product\" ng-if=\"totalCount &lt;= 0\"> </h4>\n\n            <div class=\"stackoverflow-results-container\" ng-class=\"loading ? 'invisible' : 'search-results-loaded'\" ng-if=\"totalCount &gt; 0\">\n                <div ng-init=\"r = result\" ng-repeat=\"result in results\">\n                <div class=\"stackoverflow-update\">\n                    <div class=\"update\">\n                    <div class=\"update-meta\">\n                        <div class=\"row\">\n                        <div class=\"large-6 columns qtn-stats\">\n\n                            <div class=\"votes-count\">\n                            <h4 ng-bind=\"r._source.up_vote_count\"> </h4>\n                            <p ng-bind-template=\"Votes\"> </p>\n                            </div>\n                            <div class=\"answer-count\" ng-class=\"(r._source.answers[0].is_accepted == true) ? 'accepted-answer' : '' \">\n                            <h4 ng-bind=\"r._source.answer_count\"> </h4>\n                            <p ng-bind-template=\"Answers\"> </p>\n                            </div>\n                            <div class=\"views-count\">\n                            <h4 ng-bind=\"r._source.view_count\"> </h4>\n                            <p ng-bind-template=\"Views\"> </p>\n                            </div>\n                        </div>\n\n                        <div class=\"large-18 columns\">\n                            <a class=\"qtn-title\" ng-href=\"{{r._source.sys_url_view}}\" ng-bind-html=\"r._source.sys_title\"> </a>\n                            <p class=\"qtn-content\" ng-bind-html=\"r | question\"> </p>\n\n                            <div class=\"callout qtn-answer\" ng-class=\"r._source.answers[0] ? 'display-answer' : 'hide-answer' \">\n                            <p ng-show=\"r._source.answers[0].is_accepted == true\">\n                                <strong ng-bind-template=\"Accepted answer: \"> </strong>\n                            </p>\n                            <p ng-show=\"r._source.answers[0].is_accepted == false\">\n                                <strong ng-bind-template=\"Latest answer: \"> </strong>\n                            </p>\n                            <p ng-bind=\"r._source.answers[0].body | htmlToPlaintext\"></p>\n                            <a ng-href=\"{{r._source.sys_url_view}}\" target=\"_blank\" rel=\"noopener noreferrer\" ng-bind-template=\"Read full question at Stack Overflow \u203A\"> </a>\n                            </div>\n                            <div class=\"so-tags\">\n                            <strong class=\"tag-label\" ng-bind-template=\"Tags:\"> </strong>\n                            <span class=\"tag\" ng-repeat=\"tag in r._source.sys_tags\" ng-bind=\"tag\"> </span>\n                            <span class=\"so-author\" ng-bind-template=\"{{r | stackDate}} | {{r | author}}\"> </span>\n                            </div>\n                        </div>\n                        </div>\n                    </div>\n                    </div>\n                </div>\n                </div>\n            </div>\n            </div>\n        </div>\n\n        <nav id=\"paginator\" ng-hide=\"loading\" ng-if=\"paginate.pages &gt; 1\"><span ng-bind-template=\"Showing {{params.from + 1}}-{{paginate.lastVisible}} of  {{totalCount}} results\"></span>\n            <ul class=\"pagination\">\n<li id=\"pagination-first\" ng-class=\"paginate.currentPage &lt; 2 ? 'unavailable': 'available'\">\n                <a ng-click=\"goToPage('first'); scrollPosition();\">First</a>\n            </li>\n            <li id=\"pagination-prev\" ng-class=\"paginate.currentPage &lt; 2 ? 'unavailable': 'available'\">\n                <a ng-click=\"goToPage('prev'); scrollPosition();\">Previous</a>\n            </li>\n            <li class=\"pagination-page-number\" id=\"pagination-{{$index}}\" ng-class=\"{current: page == paginate.currentPage}\" ng-repeat=\"page in paginate.pagesArray track by $index\">\n                <a ng-click=\"goToPage(page); scrollPosition();\" data-page=\"{{page}}\" ng-bind=\"page\"> </a>\n            </li>\n            <li id=\"pagination-next\" ng-class=\"paginate.currentPage &gt;= paginate.pages ? 'unavailable': 'available'\">\n                <a ng-click=\"goToPage('next'); scrollPosition();\">Next</a>\n            </li>\n            <li id=\"pagination-last\" ng-class=\"paginate.currentPage  == paginate.pages ? 'unavailable': 'available'\">\n                <a ng-click=\"goToPage('last'); scrollPosition();\">Last</a>\n            </li>\n            </ul></nav>\n        </div>\n        ";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DPStackOverflow, "tag", {
                    get: function () { return 'dp-stackoverflow'; },
                    enumerable: true,
                    configurable: true
                });
                return DPStackOverflow;
            }(rhelement_js_1.default));
            exports_1("default", DPStackOverflow);
        }
    };
});
