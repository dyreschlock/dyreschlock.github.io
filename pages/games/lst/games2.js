
function menu()
{
	 document.write("<table cellspacing='0' cellpadding='0' border='0' width='100%'>");
  
	 for(i = 0; i < ccount; i++)
	 {
		document.write("<tr><td colspan='2' id='");
	 
		if(selected == console[i].id)
		{
			document.write("select");
		}
		else
			document.write("console");
			
		document.write("'><a href='games2.html?" + console[i].id + "?" + type + "'>" + console[i].name + "</a></td></tr>");
	 }
	 
	 document.write("<tr><td colspan='2' id='console'><br><a href='games2.html?all?" + type + "'>ALL</a><br></td></tr>");
	 
	 document.write("<tr>");
	 document.write("<tr><td id='console'>&nbsp;</td></tr>");
	
	if(type == 'images')
	{
		 document.write("<td width='50%' id='console'><a href='games2.html?" + selected + "?text'>txt</a></td>");
		 document.write("<td width='50%' id='select'><a href='games2.html?" + selected + "?images'>img</a></td>");
	}
	else
	{
		 document.write("<td width='50%' id='select'><a href='games2.html?" + selected + "?text'>txt</a></td>");
		 document.write("<td width='50%' id='console'><a href='games2.html?" + selected + "?images'>img</a></td>");
	}

	 document.write("</tr>");
  
	for(i = 0; i < ccount; i++)
	{
		if(selected == console[i].id)
		{
			ccount = 0;
			console[ccount++] = new centry(console[i].id, console[i].name, console[i].tag);
		}
	}
  
	document.write("</table>");
}

function content()
{
	document.write("<table cellspacing='2' cellpadding='2' border='0' width='97%'>");
	
	function compare_title(a, b)
	{
	 if( a.title > b.title )
		return 1;
	 
	 if( a.title < b.title )
		return -1;
		
	 if( b.japan )
		return -1;
	}
	
	function compare_score(a, b)
	{
	 if( a.score < b.score )
		return 1;
	 else
		return -1;
	}
	
	//games.sort();
	games.sort(compare_title);
	//games.sort(compare_score);
	
	for(i=0; i < ccount; i++)
	{
	 document.write('<tr><td colspan="15"><b><u>' + console[i].name + '</u></b></td></tr>');
	 
	 var title_count = 0;
	 var col_count = 0;
	 
	 document.write('<tr><td colspan="15">');
	 
	 for(j=0; j < count; j++)
	 {
		if(console[i].tag == games[j].console)
		{
			if(type == 'images')
			{
			   /*if( col_count % 9 == 0 )
			   {
				  document.write('<tr><td colspan="15">');
			   }//*/
			   
			   col_count++;
			   title_count++;
			   
			   document.write('<img src="cp/' + games[j].id + '.jpg" border="0">');
			   
			   /*if( col_count % 9 == 0 )
			   {
				  document.write('</td></tr>');
			   }//*/
			}
			else
			{
			   title_count++;
			
			   document.write('<tr>');
			
			   document.write('<td width="3%" align="right"><span style="color: #f00;">' + games[j].score + '</span><font>/5</font>&nbsp;</td>');
			
			   document.write('<td width="92%" align="left">');
			
			   if(games[j].japan)
				  document.write(games[j].title + ' (Import)');
			   else
				  document.write(games[j].title);
			   
			   document.write('&nbsp;<font>' + games[j].company.toLowerCase() + ' // ' + games[j].genre.toLowerCase() + '</font>');
			   document.write('</td>');
			
			   document.write('<td width="5%">&nbsp;</td>');
			
			   document.write('</tr>');
			}
		}
	 }
	 
	 if( type == 'images')
	 //if( col_count % 9 != 0 )
	 {
		document.write('</td></tr>');
	 }
	 document.write('<tr><td colspan="15" align="right"><font>Total: ' + title_count + '&nbsp;&nbsp;&nbsp;' + ((title_count/count) * 100) + '%</font></td></tr>');
	}
	
	document.write("</table>");
}