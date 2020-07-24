var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 1, 0,0,0]],[new Date(2020,02,17,9,15),[ 1, 0,0,0]],[new Date(2020,02,17,17,15),[ 1, 0,0,0]],[new Date(2020,02,24,20,15),[2, 0, 0, 0]],[new Date(2020,02,25,9,15),[2, 0, 0, 0]],[new Date(2020,02,25,18,45),[2, 0, 0, 0]],[new Date(2020,02,26,10,15),[2, 0, 0, 0]],[new Date(2020,02,26,20,00),[2, 0, 0, 0]],[new Date(2020,02,27,9,15),[2, 0, 0, 0]],[new Date(2020,02,28,9,30),[3, 0, 0, 0]],[new Date(2020,02,28,17,45),[3, 0, 0, 0]],[new Date(2020,02,29,10,00),[3, 0, 0, 0]],[new Date(2020,02,29,19,30),[3, 0, 0, 0]],[new Date(2020,02,30,10,30),[3, 0, 0, 0]],[new Date(2020,02,30,21,30),[3, 0, 0, 0]],[new Date(2020,02,31,20,30),[3, 0, 0, 0]],[new Date('01 April 2020, 09:00 GMT+5:30'),[4, 0, 0, 0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[4, 0, 0, 0]],[new Date('02 April 2020, 09:00 GMT+5:30'),[4, 0, 0, 0]],[new Date('02 April 2020, 18:00 GMT+5:30'),[4, 0, 0, 0]],[new Date('03 April 2020, 09:00 GMT+5:30'),[5, 0, 0, 0]],[new Date('03 April 2020, 18:00 GMT+5:30'),[5, 0, 0, 0]],[new Date('04 April 2020, 09:00 GMT+5:30'),[5, 0, 0, 0]],[new Date('04 April 2020, 18:00 GMT+5:30'),[5, 0, 0, 0]],[new Date('05 April 2020, 09:00 GMT+5:30'),[20, 0, 0, 0]],[new Date('05 April 2020, 18:00 GMT+5:30'),[20, 0, 0, 0]],[new Date('06 April 2020, 09:00 GMT+5:30'),[21, 0, 2, 0]],[new Date('06 April 2020, 18:00 GMT+5:30'),[21, 0, 2, 0]],[new Date('07 April 2020, 09:00 GMT+5:30'),[21, 0, 2, 0]],[new Date('07 April 2020, 18:00 GMT+5:30'),[42, 0, 2, 1]],[new Date('08 April 2020, 08:00 GMT+5:30'),[42, 0, 2, 1]],[new Date('08 April 2020, 17:00 GMT+5:30'),[42, 0, 2, 1]],[new Date('09 April 2020, 08:00 GMT+5:30'),[42, 0, 2, 1]],[new Date('09 April 2020, 17:00 GMT+5:30'),[42, 0, 2, 1]],[new Date('10 April 2020, 08:00 GMT+5:30'),[44, 0, 2, 1]],[new Date('10 April 2020, 17:00 GMT+5:30'),[44, 0, 2, 1]],[new Date('11 April 2020, 08:00 GMT+5:30'),[48, 0, 2, 1]],[new Date('11 April 2020, 17:00 GMT+5:30'),[48, 0, 2, 1]],[new Date('12 April 2020, 08:00 GMT+5:30'),[50, 0, 2, 1]],[new Date('12 April 2020, 17:00 GMT+5:30'),[54, 0, 12, 1]],[new Date('13 April 2020, 08:00 GMT+5:30'),[54, 0, 12, 1]],[new Date('13 April 2020, 17:00 GMT+5:30'),[54, 0, 12, 1]],[new Date('14 April 2020, 08:00 GMT+5:30'),[54, 0, 12, 1]],[new Date('14 April 2020, 17:00 GMT+5:30'),[55, 0, 18, 1]],[new Date('15 April 2020, 08:00 GMT+5:30'),[60, 0, 18, 1]],[new Date('15 April 2020, 17:00 GMT+5:30'),[60, 0, 18, 1]],[new Date('16 April 2020, 08:00 GMT+5:30'),[60, 0, 18, 1]],[new Date('16 April 2020, 17:00 GMT+5:30'),[60, 0, 18, 1]],[new Date('17 April 2020, 08:00 GMT+5:30'),[60, 0, 19, 1]],[new Date('17 April 2020, 17:00 GMT+5:30'),[60, 0, 19, 1]],[new Date('18 April 2020, 08:00 GMT+5:30'),[60, 0, 19, 1]],[new Date('18 April 2020, 17:00 GMT+5:30'),[60, 0, 21, 1]],[new Date('19 April 2020, 08:00 GMT+5:30'),[61, 0, 24, 1]],[new Date('19 April 2020, 17:00 GMT+5:30'),[61, 0, 24, 1]],[new Date('20 April 2020, 08:00 GMT+5:30'),[68, 0, 24, 1]],[new Date('20 April 2020, 17:00 GMT+5:30'),[68, 0, 24, 1]],[new Date('21 April 2020, 08:00 GMT+5:30'),[74, 0, 24, 1]],[new Date('21 April 2020, 17:00 GMT+5:30'),[74, 0, 24, 1]],[new Date('22 April 2020, 08:00 GMT+5:30'),[79, 0, 24, 1]],[new Date('22 April 2020, 17:00 GMT+5:30'),[82, 0, 30, 1]],[new Date('23 April 2020, 08:00 GMT+5:30'),[83, 0, 32, 1]],[new Date('23 April 2020, 17:00 GMT+5:30'),[83, 0, 32, 1]],[new Date('24 April 2020, 08:00 GMT+5:30'),[90, 0, 33, 1]],[new Date('24 April 2020, 17:00 GMT+5:30'),[90, 0, 33, 1]],[new Date('25 April 2020, 08:00 GMT+5:30'),[94, 0, 33, 1]],[new Date('25 April 2020, 17:00 GMT+5:30'),[94, 0, 33, 1]],[new Date('26 April 2020, 08:00 GMT+5:30'),[94, 0, 33, 1]],[new Date('26 April 2020, 17:00 GMT+5:30'),[103, 0, 34, 1]],[new Date('27 April 2020, 08:00 GMT+5:30'),[103, 0, 35, 1]],[new Date('27 April 2020, 17:00 GMT+5:30'),[108, 0, 35, 1]],[new Date('28 April 2020, 08:00 GMT+5:30'),[118, 0, 37, 1]],[new Date('28 April 2020, 17:00 GMT+5:30'),[118, 0, 37, 1]],[new Date('29 April 2020, 08:00 GMT+5:30'),[118, 0, 38, 1]],[new Date('29 April 2020, 17:00 GMT+5:30'),[119, 0, 38, 1]],[new Date('30 April 2020, 08:00 GMT+5:30'),[125, 0, 39, 1]],[new Date('30 April 2020, 17:00 GMT+5:30'),[128, 0, 39, 1]],[new Date('01 May 2020, 08:00 GMT+5:30'),[142, 0, 39, 1]],[new Date('01 May 2020, 17:00 GMT+5:30'),[143, 0, 41, 1]],[new Date('02 May 2020, 08:00 GMT+5:30'),[149, 0, 55, 1]],[new Date('02 May 2020, 17:00 GMT+5:30'),[154, 0, 55, 1]],[new Date('03 May 2020, 08:00 GMT+5:30'),[157, 0, 56, 1]],[new Date('03 May 2020, 17:00 GMT+5:30'),[160, 0, 56, 1]],[new Date('04 May 2020, 08:00 GMT+5:30'),[162, 0, 56, 1]],[new Date('04 May 2020, 17:00  GMT+5:30'),[163, 0, 60, 1]],[new Date('05 May 2020, 08:00  GMT+5:30'),[169, 0, 60, 1]],[new Date('05 May 2020, 17:00  GMT+5:30'),[170, 0, 60, 1]],[new Date('06 May 2020, 08:00  GMT+5:30'),[175, 0, 60, 1]],[new Date('07 May 2020, 08:00  GMT+5:30'),[185, 0, 61, 2]],[new Date('08 May 2020, 08:00  GMT+5:30'),[219, 0, 62, 2]],[new Date('09 May 2020, 08:00  GMT+5:30'),[271, 0, 63, 2]],[new Date('10 May 2020, 08:00  GMT+5:30'),[294, 0, 63, 2]],[new Date('11 May 2020, 08:00  GMT+5:30'),[377, 0, 68, 3]],[new Date('12 May 2020, 08:00  GMT+5:30'),[414, 0, 85, 3]],[new Date('13 May 2020, 08:00  GMT+5:30'),[437, 0, 116, 3]],[new Date('14 May 2020, 08:00  GMT+5:30'),[538, 0, 143, 3]],[new Date('15 May 2020, 08:00  GMT+5:30'),[611, 0, 158, 3]],[new Date('16 May 2020, 08:00  GMT+5:30'),[672, 0, 166, 3]],[new Date('17 May 2020, 08:00  GMT+5:30'),[737, 0, 196, 3]],[new Date('18 May 2020, 08:00  GMT+5:30'),[828, 0, 220, 4]],[new Date('19 May 2020, 08:00  GMT+5:30'),[876, 0, 220, 4]],[new Date('20 May 2020, 08:00  GMT+5:30'),[978, 0, 277, 5]],[new Date('21 May 2020, 08:00  GMT+5:30'),[1052, 0, 307, 6]],[new Date('22 May 2020, 08:00  GMT+5:30'),[1103, 0, 393, 7]],[new Date('23 May 2020, 08:00  GMT+5:30'),[1189, 0, 436, 7]],[new Date('24 May 2020, 08:00  GMT+5:30'),[1269, 0, 497, 7]],[new Date('25 May 2020, 08:00  GMT+5:30'),[1336, 0, 550, 7]],[new Date('26 May 2020, 08:00  GMT+5:30'),[1438, 0, 649, 7]],[new Date('27 May 2020, 08:00  GMT+5:30'),[1517, 0, 733, 7]],[new Date('28 May 2020, 08:00  GMT+5:30'),[1593, 0, 733, 7]],[new Date('29 May 2020, 08:00  GMT+5:30'),[1660, 0, 887, 7]],[new Date('30 May 2020, 08:00  GMT+5:30'),[1723, 0, 887, 7]],[new Date('31 May 2020, 08:00  GMT+5:30'),[1819, 0, 1050, 7]],[new Date('01 June 2020, 08:00  GMT+5:30'),[1948, 0, 1126, 7]],[new Date('02 June 2020, 08:00  GMT+5:30'),[2104, 0, 1245, 7]],[new Date('03 June 2020, 08:00  GMT+5:30'),[2245, 0, 1325, 7]],[new Date('04 June 2020, 08:00  GMT+5:30'),[2388, 0, 1416, 7]],[new Date('05 June 2020, 08:00  GMT+5:30'),[2478, 0, 1416, 7]],[new Date('06 June 2020, 08:00  GMT+5:30'),[2608, 0, 1604, 8]],[new Date('07 June 2020, 08:00  GMT+5:30'),[2781, 0, 1716, 8]],[new Date('08 June 2020, 08:00 GMT+5:30'),[2856, 0, 1894, 9]],[new Date('09 June 2020, 08:00  GMT+5:30'),[2994, 0, 1993, 9]],[new Date('10 June 2020, 08:00  GMT+5:30'),[3140, 0, 2133, 9]],[new Date('11 June 2020, 08:00  GMT+5:30'),[3250, 0, 2282, 9]],[new Date('12 June 2020, 08:00  GMT+5:30'),[3386, 0, 2354, 9]],[new Date('13 June 2020, 08:00  GMT+5:30'),[3498, 0, 2474, 10]],[new Date('14 June 2020, 08:00  GMT+5:30'),[3723, 0, 2594, 10]],[new Date('15 June 2020, 08:00  GMT+5:30'),[3909, 0, 2708, 11]],[new Date('16 June 2020, 08:00  GMT+5:30'),[4055, 0, 2854, 11]],[new Date('17 June 2020, 08:00  GMT+5:30'),[4163, 0, 2974, 11]],[new Date('18 June 2020, 08:00  GMT+5:30'),[4338, 0, 3047, 11]],[new Date('19 June 2020, 08:00  GMT+5:30'),[4512, 0, 3144, 11]],[new Date('20 June 2020, 08:00  GMT+5:30'),[4677, 0, 3297, 11]],[new Date('21 June 2020, 08:00  GMT+5:30'),[4856, 0, 3534, 12]],[new Date('22 June 2020, 08:00  GMT+5:30'),[5160, 0, 3720, 14]],[new Date('23 June 2020, 08:00  GMT+5:30'),[5303, 0, 3863, 15]],[new Date('24	June 2020, 08:00  GMT+5:30'),[5470, 0, 3988, 17]],[new Date('25	June 2020, 08:00  GMT+5:30'),[5752, 0, 4123, 17]],[new Date('26	June 2020, 08:00  GMT+5:30'),[5962, 0, 4291, 17]],[new Date('27	June 2020, 08:00  GMT+5:30'),[6180, 0, 4422, 17]],[new Date('28	June 2020, 08:00  GMT+5:30'),[6350, 0, 4606, 18]],[new Date('29	June 2020, 08:00  GMT+5:30'),[6614, 0, 4743, 21]],[new Date('30	June 2020, 08:00  GMT+5:30'),[6859, 0, 4946, 23]],[new Date('01	July 2020, 08:00  GMT+5:30'),[7065, 0, 5189, 25]],[new Date('02	July 2020, 08:00  GMT+5:30'),[7316, 0, 5353, 25]],[new Date('03	July 2020, 08:00  GMT+5:30'),[7545, 0, 5502, 27]],[new Date('04	July 2020, 08:00  GMT+5:30'),[8106, 0, 5705, 29]],[new Date('05	July 2020, 08:00  GMT+5:30'),[8601, 0, 5934, 34]],[new Date('06	July 2020, 08:00  GMT+5:30'),[9070, 0, 6224, 36]],[new Date('07	July 2020, 08:00  GMT+5:30'),[9526, 0, 6486, 38]],[new Date('08	July 2020, 08:00  GMT+5:30'),[10097, 0, 6703, 42]],[new Date('09	July 2020, 08:00  GMT+5:30'),[10624, 0, 7006, 48]],[new Date('10	July 2020, 08:00  GMT+5:30'),[11201, 0, 7407, 52]],[new Date('11	July 2020, 08:00  GMT+5:30'),[11956, 0, 7972, 56]],[new Date('12	July 2020, 08:00  GMT+5:30'),[12526, 0, 8360, 61]],[new Date('13	July 2020, 08:00  GMT+5:30'),[13121, 0, 8750, 64]],[new Date('14	July 2020, 08:00  GMT+5:30'),[13737, 0, 9255, 70]],[new Date('15	July 2020, 08:00  GMT+5:30'),[14280, 0, 9864, 74]],[new Date('16	July 2020, 08:00  GMT+5:30'),[14898, 0, 10476, 77]],[new Date('17	July 2020, 08:00  GMT+5:30'),[15392, 0, 10877, 79]],[new Date('18	July 2020, 08:00  GMT+5:30'),[16110, 0, 11330, 83]],[new Date('19	July 2020, 08:00  GMT+5:30'),[16701, 0, 11937, 86]],[new Date('20	July 2020, 08:00  GMT+5:30'),[17437, 0, 12453, 91]],[new Date('21	July 2020, 08:00  GMT+5:30'),[18110, 0, 12910, 97]],[new Date('22	July 2020, 08:00  GMT+5:30'),[18757, 0, 13310, 103]],[new Date('23	July 2020, 08:00  GMT+5:30'),[19835, 0, 13750, 108]],[new Date('24	July 2020, 08:00  GMT+5:30'),[21099, 0, 14393, 114]]];