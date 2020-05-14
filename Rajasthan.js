var rawData=[[new Date(2020,02,15,12,0),[ 2, 2,0,0]],[new Date(2020,02,15,17,0),[ 2, 2,0,0]],[new Date(2020,02,15,23,30),[ 2, 2,3,0]],[new Date(2020,02,16,16,0),[ 2, 2,3,0]],[new Date(2020,02,17,9,15),[ 2, 2,3,0]],[new Date(2020,02,17,17,15),[ 2, 2,3,0]],[new Date(2020,02,24,20,15),[30, 2, 3, 0]],[new Date(2020,02,25,9,15),[30, 2, 3, 0]],[new Date(2020,02,25,18,45),[34, 2, 3, 0]],[new Date(2020,02,26,10,15),[36, 2, 3, 0]],[new Date(2020,02,26,20,00),[39, 2, 3, 0]],[new Date(2020,02,27,9,15),[39, 2, 3, 0]],[new Date(2020,02,28,9,30),[46, 2, 3, 0]],[new Date(2020,02,28,17,45),[52, 2, 3, 0]],[new Date(2020,02,29,10,00),[52, 2, 3, 0]],[new Date(2020,02,29,19,30),[55, 0, 3, 0]],[new Date(2020,02,30,10,30),[57, 0, 3, 0]],[new Date(2020,02,30,21,30),[59, 0, 3, 0]],[new Date(2020,02,31,20,30),[74, 0, 3, 0]],[new Date('01 April 2020, 09:00 GMT+5:30'),[93, 0, 3, 0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[93, 0, 3, 0]],[new Date('02 April 2020, 09:00 GMT+5:30'),[108, 0, 3, 0]],[new Date('02 April 2020, 18:00 GMT+5:30'),[108, 0, 3, 0]],[new Date('03 April 2020, 09:00 GMT+5:30'),[133, 0, 3, 0]],[new Date('03 April 2020, 18:00 GMT+5:30'),[167, 0, 3, 0]],[new Date('04 April 2020, 09:00 GMT+5:30'),[179, 0, 3, 0]],[new Date('04 April 2020, 18:00 GMT+5:30'),[200, 0, 21, 0]],[new Date('05 April 2020, 09:00 GMT+5:30'),[200, 0, 21, 0]],[new Date('05 April 2020, 18:00 GMT+5:30'),[200, 0, 21, 0]],[new Date('06 April 2020, 09:00 GMT+5:30'),[253, 0, 21, 0]],[new Date('06 April 2020, 18:00 GMT+5:30'),[274, 0, 21, 0]],[new Date('07 April 2020, 09:00 GMT+5:30'),[288, 0, 21, 3]],[new Date('07 April 2020, 18:00 GMT+5:30'),[288, 0, 21, 3]],[new Date('08 April 2020, 08:00 GMT+5:30'),[328, 0, 21, 3]],[new Date('08 April 2020, 17:00 GMT+5:30'),[328, 0, 21, 3]],[new Date('09 April 2020, 08:00 GMT+5:30'),[381, 0, 21, 3]],[new Date('09 April 2020, 17:00 GMT+5:30'),[383, 0, 21, 3]],[new Date('10 April 2020, 08:00 GMT+5:30'),[463, 0, 21, 3]],[new Date('10 April 2020, 17:00 GMT+5:30'),[463, 0, 21, 3]],[new Date('11 April 2020, 08:00 GMT+5:30'),[553, 0, 21, 3]],[new Date('11 April 2020, 17:00 GMT+5:30'),[553, 0, 21, 3]],[new Date('12 April 2020, 08:00 GMT+5:30'),[700, 0, 21, 3]],[new Date('12 April 2020, 17:00 GMT+5:30'),[700, 0, 21, 3]],[new Date('13 April 2020, 08:00 GMT+5:30'),[804, 0, 21, 3]],[new Date('13 April 2020, 17:00 GMT+5:30'),[812, 0, 21, 3]],[new Date('14 April 2020, 08:00 GMT+5:30'),[873, 0, 21, 3]],[new Date('14 April 2020, 17:00 GMT+5:30'),[879, 0, 133, 3]],[new Date('15 April 2020, 08:00 GMT+5:30'),[969, 0, 147, 3]],[new Date('15 April 2020, 17:00 GMT+5:30'),[1005, 0, 147, 3]],[new Date('16 April 2020, 08:00 GMT+5:30'),[1023, 0, 147, 3]],[new Date('16 April 2020, 17:00 GMT+5:30'),[1023, 0, 147, 3]],[new Date('17 April 2020, 08:00 GMT+5:30'),[1131, 0, 164, 3]],[new Date('17 April 2020, 17:00 GMT+5:30'),[1131, 0, 164, 11]],[new Date('18 April 2020, 08:00 GMT+5:30'),[1229, 0, 183, 11]],[new Date('18 April 2020, 17:00 GMT+5:30'),[1229, 0, 183, 11]],[new Date('19 April 2020, 08:00 GMT+5:30'),[1351, 0, 183, 11]],[new Date('19 April 2020, 17:00 GMT+5:30'),[1351, 0, 183, 11]],[new Date('20 April 2020, 08:00 GMT+5:30'),[1478, 0, 183, 14]],[new Date('20 April 2020, 17:00 GMT+5:30'),[1478, 0, 183, 14]],[new Date('21 April 2020, 08:00 GMT+5:30'),[1576, 0, 205, 25]],[new Date('21 April 2020, 17:00 GMT+5:30'),[1576, 0, 205, 25]],[new Date('22 April 2020, 08:00 GMT+5:30'),[1659, 0, 230, 25]],[new Date('22 April 2020, 17:00 GMT+5:30'),[1801, 0, 230, 25]],[new Date('23 April 2020, 08:00 GMT+5:30'),[1890, 0, 230, 27]],[new Date('23 April 2020, 17:00 GMT+5:30'),[1890, 0, 230, 27]],[new Date('24 April 2020, 08:00 GMT+5:30'),[1964, 0, 230, 27]],[new Date('24 April 2020, 17:00 GMT+5:30'),[1964, 0, 230, 27]],[new Date('25 April 2020, 08:00 GMT+5:30'),[2034, 0, 230, 27]],[new Date('25 April 2020, 17:00 GMT+5:30'),[2034, 0, 230, 27]],[new Date('26 April 2020, 08:00 GMT+5:30'),[2083, 0, 493, 33]],[new Date('26 April 2020, 17:00 GMT+5:30'),[2083, 0, 493, 33]],[new Date('27 April 2020, 08:00 GMT+5:30'),[2185, 0, 518, 33]],[new Date('27 April 2020, 17:00 GMT+5:30'),[2185, 0, 518, 41]],[new Date('28 April 2020, 08:00 GMT+5:30'),[2262, 0, 669, 46]],[new Date('28 April 2020, 17:00 GMT+5:30'),[2262, 0, 669, 46]],[new Date('29 April 2020, 08:00 GMT+5:30'),[2364, 0, 768, 51]],[new Date('29 April 2020, 17:00 GMT+5:30'),[2364, 0, 768, 51]],[new Date('30 April 2020, 08:00 GMT+5:30'),[2438, 0, 768, 51]],[new Date('30 April 2020, 17:00 GMT+5:30'),[2438, 0, 768, 51]],[new Date('01 May 2020, 08:00 GMT+5:30'),[2584, 0, 836, 58]],[new Date('01 May 2020, 17:00 GMT+5:30'),[2584, 0, 836, 58]],[new Date('02 May 2020, 08:00 GMT+5:30'),[2666, 0, 1116, 62]],[new Date('02 May 2020, 17:00 GMT+5:30'),[2666, 0, 1116, 62]],[new Date('03 May 2020, 08:00 GMT+5:30'),[2770, 0, 1121, 65]],[new Date('03 May 2020, 17:00 GMT+5:30'),[2772, 0, 1121, 65]],[new Date('04 May 2020, 08:00 GMT+5:30'),[2886, 0, 1356, 71]],[new Date('04 May 2020, 17:00  GMT+5:30'),[2886, 0, 1356, 71]],[new Date('05 May 2020, 08:00  GMT+5:30'),[3061, 0, 1394, 77]],[new Date('05 May 2020, 17:00  GMT+5:30'),[3061, 0, 1394, 77]],[new Date('06 May 2020, 08:00  GMT+5:30'),[3158, 0, 1525, 89]],[new Date('07 May 2020, 08:00  GMT+5:30'),[3317, 0, 1596, 92]],[new Date('08 May 2020, 08:00  GMT+5:30'),[3427, 0, 1596, 97]],[new Date('09 May 2020, 08:00  GMT+5:30'),[3579, 0, 1916, 101]],[new Date('10 May 2020, 08:00  GMT+5:30'),[3708, 0, 2026, 106]],[new Date('11 May 2020, 08:00  GMT+5:30'),[3814, 0, 2176, 107]],[new Date('12 May 2020, 08:00  GMT+5:30'),[3988, 0, 2264, 113]],[new Date('13 May 2020, 08:00  GMT+5:30'),[4126, 0, 2378, 117]],[new Date('14 May 2020, 08:00  GMT+5:30'),[4328, 0, 2459, 121]]];