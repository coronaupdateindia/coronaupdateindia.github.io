var rawData=[[new Date(2020,02,15,12,0),[11, 1,3,0]],[new Date(2020,02,15,17,0),[11, 1,4,0]],[new Date(2020,02,15,23,30),[12, 1,4,0]],[new Date(2020,02,16,16,0),[12, 1,4,0]],[new Date(2020,02,17,9,15),[12, 1,4,0]],[new Date(2020,02,17,17,15),[14, 1,5,0]],[new Date(2020,02,24,20,15),[32, 1, 11, 0]],[new Date(2020,02,25,9,15),[34, 1, 11, 0]],[new Date(2020,02,25,18,45),[36, 1, 11, 0]],[new Date(2020,02,26,10,15),[36, 1, 11, 0]],[new Date(2020,02,26,20,00),[40, 1, 11, 0]],[new Date(2020,02,27,9,15),[40, 1, 11, 0]],[new Date(2020,02,28,9,30),[44, 1, 11, 0]],[new Date(2020,02,28,17,45),[54, 1, 11, 0]],[new Date(2020,02,29,10,00),[54, 1, 11, 0]],[new Date(2020,02,29,19,30),[65, 0, 11, 0]],[new Date(2020,02,30,10,30),[75, 0, 11, 0]],[new Date(2020,02,30,21,30),[82, 0, 11, 0]],[new Date(2020,02,31,20,30),[101, 0, 14, 0]],[new Date('01 April 2020, 09:00 GMT+5:30'),[103, 0, 14, 0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[103, 0, 14, 2]],[new Date('02 April 2020, 09:00 GMT+5:30'),[113, 0, 14, 2]],[new Date('02 April 2020, 18:00 GMT+5:30'),[113, 0, 14, 2]],[new Date('03 April 2020, 09:00 GMT+5:30'),[113, 0, 14, 2]],[new Date('03 April 2020, 18:00 GMT+5:30'),[172, 0, 14, 2]],[new Date('04 April 2020, 09:00 GMT+5:30'),[174, 0, 19, 2]],[new Date('04 April 2020, 18:00 GMT+5:30'),[174, 0, 19, 2]],[new Date('05 April 2020, 09:00 GMT+5:30'),[227, 0, 19, 2]],[new Date('05 April 2020, 18:00 GMT+5:30'),[227, 0, 19, 2]],[new Date('06 April 2020, 09:00 GMT+5:30'),[227, 0, 19, 2]],[new Date('06 April 2020, 18:00 GMT+5:30'),[305, 0, 21, 3]],[new Date('07 April 2020, 09:00 GMT+5:30'),[305, 0, 21, 3]],[new Date('07 April 2020, 18:00 GMT+5:30'),[305, 0, 21, 3]],[new Date('08 April 2020, 08:00 GMT+5:30'),[326, 0, 21, 3]],[new Date('08 April 2020, 17:00 GMT+5:30'),[343, 0, 26, 3]],[new Date('09 April 2020, 08:00 GMT+5:30'),[361, 0, 27, 4]],[new Date('09 April 2020, 17:00 GMT+5:30'),[410, 0, 31, 4]],[new Date('10 April 2020, 08:00 GMT+5:30'),[410, 0, 31, 4]],[new Date('10 April 2020, 17:00 GMT+5:30'),[431, 0, 32, 4]],[new Date('11 April 2020, 08:00 GMT+5:30'),[431, 0, 32, 4]],[new Date('11 April 2020, 17:00 GMT+5:30'),[433, 0, 32, 4]],[new Date('12 April 2020, 08:00 GMT+5:30'),[452, 0, 45, 5]],[new Date('12 April 2020, 17:00 GMT+5:30'),[452, 0, 45, 5]],[new Date('13 April 2020, 08:00 GMT+5:30'),[483, 0, 46, 5]],[new Date('13 April 2020, 17:00 GMT+5:30'),[483, 0, 47, 5]],[new Date('14 April 2020, 08:00 GMT+5:30'),[558, 0, 49, 5]],[new Date('14 April 2020, 17:00 GMT+5:30'),[657, 0, 49, 5]],[new Date('15 April 2020, 08:00 GMT+5:30'),[660, 0, 50, 5]],[new Date('15 April 2020, 17:00 GMT+5:30'),[735, 0, 51, 11]],[new Date('16 April 2020, 08:00 GMT+5:30'),[735, 0, 51, 11]],[new Date('16 April 2020, 17:00 GMT+5:30'),[773, 0, 68, 13]],[new Date('17 April 2020, 08:00 GMT+5:30'),[805, 0, 74, 13]],[new Date('17 April 2020, 17:00 GMT+5:30'),[846, 0, 74, 14]],[new Date('18 April 2020, 08:00 GMT+5:30'),[849, 0, 82, 14]],[new Date('18 April 2020, 17:00 GMT+5:30'),[969, 0, 86, 14]],[new Date('19 April 2020, 08:00 GMT+5:30'),[969, 0, 86, 14]],[new Date('19 April 2020, 17:00 GMT+5:30'),[1084, 0, 108, 17]],[new Date('20 April 2020, 08:00 GMT+5:30'),[1084, 0, 108, 17]],[new Date('20 April 2020, 17:00 GMT+5:30'),[1176, 0, 129, 17]],[new Date('21 April 2020, 08:00 GMT+5:30'),[1184, 0, 140, 18]],[new Date('21 April 2020, 17:00 GMT+5:30'),[1294, 0, 140, 20]],[new Date('22 April 2020, 08:00 GMT+5:30'),[1294, 0, 140, 20]],[new Date('22 April 2020, 17:00 GMT+5:30'),[1412, 0, 165, 21]],[new Date('23 April 2020, 08:00 GMT+5:30'),[1449, 0, 173, 21]],[new Date('23 April 2020, 17:00 GMT+5:30'),[1509, 0, 187, 21]],[new Date('24 April 2020, 08:00 GMT+5:30'),[1510, 0, 206, 24]],[new Date('24 April 2020, 17:00 GMT+5:30'),[1604, 0, 206, 24]],[new Date('25 April 2020, 08:00 GMT+5:30'),[1621, 0, 247, 25]],[new Date('25 April 2020, 17:00 GMT+5:30'),[1778, 0, 248, 26]],[new Date('26 April 2020, 08:00 GMT+5:30'),[1793, 0, 261, 27]],[new Date('26 April 2020, 17:00 GMT+5:30'),[1843, 0, 289, 29]],[new Date('27 April 2020, 08:00 GMT+5:30'),[1868, 0, 289, 29]],[new Date('27 April 2020, 17:00 GMT+5:30'),[1955, 0, 335, 31]],[new Date('28 April 2020, 08:00 GMT+5:30'),[1955, 0, 335, 31]],[new Date('28 April 2020, 17:00 GMT+5:30'),[2043, 0, 400, 31]],[new Date('29 April 2020, 08:00 GMT+5:30'),[2053, 0, 462, 34]],[new Date('29 April 2020, 17:00 GMT+5:30'),[2115, 0, 477, 36]],[new Date('30 April 2020, 08:00 GMT+5:30'),[2134, 0, 510, 39]]];