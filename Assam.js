var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[1, 0, 0, 0]],[new Date('02 April 2020, 09:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('02 April 2020, 18:00 GMT+5:30'),[5, 0, 0, 0]],[new Date('03 April 2020, 09:00 GMT+5:30'),[16, 0, 0, 0]],[new Date('03 April 2020, 18:00 GMT+5:30'),[16, 0, 0, 0]],[new Date('04 April 2020, 09:00 GMT+5:30'),[24, 0, 0, 0]],[new Date('04 April 2020, 18:00 GMT+5:30'),[24, 0, 0, 0]],[new Date('05 April 2020, 09:00 GMT+5:30'),[24, 0, 0, 0]],[new Date('05 April 2020, 18:00 GMT+5:30'),[26, 0, 0, 0]],[new Date('06 April 2020, 09:00 GMT+5:30'),[26, 0, 0, 0]],[new Date('06 April 2020, 18:00 GMT+5:30'),[26, 0, 0, 0]],[new Date('07 April 2020, 09:00 GMT+5:30'),[26, 0, 0, 0]],[new Date('07 April 2020, 18:00 GMT+5:30'),[26, 0, 0, 0]],[new Date('08 April 2020, 08:00 GMT+5:30'),[27, 0, 0, 0]],[new Date('08 April 2020, 17:00 GMT+5:30'),[27, 0, 0, 0]],[new Date('09 April 2020, 08:00 GMT+5:30'),[28, 0, 0, 0]],[new Date('09 April 2020, 17:00 GMT+5:30'),[28, 0, 0, 0]],[new Date('10 April 2020, 08:00 GMT+5:30'),[29, 0, 0, 0]],[new Date('10 April 2020, 17:00 GMT+5:30'),[29, 0, 0, 0]],[new Date('11 April 2020, 08:00 GMT+5:30'),[29, 0, 0, 1]],[new Date('11 April 2020, 17:00 GMT+5:30'),[29, 0, 0, 1]],[new Date('12 April 2020, 08:00 GMT+5:30'),[29, 0, 0, 1]],[new Date('12 April 2020, 17:00 GMT+5:30'),[29, 0, 0, 1]],[new Date('13 April 2020, 08:00 GMT+5:30'),[29, 0, 0, 1]],[new Date('13 April 2020, 17:00 GMT+5:30'),[31, 0, 0, 1]],[new Date('14 April 2020, 08:00 GMT+5:30'),[31, 0, 0, 1]],[new Date('14 April 2020, 17:00 GMT+5:30'),[31, 0, 0, 1]],[new Date('15 April 2020, 08:00 GMT+5:30'),[32, 0, 0, 1]],[new Date('15 April 2020, 17:00 GMT+5:30'),[33, 0, 0, 1]],[new Date('16 April 2020, 08:00 GMT+5:30'),[33, 0, 0, 1]],[new Date('16 April 2020, 17:00 GMT+5:30'),[33, 0, 5, 1]],[new Date('17 April 2020, 08:00 GMT+5:30'),[35, 0, 5, 1]],[new Date('17 April 2020, 17:00 GMT+5:30'),[35, 0, 5, 1]],[new Date('18 April 2020, 08:00 GMT+5:30'),[35, 0, 5, 1]],[new Date('18 April 2020, 17:00 GMT+5:30'),[35, 0, 9, 1]],[new Date('19 April 2020, 08:00 GMT+5:30'),[35, 0, 12, 1]],[new Date('19 April 2020, 17:00 GMT+5:30'),[35, 0, 12, 1]],[new Date('20 April 2020, 08:00 GMT+5:30'),[35, 0, 17, 1]],[new Date('20 April 2020, 17:00 GMT+5:30'),[35, 0, 17, 1]],[new Date('21 April 2020, 08:00 GMT+5:30'),[35, 0, 19, 1]],[new Date('21 April 2020, 17:00 GMT+5:30'),[35, 0, 19, 1]],[new Date('22 April 2020, 08:00 GMT+5:30'),[35, 0, 19, 1]],[new Date('22 April 2020, 17:00 GMT+5:30'),[35, 0, 19, 1]],[new Date('23 April 2020, 08:00 GMT+5:30'),[35, 0, 19, 1]],[new Date('23 April 2020, 17:00 GMT+5:30'),[35, 0, 19, 1]],[new Date('24 April 2020, 08:00 GMT+5:30'),[36, 0, 19, 1]],[new Date('24 April 2020, 17:00 GMT+5:30'),[36, 0, 19, 1]],[new Date('25 April 2020, 08:00 GMT+5:30'),[36, 0, 19, 1]],[new Date('25 April 2020, 17:00 GMT+5:30'),[36, 0, 19, 1]],[new Date('26 April 2020, 08:00 GMT+5:30'),[36, 0, 19, 1]],[new Date('26 April 2020, 17:00 GMT+5:30'),[36, 0, 19, 1]],[new Date('27 April 2020, 08:00 GMT+5:30'),[36, 0, 27, 1]],[new Date('27 April 2020, 17:00 GMT+5:30'),[36, 0, 27, 1]],[new Date('28 April 2020, 08:00 GMT+5:30'),[36, 0, 27, 1]],[new Date('28 April 2020, 17:00 GMT+5:30'),[38, 0, 27, 1]],[new Date('29 April 2020, 08:00 GMT+5:30'),[38, 0, 27, 1]],[new Date('29 April 2020, 17:00 GMT+5:30'),[38, 0, 27, 1]],[new Date('30 April 2020, 08:00 GMT+5:30'),[38, 0, 29, 1]],[new Date('30 April 2020, 17:00 GMT+5:30'),[42, 0, 29, 1]],[new Date('01 May 2020, 08:00 GMT+5:30'),[42, 0, 29, 1]],[new Date('01 May 2020, 17:00 GMT+5:30'),[42, 0, 29, 1]],[new Date('02 May 2020, 08:00 GMT+5:30'),[43, 0, 32, 1]],[new Date('02 May 2020, 17:00 GMT+5:30'),[43, 0, 32, 1]],[new Date('03 May 2020, 08:00 GMT+5:30'),[43, 0, 32, 1]],[new Date('03 May 2020, 17:00 GMT+5:30'),[43, 0, 32, 1]],[new Date('04 May 2020, 08:00 GMT+5:30'),[43, 0, 32, 1]],[new Date('04 May 2020, 17:00  GMT+5:30'),[43, 0, 32, 1]],[new Date('05 May 2020, 08:00  GMT+5:30'),[43, 0, 32, 1]],[new Date('05 May 2020, 17:00  GMT+5:30'),[43, 0, 32, 1]],[new Date('06 May 2020, 08:00  GMT+5:30'),[43, 0, 32, 1]],[new Date('07 May 2020, 08:00  GMT+5:30'),[45, 0, 32, 1]],[new Date('08 May 2020, 08:00  GMT+5:30'),[54, 0, 34, 1]],[new Date('09 May 2020, 08:00  GMT+5:30'),[59, 0, 34, 1]],[new Date('10 May 2020, 08:00  GMT+5:30'),[63, 0, 34, 2]],[new Date('11 May 2020, 08:00  GMT+5:30'),[63, 0, 34, 2]],[new Date('12 May 2020, 08:00  GMT+5:30'),[65, 0, 34, 2]],[new Date('13 May 2020, 08:00  GMT+5:30'),[65, 0, 39, 2]],[new Date('14 May 2020, 08:00  GMT+5:30'),[80, 0, 39, 2]],[new Date('15 May 2020, 08:00  GMT+5:30'),[87, 0, 39, 2]],[new Date('16 May 2020, 08:00  GMT+5:30'),[90, 0, 41, 2]],[new Date('17 May 2020, 08:00  GMT+5:30'),[92, 0, 41, 2]],[new Date('18 May 2020, 08:00  GMT+5:30'),[101, 0, 41, 2]],[new Date('19 May 2020, 08:00  GMT+5:30'),[107, 0, 41, 2]],[new Date('20 May 2020, 08:00  GMT+5:30'),[142, 0, 41, 4]],[new Date('21 May 2020, 08:00  GMT+5:30'),[170, 0, 48, 4]],[new Date('22 May 2020, 08:00  GMT+5:30'),[203, 0, 54, 4]],[new Date('23 May 2020, 08:00  GMT+5:30'),[259, 0, 54, 4]],[new Date('24 May 2020, 08:00  GMT+5:30'),[329, 0, 55, 4]],[new Date('25 May 2020, 08:00  GMT+5:30'),[378, 0, 55, 4]],[new Date('26 May 2020, 08:00  GMT+5:30'),[526, 0, 62, 4]],[new Date('27 May 2020, 08:00  GMT+5:30'),[616, 0, 62, 4]],[new Date('28 May 2020, 08:00  GMT+5:30'),[781, 0, 87, 4]],[new Date('29 May 2020, 08:00  GMT+5:30'),[856, 0, 104, 4]],[new Date('30 May 2020, 08:00  GMT+5:30'),[1024, 0, 125, 4]],[new Date('31 May 2020, 08:00  GMT+5:30'),[1185, 0, 163, 4]],[new Date('01 June 2020, 08:00  GMT+5:30'),[1272, 0, 185, 4]],[new Date('02 June 2020, 08:00  GMT+5:30'),[1390, 0, 277, 4]],[new Date('03 June 2020, 08:00  GMT+5:30'),[1513, 0, 324, 4]],[new Date('04 June 2020, 08:00  GMT+5:30'),[1672, 0, 413, 4]],[new Date('05 June 2020, 08:00  GMT+5:30'),[1988, 0, 442, 4]],[new Date('06 June 2020, 08:00  GMT+5:30'),[2153, 0, 498, 4]],[new Date('07 June 2020, 08:00  GMT+5:30'),[2397, 0, 547, 4]],[new Date('08 June 2020, 08:00 GMT+5:30'),[2565, 0, 615, 4]],[new Date('09 June 2020, 08:00  GMT+5:30'),[2776, 0, 665, 4]],[new Date('10 June 2020, 08:00  GMT+5:30'),[2937, 0, 1085, 4]],[new Date('11 June 2020, 08:00  GMT+5:30'),[3092, 0, 1249, 4]],[new Date('12 June 2020, 08:00  GMT+5:30'),[3319, 0, 1432, 6]]];