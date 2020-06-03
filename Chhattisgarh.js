var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date(2020,02,24,20,15),[1, 0, 0, 0]],[new Date(2020,02,25,9,15),[1, 0, 0, 0]],[new Date(2020,02,25,18,45),[1, 0, 0, 0]],[new Date(2020,02,26,10,15),[3, 0, 0, 0]],[new Date(2020,02,26,20,00),[6, 0, 0, 0]],[new Date(2020,02,27,9,15),[6, 0, 0, 0]],[new Date(2020,02,28,9,30),[6, 0, 0, 0]],[new Date(2020,02,28,17,45),[6, 0, 0, 0]],[new Date(2020,02,29,10,00),[6, 0, 0, 0]],[new Date(2020,02,29,19,30),[7, 0, 0, 0]],[new Date(2020,02,30,10,30),[7, 0, 0, 0]],[new Date(2020,02,30,21,30),[7, 0, 0, 0]],[new Date(2020,02,31,20,30),[8, 0, 0, 0]],[new Date('01 April 2020, 09:00 GMT+5:30'),[9, 0, 0, 0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[9, 0, 2, 0]],[new Date('02 April 2020, 09:00 GMT+5:30'),[9, 0, 2, 0]],[new Date('02 April 2020, 18:00 GMT+5:30'),[9, 0, 2, 0]],[new Date('03 April 2020, 09:00 GMT+5:30'),[9, 0, 2, 0]],[new Date('03 April 2020, 18:00 GMT+5:30'),[9, 0, 3, 0]],[new Date('04 April 2020, 09:00 GMT+5:30'),[9, 0, 3, 0]],[new Date('04 April 2020, 18:00 GMT+5:30'),[9, 0, 3, 0]],[new Date('05 April 2020, 09:00 GMT+5:30'),[9, 0, 3, 0]],[new Date('05 April 2020, 18:00 GMT+5:30'),[9, 0, 3, 0]],[new Date('06 April 2020, 09:00 GMT+5:30'),[9, 0, 3, 0]],[new Date('06 April 2020, 18:00 GMT+5:30'),[10, 0, 8, 0]],[new Date('07 April 2020, 09:00 GMT+5:30'),[10, 0, 8, 0]],[new Date('07 April 2020, 18:00 GMT+5:30'),[10, 0, 9, 0]],[new Date('08 April 2020, 08:00 GMT+5:30'),[10, 0, 9, 0]],[new Date('08 April 2020, 17:00 GMT+5:30'),[10, 0, 9, 0]],[new Date('09 April 2020, 08:00 GMT+5:30'),[10, 0, 9, 0]],[new Date('09 April 2020, 17:00 GMT+5:30'),[10, 0, 9, 0]],[new Date('10 April 2020, 08:00 GMT+5:30'),[10, 0, 9, 0]],[new Date('10 April 2020, 17:00 GMT+5:30'),[10, 0, 9, 0]],[new Date('11 April 2020, 08:00 GMT+5:30'),[18, 0, 9, 0]],[new Date('11 April 2020, 17:00 GMT+5:30'),[18, 0, 9, 0]],[new Date('12 April 2020, 08:00 GMT+5:30'),[18, 0, 9, 0]],[new Date('12 April 2020, 17:00 GMT+5:30'),[25, 0, 10, 0]],[new Date('13 April 2020, 08:00 GMT+5:30'),[31, 0, 10, 0]],[new Date('13 April 2020, 17:00 GMT+5:30'),[31, 0, 10, 0]],[new Date('14 April 2020, 08:00 GMT+5:30'),[31, 0, 10, 0]],[new Date('14 April 2020, 17:00 GMT+5:30'),[31, 0, 10, 0]],[new Date('15 April 2020, 08:00 GMT+5:30'),[33, 0, 13, 0]],[new Date('15 April 2020, 17:00 GMT+5:30'),[33, 0, 13, 0]],[new Date('16 April 2020, 08:00 GMT+5:30'),[33, 0, 17, 0]],[new Date('16 April 2020, 17:00 GMT+5:30'),[33, 0, 17, 0]],[new Date('17 April 2020, 08:00 GMT+5:30'),[33, 0, 23, 0]],[new Date('17 April 2020, 17:00 GMT+5:30'),[36, 0, 23, 0]],[new Date('18 April 2020, 08:00 GMT+5:30'),[36, 0, 24, 0]],[new Date('18 April 2020, 17:00 GMT+5:30'),[36, 0, 24, 0]],[new Date('19 April 2020, 08:00 GMT+5:30'),[36, 0, 24, 0]],[new Date('19 April 2020, 17:00 GMT+5:30'),[36, 0, 24, 0]],[new Date('20 April 2020, 08:00 GMT+5:30'),[36, 0, 25, 0]],[new Date('20 April 2020, 17:00 GMT+5:30'),[36, 0, 25, 0]],[new Date('21 April 2020, 08:00 GMT+5:30'),[36, 0, 25, 0]],[new Date('21 April 2020, 17:00 GMT+5:30'),[36, 0, 25, 0]],[new Date('22 April 2020, 08:00 GMT+5:30'),[36, 0, 26, 0]],[new Date('22 April 2020, 17:00 GMT+5:30'),[36, 0, 26, 0]],[new Date('23 April 2020, 08:00 GMT+5:30'),[36, 0, 26, 0]],[new Date('23 April 2020, 17:00 GMT+5:30'),[36, 0, 28, 0]],[new Date('24 April 2020, 08:00 GMT+5:30'),[36, 0, 28, 0]],[new Date('24 April 2020, 17:00 GMT+5:30'),[36, 0, 28, 0]],[new Date('25 April 2020, 08:00 GMT+5:30'),[36, 0, 30, 0]],[new Date('25 April 2020, 17:00 GMT+5:30'),[36, 0, 30, 0]],[new Date('26 April 2020, 08:00 GMT+5:30'),[37, 0, 32, 0]],[new Date('26 April 2020, 17:00 GMT+5:30'),[37, 0, 32, 0]],[new Date('27 April 2020, 08:00 GMT+5:30'),[37, 0, 32, 0]],[new Date('27 April 2020, 17:00 GMT+5:30'),[37, 0, 32, 0]],[new Date('28 April 2020, 08:00 GMT+5:30'),[37, 0, 32, 0]],[new Date('28 April 2020, 17:00 GMT+5:30'),[37, 0, 32, 0]],[new Date('29 April 2020, 08:00 GMT+5:30'),[38, 0, 34, 0]],[new Date('29 April 2020, 17:00 GMT+5:30'),[38, 0, 34, 0]],[new Date('30 April 2020, 08:00 GMT+5:30'),[38, 0, 34, 0]],[new Date('30 April 2020, 17:00 GMT+5:30'),[38, 0, 36, 0]],[new Date('01 May 2020, 08:00 GMT+5:30'),[40, 0, 36, 0]],[new Date('01 May 2020, 17:00 GMT+5:30'),[40, 0, 36, 0]],[new Date('02 May 2020, 08:00 GMT+5:30'),[43, 0, 36, 0]],[new Date('02 May 2020, 17:00 GMT+5:30'),[43, 0, 36, 0]],[new Date('03 May 2020, 08:00 GMT+5:30'),[43, 0, 36, 0]],[new Date('03 May 2020, 17:00 GMT+5:30'),[43, 0, 36, 0]],[new Date('04 May 2020, 08:00 GMT+5:30'),[57, 0, 36, 0]],[new Date('04 May 2020, 17:00  GMT+5:30'),[57, 0, 36, 0]],[new Date('05 May 2020, 08:00  GMT+5:30'),[58, 0, 36, 0]],[new Date('05 May 2020, 17:00  GMT+5:30'),[58, 0, 36, 0]],[new Date('06 May 2020, 08:00  GMT+5:30'),[59, 0, 36, 0]],[new Date('07 May 2020, 08:00  GMT+5:30'),[59, 0, 36, 0]],[new Date('08 May 2020, 08:00  GMT+5:30'),[59, 0, 38, 0]],[new Date('09 May 2020, 08:00  GMT+5:30'),[59, 0, 38, 0]],[new Date('10 May 2020, 08:00  GMT+5:30'),[59, 0, 43, 0]],[new Date('11 May 2020, 08:00  GMT+5:30'),[59, 0, 49, 0]],[new Date('12 May 2020, 08:00  GMT+5:30'),[59, 0, 53, 0]],[new Date('13 May 2020, 08:00  GMT+5:30'),[59, 0, 54, 0]],[new Date('14 May 2020, 08:00  GMT+5:30'),[59, 0, 55, 0]],[new Date('15 May 2020, 08:00  GMT+5:30'),[60, 0, 56, 0]],[new Date('16 May 2020, 08:00  GMT+5:30'),[66, 0, 56, 0]],[new Date('17 May 2020, 08:00  GMT+5:30'),[67, 0, 56, 0]],[new Date('18 May 2020, 08:00  GMT+5:30'),[86, 0, 59, 0]],[new Date('19 May 2020, 08:00  GMT+5:30'),[93, 0, 59, 0]],[new Date('20 May 2020, 08:00  GMT+5:30'),[101, 0, 59, 0]],[new Date('21 May 2020, 08:00  GMT+5:30'),[115, 0, 59, 0]],[new Date('22 May 2020, 08:00  GMT+5:30'),[128, 0, 59, 0]],[new Date('23 May 2020, 08:00  GMT+5:30'),[172, 0, 62, 0]],[new Date('24 May 2020, 08:00  GMT+5:30'),[214, 0, 64, 0]],[new Date('25 May 2020, 08:00  GMT+5:30'),[252, 0, 67, 0]],[new Date('26 May 2020, 08:00  GMT+5:30'),[291, 0, 72, 0]],[new Date('27 May 2020, 08:00  GMT+5:30'),[361, 0, 79, 0]],[new Date('28 May 2020, 08:00  GMT+5:30'),[369, 0, 83, 0]],[new Date('29 May 2020, 08:00  GMT+5:30'),[399, 0, 83, 0]],[new Date('30 May 2020, 08:00  GMT+5:30'),[415, 0, 100, 1]],[new Date('31 May 2020, 08:00  GMT+5:30'),[447, 0, 102, 1]],[new Date('01 June 2020, 08:00  GMT+5:30'),[498, 0, 115, 1]],[new Date('02 June 2020, 08:00  GMT+5:30'),[547, 0, 122, 1]],[new Date('03 June 2020, 08:00  GMT+5:30'),[564, 0, 130, 1]]];