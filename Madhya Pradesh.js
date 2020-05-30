var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date(2020,02,24,20,15),[7, 0, 0, 0]],[new Date(2020,02,25,9,15),[9, 0, 0, 0]],[new Date(2020,02,25,18,45),[14, 0, 0, 0]],[new Date(2020,02,26,10,15),[15, 0, 0, 1]],[new Date(2020,02,26,20,00),[20, 0, 0, 1]],[new Date(2020,02,27,9,15),[20, 0, 0, 1]],[new Date(2020,02,28,9,30),[30, 0, 0, 2]],[new Date(2020,02,28,17,45),[30, 0, 0, 2]],[new Date(2020,02,29,10,00),[30, 0, 0, 2]],[new Date(2020,02,29,19,30),[30, 0, 0, 2]],[new Date(2020,02,30,10,30),[33, 0, 0, 2]],[new Date(2020,02,30,21,30),[47, 0, 0, 3]],[new Date(2020,02,31,20,30),[47, 0, 0, 3]],[new Date('01 April 2020, 09:00 GMT+5:30'),[47, 0, 0, 3]],[new Date('01 April 2020, 19:30 GMT+5:30'),[66, 0, 0, 3]],[new Date('02 April 2020, 09:00 GMT+5:30'),[99, 0, 0, 6]],[new Date('02 April 2020, 18:00 GMT+5:30'),[99, 0, 0, 6]],[new Date('03 April 2020, 09:00 GMT+5:30'),[99, 0, 0, 6]],[new Date('03 April 2020, 18:00 GMT+5:30'),[104, 0, 0, 6]],[new Date('04 April 2020, 09:00 GMT+5:30'),[104, 0, 0, 6]],[new Date('04 April 2020, 18:00 GMT+5:30'),[104, 0, 0, 6]],[new Date('05 April 2020, 09:00 GMT+5:30'),[104, 0, 0, 6]],[new Date('05 April 2020, 18:00 GMT+5:30'),[165, 0, 0, 9]],[new Date('06 April 2020, 09:00 GMT+5:30'),[165, 0, 0, 9]],[new Date('06 April 2020, 18:00 GMT+5:30'),[165, 0, 0, 9]],[new Date('07 April 2020, 09:00 GMT+5:30'),[165, 0, 0, 9]],[new Date('07 April 2020, 18:00 GMT+5:30'),[229, 0, 0, 13]],[new Date('08 April 2020, 08:00 GMT+5:30'),[229, 0, 0, 13]],[new Date('08 April 2020, 17:00 GMT+5:30'),[229, 0, 0, 13]],[new Date('09 April 2020, 08:00 GMT+5:30'),[229, 0, 0, 13]],[new Date('09 April 2020, 17:00 GMT+5:30'),[259, 0, 0, 16]],[new Date('10 April 2020, 08:00 GMT+5:30'),[259, 0, 0, 16]],[new Date('10 April 2020, 17:00 GMT+5:30'),[259, 0, 0, 16]],[new Date('11 April 2020, 08:00 GMT+5:30'),[435, 0, 0, 33]],[new Date('11 April 2020, 17:00 GMT+5:30'),[443, 0, 0, 33]],[new Date('12 April 2020, 08:00 GMT+5:30'),[532, 0, 0, 36]],[new Date('12 April 2020, 17:00 GMT+5:30'),[564, 0, 0, 36]],[new Date('13 April 2020, 08:00 GMT+5:30'),[564, 0, 0, 36]],[new Date('13 April 2020, 17:00 GMT+5:30'),[604, 0, 44, 43]],[new Date('14 April 2020, 08:00 GMT+5:30'),[604, 0, 44, 43]],[new Date('14 April 2020, 17:00 GMT+5:30'),[730, 0, 51, 50]],[new Date('15 April 2020, 08:00 GMT+5:30'),[730, 0, 51, 50]],[new Date('15 April 2020, 17:00 GMT+5:30'),[987, 0, 64, 53]],[new Date('16 April 2020, 08:00 GMT+5:30'),[987, 0, 64, 53]],[new Date('16 April 2020, 17:00 GMT+5:30'),[1120, 0, 64, 53]],[new Date('17 April 2020, 08:00 GMT+5:30'),[1120, 0, 64, 53]],[new Date('17 April 2020, 17:00 GMT+5:30'),[1308, 0, 65, 57]],[new Date('18 April 2020, 08:00 GMT+5:30'),[1310, 0, 69, 69]],[new Date('18 April 2020, 17:00 GMT+5:30'),[1355, 0, 69, 69]],[new Date('19 April 2020, 08:00 GMT+5:30'),[1407, 0, 127, 70]],[new Date('19 April 2020, 17:00 GMT+5:30'),[1407, 0, 127, 70]],[new Date('20 April 2020, 08:00 GMT+5:30'),[1407, 0, 127, 70]],[new Date('20 April 2020, 17:00 GMT+5:30'),[1485, 0, 127, 74]],[new Date('21 April 2020, 08:00 GMT+5:30'),[1485, 0, 127, 74]],[new Date('21 April 2020, 17:00 GMT+5:30'),[1540, 0, 127, 76]],[new Date('22 April 2020, 08:00 GMT+5:30'),[1552, 0, 148, 76]],[new Date('22 April 2020, 17:00 GMT+5:30'),[1592, 0, 148, 80]],[new Date('23 April 2020, 08:00 GMT+5:30'),[1592, 0, 148, 80]],[new Date('23 April 2020, 17:00 GMT+5:30'),[1695, 0, 148, 81]],[new Date('24 April 2020, 08:00 GMT+5:30'),[1699, 0, 203, 83]],[new Date('24 April 2020, 17:00 GMT+5:30'),[1852, 0, 203, 83]],[new Date('25 April 2020, 08:00 GMT+5:30'),[1852, 0, 210, 92]],[new Date('25 April 2020, 17:00 GMT+5:30'),[1952, 0, 210, 92]],[new Date('26 April 2020, 08:00 GMT+5:30'),[2096, 0, 210, 99]],[new Date('26 April 2020, 17:00 GMT+5:30'),[2096, 0, 210, 99]],[new Date('27 April 2020, 08:00 GMT+5:30'),[2096, 0, 302, 103]],[new Date('27 April 2020, 17:00 GMT+5:30'),[2168, 0, 302, 106]],[new Date('28 April 2020, 08:00 GMT+5:30'),[2168, 0, 302, 110]],[new Date('28 April 2020, 17:00 GMT+5:30'),[2368, 0, 361, 113]],[new Date('29 April 2020, 08:00 GMT+5:30'),[2387, 0, 377, 120]],[new Date('29 April 2020, 17:00 GMT+5:30'),[2561, 0, 377, 119]],[new Date('30 April 2020, 08:00 GMT+5:30'),[2561, 0, 461, 129]],[new Date('30 April 2020, 17:00 GMT+5:30'),[2660, 0, 461, 130]],[new Date('01 May 2020, 08:00 GMT+5:30'),[2660, 0, 482, 137]],[new Date('01 May 2020, 17:00 GMT+5:30'),[2719, 0, 482, 137]],[new Date('02 May 2020, 08:00 GMT+5:30'),[2719, 0, 524, 145]],[new Date('02 May 2020, 17:00 GMT+5:30'),[2719, 0, 524, 145]],[new Date('03 May 2020, 08:00 GMT+5:30'),[2846, 0, 624, 151]],[new Date('03 May 2020, 17:00 GMT+5:30'),[2846, 0, 798, 156]],[new Date('04 May 2020, 08:00 GMT+5:30'),[2846, 0, 798, 156]],[new Date('04 May 2020, 17:00  GMT+5:30'),[2942, 0, 798, 165]],[new Date('05 May 2020, 08:00  GMT+5:30'),[2942, 0, 798, 165]],[new Date('05 May 2020, 17:00  GMT+5:30'),[3049, 0, 1000, 176]],[new Date('06 May 2020, 08:00  GMT+5:30'),[3049, 0, 1000, 176]],[new Date('07 May 2020, 08:00  GMT+5:30'),[3138, 0, 1099, 185]],[new Date('08 May 2020, 08:00  GMT+5:30'),[3252, 0, 1231, 193]],[new Date('09 May 2020, 08:00  GMT+5:30'),[3341, 0, 1349, 200]],[new Date('10 May 2020, 08:00  GMT+5:30'),[3614, 0, 1676, 215]],[new Date('11 May 2020, 08:00  GMT+5:30'),[3614, 0, 1676, 215]],[new Date('12 May 2020, 08:00  GMT+5:30'),[3785, 0, 1747, 221]],[new Date('13 May 2020, 08:00  GMT+5:30'),[3986, 0, 1860, 225]],[new Date('14 May 2020, 08:00  GMT+5:30'),[4173, 0, 2004, 232]],[new Date('15 May 2020, 08:00  GMT+5:30'),[4426, 0, 2171, 237]],[new Date('16 May 2020, 08:00  GMT+5:30'),[4595, 0, 2283, 239]],[new Date('17 May 2020, 08:00  GMT+5:30'),[4789, 0, 2315, 243]],[new Date('18 May 2020, 08:00  GMT+5:30'),[4977, 0, 2403, 248]],[new Date('19 May 2020, 08:00  GMT+5:30'),[5236, 0, 2435, 252]],[new Date('20 May 2020, 08:00  GMT+5:30'),[5465, 0, 2630, 258]],[new Date('21 May 2020, 08:00  GMT+5:30'),[5735, 0, 2733, 267]],[new Date('22 May 2020, 08:00  GMT+5:30'),[5981, 0, 2843, 270]],[new Date('23 May 2020, 08:00  GMT+5:30'),[6170, 0, 3089, 272]],[new Date('24 May 2020, 08:00  GMT+5:30'),[6371, 0, 3267, 281]],[new Date('25 May 2020, 08:00  GMT+5:30'),[6665, 0, 3408, 290]],[new Date('26 May 2020, 08:00  GMT+5:30'),[6859, 0, 3571, 300]],[new Date('27 May 2020, 08:00  GMT+5:30'),[7024, 0, 3689, 305]],[new Date('28 May 2020, 08:00  GMT+5:30'),[7261, 0, 3927, 313]],[new Date('29 May 2020, 08:00  GMT+5:30'),[7453, 0, 4050, 321]],[new Date('30 May 2020, 08:00  GMT+5:30'),[7645, 0, 4269, 334]]];