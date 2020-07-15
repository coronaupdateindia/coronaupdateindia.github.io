var rawData=[[new Date(2020,02,15,12,0),[31, 0,0,0]],[new Date(2020,02,15,17,0),[31, 0,0,0]],[new Date(2020,02,15,23,30),[32, 0,0,0]],[new Date(2020,02,16,16,0),[32, 0,0,0]],[new Date(2020,02,17,9,15),[36, 3,0,0]],[new Date(2020,02,17,17,15),[36, 3,0,1]],[new Date(2020,02,24,20,15),[86, 3, 0, 2]],[new Date(2020,02,25,9,15),[98, 3, 0, 2]],[new Date(2020,02,25,18,45),[125, 3, 1, 3]],[new Date(2020,02,26,10,15),[121, 3, 1, 3]],[new Date(2020,02,26,20,00),[121, 3, 1, 3]],[new Date(2020,02,27,9,15),[127, 3, 15, 4]],[new Date(2020,02,28,9,30),[177, 3, 25, 5]],[new Date(2020,02,28,17,45),[177, 3, 25, 5]],[new Date(2020,02,29,10,00),[183, 3, 25, 6]],[new Date(2020,02,29,19,30),[186, 0, 25, 6]],[new Date(2020,02,30,10,30),[193, 0, 25, 8]],[new Date(2020,02,30,21,30),[198, 0, 25, 8]],[new Date(2020,02,31,20,30),[216, 0, 39, 9]],[new Date('01 April 2020, 09:00 GMT+5:30'),[302, 0, 39, 9]],[new Date('01 April 2020, 19:30 GMT+5:30'),[302, 0, 39, 9]],[new Date('02 April 2020, 09:00 GMT+5:30'),[335, 0, 42, 13]],[new Date('02 April 2020, 18:00 GMT+5:30'),[335, 0, 42, 13]],[new Date('03 April 2020, 09:00 GMT+5:30'),[335, 0, 42, 16]],[new Date('03 April 2020, 18:00 GMT+5:30'),[335, 0, 42, 16]],[new Date('04 April 2020, 09:00 GMT+5:30'),[423, 0, 42, 19]],[new Date('04 April 2020, 18:00 GMT+5:30'),[490, 0, 42, 24]],[new Date('05 April 2020, 09:00 GMT+5:30'),[490, 0, 42, 24]],[new Date('05 April 2020, 18:00 GMT+5:30'),[490, 0, 42, 24]],[new Date('06 April 2020, 09:00 GMT+5:30'),[690, 0, 42, 45]],[new Date('06 April 2020, 18:00 GMT+5:30'),[748, 0, 56, 45]],[new Date('07 April 2020, 09:00 GMT+5:30'),[748, 0, 56, 45]],[new Date('07 April 2020, 18:00 GMT+5:30'),[868, 0, 56, 48]],[new Date('08 April 2020, 08:00 GMT+5:30'),[1018, 0, 79, 64]],[new Date('08 April 2020, 17:00 GMT+5:30'),[1018, 0, 79, 64]],[new Date('09 April 2020, 08:00 GMT+5:30'),[1135, 0, 117, 72]],[new Date('09 April 2020, 17:00 GMT+5:30'),[1135, 0, 117, 72]],[new Date('10 April 2020, 08:00 GMT+5:30'),[1364, 0, 125, 97]],[new Date('10 April 2020, 17:00 GMT+5:30'),[1364, 0, 125, 97]],[new Date('11 April 2020, 08:00 GMT+5:30'),[1574, 0, 188, 110]],[new Date('11 April 2020, 17:00 GMT+5:30'),[1574, 0, 188, 110]],[new Date('12 April 2020, 08:00 GMT+5:30'),[1761, 0, 208, 127]],[new Date('12 April 2020, 17:00 GMT+5:30'),[1761, 0, 208, 127]],[new Date('13 April 2020, 08:00 GMT+5:30'),[1985, 0, 217, 149]],[new Date('13 April 2020, 17:00 GMT+5:30'),[1985, 0, 217, 149]],[new Date('14 April 2020, 08:00 GMT+5:30'),[2334, 0, 217, 160]],[new Date('14 April 2020, 17:00 GMT+5:30'),[2337, 0, 229, 160]],[new Date('15 April 2020, 08:00 GMT+5:30'),[2687, 0, 259, 178]],[new Date('15 April 2020, 17:00 GMT+5:30'),[2687, 0, 259, 178]],[new Date('16 April 2020, 08:00 GMT+5:30'),[2916, 0, 295, 187]],[new Date('16 April 2020, 17:00 GMT+5:30'),[2919, 0, 295, 187]],[new Date('17 April 2020, 08:00 GMT+5:30'),[3205, 0, 300, 194]],[new Date('17 April 2020, 17:00 GMT+5:30'),[3205, 0, 300, 194]],[new Date('18 April 2020, 08:00 GMT+5:30'),[3323, 0, 331, 201]],[new Date('18 April 2020, 17:00 GMT+5:30'),[3323, 0, 331, 201]],[new Date('19 April 2020, 08:00 GMT+5:30'),[3651, 0, 365, 211]],[new Date('19 April 2020, 17:00 GMT+5:30'),[3651, 0, 365, 211]],[new Date('20 April 2020, 08:00 GMT+5:30'),[4203, 0, 507, 223]],[new Date('20 April 2020, 17:00 GMT+5:30'),[4203, 0, 507, 223]],[new Date('21 April 2020, 08:00 GMT+5:30'),[4666, 0, 572, 232]],[new Date('21 April 2020, 17:00 GMT+5:30'),[4669, 0, 572, 232]],[new Date('22 April 2020, 08:00 GMT+5:30'),[5218, 0, 722, 251]],[new Date('22 April 2020, 17:00 GMT+5:30'),[5221, 0, 722, 251]],[new Date('23 April 2020, 08:00 GMT+5:30'),[5652, 0, 789, 269]],[new Date('23 April 2020, 17:00 GMT+5:30'),[5652, 0, 789, 269]],[new Date('24 April 2020, 08:00 GMT+5:30'),[6430, 0, 840, 283]],[new Date('24 April 2020, 17:00 GMT+5:30'),[6430, 0, 840, 283]],[new Date('25 April 2020, 08:00 GMT+5:30'),[6817, 0, 840, 301]],[new Date('25 April 2020, 17:00 GMT+5:30'),[6817, 0, 957, 301]],[new Date('26 April 2020, 08:00 GMT+5:30'),[7628, 0, 1076, 323]],[new Date('26 April 2020, 17:00 GMT+5:30'),[7628, 0, 1076, 323]],[new Date('27 April 2020, 08:00 GMT+5:30'),[8068, 0, 1076, 342]],[new Date('27 April 2020, 17:00 GMT+5:30'),[8068, 0, 1188, 342]],[new Date('28 April 2020, 08:00 GMT+5:30'),[8590, 0, 1282, 369]],[new Date('28 April 2020, 17:00 GMT+5:30'),[8590, 0, 1282, 369]],[new Date('29 April 2020, 08:00 GMT+5:30'),[9318, 0, 1388, 400]],[new Date('29 April 2020, 17:00 GMT+5:30'),[9318, 0, 1388, 400]],[new Date('30 April 2020, 08:00 GMT+5:30'),[9915, 0, 1593, 432]],[new Date('30 April 2020, 17:00 GMT+5:30'),[9915, 0, 1593, 432]],[new Date('01 May 2020, 08:00 GMT+5:30'),[10498, 0, 1773, 459]],[new Date('01 May 2020, 17:00 GMT+5:30'),[10498, 0, 1773, 459]],[new Date('02 May 2020, 08:00 GMT+5:30'),[11506, 0, 1879, 485]],[new Date('02 May 2020, 17:00 GMT+5:30'),[11506, 0, 1879, 485]],[new Date('03 May 2020, 08:00 GMT+5:30'),[12296, 0, 2000, 521]],[new Date('03 May 2020, 17:00 GMT+5:30'),[12296, 0, 2000, 521]],[new Date('04 May 2020, 08:00 GMT+5:30'),[12974, 0, 2115, 548]],[new Date('04 May 2020, 17:00  GMT+5:30'),[12974, 0, 2115, 548]],[new Date('05 May 2020, 08:00  GMT+5:30'),[14541, 0, 2465, 583]],[new Date('05 May 2020, 17:00  GMT+5:30'),[14541, 0, 2465, 583]],[new Date('06 May 2020, 08:00  GMT+5:30'),[15525, 0, 2819, 617]],[new Date('07 May 2020, 08:00  GMT+5:30'),[16758, 0, 3094, 651]],[new Date('08 May 2020, 08:00  GMT+5:30'),[17974, 0, 3301, 694]],[new Date('09 May 2020, 08:00  GMT+5:30'),[19063, 0, 3470, 731]],[new Date('10 May 2020, 08:00  GMT+5:30'),[20228, 0, 3800, 779]],[new Date('11 May 2020, 08:00  GMT+5:30'),[22171, 0, 4199, 832]],[new Date('12 May 2020, 08:00  GMT+5:30'),[23401, 0, 4786, 868]],[new Date('13 May 2020, 08:00  GMT+5:30'),[24427, 0, 5125, 921]],[new Date('14 May 2020, 08:00  GMT+5:30'),[25922, 0, 5547, 975]],[new Date('15 May 2020, 08:00  GMT+5:30'),[27524, 0, 6059, 1019]],[new Date('16 May 2020, 08:00  GMT+5:30'),[29100, 0, 6564, 1068]],[new Date('17 May 2020, 08:00  GMT+5:30'),[30706, 0, 7088, 1135]],[new Date('18 May 2020, 08:00  GMT+5:30'),[33053, 0, 7688, 1198]],[new Date('19 May 2020, 08:00  GMT+5:30'),[35058, 0, 8437, 1249]],[new Date('20 May 2020, 08:00  GMT+5:30'),[37136, 0, 9639, 1325]],[new Date('21 May 2020, 08:00  GMT+5:30'),[39297, 0, 10318, 1390]],[new Date('22 May 2020, 08:00  GMT+5:30'),[41642, 0, 11726, 1454]],[new Date('23 May 2020, 08:00  GMT+5:30'),[44582, 0, 12583, 1517]],[new Date('24 May 2020, 08:00  GMT+5:30'),[47190, 0, 13404, 1577]],[new Date('25 May 2020, 08:00  GMT+5:30'),[50231, 0, 14600, 1635]],[new Date('26 May 2020, 08:00  GMT+5:30'),[52667, 0, 15786, 1695]],[new Date('27 May 2020, 08:00  GMT+5:30'),[54758, 0, 16954, 1792]],[new Date('28 May 2020, 08:00  GMT+5:30'),[56948, 0, 17918, 1897]],[new Date('29 May 2020, 08:00  GMT+5:30'),[59546, 0, 18616, 1982]],[new Date('30 May 2020, 08:00  GMT+5:30'),[62228, 0, 26997, 2098]],[new Date('31 May 2020, 08:00  GMT+5:30'),[65168, 0, 28081, 2197]],[new Date('01 June 2020, 08:00  GMT+5:30'),[67655, 0, 29329, 2286]],[new Date('02 June 2020, 08:00  GMT+5:30'),[70013, 0, 30108, 2362]],[new Date('03 June 2020, 08:00  GMT+5:30'),[72300, 0, 31333, 2465]],[new Date('04 June 2020, 08:00  GMT+5:30'),[74860, 0, 32329, 2587]],[new Date('05 June 2020, 08:00  GMT+5:30'),[77793, 0, 33681, 2710]],[new Date('06 June 2020, 08:00  GMT+5:30'),[80229, 0, 35156, 2849]],[new Date('07 June 2020, 08:00  GMT+5:30'),[82968, 0, 37390, 2969]],[new Date('08 June 2020, 08:00 GMT+5:30'),[85975, 0, 39314, 3060]],[new Date('09 June 2020, 08:00  GMT+5:30'),[88528, 0, 40975, 3169]],[new Date('10 June 2020, 08:00  GMT+5:30'),[90787, 0, 42638, 3289]],[new Date('11 June 2020, 08:00  GMT+5:30'),[94041, 0, 44517, 3438]],[new Date('12 June 2020, 08:00  GMT+5:30'),[97648, 0, 46078, 3590]],[new Date('13 June 2020, 08:00  GMT+5:30'),[101141, 0, 47796, 3717]],[new Date('14 June 2020, 08:00  GMT+5:30'),[104568, 0, 49346, 3830]],[new Date('15 June 2020, 08:00  GMT+5:30'),[107958, 0, 50978, 3950]],[new Date('16 June 2020, 08:00  GMT+5:30'),[110744, 0, 56049, 4128]],[new Date('17 June 2020, 08:00  GMT+5:30'),[113445, 0, 57851, 5537]],[new Date('18 June 2020, 08:00  GMT+5:30'),[116752, 0, 59166, 5651]],[new Date('19 June 2020, 08:00  GMT+5:30'),[120504, 0, 60838, 5751]],[new Date('20 June 2020, 08:00  GMT+5:30'),[124331, 0, 62773, 5893]],[new Date('21 June 2020, 08:00  GMT+5:30'),[128205, 0, 64153, 5984]],[new Date('22 June 2020, 08:00  GMT+5:30'),[132075, 0, 65744, 6170]],[new Date('23 June 2020, 08:00  GMT+5:30'),[135796, 0, 67706, 6283]],[new Date('24	June 2020, 08:00  GMT+5:30'),[139010, 0, 69631, 6531]],[new Date('25	June 2020, 08:00  GMT+5:30'),[142900, 0, 73792, 6739]],[new Date('26	June 2020, 08:00  GMT+5:30'),[147741, 0, 77453, 6931]],[new Date('27	June 2020, 08:00  GMT+5:30'),[152765, 0, 79815, 7106]],[new Date('28	June 2020, 08:00  GMT+5:30'),[159133, 0, 84245, 7273]],[new Date('29	June 2020, 08:00  GMT+5:30'),[164626, 0, 86575, 7429]],[new Date('30	June 2020, 08:00  GMT+5:30'),[169883, 0, 88960, 7610]],[new Date('01	July 2020, 08:00  GMT+5:30'),[174761, 0, 90911, 7855]],[new Date('02	July 2020, 08:00  GMT+5:30'),[180298, 0, 93154, 8053]],[new Date('03	July 2020, 08:00  GMT+5:30'),[186626, 0, 101172, 8178]],[new Date('04	July 2020, 08:00  GMT+5:30'),[192990, 0, 104687, 8376]],[new Date('05	July 2020, 08:00  GMT+5:30'),[200064, 0, 108082, 8671]],[new Date('06	July 2020, 08:00  GMT+5:30'),[206619, 0, 111740, 8822]],[new Date('07	July 2020, 08:00  GMT+5:30'),[211987, 0, 115262, 9026]],[new Date('08	July 2020, 08:00  GMT+5:30'),[217121, 0, 118558, 9250]],[new Date('09	July 2020, 08:00  GMT+5:30'),[223724, 0, 123192, 9448]],[new Date('10	July 2020, 08:00  GMT+5:30'),[230599, 0, 127259, 9667]],[new Date('11	July 2020, 08:00  GMT+5:30'),[238461, 0, 132625, 9893]],[new Date('12	July 2020, 08:00  GMT+5:30'),[246600, 0, 136985, 10116]],[new Date('13	July 2020, 08:00  GMT+5:30'),[254427, 0, 140325, 10289]],[new Date('14	July 2020, 08:00  GMT+5:30'),[260924, 0, 144507, 10482]],[new Date('15	July 2020, 08:00  GMT+5:30'),[267665, 0, 149007, 10695]]];