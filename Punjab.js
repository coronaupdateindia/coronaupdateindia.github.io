var rawData=[[new Date(2020,02,15,12,0),[ 1, 0,0,0]],[new Date(2020,02,15,17,0),[ 1, 0,0,0]],[new Date(2020,02,15,23,30),[ 1, 0,0,0]],[new Date(2020,02,16,16,0),[ 1, 0,0,0]],[new Date(2020,02,17,9,15),[ 1, 0,0,0]],[new Date(2020,02,17,17,15),[ 1, 0,0,0]],[new Date(2020,02,24,20,15),[29, 0, 0, 1]],[new Date(2020,02,25,9,15),[29, 0, 0, 1]],[new Date(2020,02,25,18,45),[29, 0, 0, 1]],[new Date(2020,02,26,10,15),[33, 0, 0, 1]],[new Date(2020,02,26,20,00),[33, 0, 0, 1]],[new Date(2020,02,27,9,15),[33, 0, 0, 1]],[new Date(2020,02,28,9,30),[38, 0, 1, 1]],[new Date(2020,02,28,17,45),[38, 0, 1, 1]],[new Date(2020,02,29,10,00),[38, 0, 1, 1]],[new Date(2020,02,29,19,30),[38, 0, 1, 1]],[new Date(2020,02,30,10,30),[38, 0, 1, 1]],[new Date(2020,02,30,21,30),[38, 0, 1, 1]],[new Date(2020,02,31,20,30),[41, 0, 1, 3]],[new Date('01 April 2020, 09:00 GMT+5:30'),[41, 0, 1, 3]],[new Date('01 April 2020, 19:30 GMT+5:30'),[42, 0, 1, 3]],[new Date('02 April 2020, 09:00 GMT+5:30'),[46, 0, 1, 4]],[new Date('02 April 2020, 18:00 GMT+5:30'),[46, 0, 1, 4]],[new Date('03 April 2020, 09:00 GMT+5:30'),[46, 0, 1, 4]],[new Date('03 April 2020, 18:00 GMT+5:30'),[48, 0, 1, 5]],[new Date('04 April 2020, 09:00 GMT+5:30'),[53, 0, 1, 5]],[new Date('04 April 2020, 18:00 GMT+5:30'),[57, 0, 1, 5]],[new Date('05 April 2020, 09:00 GMT+5:30'),[57, 0, 1, 5]],[new Date('05 April 2020, 18:00 GMT+5:30'),[57, 0, 1, 5]],[new Date('06 April 2020, 09:00 GMT+5:30'),[68, 0, 4, 6]],[new Date('06 April 2020, 18:00 GMT+5:30'),[76, 0, 4, 6]],[new Date('07 April 2020, 09:00 GMT+5:30'),[76, 0, 4, 6]],[new Date('07 April 2020, 18:00 GMT+5:30'),[91, 0, 4, 7]],[new Date('08 April 2020, 08:00 GMT+5:30'),[91, 0, 4, 7]],[new Date('08 April 2020, 17:00 GMT+5:30'),[91, 0, 4, 7]],[new Date('09 April 2020, 08:00 GMT+5:30'),[101, 0, 4, 8]],[new Date('09 April 2020, 17:00 GMT+5:30'),[101, 0, 4, 8]],[new Date('10 April 2020, 08:00 GMT+5:30'),[101, 0, 4, 8]],[new Date('10 April 2020, 17:00 GMT+5:30'),[132, 0, 5, 11]],[new Date('11 April 2020, 08:00 GMT+5:30'),[132, 0, 5, 11]],[new Date('11 April 2020, 17:00 GMT+5:30'),[132, 0, 5, 11]],[new Date('12 April 2020, 08:00 GMT+5:30'),[151, 0, 5, 11]],[new Date('12 April 2020, 17:00 GMT+5:30'),[151, 0, 5, 11]],[new Date('13 April 2020, 08:00 GMT+5:30'),[151, 0, 5, 11]],[new Date('13 April 2020, 17:00 GMT+5:30'),[167, 0, 14, 11]],[new Date('14 April 2020, 08:00 GMT+5:30'),[167, 0, 14, 11]],[new Date('14 April 2020, 17:00 GMT+5:30'),[176, 0, 14, 12]],[new Date('15 April 2020, 08:00 GMT+5:30'),[176, 0, 14, 12]],[new Date('15 April 2020, 17:00 GMT+5:30'),[186, 0, 14, 13]],[new Date('16 April 2020, 08:00 GMT+5:30'),[186, 0, 27, 13]],[new Date('16 April 2020, 17:00 GMT+5:30'),[186, 0, 27, 13]],[new Date('17 April 2020, 08:00 GMT+5:30'),[186, 0, 27, 13]],[new Date('17 April 2020, 17:00 GMT+5:30'),[186, 0, 27, 13]],[new Date('18 April 2020, 08:00 GMT+5:30'),[202, 0, 27, 13]],[new Date('18 April 2020, 17:00 GMT+5:30'),[202, 0, 27, 13]],[new Date('19 April 2020, 08:00 GMT+5:30'),[202, 0, 27, 13]],[new Date('19 April 2020, 17:00 GMT+5:30'),[219, 0, 31, 16]],[new Date('20 April 2020, 08:00 GMT+5:30'),[219, 0, 31, 16]],[new Date('20 April 2020, 17:00 GMT+5:30'),[219, 0, 31, 16]],[new Date('21 April 2020, 08:00 GMT+5:30'),[245, 0, 38, 16]],[new Date('21 April 2020, 17:00 GMT+5:30'),[245, 0, 39, 16]],[new Date('22 April 2020, 08:00 GMT+5:30'),[245, 0, 39, 16]],[new Date('22 April 2020, 17:00 GMT+5:30'),[251, 0, 49, 16]],[new Date('23 April 2020, 08:00 GMT+5:30'),[251, 0, 49, 16]],[new Date('23 April 2020, 17:00 GMT+5:30'),[277, 0, 65, 16]],[new Date('24 April 2020, 08:00 GMT+5:30'),[277, 0, 65, 16]],[new Date('24 April 2020, 17:00 GMT+5:30'),[277, 0, 65, 16]],[new Date('25 April 2020, 08:00 GMT+5:30'),[298, 0, 67, 17]],[new Date('25 April 2020, 17:00 GMT+5:30'),[298, 0, 67, 17]],[new Date('26 April 2020, 08:00 GMT+5:30'),[298, 0, 67, 17]],[new Date('26 April 2020, 17:00 GMT+5:30'),[298, 0, 67, 17]],[new Date('27 April 2020, 08:00 GMT+5:30'),[313, 0, 71, 18]],[new Date('27 April 2020, 17:00 GMT+5:30'),[313, 0, 71, 18]],[new Date('28 April 2020, 08:00 GMT+5:30'),[313, 0, 71, 18]],[new Date('28 April 2020, 17:00 GMT+5:30'),[313, 0, 71, 18]],[new Date('29 April 2020, 08:00 GMT+5:30'),[322, 0, 71, 19]],[new Date('29 April 2020, 17:00 GMT+5:30'),[322, 0, 71, 19]],[new Date('30 April 2020, 08:00 GMT+5:30'),[357, 0, 90, 19]],[new Date('30 April 2020, 17:00 GMT+5:30'),[357, 0, 90, 19]],[new Date('01 May 2020, 08:00 GMT+5:30'),[357, 0, 90, 19]],[new Date('01 May 2020, 17:00 GMT+5:30'),[357, 0, 90, 19]],[new Date('02 May 2020, 08:00 GMT+5:30'),[480, 0, 90, 19]],[new Date('02 May 2020, 17:00 GMT+5:30'),[772, 0, 112, 20]],[new Date('03 May 2020, 08:00 GMT+5:30'),[772, 0, 112, 20]],[new Date('03 May 2020, 17:00 GMT+5:30'),[772, 0, 112, 20]],[new Date('04 May 2020, 08:00 GMT+5:30'),[1102, 0, 117, 21]],[new Date('04 May 2020, 17:00  GMT+5:30'),[1102, 0, 117, 21]],[new Date('05 May 2020, 08:00  GMT+5:30'),[1233, 0, 121, 23]],[new Date('05 May 2020, 17:00  GMT+5:30'),[1233, 0, 128, 23]],[new Date('06 May 2020, 08:00  GMT+5:30'),[1451, 0, 133, 25]],[new Date('07 May 2020, 08:00  GMT+5:30'),[1516, 0, 135, 27]],[new Date('08 May 2020, 08:00  GMT+5:30'),[1644, 0, 149, 28]],[new Date('09 May 2020, 08:00  GMT+5:30'),[1731, 0, 152, 29]],[new Date('10 May 2020, 08:00  GMT+5:30'),[1762, 0, 157, 31]],[new Date('11 May 2020, 08:00  GMT+5:30'),[1823, 0, 166, 31]],[new Date('12 May 2020, 08:00  GMT+5:30'),[1877, 0, 168, 31]],[new Date('13 May 2020, 08:00  GMT+5:30'),[1914, 0, 171, 32]],[new Date('14 May 2020, 08:00  GMT+5:30'),[1924, 0, 200, 32]],[new Date('15 May 2020, 08:00  GMT+5:30'),[1935, 0, 223, 32]],[new Date('16 May 2020, 08:00  GMT+5:30'),[1935, 0, 305, 32]],[new Date('17 May 2020, 08:00  GMT+5:30'),[1946, 0, 1257, 32]],[new Date('18 May 2020, 08:00  GMT+5:30'),[1964, 0, 1366, 35]],[new Date('19 May 2020, 08:00  GMT+5:30'),[1980, 0, 1547, 37]],[new Date('20 May 2020, 08:00  GMT+5:30'),[2002, 0, 1642, 38]],[new Date('21 May 2020, 08:00  GMT+5:30'),[2005, 0, 1794, 38]],[new Date('22 May 2020, 08:00  GMT+5:30'),[2028, 0, 1819, 39]],[new Date('23 May 2020, 08:00  GMT+5:30'),[2029, 0, 1847, 39]],[new Date('24 May 2020, 08:00  GMT+5:30'),[2045, 0, 1870, 39]],[new Date('25 May 2020, 08:00  GMT+5:30'),[2060, 0, 1898, 40]],[new Date('26 May 2020, 08:00  GMT+5:30'),[2060, 0, 1898, 40]],[new Date('27 May 2020, 08:00  GMT+5:30'),[2106, 0, 1918, 40]],[new Date('28 May 2020, 08:00  GMT+5:30'),[2139, 0, 1918, 40]],[new Date('29 May 2020, 08:00  GMT+5:30'),[2158, 0, 1946, 40]],[new Date('30 May 2020, 08:00  GMT+5:30'),[2197, 0, 1949, 42]],[new Date('31 May 2020, 08:00  GMT+5:30'),[2233, 0, 1967, 44]],[new Date('01 June 2020, 08:00  GMT+5:30'),[2263, 0, 1987, 45]],[new Date('02 June 2020, 08:00  GMT+5:30'),[2301, 0, 2000, 45]],[new Date('03 June 2020, 08:00  GMT+5:30'),[2342, 0, 2017, 46]],[new Date('04 June 2020, 08:00  GMT+5:30'),[2376, 0, 2029, 47]],[new Date('05 June 2020, 08:00  GMT+5:30'),[2415, 0, 2043, 47]],[new Date('06 June 2020, 08:00  GMT+5:30'),[2461, 0, 2069, 48]],[new Date('07 June 2020, 08:00  GMT+5:30'),[2515, 0, 2092, 50]],[new Date('08 June 2020, 08:00  GMT+5:30'),[2608, 0, 2106, 51]],[new Date('09 June 2020, 08:00  GMT+5:30'),[2663, 0, 2128, 53]],[new Date('10 June 2020, 08:00  GMT+5:30'),[2719, 0, 2167, 55]],[new Date('11 June 2020, 08:00  GMT+5:30'),[2805, 0, 2232, 55]],[new Date('12 June 2020, 08:00  GMT+5:30'),[2887, 0, 2259, 59]],[new Date('13 June 2020, 08:00  GMT+5:30'),[2986, 0, 2282, 63]],[new Date('14 June 2020, 08:00  GMT+5:30'),[3063, 0, 2327, 65]],[new Date('15 June 2020, 08:00  GMT+5:30'),[3140, 0, 2356, 67]],[new Date('16 June 2020, 08:00  GMT+5:30'),[3267, 0, 2443, 71]],[new Date('17 June 2020, 08:00  GMT+5:30'),[3371, 0, 2461, 72]],[new Date('18 June 2020, 08:00  GMT+5:30'),[3497, 0, 2538, 78]],[new Date('19 June 2020, 08:00  GMT+5:30'),[3615, 0, 2570, 83]],[new Date('20 June 2020, 08:00  GMT+5:30'),[3832, 0, 2636, 92]],[new Date('21 June 2020, 08:00  GMT+5:30'),[3952, 0, 2678, 98]],[new Date('22 June 2020, 08:00  GMT+5:30'),[4074, 0, 2700, 99]],[new Date('23 June 2020, 08:00  GMT+5:30'),[4235, 0, 2825, 101]],[new Date('24	June 2020, 08:00  GMT+5:30'),[4397, 0, 3047, 105]],[new Date('25	June 2020, 08:00  GMT+5:30'),[4627, 0, 3099, 113]],[new Date('26	June 2020, 08:00  GMT+5:30'),[4769, 0, 3192, 120]],[new Date('27	June 2020, 08:00  GMT+5:30'),[4957, 0, 3201, 122]],[new Date('28	June 2020, 08:00  GMT+5:30'),[5056, 0, 3320, 128]]];