var rawData=[[new Date(2020,02,15,12,0),[ 2, 0,0,0]],[new Date(2020,02,15,17,0),[ 2, 0,0,0]],[new Date(2020,02,15,23,30),[ 2, 0,0,0]],[new Date(2020,02,16,16,0),[ 3, 0,0,0]],[new Date(2020,02,17,9,15),[ 3, 0,0,0]],[new Date(2020,02,17,17,15),[ 3, 0,0,0]],[new Date(2020,02,24,20,15),[4, 0, 0, 0]],[new Date(2020,02,25,9,15),[7, 0, 1, 0]],[new Date(2020,02,25,18,45),[7, 0, 1, 0]],[new Date(2020,02,26,10,15),[11, 0, 1, 0]],[new Date(2020,02,26,20,00),[13, 0, 1, 1]],[new Date(2020,02,27,9,15),[13, 0, 1, 1]],[new Date(2020,02,28,9,30),[18, 0, 1, 1]],[new Date(2020,02,28,17,45),[20, 0, 1, 1]],[new Date(2020,02,29,10,00),[31, 0, 1, 1]],[new Date(2020,02,29,19,30),[31, 0, 1, 2]],[new Date(2020,02,30,10,30),[31, 0, 1, 2]],[new Date(2020,02,30,21,30),[48, 0, 2, 2]],[new Date(2020,02,31,20,30),[54, 0, 2, 2]],[new Date('01 April 2020, 09:00 GMT+5:30'),[55, 0, 2, 2]],[new Date('01 April 2020, 19:30 GMT+5:30'),[62, 0, 2, 2]],[new Date('02 April 2020, 09:00 GMT+5:30'),[62, 0, 2, 2]],[new Date('02 April 2020, 18:00 GMT+5:30'),[62, 0, 2, 2]],[new Date('03 April 2020, 09:00 GMT+5:30'),[70, 0, 3, 2]],[new Date('03 April 2020, 18:00 GMT+5:30'),[75, 0, 3, 2]],[new Date('04 April 2020, 09:00 GMT+5:30'),[75, 0, 3, 2]],[new Date('04 April 2020, 18:00 GMT+5:30'),[75, 0, 3, 2]],[new Date('05 April 2020, 09:00 GMT+5:30'),[92, 0, 4, 2]],[new Date('05 April 2020, 18:00 GMT+5:30'),[106, 0, 4, 2]],[new Date('06 April 2020, 09:00 GMT+5:30'),[106, 0, 4, 2]],[new Date('06 April 2020, 18:00 GMT+5:30'),[109, 0, 4, 2]],[new Date('07 April 2020, 09:00 GMT+5:30'),[109, 0, 4, 2]],[new Date('07 April 2020, 18:00 GMT+5:30'),[116, 0, 4, 2]],[new Date('08 April 2020, 08:00 GMT+5:30'),[116, 0, 4, 2]],[new Date('08 April 2020, 17:00 GMT+5:30'),[116, 0, 4, 2]],[new Date('09 April 2020, 08:00 GMT+5:30'),[158, 0, 4, 4]],[new Date('09 April 2020, 17:00 GMT+5:30'),[158, 0, 4, 4]],[new Date('10 April 2020, 08:00 GMT+5:30'),[158, 0, 4, 4]],[new Date('10 April 2020, 17:00 GMT+5:30'),[184, 0, 6, 4]],[new Date('11 April 2020, 08:00 GMT+5:30'),[207, 0, 6, 4]],[new Date('11 April 2020, 17:00 GMT+5:30'),[207, 0, 6, 4]],[new Date('12 April 2020, 08:00 GMT+5:30'),[207, 0, 6, 4]],[new Date('12 April 2020, 17:00 GMT+5:30'),[224, 0, 6, 4]],[new Date('13 April 2020, 08:00 GMT+5:30'),[245, 0, 6, 4]],[new Date('13 April 2020, 17:00 GMT+5:30'),[245, 0, 6, 4]],[new Date('14 April 2020, 08:00 GMT+5:30'),[270, 0, 16, 4]],[new Date('14 April 2020, 17:00 GMT+5:30'),[270, 0, 16, 4]],[new Date('15 April 2020, 08:00 GMT+5:30'),[278, 0, 30, 4]],[new Date('15 April 2020, 17:00 GMT+5:30'),[278, 0, 30, 4]],[new Date('16 April 2020, 08:00 GMT+5:30'),[300, 0, 36, 4]],[new Date('16 April 2020, 17:00 GMT+5:30'),[300, 0, 36, 4]],[new Date('17 April 2020, 08:00 GMT+5:30'),[314, 0, 38, 4]],[new Date('17 April 2020, 17:00 GMT+5:30'),[314, 0, 38, 4]],[new Date('18 April 2020, 08:00 GMT+5:30'),[328, 0, 42, 5]],[new Date('18 April 2020, 17:00 GMT+5:30'),[328, 0, 42, 5]],[new Date('19 April 2020, 08:00 GMT+5:30'),[341, 0, 51, 5]],[new Date('19 April 2020, 17:00 GMT+5:30'),[341, 0, 51, 5]],[new Date('20 April 2020, 08:00 GMT+5:30'),[350, 0, 56, 5]],[new Date('20 April 2020, 17:00 GMT+5:30'),[350, 0, 56, 5]],[new Date('21 April 2020, 08:00 GMT+5:30'),[368, 0, 71, 5]],[new Date('21 April 2020, 17:00 GMT+5:30'),[368, 0, 71, 5]],[new Date('22 April 2020, 08:00 GMT+5:30'),[380, 0, 81, 5]],[new Date('22 April 2020, 17:00 GMT+5:30'),[380, 0, 81, 5]],[new Date('23 April 2020, 08:00 GMT+5:30'),[407, 0, 92, 5]],[new Date('23 April 2020, 17:00 GMT+5:30'),[407, 0, 92, 5]],[new Date('24 April 2020, 08:00 GMT+5:30'),[427, 0, 92, 5]],[new Date('24 April 2020, 17:00 GMT+5:30'),[427, 0, 92, 5]],[new Date('25 April 2020, 08:00 GMT+5:30'),[454, 0, 109, 5]],[new Date('25 April 2020, 17:00 GMT+5:30'),[454, 0, 109, 5]],[new Date('26 April 2020, 08:00 GMT+5:30'),[494, 0, 112, 6]],[new Date('26 April 2020, 17:00 GMT+5:30'),[494, 0, 112, 6]],[new Date('27 April 2020, 08:00 GMT+5:30'),[523, 0, 137, 6]],[new Date('27 April 2020, 17:00 GMT+5:30'),[523, 0, 137, 6]],[new Date('28 April 2020, 08:00 GMT+5:30'),[546, 0, 164, 7]],[new Date('28 April 2020, 17:00 GMT+5:30'),[546, 0, 164, 7]],[new Date('29 April 2020, 08:00 GMT+5:30'),[565, 0, 176, 8]],[new Date('29 April 2020, 17:00 GMT+5:30'),[565, 0, 176, 8]],[new Date('30 April 2020, 08:00 GMT+5:30'),[581, 0, 192, 8]],[new Date('30 April 2020, 17:00 GMT+5:30'),[581, 0, 192, 8]],[new Date('01 May 2020, 08:00 GMT+5:30'),[614, 0, 216, 8]],[new Date('01 May 2020, 17:00 GMT+5:30'),[614, 0, 216, 8]],[new Date('02 May 2020, 08:00 GMT+5:30'),[639, 0, 247, 8]],[new Date('02 May 2020, 17:00 GMT+5:30'),[639, 0, 247, 8]],[new Date('03 May 2020, 08:00 GMT+5:30'),[666, 0, 254, 8]],[new Date('03 May 2020, 17:00 GMT+5:30'),[666, 0, 254, 8]],[new Date('04 May 2020, 08:00 GMT+5:30'),[701, 0, 287, 8]],[new Date('04 May 2020, 17:00  GMT+5:30'),[701, 0, 287, 8]],[new Date('05 May 2020, 08:00  GMT+5:30'),[726, 0, 303, 8]],[new Date('05 May 2020, 17:00  GMT+5:30'),[726, 0, 303, 8]],[new Date('06 May 2020, 08:00  GMT+5:30'),[741, 0, 320, 8]]];