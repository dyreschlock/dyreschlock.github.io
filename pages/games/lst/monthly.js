var dates = new Array();
var dcount = 0;

function menu()
{
	var cyear = 0;
	var cmonth = 0;
	var mcount = 0;
	var mcost = 0;
	
	for(i = count - 1; i > -1; i--)
	{
		if(!games[i].valid && games[i+1].valid)
		{
			//display once at the start of invalid games
			if(mcount == 1)
				document.write("<br>(" + mcount + " game - $" + mcost.toFixed(2) + ")<br><br>");			
			else
				document.write("<br>(" + mcount + " games - $" + mcost.toFixed(2) + ")<br><br>");
		}

		if(games[i].valid && (cyear != games[i].purchase_date.getFullYear() || cmonth != games[i].purchase_date.getMonth()))
		{
			if(i != count - 1)
			{
				//don't display on first game
				if(mcount == 1)
					document.write("<br>(" + mcount + " game - $" + mcost.toFixed(2) + ")<br><br>");			
				else
					document.write("<br>(" + mcount + " games - $" + mcost.toFixed(2) + ")<br><br>");
			}
			
			mcount = 0;
			mcost = 0;
			
			cyear =	games[i].purchase_date.getFullYear();
			cmonth = games[i].purchase_date.getMonth();
			
			document.write("<a href='sales.html?" + cmonth + "?" + cyear + "'>" + makeMonthYearStr(games[i].purchase_date) + "</a>");
			
			if(cyear == current_year && cmonth == current_month)
			{
				current_index = dcount;
			}
			
			dates[dcount++] = cmonth + "?" + cyear;
		}

		mcount++;
		
		if(games[i].valid)
		{
			if(isJapanesePurchase(games[i]))
			{
				mcost = mcost + (games[i].price / 120.0);
			}
			else
			{
				mcost = mcost + games[i].price;	
			}
		}
	}
	
	document.write("<br>");

	if(previousExists())
		document.write("<a href='sales.html?" + previousMonth() + "'>previous month</a>");
	if(previousExists() && nextExists())
		document.write("<br>");	
	if(nextExists())
		document.write("<a href='sales.html?" + nextMonth() + "'>next month</a>");	

}

function makeDateId(date)
{
	var year = date.getFullYear();
	var month = date.getMonth();
	var day = date.getDate();
	
	if(month < 10)
		month = "0" + month;
		
	if(day < 10)
		day = "0" + day;
		
	return year + "" + month + "" + day;
}

function nextMonth()
{
	if(current_index == 0)
		return "";
		
	return dates[current_index - 1];
}

function nextExists()
{
	return (nextMonth() != "");
}

function previousMonth()
{
	if(current_index == dcount - 1)
		return "";
		
	return dates[current_index + 1];
}

function previousExists()
{
	return (previousMonth() != "");
}

function getMonthStr(month)
{
	if(month == 1) month = "January";
	if(month == 2) month = "February";
	if(month == 3) month = "March";
	if(month == 4) month = "April";
	if(month == 5) month = "May";
	if(month == 6) month = "June";
	if(month == 7) month = "July";
	if(month == 8) month = "August";
	if(month == 9) month = "September";
	if(month == 10) month = "October";
	if(month == 11) month = "November";
	if(month == 12) month = "December";
	
	return month;
}

function makeMonthYearStr(date)
{
	var year = date.getFullYear();
	var month = date.getMonth();
	
	month = getMonthStr(month);
	
	return month + " " + year;
}

function makeDateStr(date)
{
	var year = date.getFullYear();
	var month = date.getMonth();
	var day = date.getDate();
	
	month = getMonthStr(month);

	return month + " " + day + ", " + year;
}

function purchaseEquals(game1, game2)
{
	var date1 = game1.purchase_date;
	var date2 = game2.purchase_date;
	
	return (date1.getFullYear() == date2.getFullYear() &&
		    date1.getMonth() == date2.getMonth() &&
			date1.getDate() == date2.getDate() &&
			game1.store == game2.store &&
			game1.city == game2.city && 
			game1.state == game2.state);
}

function purchaseDateEquals(game1, game2)
{
	var date1 = game1.purchase_date;
	var date2 = game2.purchase_date;
	
	return (date1.getFullYear() == date2.getFullYear() &&
		    date1.getMonth() == date2.getMonth() &&
			date1.getDate() == date2.getDate());
}

function getDailyPurchasedCount(index)
{
	pcount = 1;
	for(j = index; purchaseDateEquals(games[index], games[j]) ;j--)
	{
		if(!purchaseEquals(games[index], games[j]) && !purchaseEquals(games[j], games[j+1]))
		{
			pcount++;
		}
		else if(j == count)
		{
			pcount++;
		}
	}
	return pcount;
}

function content()
{
	var suffix = new Array('', 'b', 'c', 'd', 'e', 'f', 'g', 'h');
	var sindex = 1;
	
	document.write("<table cellspacing='3' cellpadding='2' border='0'>");
	
	for(i = count - 1; i > -1; i--)
	{
		if(games[i].valid && games[i].purchase_date.getMonth() == current_month && games[i].purchase_date.getFullYear() == current_year)
		{
			if(i == count - 1 || (i != count - 1 && !purchaseEquals(games[i], games[i+1])))
			{
				if(i != count - 1 && !purchaseDateEquals(games[i], games[i+1]))
					sindex = getDailyPurchasedCount(i);
				else if(i == count - 1 && purchaseDateEquals(games[i], games[i-1]))
					sindex = getDailyPurchasedCount(i - 1) + 1;
				
				if(i == count - 1 && purchaseEquals(games[i], games[i-1]))
					sindex--;
				
				sindex--;
				
				document.write("<tr>");
				document.write("<td><img src='img/" + makeDateId(games[i].purchase_date) + suffix[sindex] + ".jpg'></td>");
				document.write('<td colspan="5" valign="top">' + makeDateStr(games[i].purchase_date));
				//document.write('&nbsp;&nbsp;' + makeDateId(games[i].purchase_date) + suffix[sindex] + '');
				document.write('<br/><br/>');
			}
			
			document.write("<b>");
			
			if(games[i].japan)
				document.write(games[i].title + ' (Import)');
			else
				document.write(games[i].title);
			   
			document.write('</b> / ' + games[i].console + '&nbsp;<font>' + games[i].company.toLowerCase() + ' // ' + games[i].genre.toLowerCase() + '</font>');
			document.write('<br/>');
			
			if(isJapanesePurchase(games[i]))
			{
				var store_in = getJapaneseIndex(games[i].store);
				var city_in = getJapaneseIndex(games[i].city);
				var state_in = getJapaneseIndex(games[i].state);
				
				var store_html = jcode[store_in].htmlcode;
				if(store_html == "")
					store_html = jcode[store_in].key;
				
				var store_url = jcode[store_in].urlcode;
				
				if(city_in == -1)
				{
					var citystate_html = jcode[state_in].htmlcode;
					if(citystate_html == "")
						citystate_html = jcode[state_in].key;
					
					var citystate_url = jcode[0].urlcode + jcode[state_in].urlcode;
				}
				else
				{
					var citystate_html = jcode[state_in].htmlcode + jcode[city_in].htmlcode;
					if(citystate_html == "")
						citystate_html = jcode[city_in].key + ", " + jcode[state_in].key;
										
					var citystate_url = jcode[0].urlcode + jcode[state_in].urlcode + jcode[city_in].urlcode;
				}
			}
			else
			{
				var store_html = games[i].store;
				var store_url = store_html
				var citystate_html = games[i].city + ", " + games[i].state;
				var citystate_url = games[i].city + ",+" + games[i].state;
			}

			if(games[i].state == "")
			{
				//if state is null, then it's a website
				var store_in = getWebsiteIndex(games[i].store);
				
				var location_html = wcode[store_in].key;
				var location_url = wcode[store_in].url;
				
				var clickhere = "site";
			}
			else
			{
				var location_html = store_html + " in " + citystate_html;
				var location_url = 'http://maps.google.com/maps?f=l&hl=en&q=' + store_url + '&near=' + citystate_url + '&layer=&ie=UTF8&z=12&om=1&iwloc=A';
				
				var clickhere = "map";
			}

			document.write(' -- <span style="color: #333;">' + location_html + ' (<a target="_blank" href="' + location_url + '">' + clickhere + '</a>).  ');

			if(games[i].used)
				document.write("Used");
			else
				document.write("New");
			
			document.write(" for </span><span style='color: #f00;'>");
			
			if(isJapanesePurchase(games[i]))
				document.write("¥" + games[i].price);
			else
				document.write("$" + games[i].price);
						   
			document.write("</span>");
			document.write('<br/><br/>');
			
			if(i == 0 || (i != 0 && !purchaseEquals(games[i], games[i-1])))
			{
				document.write('</td></tr>');	
			}
		}
	}
	
	document.write("</table>");
}