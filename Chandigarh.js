var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date(2020,02,24,20,15),[7, 0, 0, 0]],[new Date(2020,02,25,9,15),[7, 0, 0, 0]],[new Date(2020,02,25,18,45),[7, 0, 0, 0]],[new Date(2020,02,26,10,15),[7, 0, 0, 0]],[new Date(2020,02,26,20,00),[7, 0, 0, 0]],[new Date(2020,02,27,9,15),[7, 0, 0, 0]],[new Date(2020,02,28,9,30),[7, 0, 0, 0]],[new Date(2020,02,28,17,45),[8, 0, 0, 0]],[new Date(2020,02,29,10,00),[8, 0, 0, 0]],[new Date(2020,02,29,19,30),[8, 0, 0, 0]],[new Date(2020,02,30,10,30),[8, 0, 0, 0]],[new Date(2020,02,30,21,30),[8, 0, 0, 0]],[new Date(2020,02,31,20,30),[13, 0, 0, 0]],[new Date('01 April 2020, 09:00 GMT+5:30'),[13, 0, 0, 0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[16, 0, 0, 0]],[new Date('02 April 2020, 09:00 GMT+5:30'),[16, 0, 0, 0]],[new Date('02 April 2020, 18:00 GMT+5:30'),[16, 0, 0, 0]],[new Date('03 April 2020, 09:00 GMT+5:30'),[18, 0, 0, 0]],[new Date('03 April 2020, 18:00 GMT+5:30'),[18, 0, 0, 0]],[new Date('04 April 2020, 09:00 GMT+5:30'),[18, 0, 0, 0]],[new Date('04 April 2020, 18:00 GMT+5:30'),[18, 0, 0, 0]],[new Date('05 April 2020, 09:00 GMT+5:30'),[18, 0, 0, 0]],[new Date('05 April 2020, 18:00 GMT+5:30'),[18, 0, 0, 0]],[new Date('06 April 2020, 09:00 GMT+5:30'),[18, 0, 0, 0]],[new Date('06 April 2020, 18:00 GMT+5:30'),[18, 0, 0, 0]],[new Date('07 April 2020, 09:00 GMT+5:30'),[18, 0, 0, 0]],[new Date('07 April 2020, 18:00 GMT+5:30'),[18, 0, 7, 0]],[new Date('08 April 2020, 08:00 GMT+5:30'),[18, 0, 7, 0]],[new Date('08 April 2020, 17:00 GMT+5:30'),[18, 0, 7, 0]],[new Date('09 April 2020, 08:00 GMT+5:30'),[18, 0, 7, 0]],[new Date('09 April 2020, 17:00 GMT+5:30'),[18, 0, 7, 0]],[new Date('10 April 2020, 08:00 GMT+5:30'),[18, 0, 7, 0]],[new Date('10 April 2020, 17:00 GMT+5:30'),[18, 0, 7, 0]],[new Date('11 April 2020, 08:00 GMT+5:30'),[18, 0, 7, 0]],[new Date('11 April 2020, 17:00 GMT+5:30'),[18, 0, 7, 0]],[new Date('12 April 2020, 08:00 GMT+5:30'),[19, 0, 7, 0]],[new Date('12 April 2020, 17:00 GMT+5:30'),[19, 0, 7, 0]],[new Date('13 April 2020, 08:00 GMT+5:30'),[21, 0, 7, 0]],[new Date('13 April 2020, 17:00 GMT+5:30'),[21, 0, 7, 0]],[new Date('14 April 2020, 08:00 GMT+5:30'),[21, 0, 7, 0]],[new Date('14 April 2020, 17:00 GMT+5:30'),[21, 0, 7, 0]],[new Date('15 April 2020, 08:00 GMT+5:30'),[21, 0, 7, 0]],[new Date('15 April 2020, 17:00 GMT+5:30'),[21, 0, 7, 0]],[new Date('16 April 2020, 08:00 GMT+5:30'),[21, 0, 7, 0]],[new Date('16 April 2020, 17:00 GMT+5:30'),[21, 0, 7, 0]],[new Date('17 April 2020, 08:00 GMT+5:30'),[21, 0, 9, 0]],[new Date('17 April 2020, 17:00 GMT+5:30'),[21, 0, 9, 0]],[new Date('18 April 2020, 08:00 GMT+5:30'),[21, 0, 9, 0]],[new Date('18 April 2020, 17:00 GMT+5:30'),[21, 0, 9, 0]],[new Date('19 April 2020, 08:00 GMT+5:30'),[23, 0, 10, 0]],[new Date('19 April 2020, 17:00 GMT+5:30'),[23, 0, 10, 0]],[new Date('20 April 2020, 08:00 GMT+5:30'),[26, 0, 13, 0]],[new Date('20 April 2020, 17:00 GMT+5:30'),[26, 0, 13, 0]],[new Date('21 April 2020, 08:00 GMT+5:30'),[26, 0, 13, 0]],[new Date('21 April 2020, 17:00 GMT+5:30'),[26, 0, 13, 0]],[new Date('22 April 2020, 08:00 GMT+5:30'),[27, 0, 14, 0]],[new Date('22 April 2020, 17:00 GMT+5:30'),[27, 0, 14, 0]],[new Date('23 April 2020, 08:00 GMT+5:30'),[27, 0, 14, 0]],[new Date('23 April 2020, 17:00 GMT+5:30'),[27, 0, 14, 0]],[new Date('24 April 2020, 08:00 GMT+5:30'),[27, 0, 14, 0]],[new Date('24 April 2020, 17:00 GMT+5:30'),[27, 0, 14, 0]],[new Date('25 April 2020, 08:00 GMT+5:30'),[27, 0, 14, 0]],[new Date('25 April 2020, 17:00 GMT+5:30'),[28, 0, 15, 0]],[new Date('26 April 2020, 08:00 GMT+5:30'),[28, 0, 15, 0]],[new Date('26 April 2020, 17:00 GMT+5:30'),[30, 0, 17, 0]],[new Date('27 April 2020, 08:00 GMT+5:30'),[30, 0, 17, 0]],[new Date('27 April 2020, 17:00 GMT+5:30'),[30, 0, 17, 0]],[new Date('28 April 2020, 08:00 GMT+5:30'),[40, 0, 17, 0]],[new Date('28 April 2020, 17:00 GMT+5:30'),[40, 0, 17, 0]],[new Date('29 April 2020, 08:00 GMT+5:30'),[56, 0, 17, 0]],[new Date('29 April 2020, 17:00 GMT+5:30'),[56, 0, 17, 0]],[new Date('30 April 2020, 08:00 GMT+5:30'),[56, 0, 17, 0]],[new Date('30 April 2020, 17:00 GMT+5:30'),[56, 0, 17, 0]],[new Date('01 May 2020, 08:00 GMT+5:30'),[56, 0, 17, 0]],[new Date('01 May 2020, 17:00 GMT+5:30'),[56, 0, 17, 0]],[new Date('02 May 2020, 08:00 GMT+5:30'),[88, 0, 17, 0]],[new Date('02 May 2020, 17:00 GMT+5:30'),[88, 0, 17, 0]],[new Date('03 May 2020, 08:00 GMT+5:30'),[88, 0, 17, 0]],[new Date('03 May 2020, 17:00 GMT+5:30'),[94, 0, 19, 0]],[new Date('04 May 2020, 08:00 GMT+5:30'),[94, 0, 19, 0]],[new Date('04 May 2020, 17:00  GMT+5:30'),[94, 0, 19, 0]],[new Date('05 May 2020, 08:00  GMT+5:30'),[102, 0, 21, 1]],[new Date('05 May 2020, 17:00  GMT+5:30'),[102, 0, 21, 1]],[new Date('06 May 2020, 08:00  GMT+5:30'),[111, 0, 21, 1]],[new Date('07 May 2020, 08:00  GMT+5:30'),[120, 0, 21, 1]],[new Date('08 May 2020, 08:00  GMT+5:30'),[135, 0, 21, 1]],[new Date('09 May 2020, 08:00  GMT+5:30'),[150, 0, 21, 1]],[new Date('10 May 2020, 08:00  GMT+5:30'),[169, 0, 24, 2]],[new Date('11 May 2020, 08:00  GMT+5:30'),[169, 0, 24, 2]],[new Date('12 May 2020, 08:00  GMT+5:30'),[174, 0, 24, 2]],[new Date('13 May 2020, 08:00  GMT+5:30'),[187, 0, 28, 3]],[new Date('14 May 2020, 08:00  GMT+5:30'),[187, 0, 28, 3]],[new Date('15 May 2020, 08:00  GMT+5:30'),[191, 0, 37, 3]],[new Date('16 May 2020, 08:00  GMT+5:30'),[191, 0, 37, 3]],[new Date('17 May 2020, 08:00  GMT+5:30'),[191, 0, 51, 3]],[new Date('18 May 2020, 08:00  GMT+5:30'),[191, 0, 51, 3]],[new Date('19 May 2020, 08:00  GMT+5:30'),[196, 0, 54, 3]],[new Date('20 May 2020, 08:00  GMT+5:30'),[200, 0, 57, 3]],[new Date('21 May 2020, 08:00  GMT+5:30'),[202, 0, 57, 3]],[new Date('22 May 2020, 08:00  GMT+5:30'),[217, 0, 139, 3]],[new Date('23 May 2020, 08:00  GMT+5:30'),[218, 0, 178, 3]],[new Date('24 May 2020, 08:00  GMT+5:30'),[225, 0, 179, 3]],[new Date('25 May 2020, 08:00  GMT+5:30'),[238, 0, 186, 3]],[new Date('26 May 2020, 08:00  GMT+5:30'),[238, 0, 186, 3]],[new Date('27 May 2020, 08:00  GMT+5:30'),[266, 0, 187, 4]],[new Date('28 May 2020, 08:00  GMT+5:30'),[279, 0, 187, 4]],[new Date('29 May 2020, 08:00  GMT+5:30'),[288, 0, 189, 4]],[new Date('30 May 2020, 08:00  GMT+5:30'),[289, 0, 189, 4]],[new Date('31 May 2020, 08:00  GMT+5:30'),[289, 0, 189, 4]],[new Date('01 June 2020, 08:00  GMT+5:30'),[293, 0, 199, 4]],[new Date('02 June 2020, 08:00  GMT+5:30'),[294, 0, 199, 4]],[new Date('03 June 2020, 08:00  GMT+5:30'),[301, 0, 214, 5]],[new Date('04 June 2020, 08:00  GMT+5:30'),[301, 0, 214, 5]],[new Date('05 June 2020, 08:00  GMT+5:30'),[301, 0, 214, 5]],[new Date('06 June 2020, 08:00  GMT+5:30'),[304, 0, 222, 5]],[new Date('07 June 2020, 08:00  GMT+5:30'),[309, 0, 273, 5]],[new Date('08 June 2020, 08:00 GMT+5:30'),[314, 0, 273, 5]],[new Date('09 June 2020, 08:00  GMT+5:30'),[317, 0, 273, 5]],[new Date('10 June 2020, 08:00  GMT+5:30'),[323, 0, 286, 5]],[new Date('11 June 2020, 08:00  GMT+5:30'),[327, 0, 286, 5]],[new Date('12 June 2020, 08:00  GMT+5:30'),[332, 0, 286, 5]],[new Date('13 June 2020, 08:00  GMT+5:30'),[334, 0, 286, 5]],[new Date('14 June 2020, 08:00  GMT+5:30'),[345, 0, 286, 5]],[new Date('15 June 2020, 08:00  GMT+5:30'),[352, 0, 293, 5]],[new Date('16 June 2020, 08:00  GMT+5:30'),[354, 0, 296, 6]],[new Date('17 June 2020, 08:00  GMT+5:30'),[358, 0, 302, 6]],[new Date('18 June 2020, 08:00  GMT+5:30'),[368, 0, 303, 6]],[new Date('19 June 2020, 08:00  GMT+5:30'),[374, 0, 306, 6]],[new Date('20 June 2020, 08:00  GMT+5:30'),[381, 0, 315, 6]],[new Date('21 June 2020, 08:00  GMT+5:30'),[404, 0, 316, 6]],[new Date('22 June 2020, 08:00  GMT+5:30'),[406, 0, 316, 6]],[new Date('23 June 2020, 08:00  GMT+5:30'),[411, 0, 322, 6]],[new Date('24	June 2020, 08:00  GMT+5:30'),[418, 0, 322, 6]],[new Date('25	June 2020, 08:00  GMT+5:30'),[420, 0, 323, 6]],[new Date('26	June 2020, 08:00  GMT+5:30'),[423, 0, 329, 6]],[new Date('27	June 2020, 08:00  GMT+5:30'),[425, 0, 335, 6]],[new Date('28	June 2020, 08:00  GMT+5:30'),[428, 0, 335, 6]],[new Date('29	June 2020, 08:00  GMT+5:30'),[429, 0, 336, 6]],[new Date('30	June 2020, 08:00  GMT+5:30'),[435, 0, 349, 6]],[new Date('01	July 2020, 08:00  GMT+5:30'),[440, 0, 364, 6]],[new Date('02	July 2020, 08:00  GMT+5:30'),[446, 0, 367, 6]],[new Date('03	July 2020, 08:00  GMT+5:30'),[450, 0, 389, 6]],[new Date('04	July 2020, 08:00  GMT+5:30'),[457, 0, 393, 6]],[new Date('05	July 2020, 08:00  GMT+5:30'),[460, 0, 395, 6]],[new Date('06	July 2020, 08:00  GMT+5:30'),[466, 0, 395, 6]],[new Date('07	July 2020, 08:00  GMT+5:30'),[489, 0, 401, 6]],[new Date('08	July 2020, 08:00  GMT+5:30'),[494, 0, 401, 7]],[new Date('09	July 2020, 08:00  GMT+5:30'),[513, 0, 402, 7]],[new Date('10	July 2020, 08:00  GMT+5:30'),[523, 0, 403, 7]],[new Date('11	July 2020, 08:00  GMT+5:30'),[539, 0, 408, 7]],[new Date('12	July 2020, 08:00  GMT+5:30'),[555, 0, 413, 7]],[new Date('13	July 2020, 08:00  GMT+5:30'),[559, 0, 417, 8]],[new Date('14	July 2020, 08:00  GMT+5:30'),[588, 0, 423, 8]],[new Date('15	July 2020, 08:00  GMT+5:30'),[600, 0, 446, 10]],[new Date('16	July 2020, 08:00  GMT+5:30'),[625, 0, 459, 11]],[new Date('17	July 2020, 08:00  GMT+5:30'),[651, 0, 476, 11]]];