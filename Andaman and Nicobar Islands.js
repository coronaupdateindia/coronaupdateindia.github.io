var rawData=[[new Date(2020,02,26,20,00),[1, 0, 0, 0]],[new Date(2020,02,27,9,15),[1, 0, 0, 0]],[new Date(2020,02,28,9,30),[2, 0, 0, 0]],[new Date(2020,02,28,17,45),[6, 0, 0, 0]],[new Date(2020,02,29,10,00),[9, 0, 0, 0]],[new Date(2020,02,29,19,30),[9, 0, 0, 0]],[new Date(2020,02,30,10,30),[9, 0, 0, 0]],[new Date(2020,02,30,21,30),[9, 0, 0, 0]],[new Date(2020,02,31,20,30),[10, 0, 0, 0]],[new Date('01 April 2020, 09:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[10, 0, 1, 0]],[new Date('02 April 2020, 09:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('02 April 2020, 18:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('03 April 2020, 09:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('03 April 2020, 18:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('04 April 2020, 09:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('04 April 2020, 18:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('05 April 2020, 09:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('05 April 2020, 18:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('06 April 2020, 09:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('06 April 2020, 18:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('07 April 2020, 09:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('07 April 2020, 18:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('08 April 2020, 08:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('08 April 2020, 17:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('09 April 2020, 08:00 GMT+5:30'),[11, 0, 0, 0]],[new Date('09 April 2020, 17:00 GMT+5:30'),[11, 0, 0, 0]],[new Date('10 April 2020, 08:00 GMT+5:30'),[11, 0, 0, 0]],[new Date('10 April 2020, 17:00 GMT+5:30'),[11, 0, 0, 0]],[new Date('11 April 2020, 08:00 GMT+5:30'),[11, 0, 0, 0]],[new Date('11 April 2020, 17:00 GMT+5:30'),[11, 0, 0, 0]],[new Date('12 April 2020, 08:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('12 April 2020, 17:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('13 April 2020, 08:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('13 April 2020, 17:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('14 April 2020, 08:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('14 April 2020, 17:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('15 April 2020, 08:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('15 April 2020, 17:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('16 April 2020, 08:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('16 April 2020, 17:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('17 April 2020, 08:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('17 April 2020, 17:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('18 April 2020, 08:00 GMT+5:30'),[12, 0, 11, 0]],[new Date('18 April 2020, 17:00 GMT+5:30'),[12, 0, 11, 0]],[new Date('19 April 2020, 08:00 GMT+5:30'),[14, 0, 11, 0]],[new Date('19 April 2020, 17:00 GMT+5:30'),[14, 0, 11, 0]],[new Date('20 April 2020, 08:00 GMT+5:30'),[15, 0, 11, 0]],[new Date('20 April 2020, 17:00 GMT+5:30'),[15, 0, 11, 0]],[new Date('21 April 2020, 08:00 GMT+5:30'),[16, 0, 11, 0]],[new Date('21 April 2020, 17:00 GMT+5:30'),[16, 0, 11, 0]],[new Date('22 April 2020, 08:00 GMT+5:30'),[16, 0, 11, 0]],[new Date('22 April 2020, 17:00 GMT+5:30'),[17, 0, 11, 0]],[new Date('23 April 2020, 08:00 GMT+5:30'),[18, 0, 11, 0]],[new Date('23 April 2020, 17:00 GMT+5:30'),[18, 0, 11, 0]],[new Date('24 April 2020, 08:00 GMT+5:30'),[22, 0, 11, 0]],[new Date('24 April 2020, 17:00 GMT+5:30'),[22, 0, 11, 0]],[new Date('25 April 2020, 08:00 GMT+5:30'),[27, 0, 11, 0]],[new Date('25 April 2020, 17:00 GMT+5:30'),[27, 0, 11, 0]],[new Date('26 April 2020, 08:00 GMT+5:30'),[33, 0, 11, 0]],[new Date('26 April 2020, 17:00 GMT+5:30'),[33, 0, 11, 0]],[new Date('27 April 2020, 08:00 GMT+5:30'),[33, 0, 11, 0]],[new Date('27 April 2020, 17:00 GMT+5:30'),[33, 0, 11, 0]],[new Date('28 April 2020, 08:00 GMT+5:30'),[33, 0, 11, 0]],[new Date('28 April 2020, 17:00 GMT+5:30'),[33, 0, 11, 0]],[new Date('29 April 2020, 08:00 GMT+5:30'),[33, 0, 15, 0]],[new Date('29 April 2020, 17:00 GMT+5:30'),[33, 0, 15, 0]],[new Date('30 April 2020, 08:00 GMT+5:30'),[33, 0, 15, 0]],[new Date('30 April 2020, 17:00 GMT+5:30'),[33, 0, 15, 0]],[new Date('01 May 2020, 08:00 GMT+5:30'),[33, 0, 16, 0]],[new Date('01 May 2020, 17:00 GMT+5:30'),[33, 0, 16, 0]],[new Date('02 May 2020, 08:00 GMT+5:30'),[33, 0, 16, 0]],[new Date('02 May 2020, 17:00 GMT+5:30'),[33, 0, 16, 0]],[new Date('03 May 2020, 08:00 GMT+5:30'),[33, 0, 16, 0]],[new Date('03 May 2020, 17:00 GMT+5:30'),[33, 0, 17, 0]],[new Date('04 May 2020, 08:00 GMT+5:30'),[33, 0, 32, 0]],[new Date('04 May 2020, 17:00  GMT+5:30'),[33, 0, 32, 0]],[new Date('05 May 2020, 08:00  GMT+5:30'),[33, 0, 32, 0]],[new Date('05 May 2020, 17:00  GMT+5:30'),[33, 0, 32, 0]],[new Date('06 May 2020, 08:00  GMT+5:30'),[33, 0, 32, 0]],[new Date('07 May 2020, 08:00  GMT+5:30'),[33, 0, 32, 0]],[new Date('08 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('09 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('10 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('11 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('12 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('13 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('14 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('15 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('16 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('17 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('18 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('19 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('20 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('21 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('22 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('23 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('24 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('25 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('26 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('27 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('28 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('29 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('30 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('31 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('01 June 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('02 June 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('03 June 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('04 June 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('05 June 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('06 June 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('07 June 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('08 June 2020, 08:00 GMT+5:30'),[33, 0, 33, 0]],[new Date('09 June 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('10 June 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('11 June 2020, 08:00  GMT+5:30'),[34, 0, 33, 0]],[new Date('12 June 2020, 08:00  GMT+5:30'),[38, 0, 33, 0]],[new Date('13 June 2020, 08:00  GMT+5:30'),[38, 0, 33, 0]],[new Date('14 June 2020, 08:00  GMT+5:30'),[38, 0, 33, 0]],[new Date('15 June 2020, 08:00  GMT+5:30'),[38, 0, 33, 0]],[new Date('16 June 2020, 08:00  GMT+5:30'),[41, 0, 33, 0]],[new Date('17 June 2020, 08:00  GMT+5:30'),[44, 0, 33, 0]],[new Date('18 June 2020, 08:00  GMT+5:30'),[44, 0, 33, 0]],[new Date('19 June 2020, 08:00  GMT+5:30'),[44, 0, 33, 0]],[new Date('20 June 2020, 08:00  GMT+5:30'),[45, 0, 35, 0]],[new Date('21 June 2020, 08:00  GMT+5:30'),[47, 0, 36, 0]],[new Date('22 June 2020, 08:00  GMT+5:30'),[48, 0, 37, 0]],[new Date('23 June 2020, 08:00  GMT+5:30'),[48, 0, 37, 0]],[new Date('24	June 2020, 08:00  GMT+5:30'),[50, 0, 40, 0]],[new Date('25	June 2020, 08:00  GMT+5:30'),[56, 0, 43, 0]],[new Date('26	June 2020, 08:00  GMT+5:30'),[59, 0, 43, 0]],[new Date('27	June 2020, 08:00  GMT+5:30'),[72, 0, 43, 0]],[new Date('28	June 2020, 08:00  GMT+5:30'),[72, 0, 43, 0]],[new Date('29	June 2020, 08:00  GMT+5:30'),[76, 0, 45, 0]],[new Date('30	June 2020, 08:00  GMT+5:30'),[90, 0, 46, 0]],[new Date('01	July 2020, 08:00  GMT+5:30'),[97, 0, 50, 0]],[new Date('02	July 2020, 08:00  GMT+5:30'),[100, 0, 50, 0]],[new Date('03	July 2020, 08:00  GMT+5:30'),[109, 0, 51, 0]],[new Date('04	July 2020, 08:00  GMT+5:30'),[116, 0, 54, 0]],[new Date('05	July 2020, 08:00  GMT+5:30'),[119, 0, 66, 0]],[new Date('06	July 2020, 08:00  GMT+5:30'),[125, 0, 72, 0]],[new Date('07	July 2020, 08:00  GMT+5:30'),[141, 0, 74, 0]],[new Date('08	July 2020, 08:00  GMT+5:30'),[147, 0, 75, 0]],[new Date('09	July 2020, 08:00  GMT+5:30'),[149, 0, 77, 0]],[new Date('10	July 2020, 08:00  GMT+5:30'),[151, 0, 83, 0]],[new Date('11	July 2020, 08:00  GMT+5:30'),[156, 0, 92, 0]],[new Date('12	July 2020, 08:00  GMT+5:30'),[163, 0, 93, 0]],[new Date('13	July 2020, 08:00  GMT+5:30'),[163, 0, 93, 0]],[new Date('14	July 2020, 08:00  GMT+5:30'),[166, 0, 109, 0]],[new Date('15	July 2020, 08:00  GMT+5:30'),[166, 0, 109, 0]],[new Date('16	July 2020, 08:00  GMT+5:30'),[176, 0, 130, 0]],[new Date('17	July 2020, 08:00  GMT+5:30'),[180, 0, 133, 0]],[new Date('18	July 2020, 08:00  GMT+5:30'),[194, 0, 142, 0]],[new Date('19	July 2020, 08:00  GMT+5:30'),[198, 0, 145, 0]],[new Date('20	July 2020, 08:00  GMT+5:30'),[203, 0, 145, 0]],[new Date('21	July 2020, 08:00  GMT+5:30'),[207, 0, 152, 0]],[new Date('22	July 2020, 08:00  GMT+5:30'),[212, 0, 159, 0]],[new Date('23	July 2020, 08:00  GMT+5:30'),[221, 0, 163, 0]],[new Date('24	July 2020, 08:00  GMT+5:30'),[240, 0, 170, 0]]];