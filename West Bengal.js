var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date(2020,02,24,20,15),[9, 0, 0, 1]],[new Date(2020,02,25,9,15),[9, 0, 0, 1]],[new Date(2020,02,25,18,45),[9, 0, 0, 1]],[new Date(2020,02,26,10,15),[9, 0, 0, 1]],[new Date(2020,02,26,20,00),[10, 0, 0, 1]],[new Date(2020,02,27,9,15),[10, 0, 0, 1]],[new Date(2020,02,28,9,30),[15, 0, 0, 1]],[new Date(2020,02,28,17,45),[15, 0, 0, 1]],[new Date(2020,02,29,10,00),[17, 0, 0, 1]],[new Date(2020,02,29,19,30),[18, 0, 0, 1]],[new Date(2020,02,30,10,30),[19, 0, 0, 1]],[new Date(2020,02,30,21,30),[22, 0, 0, 1]],[new Date(2020,02,31,20,30),[26, 0, 0, 2]],[new Date('01 April 2020, 09:00 GMT+5:30'),[26, 0, 0, 2]],[new Date('01 April 2020, 19:30 GMT+5:30'),[37, 0, 6, 3]],[new Date('02 April 2020, 09:00 GMT+5:30'),[37, 0, 6, 3]],[new Date('02 April 2020, 18:00 GMT+5:30'),[53, 0, 6, 3]],[new Date('03 April 2020, 09:00 GMT+5:30'),[53, 0, 3, 3]],[new Date('03 April 2020, 18:00 GMT+5:30'),[63, 0, 3, 3]],[new Date('04 April 2020, 09:00 GMT+5:30'),[63, 0, 3, 3]],[new Date('04 April 2020, 18:00 GMT+5:30'),[69, 0, 3, 3]],[new Date('05 April 2020, 09:00 GMT+5:30'),[69, 0, 10, 3]],[new Date('05 April 2020, 18:00 GMT+5:30'),[80, 0, 10, 3]],[new Date('06 April 2020, 09:00 GMT+5:30'),[80, 0, 10, 3]],[new Date('06 April 2020, 18:00 GMT+5:30'),[80, 0, 10, 3]],[new Date('07 April 2020, 09:00 GMT+5:30'),[91, 0, 13, 3]],[new Date('07 April 2020, 18:00 GMT+5:30'),[91, 0, 13, 3]],[new Date('08 April 2020, 08:00 GMT+5:30'),[99, 0, 13, 5]],[new Date('08 April 2020, 17:00 GMT+5:30'),[99, 0, 13, 5]],[new Date('09 April 2020, 08:00 GMT+5:30'),[103, 0, 16, 5]],[new Date('09 April 2020, 17:00 GMT+5:30'),[103, 0, 16, 5]],[new Date('10 April 2020, 08:00 GMT+5:30'),[116, 0, 16, 5]],[new Date('10 April 2020, 17:00 GMT+5:30'),[116, 0, 16, 5]],[new Date('11 April 2020, 08:00 GMT+5:30'),[116, 0, 16, 5]],[new Date('11 April 2020, 17:00 GMT+5:30'),[126, 0, 16, 5]],[new Date('12 April 2020, 08:00 GMT+5:30'),[134, 0, 19, 5]],[new Date('12 April 2020, 17:00 GMT+5:30'),[134, 0, 19, 5]],[new Date('13 April 2020, 08:00 GMT+5:30'),[152, 0, 29, 7]],[new Date('13 April 2020, 17:00 GMT+5:30'),[152, 0, 29, 7]],[new Date('14 April 2020, 08:00 GMT+5:30'),[190, 0, 36, 7]],[new Date('14 April 2020, 17:00 GMT+5:30'),[190, 0, 36, 7]],[new Date('15 April 2020, 08:00 GMT+5:30'),[213, 0, 37, 7]],[new Date('15 April 2020, 17:00 GMT+5:30'),[213, 0, 37, 7]],[new Date('16 April 2020, 08:00 GMT+5:30'),[231, 0, 42, 7]],[new Date('16 April 2020, 17:00 GMT+5:30'),[231, 0, 42, 7]],[new Date('17 April 2020, 08:00 GMT+5:30'),[255, 0, 51, 10]],[new Date('17 April 2020, 17:00 GMT+5:30'),[255, 0, 51, 10]],[new Date('18 April 2020, 08:00 GMT+5:30'),[287, 0, 55, 10]],[new Date('18 April 2020, 17:00 GMT+5:30'),[287, 0, 55, 10]],[new Date('19 April 2020, 08:00 GMT+5:30'),[310, 0, 62, 12]],[new Date('19 April 2020, 17:00 GMT+5:30'),[310, 0, 62, 12]],[new Date('20 April 2020, 08:00 GMT+5:30'),[339, 0, 66, 12]],[new Date('20 April 2020, 17:00 GMT+5:30'),[339, 0, 66, 12]],[new Date('21 April 2020, 08:00 GMT+5:30'),[392, 0, 73, 12]],[new Date('21 April 2020, 17:00 GMT+5:30'),[392, 0, 73, 12]],[new Date('22 April 2020, 08:00 GMT+5:30'),[423, 0, 73, 15]],[new Date('22 April 2020, 17:00 GMT+5:30'),[423, 0, 73, 15]],[new Date('23 April 2020, 08:00 GMT+5:30'),[456, 0, 79, 15]],[new Date('23 April 2020, 17:00 GMT+5:30'),[456, 0, 79, 15]],[new Date('24 April 2020, 08:00 GMT+5:30'),[514, 0, 103, 15]],[new Date('24 April 2020, 17:00 GMT+5:30'),[514, 0, 103, 15]],[new Date('25 April 2020, 08:00 GMT+5:30'),[571, 0, 103, 18]],[new Date('25 April 2020, 17:00 GMT+5:30'),[571, 0, 103, 18]],[new Date('26 April 2020, 08:00 GMT+5:30'),[611, 0, 105, 18]],[new Date('26 April 2020, 17:00 GMT+5:30'),[611, 0, 105, 18]],[new Date('27 April 2020, 08:00 GMT+5:30'),[649, 0, 105, 20]],[new Date('27 April 2020, 17:00 GMT+5:30'),[649, 0, 105, 20]],[new Date('28 April 2020, 08:00 GMT+5:30'),[697, 0, 109, 20]],[new Date('28 April 2020, 17:00 GMT+5:30'),[697, 0, 109, 20]],[new Date('29 April 2020, 08:00 GMT+5:30'),[725, 0, 119, 22]],[new Date('29 April 2020, 17:00 GMT+5:30'),[725, 0, 119, 22]],[new Date('30 April 2020, 08:00 GMT+5:30'),[758, 0, 124, 22]],[new Date('30 April 2020, 17:00 GMT+5:30'),[758, 0, 124, 22]],[new Date('01 May 2020, 08:00 GMT+5:30'),[795, 0, 139, 33]],[new Date('01 May 2020, 17:00 GMT+5:30'),[795, 0, 139, 33]],[new Date('02 May 2020, 08:00 GMT+5:30'),[795, 0, 139, 33]],[new Date('02 May 2020, 17:00 GMT+5:30'),[795, 0, 139, 33]],[new Date('03 May 2020, 08:00 GMT+5:30'),[922, 0, 151, 33]],[new Date('03 May 2020, 17:00 GMT+5:30'),[922, 0, 151, 33]],[new Date('04 May 2020, 08:00 GMT+5:30'),[963, 0, 151, 35]],[new Date('04 May 2020, 17:00  GMT+5:30'),[963, 0, 151, 35]],[new Date('05 May 2020, 08:00  GMT+5:30'),[1259, 0, 218, 133]],[new Date('05 May 2020, 17:00  GMT+5:30'),[1259, 0, 218, 133]],[new Date('06 May 2020, 08:00  GMT+5:30'),[1344, 0, 364, 140]],[new Date('07 May 2020, 08:00  GMT+5:30'),[1456, 0, 364, 144]],[new Date('08 May 2020, 08:00  GMT+5:30'),[1548, 0, 364, 151]],[new Date('09 May 2020, 08:00  GMT+5:30'),[1678, 0, 364, 160]]];