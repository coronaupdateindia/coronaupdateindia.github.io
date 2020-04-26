var rawData=[[new Date(2020,02,15,12,0),[90,17,9,2]],[new Date(2020,02,15,17,0),[90,17,10,2]],[new Date(2020,02,15,23,30),[93,17,13,2]],[new Date(2020,02,16,16,0),[97,17,13,2]],[new Date(2020,02,17,9,15),[103,22,13,2]],[new Date(2020,02,17,17,15),[113,24,14,3]],[new Date(2020,02,24,20,15),[476, 43, 40, 10]],[new Date(2020,02,25,9,15),[519, 43, 41, 9]],[new Date(2020,02,25,18,45),[563, 43, 43, 10]],[new Date(2020,02,26,10,15),[602, 47, 43, 13]],[new Date(2020,02,26,20,00),[647, 47, 45, 16]],[new Date(2020,02,27,9,15),[677, 47, 67, 17]],[new Date(2020,02,28,9,30),[826, 47, 79, 19]],[new Date(2020,02,28,17,45),[862+9, 47, 80, 19]],[new Date(2020,02,29,10,00),[931, 48, 87, 25]],[new Date(2020,02,29,19,30),[1024, 0, 96, 27]],[new Date(2020,02,30,10,30),[1071, 0, 100, 29]],[new Date(2020,02,30,21,30),[1205+46, 0, 102, 32]],[new Date(2020,02,31,20,30),[1359+38, 0, 124, 35]],[new Date('01 April 2020, 09:00 GMT+5:30'),[1637, 0, 133, 38]],[new Date('01 April 2020, 19:30 GMT+5:30'),[1834, 0, 144, 41]],[new Date('02 April 2020, 09:00 GMT+5:30'),[1965, 0, 151, 50]],[new Date('02 April 2020, 18:00 GMT+5:30'),[2069, 0, 156, 53]],[new Date('03 April 2020, 09:00 GMT+5:30'),[2283+18, 0, 157, 56]],[new Date('03 April 2020, 18:00 GMT+5:30'),[2470+77, 0, 163, 62]],[new Date('04 April 2020, 09:00 GMT+5:30'),[2902, 0, 184, 68]],[new Date('04 April 2020, 18:00 GMT+5:30'),[3072, 0, 213, 75]],[new Date('05 April 2020, 09:00 GMT+5:30'),[3374, 0, 267, 77]],[new Date('05 April 2020, 18:00 GMT+5:30'),[3577, 0, 275, 83]],[new Date('06 April 2020, 09:00 GMT+5:30'),[4067, 0, 292, 109]],[new Date('06 April 2020, 18:00 GMT+5:30'),[4281, 0, 319, 111]],[new Date('07 April 2020, 09:00 GMT+5:30'),[4421, 0, 326, 114]],[new Date('07 April 2020, 18:00 GMT+5:30'),[4789, 0, 353, 124]],[new Date('08 April 2020, 08:00 GMT+5:30'),[5194, 0, 402, 149]],[new Date('08 April 2020, 17:00 GMT+5:30'),[5274, 0, 411, 149]],[new Date('09 April 2020, 08:00 GMT+5:30'),[5734, 0, 473, 166]],[new Date('09 April 2020, 17:00 GMT+5:30'),[5865, 0, 478, 169]],[new Date('10 April 2020, 08:00 GMT+5:30'),[6412, 0, 504, 199]],[new Date('10 April 2020, 17:00 GMT+5:30'),[6761, 0, 516, 206]],[new Date('11 April 2020, 08:00 GMT+5:30'),[7447, 0, 643, 239]],[new Date('11 April 2020, 17:00 GMT+5:30'),[7529, 0, 653, 242]],[new Date('12 April 2020, 08:00 GMT+5:30'),[8356, 0, 716, 273]],[new Date('12 April 2020, 17:00 GMT+5:30'),[8447, 0, 765, 273]],[new Date('13 April 2020, 08:00 GMT+5:30'),[9152, 0, 857, 308]],[new Date('13 April 2020, 17:00 GMT+5:30'),[9352, 0, 980, 324]],[new Date('14 April 2020, 08:00 GMT+5:30'),[10363, 0, 1036, 339]],[new Date('14 April 2020, 17:00 GMT+5:30'),[10815, 0, 1190, 353]],[new Date('15 April 2020, 08:00 GMT+5:30'),[11439, 0, 1306, 377]],[new Date('15 April 2020, 17:00 GMT+5:30'),[11933, 0, 1344, 392]],[new Date('16 April 2020, 08:00 GMT+5:30'),[12380, 0, 1489, 414]],[new Date('16 April 2020, 17:00 GMT+5:30'),[12759, 0, 1515, 420]],[new Date('17 April 2020, 08:00 GMT+5:30'),[13387, 0, 1749, 437]],[new Date('17 April 2020, 17:00 GMT+5:30'),[13835, 0, 1767, 452]],[new Date('18 April 2020, 08:00 GMT+5:30'),[14378, 0, 1992, 480]],[new Date('18 April 2020, 17:00 GMT+5:30'),[14792, 0, 2015, 488]],[new Date('19 April 2020, 08:00 GMT+5:30'),[15712, 0, 2231, 507]],[new Date('19 April 2020, 17:00 GMT+5:30'),[16116, 0, 2302, 519]],[new Date('20 April 2020, 08:00 GMT+5:30'),[17265, 0, 2547, 543]],[new Date('20 April 2020, 17:00 GMT+5:30'),[17656, 0, 2842, 559]],[new Date('21 April 2020, 08:00 GMT+5:30'),[18601, 0, 3252, 590]],[new Date('21 April 2020, 17:00 GMT+5:30'),[18985, 0, 3260, 603]],[new Date('22 April 2020, 08:00 GMT+5:30'),[19984, 0, 3870, 640]],[new Date('22 April 2020, 17:00 GMT+5:30'),[20471, 0, 3960, 652]],[new Date('23 April 2020, 08:00 GMT+5:30'),[21393, 0, 4258, 681]],[new Date('23 April 2020, 17:00 GMT+5:30'),[21700, 0, 4325, 686]],[new Date('24 April 2020, 08:00 GMT+5:30'),[23077, 0, 4749, 718]],[new Date('24 April 2020, 17:00 GMT+5:30'),[23452, 0, 4814, 723]],[new Date('25 April 2020, 08:00 GMT+5:30'),[24506, 0, 5063, 775]],[new Date('25 April 2020, 17:00 GMT+5:30'),[24893+49, 0, 5210, 779]],[new Date('26 April 2020, 08:00 GMT+5:30'),[26496, 0, 5804, 824]],[new Date('26 April 2020, 17:00 GMT+5:30'),[26605+312, 0, 5914, 826]]];
