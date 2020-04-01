function graphDraw(canvasIdStr,typeId){

	typeStrArray=['Confirmed',' ','Cured/Discharged/Migrated','Dead','Active'];
	var canvas = document.getElementById(canvasIdStr);
	var ctx = canvas.getContext("2d");
	var marginX=50;
	var marginY=55;
	var maxWidth=canvas.width-marginX;
	var maxHeight=canvas.height-marginY;

	firstVal=typeId;
	secondVal=typeId;
	divFactor=2;


	if (typeId==-1) {
		firstVal=0;
		secondVal=1;
		divFactor=1;
		typeStr=typeStrArray[0];
	}
	else
	{		typeStr=typeStrArray[typeId];}
	
	startpointx= rawData[0][0].valueOf(); 
	startpointy= (rawData[0][1][firstVal]+rawData[0][1][secondVal])/divFactor;

	maxscaleSize = rawData[rawData.length-1][0]                                    - rawData[0][0];

	maxscaleSizeY=((rawData[rawData.length-1][1][firstVal]+rawData[rawData.length-1][1][secondVal])/divFactor)
	//-((rawData[0][1][firstVal]+rawData[0][1][secondVal])/divFactor);

	if (typeId==-2){
	typeStr=typeStrArray[4];
	maxscaleSizeY=(rawData[rawData.length-1][1][0]+rawData[rawData.length-1][1][1]-rawData[rawData.length-1][1][2]-rawData[rawData.length-1][1][3]);
	}

	oldDataY=0;
	oldPointX=0;
	oldPointY=maxHeight;

	oldPrnPointX=oldPointX;
	oldPrnPointY=oldPointY;

	//document.getElementById("demo").innerHTML = maxscaleSize;

	ctx.moveTo(0      , maxHeight);
	ctx.lineTo(maxWidth, maxHeight);
	ctx.stroke(); 

	ctx.moveTo(0 , maxHeight);
	ctx.lineTo(0 , 0);
	ctx.stroke(); 

	ctx.font = "15px Arial";
	ctx.fillText(typeStr,((maxWidth/2)-(typeStr.length)/2),20);
	ctx.stroke();	


	for (let idx=0; idx<rawData.length;idx++){

		currDataX = rawData[idx][0].valueOf();
		currDataY = ((rawData[idx][1][firstVal]+rawData[idx][1][secondVal])/divFactor);

		if (typeId==-2){
		currDataY = (rawData[idx][1][0]+rawData[idx][1][1]-rawData[idx][1][2]-rawData[idx][1][3]);
		}

//		if (typeId>=-1 && oldDataY>currDataY)
//		{currDataY=oldDataY;}
		
			
		newPointX=maxWidth*(currDataX-startpointx)/(maxscaleSize);
		//newPointY=maxHeight-maxHeight*(currDataY-startpointy)/(maxscaleSizeY*1.1);
		newPointY=maxHeight-(currDataY*(maxHeight-20)/(maxscaleSizeY));

		ctx.moveTo(oldPointX, oldPointY);
		ctx.lineTo(newPointX, newPointY);

		ctx.stroke(); 

		ctx.beginPath();
		ctx.arc(newPointX, newPointY, 5, 0, 2 * Math.PI);
		ctx.stroke();

		ctx.moveTo(newPointX, maxHeight);
		ctx.lineTo(newPointX, maxHeight+10);
		ctx.stroke(); 

		if (newPointX-oldPrnPointX>25 || oldPrnPointX==0 || idx==rawData.length-1)
		{
			ctx.font = "10px Arial";

			rtext=currDataY;
			directionFactor=0.25;
			if((maxHeight-newPointY)/(maxHeight)<.20){directionFactor=-0.40;}
			drawText(ctx,rtext,10,newPointX,newPointY,0,7,directionFactor);
			
			//ctx.fillText(currDataY,newPointX,newPointY+15);
			//ctx.stroke();	


//////////////////////////

rtext=(rawData[idx][0].getMonth()+1)+"/"+rawData[idx][0].getDate()+" "+rawData[idx][0].getHours()+":"+rawData[idx][0].getMinutes();
drawText(ctx,rtext,10,newPointX,maxHeight+marginY,-3,4,-.5);
//ctx.save();
//ctx.translate(newPointX,maxHeight+marginY);
//ctx.rotate(-0.50*Math.PI);
//ctx.font = "10px Arial";

//var rText = 'Rotated Text';
//ctx.fillText(rawData[idx][0].getMonth()+"/"+rawData[idx][0].getDate()+" "+rawData[idx][0].getHours()+":"+rawData[idx][0].getMinutes() , 4, -2);
ctx.restore();

//////////////////////////
//			ctx.font = "10px Arial";
//			ctx.fillText(rawData[idx][0].getMonth()+"/"+rawData[idx][0].getDate(),newPointX,maxHeight+50-10);
//			ctx.fillText(rawData[idx][0].getHours()+":"+rawData[idx][0].getMinutes(),newPointX,maxHeight+50-0);

			oldPrnPointX=newPointX;
			oldPrnPointY=newPointY;
	
		}


		oldDataY =currDataY;

		oldPointX=newPointX;
		oldPointY=newPointY;

	}
}

function drawText(ctx,text,fontSize,pointX,pointY,adjustmentX,adjustmentY,rotation)
{
	ctx.save();
	ctx.translate(pointX,pointY);
	ctx.rotate(rotation*Math.PI);
	ctx.font = fontSize+"px Arial";

	//var rText = 'Rotated Text';
	ctx.fillText(text , adjustmentY, adjustmentX);
	ctx.restore();

}
