
function getSortedData(unsortedData,baseStateList){


	sortedList=[];

	found=true;
	while (found){
		found=false;
		MaxVal=0;
		MaxValState="";
		for (var key in unsortedData)
		{
			currentConfirmed=unsortedData[key][0]+unsortedData[key][1];
		
			if (currentConfirmed>MaxVal && !sortedList.includes(key)){
				MaxValState=key;
				MaxVal=currentConfirmed;
				found=true;
			}
		}

		if (found){
		sortedList.push(MaxValState);}
		
	}


		for (i=0;i< baseStateList.length;i++)
		{
			if (!sortedList.includes(baseStateList[i])){
				sortedList.push(baseStateList[i]);
			}
		}


	return sortedList;
}

function displayStateSummary(unsortedData,sortedStateList){

	element = document.getElementById("stateTable");
	innerHTMLStr=""
	//innerHTMLStr="<TR><TD><TABLE>";
	headerRowStr="<TR style='background-color: #aaaaaa'><TH>ORDER</TH><TH>STATE</TH><TH>CONFIRMED</TH><TH>Cured Etc</TH><TH>DEAD</TH></TR>";
	innerHTMLStr=innerHTMLStr+headerRowStr;
	for (i=0;i<sortedStateList.length;i++){

		spacer="";
		if ((i+1).toString().length==1){spacer=" ";}

		text1=0;	
		text2=0;	
		text3=0;
		
		if (unsortedData[sortedStateList[i]]){
			text1=unsortedData[sortedStateList[i]][0]+unsortedData[sortedStateList[i]][1];
			text2=unsortedData[sortedStateList[i]][2];
			text3=unsortedData[sortedStateList[i]][3];
		}

		spacer1="";		
		if (text1.toString().length==1){spacer1="  ";}
		if (text1.toString().length==2){spacer1=" ";}



		spacer2="";
		if (text2.toString().length==1){spacer2="  ";}
		if (text2.toString().length==2){spacer2=" ";}

		spacer3="";
		if (text3.toString().length==1){spacer3="  ";}
		if (text3.toString().length==2){spacer3=" ";}

		/*if (i==parseInt(sortedStateList.length/2))
		{
			innerHTMLStr=innerHTMLStr+"</TABLE></TD><TD><TABLE>"+headerRowStr;
		}*/


		//element.innerHTML=spacer+(i+1)+"."+" ("+spacer1+text1+","+spacer2+text2+","+spacer3+text3+")  "+sortedStateList[i];
		innerHTMLStr=innerHTMLStr+"<TR class='statetr' onclick=\"document.location='"+sortedStateList[i]+".html'\">";
		innerHTMLStr=innerHTMLStr+"<TD>"+(i+1)+".</TD>";
		innerHTMLStr=innerHTMLStr+"<TD>"+sortedStateList[i]+"</TD>";
		innerHTMLStr=innerHTMLStr+"<TD>"+text1+"</TD>";
		innerHTMLStr=innerHTMLStr+"<TD>"+text2+"</TD>";
		innerHTMLStr=innerHTMLStr+"<TD>"+text3+"</TD>";
		innerHTMLStr=innerHTMLStr+"</TR>";
		innerHTMLStr=innerHTMLStr+"</A>";		

	}

	//innerHTMLStr=innerHTMLStr+"</TABLE></TD></TR>";
	element.innerHTML=innerHTMLStr;
}
