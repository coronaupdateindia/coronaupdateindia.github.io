var rawData=[[new Date(2020,02,15,12,0),[ 1, 0,0,0]],[new Date(2020,02,15,17,0),[ 1, 0,0,0]],[new Date(2020,02,15,23,30),[ 1, 0,0,0]],[new Date(2020,02,16,16,0),[ 1, 0,0,0]],[new Date(2020,02,17,9,15),[ 1, 0,0,0]],[new Date(2020,02,17,17,15),[ 1, 0,0,0]],[new Date(2020,02,24,20,15),[13, 2, 1, 0]],[new Date(2020,02,25,9,15),[16, 2, 1, 0]],[new Date(2020,02,25,18,45),[16, 2, 1, 0]],[new Date(2020,02,26,10,15),[20, 6, 1, 1]],[new Date(2020,02,26,20,00),[20, 6, 1, 1]],[new Date(2020,02,27,9,15),[23, 6, 1, 1]],[new Date(2020,02,28,9,30),[32, 6, 2, 1]],[new Date(2020,02,28,17,45),[34, 6, 2, 1]],[new Date(2020,02,29,10,00),[36, 6, 2, 1]],[new Date(2020,02,29,19,30),[49, 0, 4, 1]],[new Date(2020,02,30,10,30),[50, 0, 4, 1]],[new Date(2020,02,30,21,30),[67, 0, 4, 1]],[new Date(2020,02,31,20,30),[74, 0, 4, 1]],[new Date('01 April 2020, 09:00 GMT+5:30'),[124, 0, 4, 1]],[new Date('01 April 2020, 19:30 GMT+5:30'),[234, 0, 6, 1]],[new Date('02 April 2020, 09:00 GMT+5:30'),[234, 0, 6, 1]],[new Date('02 April 2020, 18:00 GMT+5:30'),[234, 0, 6, 1]],[new Date('03 April 2020, 09:00 GMT+5:30'),[309, 0, 6, 1]],[new Date('03 April 2020, 18:00 GMT+5:30'),[309, 0, 6, 1]],[new Date('04 April 2020, 09:00 GMT+5:30'),[411, 0, 6, 1]],[new Date('04 April 2020, 18:00 GMT+5:30'),[411, 0, 6, 2]],[new Date('05 April 2020, 09:00 GMT+5:30'),[485, 0, 6, 3]],[new Date('05 April 2020, 18:00 GMT+5:30'),[485, 0, 6, 3]],[new Date('06 April 2020, 09:00 GMT+5:30'),[571, 0, 8, 5]],[new Date('06 April 2020, 18:00 GMT+5:30'),[571, 0, 8, 5]],[new Date('07 April 2020, 09:00 GMT+5:30'),[621, 0, 8, 5]],[new Date('07 April 2020, 18:00 GMT+5:30'),[621, 0, 8, 5]],[new Date('08 April 2020, 08:00 GMT+5:30'),[690, 0, 19, 7]],[new Date('08 April 2020, 17:00 GMT+5:30'),[690, 0, 19, 7]],[new Date('09 April 2020, 08:00 GMT+5:30'),[738, 0, 21, 8]],[new Date('09 April 2020, 17:00 GMT+5:30'),[738, 0, 21, 8]],[new Date('10 April 2020, 08:00 GMT+5:30'),[834, 0, 21, 8]],[new Date('10 April 2020, 17:00 GMT+5:30'),[834, 0, 21, 8]],[new Date('11 April 2020, 08:00 GMT+5:30'),[911, 0, 44, 8]],[new Date('11 April 2020, 17:00 GMT+5:30'),[911, 0, 44, 8]],[new Date('12 April 2020, 08:00 GMT+5:30'),[969, 0, 44, 10]],[new Date('12 April 2020, 17:00 GMT+5:30'),[969, 0, 44, 10]],[new Date('13 April 2020, 08:00 GMT+5:30'),[1043, 0, 50, 11]],[new Date('13 April 2020, 17:00 GMT+5:30'),[1075, 0, 50, 11]],[new Date('14 April 2020, 08:00 GMT+5:30'),[1173, 0, 58, 11]],[new Date('14 April 2020, 17:00 GMT+5:30'),[1173, 0, 58, 11]],[new Date('15 April 2020, 08:00 GMT+5:30'),[1204, 0, 81, 12]],[new Date('15 April 2020, 17:00 GMT+5:30'),[1204, 0, 81, 12]],[new Date('16 April 2020, 08:00 GMT+5:30'),[1242, 0, 118, 14]],[new Date('16 April 2020, 17:00 GMT+5:30'),[1242, 0, 118, 14]],[new Date('17 April 2020, 08:00 GMT+5:30'),[1267, 0, 180, 15]],[new Date('17 April 2020, 17:00 GMT+5:30'),[1267, 0, 180, 15]],[new Date('18 April 2020, 08:00 GMT+5:30'),[1323, 0, 283, 15]],[new Date('18 April 2020, 17:00 GMT+5:30'),[1323, 0, 283, 15]],[new Date('19 April 2020, 08:00 GMT+5:30'),[1372, 0, 365, 15]],[new Date('19 April 2020, 17:00 GMT+5:30'),[1372, 0, 365, 15]],[new Date('20 April 2020, 08:00 GMT+5:30'),[1477, 0, 411, 15]],[new Date('20 April 2020, 17:00 GMT+5:30'),[1477, 0, 411, 15]],[new Date('21 April 2020, 08:00 GMT+5:30'),[1520, 0, 457, 17]],[new Date('21 April 2020, 17:00 GMT+5:30'),[1520, 0, 457, 17]],[new Date('22 April 2020, 08:00 GMT+5:30'),[1596, 0, 635, 18]],[new Date('22 April 2020, 17:00 GMT+5:30'),[1596, 0, 635, 18]],[new Date('23 April 2020, 08:00 GMT+5:30'),[1629, 0, 662, 18]],[new Date('23 April 2020, 17:00 GMT+5:30'),[1629, 0, 662, 18]],[new Date('24 April 2020, 08:00 GMT+5:30'),[1683, 0, 752, 20]],[new Date('24 April 2020, 17:00 GMT+5:30'),[1683, 0, 752, 20]],[new Date('25 April 2020, 08:00 GMT+5:30'),[1755, 0, 866, 22]],[new Date('25 April 2020, 17:00 GMT+5:30'),[1755, 0, 866, 22]],[new Date('26 April 2020, 08:00 GMT+5:30'),[1821, 0, 960, 23]],[new Date('26 April 2020, 17:00 GMT+5:30'),[1821, 0, 960, 23]],[new Date('27 April 2020, 08:00 GMT+5:30'),[1885, 0, 1020, 24]],[new Date('27 April 2020, 17:00 GMT+5:30'),[1885, 0, 1020, 24]],[new Date('28 April 2020, 08:00 GMT+5:30'),[1937, 0, 1101, 24]],[new Date('28 April 2020, 17:00 GMT+5:30'),[1937, 0, 1101, 24]],[new Date('29 April 2020, 08:00 GMT+5:30'),[2058, 0, 1168, 25]],[new Date('29 April 2020, 17:00 GMT+5:30'),[2058, 0, 1168, 25]],[new Date('30 April 2020, 08:00 GMT+5:30'),[2162, 0, 1210, 27]],[new Date('30 April 2020, 17:00 GMT+5:30'),[2162, 0, 1210, 27]],[new Date('01 May 2020, 08:00 GMT+5:30'),[2323, 0, 1258, 27]],[new Date('01 May 2020, 17:00 GMT+5:30'),[2323, 0, 1258, 27]],[new Date('02 May 2020, 08:00 GMT+5:30'),[2526, 0, 1312, 28]],[new Date('02 May 2020, 17:00 GMT+5:30'),[2526, 0, 1312, 28]],[new Date('03 May 2020, 08:00 GMT+5:30'),[2757, 0, 1341, 29]],[new Date('03 May 2020, 17:00 GMT+5:30'),[2757, 0, 1341, 29]],[new Date('04 May 2020, 08:00 GMT+5:30'),[3023, 0, 1379, 30]],[new Date('04 May 2020, 17:00  GMT+5:30'),[3023, 0, 1379, 30]],[new Date('05 May 2020, 08:00  GMT+5:30'),[3550, 0, 1409, 31]],[new Date('05 May 2020, 17:00  GMT+5:30'),[3550, 0, 1409, 31]],[new Date('06 May 2020, 08:00  GMT+5:30'),[4058, 0, 1485, 33]],[new Date('07 May 2020, 08:00  GMT+5:30'),[4829, 0, 1516, 35]],[new Date('08 May 2020, 08:00  GMT+5:30'),[5409, 0, 1547, 37]],[new Date('09 May 2020, 08:00  GMT+5:30'),[6009, 0, 1605, 40]],[new Date('10 May 2020, 08:00  GMT+5:30'),[6535, 0, 1824, 44]],[new Date('11 May 2020, 08:00  GMT+5:30'),[7204, 0, 1959, 47]],[new Date('12 May 2020, 08:00  GMT+5:30'),[8002, 0, 2051, 53]],[new Date('13 May 2020, 08:00  GMT+5:30'),[8718, 0, 2134, 61]],[new Date('14 May 2020, 08:00  GMT+5:30'),[9227, 0, 2176, 64]],[new Date('15 May 2020, 08:00  GMT+5:30'),[9674, 0, 2240, 66]],[new Date('16 May 2020, 08:00  GMT+5:30'),[10108, 0, 2599, 71]],[new Date('17 May 2020, 08:00  GMT+5:30'),[10585, 0, 3538, 74]],[new Date('18 May 2020, 08:00  GMT+5:30'),[11224, 0, 4172, 78]],[new Date('19 May 2020, 08:00  GMT+5:30'),[11760, 0, 4406, 81]],[new Date('20 May 2020, 08:00  GMT+5:30'),[12448, 0, 4895, 84]],[new Date('21 May 2020, 08:00  GMT+5:30'),[13191, 0, 5882, 87]],[new Date('22 May 2020, 08:00  GMT+5:30'),[13967, 0, 6282, 94]]];