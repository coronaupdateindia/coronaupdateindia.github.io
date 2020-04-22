
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

	oldRawData=rawData;

	element = document.getElementById("stateTable");
	innerHTMLStr=""
	//innerHTMLStr="<TR><TD><TABLE>";
	headerRowStr=             "<TR style='background-color: #aaaaaa'><TH WIDTH=2%>     </TH><TH>     </TH><TH>         </TH><TH>         </TH><TH>    </TH><TH COLSPAN=4 nowrap  WIDTH=2% style='text-align: center'>New cases since last</TH></TR>"
	headerRowStr=headerRowStr+"<TR style='background-color: #aaaaaa'><TH WIDTH=2%>     </TH><TH>     </TH><TH>         </TH><TH>         </TH><TH>    </TH><TH style='text-align: right'>2-Updates</TH><TH style='text-align: right'>1-Update</TH><TH style='text-align: right'>2-Updates</TH><TH style='text-align: right'>2-Updates</TH></TR>"
	headerRowStr=headerRowStr+"<TR style='background-color: #aaaaaa'><TH WIDTH=2%>ORDER</TH><TH>State</TH><TH>Confirmed</TH><TH>Cured Etc</TH><TH>Dead</TH><TH COLSPAN=2  style='text-align: center'>Confirmed</TH><TH style='text-align: center'>Cured Etc</TH><TH style='text-align: center'>Dead</TH></TR>";
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

		//element.innerHTML=spacer+(i+1)+"."+" ("+spacer1+text1+","+spacer2+text2+","+spacer3+text3+")  "+sortedStateList[i];
		innerHTMLStr=innerHTMLStr+"<TR class='statetr' onclick=\"document.location='"+sortedStateList[i]+".html'\">";
		innerHTMLStr=innerHTMLStr+"<TD>"+(i+1)+".</TD>";
		innerHTMLStr=innerHTMLStr+"<TD>"+sortedStateList[i]+"</TD>";
		innerHTMLStr=innerHTMLStr+"<TD>"+text1+"</TD>";
		innerHTMLStr=innerHTMLStr+"<TD>"+text2+"</TD>";
		innerHTMLStr=innerHTMLStr+"<TD>"+text3+"</TD>";
		innerHTMLStr=innerHTMLStr+getNewCasesForState(sortedStateList[i],text1);	
		innerHTMLStr=innerHTMLStr+"</TR>";
		innerHTMLStr=innerHTMLStr+"</A>";		

	}

	//innerHTMLStr=innerHTMLStr+"</TABLE></TD></TR>";
	element.innerHTML=innerHTMLStr;

	rawData=oldRawData;
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
	return getPerDayCasesData(true);
}

function getCummulativePerDayCasesData()
{
	return getPerDayCasesData(false);
}

function getPerDayCasesData(onlyNew)
{

	maxNumber =0;

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

	currconfirmedNo=0;
	currforeignNo  =0;
	currCuredNo    =0;
	currDeadNo     =0;

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

			if(maxNumber<currconfirmedNo+currforeignNo){maxNumber=currconfirmedNo+currforeignNo;}
			if(maxNumber<currCuredNo){maxNumber=currCuredNo;}
			if(maxNumber<currDeadNo){maxNumber=currDeadNo;}

			if (onlyNew)
			{
				currconfirmedNo=newconfirmedNo-oldconfirmedNo;
				currforeignNo  =newforeignNo-oldforeignNo;
				currCuredNo    =newCuredNo-oldCuredNo;
				currDeadNo     =newDeadNo-oldDeadNo;
			}
			else
			{
				currconfirmedNo=newconfirmedNo;
				currforeignNo  =newforeignNo;
				currCuredNo    =newCuredNo;
				currDeadNo     =newDeadNo;
			}
			
//		}


		oldDate=newDate;
	}

	if (oldDate.getHours()>12)
	{
		if(maxNumber<currconfirmedNo+currforeignNo){maxNumber=currconfirmedNo+currforeignNo;}
		if(maxNumber<currforeignNo){maxNumber=currforeignNo;}
		if(maxNumber<currCuredNo){maxNumber=currCuredNo;}
		if(maxNumber<currDeadNo){maxNumber=currDeadNo;}

		currentDataList=[];
		currentDataList=[new Date(oldDate.getYear(),oldDate.getMonth(),oldDate.getDate()), [currconfirmedNo,currforeignNo,currCuredNo,currDeadNo]];	
		newCasesData.push(currentDataList);
	}
	return [maxNumber,newCasesData];
	

}


function getNewCasesForState(stateName,currValue)
{

	prev1Value=0;
	prev2Value=0;
	
	currList  =   stateDict[stateName];
	prev1List = prev1StDict[stateName];
	prev2List = prev2StDict[stateName];


	if(prev1List){prev1Value=prev1List[0]+prev1List[1];}
	if(prev2List){prev2Value=prev2List[0]+prev2List[1];}
	confirmedNew=             "<td style='text-align: right'>( +"+(currValue-prev2Value)+" )</td>";
	confirmedNew=confirmedNew+"<td style='text-align: right'>[ +"+(currValue-prev1Value)+" ]</td>";

	currValue =0;
	prev1Value=0;
	prev2Value=0;

	if(currList){currValue  = currList[2];}
	if(prev1List){prev1Value=prev1List[2];}
	if(prev2List){prev2Value=prev2List[2];}
	curedNew=         "<td style='text-align: right'>( +"+(currValue-prev2Value)+" )</td>";
//	curedNew=curedNew+"<td style='text-align: right'>[ +"+(currValue-prev1Value)+" ]</td>";

	currValue =0;
	prev1Value=0;
	prev2Value=0;

	if(currList){currValue  = currList[3];}
	if(prev1List){prev1Value=prev1List[3];}
	if(prev2List){prev2Value=prev2List[3];}
	deadNew=        "<td style='text-align: right'>( +"+(currValue-prev2Value)+" )</td>";
//	deadNew=deadNew+"<td style='text-align: right'>[ +"+(currValue-prev1Value)+" ]</td>";

	return  confirmedNew+curedNew+deadNew;
}

function getDoublingData()
{
	doublingDataList=[];
	cummulativeDataList=getCummulativePerDayCasesData()[1];

	for (i=8;i<cummulativeDataList.length;i++)
	{
		pastDays=3;
		confirmedRate=pastDays/((cummulativeDataList[i][1][0]+cummulativeDataList[i][1][1]-cummulativeDataList[i-pastDays][1][0]-cummulativeDataList[i-pastDays][1][1])/(cummulativeDataList[i-pastDays][1][0]+cummulativeDataList[i-pastDays][1][1]));
		foreignRate  =0;
		curedRate    =pastDays/((cummulativeDataList[i][1][2]-cummulativeDataList[i-pastDays][1][2])/cummulativeDataList[i-pastDays][1][2]);
		DeadRate     =1/((cummulativeDataList[i][1][3]-cummulativeDataList[i-pastDays][1][3])/cummulativeDataList[i-pastDays][1][3]);;

		doublingDataList.push([cummulativeDataList[i][0],[parseFloat(confirmedRate.toFixed(2)),parseFloat(foreignRate.toFixed(2)),parseFloat(curedRate.toFixed(2)),parseFloat(DeadRate.toFixed(2))]]);		
		
	}
	return doublingDataList;


}

function getGrowthRateData()
{
	doublingDataList=[];
	cummulativeDataList=getCummulativePerDayCasesData()[1];

	for (i=8;i<cummulativeDataList.length;i++)
	{
		pastDays=3;
		confirmedRate=100*((cummulativeDataList[i][1][0]+cummulativeDataList[i][1][1]-cummulativeDataList[i-pastDays][1][0]-cummulativeDataList[i-pastDays][1][1])/(cummulativeDataList[i-pastDays][1][0]+cummulativeDataList[i-pastDays][1][1]))/pastDays;
		foreignRate  =0;
		curedRate    =100*((cummulativeDataList[i][1][2]-cummulativeDataList[i-1][1][2])/cummulativeDataList[i-1][1][2])/pastDays;
		DeadRate     =100*((cummulativeDataList[i][1][3]-cummulativeDataList[i-1][1][3])/cummulativeDataList[i-1][1][3])/pastDays;

		doublingDataList.push([cummulativeDataList[i][0],[parseFloat(confirmedRate.toFixed(2)),parseFloat(foreignRate.toFixed(2)),parseFloat(curedRate.toFixed(2)),parseFloat(DeadRate.toFixed(2))]]);		
		
	}
	return doublingDataList;


}

function getDoubledSinceLastXDaysData()
{
	doublingDataList=[];
	cummulativeDataList=getCummulativePerDayCasesData()[1];

	for (i=10;i<cummulativeDataList.length;i++)
	{
		confirmedCtr=0;
		if (i>9)
		{		

			if ((cummulativeDataList[i][1][0]+cummulativeDataList[i][1][1])/2>(cummulativeDataList[6][1][0]+cummulativeDataList[6][1][1]))
			{
				for(j=i-1;j>0;j--)
				{
					if ((cummulativeDataList[i][1][0]+cummulativeDataList[i][1][1])/2<=(cummulativeDataList[j][1][0]+cummulativeDataList[j][1][1]))
					confirmedCtr++;
				}
			}
			
		}
		doublingDataList.push([cummulativeDataList[i][0],[confirmedCtr,0,0,0]]);		
		
	}
	return doublingDataList;

}



function loadJS(file) {
    // DOM: Create the script element
    var jsElm = document.createElement("script");
    // set the type attribute
    jsElm.type = "application/javascript";
    // make the script element load file
    jsElm.src = file;
    // finally insert the element to the body element in order to load the script
    document.body.appendChild(jsElm);
}
