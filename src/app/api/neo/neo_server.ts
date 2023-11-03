import { getUrlParam } from "@/services/server/getUrlParam";
import { res, toServerError } from "@/services/server/res";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const startDate = getUrlParam(request, "startDate", true);
    const endDate = getUrlParam(request, "endDate", true);

    if(startDate === '2023-11-03') {
      return res({
        data: {
          "links": {
            "next": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2023-11-04&end_date=2023-11-04&detailed=false&api_key=wSIEjV3A6hHpFRzUJ6LV50hIsXv3knMBQJlVEacA",
            "prev": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2023-11-02&end_date=2023-11-02&detailed=false&api_key=wSIEjV3A6hHpFRzUJ6LV50hIsXv3knMBQJlVEacA",
            "self": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2023-11-03&end_date=2023-11-03&detailed=false&api_key=wSIEjV3A6hHpFRzUJ6LV50hIsXv3knMBQJlVEacA"
          },
          "element_count": 13,
          "near_earth_objects": {
            "2023-11-03": [
              {
                "links": {
                  "self": "http://api.nasa.gov/neo/rest/v1/neo/2141079?api_key=wSIEjV3A6hHpFRzUJ6LV50hIsXv3knMBQJlVEacA"
                },
                "id": "2141079",
                "neo_reference_id": "2141079",
                "name": "141079 (2001 XS30)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2141079",
                "absolute_magnitude_h": 17.76,
                "estimated_diameter": {
                  "kilometers": {
                    "estimated_diameter_min": 0.745684261,
                    "estimated_diameter_max": 1.6674006973
                  },
                  "meters": {
                    "estimated_diameter_min": 745.6842609676,
                    "estimated_diameter_max": 1667.4006972752
                  },
                  "miles": {
                    "estimated_diameter_min": 0.4633465749,
                    "estimated_diameter_max": 1.0360744387
                  },
                  "feet": {
                    "estimated_diameter_min": 2446.4707507528,
                    "estimated_diameter_max": 5470.4749036483
                  }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                  {
                    "close_approach_date": "2023-11-03",
                    "close_approach_date_full": "2023-Nov-03 12:55",
                    "epoch_date_close_approach": 1699016100000,
                    "relative_velocity": {
                      "kilometers_per_second": "33.3352680154",
                      "kilometers_per_hour": "120006.9648553162",
                      "miles_per_hour": "74567.6610235713"
                    },
                    "miss_distance": {
                      "astronomical": "0.3186999572",
                      "lunar": "123.9742833508",
                      "kilometers": "47676834.766211164",
                      "miles": "29625011.3936915032"
                    },
                    "orbiting_body": "Earth"
                  }
                ],
                "is_sentry_object": false
              },
              {
                "links": {
                  "self": "http://api.nasa.gov/neo/rest/v1/neo/2164121?api_key=wSIEjV3A6hHpFRzUJ6LV50hIsXv3knMBQJlVEacA"
                },
                "id": "2164121",
                "neo_reference_id": "2164121",
                "name": "164121 (2003 YT1)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2164121",
                "absolute_magnitude_h": 16.33,
                "estimated_diameter": {
                  "kilometers": {
                    "estimated_diameter_min": 1.4406383667,
                    "estimated_diameter_max": 3.2213653189
                  },
                  "meters": {
                    "estimated_diameter_min": 1440.6383666875,
                    "estimated_diameter_max": 3221.3653189076
                  },
                  "miles": {
                    "estimated_diameter_min": 0.8951709025,
                    "estimated_diameter_max": 2.0016629896
                  },
                  "feet": {
                    "estimated_diameter_min": 4726.5039789631,
                    "estimated_diameter_max": 10568.7841928847
                  }
                },
                "is_potentially_hazardous_asteroid": true,
                "close_approach_data": [
                  {
                    "close_approach_date": "2023-11-03",
                    "close_approach_date_full": "2023-Nov-03 12:33",
                    "epoch_date_close_approach": 1699014780000,
                    "relative_velocity": {
                      "kilometers_per_second": "23.251000116",
                      "kilometers_per_hour": "83703.6004174927",
                      "miles_per_hour": "52010.1621594137"
                    },
                    "miss_distance": {
                      "astronomical": "0.0593578678",
                      "lunar": "23.0902105742",
                      "kilometers": "8879810.590621586",
                      "miles": "5517658.4437904468"
                    },
                    "orbiting_body": "Earth"
                  }
                ],
                "is_sentry_object": false
              },
              {
                "links": {
                  "self": "http://api.nasa.gov/neo/rest/v1/neo/2495615?api_key=wSIEjV3A6hHpFRzUJ6LV50hIsXv3knMBQJlVEacA"
                },
                "id": "2495615",
                "neo_reference_id": "2495615",
                "name": "495615 (2015 PQ291)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2495615",
                "absolute_magnitude_h": 17.71,
                "estimated_diameter": {
                  "kilometers": {
                    "estimated_diameter_min": 0.7630534787,
                    "estimated_diameter_max": 1.7062394488
                  },
                  "meters": {
                    "estimated_diameter_min": 763.0534787022,
                    "estimated_diameter_max": 1706.2394488457
                  },
                  "miles": {
                    "estimated_diameter_min": 0.4741393031,
                    "estimated_diameter_max": 1.0602077126
                  },
                  "feet": {
                    "estimated_diameter_min": 2503.4563750652,
                    "estimated_diameter_max": 5597.898633351
                  }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                  {
                    "close_approach_date": "2023-11-03",
                    "close_approach_date_full": "2023-Nov-03 04:20",
                    "epoch_date_close_approach": 1698985200000,
                    "relative_velocity": {
                      "kilometers_per_second": "21.9916689147",
                      "kilometers_per_hour": "79170.0080928257",
                      "miles_per_hour": "49193.1641952338"
                    },
                    "miss_distance": {
                      "astronomical": "0.2639330408",
                      "lunar": "102.6699528712",
                      "kilometers": "39483820.726303096",
                      "miles": "24534108.5375948848"
                    },
                    "orbiting_body": "Earth"
                  }
                ],
                "is_sentry_object": false
              },
              {
                "links": {
                  "self": "http://api.nasa.gov/neo/rest/v1/neo/3160853?api_key=wSIEjV3A6hHpFRzUJ6LV50hIsXv3knMBQJlVEacA"
                },
                "id": "3160853",
                "neo_reference_id": "3160853",
                "name": "(2003 TG2)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3160853",
                "absolute_magnitude_h": 21.32,
                "estimated_diameter": {
                  "kilometers": {
                    "estimated_diameter_min": 0.1447288051,
                    "estimated_diameter_max": 0.3236234466
                  },
                  "meters": {
                    "estimated_diameter_min": 144.7288051255,
                    "estimated_diameter_max": 323.623446563
                  },
                  "miles": {
                    "estimated_diameter_min": 0.0899302824,
                    "estimated_diameter_max": 0.2010902246
                  },
                  "feet": {
                    "estimated_diameter_min": 474.832053008,
                    "estimated_diameter_max": 1061.7567484217
                  }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                  {
                    "close_approach_date": "2023-11-03",
                    "close_approach_date_full": "2023-Nov-03 09:10",
                    "epoch_date_close_approach": 1699002600000,
                    "relative_velocity": {
                      "kilometers_per_second": "14.9359708082",
                      "kilometers_per_hour": "53769.4949095769",
                      "miles_per_hour": "33410.2731008979"
                    },
                    "miss_distance": {
                      "astronomical": "0.2662615737",
                      "lunar": "103.5757521693",
                      "kilometers": "39832164.288368019",
                      "miles": "24750559.1901119022"
                    },
                    "orbiting_body": "Earth"
                  }
                ],
                "is_sentry_object": false
              },
              {
                "links": {
                  "self": "http://api.nasa.gov/neo/rest/v1/neo/3525129?api_key=wSIEjV3A6hHpFRzUJ6LV50hIsXv3knMBQJlVEacA"
                },
                "id": "3525129",
                "neo_reference_id": "3525129",
                "name": "(2010 KV39)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3525129",
                "absolute_magnitude_h": 26.8,
                "estimated_diameter": {
                  "kilometers": {
                    "estimated_diameter_min": 0.0116025908,
                    "estimated_diameter_max": 0.0259441818
                  },
                  "meters": {
                    "estimated_diameter_min": 11.6025908209,
                    "estimated_diameter_max": 25.9441817907
                  },
                  "miles": {
                    "estimated_diameter_min": 0.0072095135,
                    "estimated_diameter_max": 0.0161209622
                  },
                  "feet": {
                    "estimated_diameter_min": 38.066244069,
                    "estimated_diameter_max": 85.1187093863
                  }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                  {
                    "close_approach_date": "2023-11-03",
                    "close_approach_date_full": "2023-Nov-03 09:28",
                    "epoch_date_close_approach": 1699003680000,
                    "relative_velocity": {
                      "kilometers_per_second": "10.5283242184",
                      "kilometers_per_hour": "37901.9671860661",
                      "miles_per_hour": "23550.8084440309"
                    },
                    "miss_distance": {
                      "astronomical": "0.2722362545",
                      "lunar": "105.8999030005",
                      "kilometers": "40725963.809977915",
                      "miles": "25305940.459468627"
                    },
                    "orbiting_body": "Earth"
                  }
                ],
                "is_sentry_object": false
              },
              {
                "links": {
                  "self": "http://api.nasa.gov/neo/rest/v1/neo/3653902?api_key=wSIEjV3A6hHpFRzUJ6LV50hIsXv3knMBQJlVEacA"
                },
                "id": "3653902",
                "neo_reference_id": "3653902",
                "name": "(2013 WR43)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3653902",
                "absolute_magnitude_h": 21.8,
                "estimated_diameter": {
                  "kilometers": {
                    "estimated_diameter_min": 0.1160259082,
                    "estimated_diameter_max": 0.2594418179
                  },
                  "meters": {
                    "estimated_diameter_min": 116.0259082094,
                    "estimated_diameter_max": 259.4418179074
                  },
                  "miles": {
                    "estimated_diameter_min": 0.0720951346,
                    "estimated_diameter_max": 0.1612096218
                  },
                  "feet": {
                    "estimated_diameter_min": 380.6624406898,
                    "estimated_diameter_max": 851.1870938635
                  }
                },
                "is_potentially_hazardous_asteroid": true,
                "close_approach_data": [
                  {
                    "close_approach_date": "2023-11-03",
                    "close_approach_date_full": "2023-Nov-03 09:40",
                    "epoch_date_close_approach": 1699004400000,
                    "relative_velocity": {
                      "kilometers_per_second": "20.5080580264",
                      "kilometers_per_hour": "73829.0088952157",
                      "miles_per_hour": "45874.4749993633"
                    },
                    "miss_distance": {
                      "astronomical": "0.3991185722",
                      "lunar": "155.2571245858",
                      "kilometers": "59707288.278561214",
                      "miles": "37100388.5684201932"
                    },
                    "orbiting_body": "Earth"
                  }
                ],
                "is_sentry_object": false
              },
              {
                "links": {
                  "self": "http://api.nasa.gov/neo/rest/v1/neo/3763426?api_key=wSIEjV3A6hHpFRzUJ6LV50hIsXv3knMBQJlVEacA"
                },
                "id": "3763426",
                "neo_reference_id": "3763426",
                "name": "(2016 VW2)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3763426",
                "absolute_magnitude_h": 26.3,
                "estimated_diameter": {
                  "kilometers": {
                    "estimated_diameter_min": 0.0146067964,
                    "estimated_diameter_max": 0.0326617897
                  },
                  "meters": {
                    "estimated_diameter_min": 14.6067964271,
                    "estimated_diameter_max": 32.6617897446
                  },
                  "miles": {
                    "estimated_diameter_min": 0.0090762397,
                    "estimated_diameter_max": 0.020295089
                  },
                  "feet": {
                    "estimated_diameter_min": 47.92256199,
                    "estimated_diameter_max": 107.1581062656
                  }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                  {
                    "close_approach_date": "2023-11-03",
                    "close_approach_date_full": "2023-Nov-03 22:53",
                    "epoch_date_close_approach": 1699051980000,
                    "relative_velocity": {
                      "kilometers_per_second": "8.1017528121",
                      "kilometers_per_hour": "29166.3101234079",
                      "miles_per_hour": "18122.810865292"
                    },
                    "miss_distance": {
                      "astronomical": "0.0258167485",
                      "lunar": "10.0427151665",
                      "kilometers": "3862130.585925695",
                      "miles": "2399816.665116791"
                    },
                    "orbiting_body": "Earth"
                  }
                ],
                "is_sentry_object": false
              },
              {
                "links": {
                  "self": "http://api.nasa.gov/neo/rest/v1/neo/3764802?api_key=wSIEjV3A6hHpFRzUJ6LV50hIsXv3knMBQJlVEacA"
                },
                "id": "3764802",
                "neo_reference_id": "3764802",
                "name": "(2016 WS7)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3764802",
                "absolute_magnitude_h": 24.8,
                "estimated_diameter": {
                  "kilometers": {
                    "estimated_diameter_min": 0.0291443905,
                    "estimated_diameter_max": 0.0651688382
                  },
                  "meters": {
                    "estimated_diameter_min": 29.1443904535,
                    "estimated_diameter_max": 65.1688382168
                  },
                  "miles": {
                    "estimated_diameter_min": 0.018109479,
                    "estimated_diameter_max": 0.0404940262
                  },
                  "feet": {
                    "estimated_diameter_min": 95.6180819754,
                    "estimated_diameter_max": 213.8085311752
                  }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                  {
                    "close_approach_date": "2023-11-03",
                    "close_approach_date_full": "2023-Nov-03 04:08",
                    "epoch_date_close_approach": 1698984480000,
                    "relative_velocity": {
                      "kilometers_per_second": "7.8595153381",
                      "kilometers_per_hour": "28294.2552173081",
                      "miles_per_hour": "17580.9498598879"
                    },
                    "miss_distance": {
                      "astronomical": "0.1513496339",
                      "lunar": "58.8750075871",
                      "kilometers": "22641582.856719793",
                      "miles": "14068827.2069794234"
                    },
                    "orbiting_body": "Earth"
                  }
                ],
                "is_sentry_object": false
              },
              {
                "links": {
                  "self": "http://api.nasa.gov/neo/rest/v1/neo/3798998?api_key=wSIEjV3A6hHpFRzUJ6LV50hIsXv3knMBQJlVEacA"
                },
                "id": "3798998",
                "neo_reference_id": "3798998",
                "name": "(2018 CH)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3798998",
                "absolute_magnitude_h": 26.4,
                "estimated_diameter": {
                  "kilometers": {
                    "estimated_diameter_min": 0.0139493823,
                    "estimated_diameter_max": 0.0311917671
                  },
                  "meters": {
                    "estimated_diameter_min": 13.9493822934,
                    "estimated_diameter_max": 31.1917670523
                  },
                  "miles": {
                    "estimated_diameter_min": 0.0086677416,
                    "estimated_diameter_max": 0.0193816595
                  },
                  "feet": {
                    "estimated_diameter_min": 45.7656914036,
                    "estimated_diameter_max": 102.3351970157
                  }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                  {
                    "close_approach_date": "2023-11-03",
                    "close_approach_date_full": "2023-Nov-03 23:27",
                    "epoch_date_close_approach": 1699054020000,
                    "relative_velocity": {
                      "kilometers_per_second": "15.0875674836",
                      "kilometers_per_hour": "54315.2429408304",
                      "miles_per_hour": "33749.3797039843"
                    },
                    "miss_distance": {
                      "astronomical": "0.4454129891",
                      "lunar": "173.2656527599",
                      "kilometers": "66632834.439693217",
                      "miles": "41403723.4046597146"
                    },
                    "orbiting_body": "Earth"
                  }
                ],
                "is_sentry_object": false
              },
              {
                "links": {
                  "self": "http://api.nasa.gov/neo/rest/v1/neo/54091636?api_key=wSIEjV3A6hHpFRzUJ6LV50hIsXv3knMBQJlVEacA"
                },
                "id": "54091636",
                "neo_reference_id": "54091636",
                "name": "(2020 WS1)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54091636",
                "absolute_magnitude_h": 27.1,
                "estimated_diameter": {
                  "kilometers": {
                    "estimated_diameter_min": 0.0101054342,
                    "estimated_diameter_max": 0.0225964377
                  },
                  "meters": {
                    "estimated_diameter_min": 10.1054341542,
                    "estimated_diameter_max": 22.5964377109
                  },
                  "miles": {
                    "estimated_diameter_min": 0.0062792237,
                    "estimated_diameter_max": 0.0140407711
                  },
                  "feet": {
                    "estimated_diameter_min": 33.1543125905,
                    "estimated_diameter_max": 74.1352966996
                  }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                  {
                    "close_approach_date": "2023-11-03",
                    "close_approach_date_full": "2023-Nov-03 20:52",
                    "epoch_date_close_approach": 1699044720000,
                    "relative_velocity": {
                      "kilometers_per_second": "17.2038045469",
                      "kilometers_per_hour": "61933.6963688566",
                      "miles_per_hour": "38483.1903909709"
                    },
                    "miss_distance": {
                      "astronomical": "0.2086330294",
                      "lunar": "81.1582484366",
                      "kilometers": "31211056.809887378",
                      "miles": "19393651.4060986964"
                    },
                    "orbiting_body": "Earth"
                  }
                ],
                "is_sentry_object": false
              },
              {
                "links": {
                  "self": "http://api.nasa.gov/neo/rest/v1/neo/54278099?api_key=wSIEjV3A6hHpFRzUJ6LV50hIsXv3knMBQJlVEacA"
                },
                "id": "54278099",
                "neo_reference_id": "54278099",
                "name": "(2022 JF)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54278099",
                "absolute_magnitude_h": 24.77,
                "estimated_diameter": {
                  "kilometers": {
                    "estimated_diameter_min": 0.0295498293,
                    "estimated_diameter_max": 0.0660754271
                  },
                  "meters": {
                    "estimated_diameter_min": 29.5498293111,
                    "estimated_diameter_max": 66.0754270632
                  },
                  "miles": {
                    "estimated_diameter_min": 0.018361407,
                    "estimated_diameter_max": 0.0410573542
                  },
                  "feet": {
                    "estimated_diameter_min": 96.9482619972,
                    "estimated_diameter_max": 216.7829041261
                  }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                  {
                    "close_approach_date": "2023-11-03",
                    "close_approach_date_full": "2023-Nov-03 05:38",
                    "epoch_date_close_approach": 1698989880000,
                    "relative_velocity": {
                      "kilometers_per_second": "17.1511616027",
                      "kilometers_per_hour": "61744.1817698903",
                      "miles_per_hour": "38365.4333891854"
                    },
                    "miss_distance": {
                      "astronomical": "0.0388197427",
                      "lunar": "15.1008799103",
                      "kilometers": "5807350.821868049",
                      "miles": "3608520.4713911162"
                    },
                    "orbiting_body": "Earth"
                  }
                ],
                "is_sentry_object": false
              },
              {
                "links": {
                  "self": "http://api.nasa.gov/neo/rest/v1/neo/54320195?api_key=wSIEjV3A6hHpFRzUJ6LV50hIsXv3knMBQJlVEacA"
                },
                "id": "54320195",
                "neo_reference_id": "54320195",
                "name": "(2022 UK9)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54320195",
                "absolute_magnitude_h": 27.16,
                "estimated_diameter": {
                  "kilometers": {
                    "estimated_diameter_min": 0.009830033,
                    "estimated_diameter_max": 0.0219806221
                  },
                  "meters": {
                    "estimated_diameter_min": 9.8300330186,
                    "estimated_diameter_max": 21.9806220506
                  },
                  "miles": {
                    "estimated_diameter_min": 0.0061080974,
                    "estimated_diameter_max": 0.0136581211
                  },
                  "feet": {
                    "estimated_diameter_min": 32.2507655286,
                    "estimated_diameter_max": 72.1149040484
                  }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                  {
                    "close_approach_date": "2023-11-03",
                    "close_approach_date_full": "2023-Nov-03 13:00",
                    "epoch_date_close_approach": 1699016400000,
                    "relative_velocity": {
                      "kilometers_per_second": "16.062720204",
                      "kilometers_per_hour": "57825.7927344173",
                      "miles_per_hour": "35930.6988243383"
                    },
                    "miss_distance": {
                      "astronomical": "0.4071622954",
                      "lunar": "158.3861329106",
                      "kilometers": "60910612.136150798",
                      "miles": "37848099.3417170924"
                    },
                    "orbiting_body": "Earth"
                  }
                ],
                "is_sentry_object": false
              },
              {
                "links": {
                  "self": "http://api.nasa.gov/neo/rest/v1/neo/54347924?api_key=wSIEjV3A6hHpFRzUJ6LV50hIsXv3knMBQJlVEacA"
                },
                "id": "54347924",
                "neo_reference_id": "54347924",
                "name": "(2023 EJ1)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54347924",
                "absolute_magnitude_h": 28.77,
                "estimated_diameter": {
                  "kilometers": {
                    "estimated_diameter_min": 0.0046833323,
                    "estimated_diameter_max": 0.0104722495
                  },
                  "meters": {
                    "estimated_diameter_min": 4.6833323314,
                    "estimated_diameter_max": 10.4722494541
                  },
                  "miles": {
                    "estimated_diameter_min": 0.0029100869,
                    "estimated_diameter_max": 0.0065071521
                  },
                  "feet": {
                    "estimated_diameter_min": 15.365264046,
                    "estimated_diameter_max": 34.3577748991
                  }
                },
                "is_potentially_hazardous_asteroid": false,
                "close_approach_data": [
                  {
                    "close_approach_date": "2023-11-03",
                    "close_approach_date_full": "2023-Nov-03 10:19",
                    "epoch_date_close_approach": 1699006740000,
                    "relative_velocity": {
                      "kilometers_per_second": "7.4252521614",
                      "kilometers_per_hour": "26730.9077809352",
                      "miles_per_hour": "16609.5465597705"
                    },
                    "miss_distance": {
                      "astronomical": "0.2362978253",
                      "lunar": "91.9198540417",
                      "kilometers": "35349651.350512111",
                      "miles": "21965254.8068086918"
                    },
                    "orbiting_body": "Earth"
                  }
                ],
                "is_sentry_object": false
              }
            ]
          }
        }
      });
    }

    const result = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&detailed=false&api_key=${process.env.API_KEY}`)

    const data = await result.json();

    return res({ data });
  } catch (error) {
    return res({ error: toServerError(error) });
  }
}
