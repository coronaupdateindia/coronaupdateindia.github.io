var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[1, 0, 0, 0]],[new Date('02 April 2020, 09:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('02 April 2020, 18:00 GMT+5:30'),[5, 0, 0, 0]],[new Date('03 April 2020, 09:00 GMT+5:30'),[16, 0, 0, 0]],[new Date('03 April 2020, 18:00 GMT+5:30'),[16, 0, 0, 0]],[new Date('04 April 2020, 09:00 GMT+5:30'),[24, 0, 0, 0]],[new Date('04 April 2020, 18:00 GMT+5:30'),[24, 0, 0, 0]],[new Date('05 April 2020, 09:00 GMT+5:30'),[24, 0, 0, 0]],[new Date('05 April 2020, 18:00 GMT+5:30'),[26, 0, 0, 0]],[new Date('06 April 2020, 09:00 GMT+5:30'),[26, 0, 0, 0]],[new Date('06 April 2020, 18:00 GMT+5:30'),[26, 0, 0, 0]],[new Date('07 April 2020, 09:00 GMT+5:30'),[26, 0, 0, 0]],[new Date('07 April 2020, 18:00 GMT+5:30'),[26, 0, 0, 0]],[new Date('08 April 2020, 08:00 GMT+5:30'),[27, 0, 0, 0]],[new Date('08 April 2020, 17:00 GMT+5:30'),[27, 0, 0, 0]],[new Date('09 April 2020, 08:00 GMT+5:30'),[28, 0, 0, 0]],[new Date('09 April 2020, 17:00 GMT+5:30'),[28, 0, 0, 0]],[new Date('10 April 2020, 08:00 GMT+5:30'),[29, 0, 0, 0]],[new Date('10 April 2020, 17:00 GMT+5:30'),[29, 0, 0, 0]],[new Date('11 April 2020, 08:00 GMT+5:30'),[29, 0, 0, 1]],[new Date('11 April 2020, 17:00 GMT+5:30'),[29, 0, 0, 1]],[new Date('12 April 2020, 08:00 GMT+5:30'),[29, 0, 0, 1]],[new Date('12 April 2020, 17:00 GMT+5:30'),[29, 0, 0, 1]],[new Date('13 April 2020, 08:00 GMT+5:30'),[29, 0, 0, 1]],[new Date('13 April 2020, 17:00 GMT+5:30'),[31, 0, 0, 1]],[new Date('14 April 2020, 08:00 GMT+5:30'),[31, 0, 0, 1]],[new Date('14 April 2020, 17:00 GMT+5:30'),[31, 0, 0, 1]],[new Date('15 April 2020, 08:00 GMT+5:30'),[32, 0, 0, 1]],[new Date('15 April 2020, 17:00 GMT+5:30'),[33, 0, 0, 1]],[new Date('16 April 2020, 08:00 GMT+5:30'),[33, 0, 0, 1]],[new Date('16 April 2020, 17:00 GMT+5:30'),[33, 0, 5, 1]],[new Date('17 April 2020, 08:00 GMT+5:30'),[35, 0, 5, 1]],[new Date('17 April 2020, 17:00 GMT+5:30'),[35, 0, 5, 1]],[new Date('18 April 2020, 08:00 GMT+5:30'),[35, 0, 5, 1]],[new Date('18 April 2020, 17:00 GMT+5:30'),[35, 0, 9, 1]],[new Date('19 April 2020, 08:00 GMT+5:30'),[35, 0, 12, 1]],[new Date('19 April 2020, 17:00 GMT+5:30'),[35, 0, 12, 1]],[new Date('20 April 2020, 08:00 GMT+5:30'),[35, 0, 17, 1]],[new Date('20 April 2020, 17:00 GMT+5:30'),[35, 0, 17, 1]],[new Date('21 April 2020, 08:00 GMT+5:30'),[35, 0, 19, 1]],[new Date('21 April 2020, 17:00 GMT+5:30'),[35, 0, 19, 1]],[new Date('22 April 2020, 08:00 GMT+5:30'),[35, 0, 19, 1]],[new Date('22 April 2020, 17:00 GMT+5:30'),[35, 0, 19, 1]],[new Date('23 April 2020, 08:00 GMT+5:30'),[35, 0, 19, 1]],[new Date('23 April 2020, 17:00 GMT+5:30'),[35, 0, 19, 1]],[new Date('24 April 2020, 08:00 GMT+5:30'),[36, 0, 19, 1]],[new Date('24 April 2020, 17:00 GMT+5:30'),[36, 0, 19, 1]],[new Date('25 April 2020, 08:00 GMT+5:30'),[36, 0, 19, 1]],[new Date('25 April 2020, 17:00 GMT+5:30'),[36, 0, 19, 1]],[new Date('26 April 2020, 08:00 GMT+5:30'),[36, 0, 19, 1]],[new Date('26 April 2020, 17:00 GMT+5:30'),[36, 0, 19, 1]],[new Date('27 April 2020, 08:00 GMT+5:30'),[36, 0, 27, 1]],[new Date('27 April 2020, 17:00 GMT+5:30'),[36, 0, 27, 1]],[new Date('28 April 2020, 08:00 GMT+5:30'),[36, 0, 27, 1]],[new Date('28 April 2020, 17:00 GMT+5:30'),[38, 0, 27, 1]],[new Date('29 April 2020, 08:00 GMT+5:30'),[38, 0, 27, 1]],[new Date('29 April 2020, 17:00 GMT+5:30'),[38, 0, 27, 1]],[new Date('30 April 2020, 08:00 GMT+5:30'),[38, 0, 29, 1]],[new Date('30 April 2020, 17:00 GMT+5:30'),[42, 0, 29, 1]],[new Date('01 May 2020, 08:00 GMT+5:30'),[42, 0, 29, 1]],[new Date('01 May 2020, 17:00 GMT+5:30'),[42, 0, 29, 1]],[new Date('02 May 2020, 08:00 GMT+5:30'),[43, 0, 32, 1]],[new Date('02 May 2020, 17:00 GMT+5:30'),[43, 0, 32, 1]],[new Date('03 May 2020, 08:00 GMT+5:30'),[43, 0, 32, 1]],[new Date('03 May 2020, 17:00 GMT+5:30'),[43, 0, 32, 1]],[new Date('04 May 2020, 08:00 GMT+5:30'),[43, 0, 32, 1]],[new Date('04 May 2020, 17:00  GMT+5:30'),[43, 0, 32, 1]],[new Date('05 May 2020, 08:00  GMT+5:30'),[43, 0, 32, 1]],[new Date('05 May 2020, 17:00  GMT+5:30'),[43, 0, 32, 1]],[new Date('06 May 2020, 08:00  GMT+5:30'),[43, 0, 32, 1]]];