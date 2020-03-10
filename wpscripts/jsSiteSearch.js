function GetSiteSearchResults(newWindow,frameObject,frameObjectName,fontFace,fontSize,fontColour,linkFace,linkSize,linkColour,bgColour,resultsText)
{
var sTerms="";
var iDepth = 0;
var sURL = new String(window.location.href);
if (sURL.indexOf("swr=true") != -1)
	return;
if (sURL.indexOf("?") > 0)
{
var arrParams = sURL.split("?" );
var arrURLParams = arrParams[1].split("&" );
for (var i=0;i<arrURLParams.length;i++)
{
var sParam = arrURLParams[i].split("=" );
var sValue = decodeURIComponent(sParam[1]);
if( decodeURIComponent(sParam[0]) == frameObjectName)
	sTerms = sValue;
if( decodeURIComponent(sParam[0]) == "depth")
	iDepth = parseInt(sValue);
}
}
var d=frameObject.document;
if (sTerms=="") {d.open(); d.write("<html><head></head><body style=\"background: transparent;\"></body></html>" ); d.close();return;}
var sBack=""; for (i=0; i<iDepth; i++) sBack+='..\\\\';
d.open();
d.write("<!doctype html>" );
d.write("<html lang=\"en\">" );
d.write("<head>" );
d.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">" );
d.write("</head>" );
d.write("<body style=\"margin: 0px 0px 0px 0px; font-family: "+fontFace+"; font-size: "+fontSize+"; color: "+fontColour+"; background: "+bgColour+";\">" );
d.write("<div id=\"wpSearchResults\"></div>" );
d.write("<script type=\"text/javascript\">" );
d.write("var wordMap = new Array(\" ohio valley region history from humble beginnings fraternal dominance continues shining example view more visit national website iota theta® brothers secure area access log-in hearts password required required comments questions e-mail address regional polaris behalf across states tennessee michigan kentucky west virginia brings great pleasure welcome admin log-in your dues here name meeting fees enter chapter undergrad graduate $100 sweetheart community project make donation select donate button contribute \",\" vestibulum semper enim aliquam dapibus ipsum vitae eget mauris nunc luctus ornare phasellus augue rutrum tempus blandit vehicula neque consequat proin metus duis tellus malesuada tincidunt mauris purus donec aliquet dolor integer sapien nibh egestas cursus amet faucibus elementum ullamcorper massa nullam posuere velit quisque sodales suscipit erat praesent congue lorem maecenas gravida fringilla molestie pede vivamus quis odio libero lectus dignissim suspendisse turpis justo accumsan morbi pretium lacus cras laoreet elit sociis natoque penatibus magnis parturient montes nascetur ridiculus iaculis felis nulla nulla nisi nunc arcu magna sollicitudin adipiscing feugiat facilisis euismod risus pellentesque mollis nisl fusce varius tristique mattis ligula quam ultrices sagittis bibendum pellentesque interdum porta orci diam ipsum \",\" vestibulum semper enim nulla quis nibh proin pede ligula facilisis gravida phasellus purus etiam sapien duis diam urna iaculis vehicula varius amet donec nisl aliquam erat volutpat integer fringilla lobortis quam suscipit magna consequat libero hendrerit ante quisque commodo tellus sodales lorem morbi consectetuer mauris odio dolor suspendisse ornare vestibulum tempor porttitor convallis aliquet eros nunc nulla eget eleifend feugiat augue nisi vitae velit cras cursus ipsum pulvinar orci pellentesque blandit luctus justo venenatis dapibus rhoncus dignissim turpis felis imperdiet metus faucibus arcu mauris tincidunt class aptent taciti sociosqu litora torquent conubia nostra inceptos hymenaeos nunc rutrum tempus neque malesuada lacinia pretium curabitur mollis mattis congue fusce condimentum elementum accumsan ultrices nonummy lacus adipiscing pharetra dictum sagittis aenean tristique interdum ullamcorper porta pellentesque fermentum primis posuere cubilia curae praesent vulputate scelerisque placerat auctor tortor bibendum nullam sollicitudin egestas massa maecenas molestie vivamus lectus laoreet elit sociis natoque penatibus magnis parturient montes nascetur ridiculus euismod risus ultricies \",\" vestibulum semper enim mauris purus donec nunc ornare aliquet tempus dolor integer sapien nibh egestas cursus amet faucibus elementum luctus ullamcorper vitae massa nullam posuere mauris velit quisque sodales suscipit erat blandit praesent congue lorem maecenas dapibus gravida fringilla duis molestie pede vivamus quis odio libero tincidunt metus lectus dignissim suspendisse turpis justo accumsan morbi pretium lacus cras laoreet elit sociis natoque penatibus magnis parturient montes nascetur ridiculus iaculis felis phasellus nulla nulla nisi rutrum nunc arcu nisl eros lorem ipsum consectetuer adipiscing porttitor interdum consequat tristique porta imperdiet ante primis orci ultrices cubilia curae pellentesque ligula aenean volutpat viverra tellus vestibulum tempor convallis eget urna eleifend feugiat augue pulvinar etiam pellentesque venenatis rhoncus proin quam habitasse platea dictumst mattis dictum ultricies magna aliquam malesuada aliquam sollicitudin sagittis fusce facilisis class aptent taciti sociosqu litora torquent conubia nostra inceptos hymenaeos vehicula neque lacinia hendrerit bibendum potenti varius condimentum lobortis placerat mollis diam risus fermentum scelerisque vulputate commodo euismod \",\" from humble beginnings fraternal dominance ohio valley region continues shining example growth relevance sustainability iota theta fraternity born idea then assistant regional polaris karl price 1996 suggested 16th international grand jerry pittman that realignment needed fraternity's fraternitys regions what started chapters kentucky grown over region also includes tennessee michigan west virginia became ovr's ovrs first regional wanted these exhibit structure brotherhood foundation respect within environment where brothers both have take care business this combination worked well evident year award 1999 believe there limits when achieving one's ones goals apparent leaders taken their abilities international level region's 1996-2000 currently 20th darren sanford second 2000-2002 previously served 19th vice-polaris vice-chairman board directors holloman third 2000-2005 formerly director marketing dorn immediate past 2005-2009 helped organize some biggest events brothers read this making difference college campuses communities part building tradition resting upon scope view chapters here states history making difference throughout states make striving through community service projects nationally sponsored initiatives family embodies portrays founding principles theta® leadership scholarship citizenship brotherhood fidelity grow strengthen will it's commitment meaningful contributions society whole shall forever remain dedicated founders' founders vision \",\" place event contact name chapter region info heart dates project hours impact model number hearts venue telephone person ohio valley community service form \",\" ohio valley regional polaris want personally thank visiting website region iota theta fraternity your visible link latest news information plus chapters providing stellar service scholarship leadership citizenship fidelity brotherhood states michigan west virginia kentucky tennessee leadership region guiding principles upon which theta® founded *select individual photo below read officer's officers \",\" photo roll \",\" iota sweethearts ohio valley style theta recognized respected honored tradition fraternity have long history affiliation with this harkens back days founding circumstances early 1960's 1960s morgan state university blessed invaluable ally person audrey brooks member staff this capacity played crucial behind scenes role many instances actions influence prevented fledgling organization from being victimized those would seen fail spirit dedication lives today through sweetheart organization good reason navigated rocky waters years brotherhood could always count support serving hostesses national meeting team stepshow hearts been there front lines providing vocal moral brothers today whom wives continue major like things about represents departure norm practiced other groups most notably pledge they selected specific criteria defined official directive additionally construed substitute sorority fact thousands gone join nphc sororities avid supporter these their activities keeping respect frown upon undertaken that might competitive disrespectful organizations only record your community service hours community service \",\" contact ohio valley region have question comment region? enter your information below regional representative will back with comments e-mail address name e-mail ohiovalleyrp iotaphitheta \",\" ohio valley search results \",\" thank ohio valley region community service form \",\" still building never resting 2013 fall regional meeting beginning thursday columbus ohio hotel info doubletree suites hilton downtown **official hotel** front street 43215 phone 4600|fax 8228 discount registration code c-ipt iota theta site webpage friday night banquet tickets enter name chapter meal selection \",\" super regionals menu items teriyaki grilled chicken mashed potatoes stemmed vegetables -or- tilapia lemon butter sauce with price plus process name attendee region chapter please select banquet meal choice sold make your selection payment below agendas brothers sweethearts click here event tickets stepshow party \" );" );
d.write("var pageMap = new Array(\"Home\",\"News Story\",\"Terms And Conditions\",\"Privacy Policy\",\"About the OVR\",\"OVR Community Service\",\"Regional Leadership\",\"Gallery\",\"OVR Hearts\",\"Contact Us\",\"Search Results\",\"Thank You\",\"OVR 2013 Fall Regional\",\"Page 14\" );" );
d.write("var linkMap = new Array(\"index.html\",\"page6.html\",\"page7.html\",\"page8.html\",\"page10.html\",\"page11.html\",\"page12.html\",\"page13.html\",\"page14.html\",\"page15.html\",\"page16.html\",\"thankyou.html\",\"ovrfall.html\",\"page17.html\" );" );
d.write("var preMap = new Array(\"Ohio Valley Region History From humble beginnings to fraternal dominance  the Ohio Valley Region continues to be a shining example      View More >> Visit the National Website of Iota Phi Theta®  OVR \",\"Vestibulum semper enim Aliquam dapibus ipsum vitae sem  Ut eget mauris ac nunc luctus ornare  Phasellus enim augue  rutrum tempus  blandit in  vehicula eu  neque  Sed consequat nunc  Proin metus  Duis\",\"Vestibulum semper enim Nulla quis nibh  Proin ac pede vel ligula facilisis gravida  Phasellus purus  Etiam sapien  Duis diam urna  iaculis ut  vehicula ac  varius sit amet  mi  Donec id nisl  Aliquam \",\"Vestibulum semper enim Mauris purus  Donec est nunc  ornare non  aliquet non  tempus vel  dolor  Integer sapien nibh  egestas ut  cursus sit amet  faucibus a  sapien  Vestibulum purus purus  elementum\",\"From humble beginnings to fraternal dominance  the Ohio Valley Region continues to be a shining example of the growth  relevance and sustainability in Iota Phi Theta Fraternity Inc   The OVR was born \",\"Place of Event   Contact Name of Chapter Region Contact Info of Heart Dates of Project  Hours of Project  IMPACT Model Number of Hearts Venue Name Telephone Contact Person Ohio Valley Region  Heart Co\",\"As the Ohio Valley Regional Polaris  I want to personally thank you for visiting the website of the Ohio Valley Region of Iota Phi Theta Fraternity  Inc  Our website is your visible link to the latest\",\"OVR Photo Roll \",\"Iota Sweethearts - Ohio Valley Style Iota Phi Theta Sweethearts are a recognized  respected and honored tradition of the Fraternity and have a long history of affiliation with Iota  This history harke\",\"Contact the Ohio Valley Region Have a question or comment for the Region?  Enter your information below and a regional representative will get back with you   Comments E-mail Address Name E-Mail  Ohio\",\"Ohio Valley Search Results  ® \",\"THANK YOU Ohio Valley Region  Community Service Form \",\"  STILL BUILDING AND NEVER RESTING   2013 Fall OVR Regional Meeting   Beginning Thursday Oct  31  2013 Columbus  Ohio   Regional Hotel Info   Doubletree Suites  by Hilton Columbus Downtown  **Official\",\"Super Regionals  Menu Items   Teriyaki Grilled Chicken W  mashed potatoes and stemmed vegetables  -Or-  Grilled Tilapia in lemon butter sauce with mashed potatoes and stemmed vegetables   Price $32 00\" );" );
d.write("function doNav(ind)" );
d.write("{" );
if (newWindow)
d.write("		 window.open(\""+sBack+"\"+linkMap[ind],\"_blank\" );" );
else
d.write("		 parent.window.location.href=linkMap[ind];" );
d.write("}" );
d.write("function wpDoSearch(searchTerms){" );
d.write("var terms = searchTerms.split(\" \" );" );
d.write("if (terms==\"\") return;" );
d.write("var results = \"\";" );
d.write("var resultscount = 0;" );
d.write("for (var i=0; i<wordMap.length; i++)" );
d.write("{" );
d.write("			var found=true;" );
d.write("			for (var j=0; j<terms.length; j++)" );
d.write("					if (wordMap[i].indexOf(terms[j].toLowerCase())==-1) found=false;" );
d.write("			if (found)" );
d.write("			{" );
d.write("				 results+=\"<a style=\\\"cursor: pointer; font-family: "+linkFace+"; font-size: "+linkSize+"; color: "+linkColour+"; \\\" onclick=\\\"doNav(\"+i+\" );\\\"><u>\"+pageMap[i]+\"</u></a><br>\"+preMap[i]+\"...<br><br>\";" );
d.write("				 resultscount++;" );
d.write("			}" );
d.write("}" );
d.write("document.getElementById(\"wpSearchResults\").innerHTML=resultscount+\" "+resultsText+" \"+searchTerms+\"<br><br>\"+results;" );
d.write("}" );
while(sTerms.indexOf("\"") != -1 ) {
sTerms = sTerms.replace("\"","" );
};
d.write("wpDoSearch(\""+sTerms+"\" );" );
d.write("</script>" );
d.write("</body></html>" );
d.close();
}