var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date('14 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('15 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('15 April 2020, 17:00 GMT+5:30'),[7, 0, 0, 1]],[new Date('16 April 2020, 08:00 GMT+5:30'),[7, 0, 0, 1]],[new Date('16 April 2020, 17:00 GMT+5:30'),[7, 0, 0, 1]],[new Date('17 April 2020, 08:00 GMT+5:30'),[7, 0, 0, 1]],[new Date('17 April 2020, 17:00 GMT+5:30'),[9, 0, 0, 1]],[new Date('18 April 2020, 08:00 GMT+5:30'),[9, 0, 0, 1]],[new Date('18 April 2020, 17:00 GMT+5:30'),[11, 0, 0, 1]],[new Date('19 April 2020, 08:00 GMT+5:30'),[11, 0, 0, 1]],[new Date('19 April 2020, 17:00 GMT+5:30'),[11, 0, 0, 1]],[new Date('20 April 2020, 08:00 GMT+5:30'),[11, 0, 0, 1]],[new Date('20 April 2020, 17:00 GMT+5:30'),[11, 0, 0, 1]],[new Date('21 April 2020, 08:00 GMT+5:30'),[11, 0, 0, 1]],[new Date('21 April 2020, 17:00 GMT+5:30'),[11, 0, 0, 1]],[new Date('22 April 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('22 April 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('23 April 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('23 April 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('24 April 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('24 April 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('25 April 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('25 April 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('26 April 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('26 April 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('27 April 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('27 April 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('28 April 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('28 April 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('29 April 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('29 April 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('30 April 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('30 April 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('01 May 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('01 May 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('02 May 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('02 May 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('03 May 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('03 May 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('04 May 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('04 May 2020, 17:00  GMT+5:30'),[12, 0, 0, 1]],[new Date('05 May 2020, 08:00  GMT+5:30'),[12, 0, 0, 1]],[new Date('05 May 2020, 17:00  GMT+5:30'),[12, 0, 10, 1]],[new Date('06 May 2020, 08:00  GMT+5:30'),[12, 0, 10, 1]],[new Date('07 May 2020, 08:00  GMT+5:30'),[12, 0, 10, 1]],[new Date('08 May 2020, 08:00  GMT+5:30'),[12, 0, 10, 1]],[new Date('09 May 2020, 08:00  GMT+5:30'),[12, 0, 10, 1]],[new Date('10 May 2020, 08:00  GMT+5:30'),[13, 0, 10, 1]],[new Date('11 May 2020, 08:00  GMT+5:30'),[13, 0, 10, 1]],[new Date('12 May 2020, 08:00  GMT+5:30'),[13, 0, 10, 1]],[new Date('13 May 2020, 08:00  GMT+5:30'),[13, 0, 10, 1]],[new Date('14 May 2020, 08:00  GMT+5:30'),[13, 0, 10, 1]],[new Date('15 May 2020, 08:00  GMT+5:30'),[13, 0, 11, 1]],[new Date('16 May 2020, 08:00  GMT+5:30'),[13, 0, 11, 1]],[new Date('17 May 2020, 08:00  GMT+5:30'),[13, 0, 11, 1]],[new Date('18 May 2020, 08:00  GMT+5:30'),[13, 0, 11, 1]],[new Date('19 May 2020, 08:00  GMT+5:30'),[13, 0, 11, 1]],[new Date('20 May 2020, 08:00  GMT+5:30'),[13, 0, 12, 1]],[new Date('21 May 2020, 08:00  GMT+5:30'),[14, 0, 12, 1]],[new Date('22 May 2020, 08:00  GMT+5:30'),[14, 0, 12, 1]],[new Date('23 May 2020, 08:00  GMT+5:30'),[14, 0, 12, 1]],[new Date('24 May 2020, 08:00  GMT+5:30'),[14, 0, 12, 1]],[new Date('25 May 2020, 08:00  GMT+5:30'),[14, 0, 12, 1]],[new Date('26 May 2020, 08:00  GMT+5:30'),[14, 0, 12, 1]],[new Date('27 May 2020, 08:00  GMT+5:30'),[15, 0, 12, 1]],[new Date('28 May 2020, 08:00  GMT+5:30'),[20, 0, 12, 1]],[new Date('29 May 2020, 08:00  GMT+5:30'),[21, 0, 12, 1]],[new Date('30 May 2020, 08:00  GMT+5:30'),[27, 0, 12, 1]]];