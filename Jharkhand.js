var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[1, 0, 0, 0]],[new Date('02 April 2020, 09:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('02 April 2020, 18:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('03 April 2020, 09:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('03 April 2020, 18:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('04 April 2020, 09:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('04 April 2020, 18:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('05 April 2020, 09:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('05 April 2020, 18:00 GMT+5:30'),[3, 0, 0, 0]],[new Date('06 April 2020, 09:00 GMT+5:30'),[3, 0, 0, 0]],[new Date('06 April 2020, 18:00 GMT+5:30'),[4, 0, 0, 0]],[new Date('07 April 2020, 09:00 GMT+5:30'),[4, 0, 0, 0]],[new Date('07 April 2020, 18:00 GMT+5:30'),[4, 0, 0, 0]],[new Date('08 April 2020, 08:00 GMT+5:30'),[4, 0, 0, 0]],[new Date('08 April 2020, 17:00 GMT+5:30'),[4, 0, 0, 0]],[new Date('09 April 2020, 08:00 GMT+5:30'),[4, 0, 0, 0]],[new Date('09 April 2020, 17:00 GMT+5:30'),[13, 0, 0, 0]],[new Date('10 April 2020, 08:00 GMT+5:30'),[13, 0, 0, 1]],[new Date('10 April 2020, 17:00 GMT+5:30'),[13, 0, 0, 1]],[new Date('11 April 2020, 08:00 GMT+5:30'),[14, 0, 0, 1]],[new Date('11 April 2020, 17:00 GMT+5:30'),[17, 0, 0, 1]],[new Date('12 April 2020, 08:00 GMT+5:30'),[17, 0, 0, 1]],[new Date('12 April 2020, 17:00 GMT+5:30'),[17, 0, 0, 1]],[new Date('13 April 2020, 08:00 GMT+5:30'),[19, 0, 0, 2]],[new Date('13 April 2020, 17:00 GMT+5:30'),[19, 0, 0, 2]],[new Date('14 April 2020, 08:00 GMT+5:30'),[24, 0, 0, 2]],[new Date('14 April 2020, 17:00 GMT+5:30'),[24, 0, 0, 2]],[new Date('15 April 2020, 08:00 GMT+5:30'),[27, 0, 0, 2]],[new Date('15 April 2020, 17:00 GMT+5:30'),[27, 0, 0, 2]],[new Date('16 April 2020, 08:00 GMT+5:30'),[28, 0, 0, 2]],[new Date('16 April 2020, 17:00 GMT+5:30'),[28, 0, 0, 2]],[new Date('17 April 2020, 08:00 GMT+5:30'),[28, 0, 0, 2]],[new Date('17 April 2020, 17:00 GMT+5:30'),[29, 0, 0, 2]],[new Date('18 April 2020, 08:00 GMT+5:30'),[33, 0, 0, 2]],[new Date('18 April 2020, 17:00 GMT+5:30'),[33, 0, 0, 2]],[new Date('19 April 2020, 08:00 GMT+5:30'),[34, 0, 0, 2]],[new Date('19 April 2020, 17:00 GMT+5:30'),[35, 0, 0, 2]],[new Date('20 April 2020, 08:00 GMT+5:30'),[42, 0, 0, 2]],[new Date('20 April 2020, 17:00 GMT+5:30'),[42, 0, 0, 2]],[new Date('21 April 2020, 08:00 GMT+5:30'),[46, 0, 0, 2]],[new Date('21 April 2020, 17:00 GMT+5:30'),[46, 0, 0, 2]],[new Date('22 April 2020, 08:00 GMT+5:30'),[45, 0, 0, 3]],[new Date('22 April 2020, 17:00 GMT+5:30'),[45, 0, 0, 3]],[new Date('23 April 2020, 08:00 GMT+5:30'),[49, 0, 8, 3]],[new Date('23 April 2020, 17:00 GMT+5:30'),[49, 0, 8, 3]],[new Date('24 April 2020, 08:00 GMT+5:30'),[53, 0, 8, 3]],[new Date('24 April 2020, 17:00 GMT+5:30'),[55, 0, 8, 3]],[new Date('25 April 2020, 08:00 GMT+5:30'),[57, 0, 8, 3]],[new Date('25 April 2020, 17:00 GMT+5:30'),[59, 0, 9, 3]],[new Date('26 April 2020, 08:00 GMT+5:30'),[67, 0, 13, 3]],[new Date('26 April 2020, 17:00 GMT+5:30'),[67, 0, 13, 3]],[new Date('27 April 2020, 08:00 GMT+5:30'),[82, 0, 13, 3]],[new Date('27 April 2020, 17:00 GMT+5:30'),[82, 0, 13, 3]],[new Date('28 April 2020, 08:00 GMT+5:30'),[82, 0, 13, 3]],[new Date('28 April 2020, 17:00 GMT+5:30'),[103, 0, 17, 3]],[new Date('29 April 2020, 08:00 GMT+5:30'),[103, 0, 17, 3]],[new Date('29 April 2020, 17:00 GMT+5:30'),[105, 0, 19, 3]],[new Date('30 April 2020, 08:00 GMT+5:30'),[107, 0, 19, 3]],[new Date('30 April 2020, 17:00 GMT+5:30'),[107, 0, 19, 3]],[new Date('01 May 2020, 08:00 GMT+5:30'),[109, 0, 20, 3]],[new Date('01 May 2020, 17:00 GMT+5:30'),[111, 0, 20, 3]],[new Date('02 May 2020, 08:00 GMT+5:30'),[111, 0, 20, 3]],[new Date('02 May 2020, 17:00 GMT+5:30'),[111, 0, 20, 3]],[new Date('03 May 2020, 08:00 GMT+5:30'),[115, 0, 22, 3]],[new Date('03 May 2020, 17:00 GMT+5:30'),[115, 0, 22, 3]],[new Date('04 May 2020, 08:00 GMT+5:30'),[115, 0, 22, 3]],[new Date('04 May 2020, 17:00  GMT+5:30'),[115, 0, 22, 3]],[new Date('05 May 2020, 08:00  GMT+5:30'),[115, 0, 27, 3]],[new Date('05 May 2020, 17:00  GMT+5:30'),[115, 0, 27, 3]],[new Date('06 May 2020, 08:00  GMT+5:30'),[125, 0, 33, 3]],[new Date('07 May 2020, 08:00  GMT+5:30'),[127, 0, 37, 3]],[new Date('08 May 2020, 08:00  GMT+5:30'),[132, 0, 41, 3]],[new Date('09 May 2020, 08:00  GMT+5:30'),[132, 0, 52, 3]],[new Date('10 May 2020, 08:00  GMT+5:30'),[156, 0, 78, 3]],[new Date('11 May 2020, 08:00  GMT+5:30'),[157, 0, 78, 3]],[new Date('12 May 2020, 08:00  GMT+5:30'),[160, 0, 78, 3]],[new Date('13 May 2020, 08:00  GMT+5:30'),[172, 0, 79, 3]],[new Date('14 May 2020, 08:00  GMT+5:30'),[173, 0, 79, 3]],[new Date('15 May 2020, 08:00  GMT+5:30'),[197, 0, 87, 3]],[new Date('16 May 2020, 08:00  GMT+5:30'),[203, 0, 87, 3]],[new Date('17 May 2020, 08:00  GMT+5:30'),[217, 0, 113, 3]],[new Date('18 May 2020, 08:00  GMT+5:30'),[223, 0, 113, 3]],[new Date('19 May 2020, 08:00  GMT+5:30'),[223, 0, 113, 3]],[new Date('20 May 2020, 08:00  GMT+5:30'),[231, 0, 127, 3]],[new Date('21 May 2020, 08:00  GMT+5:30'),[231, 0, 127, 3]],[new Date('22 May 2020, 08:00  GMT+5:30'),[290, 0, 129, 3]],[new Date('23 May 2020, 08:00  GMT+5:30'),[308, 0, 136, 3]],[new Date('24 May 2020, 08:00  GMT+5:30'),[350, 0, 141, 4]],[new Date('25 May 2020, 08:00  GMT+5:30'),[370, 0, 148, 4]],[new Date('26 May 2020, 08:00  GMT+5:30'),[377, 0, 148, 4]],[new Date('27 May 2020, 08:00  GMT+5:30'),[426, 0, 175, 4]],[new Date('28 May 2020, 08:00  GMT+5:30'),[448, 0, 185, 4]],[new Date('29 May 2020, 08:00  GMT+5:30'),[469, 0, 212, 4]],[new Date('30 May 2020, 08:00  GMT+5:30'),[511, 0, 216, 5]],[new Date('31 May 2020, 08:00  GMT+5:30'),[563, 0, 256, 5]],[new Date('01 June 2020, 08:00  GMT+5:30'),[610, 0, 256, 5]],[new Date('02 June 2020, 08:00  GMT+5:30'),[659, 0, 296, 5]],[new Date('03 June 2020, 08:00  GMT+5:30'),[712, 0, 320, 5]],[new Date('04 June 2020, 08:00  GMT+5:30'),[752, 0, 321, 5]],[new Date('05 June 2020, 08:00  GMT+5:30'),[793, 0, 354, 6]],[new Date('06 June 2020, 08:00  GMT+5:30'),[881, 0, 410, 7]],[new Date('07 June 2020, 08:00  GMT+5:30'),[1000, 0, 473, 7]],[new Date('08 June 2020, 08:00 GMT+5:30'),[1099, 0, 490, 7]],[new Date('09 June 2020, 08:00  GMT+5:30'),[1256, 0, 519, 7]],[new Date('10 June 2020, 08:00  GMT+5:30'),[1411, 0, 559, 8]],[new Date('11 June 2020, 08:00  GMT+5:30'),[1489, 0, 592, 8]],[new Date('12 June 2020, 08:00  GMT+5:30'),[1599, 0, 630, 8]],[new Date('13 June 2020, 08:00  GMT+5:30'),[1617, 0, 672, 8]],[new Date('14 June 2020, 08:00  GMT+5:30'),[1711, 0, 816, 8]],[new Date('15 June 2020, 08:00  GMT+5:30'),[1745, 0, 905, 8]],[new Date('16 June 2020, 08:00  GMT+5:30'),[1763, 0, 905, 8]],[new Date('17 June 2020, 08:00  GMT+5:30'),[1839, 0, 1121, 9]],[new Date('18 June 2020, 08:00  GMT+5:30'),[1895, 0, 1151, 10]],[new Date('19 June 2020, 08:00  GMT+5:30'),[1920, 0, 1198, 11]],[new Date('20 June 2020, 08:00  GMT+5:30'),[1965, 0, 1332, 11]],[new Date('21 June 2020, 08:00  GMT+5:30'),[1965, 0, 1335, 11]],[new Date('22 June 2020, 08:00  GMT+5:30'),[2073, 0, 1406, 11]],[new Date('23 June 2020, 08:00  GMT+5:30'),[2137, 0, 1469, 11]],[new Date('24	June 2020, 08:00  GMT+5:30'),[2185, 0, 1520, 11]],[new Date('25	June 2020, 08:00  GMT+5:30'),[2207, 0, 1570, 11]],[new Date('26	June 2020, 08:00  GMT+5:30'),[2262, 0, 1605, 12]],[new Date('27	June 2020, 08:00  GMT+5:30'),[2290, 0, 1643, 12]],[new Date('28	June 2020, 08:00  GMT+5:30'),[2339, 0, 1724, 12]],[new Date('29	June 2020, 08:00  GMT+5:30'),[2364, 0, 1793, 12]],[new Date('30	June 2020, 08:00  GMT+5:30'),[2426, 0, 1845, 15]],[new Date('01	July 2020, 08:00  GMT+5:30'),[2490, 0, 1884, 15]],[new Date('02	July 2020, 08:00  GMT+5:30'),[2521, 0, 1931, 15]],[new Date('03	July 2020, 08:00  GMT+5:30'),[2584, 0, 1983, 15]],[new Date('04	July 2020, 08:00  GMT+5:30'),[2695, 0, 2001, 15]],[new Date('05	July 2020, 08:00  GMT+5:30'),[2739, 0, 2035, 17]],[new Date('06	July 2020, 08:00  GMT+5:30'),[2781, 0, 2045, 19]],[new Date('07	July 2020, 08:00  GMT+5:30'),[2847, 0, 2068, 20]],[new Date('08	July 2020, 08:00  GMT+5:30'),[2996, 0, 2104, 22]],[new Date('09	July 2020, 08:00  GMT+5:30'),[3096, 0, 2170, 22]],[new Date('10	July 2020, 08:00  GMT+5:30'),[3246, 0, 2208, 23]],[new Date('11	July 2020, 08:00  GMT+5:30'),[3419, 0, 2224, 23]],[new Date('12	July 2020, 08:00  GMT+5:30'),[3613, 0, 2243, 23]],[new Date('13	July 2020, 08:00  GMT+5:30'),[3756, 0, 2308, 30]],[new Date('14	July 2020, 08:00  GMT+5:30'),[3898, 0, 2351, 33]],[new Date('15	July 2020, 08:00  GMT+5:30'),[4091, 0, 2427, 36]],[new Date('16	July 2020, 08:00  GMT+5:30'),[4320, 0, 2485, 38]],[new Date('17	July 2020, 08:00  GMT+5:30'),[4624, 0, 2513, 42]]];