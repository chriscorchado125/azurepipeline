!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}([function(e,t,n){"use strict";n.r(t),n.d(t,"fadeOut",(function(){return o})),n.d(t,"fadeIn",(function(){return c})),n.d(t,"updateMenuPages",(function(){return s})),n.d(t,"getCurrentPage",(function(){return l})),n.d(t,"getFullUrlByPage",(function(){return d})),n.d(t,"getMonthYear",(function(){return u})),n.d(t,"cleanURL",(function(){return f})),n.d(t,"setLoading",(function(){return p})),n.d(t,"updateInterface",(function(){return h}));var r=n(1),a=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((r=r.apply(e,t||[])).next())}))},i="https://chriscorchado.com/drupal8",o=function(e){e.style.opacity=1,function t(){(e.style.opacity-=.2)<0?e.style.display="none":requestAnimationFrame(t)}()},c=function(e){e.style.opacity=0,function t(){var n=parseFloat(e.style.opacity);(n+=.2)>1||(e.style.opacity=n,requestAnimationFrame(t))}()},s=function(e,t){return a(void 0,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/api/menu_items/main?_format=json")).then((function(e){return e.ok?e.json():Promise.reject(e.statusText)})).then((function(n){var r="",a="",i="";"about"==e&&(i="border: 1px dashed rgb(115, 153, 234);");var o='<a href="index.html" class="navbar-brand" id="logo" style="'.concat(i,'">\n        <img src="./images/chriscorchado-initials-logo.png" title="Home" alt="Home">\n      </a>');for(var c in n)if("Home"!=(r=n[c].title)&&"About"!=r&&n[c].enabled){var s="";e==r.toLowerCase()&&(s="nav-item-active"),a=r,"Companies"==r&&(r="History"),o+='<a href="'.concat(a.toLowerCase(),'.html"\n        class="nav-item nav-link ').concat(s,'"\n        title="').concat(r,'"\n        id="').concat(r.toLowerCase(),'-link">').concat(r,"</a>")}document.getElementById(t).innerHTML=o})).catch((function(e){alert("Sorry an error has occurred: ".concat(e))}));case 2:case"end":return n.stop()}}),n)})))},l=function(){var e=window.location.pathname.split("/").filter((function(e){return e.length})).pop().split(".")[0];return"index"!=e&&"html5"!=e||(e="about"),e},d=function(e,t){var n="No Path Found";switch(t){case"companies":n="company-screenshot";break;case"courses":n=-1!==e.indexOf(".pdf")?"award-pdf":"award-images";break;case"projects":n="project-screenshot"}return"".concat(i,"/sites/default/files/").concat(n,"/").concat(e)},u=function(e){var t=new Date(e);return t.toLocaleString("default",{month:"long"})+" "+t.getFullYear().toString()},f=function(e){var t="";return e.split(" ").forEach((function(e){e&&(t+=e.replace(/$\n^\s*/gm,""))})),t},p=function(e){if(e){var t=document.createElement("div");t.innerHTML='\n      <div class="preloadAnimation" id="preloadAnimation">\n        <div class="bounce1"></div>\n        <div class="bounce2"></div>\n        <div class="bounce3"></div>\n        <br />Loading\n      </div>',document.body.append(t)}else{if(document.getElementById("preloadAnimation").remove(),document.getElementsByClassName("container")[0]){var n=document.getElementsByClassName("container")[0];c(n)}if(document.getElementsByClassName("container")[1]){var r=document.getElementsByClassName("container")[1];c(r)}}},h=function(e){Object(r.noRecordsFound)("noRecords",e,"navigation","No matches found for")}},function(e,t,n){"use strict";n.r(t),n.d(t,"getSearchCount",(function(){return c})),n.d(t,"getSearchOffset",(function(){return s})),n.d(t,"setPagination",(function(){return l})),n.d(t,"debounce",(function(){return d})),n.d(t,"debounceMe",(function(){return u})),n.d(t,"searchFilter",(function(){return f})),n.d(t,"searchClear",(function(){return p})),n.d(t,"noRecordsFound",(function(){return h})),n.d(t,"getIncludedData",(function(){return m})),n.d(t,"getElementRelationships",(function(){return g})),n.d(t,"itemWithSearchHighlight",(function(){return v}));var r=n(2),a=n(0),i=50,o="searchSite",c=function(e,t){if(document.getElementById(o).value)return document.getElementById(t).innerHTML=e<=i?e+"  ".concat(1==e?"Item":"Items"):i+"  ".concat("Items"),"".concat(e," ").concat(1==e?"Item":"Items"," ")},s=function(e){var t=e.href.replace(/%2C/g,",").replace(/%5B/g,"[").replace(/%5D/g,"]");return t.substring(t.search("offset")+8,t.search("limit")-6)},l=function(e,t,n,r){var a=0,o="",l="";r&&(a=s(r));var d=c(e,"searchCount");if(r||n){document.getElementById("search-container").className="paginationYes";var u=+a/i;d=e==a?'Items 1-<span id="lastCount">'.concat(i,"</span>"):0!==u?"Items ".concat(u*i-i,'-<span id="lastCount">').concat(u*i,"</span>"):"Items ".concat(t,'-<span id="lastCount">').concat(+t+e,"</span>"),document.getElementById("searchCount").innerHTML='<span id="paging-info">'.concat(d,"</span>"),o=n?'<a href="#" class="pager-navigation" id="prev" data-prev="'.concat(n.href,'" title="View the previous page" tabindex="10" role="button"\n         >Prev</a>'):'<span class="pager-navigation disabled" title="There is no previous page available" tabindex="11" role="button">Prev</span>',l=r?'<a href="#" class="pager-navigation" id="next" data-next="'.concat(r.href,'" title="View the next page" tabindex="12" role="button"\n          >Next</a>'):'<span class="pager-navigation disabled" title="There is no next page available" tabindex="13" role="button">Next</span>'}else document.getElementById("search-container").className="paginationNo",document.getElementById("searchCount").innerHTML='<span id="totalItems">'.concat(e,"</span>\n   ").concat(1==e?"Item":"Items");var f=document.getElementById("pagination");e<i&&1===t?f.style.display="none":(f.style.display="inline-block",f.innerHTML="".concat(o,"  ").concat(l))},d=function(e,t){var n;return function(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=function(){n=null,e.apply(void 0,a)};clearTimeout(n),n=setTimeout(o,t)}},u=d((function(e){var t=document.getElementById(o);"Tab"!==e.key&&(Object(r.getPage)(Object(a.getCurrentPage)(),t.value),Object(a.updateInterface)())}),500),f=function(e){var t=e.keyCode||e.which;return t>=65&&t<=122||t>=96&&t<=105||t>=48&&t<=57||16==t||32==t},p=function(e){document.getElementById(e).value="",location.reload()},h=function(e,t,n,r){if(document.getElementById(e)&&document.getElementById(e).remove(),!document.getElementById(e)&&t){document.getElementById("pagination").style.display="none",document.getElementsByClassName("container")[0].removeAttribute("style");var a=document.createElement("div");a.id=e,a.innerHTML="".concat(r," '").concat(t,"'"),document.getElementById(n).appendChild(a),document.getElementById("preloadAnimation").remove(),document.getElementById("searchCount").innerHTML='<b style="color:red">No match</b>'}else document.getElementById("pagination").style.display="inline-block",document.getElementById("searchBtn").style.visibility="visible"},m=function(e){var t=[""],n=[""],r=[""],a=[""];return e.included.forEach((function(e){if(e.attributes.description){var i=/"(.*?)"/.exec(e.attributes.description.value);a[e.id]=i[1]}e.attributes.filename&&(t[e.id]=e.attributes.filename),e.attributes.field_company_name&&(n[e.id]=e.attributes.field_company_name),e.attributes.name&&(r[e.id]=e.attributes.name)})),[n,t,r,a]},g=function(e,t,n,r,a){var i=[],o="",c="",s="",l="",d="",u=[];if(e.relationships.field_award_images&&e.relationships.field_award_images.data&&i.push(t[e.relationships.field_award_images.data[0].id]),e.relationships.field_award_pdf&&e.relationships.field_award_pdf.data&&(o=t[e.relationships.field_award_pdf.data.id]),e.relationships.field_track_image&&e.relationships.field_track_image.data&&(c=t[e.relationships.field_track_image.data.id]),e.relationships.field_company&&e.relationships.field_company.data&&(s=n[e.relationships.field_company.data.id]),e.relationships.field_company_screenshot&&e.relationships.field_company_screenshot.data&&i.push(t[e.relationships.field_company_screenshot.data[0].id]),e.relationships.field_screenshot&&e.relationships.field_screenshot.data)for(var f=0;f<e.relationships.field_screenshot.data.length;f++)i.push(t[e.relationships.field_screenshot.data[f].id]);if(e.relationships.field_project_technology&&e.relationships.field_project_technology.data)for(var p=0;p<e.relationships.field_project_technology.data.length;p++){l+=r[e.relationships.field_project_technology.data[p].id]+", ",d+=a[e.relationships.field_project_technology.data[p].id]+", ";var h={name:r[e.relationships.field_project_technology.data[p].id],image:a[e.relationships.field_project_technology.data[p].id]};u.push(h)}return[i,o,c,s,l,d,u]},v=function(e,t){var n="";if(t){var r=new RegExp(t,"gi"),a="",i="";if(e&&-1!=+e&&(i=e.replace("&amp;","&").replace("&#039;","'")),-1!==i.indexOf("<ul>")){var o="";i.replace("<ul>","").replace("</ul>","").split("<li>").forEach((function(e){e.length>3&&((i=e.slice(0,e.lastIndexOf("<"))).match(r)?(a=i.replace(r,(function(e){return'<span class="highlightSearchText">'.concat(e,"</span>")})),o+="<li>".concat(a,"</li>")):o+="<li>".concat(i,"</li>"))})),n="<ul>".concat(o,"</ul>")}else i.match(r)?n+=a=i.replace(r,(function(e){return'<span class="highlightSearchText">'.concat(e,"</span>")})):n+=i}return n||e}},function(e,t,n){"use strict";n.r(t),n.d(t,"getPage",(function(){return d})),n.d(t,"getData",(function(){return u})),n.d(t,"addProfiles",(function(){return f})),n.d(t,"setPageHTML",(function(){return p})),n.d(t,"renderPage",(function(){return h}));var r=n(0),a=n(1),i=n(3),o=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((r=r.apply(e,t||[])).next())}))},c="https://chriscorchado.com/drupal8",s=50,l="searchSite",d=function(e,t,n){return o(void 0,void 0,void 0,regeneratorRuntime.mark((function a(){var i,o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(i=null,Object(r.setLoading)(!0),"contact"!=e){a.next=12;break}if(-1!=location.toString().indexOf("submitted")){a.next=7;break}return a.next=7,fetch("".concat(c,"/contact/feedback")).then((function(e){return e.ok?e.text():Promise.reject(e.statusText)})).then((function(e){var t=(i=e.replace(/\/drupal8/g,c)).substr(i.indexOf("<form"),i.indexOf("</form>"));t=(t=t.substr(0,t.indexOf("</form>")+8)).replace("Your email address","Email");var n=i.substr(i.indexOf('<script type="application/json" data-drupal-selector="drupal-settings-json">'),i.indexOf("><\/script>"));n=n.substr(0,n.indexOf("<\/script>")+9),i='<h1 id="content" tabindex="12">Contact</h1>'.concat(t," ").concat(n)})).catch((function(e){alert("Sorry an error has occurred: ".concat(e))}));case 7:return h(i,e),Object(r.setLoading)(!1),a.abrupt("return",!1);case 12:if(!n){a.next=18;break}return a.next=15,u(n);case 15:i=a.sent,a.next=55;break;case 18:a.t0=e,a.next="about"===a.t0?21:"companies"===a.t0?25:"courses"===a.t0?35:"projects"===a.t0?45:55;break;case 21:return a.next=23,u("".concat(c,"/jsonapi/node/page?fields[node--page]=id,title,body&\n              filter[id][operator]=CONTAINS&\n              filter[id][value]=ca23f416-ad70-41c2-9228-52ba6577abfe"));case 23:return i=a.sent,a.abrupt("break",55);case 25:if(!t){a.next=31;break}return a.next=28,u("".concat(c,"/jsonapi/node/company?filter[or-group][group][conjunction]=OR&\n                filter[field_company_name][operator]=CONTAINS&\n                filter[field_company_name][value]=").concat(t,"&\n                filter[field_company_name][condition][memberOf]=or-group&\n                filter[field_job_title][operator]=CONTAINS&\n                filter[field_job_title][value]=").concat(t,"&\n                filter[field_job_title][condition][memberOf]=or-group&\n                filter[body.value][operator]=CONTAINS&\n                filter[body.value][value]=").concat(t,"&\n                filter[body.value][condition][memberOf]=or-group&\n                sort=-field_end_date&\n                include=field_company_screenshot&\n                page[limit]=").concat(s));case 28:i=a.sent,a.next=34;break;case 31:return a.next=33,u("".concat(c,"/jsonapi/node/company?sort=-field_end_date&\n                include=field_company_screenshot&\n                page[limit]=").concat(s));case 33:i=a.sent;case 34:return a.abrupt("break",55);case 35:if(!t){a.next=41;break}return a.next=38,u("".concat(c,"/jsonapi/node/awards?filter[or-group][group][conjunction]=OR&\n                filter[title][operator]=CONTAINS&\n                filter[title][value]=").concat(t,"&\n                filter[title][condition][memberOf]=or-group&\n                filter[field_award_date][operator]=CONTAINS&\n                filter[field_award_date][value]=").concat(t,"&\n                filter[field_award_date][condition][memberOf]=or-group&\n                sort=-field_award_date&\n                include=field_award_pdf,field_track_image,field_award_images&\n                page[limit]=").concat(s));case 38:i=a.sent,a.next=44;break;case 41:return a.next=43,u("".concat(c,"/jsonapi/node/awards?sort=-field_award_date&\n                include=field_award_pdf,field_track_image,field_award_images&\n                page[limit]=").concat(s));case 43:i=a.sent;case 44:return a.abrupt("break",55);case 45:if(!t){a.next=51;break}return a.next=48,u("".concat(c,"/jsonapi/node/project?filter[or-group][group][conjunction]=OR&\n              filter[title][operator]=CONTAINS&\n              filter[title][value]=").concat(t,"&\n              filter[title][condition][memberOf]=or-group&\n              filter[taxonomy_term--tags][path]=field_project_technology.name&\n              filter[taxonomy_term--tags][operator]=CONTAINS&\n              filter[taxonomy_term--tags][value]=").concat(t,"&\n              filter[taxonomy_term--tags][condition][memberOf]=or-group&\n              filter[field_company.title][operator]=CONTAINS&\n              filter[field_company.title][value]=").concat(t,"&\n              filter[field_company.title][condition][memberOf]=or-group&\n              filter[field_screenshot.meta.alt][operator]=CONTAINS&\n              filter[field_screenshot.meta.alt][value]=").concat(t,"&\n              filter[field_screenshot.meta.alt][condition][memberOf]=or-group&\n              filter[field_date][operator]=CONTAINS&filter[field_date][value]=").concat(t,"&\n              filter[field_date][condition][memberOf]=or-group&\n              sort=-field_date&field_company.title&\n              include=field_project_technology,field_company,field_screenshot&fields[node--company]=field_company_name,field_video_url&\n              fields[node--project]=title,body,field_date,field_screenshot,field_project_technology,field_company,field_video_url&\n              page[limit]=").concat(s));case 48:i=a.sent,a.next=54;break;case 51:return a.next=53,u("".concat(c,"/jsonapi/node/project?sort=-field_date&field_company.title&\n                include=field_project_technology,field_company,field_screenshot&\n                fields[node--company]=field_company_name,field_video_url&\n                fields[node--project]=title,body,field_date,field_screenshot,field_project_technology,field_company,field_video_url&\n                page[limit]=").concat(s));case 53:i=a.sent;case 54:return a.abrupt("break",55);case 55:o={currentCount:document.getElementById("lastCount")?document.getElementById("lastCount").textContent:1},(i=Object.assign(Object.assign({},i),{passedInCount:o})).data.length?h(i,e,t,i.links.next,i.links.prev):Object(r.updateInterface)(t);case 58:case"end":return a.stop()}}),a)})))},u=function(e){return o(void 0,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={},t.next=3,fetch(Object(r.cleanURL)(e)).then((function(e){return e.json()})).then((function(e){return n=e}));case 3:return t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))},f=function(e){document.getElementById(e).innerHTML='\n  <div class="icon" id="pdf-resume">\n    <a href="https://chriscorchado.com/resume/Chris-Corchado-resume-2020.pdf" target="_blank" tabindex="7">\n      <img alt="Link to PDF Resume" src="https://chriscorchado.com/images/pdfIcon.jpg" title="Link to PDF Resume" />\n      <span>Resume</span>\n    </a>\n  </div>\n\n  <div class="icon" id="profile-linkedin">\n    <a href="https://www.linkedin.com/in/chriscorchado/" target="_blank" tabindex="8">\n      <img alt="Link to LinkedIn Profile" title="Link to LinkedIn Profile" src="https://chriscorchado.com/images/linkedInIcon.jpg" />\n      <span>LinkedIn</span>\n    </a>\n  </div>\n\n  <div class="icon" id="profile-azure">\n    <a href="https://docs.microsoft.com/en-us/users/corchadochrisit-2736/" target="_blank" tabindex="9">\n      <img alt="Link to Azure Profile" title="Link to Azure Profile" src="https://chriscorchado.com/images/azureIcon.png" />\n      <span>Azure</span>\n    </a>\n  </div>'},p=function(e){var t="",n=e[0],o=e[1],c=e[2],s=e[3],l=e[4],d=e[5],u=e[6],p=e[7],h=e[8],m=e[9],g=e[10],v=e[11],y=e[12],b=e[13],_=(e[14],e[15]);switch(n){case"about":document.getElementById("search-container").style.display="none",document.getElementById("logo").getElementsByTagName("img")[0].style.border="1px dashed #7399EA";var x=o.attributes.body.value.toString();return f("profiles"),x;case"contact":if(f("profiles"),-1!==location.toString().indexOf("/contact.html?submitted=true"))Object(i.formSubmitted)(5);else document.getElementsByClassName("container")[0].innerHTML=o.toString(),document.getElementById("contact-link").className+=" nav-item-active",document.getElementById("edit-field-site-0-value").value=location.toString(),document.getElementById("edit-mail").focus();break;case"companies":return'<div class="company-container col shadow">\n\n          <div class="company-name" tabindex="'.concat(_++,'">').concat(c,'</div>\n          <div class="company-job-title" tabindex="').concat(_++,'">').concat(s,'</div>\n          <div class="body-container" tabindex="').concat(_++,'">').concat(l,'</div>\n\n          <div class="screenshot-container">\n            <img loading="lazy" src=').concat(Object(r.getFullUrlByPage)(d[0],n),'\n            class="company-screenshot"\n            alt="').concat(o.attributes.title,' Screenshot"\n            title="').concat(o.attributes.title,' Screenshot" tabindex="').concat(_++,'" />\n          </div>\n\n          <div class="employment-dates" tabindex="').concat(_++,'">').concat(u," - ").concat(p,"</div>\n        </div>");case"courses":return t='<div class="course-box box">\n          <h2 tabindex="'.concat(_++,'">').concat(c,'</h2>\n\n          <div>\n            <img loading="lazy" src="').concat(Object(r.getFullUrlByPage)(d[0],n),'"\n              alt="').concat(c.replace(/(<([^>]+)>)/gi,""),'"\n              title="').concat(c.replace(/(<([^>]+)>)/gi,""),'"  tabindex="').concat(_++,'" />\n          </div>\n\n          <div class="course-wrapper">\n\n            <span class="course-date"  tabindex="').concat(_++,'">').concat(g,'</span>\n\n            <span class="course-links">\n              <a href="').concat(Object(r.getFullUrlByPage)(m,n),'" target="_blank"  tabindex="').concat(_++,'">\n                <img loading="lazy" src="https://chriscorchado.com/images/pdfIcon.jpg" height="25"\n                title="View the PDF Certificate" alt="View the PDF Certificate"/>\n              </a>\n            </span>'),h&&(t+='<span class="course-links">\n            <a href="'.concat(Object(r.getFullUrlByPage)(h,n),'" data-featherlight="image"  tabindex="').concat(_++,'">\n              <img loading="lazy" src="https://chriscorchado.com/images/linkedIn-track.png" height="25"\n              title="View the Courses in the Track" alt="View the Courses in the Track" />\n            </a>\n          </span>')),t+="</div></div>";case"projects":var w=0;if(t='<div class="project col">\n        <div class="project-title" tabindex="'.concat(_++,'">').concat(c,'</div>\n        <div class="project-company" tabindex="').concat(_++,'">').concat(v,' <span class="project-date" tabindex="').concat(_++,'">(').concat(g,')</span></div>\n        <div class="body-container" tabindex="').concat(_++,'">').concat(l,"</div>"),d){var j="project-item-grid project-items".concat(o.relationships.field_screenshot.data.length),O='<section data-featherlight-gallery data-featherlight-filter="a" class="'.concat(j,'">'),E=new Array;o.relationships.field_screenshot.data.forEach((function(e){E.push(e.meta.alt)})),w=0,d.forEach((function(e){e.split(",").forEach((function(e){var t=Object(r.getFullUrlByPage)(e,n);O+='<div class="project-item shadow" title=\''.concat(E[w],"'>\n\n              <a href=").concat(t,' class="gallery"  tabindex="').concat(_++,'">\n                <div class="project-item-desc">\n                  ').concat(Object(a.itemWithSearchHighlight)(E[w],b),'\n                </div>\n\n                <img loading="lazy" src=\'').concat(t,"' alt='").concat(E[w],"'\n                  title='").concat(E[w],"' />\n              </a>\n            </div>"),w++}))})),t+=O+="</section>"}if(o.attributes.field_video_url){var I=encodeURIComponent(c);o.attributes.field_video_url.forEach((function(e){t+='<span title="Play Video"><a href="https://chriscorchado.com/video.html?url='.concat(o.attributes.field_video_url,"&name=").concat(I,'" target="_blank" class="play-video"  tabindex="').concat(_++,'">\n            Play Video <img loading="lazy" src="https://chriscorchado.com/images/play_video_new_window_icon.png" alt="Play Video" width="20" />\n          </a></span>')}))}return t+='<div class="project-technology" tabindex="'.concat(_++,'">').concat(y.slice(0,-2),"</div>"),t+="</div>"}},h=function(e,t,n,i,o){var c=!1;if("contact"!=t){var s=[""],u=[""],f=[""],h=[""];if(e.included){var m=Object(a.getIncludedData)(e);s=m[0],u=m[1],f=m[2],h=m[3]}var g="",v="",y="",b="",_="",x="",w="",j="",O="",E="",I="",k="",L="",S=0,C=[],B=[];e.data.forEach((function(e){if(b=e.attributes.title,v=e.attributes.body?e.attributes.body.value:"",_=e.attributes.field_date||e.attributes.field_award_date,j=e.attributes.field_job_title,x=e.attributes.field_start_date,w=e.attributes.field_end_date,I="full"==e.attributes.field_type?"Full-Time":"Contract",O="",L="",C=[],B=[],e.relationships){var i=Object(a.getElementRelationships)(e,u,s,f,h);C.includes(i[0].toString())||C.push(i[0].toString()),k=i[1].toString(),i[2]&&(L=i[2].toString()),E=i[3].toString(),O+=i[4].toString(),i[5].toString(),B.push(i[6])}_&&("projects"==t&&(_=_.split("-")[0]),"courses"==t&&(_=Object(r.getMonthYear)(_))),x&&(x=Object(r.getMonthYear)(x)),w&&(w=Object(r.getMonthYear)(w)),b=b.replace("&amp;","&"),n&&(b=Object(a.itemWithSearchHighlight)(b,n),_=Object(a.itemWithSearchHighlight)(_,n),x=Object(a.itemWithSearchHighlight)(x,n),w=Object(a.itemWithSearchHighlight)(w,n),v=Object(a.itemWithSearchHighlight)(v,n),j=Object(a.itemWithSearchHighlight)(j,n),O=Object(a.itemWithSearchHighlight)(O,n),E=Object(a.itemWithSearchHighlight)(E,n),"node-company"!==I&&(I=Object(a.itemWithSearchHighlight)(I,n))),S++;var o=[t,e,b,j,v,C,x,w,L,k,_,E,O,n,B,15*S];switch(t){case"about":g=p(o);break;case"companies":case"courses":case"projects":g+=p(o)}}));var P=!1;switch(t){case"about":y="about-link",g='<h1 id="content" tabindex="12">About Me</h1>'.concat(g);break;case"companies":y="companies-link",c=!0,g='<h1 id="content" tabindex="12">History</h1><div class="container company">'.concat(g,"</div>");break;case"courses":y="courses-link",c=!0,P=!0,g=' <h1 id="content" tabindex="12">Courses</h1><div class="container courses-container row">'.concat(g,"</div>");break;case"projects":y="projects-link",c=!0,P=!0,g='<h1 id="content" tabindex="12">Projects</h1><div class="container project-container row">'.concat(g,"</div>")}if("about"!==t&&(document.getElementById(y).className+=" nav-item-active"),document.getElementsByClassName("container")[0].innerHTML=g,c){document.getElementById("search-container").style.display="block";var N=document.getElementById(l);N.addEventListener("keyup",(function(e){Object(a.debounceMe)(e)})),N.addEventListener("keydown",(function(e){return Object(a.searchFilter)(e)})),document.getElementById("searchBtn").addEventListener("click",(function(e){Object(a.searchClear)(l)}))}if(P&&$("a.gallery").featherlightGallery({previousIcon:"&#9664;",nextIcon:"&#9654;",galleryFadeIn:200,galleryFadeOut:300}),"about"!==t&&"contact"!==t){Object(a.setPagination)(S,e.passedInCount.currentCount,o,i);var T=document.getElementById(l);if(document.getElementById("prev")){var H=document.getElementById("prev");H.addEventListener("click",(function(e){d(Object(r.getCurrentPage)(),T.value,H.dataset.prev)}))}if(document.getElementById("next")){var A=document.getElementById("next");A.addEventListener("click",(function(e){d(Object(r.getCurrentPage)(),T.value,A.dataset.next)}))}}Object(r.setLoading)(!1),"about"==t&&(document.getElementById("html5").setAttribute("class","shadow-version noLink"),document.getElementById("html5-here").style.display="block")}else p([t,e])}},function(e,t,n){"use strict";n.r(t),n.d(t,"formSubmitted",(function(){return r}));var r=function(e){var t=document.createElement("div");if(t.style.padding="50px",t.innerHTML='<h2>Thanks For Your Submission</h2>\n  <h4>Redirecting to the homepage in <span id="secondCountDown">'.concat(e,'</span> seconds</h4>\n  <img id="timer" src="https://chriscorchado.com/images/timer.gif" />'),document.getElementsByClassName("container")[0].append(t),!new URLSearchParams(window.location.search).get("submitted"))var n=setInterval((function(){e--,document.getElementById("secondCountDown").innerHTML=e.toString(),0===e&&(clearInterval(n),window.location.replace(location.href.substring(0,location.href.lastIndexOf("/")+1)))}),1e3)}},function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof g?t:g,i=Object.create(a.prototype),o=new L(r||[]);return i._invoke=function(e,t,n){var r=u;return function(a,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===a)throw i;return C()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var c=E(o,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=d(e,t,n);if("normal"===s.type){if(r=n.done?h:f,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=h,n.method="throw",n.arg=s.arg)}}}(e,n,o),i}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var u="suspendedStart",f="suspendedYield",p="executing",h="completed",m={};function g(){}function v(){}function y(){}var b={};b[i]=function(){return this};var _=Object.getPrototypeOf,x=_&&_(_(S([])));x&&x!==n&&r.call(x,i)&&(b=x);var w=y.prototype=g.prototype=Object.create(b);function j(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function n(a,i,o,c){var s=d(e[a],e,i);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==typeof u&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,o,c)}),(function(e){n("throw",e,o,c)})):t.resolve(u).then((function(e){l.value=e,o(l)}),(function(e){return n("throw",e,o,c)}))}c(s.arg)}var a;this._invoke=function(e,r){function i(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(i,i):i()}}function E(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=d(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,m;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function S(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:C}}function C(){return{value:t,done:!0}}return v.prototype=w.constructor=y,y.constructor=v,v.displayName=s(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,s(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},j(O.prototype),O.prototype[o]=function(){return this},e.AsyncIterator=O,e.async=function(t,n,r,a,i){void 0===i&&(i=Promise);var o=new O(l(t,n,r,a),i);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},j(w),s(w,c,"Generator"),w[i]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=S,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(k),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return c.type="throw",c.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],c=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;k(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:S(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}},function(e,t,n){"use strict";n.r(t)},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(2);window.onload=function(){Object(a.getPage)(Object(r.getCurrentPage)())}},function(e,t,n){"use strict";n.r(t)},function(e,t,n){"use strict";n.r(t)},function(e,t,n){"use strict";n.r(t)},,function(e,t,n){"use strict";n.r(t)},,,,,,,function(e,t,n){"use strict";n.r(t);n(4);n(5),n(19),n(7),n(8),n(9),n(11),n(1),n(0),n(2),n(6)},function(e,t,n){"use strict";n.r(t)}]);
//# sourceMappingURL=project.a3b51743210dcf9f4e71.js.map