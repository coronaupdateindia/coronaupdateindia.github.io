var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date(2020,02,24,20,15),[1, 0, 0, 0]],[new Date(2020,02,25,9,15),[1, 0, 0, 0]],[new Date(2020,02,25,18,45),[1, 0, 0, 0]],[new Date(2020,02,26,10,15),[1, 0, 0, 0]],[new Date(2020,02,26,20,00),[1, 0, 0, 0]],[new Date(2020,02,27,9,15),[1, 0, 0, 0]],[new Date(2020,02,28,9,30),[1, 0, 0, 0]],[new Date(2020,02,28,17,45),[1, 0, 0, 0]],[new Date(2020,02,29,10,00),[1, 0, 0, 0]],[new Date(2020,02,29,19,30),[1, 0, 0, 0]],[new Date(2020,02,30,10,30),[1, 0, 0, 0]],[new Date(2020,02,30,21,30),[1, 0, 0, 0]],[new Date(2020,02,31,20,30),[1, 0, 0, 0]],[new Date('01 April 2020, 09:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[3, 0, 1, 0]],[new Date('02 April 2020, 09:00 GMT+5:30'),[3, 0, 1, 0]],[new Date('02 April 2020, 18:00 GMT+5:30'),[3, 0, 1, 0]],[new Date('03 April 2020, 09:00 GMT+5:30'),[3, 0, 1, 0]],[new Date('03 April 2020, 18:00 GMT+5:30'),[5, 0, 1, 0]],[new Date('04 April 2020, 09:00 GMT+5:30'),[5, 0, 1, 0]],[new Date('04 April 2020, 18:00 GMT+5:30'),[5, 0, 1, 0]],[new Date('05 April 2020, 09:00 GMT+5:30'),[5, 0, 1, 0]],[new Date('05 April 2020, 18:00 GMT+5:30'),[5, 0, 1, 0]],[new Date('06 April 2020, 09:00 GMT+5:30'),[5, 0, 1, 0]],[new Date('06 April 2020, 18:00 GMT+5:30'),[5, 0, 1, 0]],[new Date('07 April 2020, 09:00 GMT+5:30'),[5, 0, 1, 0]],[new Date('07 April 2020, 18:00 GMT+5:30'),[5, 0, 1, 0]],[new Date('08 April 2020, 08:00 GMT+5:30'),[5, 0, 1, 0]],[new Date('08 April 2020, 17:00 GMT+5:30'),[5, 0, 1, 0]],[new Date('09 April 2020, 08:00 GMT+5:30'),[5, 0, 1, 0]],[new Date('09 April 2020, 17:00 GMT+5:30'),[5, 0, 1, 0]],[new Date('10 April 2020, 08:00 GMT+5:30'),[5, 0, 1, 0]],[new Date('10 April 2020, 17:00 GMT+5:30'),[5, 0, 1, 0]],[new Date('11 April 2020, 08:00 GMT+5:30'),[5, 0, 1, 0]],[new Date('11 April 2020, 17:00 GMT+5:30'),[7, 0, 1, 0]],[new Date('12 April 2020, 08:00 GMT+5:30'),[7, 0, 1, 0]],[new Date('12 April 2020, 17:00 GMT+5:30'),[7, 0, 1, 0]],[new Date('13 April 2020, 08:00 GMT+5:30'),[7, 0, 1, 0]],[new Date('13 April 2020, 17:00 GMT+5:30'),[7, 0, 1, 0]],[new Date('14 April 2020, 08:00 GMT+5:30'),[7, 0, 1, 0]],[new Date('14 April 2020, 17:00 GMT+5:30'),[7, 0, 1, 0]],[new Date('15 April 2020, 08:00 GMT+5:30'),[7, 0, 1, 0]],[new Date('15 April 2020, 17:00 GMT+5:30'),[7, 0, 1, 0]],[new Date('16 April 2020, 08:00 GMT+5:30'),[7, 0, 1, 0]],[new Date('16 April 2020, 17:00 GMT+5:30'),[7, 0, 1, 0]],[new Date('17 April 2020, 08:00 GMT+5:30'),[7, 0, 1, 0]],[new Date('17 April 2020, 17:00 GMT+5:30'),[7, 0, 1, 0]],[new Date('18 April 2020, 08:00 GMT+5:30'),[7, 0, 1, 0]],[new Date('18 April 2020, 17:00 GMT+5:30'),[7, 0, 3, 0]],[new Date('19 April 2020, 08:00 GMT+5:30'),[7, 0, 3, 0]],[new Date('19 April 2020, 17:00 GMT+5:30'),[7, 0, 3, 0]],[new Date('20 April 2020, 08:00 GMT+5:30'),[7, 0, 3, 0]],[new Date('20 April 2020, 17:00 GMT+5:30'),[7, 0, 3, 0]],[new Date('21 April 2020, 08:00 GMT+5:30'),[7, 0, 3, 0]],[new Date('21 April 2020, 17:00 GMT+5:30'),[7, 0, 3, 0]],[new Date('22 April 2020, 08:00 GMT+5:30'),[7, 0, 3, 0]],[new Date('22 April 2020, 17:00 GMT+5:30'),[7, 0, 3, 0]],[new Date('23 April 2020, 08:00 GMT+5:30'),[7, 0, 3, 0]],[new Date('23 April 2020, 17:00 GMT+5:30'),[7, 0, 3, 0]],[new Date('24 April 2020, 08:00 GMT+5:30'),[7, 0, 3, 0]],[new Date('24 April 2020, 17:00 GMT+5:30'),[7, 0, 3, 0]],[new Date('25 April 2020, 08:00 GMT+5:30'),[7, 0, 3, 0]],[new Date('25 April 2020, 17:00 GMT+5:30'),[7, 0, 3, 0]],[new Date('26 April 2020, 08:00 GMT+5:30'),[7, 0, 3, 0]],[new Date('26 April 2020, 17:00 GMT+5:30'),[7, 0, 3, 0]],[new Date('27 April 2020, 08:00 GMT+5:30'),[7, 0, 3, 0]],[new Date('27 April 2020, 17:00 GMT+5:30'),[8, 0, 3, 0]],[new Date('28 April 2020, 08:00 GMT+5:30'),[8, 0, 3, 0]],[new Date('28 April 2020, 17:00 GMT+5:30'),[8, 0, 3, 0]],[new Date('29 April 2020, 08:00 GMT+5:30'),[8, 0, 3, 0]],[new Date('29 April 2020, 17:00 GMT+5:30'),[8, 0, 3, 0]],[new Date('30 April 2020, 08:00 GMT+5:30'),[8, 0, 3, 0]],[new Date('30 April 2020, 17:00 GMT+5:30'),[8, 0, 5, 0]],[new Date('01 May 2020, 08:00 GMT+5:30'),[8, 0, 5, 0]],[new Date('01 May 2020, 17:00 GMT+5:30'),[8, 0, 5, 0]],[new Date('02 May 2020, 08:00 GMT+5:30'),[8, 0, 5, 0]],[new Date('02 May 2020, 17:00 GMT+5:30'),[8, 0, 5, 0]],[new Date('03 May 2020, 08:00 GMT+5:30'),[8, 0, 5, 0]],[new Date('03 May 2020, 17:00 GMT+5:30'),[8, 0, 5, 0]],[new Date('04 May 2020, 08:00 GMT+5:30'),[8, 0, 5, 0]],[new Date('04 May 2020, 17:00  GMT+5:30'),[8, 0, 5, 0]],[new Date('05 May 2020, 08:00  GMT+5:30'),[8, 0, 5, 0]],[new Date('05 May 2020, 17:00  GMT+5:30'),[9, 0, 6, 0]],[new Date('06 May 2020, 08:00  GMT+5:30'),[9, 0, 6, 0]],[new Date('07 May 2020, 08:00  GMT+5:30'),[9, 0, 6, 0]],[new Date('08 May 2020, 08:00  GMT+5:30'),[9, 0, 6, 0]],[new Date('09 May 2020, 08:00  GMT+5:30'),[9, 0, 6, 0]],[new Date('10 May 2020, 08:00  GMT+5:30'),[9, 0, 6, 0]],[new Date('11 May 2020, 08:00  GMT+5:30'),[9, 0, 6, 0]],[new Date('12 May 2020, 08:00  GMT+5:30'),[12, 0, 6, 0]],[new Date('13 May 2020, 08:00  GMT+5:30'),[13, 0, 9, 1]],[new Date('14 May 2020, 08:00  GMT+5:30'),[13, 0, 9, 1]],[new Date('15 May 2020, 08:00  GMT+5:30'),[13, 0, 9, 1]],[new Date('16 May 2020, 08:00  GMT+5:30'),[13, 0, 9, 1]],[new Date('17 May 2020, 08:00  GMT+5:30'),[13, 0, 9, 1]],[new Date('18 May 2020, 08:00  GMT+5:30'),[13, 0, 9, 1]],[new Date('19 May 2020, 08:00  GMT+5:30'),[18, 0, 9, 1]],[new Date('20 May 2020, 08:00  GMT+5:30'),[18, 0, 9, 1]],[new Date('21 May 2020, 08:00  GMT+5:30'),[18, 0, 9, 0]],[new Date('22 May 2020, 08:00  GMT+5:30'),[20, 0, 10, 0]],[new Date('23 May 2020, 08:00  GMT+5:30'),[26, 0, 10, 0]],[new Date('24 May 2020, 08:00  GMT+5:30'),[26, 0, 10, 0]],[new Date('25 May 2020, 08:00  GMT+5:30'),[41, 0, 12, 0]],[new Date('26 May 2020, 08:00  GMT+5:30'),[41, 0, 12, 0]],[new Date('27 May 2020, 08:00  GMT+5:30'),[46, 0, 12, 0]],[new Date('28 May 2020, 08:00  GMT+5:30'),[46, 0, 12, 0]],[new Date('29 May 2020, 08:00  GMT+5:30'),[51, 0, 14, 0]],[new Date('30 May 2020, 08:00  GMT+5:30'),[51, 0, 14, 0]],[new Date('31 May 2020, 08:00  GMT+5:30'),[51, 0, 14, 0]],[new Date('01 June 2020, 08:00  GMT+5:30'),[70, 0, 25, 0]],[new Date('02 June 2020, 08:00  GMT+5:30'),[74, 0, 25, 0]],[new Date('03 June 2020, 08:00  GMT+5:30'),[82, 0, 25, 0]],[new Date('04 June 2020, 08:00  GMT+5:30'),[82, 0, 25, 0]],[new Date('05 June 2020, 08:00  GMT+5:30'),[82, 0, 25, 0]],[new Date('06 June 2020, 08:00  GMT+5:30'),[99, 0, 36, 0]],[new Date('07 June 2020, 08:00  GMT+5:30'),[99, 0, 36, 0]],[new Date('08 June 2020, 08:00 GMT+5:30'),[99, 0, 36, 0]],[new Date('09 June 2020, 08:00  GMT+5:30'),[127, 0, 52, 0]],[new Date('10 June 2020, 08:00  GMT+5:30'),[127, 0, 52, 0]],[new Date('11 June 2020, 08:00  GMT+5:30'),[127, 0, 53, 0]],[new Date('12 June 2020, 08:00  GMT+5:30'),[157, 0, 67, 2]],[new Date('13 June 2020, 08:00  GMT+5:30'),[157, 0, 67, 2]],[new Date('14 June 2020, 08:00  GMT+5:30'),[176, 0, 82, 2]],[new Date('15 June 2020, 08:00  GMT+5:30'),[194, 0, 91, 5]],[new Date('16 June 2020, 08:00  GMT+5:30'),[202, 0, 95, 5]],[new Date('17 June 2020, 08:00  GMT+5:30'),[216, 0, 99, 6]],[new Date('18 June 2020, 08:00  GMT+5:30'),[245, 0, 109, 7]],[new Date('19 June 2020, 08:00  GMT+5:30'),[271, 0, 109, 7]],[new Date('20 June 2020, 08:00  GMT+5:30'),[286, 0, 118, 7]],[new Date('21 June 2020, 08:00  GMT+5:30'),[286, 0, 118, 7]],[new Date('22 June 2020, 08:00  GMT+5:30'),[366, 0, 140, 8]],[new Date('23 June 2020, 08:00  GMT+5:30'),[383, 0, 149, 8]],[new Date('24	June 2020, 08:00  GMT+5:30'),[402, 0, 165, 9]],[new Date('25	June 2020, 08:00  GMT+5:30'),[461, 0, 176, 9]],[new Date('26	June 2020, 08:00  GMT+5:30'),[502, 0, 187, 9]],[new Date('27	June 2020, 08:00  GMT+5:30'),[502, 0, 187, 9]],[new Date('28	June 2020, 08:00  GMT+5:30'),[619, 0, 221, 10]],[new Date('29	June 2020, 08:00  GMT+5:30'),[619, 0, 221, 10]],[new Date('30	June 2020, 08:00  GMT+5:30'),[619, 0, 221, 10]],[new Date('01	July 2020, 08:00  GMT+5:30'),[714, 0, 272, 12]],[new Date('02	July 2020, 08:00  GMT+5:30'),[714, 0, 272, 12]],[new Date('03	July 2020, 08:00  GMT+5:30'),[802, 0, 331, 12]],[new Date('04	July 2020, 08:00  GMT+5:30'),[802, 0, 331, 12]],[new Date('05	July 2020, 08:00  GMT+5:30'),[802, 0, 331, 12]],[new Date('06	July 2020, 08:00  GMT+5:30'),[802, 0, 331, 12]],[new Date('07	July 2020, 08:00  GMT+5:30'),[802, 0, 331, 12]],[new Date('08	July 2020, 08:00  GMT+5:30'),[930, 0, 434, 14]],[new Date('09	July 2020, 08:00  GMT+5:30'),[1008, 0, 480, 14]],[new Date('10	July 2020, 08:00  GMT+5:30'),[1151, 0, 584, 14]],[new Date('11	July 2020, 08:00  GMT+5:30'),[1272, 0, 637, 17]],[new Date('12	July 2020, 08:00  GMT+5:30'),[1337, 0, 690, 18]],[new Date('13	July 2020, 08:00  GMT+5:30'),[1418, 0, 739, 18]],[new Date('14	July 2020, 08:00  GMT+5:30'),[1468, 0, 785, 18]],[new Date('15	July 2020, 08:00  GMT+5:30'),[1531, 0, 829, 18]],[new Date('16	July 2020, 08:00  GMT+5:30'),[1596, 0, 889, 21]]];