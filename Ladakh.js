var rawData=[[new Date(2020,02,15,12,0),[ 3, 0,0,0]],[new Date(2020,02,15,17,0),[ 3, 0,0,0]],[new Date(2020,02,15,23,30),[ 3, 0,0,0]],[new Date(2020,02,16,16,0),[ 4, 0,0,0]],[new Date(2020,02,17,9,15),[ 4, 0,0,0]],[new Date(2020,02,17,17,15),[ 6, 0,0,0]],[new Date(2020,02,24,20,15),[13, 0, 0, 0]],[new Date(2020,02,25,9,15),[13, 0, 0, 0]],[new Date(2020,02,25,18,45),[13, 0, 0, 0]],[new Date(2020,02,26,10,15),[13, 0, 0, 0]],[new Date(2020,02,26,20,00),[13, 0, 0, 0]],[new Date(2020,02,27,9,15),[13, 0, 3, 0]],[new Date(2020,02,28,9,30),[13, 0, 3, 0]],[new Date(2020,02,28,17,45),[13, 0, 3, 0]],[new Date(2020,02,29,10,00),[13, 0, 3, 0]],[new Date(2020,02,29,19,30),[13, 0, 3, 0]],[new Date(2020,02,30,10,30),[13, 0, 3, 0]],[new Date(2020,02,30,21,30),[13, 0, 3, 0]],[new Date(2020,02,31,20,30),[13, 0, 3, 0]],[new Date('01 April 2020, 09:00 GMT+5:30'),[13, 0, 3, 0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[13, 0, 3, 0]],[new Date('02 April 2020, 09:00 GMT+5:30'),[13, 0, 3, 0]],[new Date('02 April 2020, 18:00 GMT+5:30'),[13, 0, 3, 0]],[new Date('03 April 2020, 09:00 GMT+5:30'),[14, 0, 3, 0]],[new Date('03 April 2020, 18:00 GMT+5:30'),[14, 0, 3, 0]],[new Date('04 April 2020, 09:00 GMT+5:30'),[14, 0, 3, 0]],[new Date('04 April 2020, 18:00 GMT+5:30'),[14, 0, 3, 0]],[new Date('05 April 2020, 09:00 GMT+5:30'),[14, 0, 10, 0]],[new Date('05 April 2020, 18:00 GMT+5:30'),[14, 0, 10, 0]],[new Date('06 April 2020, 09:00 GMT+5:30'),[14, 0, 10, 0]],[new Date('06 April 2020, 18:00 GMT+5:30'),[14, 0, 10, 0]],[new Date('07 April 2020, 09:00 GMT+5:30'),[14, 0, 10, 0]],[new Date('07 April 2020, 18:00 GMT+5:30'),[14, 0, 10, 0]],[new Date('08 April 2020, 08:00 GMT+5:30'),[14, 0, 10, 0]],[new Date('08 April 2020, 17:00 GMT+5:30'),[14, 0, 10, 0]],[new Date('09 April 2020, 08:00 GMT+5:30'),[14, 0, 10, 0]],[new Date('09 April 2020, 17:00 GMT+5:30'),[14, 0, 10, 0]],[new Date('10 April 2020, 08:00 GMT+5:30'),[15, 0, 10, 0]],[new Date('10 April 2020, 17:00 GMT+5:30'),[15, 0, 10, 0]],[new Date('11 April 2020, 08:00 GMT+5:30'),[15, 0, 10, 0]],[new Date('11 April 2020, 17:00 GMT+5:30'),[15, 0, 10, 0]],[new Date('12 April 2020, 08:00 GMT+5:30'),[15, 0, 10, 0]],[new Date('12 April 2020, 17:00 GMT+5:30'),[15, 0, 10, 0]],[new Date('13 April 2020, 08:00 GMT+5:30'),[15, 0, 10, 0]],[new Date('13 April 2020, 17:00 GMT+5:30'),[15, 0, 10, 0]],[new Date('14 April 2020, 08:00 GMT+5:30'),[15, 0, 10, 0]],[new Date('14 April 2020, 17:00 GMT+5:30'),[15, 0, 10, 0]],[new Date('15 April 2020, 08:00 GMT+5:30'),[17, 0, 10, 0]],[new Date('15 April 2020, 17:00 GMT+5:30'),[17, 0, 10, 0]],[new Date('16 April 2020, 08:00 GMT+5:30'),[17, 0, 10, 0]],[new Date('16 April 2020, 17:00 GMT+5:30'),[17, 0, 10, 0]],[new Date('17 April 2020, 08:00 GMT+5:30'),[18, 0, 14, 0]],[new Date('17 April 2020, 17:00 GMT+5:30'),[18, 0, 14, 0]],[new Date('18 April 2020, 08:00 GMT+5:30'),[18, 0, 14, 0]],[new Date('18 April 2020, 17:00 GMT+5:30'),[18, 0, 14, 0]],[new Date('19 April 2020, 08:00 GMT+5:30'),[18, 0, 14, 0]],[new Date('19 April 2020, 17:00 GMT+5:30'),[18, 0, 14, 0]],[new Date('20 April 2020, 08:00 GMT+5:30'),[18, 0, 14, 0]],[new Date('20 April 2020, 17:00 GMT+5:30'),[18, 0, 14, 0]],[new Date('21 April 2020, 08:00 GMT+5:30'),[18, 0, 14, 0]],[new Date('21 April 2020, 17:00 GMT+5:30'),[18, 0, 14, 0]],[new Date('22 April 2020, 08:00 GMT+5:30'),[18, 0, 14, 0]],[new Date('22 April 2020, 17:00 GMT+5:30'),[18, 0, 14, 0]],[new Date('23 April 2020, 08:00 GMT+5:30'),[18, 0, 14, 0]],[new Date('23 April 2020, 17:00 GMT+5:30'),[18, 0, 14, 0]],[new Date('24 April 2020, 08:00 GMT+5:30'),[18, 0, 14, 0]],[new Date('24 April 2020, 17:00 GMT+5:30'),[18, 0, 14, 0]],[new Date('25 April 2020, 08:00 GMT+5:30'),[20, 0, 14, 0]],[new Date('25 April 2020, 17:00 GMT+5:30'),[20, 0, 14, 0]],[new Date('26 April 2020, 08:00 GMT+5:30'),[20, 0, 14, 0]],[new Date('26 April 2020, 17:00 GMT+5:30'),[20, 0, 14, 0]],[new Date('27 April 2020, 08:00 GMT+5:30'),[20, 0, 14, 0]],[new Date('27 April 2020, 17:00 GMT+5:30'),[20, 0, 14, 0]],[new Date('28 April 2020, 08:00 GMT+5:30'),[20, 0, 14, 0]],[new Date('28 April 2020, 17:00 GMT+5:30'),[22, 0, 16, 0]],[new Date('29 April 2020, 08:00 GMT+5:30'),[22, 0, 16, 0]],[new Date('29 April 2020, 17:00 GMT+5:30'),[22, 0, 16, 0]],[new Date('30 April 2020, 08:00 GMT+5:30'),[22, 0, 16, 0]],[new Date('30 April 2020, 17:00 GMT+5:30'),[22, 0, 16, 0]],[new Date('01 May 2020, 08:00 GMT+5:30'),[22, 0, 16, 0]],[new Date('01 May 2020, 17:00 GMT+5:30'),[22, 0, 16, 0]],[new Date('02 May 2020, 08:00 GMT+5:30'),[22, 0, 17, 0]],[new Date('02 May 2020, 17:00 GMT+5:30'),[22, 0, 17, 0]],[new Date('03 May 2020, 08:00 GMT+5:30'),[22, 0, 17, 0]],[new Date('03 May 2020, 17:00 GMT+5:30'),[40, 0, 17, 0]],[new Date('04 May 2020, 08:00 GMT+5:30'),[41, 0, 17, 0]],[new Date('04 May 2020, 17:00  GMT+5:30'),[41, 0, 17, 0]],[new Date('05 May 2020, 08:00  GMT+5:30'),[41, 0, 17, 0]],[new Date('05 May 2020, 17:00  GMT+5:30'),[41, 0, 17, 0]],[new Date('06 May 2020, 08:00  GMT+5:30'),[41, 0, 17, 0]],[new Date('07 May 2020, 08:00  GMT+5:30'),[41, 0, 17, 0]],[new Date('08 May 2020, 08:00  GMT+5:30'),[42, 0, 17, 0]],[new Date('09 May 2020, 08:00  GMT+5:30'),[42, 0, 17, 0]],[new Date('10 May 2020, 08:00  GMT+5:30'),[42, 0, 17, 0]],[new Date('11 May 2020, 08:00  GMT+5:30'),[42, 0, 21, 0]],[new Date('12 May 2020, 08:00  GMT+5:30'),[42, 0, 21, 0]],[new Date('13 May 2020, 08:00  GMT+5:30'),[42, 0, 21, 0]],[new Date('14 May 2020, 08:00  GMT+5:30'),[43, 0, 22, 0]],[new Date('15 May 2020, 08:00  GMT+5:30'),[43, 0, 22, 0]],[new Date('16 May 2020, 08:00  GMT+5:30'),[43, 0, 22, 0]],[new Date('17 May 2020, 08:00  GMT+5:30'),[43, 0, 22, 0]],[new Date('18 May 2020, 08:00  GMT+5:30'),[43, 0, 24, 0]],[new Date('19 May 2020, 08:00  GMT+5:30'),[43, 0, 41, 0]],[new Date('20 May 2020, 08:00  GMT+5:30'),[43, 0, 43, 0]],[new Date('21 May 2020, 08:00  GMT+5:30'),[44, 0, 43, 0]],[new Date('22 May 2020, 08:00  GMT+5:30'),[44, 0, 43, 0]],[new Date('23 May 2020, 08:00  GMT+5:30'),[44, 0, 43, 0]],[new Date('24 May 2020, 08:00  GMT+5:30'),[49, 0, 43, 0]],[new Date('25 May 2020, 08:00  GMT+5:30'),[52, 0, 43, 0]],[new Date('26 May 2020, 08:00  GMT+5:30'),[52, 0, 43, 0]],[new Date('27 May 2020, 08:00  GMT+5:30'),[53, 0, 43, 0]],[new Date('28 May 2020, 08:00  GMT+5:30'),[53, 0, 43, 0]],[new Date('29 May 2020, 08:00  GMT+5:30'),[73, 0, 43, 0]],[new Date('30 May 2020, 08:00  GMT+5:30'),[74, 0, 43, 0]],[new Date('31 May 2020, 08:00  GMT+5:30'),[74, 0, 43, 0]],[new Date('01 June 2020, 08:00  GMT+5:30'),[74, 0, 43, 0]],[new Date('02 June 2020, 08:00  GMT+5:30'),[77, 0, 43, 0]],[new Date('03 June 2020, 08:00  GMT+5:30'),[81, 0, 47, 1]],[new Date('04 June 2020, 08:00  GMT+5:30'),[90, 0, 48, 1]],[new Date('05 June 2020, 08:00  GMT+5:30'),[90, 0, 48, 1]],[new Date('06 June 2020, 08:00  GMT+5:30'),[97, 0, 48, 1]],[new Date('07 June 2020, 08:00  GMT+5:30'),[99, 0, 48, 1]],[new Date('08 June 2020, 08:00 GMT+5:30'),[103, 0, 50, 1]],[new Date('09 June 2020, 08:00  GMT+5:30'),[103, 0, 52, 1]],[new Date('10 June 2020, 08:00  GMT+5:30'),[108, 0, 52, 1]],[new Date('11 June 2020, 08:00  GMT+5:30'),[115, 0, 52, 1]],[new Date('12 June 2020, 08:00  GMT+5:30'),[135, 0, 54, 1]],[new Date('13 June 2020, 08:00  GMT+5:30'),[239, 0, 62, 1]],[new Date('14 June 2020, 08:00  GMT+5:30'),[437, 0, 68, 1]],[new Date('15 June 2020, 08:00  GMT+5:30'),[549, 0, 80, 1]],[new Date('16 June 2020, 08:00  GMT+5:30'),[555, 0, 82, 1]],[new Date('17 June 2020, 08:00  GMT+5:30'),[649, 0, 85, 1]],[new Date('18 June 2020, 08:00  GMT+5:30'),[687, 0, 92, 1]],[new Date('19 June 2020, 08:00  GMT+5:30'),[687, 0, 95, 1]],[new Date('20 June 2020, 08:00  GMT+5:30'),[744, 0, 95, 1]],[new Date('21 June 2020, 08:00  GMT+5:30'),[836, 0, 117, 1]],[new Date('22 June 2020, 08:00  GMT+5:30'),[837, 0, 134, 1]],[new Date('23 June 2020, 08:00  GMT+5:30'),[847, 0, 136, 1]],[new Date('24	June 2020, 08:00  GMT+5:30'),[932, 0, 148, 1]],[new Date('25	June 2020, 08:00  GMT+5:30'),[941, 0, 274, 1]],[new Date('26	June 2020, 08:00  GMT+5:30'),[941, 0, 358, 1]],[new Date('27	June 2020, 08:00  GMT+5:30'),[946, 0, 358, 1]],[new Date('28	June 2020, 08:00  GMT+5:30'),[960, 0, 554, 1]],[new Date('29	June 2020, 08:00  GMT+5:30'),[963, 0, 586, 1]],[new Date('30	June 2020, 08:00  GMT+5:30'),[964, 0, 616, 1]],[new Date('01	July 2020, 08:00  GMT+5:30'),[973, 0, 648, 1]],[new Date('02	July 2020, 08:00  GMT+5:30'),[990, 0, 694, 1]],[new Date('03	July 2020, 08:00  GMT+5:30'),[990, 0, 730, 1]],[new Date('04	July 2020, 08:00  GMT+5:30'),[1001, 0, 777, 1]],[new Date('05	July 2020, 08:00  GMT+5:30'),[1005, 0, 826, 1]],[new Date('06	July 2020, 08:00  GMT+5:30'),[1005, 0, 826, 1]],[new Date('07	July 2020, 08:00  GMT+5:30'),[1005, 0, 836, 1]],[new Date('08	July 2020, 08:00  GMT+5:30'),[1041, 0, 836, 1]],[new Date('09	July 2020, 08:00  GMT+5:30'),[1041, 0, 836, 1]],[new Date('10	July 2020, 08:00  GMT+5:30'),[1055, 0, 915, 1]],[new Date('11	July 2020, 08:00  GMT+5:30'),[1064, 0, 917, 1]],[new Date('12	July 2020, 08:00  GMT+5:30'),[1077, 0, 928, 1]],[new Date('13	July 2020, 08:00  GMT+5:30'),[1086, 0, 928, 1]],[new Date('14	July 2020, 08:00  GMT+5:30'),[1093, 0, 946, 1]],[new Date('15	July 2020, 08:00  GMT+5:30'),[1093, 0, 946, 1]],[new Date('16	July 2020, 08:00  GMT+5:30'),[1142, 0, 964, 1]],[new Date('17	July 2020, 08:00  GMT+5:30'),[1147, 0, 970, 1]],[new Date('18	July 2020, 08:00  GMT+5:30'),[1151, 0, 973, 1]],[new Date('19	July 2020, 08:00  GMT+5:30'),[1159, 0, 985, 1]],[new Date('20	July 2020, 08:00  GMT+5:30'),[1178, 0, 1003, 2]],[new Date('21	July 2020, 08:00  GMT+5:30'),[1195, 0, 1007, 2]],[new Date('22	July 2020, 08:00  GMT+5:30'),[1198, 0, 1010, 2]],[new Date('23	July 2020, 08:00  GMT+5:30'),[1206, 0, 1018, 2]],[new Date('24	July 2020, 08:00  GMT+5:30'),[1210, 0, 1025, 2]]];