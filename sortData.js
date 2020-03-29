
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

	for (i=0;i<sortedStateList.length;i++){
		element = document.getElementById("ST"+i);
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

		element.innerHTML=spacer+(i+1)+"."+" ("+spacer1+text1+","+spacer2+text2+","+spacer3+text3+")  "+sortedStateList[i];
		element.href=sortedStateList[i]+".html";

	}
}
