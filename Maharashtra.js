var rawData=[[new Date(2020,02,15,12,0),[31, 0,0,0]],[new Date(2020,02,15,17,0),[31, 0,0,0]],[new Date(2020,02,15,23,30),[32, 0,0,0]],[new Date(2020,02,16,16,0),[32, 0,0,0]],[new Date(2020,02,17,9,15),[36, 3,0,0]],[new Date(2020,02,17,17,15),[36, 3,0,1]],[new Date(2020,02,24,20,15),[86, 3, 0, 2]],[new Date(2020,02,25,9,15),[98, 3, 0, 2]],[new Date(2020,02,25,18,45),[125, 3, 1, 3]],[new Date(2020,02,26,10,15),[121, 3, 1, 3]],[new Date(2020,02,26,20,00),[121, 3, 1, 3]],[new Date(2020,02,27,9,15),[127, 3, 15, 4]],[new Date(2020,02,28,9,30),[177, 3, 25, 5]],[new Date(2020,02,28,17,45),[177, 3, 25, 5]],[new Date(2020,02,29,10,00),[183, 3, 25, 6]],[new Date(2020,02,29,19,30),[186, 0, 25, 6]],[new Date(2020,02,30,10,30),[193, 0, 25, 8]],[new Date(2020,02,30,21,30),[198, 0, 25, 8]],[new Date(2020,02,31,20,30),[216, 0, 39, 9]],[new Date('01 April 2020, 09:00 GMT+5:30'),[302, 0, 39, 9]],[new Date('01 April 2020, 19:30 GMT+5:30'),[302, 0, 39, 9]],[new Date('02 April 2020, 09:00 GMT+5:30'),[335, 0, 42, 13]],[new Date('02 April 2020, 18:00 GMT+5:30'),[335, 0, 42, 13]],[new Date('03 April 2020, 09:00 GMT+5:30'),[335, 0, 42, 16]],[new Date('03 April 2020, 18:00 GMT+5:30'),[335, 0, 42, 16]],[new Date('04 April 2020, 09:00 GMT+5:30'),[423, 0, 42, 19]],[new Date('04 April 2020, 18:00 GMT+5:30'),[490, 0, 42, 24]],[new Date('05 April 2020, 09:00 GMT+5:30'),[490, 0, 42, 24]],[new Date('05 April 2020, 18:00 GMT+5:30'),[490, 0, 42, 24]],[new Date('06 April 2020, 09:00 GMT+5:30'),[690, 0, 42, 45]],[new Date('06 April 2020, 18:00 GMT+5:30'),[748, 0, 56, 45]],[new Date('07 April 2020, 09:00 GMT+5:30'),[748, 0, 56, 45]],[new Date('07 April 2020, 18:00 GMT+5:30'),[868, 0, 56, 48]],[new Date('08 April 2020, 08:00 GMT+5:30'),[1018, 0, 79, 64]],[new Date('08 April 2020, 17:00 GMT+5:30'),[1018, 0, 79, 64]],[new Date('09 April 2020, 08:00 GMT+5:30'),[1135, 0, 117, 72]],[new Date('09 April 2020, 17:00 GMT+5:30'),[1135, 0, 117, 72]],[new Date('10 April 2020, 08:00 GMT+5:30'),[1364, 0, 125, 97]],[new Date('10 April 2020, 17:00 GMT+5:30'),[1364, 0, 125, 97]],[new Date('11 April 2020, 08:00 GMT+5:30'),[1574, 0, 188, 110]],[new Date('11 April 2020, 17:00 GMT+5:30'),[1574, 0, 188, 110]],[new Date('12 April 2020, 08:00 GMT+5:30'),[1761, 0, 208, 127]],[new Date('12 April 2020, 17:00 GMT+5:30'),[1761, 0, 208, 127]],[new Date('13 April 2020, 08:00 GMT+5:30'),[1985, 0, 217, 149]],[new Date('13 April 2020, 17:00 GMT+5:30'),[1985, 0, 217, 149]],[new Date('14 April 2020, 08:00 GMT+5:30'),[2334, 0, 217, 160]],[new Date('14 April 2020, 17:00 GMT+5:30'),[2337, 0, 229, 160]],[new Date('15 April 2020, 08:00 GMT+5:30'),[2687, 0, 259, 178]],[new Date('15 April 2020, 17:00 GMT+5:30'),[2687, 0, 259, 178]],[new Date('16 April 2020, 08:00 GMT+5:30'),[2916, 0, 295, 187]],[new Date('16 April 2020, 17:00 GMT+5:30'),[2919, 0, 295, 187]],[new Date('17 April 2020, 08:00 GMT+5:30'),[3205, 0, 300, 194]],[new Date('17 April 2020, 17:00 GMT+5:30'),[3205, 0, 300, 194]],[new Date('18 April 2020, 08:00 GMT+5:30'),[3323, 0, 331, 201]],[new Date('18 April 2020, 17:00 GMT+5:30'),[3323, 0, 331, 201]],[new Date('19 April 2020, 08:00 GMT+5:30'),[3651, 0, 365, 211]],[new Date('19 April 2020, 17:00 GMT+5:30'),[3651, 0, 365, 211]],[new Date('20 April 2020, 08:00 GMT+5:30'),[4203, 0, 507, 223]],[new Date('20 April 2020, 17:00 GMT+5:30'),[4203, 0, 507, 223]],[new Date('21 April 2020, 08:00 GMT+5:30'),[4666, 0, 572, 232]],[new Date('21 April 2020, 17:00 GMT+5:30'),[4669, 0, 572, 232]],[new Date('22 April 2020, 08:00 GMT+5:30'),[5218, 0, 722, 251]],[new Date('22 April 2020, 17:00 GMT+5:30'),[5221, 0, 722, 251]],[new Date('23 April 2020, 08:00 GMT+5:30'),[5652, 0, 789, 269]],[new Date('23 April 2020, 17:00 GMT+5:30'),[5652, 0, 789, 269]],[new Date('24 April 2020, 08:00 GMT+5:30'),[6430, 0, 840, 283]],[new Date('24 April 2020, 17:00 GMT+5:30'),[6430, 0, 840, 283]],[new Date('25 April 2020, 08:00 GMT+5:30'),[6817, 0, 840, 301]],[new Date('25 April 2020, 17:00 GMT+5:30'),[6817, 0, 957, 301]],[new Date('26 April 2020, 08:00 GMT+5:30'),[7628, 0, 1076, 323]],[new Date('26 April 2020, 17:00 GMT+5:30'),[7628, 0, 1076, 323]],[new Date('27 April 2020, 08:00 GMT+5:30'),[8068, 0, 1076, 342]],[new Date('27 April 2020, 17:00 GMT+5:30'),[8068, 0, 1188, 342]],[new Date('28 April 2020, 08:00 GMT+5:30'),[8590, 0, 1282, 369]],[new Date('28 April 2020, 17:00 GMT+5:30'),[8590, 0, 1282, 369]],[new Date('29 April 2020, 08:00 GMT+5:30'),[9318, 0, 1388, 400]],[new Date('29 April 2020, 17:00 GMT+5:30'),[9318, 0, 1388, 400]],[new Date('30 April 2020, 08:00 GMT+5:30'),[9915, 0, 1593, 432]]];