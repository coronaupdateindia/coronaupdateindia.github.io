var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date(2020,02,24,20,15),[32, 1, 0, 1]],[new Date(2020,02,25,9,15),[32, 1, 0, 1]],[new Date(2020,02,25,18,45),[37, 1, 0, 1]],[new Date(2020,02,26,10,15),[37, 1, 0, 2]],[new Date(2020,02,26,20,00),[42, 1, 0, 3]],[new Date(2020,02,27,9,15),[42, 1, 0, 3]],[new Date(2020,02,28,9,30),[44, 1, 0, 3]],[new Date(2020,02,28,17,45),[44, 1, 0, 3]],[new Date(2020,02,29,10,00),[52, 1, 0, 4]],[new Date(2020,02,29,19,30),[58, 0, 1, 5]],[new Date(2020,02,30,10,30),[58, 0, 1, 5]],[new Date(2020,02,30,21,30),[69, 0, 1, 6]],[new Date(2020,02,31,20,30),[73, 0, 3, 6]],[new Date('01 April 2020, 09:00 GMT+5:30'),[74, 0, 5, 6]],[new Date('01 April 2020, 19:30 GMT+5:30'),[82, 0, 5, 6]],[new Date('02 April 2020, 09:00 GMT+5:30'),[82, 0, 5, 6]],[new Date('02 April 2020, 18:00 GMT+5:30'),[87, 0, 8, 7]],[new Date('03 April 2020, 09:00 GMT+5:30'),[87, 0, 8, 7]],[new Date('03 April 2020, 18:00 GMT+5:30'),[95, 0, 10, 8]],[new Date('04 April 2020, 09:00 GMT+5:30'),[95, 0, 10, 9]],[new Date('04 April 2020, 18:00 GMT+5:30'),[105, 0, 14, 10]],[new Date('05 April 2020, 09:00 GMT+5:30'),[105, 0, 14, 10]],[new Date('05 April 2020, 18:00 GMT+5:30'),[122, 0, 18, 11]],[new Date('06 April 2020, 09:00 GMT+5:30'),[122, 0, 18, 11]],[new Date('06 April 2020, 18:00 GMT+5:30'),[144, 0, 22, 12]],[new Date('07 April 2020, 09:00 GMT+5:30'),[144, 0, 22, 12]],[new Date('07 April 2020, 18:00 GMT+5:30'),[165, 0, 25, 13]],[new Date('08 April 2020, 08:00 GMT+5:30'),[165, 0, 25, 13]],[new Date('08 April 2020, 17:00 GMT+5:30'),[165, 0, 25, 13]],[new Date('09 April 2020, 08:00 GMT+5:30'),[179, 0, 25, 16]],[new Date('09 April 2020, 17:00 GMT+5:30'),[179, 0, 25, 16]],[new Date('10 April 2020, 08:00 GMT+5:30'),[241, 0, 26, 17]],[new Date('10 April 2020, 17:00 GMT+5:30'),[241, 0, 26, 17]],[new Date('11 April 2020, 08:00 GMT+5:30'),[308, 0, 31, 19]],[new Date('11 April 2020, 17:00 GMT+5:30'),[308, 0, 31, 19]],[new Date('12 April 2020, 08:00 GMT+5:30'),[432, 0, 44, 22]],[new Date('12 April 2020, 17:00 GMT+5:30'),[432, 0, 44, 22]],[new Date('13 April 2020, 08:00 GMT+5:30'),[516, 0, 44, 25]],[new Date('13 April 2020, 17:00 GMT+5:30'),[539, 0, 47, 26]],[new Date('14 April 2020, 08:00 GMT+5:30'),[539, 0, 54, 26]],[new Date('14 April 2020, 17:00 GMT+5:30'),[617, 0, 55, 26]],[new Date('15 April 2020, 08:00 GMT+5:30'),[650, 0, 59, 28]],[new Date('15 April 2020, 17:00 GMT+5:30'),[695, 0, 59, 30]],[new Date('16 April 2020, 08:00 GMT+5:30'),[766, 0, 64, 33]],[new Date('16 April 2020, 17:00 GMT+5:30'),[871, 0, 64, 36]],[new Date('17 April 2020, 08:00 GMT+5:30'),[930, 0, 73, 36]],[new Date('17 April 2020, 17:00 GMT+5:30'),[1021, 0, 74, 38]],[new Date('18 April 2020, 08:00 GMT+5:30'),[1099, 0, 86, 41]],[new Date('18 April 2020, 17:00 GMT+5:30'),[1272, 0, 88, 48]],[new Date('19 April 2020, 08:00 GMT+5:30'),[1376, 0, 93, 53]],[new Date('19 April 2020, 17:00 GMT+5:30'),[1604, 0, 94, 58]],[new Date('20 April 2020, 08:00 GMT+5:30'),[1743, 0, 105, 63]],[new Date('20 April 2020, 17:00 GMT+5:30'),[1851, 0, 106, 67]],[new Date('21 April 2020, 08:00 GMT+5:30'),[1939, 0, 131, 71]],[new Date('21 April 2020, 17:00 GMT+5:30'),[2066, 0, 131, 77]],[new Date('22 April 2020, 08:00 GMT+5:30'),[2178, 0, 139, 90]],[new Date('22 April 2020, 17:00 GMT+5:30'),[2272, 0, 144, 95]],[new Date('23 April 2020, 08:00 GMT+5:30'),[2407, 0, 179, 103]],[new Date('23 April 2020, 17:00 GMT+5:30'),[2407, 0, 179, 103]],[new Date('24 April 2020, 08:00 GMT+5:30'),[2624, 0, 258, 112]],[new Date('24 April 2020, 17:00 GMT+5:30'),[2624, 0, 258, 112]],[new Date('25 April 2020, 08:00 GMT+5:30'),[2815, 0, 265, 127]],[new Date('25 April 2020, 17:00 GMT+5:30'),[2815, 0, 265, 127]],[new Date('26 April 2020, 08:00 GMT+5:30'),[3071, 0, 282, 133]],[new Date('26 April 2020, 17:00 GMT+5:30'),[3071, 0, 282, 133]],[new Date('27 April 2020, 08:00 GMT+5:30'),[3301, 0, 313, 151]],[new Date('27 April 2020, 17:00 GMT+5:30'),[3301, 0, 313, 151]],[new Date('28 April 2020, 08:00 GMT+5:30'),[3548, 0, 394, 162]],[new Date('28 April 2020, 17:00 GMT+5:30'),[3548, 0, 394, 162]],[new Date('29 April 2020, 08:00 GMT+5:30'),[3744, 0, 434, 181]],[new Date('29 April 2020, 17:00 GMT+5:30'),[3774, 0, 434, 181]],[new Date('30 April 2020, 08:00 GMT+5:30'),[4082, 0, 527, 197]],[new Date('30 April 2020, 17:00 GMT+5:30'),[4082, 0, 527, 197]],[new Date('01 May 2020, 08:00 GMT+5:30'),[4395, 0, 613, 214]],[new Date('01 May 2020, 17:00 GMT+5:30'),[4395, 0, 613, 214]],[new Date('02 May 2020, 08:00 GMT+5:30'),[4721, 0, 735, 236]],[new Date('02 May 2020, 17:00 GMT+5:30'),[4721, 0, 735, 236]],[new Date('03 May 2020, 08:00 GMT+5:30'),[5054, 0, 896, 262]],[new Date('03 May 2020, 17:00 GMT+5:30'),[5055, 0, 896, 262]],[new Date('04 May 2020, 08:00 GMT+5:30'),[5428, 0, 1042, 290]],[new Date('04 May 2020, 17:00  GMT+5:30'),[5428, 0, 1042, 290]],[new Date('05 May 2020, 08:00  GMT+5:30'),[5804, 0, 1195, 319]],[new Date('05 May 2020, 17:00  GMT+5:30'),[5804, 0, 1195, 319]],[new Date('06 May 2020, 08:00  GMT+5:30'),[6245, 0, 1381, 368]],[new Date('07 May 2020, 08:00  GMT+5:30'),[6625, 0, 1500, 396]],[new Date('08 May 2020, 08:00  GMT+5:30'),[7012, 0, 1709, 425]],[new Date('09 May 2020, 08:00  GMT+5:30'),[7402, 0, 1872, 449]],[new Date('10 May 2020, 08:00  GMT+5:30'),[7796, 0, 2091, 472]],[new Date('11 May 2020, 08:00  GMT+5:30'),[8194, 0, 2545, 493]],[new Date('12 May 2020, 08:00  GMT+5:30'),[8541, 0, 2780, 513]],[new Date('13 May 2020, 08:00  GMT+5:30'),[8903, 0, 3246, 537]],[new Date('14 May 2020, 08:00  GMT+5:30'),[9267, 0, 3562, 566]],[new Date('15 May 2020, 08:00  GMT+5:30'),[9591, 0, 3753, 586]],[new Date('16 May 2020, 08:00  GMT+5:30'),[9931, 0, 4035, 606]],[new Date('17 May 2020, 08:00  GMT+5:30'),[10988, 0, 4308, 625]],[new Date('18 May 2020, 08:00  GMT+5:30'),[11379, 0, 4499, 659]],[new Date('19 May 2020, 08:00  GMT+5:30'),[11745, 0, 4804, 694]],[new Date('20 May 2020, 08:00  GMT+5:30'),[12140, 0, 5043, 719]],[new Date('21 May 2020, 08:00  GMT+5:30'),[12537, 0, 5219, 749]],[new Date('22 May 2020, 08:00  GMT+5:30'),[12905, 0, 5488, 773]],[new Date('23 May 2020, 08:00  GMT+5:30'),[13268, 0, 5880, 802]],[new Date('24 May 2020, 08:00  GMT+5:30'),[13664, 0, 6169, 829]],[new Date('25 May 2020, 08:00  GMT+5:30'),[14056, 0, 6412, 858]],[new Date('26 May 2020, 08:00  GMT+5:30'),[14460, 0, 6636, 888]],[new Date('27 May 2020, 08:00  GMT+5:30'),[14821, 0, 7139, 915]],[new Date('28 May 2020, 08:00  GMT+5:30'),[15195, 0, 7549, 938]],[new Date('29 May 2020, 08:00  GMT+5:30'),[15562, 0, 8003, 960]],[new Date('30 May 2020, 08:00  GMT+5:30'),[15934, 0, 8611, 980]],[new Date('31 May 2020, 08:00  GMT+5:30'),[16343, 0, 9230, 1007]],[new Date('01 June 2020, 08:00  GMT+5:30'),[16779, 0, 9919, 1038]],[new Date('02 June 2020, 08:00  GMT+5:30'),[17200, 0, 10780, 1063]],[new Date('03 June 2020, 08:00  GMT+5:30'),[17617, 0, 11894, 1092]],[new Date('04 June 2020, 08:00  GMT+5:30'),[18100, 0, 12212, 1122]],[new Date('05 June 2020, 08:00  GMT+5:30'),[18584, 0, 12667, 1155]],[new Date('06 June 2020, 08:00  GMT+5:30'),[19094, 0, 13003, 1190]],[new Date('07 June 2020, 08:00  GMT+5:30'),[19592, 0, 13316, 1219]],[new Date('08 June 2020, 08:00 GMT+5:30'),[20070, 0, 13635, 1249]],[new Date('09 June 2020, 08:00  GMT+5:30'),[20545, 0, 13956, 1280]],[new Date('10 June 2020, 08:00  GMT+5:30'),[21014, 0, 14365, 1313]],[new Date('11 June 2020, 08:00  GMT+5:30'),[21521, 0, 14735, 1347]],[new Date('12 June 2020, 08:00  GMT+5:30'),[22032, 0, 15101, 1385]]];