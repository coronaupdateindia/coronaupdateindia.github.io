var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date(2020,02,24,20,15),[3, 0, 0, 1]],[new Date(2020,02,25,9,15),[3, 0, 0, 1]],[new Date(2020,02,25,18,45),[3, 0, 0, 1]],[new Date(2020,02,26,10,15),[3, 0, 0, 1]],[new Date(2020,02,26,20,00),[3, 0, 0, 1]],[new Date(2020,02,27,9,15),[3, 0, 0, 1]],[new Date(2020,02,28,9,30),[3, 0, 0, 1]],[new Date(2020,02,28,17,45),[3, 0, 0, 1]],[new Date(2020,02,29,10,00),[3, 0, 0, 1]],[new Date(2020,02,29,19,30),[3, 0, 0, 1]],[new Date(2020,02,30,10,30),[3, 0, 0, 1]],[new Date(2020,02,30,21,30),[3, 0, 0, 1]],[new Date(2020,02,31,20,30),[3, 0, 0, 1]],[new Date('01 April 2020, 09:00 GMT+5:30'),[3, 0, 0, 1]],[new Date('01 April 2020, 19:30 GMT+5:30'),[3, 0, 0, 1]],[new Date('02 April 2020, 09:00 GMT+5:30'),[3, 0, 1, 1]],[new Date('02 April 2020, 18:00 GMT+5:30'),[3, 0, 1, 1]],[new Date('03 April 2020, 09:00 GMT+5:30'),[6, 0, 1, 1]],[new Date('03 April 2020, 18:00 GMT+5:30'),[6, 0, 1, 1]],[new Date('04 April 2020, 09:00 GMT+5:30'),[6, 0, 1, 1]],[new Date('04 April 2020, 18:00 GMT+5:30'),[6, 0, 1, 1]],[new Date('05 April 2020, 09:00 GMT+5:30'),[6, 0, 1, 1]],[new Date('05 April 2020, 18:00 GMT+5:30'),[6, 0, 1, 1]],[new Date('06 April 2020, 09:00 GMT+5:30'),[13, 0, 1, 1]],[new Date('06 April 2020, 18:00 GMT+5:30'),[13, 0, 2, 1]],[new Date('07 April 2020, 09:00 GMT+5:30'),[13, 0, 2, 1]],[new Date('07 April 2020, 18:00 GMT+5:30'),[13, 0, 2, 1]],[new Date('08 April 2020, 08:00 GMT+5:30'),[18, 0, 2, 1]],[new Date('08 April 2020, 17:00 GMT+5:30'),[18, 0, 2, 1]],[new Date('09 April 2020, 08:00 GMT+5:30'),[18, 0, 2, 1]],[new Date('09 April 2020, 17:00 GMT+5:30'),[18, 0, 2, 1]],[new Date('10 April 2020, 08:00 GMT+5:30'),[18, 0, 2, 1]],[new Date('10 April 2020, 17:00 GMT+5:30'),[28, 0, 6, 1]],[new Date('11 April 2020, 08:00 GMT+5:30'),[28, 0, 6, 1]],[new Date('11 April 2020, 17:00 GMT+5:30'),[28, 0, 6, 1]],[new Date('12 April 2020, 08:00 GMT+5:30'),[32, 0, 6, 1]],[new Date('12 April 2020, 17:00 GMT+5:30'),[32, 0, 6, 1]],[new Date('13 April 2020, 08:00 GMT+5:30'),[32, 0, 13, 1]],[new Date('13 April 2020, 17:00 GMT+5:30'),[32, 0, 13, 1]],[new Date('14 April 2020, 08:00 GMT+5:30'),[32, 0, 13, 1]],[new Date('14 April 2020, 17:00 GMT+5:30'),[32, 0, 13, 1]],[new Date('15 April 2020, 08:00 GMT+5:30'),[33, 0, 13, 1]],[new Date('15 April 2020, 17:00 GMT+5:30'),[33, 0, 13, 1]],[new Date('16 April 2020, 08:00 GMT+5:30'),[35, 0, 16, 1]],[new Date('16 April 2020, 17:00 GMT+5:30'),[35, 0, 16, 1]],[new Date('17 April 2020, 08:00 GMT+5:30'),[35, 0, 16, 1]],[new Date('17 April 2020, 17:00 GMT+5:30'),[35, 0, 16, 1]],[new Date('18 April 2020, 08:00 GMT+5:30'),[36, 0, 16, 1]],[new Date('18 April 2020, 17:00 GMT+5:30'),[38, 0, 16, 1]],[new Date('19 April 2020, 08:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('19 April 2020, 17:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('20 April 2020, 08:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('20 April 2020, 17:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('21 April 2020, 08:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('21 April 2020, 17:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('22 April 2020, 08:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('22 April 2020, 17:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('23 April 2020, 08:00 GMT+5:30'),[40, 0, 18, 1]],[new Date('23 April 2020, 17:00 GMT+5:30'),[40, 0, 18, 1]],[new Date('24 April 2020, 08:00 GMT+5:30'),[40, 0, 18, 1]],[new Date('24 April 2020, 17:00 GMT+5:30'),[40, 0, 18, 1]],[new Date('25 April 2020, 08:00 GMT+5:30'),[40, 0, 18, 1]],[new Date('25 April 2020, 17:00 GMT+5:30'),[40, 0, 18, 1]],[new Date('26 April 2020, 08:00 GMT+5:30'),[40, 0, 22, 1]],[new Date('26 April 2020, 17:00 GMT+5:30'),[40, 0, 22, 1]],[new Date('27 April 2020, 08:00 GMT+5:30'),[40, 0, 22, 1]],[new Date('27 April 2020, 17:00 GMT+5:30'),[40, 0, 22, 1]],[new Date('28 April 2020, 08:00 GMT+5:30'),[40, 0, 22, 1]],[new Date('28 April 2020, 17:00 GMT+5:30'),[40, 0, 22, 1]],[new Date('29 April 2020, 08:00 GMT+5:30'),[40, 0, 25, 1]],[new Date('29 April 2020, 17:00 GMT+5:30'),[40, 0, 25, 1]],[new Date('30 April 2020, 08:00 GMT+5:30'),[40, 0, 25, 1]],[new Date('30 April 2020, 17:00 GMT+5:30'),[40, 0, 25, 1]],[new Date('01 May 2020, 08:00 GMT+5:30'),[40, 0, 28, 1]],[new Date('01 May 2020, 17:00 GMT+5:30'),[40, 0, 28, 1]],[new Date('02 May 2020, 08:00 GMT+5:30'),[40, 0, 30, 1]],[new Date('02 May 2020, 17:00 GMT+5:30'),[40, 0, 30, 1]],[new Date('03 May 2020, 08:00 GMT+5:30'),[40, 0, 33, 1]],[new Date('03 May 2020, 17:00 GMT+5:30'),[40, 0, 33, 1]],[new Date('04 May 2020, 08:00 GMT+5:30'),[40, 0, 34, 1]],[new Date('04 May 2020, 17:00  GMT+5:30'),[40, 0, 34, 1]],[new Date('05 May 2020, 08:00  GMT+5:30'),[41, 0, 34, 1]],[new Date('05 May 2020, 17:00  GMT+5:30'),[41, 0, 38, 1]],[new Date('06 May 2020, 08:00  GMT+5:30'),[42, 0, 38, 2]],[new Date('07 May 2020, 08:00  GMT+5:30'),[45, 0, 38, 2]],[new Date('08 May 2020, 08:00  GMT+5:30'),[46, 0, 38, 2]],[new Date('09 May 2020, 08:00  GMT+5:30'),[50, 0, 38, 2]],[new Date('10 May 2020, 08:00  GMT+5:30'),[50, 0, 38, 2]],[new Date('11 May 2020, 08:00  GMT+5:30'),[55, 0, 39, 2]],[new Date('12 May 2020, 08:00  GMT+5:30'),[59, 0, 39, 2]],[new Date('13 May 2020, 08:00  GMT+5:30'),[65, 0, 39, 2]],[new Date('14 May 2020, 08:00  GMT+5:30'),[66, 0, 39, 2]],[new Date('15 May 2020, 08:00  GMT+5:30'),[74, 0, 39, 2]],[new Date('16 May 2020, 08:00  GMT+5:30'),[76, 0, 39, 3]],[new Date('17 May 2020, 08:00  GMT+5:30'),[78, 0, 43, 3]],[new Date('18 May 2020, 08:00  GMT+5:30'),[80, 0, 44, 3]],[new Date('19 May 2020, 08:00  GMT+5:30'),[90, 0, 44, 3]],[new Date('20 May 2020, 08:00  GMT+5:30'),[92, 0, 47, 3]],[new Date('21 May 2020, 08:00  GMT+5:30'),[110, 0, 54, 3]],[new Date('22 May 2020, 08:00  GMT+5:30'),[152, 0, 59, 3]],[new Date('23 May 2020, 08:00  GMT+5:30'),[168, 0, 59, 3]],[new Date('24 May 2020, 08:00  GMT+5:30'),[185, 0, 61, 3]],[new Date('25 May 2020, 08:00  GMT+5:30'),[203, 0, 63, 3]],[new Date('26 May 2020, 08:00  GMT+5:30'),[223, 0, 67, 5]],[new Date('27 May 2020, 08:00  GMT+5:30'),[247, 0, 67, 5]],[new Date('28 May 2020, 08:00  GMT+5:30'),[273, 0, 70, 5]],[new Date('29 May 2020, 08:00  GMT+5:30'),[276, 0, 70, 5]],[new Date('30 May 2020, 08:00  GMT+5:30'),[295, 0, 87, 5]],[new Date('31 May 2020, 08:00  GMT+5:30'),[313, 0, 111, 5]],[new Date('01 June 2020, 08:00  GMT+5:30'),[331, 0, 120, 5]],[new Date('02 June 2020, 08:00  GMT+5:30'),[340, 0, 122, 5]],[new Date('03 June 2020, 08:00  GMT+5:30'),[345, 0, 140, 5]]];