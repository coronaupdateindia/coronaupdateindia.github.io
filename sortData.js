
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


function getNewCasesData()
{
	//alert(rawData);
	newCasesData=[];
	for (i=0;i<rawData.length;i++)
	{
		
		if (i<9){currentData=[rawData[i][0],[0,0,0,0]];}
		else
		{
		 currentData=[rawData[i][0],[rawData[i][1][0]-rawData[i-2][1][0],rawData[i][1][1]-rawData[i-2][1][1],rawData[i][1][2]-rawData[i-2][1][2],rawData[i][1][3]-rawData[i-2][1][3]]];}
		newCasesData.push(currentData);
	}
	//alert(newCasesData);
	return newCasesData;
	

}


function getNewPerDayCasesData()
{

	oldDate       =rawData[0][0];
	oldconfirmedNo=rawData[0][1][0];
	oldforeignNo  =rawData[0][1][1];
	oldCuredNo    =rawData[0][1][2];
	oldDeadNo     =rawData[0][1][3];

	newDate       =rawData[0][0];
	newconfirmedNo=rawData[0][1][0];
	newforeignNo  =rawData[0][1][1];
	newCuredNo    =rawData[0][1][2];
	newDeadNo     =rawData[0][1][3];

	//alert(rawData);
	newCasesData=[];
	for (i=1;i<rawData.length;i++)
	{

		newDate=rawData[i][0];

		if (oldDate.getDate()!=newDate.getDate())

		{
			oldconfirmedNo=newconfirmedNo;
			oldforeignNo  =newforeignNo;
			oldCuredNo    =newCuredNo;
			oldDeadNo     =newDeadNo;


			currentDataList=[];
			if (i<10){currentDataList=[new Date(oldDate.getYear(),oldDate.getMonth(),oldDate.getDate()),[0,0,0,0]];}
			else
			{
				currentDataList=[new Date(oldDate.getYear(),oldDate.getMonth(),oldDate.getDate()), [currconfirmedNo,currforeignNo,currCuredNo,currDeadNo]];	
			}
			newCasesData.push(currentDataList);

		}
//		else
//		{
			newconfirmedNo=rawData[i][1][0];
			newforeignNo  =rawData[i][1][1];
			newCuredNo    =rawData[i][1][2];
			newDeadNo     =rawData[i][1][3];
			
			currconfirmedNo=newconfirmedNo-oldconfirmedNo;
			currforeignNo  =newforeignNo-oldforeignNo;
			currCuredNo    =newCuredNo-oldCuredNo;
			currDeadNo     =newDeadNo-oldDeadNo;

//		}


		oldDate=newDate;
	}

	if (oldDate.getHours()>12)
	{
	currentDataList=[];
	currentDataList=[new Date(oldDate.getYear(),oldDate.getMonth(),oldDate.getDate()), [currconfirmedNo,currforeignNo,currCuredNo,currDeadNo]];	
	newCasesData.push(currentDataList);
	}
	return newCasesData;
	

}


