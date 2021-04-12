/**
 * WinBox.js v0.0.3 (Bundle)
 * Copyright 2021 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/winbox
 */
(function(){'use strict';var e,f=document.createElement("style");f.innerHTML=".bar-n,.bar-nw,.bar-s{height:5px}.winbox{background:#0050ff;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);position:fixed;z-index:10;left:0;top:0;overflow:hidden;transition:width .2s ease-out,height .2s ease-out,transform .2s ease-out;will-change:transform,left,top,width,height;contain:strict}.bar-e,.bar-n,.bar-s,.bar-w{z-index:11;position:absolute}.winbox:-webkit-full-screen{transition:none!important}.winbox:fullscreen{transition:none!important}.bar-n{top:0;left:0;right:0;cursor:n-resize}.bar-e{top:0;right:0;bottom:0;width:5px;cursor:w-resize}.bar-s,.bar-w{left:0;bottom:0}.bar-s{right:0;cursor:n-resize}.bar-w{top:0;width:5px;cursor:w-resize}.bar-ne,.bar-nw,.bar-sw{width:5px;z-index:11;position:absolute}.bar-nw{top:0;left:0;cursor:nw-resize}.bar-ne,.bar-sw{cursor:ne-resize;height:5px}.bar-ne{top:0;right:0}.bar-sw{bottom:0;left:0}.bar-se{position:absolute;bottom:0;right:0;width:5px;height:5px;cursor:nw-resize;z-index:11}.winbox-title{display:table-cell;font-size:14px;text-align:left;padding-left:10px;cursor:move;width:100%;height:35px;vertical-align:middle}.winbox-title span{display:block;width:calc(100% - 130px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.winbox-icon{position:absolute;top:0;bottom:0;right:0}.winbox-icon span{display:inline-block;width:30px;height:100%;text-align:center;background-position:center center;background-repeat:no-repeat;cursor:pointer}.icon-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDBoN2ExIDEgMCAwMTAgMkgxYTEgMSAwIDAxMC0yaDd6Ii8+PC9zdmc+);background-position:center bottom 5px;background-size:14px 14px}.icon-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:17px 17px}.icon-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjMiIGQ9Ik0xLjYxMy4yMWwuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAxMS40MDMgMS40MDNsLS4wODMuMDk0TDkuNDE1IDhsNi4yOTIgNi4yOTNhMSAxIDAgMDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAxLjIxIDE0LjM4N2wuMDgzLS4wOTRMNi41ODUgOCAuMjkzIDEuNzA3QTEgMSAwIDAxMS42MTMuMjF6Ii8+PC9zdmc+);background-size:14px 14px;margin-right:2px}.icon-fullscreen{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iLTEgLTEgMjYgMjYiPjxwYXRoIGQ9Ik04IDNINWEyIDIgMCAwMC0yIDJ2M20xOCAwVjVhMiAyIDAgMDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwMDItMnYtM00zIDE2djNhMiAyIDAgMDAyIDJoMyIvPjwvc3ZnPg==);background-size:18px 18px}.winbox:-webkit-full-screen .icon-fullscreen{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzdjNhMiAyIDAgMDEtMiAySDNtMTggMGgtM2EyIDIgMCAwMS0yLTJWM20wIDE4di0zYTIgMiAwIDAxMi0yaDNNMyAxNmgzYTIgMiAwIDAxMiAydjMiLz48L3N2Zz4=)}.winbox:fullscreen .icon-fullscreen{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzdjNhMiAyIDAgMDEtMiAySDNtMTggMGgtM2EyIDIgMCAwMS0yLTJWM20wIDE4di0zYTIgMiAwIDAxMi0yaDNNMyAxNmgzYTIgMiAwIDAxMiAydjMiLz48L3N2Zz4=)}.winbox-body,.winbox-header{position:absolute;left:0;right:0}.winbox-header{display:table;table-layout:fixed;width:100%;top:0;height:35px;color:#fff;vertical-align:middle;z-index:10}.winbox-body{top:35px;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:scroll-position;background-color:#fff;margin-top:0!important}.winbox .winbox-hide{display:none}";
var k=document.getElementsByTagName("head")[0];k.firstChild?k.insertBefore(f,k.firstChild):k.appendChild(f);var l=document.createElement("div");l.innerHTML="<div class=winbox><div class=bar-n></div><div class=bar-s></div><div class=bar-w></div><div class=bar-e></div><div class=bar-nw></div><div class=bar-ne></div><div class=bar-se></div><div class=bar-sw></div><div class=winbox-header><div class=winbox-title><span> </span></div><div class=winbox-icon><span class=icon-min></span><span class=icon-max></span><span class=icon-fullscreen></span><span class=icon-close></span></div></div><div class=winbox-body></div></div>";
l=l.firstChild;function t(a,b,c){a.addEventListener(b,c)}function v(a,b,c){a["_s_"+b]!==c&&(a.style.setProperty(b,c),a["_s_"+b]=c)}function w(a){a.preventDefault();a.stopImmediatePropagation()};var x=[],z=[],A=0,B=0,C,F,G,H;
function I(a,b){if(!(this instanceof I))return new I(a,b);A||J();a&&a.nodeType||(b=a,a=H);this.g=l.cloneNode(!0);this.body=this.g.getElementsByClassName("winbox-body")[0];this.init();if(b){if("string"===typeof b)var c=b;else{var u=b.id;c=b.title;var y=b.mount;var D=b.html;var m=b.width;var n=b.height;var d=b.x;var p=b.y;var g=b.top;var h=b.left;var q=b.bottom;var r=b.right;var E=b.onclose;var Q=b.onfocus;var R=b.onblur;var S=b.onmove;var T=b.onresize;var M=b.color;var N=b.border;M&&this.setColor(M);
N&&v(this.body,"margin",N+"px");if(b=b["class"])this.g.className="winbox "+b}c&&this.setTitle(c)}c=this.i;b=this.h;g=g?K(g,b):0;q=q?K(q,b):0;h=h?K(h,c):0;r=r?K(r,c):0;c-=h+r;b-=g+q;m=m?K(m,c):c/2;n=n?K(n,b):b/2;u||(u="winbox-"+ ++B);d=d?K(d,c,m):h;p=p?K(p,b,n):g;this.x=d;this.y=p;this.width=m;this.height=n;this.top=g;this.right=r;this.bottom=q;this.left=h;this.id=this.g.id=u;this.full=this.max=this.min=!1;this.m=E;this.o=Q;this.l=R;this.u=S;this.s=T;this.move().resize().focus();y?this.mount(y):D&&
(this.body.innerHTML=D);L(this);a.appendChild(this.g);x.push(this)}I["new"]=function(a,b){return new I(a,b)};function K(a,b,c){"center"===a?a=(b-c)/2:"string"===typeof a&&(c=""+parseFloat(a),"%"===(c!==a&&a.substring(c.length))?a=b/100*c:a=c);return a}
function J(){H=document.body;H[F="requestFullscreen"]||H[F="msRequestFullscreen"]||H[F="webkitRequestFullscreen"]||H[F="mozRequestFullscreen"]||(F="");G=F&&F.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit");t(window,"resize",function(){for(var a=0;a<x.length;a++)x[a].init()})}
function L(a){O(a,"winbox-title");O(a,"bar-n");O(a,"bar-s");O(a,"bar-w");O(a,"bar-e");O(a,"bar-nw");O(a,"bar-ne");O(a,"bar-se");O(a,"bar-sw");t(a.g.getElementsByClassName("icon-min")[0],"click",function(b){a.minimize();w(b)});t(a.g.getElementsByClassName("icon-max")[0],"click",function(b){a.maximize();w(b)});F?t(a.g.getElementsByClassName("icon-fullscreen")[0],"click",function(b){a.fullscreen();w(b)}):v(a.g.getElementsByClassName("icon-fullscreen")[0],"display","none");t(a.g.getElementsByClassName("icon-close")[0],
"click",function(b){a.close();a=null;w(b)});t(a.g,"mousedown",function(){a.focus()})}function P(a){z.splice(z.indexOf(a),1);for(var b=0;b<z.length;b++)z[b].move(a.left+250*b,a.h-a.bottom-35,!0);a.min=!1}
function O(a,b){function c(d){w(d);d.touches&&(d=d.touches[0]||d);a.min||a.max||a.full||(v(a.g,"transition","none"),window.addEventListener("mousemove",u),window.addEventListener("mouseup",y),window.addEventListener("touchmove",u),window.addEventListener("touchend",y),m=d.pageX,n=d.pageY,a.init().focus())}function u(d){d.touches?d=d.touches[0]||d:w(d);var p=d.pageX-m,g=d.pageY-n,h;if("winbox-title"===b){a.x+=p;a.y+=g;var q=h=1}else{if("bar-e"===b||"bar-se"===b||"bar-ne"===b){a.width+=p;var r=1}else if("bar-w"===
b||"bar-sw"===b||"bar-nw"===b)a.x+=p,a.width-=p,q=r=1;if("bar-s"===b||"bar-se"===b||"bar-sw"===b){a.height+=g;var E=1}else if("bar-n"===b||"bar-ne"===b||"bar-nw"===b)a.y+=g,a.height-=g,h=E=1}if(r||E)r&&(a.width=Math.max(Math.min(a.width,a.i-a.x-a.right),250)),E&&(a.height=Math.max(Math.min(a.height,a.h-a.y-a.bottom-1),35)),a.resize();if(q||h)q&&(a.x=Math.max(Math.min(a.x,a.i-a.width-a.right),a.left)),h&&(a.y=Math.max(Math.min(a.y,a.h-a.height-a.bottom-1),a.top)),a.move();m=d.pageX;n=d.pageY}function y(d){v(a.g,
"transition","");window.removeEventListener("mousemove",u);window.removeEventListener("mouseup",y);window.removeEventListener("touchmove",u);window.removeEventListener("touchend",y);w(d)}var D=a.g.getElementsByClassName(b)[0],m,n;D.addEventListener("mousedown",c);D.addEventListener("touchstart",c)}e=I.prototype;e.init=function(){if(!this.full){var a=document.documentElement||H;this.i=a.clientWidth;this.h=a.clientHeight}return this};
e.mount=function(a){a.j||(a.j=a.parentNode);this.body.textContent="";this.body.appendChild(a);return this};e.unmount=function(a){var b=this.body.firstChild;if(b){var c=a||b.j;c&&c.appendChild(b);b.j=a}return this};e.setTitle=function(a){var b=this.g.getElementsByClassName("winbox-title")[0].firstChild;b.v!==a&&(b.firstChild.nodeValue=a,b.v=a);return this};e.setColor=function(a){v(this.g,"background",a);return this};
e.focus=function(){C!==this&&(v(this.g,"z-index",++A),C&&C.l&&C.l(),C=this,this.o&&this.o());return this};e.minimize=function(a){if(!a&&this.min){P(this);var b=!0}else!1===a||this.min||(z.push(this),this.min=b=!0);b&&(this.full&&U(this),this.resize(this.min?250:this.width,this.min?35:this.height,!0).move(this.min?this.left+250*(z.length-1):this.x,this.min?this.h-this.bottom-35:this.y,!0),this.max=!1);return this};
e.maximize=function(){if(this.full&&(U(this),this.max))return this;this.resize(this.max?this.width:this.i-this.left-this.right,this.max?this.height:this.h-this.top-this.bottom-1,!0).move(this.max?this.x:this.left,this.max?this.y:this.top,!0);this.min&&P(this);this.max=!this.max;return this};e.fullscreen=function(a){if("undefined"!==typeof a&&a===this.full)return this;this.full&&U(this)||(this.g[F](),this.full=!0);this.min&&(this.resize().move(),P(this));return this};
function U(a){a.full=!1;if(document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)return document[G](),!0}e.close=function(){this.min&&P(this);this.m&&this.m();this.unmount();this.g.parentNode.removeChild(this.g);C===this&&(C=null);x.splice(x.indexOf(this),1)};
e.move=function(a,b,c){"undefined"===typeof a?(a=this.x,b=this.y):c||(this.x=a?a=K(a,this.i-this.left-this.right,this.width):0,this.y=b?b=K(b,this.h-this.top-this.bottom,this.height):0);v(this.g,"transform","translate("+a+"px,"+b+"px)");this.u&&this.u(a,b);return this};
e.resize=function(a,b,c){"undefined"===typeof a?(a=this.width,b=this.height):c||(this.width=a?a=K(a,this.i-this.left-this.right):0,this.height=b?b=K(b,this.h-this.top-this.bottom):0);v(this.g,"width",a+"px");v(this.g,"height",b+"px");this.s&&this.s(a,b);return this};window.WinBox=I;}).call(this);