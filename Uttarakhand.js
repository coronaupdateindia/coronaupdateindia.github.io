var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 1, 0,0,0]],[new Date(2020,02,16,16,0),[ 1, 0,0,0]],[new Date(2020,02,17,9,15),[ 1, 0,0,0]],[new Date(2020,02,17,17,15),[ 1, 0,0,0]],[new Date(2020,02,24,20,15),[3, 1, 0, 0]],[new Date(2020,02,25,9,15),[3, 1, 0, 0]],[new Date(2020,02,25,18,45),[3, 1, 0, 0]],[new Date(2020,02,26,10,15),[4, 1, 0, 0]],[new Date(2020,02,26,20,00),[4, 1, 0, 0]],[new Date(2020,02,27,9,15),[4, 1, 0, 0]],[new Date(2020,02,28,9,30),[4, 1, 0, 0]],[new Date(2020,02,28,17,45),[4, 1, 0, 0]],[new Date(2020,02,29,10,00),[5, 1, 1, 0]],[new Date(2020,02,29,19,30),[7, 0, 2, 0]],[new Date(2020,02,30,10,30),[7, 0, 2, 0]],[new Date(2020,02,30,21,30),[7, 0, 2, 0]],[new Date(2020,02,31,20,30),[7, 0, 2, 0]],[new Date('01 April 2020, 09:00 GMT+5:30'),[7, 0, 2, 0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[7, 0, 2, 0]],[new Date('02 April 2020, 09:00 GMT+5:30'),[7, 0, 2, 0]],[new Date('02 April 2020, 18:00 GMT+5:30'),[7, 0, 2, 0]],[new Date('03 April 2020, 09:00 GMT+5:30'),[10, 0, 2, 0]],[new Date('03 April 2020, 18:00 GMT+5:30'),[10, 0, 2, 0]],[new Date('04 April 2020, 09:00 GMT+5:30'),[16, 0, 2, 0]],[new Date('04 April 2020, 18:00 GMT+5:30'),[16, 0, 2, 0]],[new Date('05 April 2020, 09:00 GMT+5:30'),[22, 0, 2, 0]],[new Date('05 April 2020, 18:00 GMT+5:30'),[22, 0, 2, 0]],[new Date('06 April 2020, 09:00 GMT+5:30'),[26, 0, 4, 0]],[new Date('06 April 2020, 18:00 GMT+5:30'),[26, 0, 4, 0]],[new Date('07 April 2020, 09:00 GMT+5:30'),[31, 0, 5, 0]],[new Date('07 April 2020, 18:00 GMT+5:30'),[31, 0, 5, 0]],[new Date('08 April 2020, 08:00 GMT+5:30'),[31, 0, 5, 0]],[new Date('08 April 2020, 17:00 GMT+5:30'),[31, 0, 5, 0]],[new Date('09 April 2020, 08:00 GMT+5:30'),[33, 0, 5, 0]],[new Date('09 April 2020, 17:00 GMT+5:30'),[35, 0, 5, 0]],[new Date('10 April 2020, 08:00 GMT+5:30'),[35, 0, 5, 0]],[new Date('10 April 2020, 17:00 GMT+5:30'),[35, 0, 5, 0]],[new Date('11 April 2020, 08:00 GMT+5:30'),[35, 0, 5, 0]],[new Date('11 April 2020, 17:00 GMT+5:30'),[35, 0, 5, 0]],[new Date('12 April 2020, 08:00 GMT+5:30'),[35, 0, 5, 0]],[new Date('12 April 2020, 17:00 GMT+5:30'),[35, 0, 5, 0]],[new Date('13 April 2020, 08:00 GMT+5:30'),[35, 0, 5, 0]],[new Date('13 April 2020, 17:00 GMT+5:30'),[35, 0, 5, 0]],[new Date('14 April 2020, 08:00 GMT+5:30'),[35, 0, 5, 0]],[new Date('14 April 2020, 17:00 GMT+5:30'),[35, 0, 7, 0]],[new Date('15 April 2020, 08:00 GMT+5:30'),[37, 0, 9, 0]],[new Date('15 April 2020, 17:00 GMT+5:30'),[37, 0, 9, 0]],[new Date('16 April 2020, 08:00 GMT+5:30'),[37, 0, 9, 0]],[new Date('16 April 2020, 17:00 GMT+5:30'),[37, 0, 9, 0]],[new Date('17 April 2020, 08:00 GMT+5:30'),[37, 0, 9, 0]],[new Date('17 April 2020, 17:00 GMT+5:30'),[37, 0, 9, 0]],[new Date('18 April 2020, 08:00 GMT+5:30'),[40, 0, 9, 0]],[new Date('18 April 2020, 17:00 GMT+5:30'),[42, 0, 9, 0]],[new Date('19 April 2020, 08:00 GMT+5:30'),[42, 0, 9, 0]],[new Date('19 April 2020, 17:00 GMT+5:30'),[42, 0, 9, 0]],[new Date('20 April 2020, 08:00 GMT+5:30'),[44, 0, 11, 0]],[new Date('20 April 2020, 17:00 GMT+5:30'),[44, 0, 11, 0]],[new Date('21 April 2020, 08:00 GMT+5:30'),[46, 0, 18, 0]],[new Date('21 April 2020, 17:00 GMT+5:30'),[46, 0, 18, 0]],[new Date('22 April 2020, 08:00 GMT+5:30'),[46, 0, 19, 0]],[new Date('22 April 2020, 17:00 GMT+5:30'),[46, 0, 19, 0]],[new Date('23 April 2020, 08:00 GMT+5:30'),[46, 0, 23, 0]],[new Date('23 April 2020, 17:00 GMT+5:30'),[46, 0, 23, 0]],[new Date('24 April 2020, 08:00 GMT+5:30'),[47, 0, 24, 0]],[new Date('24 April 2020, 17:00 GMT+5:30'),[47, 0, 24, 0]],[new Date('25 April 2020, 08:00 GMT+5:30'),[48, 0, 25, 0]],[new Date('25 April 2020, 17:00 GMT+5:30'),[48, 0, 25, 0]],[new Date('26 April 2020, 08:00 GMT+5:30'),[48, 0, 26, 0]],[new Date('26 April 2020, 17:00 GMT+5:30'),[50, 0, 26, 0]],[new Date('27 April 2020, 08:00 GMT+5:30'),[50, 0, 28, 0]],[new Date('27 April 2020, 17:00 GMT+5:30'),[51, 0, 33, 0]],[new Date('28 April 2020, 08:00 GMT+5:30'),[51, 0, 33, 0]],[new Date('28 April 2020, 17:00 GMT+5:30'),[51, 0, 33, 0]],[new Date('29 April 2020, 08:00 GMT+5:30'),[54, 0, 33, 0]],[new Date('29 April 2020, 17:00 GMT+5:30'),[54, 0, 34, 0]],[new Date('30 April 2020, 08:00 GMT+5:30'),[55, 0, 36, 0]],[new Date('30 April 2020, 17:00 GMT+5:30'),[55, 0, 36, 0]],[new Date('01 May 2020, 08:00 GMT+5:30'),[57, 0, 36, 0]],[new Date('01 May 2020, 17:00 GMT+5:30'),[57, 0, 36, 0]],[new Date('02 May 2020, 08:00 GMT+5:30'),[58, 0, 36, 0]],[new Date('02 May 2020, 17:00 GMT+5:30'),[58, 0, 37, 0]],[new Date('03 May 2020, 08:00 GMT+5:30'),[59, 0, 39, 0]],[new Date('03 May 2020, 17:00 GMT+5:30'),[59, 0, 39, 0]],[new Date('04 May 2020, 08:00 GMT+5:30'),[60, 0, 39, 0]],[new Date('04 May 2020, 17:00  GMT+5:30'),[60, 0, 39, 1]],[new Date('05 May 2020, 08:00  GMT+5:30'),[60, 0, 39, 1]],[new Date('05 May 2020, 17:00  GMT+5:30'),[60, 0, 39, 1]],[new Date('06 May 2020, 08:00  GMT+5:30'),[61, 0, 39, 1]],[new Date('07 May 2020, 08:00  GMT+5:30'),[61, 0, 39, 1]],[new Date('08 May 2020, 08:00  GMT+5:30'),[61, 0, 39, 1]],[new Date('09 May 2020, 08:00  GMT+5:30'),[63, 0, 46, 1]],[new Date('10 May 2020, 08:00  GMT+5:30'),[67, 0, 46, 1]],[new Date('11 May 2020, 08:00  GMT+5:30'),[68, 0, 46, 1]],[new Date('12 May 2020, 08:00  GMT+5:30'),[68, 0, 46, 1]],[new Date('13 May 2020, 08:00  GMT+5:30'),[69, 0, 46, 1]],[new Date('14 May 2020, 08:00  GMT+5:30'),[72, 0, 46, 1]]];