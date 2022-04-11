const climateStartTimes = [
    1.973599,
    6.7182107,
    12.320995,
    18.25,
    25.863718,
    33.658382,
    40.675625,
    46.951378,
    56.62516,
    62.191124,
    79.444466,
    86.15081,
    91.11253,
    95.33746,
    101.530426,
    106.966705,
    112.70942,
    122.81214,
    133.66406,
    138.25925,
    147.02469,
    163.3718,
    178.49843,
    181.09258,
    201.465,
    208.17923,
    223.5346,
    232.45898,
    233.29788,
    244.46501,
    246.95793,
    251.383,
    255.50438,
    259.1755,
    263.93875,
    267.92676,
    270.16003,
    271.35645,
    273.685,
    279.285,
    283.3396,
    286.45532,
    291.1422,
    303.97,
    305.89,
    308.8243,
    311.81226,
    316.40906,
    324.06488,
    325.8747,
    333.9596,
    340.67093,
    346.83765,
    358.32275,
    361.23267,
    363.30548,
    368.10443,
    373.48743,
    380.28064,
    391.20007,
    395.01508,
    397.37506,
    400.87006,
    405.59006,
    408.88455,
    412.59555,
    418.9121,
    420.22684,
    421.97977,
    428.48862,
    432.1298,
    434.807,
    437.40433,
    441.77505,
    447.33505,
    456.1264,
    466.0886,
    470.19577,
    471.55154,
    475.83423,
    492.4237,
    503.02005,
    509.31436,
    515.54645,
    519.68005,
    525.9346,
    528.2897,
    541.82605,
    554.561,
    559.0446,
    560.4427,
    563.7182,
    573.30676,
    578.6226,
    583.3,
    586.13995,
    593.035,
    599.6093,
    605.9126,
    610.52045,
    629.925,
    637.97473,
    649.44165,
    656.2321,
    660.0343,
    664.9078,
    667.4785,
    671.66473,
    678.34503,
    679.74506,
    686.58966,
    693.34503,
    695.18506,
    701.465,
    705.5155,
    716.93884,
    722.1276,
    726.0139,
    733.16956,
    748.495,
    749.41504,
    752.39,
    754.27,
    755.71,
    760.3235,
    775.98474,
    780.819,
    782.3771,
    784.3493,
    793.775,
    797.175,
    800.94946,
    804.21924,
    806.851,
    812.6901,
    814.48627,
    819.93,
    827.0642,
    834.54,
    839.86,
    848.315,
    856.9988,
    860.1521,
    861.3645,
    862.6412,
    866.3517,
    868.2667,
    869.4794,
    875.1132,
    878.48425,
    881.5575,
    884.51105,
    889.2799,
    891.99994,
    893.9199,
    898.32794,
    901.07965,
    906.2399,
    912.3599,
    925.86786,
    927.98035,
    929.4551,
    931.08923,
    942.2791,
    949.37695,
    956.60693,
    957.84247,
    960.1299,
    962.2099,
    965.9699,
    968.5437,
    969.5006,
    972.8898,
    975.1226,
    976.5182,
    978.16766,
    981.2764,
    986.2736,
    988.8255,
    990.50024,
    1001.7399,
    1018.30334,
    1022.8246,
    1027.8589,
    1035.6653,
    1047.5948,
    1048.5298,
    1054.0098,
    1062.5448,
    1072.6637,
    1083.6385,
    1096.0251,
    1096.8623,
    1098.457,
    1106.1499,
    1109.1599,
    1113.6302,
    1121.0728,
    1125.9155,
    1128.4669,
    1130.0615,
    1142.0543,
    1146.0049,
    1150.6086,
    1152.0842,
    1164.6749,
    1168.0099,
    1177.3442,
    1180.8994,
    1189.7764,
    1197.9319,
    1204.9647,
    1206.5988,
    1207.4756,
    1209.5234,
    1219.5879,
    1222.5388,
    1223.7751,
    1229.134,
    1231.807,
    1234.2805,
    1236.9302,
    1239.8102,
    1241.2902,
    1243.3701,
    1245.4231,
    1247.1772,
    1248.6124,
    1251.5226,
    1253.0773,
    1258.318,
    1261.9645,
    1272.1702,
    1277.8636,
    1291.7002,
    1301.6589,
    1312.8552,
    1319.8702,
    1326.2443,
    1330.2307,
    1332.9414,
    1350.7693,
    1355.3131,
    1359.1554,
    1367.7954,
    1371.6904,
    1381.9055,
    1386.6348,
    1397.057,
    1401.1647,
    1407.5586,
    1409.9501,
    1422.6086,
    1432.674,
    1442.1498,
    1452.5955,
    1461.7599,
    1470.4327,
    1477.679,
    1485.3604,
    1490.2603,
    1498.8705,
    1507.5903,
    1511.5504,
    1525.2704,
    1531.0046,
    1535.5149,
    1547.0804,
    1552.1676,
    1567.0726,
    1570.5654,
    1576.7004,
    1580.8204,
    1592.8505,
    1597.9805,
    1599.1404,
    1609.8579,
    1614.5979,
    1622.7063,
    1627.6687,
    1630.3054,
    1635.554,
    1640.3083,
    1650.9716,
    1661.1104,
    1666.2549,
    1668.5431,
    1671.4144,
    1678.6481,
    1695.1003,
    1706.8943,
    1709.8604,
    1714.6604,
    1716.2747,
    1717.4717,
    1720.3442,
    1724.2692,
    1728.1781,
    1731.1049,
    1732.2623,
    1740.3004,
    1749.8754,
    1751.1154,
    1754.9554,
    1764.1248,
    1772.48,
    1778.5963,
    1784.8743,
    1791.2937,
    1806.459,
    1816.2056,
    1824.6056,
    1834.575,
    1837.247,
    1840.2379,
    1845.1587,
    1848.3115,
    1857.7156,
    1863.4106,
    1866.7306,
    1871.2651,
    1877.1775,
    1878.9902,
    1884.5441,
    1887.9153,
    1889.4336,
    1892.2305,
    1896.9592,
    1907.0645,
    1919.9404,
    1924.3536,
    1927.3047,
    1930.3755,
    1934.2593,
    1937.5721,
    1948.5754,
    1950.4955,
    1965.1338,
    1972.9711,
    1976.5237,
    2002.2172
]

export default climateStartTimes;