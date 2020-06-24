var rawData=[[new Date(2020,02,15,12,0),[ 6, 0,0,1]],[new Date(2020,02,15,17,0),[ 6, 0,0,1]],[new Date(2020,02,15,23,30),[ 6, 0,0,1]],[new Date(2020,02,16,16,0),[ 6, 0,0,1]],[new Date(2020,02,17,9,15),[ 8, 0,0,1]],[new Date(2020,02,17,17,15),[11, 0,0,1]],[new Date(2020,02,24,20,15),[37, 0, 3, 1]],[new Date(2020,02,25,9,15),[41, 0, 3, 1]],[new Date(2020,02,25,18,45),[41, 0, 3, 1]],[new Date(2020,02,26,10,15),[41, 0, 3, 1]],[new Date(2020,02,26,20,00),[55, 0, 3, 2]],[new Date(2020,02,27,9,15),[55, 0, 3, 2]],[new Date(2020,02,28,9,30),[55, 0, 3, 2]],[new Date(2020,02,28,17,45),[55, 0, 3, 2]],[new Date(2020,02,29,10,00),[76, 0, 5, 3]],[new Date(2020,02,29,19,30),[76, 0, 5, 3]],[new Date(2020,02,30,10,30),[80, 0, 5, 3]],[new Date(2020,02,30,21,30),[83, 0, 5, 3]],[new Date(2020,02,31,20,30),[83, 0, 5, 3]],[new Date('01 April 2020, 09:00 GMT+5:30'),[101, 0, 8, 3]],[new Date('01 April 2020, 19:30 GMT+5:30'),[101, 0, 8, 3]],[new Date('02 April 2020, 09:00 GMT+5:30'),[110, 0, 9, 3]],[new Date('02 April 2020, 18:00 GMT+5:30'),[110, 0, 9, 3]],[new Date('03 April 2020, 09:00 GMT+5:30'),[124, 0, 10, 3]],[new Date('03 April 2020, 18:00 GMT+5:30'),[124, 0, 10, 3]],[new Date('04 April 2020, 09:00 GMT+5:30'),[128, 0, 12, 3]],[new Date('04 April 2020, 18:00 GMT+5:30'),[128, 0, 12, 3]],[new Date('05 April 2020, 09:00 GMT+5:30'),[144, 0, 12, 4]],[new Date('05 April 2020, 18:00 GMT+5:30'),[144, 0, 12, 4]],[new Date('06 April 2020, 09:00 GMT+5:30'),[151, 0, 12, 4]],[new Date('06 April 2020, 18:00 GMT+5:30'),[151, 0, 12, 4]],[new Date('07 April 2020, 09:00 GMT+5:30'),[151, 0, 12, 4]],[new Date('07 April 2020, 18:00 GMT+5:30'),[175, 0, 25, 4]],[new Date('08 April 2020, 08:00 GMT+5:30'),[175, 0, 25, 4]],[new Date('08 April 2020, 17:00 GMT+5:30'),[175, 0, 25, 4]],[new Date('09 April 2020, 08:00 GMT+5:30'),[181, 0, 28, 5]],[new Date('09 April 2020, 17:00 GMT+5:30'),[181, 0, 28, 5]],[new Date('10 April 2020, 08:00 GMT+5:30'),[181, 0, 28, 5]],[new Date('10 April 2020, 17:00 GMT+5:30'),[197, 0, 30, 6]],[new Date('11 April 2020, 08:00 GMT+5:30'),[207, 0, 31, 6]],[new Date('11 April 2020, 17:00 GMT+5:30'),[214, 0, 37, 6]],[new Date('12 April 2020, 08:00 GMT+5:30'),[214, 0, 37, 6]],[new Date('12 April 2020, 17:00 GMT+5:30'),[226, 0, 37, 6]],[new Date('13 April 2020, 08:00 GMT+5:30'),[232, 0, 57, 6]],[new Date('13 April 2020, 17:00 GMT+5:30'),[247, 0, 59, 6]],[new Date('14 April 2020, 08:00 GMT+5:30'),[247, 0, 59, 6]],[new Date('14 April 2020, 17:00 GMT+5:30'),[258, 0, 65, 9]],[new Date('15 April 2020, 08:00 GMT+5:30'),[260, 0, 71, 10]],[new Date('15 April 2020, 17:00 GMT+5:30'),[277, 0, 75, 11]],[new Date('16 April 2020, 08:00 GMT+5:30'),[279, 0, 80, 12]],[new Date('16 April 2020, 17:00 GMT+5:30'),[315, 0, 82, 13]],[new Date('17 April 2020, 08:00 GMT+5:30'),[315, 0, 82, 13]],[new Date('17 April 2020, 17:00 GMT+5:30'),[353, 0, 82, 13]],[new Date('18 April 2020, 08:00 GMT+5:30'),[359, 0, 89, 13]],[new Date('18 April 2020, 17:00 GMT+5:30'),[371, 0, 92, 13]],[new Date('19 April 2020, 08:00 GMT+5:30'),[384, 0, 104, 14]],[new Date('19 April 2020, 17:00 GMT+5:30'),[384, 0, 104, 14]],[new Date('20 April 2020, 08:00 GMT+5:30'),[390, 0, 111, 16]],[new Date('20 April 2020, 17:00 GMT+5:30'),[395, 0, 111, 16]],[new Date('21 April 2020, 08:00 GMT+5:30'),[408, 0, 112, 16]],[new Date('21 April 2020, 17:00 GMT+5:30'),[415, 0, 114, 17]],[new Date('22 April 2020, 08:00 GMT+5:30'),[418, 0, 129, 17]],[new Date('22 April 2020, 17:00 GMT+5:30'),[425, 0, 129, 17]],[new Date('23 April 2020, 08:00 GMT+5:30'),[427, 0, 131, 17]],[new Date('23 April 2020, 17:00 GMT+5:30'),[443, 0, 141, 17]],[new Date('24 April 2020, 08:00 GMT+5:30'),[445, 0, 145, 17]],[new Date('24 April 2020, 17:00 GMT+5:30'),[463, 0, 150, 18]],[new Date('25 April 2020, 08:00 GMT+5:30'),[474, 0, 152, 18]],[new Date('25 April 2020, 17:00 GMT+5:30'),[489, 0, 153, 18]],[new Date('26 April 2020, 08:00 GMT+5:30'),[500, 0, 158, 18]],[new Date('26 April 2020, 17:00 GMT+5:30'),[501, 0, 177, 18]],[new Date('27 April 2020, 08:00 GMT+5:30'),[503, 0, 182, 19]],[new Date('27 April 2020, 17:00 GMT+5:30'),[511, 0, 188, 20]],[new Date('28 April 2020, 08:00 GMT+5:30'),[512, 0, 193, 20]],[new Date('28 April 2020, 17:00 GMT+5:30'),[520, 0, 198, 20]],[new Date('29 April 2020, 08:00 GMT+5:30'),[523, 0, 207, 20]],[new Date('29 April 2020, 17:00 GMT+5:30'),[532, 0, 215, 20]],[new Date('30 April 2020, 08:00 GMT+5:30'),[535, 0, 216, 21]],[new Date('30 April 2020, 17:00 GMT+5:30'),[557, 0, 223, 21]],[new Date('01 May 2020, 08:00 GMT+5:30'),[565, 0, 229, 21]],[new Date('01 May 2020, 17:00 GMT+5:30'),[576, 0, 235, 22]],[new Date('02 May 2020, 08:00 GMT+5:30'),[589, 0, 251, 22]],[new Date('02 May 2020, 17:00 GMT+5:30'),[598, 0, 255, 25]],[new Date('03 May 2020, 08:00 GMT+5:30'),[601, 0, 271, 25]],[new Date('03 May 2020, 17:00 GMT+5:30'),[606, 0, 282, 25]],[new Date('04 May 2020, 08:00 GMT+5:30'),[614, 0, 293, 25]],[new Date('04 May 2020, 17:00  GMT+5:30'),[642, 0, 304, 26]],[new Date('05 May 2020, 08:00  GMT+5:30'),[651, 0, 321, 27]],[new Date('05 May 2020, 17:00  GMT+5:30'),[659, 0, 324, 28]],[new Date('06 May 2020, 08:00  GMT+5:30'),[671, 0, 331, 29]],[new Date('07 May 2020, 08:00  GMT+5:30'),[693, 0, 354, 29]],[new Date('08 May 2020, 08:00  GMT+5:30'),[705, 0, 366, 30]],[new Date('09 May 2020, 08:00  GMT+5:30'),[753, 0, 376, 30]],[new Date('10 May 2020, 08:00  GMT+5:30'),[794, 0, 386, 30]],[new Date('11 May 2020, 08:00  GMT+5:30'),[848, 0, 424, 31]],[new Date('12 May 2020, 08:00  GMT+5:30'),[862, 0, 426, 31]],[new Date('13 May 2020, 08:00  GMT+5:30'),[925, 0, 433, 31]],[new Date('14 May 2020, 08:00  GMT+5:30'),[959, 0, 451, 33]],[new Date('15 May 2020, 08:00  GMT+5:30'),[987, 0, 460, 35]],[new Date('16 May 2020, 08:00  GMT+5:30'),[1056, 0, 480, 36]],[new Date('17 May 2020, 08:00  GMT+5:30'),[1092, 0, 496, 36]],[new Date('18 May 2020, 08:00  GMT+5:30'),[1147, 0, 509, 37]],[new Date('19 May 2020, 08:00  GMT+5:30'),[1246, 0, 530, 37]],[new Date('20 May 2020, 08:00  GMT+5:30'),[1397, 0, 544, 40]],[new Date('21 May 2020, 08:00  GMT+5:30'),[1462, 0, 556, 41]],[new Date('22 May 2020, 08:00  GMT+5:30'),[1605, 0, 571, 41]],[new Date('23 May 2020, 08:00  GMT+5:30'),[1743, 0, 597, 41]],[new Date('24 May 2020, 08:00  GMT+5:30'),[1959, 0, 608, 42]],[new Date('25 May 2020, 08:00  GMT+5:30'),[2089, 0, 654, 42]],[new Date('26 May 2020, 08:00  GMT+5:30'),[2182, 0, 705, 44]],[new Date('27 May 2020, 08:00  GMT+5:30'),[2283, 0, 748, 44]],[new Date('28 May 2020, 08:00  GMT+5:30'),[2418, 0, 781, 47]],[new Date('29 May 2020, 08:00  GMT+5:30'),[2533, 0, 834, 47]],[new Date('30 May 2020, 08:00  GMT+5:30'),[2781, 0, 894, 48]],[new Date('31 May 2020, 08:00  GMT+5:30'),[2922, 0, 997, 48]],[new Date('01 June 2020, 08:00  GMT+5:30'),[3221, 0, 1218, 51]],[new Date('02 June 2020, 08:00  GMT+5:30'),[3408, 0, 1328, 52]],[new Date('03 June 2020, 08:00  GMT+5:30'),[3796, 0, 1403, 52]],[new Date('04 June 2020, 08:00  GMT+5:30'),[4063, 0, 1514, 53]],[new Date('05 June 2020, 08:00  GMT+5:30'),[4320, 0, 1610, 57]],[new Date('06 June 2020, 08:00  GMT+5:30'),[4835, 0, 1688, 57]],[new Date('07 June 2020, 08:00  GMT+5:30'),[5213, 0, 1968, 59]],[new Date('08 June 2020, 08:00 GMT+5:30'),[5452, 0, 2132, 61]],[new Date('09 June 2020, 08:00  GMT+5:30'),[5760, 0, 2519, 64]],[new Date('10 June 2020, 08:00  GMT+5:30'),[5921, 0, 2604, 66]],[new Date('11 June 2020, 08:00  GMT+5:30'),[6041, 0, 2862, 69]],[new Date('12 June 2020, 08:00  GMT+5:30'),[6245, 0, 2977, 72]],[new Date('13 June 2020, 08:00  GMT+5:30'),[6516, 0, 3440, 79]],[new Date('14 June 2020, 08:00  GMT+5:30'),[6824, 0, 3648, 81]],[new Date('15 June 2020, 08:00  GMT+5:30'),[7000, 0, 3955, 86]],[new Date('16 June 2020, 08:00  GMT+5:30'),[7213, 0, 4135, 89]],[new Date('17 June 2020, 08:00  GMT+5:30'),[7530, 0, 4456, 94]],[new Date('18 June 2020, 08:00  GMT+5:30'),[7734, 0, 4804, 102]],[new Date('19 June 2020, 08:00  GMT+5:30'),[7944, 0, 4983, 114]],[new Date('20 June 2020, 08:00  GMT+5:30'),[8281, 0, 5210, 124]],[new Date('21 June 2020, 08:00  GMT+5:30'),[8697, 0, 5391, 132]],[new Date('22 June 2020, 08:00  GMT+5:30'),[9150, 0, 5618, 137]],[new Date('23 June 2020, 08:00  GMT+5:30'),[9399, 0, 5730, 142]],[new Date('24	June 2020, 08:00  GMT+5:30'),[9721, 0, 6004, 150]]];