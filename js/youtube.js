javascript:(function(){function add(t,u){var a=document.createElement("a");var t=document.createTextNode(t);a.appendChild(t);a.setAttribute('href',u);var b=document.getElementById("watch-headline-user-info");if(b==null)b=document.getElementsByTagName("body").item(0);b.appendChild(a)}var cells=document.getElementsByTagName("embed");for(var i=0;i<cells.length;i++){var code=cells[i].getAttribute("flashvars").split('&');var code3={};for(var c in code){d=code[c].split('=');e=unescape(d[1]);code3[d[0]]=e}var code4={};var f=code3.fmt_url_map.split(',');for(c in f){g=f[c].split('|');code4[g[0]]=g[1]}for(c in code4){switch(c){case'34':add('[360p FLV] ',code4[c]);break;case'35':add('[480p FLV] ',code4[c]);break;case'22':add('[720p HD MP4] ',code4[c]);break;case'37':add('[1080p HD MP4] ',code4[c]);break;default:add('['+c+']',code4[c]);break}}cells[i].parentNode.removeChild(cells[i])}})()