function initval()
{
if(document.comment_area){
  document.comment_area.name.value  = getCookie("comment_name");
  document.comment_area.email.value = getCookie("comment_email");
  document.comment_area.url.value   = getCookie("comment_url");
  document.comment_area.set_cookie.checked = getCookie("comment_setcookie");
}
}

function setval()
{
  if(document.comment_area.set_cookie.checked){
    setCookie("comment_name", document.comment_area.name.value);
    setCookie("comment_email", document.comment_area.email.value);
    setCookie("comment_url", document.comment_area.url.value);
    setCookie("comment_setcookie", document.comment_area.set_cookie.checked);
  }
}

function getCookie(sName)
{
  sName += "="; 
  sCookie = document.cookie+";";
  start = sCookie.indexOf(sName);
  if (start != -1){
    end = sCookie.indexOf(";",start);
    sValue = sCookie.substring(start+sName.length,end);
    return unescape(sValue);
  }
  return "";
}

function setCookie(sName,sValue)
{
    if ((sName != null) && (sValue != null))
    {
        var setDay = new Date();
        setDay.setTime(setDay.getTime()+(30*1000*60*60*24));
        sDay = setDay.toGMTString();
        document.cookie = sName + "="+escape(sValue)+";expires="+sDay;
        return true;
    }
    return false;
}
