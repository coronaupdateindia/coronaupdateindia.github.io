var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[1, 0, 0, 0]],[new Date('02 April 2020, 09:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('02 April 2020, 18:00 GMT+5:30'),[5, 0, 0, 0]],[new Date('03 April 2020, 09:00 GMT+5:30'),[16, 0, 0, 0]],[new Date('03 April 2020, 18:00 GMT+5:30'),[16, 0, 0, 0]],[new Date('04 April 2020, 09:00 GMT+5:30'),[24, 0, 0, 0]],[new Date('04 April 2020, 18:00 GMT+5:30'),[24, 0, 0, 0]],[new Date('05 April 2020, 09:00 GMT+5:30'),[24, 0, 0, 0]],[new Date('05 April 2020, 18:00 GMT+5:30'),[26, 0, 0, 0]],[new Date('06 April 2020, 09:00 GMT+5:30'),[26, 0, 0, 0]],[new Date('06 April 2020, 18:00 GMT+5:30'),[26, 0, 0, 0]],[new Date('07 April 2020, 09:00 GMT+5:30'),[26, 0, 0, 0]],[new Date('07 April 2020, 18:00 GMT+5:30'),[26, 0, 0, 0]],[new Date('08 April 2020, 08:00 GMT+5:30'),[27, 0, 0, 0]],[new Date('08 April 2020, 17:00 GMT+5:30'),[27, 0, 0, 0]],[new Date('09 April 2020, 08:00 GMT+5:30'),[28, 0, 0, 0]],[new Date('09 April 2020, 17:00 GMT+5:30'),[28, 0, 0, 0]],[new Date('10 April 2020, 08:00 GMT+5:30'),[29, 0, 0, 0]],[new Date('10 April 2020, 17:00 GMT+5:30'),[29, 0, 0, 0]],[new Date('11 April 2020, 08:00 GMT+5:30'),[29, 0, 0, 1]],[new Date('11 April 2020, 17:00 GMT+5:30'),[29, 0, 0, 1]],[new Date('12 April 2020, 08:00 GMT+5:30'),[29, 0, 0, 1]],[new Date('12 April 2020, 17:00 GMT+5:30'),[29, 0, 0, 1]],[new Date('13 April 2020, 08:00 GMT+5:30'),[29, 0, 0, 1]],[new Date('13 April 2020, 17:00 GMT+5:30'),[31, 0, 0, 1]],[new Date('14 April 2020, 08:00 GMT+5:30'),[31, 0, 0, 1]],[new Date('14 April 2020, 17:00 GMT+5:30'),[31, 0, 0, 1]],[new Date('15 April 2020, 08:00 GMT+5:30'),[32, 0, 0, 1]],[new Date('15 April 2020, 17:00 GMT+5:30'),[33, 0, 0, 1]],[new Date('16 April 2020, 08:00 GMT+5:30'),[33, 0, 0, 1]],[new Date('16 April 2020, 17:00 GMT+5:30'),[33, 0, 5, 1]],[new Date('17 April 2020, 08:00 GMT+5:30'),[35, 0, 5, 1]],[new Date('17 April 2020, 17:00 GMT+5:30'),[35, 0, 5, 1]],[new Date('18 April 2020, 08:00 GMT+5:30'),[35, 0, 5, 1]],[new Date('18 April 2020, 17:00 GMT+5:30'),[35, 0, 9, 1]],[new Date('19 April 2020, 08:00 GMT+5:30'),[35, 0, 12, 1]],[new Date('19 April 2020, 17:00 GMT+5:30'),[35, 0, 12, 1]],[new Date('20 April 2020, 08:00 GMT+5:30'),[35, 0, 17, 1]],[new Date('20 April 2020, 17:00 GMT+5:30'),[35, 0, 17, 1]],[new Date('21 April 2020, 08:00 GMT+5:30'),[35, 0, 19, 1]],[new Date('21 April 2020, 17:00 GMT+5:30'),[35, 0, 19, 1]],[new Date('22 April 2020, 08:00 GMT+5:30'),[35, 0, 19, 1]],[new Date('22 April 2020, 17:00 GMT+5:30'),[35, 0, 19, 1]],[new Date('23 April 2020, 08:00 GMT+5:30'),[35, 0, 19, 1]],[new Date('23 April 2020, 17:00 GMT+5:30'),[35, 0, 19, 1]],[new Date('24 April 2020, 08:00 GMT+5:30'),[36, 0, 19, 1]],[new Date('24 April 2020, 17:00 GMT+5:30'),[36, 0, 19, 1]],[new Date('25 April 2020, 08:00 GMT+5:30'),[36, 0, 19, 1]],[new Date('25 April 2020, 17:00 GMT+5:30'),[36, 0, 19, 1]],[new Date('26 April 2020, 08:00 GMT+5:30'),[36, 0, 19, 1]],[new Date('26 April 2020, 17:00 GMT+5:30'),[36, 0, 19, 1]],[new Date('27 April 2020, 08:00 GMT+5:30'),[36, 0, 27, 1]],[new Date('27 April 2020, 17:00 GMT+5:30'),[36, 0, 27, 1]],[new Date('28 April 2020, 08:00 GMT+5:30'),[36, 0, 27, 1]],[new Date('28 April 2020, 17:00 GMT+5:30'),[38, 0, 27, 1]],[new Date('29 April 2020, 08:00 GMT+5:30'),[38, 0, 27, 1]],[new Date('29 April 2020, 17:00 GMT+5:30'),[38, 0, 27, 1]],[new Date('30 April 2020, 08:00 GMT+5:30'),[38, 0, 29, 1]],[new Date('30 April 2020, 17:00 GMT+5:30'),[42, 0, 29, 1]],[new Date('01 May 2020, 08:00 GMT+5:30'),[42, 0, 29, 1]],[new Date('01 May 2020, 17:00 GMT+5:30'),[42, 0, 29, 1]],[new Date('02 May 2020, 08:00 GMT+5:30'),[43, 0, 32, 1]],[new Date('02 May 2020, 17:00 GMT+5:30'),[43, 0, 32, 1]],[new Date('03 May 2020, 08:00 GMT+5:30'),[43, 0, 32, 1]],[new Date('03 May 2020, 17:00 GMT+5:30'),[43, 0, 32, 1]],[new Date('04 May 2020, 08:00 GMT+5:30'),[43, 0, 32, 1]],[new Date('04 May 2020, 17:00  GMT+5:30'),[43, 0, 32, 1]],[new Date('05 May 2020, 08:00  GMT+5:30'),[43, 0, 32, 1]],[new Date('05 May 2020, 17:00  GMT+5:30'),[43, 0, 32, 1]],[new Date('06 May 2020, 08:00  GMT+5:30'),[43, 0, 32, 1]],[new Date('07 May 2020, 08:00  GMT+5:30'),[45, 0, 32, 1]],[new Date('08 May 2020, 08:00  GMT+5:30'),[54, 0, 34, 1]],[new Date('09 May 2020, 08:00  GMT+5:30'),[59, 0, 34, 1]],[new Date('10 May 2020, 08:00  GMT+5:30'),[63, 0, 34, 2]],[new Date('11 May 2020, 08:00  GMT+5:30'),[63, 0, 34, 2]],[new Date('12 May 2020, 08:00  GMT+5:30'),[65, 0, 34, 2]],[new Date('13 May 2020, 08:00  GMT+5:30'),[65, 0, 39, 2]],[new Date('14 May 2020, 08:00  GMT+5:30'),[80, 0, 39, 2]],[new Date('15 May 2020, 08:00  GMT+5:30'),[87, 0, 39, 2]],[new Date('16 May 2020, 08:00  GMT+5:30'),[90, 0, 41, 2]],[new Date('17 May 2020, 08:00  GMT+5:30'),[92, 0, 41, 2]],[new Date('18 May 2020, 08:00  GMT+5:30'),[101, 0, 41, 2]],[new Date('19 May 2020, 08:00  GMT+5:30'),[107, 0, 41, 2]],[new Date('20 May 2020, 08:00  GMT+5:30'),[142, 0, 41, 4]],[new Date('21 May 2020, 08:00  GMT+5:30'),[170, 0, 48, 4]],[new Date('22 May 2020, 08:00  GMT+5:30'),[203, 0, 54, 4]],[new Date('23 May 2020, 08:00  GMT+5:30'),[259, 0, 54, 4]],[new Date('24 May 2020, 08:00  GMT+5:30'),[329, 0, 55, 4]],[new Date('25 May 2020, 08:00  GMT+5:30'),[378, 0, 55, 4]],[new Date('26 May 2020, 08:00  GMT+5:30'),[526, 0, 62, 4]],[new Date('27 May 2020, 08:00  GMT+5:30'),[616, 0, 62, 4]],[new Date('28 May 2020, 08:00  GMT+5:30'),[781, 0, 87, 4]],[new Date('29 May 2020, 08:00  GMT+5:30'),[856, 0, 104, 4]],[new Date('30 May 2020, 08:00  GMT+5:30'),[1024, 0, 125, 4]],[new Date('31 May 2020, 08:00  GMT+5:30'),[1185, 0, 163, 4]],[new Date('01 June 2020, 08:00  GMT+5:30'),[1272, 0, 185, 4]],[new Date('02 June 2020, 08:00  GMT+5:30'),[1390, 0, 277, 4]],[new Date('03 June 2020, 08:00  GMT+5:30'),[1513, 0, 324, 4]],[new Date('04 June 2020, 08:00  GMT+5:30'),[1672, 0, 413, 4]],[new Date('05 June 2020, 08:00  GMT+5:30'),[1988, 0, 442, 4]],[new Date('06 June 2020, 08:00  GMT+5:30'),[2153, 0, 498, 4]],[new Date('07 June 2020, 08:00  GMT+5:30'),[2397, 0, 547, 4]],[new Date('08 June 2020, 08:00 GMT+5:30'),[2565, 0, 615, 4]],[new Date('09 June 2020, 08:00  GMT+5:30'),[2776, 0, 665, 4]],[new Date('10 June 2020, 08:00  GMT+5:30'),[2937, 0, 1085, 4]],[new Date('11 June 2020, 08:00  GMT+5:30'),[3092, 0, 1249, 4]],[new Date('12 June 2020, 08:00  GMT+5:30'),[3319, 0, 1432, 6]],[new Date('13 June 2020, 08:00  GMT+5:30'),[3498, 0, 1537, 8]],[new Date('14 June 2020, 08:00  GMT+5:30'),[3718, 0, 1584, 8]],[new Date('15 June 2020, 08:00  GMT+5:30'),[4049, 0, 1960, 8]],[new Date('16 June 2020, 08:00  GMT+5:30'),[4158, 0, 2166, 8]],[new Date('17 June 2020, 08:00  GMT+5:30'),[4319, 0, 2166, 8]],[new Date('18 June 2020, 08:00  GMT+5:30'),[4605, 0, 2642, 8]],[new Date('19 June 2020, 08:00  GMT+5:30'),[4777, 0, 2654, 9]],[new Date('20 June 2020, 08:00  GMT+5:30'),[4904, 0, 3039, 9]],[new Date('21 June 2020, 08:00  GMT+5:30'),[4904, 0, 3039, 9]],[new Date('22 June 2020, 08:00  GMT+5:30'),[5388, 0, 3360, 9]],[new Date('23 June 2020, 08:00  GMT+5:30'),[5586, 0, 3521, 9]],[new Date('24	June 2020, 08:00  GMT+5:30'),[5831, 0, 3762, 9]],[new Date('25	June 2020, 08:00  GMT+5:30'),[6198, 0, 3958, 9]],[new Date('26	June 2020, 08:00  GMT+5:30'),[6321, 0, 4033, 9]],[new Date('27	June 2020, 08:00  GMT+5:30'),[6607, 0, 4259, 9]],[new Date('28	June 2020, 08:00  GMT+5:30'),[6816, 0, 4500, 9]],[new Date('29	June 2020, 08:00  GMT+5:30'),[7206, 0, 5088, 10]],[new Date('30	June 2020, 08:00  GMT+5:30'),[7752, 0, 5333, 11]],[new Date('01	July 2020, 08:00  GMT+5:30'),[8227, 0, 5647, 12]],[new Date('02	July 2020, 08:00  GMT+5:30'),[8582, 0, 5851, 12]],[new Date('03	July 2020, 08:00  GMT+5:30'),[9013, 0, 6106, 12]],[new Date('04	July 2020, 08:00  GMT+5:30'),[9673, 0, 6349, 14]],[new Date('05	July 2020, 08:00  GMT+5:30'),[10668, 0, 6657, 14]],[new Date('06	July 2020, 08:00  GMT+5:30'),[11388, 0, 7125, 14]],[new Date('07	July 2020, 08:00  GMT+5:30'),[12160, 0, 7882, 14]],[new Date('08	July 2020, 08:00  GMT+5:30'),[12522, 0, 8329, 14]],[new Date('09	July 2020, 08:00  GMT+5:30'),[13336, 0, 8729, 16]],[new Date('10	July 2020, 08:00  GMT+5:30'),[14032, 0, 8729, 22]],[new Date('11	July 2020, 08:00  GMT+5:30'),[14600, 0, 9147, 27]],[new Date('12	July 2020, 08:00  GMT+5:30'),[15536, 0, 9150, 35]],[new Date('13	July 2020, 08:00  GMT+5:30'),[16071, 0, 10426, 35]],[new Date('14	July 2020, 08:00  GMT+5:30'),[16806, 0, 10894, 36]],[new Date('15	July 2020, 08:00  GMT+5:30'),[17807, 0, 11416, 40]]];