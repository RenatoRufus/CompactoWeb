"use strict";var RDStation=function(){var t={windowLoaded:!1};return window.addEventListener("load",function(){t.windowLoaded=!0}),t}(),RDCookieControl=function(){var t={analytics:{eventName:"rd_cookie_consent_allow_analytics",track:!0},functional:{eventName:"rd_cookie_consent_allow_functional",track:!0},configuration:null};return document.addEventListener(t.analytics.eventName,function(){t.analytics.track=!0}),document.addEventListener(t.functional.eventName,function(){t.functional.track=!0}),t}();!function(){var t=function(){var t=document.createElement("iframe");t.onload=function(){RDStation.windowLoaded=!0,e()},t.setAttribute("style","width: 1px; height: 1px; position: absolute; top: -100px;"),t.setAttribute("id","rd_tmgr"),document.body.appendChild(t)},r=function(){!window.opener||-1==window.name.indexOf("TAGMANAGER_VERIFY")&&-1==window.location.href.indexOf("tagmanager_verify")||window.opener.postMessage(JSON.stringify({task:"checkTagManager",tagManagerChecked:!0}),"https://app.rdstation.com.br")},e=function(){(function(t,e,n,o,a,i){var r=function(){RdstationPopup.init(e,n,t,i)},c=function(t,e){return t+"/js/rdstation-popups/"+e+"/rdstation-popup.min.js?v=1"},d=function(t){t.readyState?t.onreadystatechange=function(){"loaded"!=t.readyState&&"complete"!=t.readyState||(t.onreadystatechange=null,r())}:t.onload=r},u=function(t,e){var n=document.createElement("script");return n.setAttribute("type","text/javascript"),n.setAttribute("src",c(t,e)),d(n),n},s=function(){return null!==document.querySelector("#landing-page-attributes")},l=function(){return s()&&null!==document.querySelector("body > .bricks--container")};if(!s()||l()){var f=u(o,a);document.body.appendChild(f)}})("","e406a4ba741f6d1514684ee93df36d77","748467","https://d335luupugsy2.cloudfront.net","bricks",!1);var t=document.createElement("script"),e=function(){RdstationFormsIntegration.Integration.integrateAll("e406a4ba741f6d1514684ee93df36d77",{gaUaId:""}),console.log("FormIntegration; ver.2.0.0","initialized")};t.setAttribute("type","text/javascript"),t.setAttribute("src","https://d335luupugsy2.cloudfront.net/js/integration/2.0.0/rd-js-integration.min.js?v=1"),t.readyState?t.onreadystatechange=function(){"loaded"!=t.readyState&&"complete"!=t.readyState||(t.onreadystatechange=null,e())}:t.onload=function(){e()},document.body.appendChild(t)},c=function(){return"complete"===document.readyState};(function(t){function e(){TrafficSourceCookie.init("__trf.src",".institutosj.com.br"),console.log("TrafficSourceCookie","initialized");try{r()}catch(t){console.error(t)}}function n(){a.onload=e,a.onreadystatechange=function(){"complete"===this.readyState&&e()},document.body.appendChild(a)}if(window.hasOwnProperty("RDStationTrackingCodeChecker")&&window.RDStationTrackingCodeChecker)return;if(window.RDStationTrackingCodeChecker=!0,-1!=navigator.userAgent.toLowerCase().indexOf("safari"))var o=setInterval(function i(){c()&&(clearInterval(o),t())},500);else c()?t():window.addEventListener("load",t);var a=document.createElement("script");a.setAttribute("type","text/javascript"),a.setAttribute("src","https://d335luupugsy2.cloudfront.net/js/traffic-source-cookie/stable/traffic-source-cookie.min.js"),RDCookieControl.analytics.track?n():document.addEventListener(RDCookieControl.analytics.eventName,n)})(t)}();