const styling = {
  "version": 8,
  "sprite": "https://cdn.arcgis.com/sharing/rest/content/items/effe3475f05a4d608e66fd6eeb2113c0/resources/styles/../sprites/sprite",
  "glyphs": "https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/resources/fonts/{fontstack}/{range}.pbf",
  "sources": {
    "esri": {
      "type": "vector",
      "url": "https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer"
    }
  },
  "layers": [
    {
      "id": "Land/Not ice/0",
      "type": "fill",
      "source": "esri",
      "source-layer": "Land",
      "minzoom": 0,
      "layout": {},
      "paint": {
        "fill-opacity": 0.5,
        "fill-color": {
          "stops": [
            [
              0,
              "#eee5d4"
            ],
            [
              14,
              "#eee5d4"
            ],
            [
              15,
              "#ebe1cd"
            ]
          ]
        }
      }
    },
    {
      "id": "Land/Not ice/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Land",
      "minzoom": 0,
      "layout": {},
      "paint": {
        "fill-pattern": "Landpattern",
        "fill-opacity": 0.6
      }
    },
    {
      "id": "Urban area",
      "type": "fill",
      "source": "esri",
      "source-layer": "Urban area",
      "minzoom": 5,
      "maxzoom": 15,
      "layout": {},
      "paint": {
        "fill-opacity": 0.2,
        "fill-color": {
          "stops": [
            [
              5,
              "#B3AB80"
            ],
            [
              10,
              "#D9D1BA"
            ],
            [
              12,
              "#EBE6D8"
            ]
          ]
        }
      }
    },
    {
      "id": "Vegetation small scale/High density",
      "type": "fill",
      "source": "esri",
      "source-layer": "Vegetation small scale",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "maxzoom": 11,
      "layout": {},
      "paint": {
        "fill-color": "#dddac4",
        "fill-opacity": {
          "stops": [
            [
              0,
              0.35
            ],
            [
              6,
              0.3
            ],
            [
              7,
              0.15
            ]
          ]
        }
      }
    },
    {
      "id": "Vegetation small scale/Low density",
      "type": "fill",
      "source": "esri",
      "source-layer": "Vegetation small scale",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "maxzoom": 11,
      "layout": {},
      "paint": {
        "fill-color": "#d1cdb0",
        "fill-opacity": {
          "stops": [
            [
              0,
              0.35
            ],
            [
              6,
              0.3
            ],
            [
              7,
              0.15
            ]
          ]
        }
      }
    },
    {
      "id": "Openspace or forest/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Openspace or forest",
      "minzoom": 10,
      "layout": {},
      "paint": {
        "fill-color": "#BDB788",
        "fill-opacity": 0.12
      }
    },
    {
      "id": "Openspace or forest/0",
      "type": "fill",
      "source": "esri",
      "source-layer": "Openspace or forest",
      "minzoom": 10,
      "layout": {},
      "paint": {
        "fill-pattern": "Park or farming",
        "fill-opacity": 0.12
      }
    },
    {
      "id": "Admin0 forest or park",
      "type": "fill",
      "source": "esri",
      "source-layer": "Admin0 forest or park",
      "minzoom": 6,
      "layout": {},
      "paint": {
        "fill-color": "#BDB788",
        "fill-opacity": 0.12
      }
    },
    {
      "id": "Admin1 forest or park",
      "type": "fill",
      "source": "esri",
      "source-layer": "Admin1 forest or park",
      "minzoom": 7,
      "layout": {},
      "paint": {
        "fill-color": "#BDB788",
        "fill-opacity": 0.12
      }
    },
    {
      "id": "Zoo/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Zoo",
      "minzoom": 11,
      "layout": {},
      "paint": {
        "fill-color": "#a0aa46",
        "fill-opacity": 0.2
      }
    },
    {
      "id": "Zoo/0",
      "type": "fill",
      "source": "esri",
      "source-layer": "Zoo",
      "minzoom": 11,
      "layout": {},
      "paint": {
        "fill-pattern": "Park or farming",
        "fill-opacity": 0.2
      }
    },
    {
      "id": "Military",
      "type": "fill",
      "source": "esri",
      "source-layer": "Military",
      "minzoom": 6,
      "layout": {},
      "paint": {
        "fill-color": {
          "stops": [
            [
              6,
              "#9b8970"
            ],
            [
              15,
              "#ccc4b8"
            ]
          ]
        },
        "fill-outline-color": "#45402c",
        "fill-opacity": 0.2
      }
    },
    {
      "id": "Port",
      "type": "fill",
      "source": "esri",
      "source-layer": "Port",
      "minzoom": 12,
      "layout": {},
      "paint": {
        "fill-color": "#D1C9BE",
        "fill-opacity": 0.2
      }
    },
    {
      "id": "Transportation",
      "type": "fill",
      "source": "esri",
      "source-layer": "Transportation",
      "minzoom": 13,
      "layout": {},
      "paint": {
        "fill-color": {
          "stops": [
            [
              10,
              "#CCC4B8"
            ],
            [
              15,
              "#dbd5cd"
            ]
          ]
        },
        "fill-opacity": 0.6
      }
    },
    {
      "id": "Industry",
      "type": "fill",
      "source": "esri",
      "source-layer": "Industry",
      "minzoom": 12,
      "layout": {},
      "paint": {
        "fill-color": "#D1C9BE",
        "fill-opacity": 0.2
      }
    },
    {
      "id": "Indigenous",
      "type": "fill",
      "source": "esri",
      "source-layer": "Indigenous",
      "minzoom": 6,
      "layout": {},
      "paint": {
        "fill-color": "#dbd5bd",
        "fill-outline-color": "#b2ae95",
        "fill-opacity": 0.2
      }
    },
    {
      "id": "Golf course/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Golf course",
      "minzoom": 11,
      "layout": {},
      "paint": {
        "fill-color": "#cfd3a7",
        "fill-outline-color": "#b1b580",
        "fill-opacity": 0.6
      }
    },
    {
      "id": "Golf course/0",
      "type": "fill",
      "source": "esri",
      "source-layer": "Golf course",
      "minzoom": 11,
      "layout": {},
      "paint": {
        "fill-pattern": "Park or farming",
        "fill-opacity": 0.12
      }
    },
    {
      "id": "Airport/Airport property",
      "type": "fill",
      "source": "esri",
      "source-layer": "Airport",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 9,
      "layout": {},
      "paint": {
        "fill-color": {
          "stops": [
            [
              11,
              "#f0e8dc"
            ],
            [
              15,
              "#f0e8dc"
            ]
          ]
        }
      }
    },
    {
      "id": "Airport/Airport runway",
      "type": "fill",
      "source": "esri",
      "source-layer": "Airport",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 11,
      "layout": {},
      "paint": {
        "fill-color": "#e8e0d5",
        "fill-outline-color": "#e7ddd0"
      }
    },
    {
      "id": "Retail",
      "type": "fill",
      "source": "esri",
      "source-layer": "Retail",
      "minzoom": 13,
      "layout": {},
      "paint": {
        "fill-color": {
          "stops": [
            [
              11,
              "#E6D0CF"
            ],
            [
              15,
              "#eededd"
            ]
          ]
        },
        "fill-opacity": 0.6
      }
    },
    {
      "id": "Water and wastewater",
      "type": "fill",
      "source": "esri",
      "source-layer": "Water and wastewater",
      "minzoom": 13,
      "layout": {},
      "paint": {
        "fill-color": {
          "stops": [
            [
              10,
              "#CCC4B8"
            ],
            [
              15,
              "#dbd5cd"
            ]
          ]
        },
        "fill-opacity": 0.6
      }
    },
    {
      "id": "Freight",
      "type": "fill",
      "source": "esri",
      "source-layer": "Freight",
      "minzoom": 12,
      "layout": {},
      "paint": {
        "fill-color": "#D1C9BE",
        "fill-opacity": 0.2
      }
    },
    {
      "id": "Cemetery/0",
      "type": "fill",
      "source": "esri",
      "source-layer": "Cemetery",
      "minzoom": 13,
      "layout": {},
      "paint": {
        "fill-color": "#cfd3a7",
        "fill-opacity": 0.6
      }
    },
    {
      "id": "Cemetery/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Cemetery",
      "minzoom": 13,
      "layout": {},
      "paint": {
        "fill-pattern": "Cemetery",
        "fill-opacity": 0.5
      }
    },
    {
      "id": "Finance",
      "type": "fill",
      "source": "esri",
      "source-layer": "Finance",
      "minzoom": 13,
      "layout": {},
      "paint": {
        "fill-color": {
          "stops": [
            [
              11,
              "#E6D0CF"
            ],
            [
              15,
              "#eededd"
            ]
          ]
        },
        "fill-opacity": 0.6
      }
    },
    {
      "id": "Government",
      "type": "fill",
      "source": "esri",
      "source-layer": "Government",
      "minzoom": 11,
      "layout": {},
      "paint": {
        "fill-color": {
          "stops": [
            [
              10,
              "#CCC4B8"
            ],
            [
              15,
              "#dbd5cd"
            ]
          ]
        },
        "fill-opacity": 0.6
      }
    },
    {
      "id": "Emergency",
      "type": "fill",
      "source": "esri",
      "source-layer": "Emergency",
      "minzoom": 13,
      "layout": {},
      "paint": {
        "fill-color": "#f4efe7",
        "fill-opacity": 0.6
      }
    },
    {
      "id": "Landmark",
      "type": "fill",
      "source": "esri",
      "source-layer": "Landmark",
      "minzoom": 13,
      "layout": {},
      "paint": {
        "fill-color": "#e5dab0",
        "fill-opacity": 0.6
      }
    },
    {
      "id": "Pedestrian",
      "type": "fill",
      "source": "esri",
      "source-layer": "Pedestrian",
      "minzoom": 13,
      "layout": {},
      "paint": {
        "fill-color": "#f4efe7",
        "fill-opacity": 0.6
      }
    },
    {
      "id": "Education",
      "type": "fill",
      "source": "esri",
      "source-layer": "Education",
      "minzoom": 11,
      "layout": {},
      "paint": {
        "fill-color": {
          "stops": [
            [
              11,
              "#ebd8bf"
            ],
            [
              15,
              "#ebd3b5"
            ]
          ]
        },
        "fill-opacity": 0.6
      }
    },
    {
      "id": "Medical",
      "type": "fill",
      "source": "esri",
      "source-layer": "Medical",
      "minzoom": 11,
      "layout": {},
      "paint": {
        "fill-color": {
          "stops": [
            [
              11,
              "#e8d0c3"
            ],
            [
              15,
              "#e8d0c3"
            ]
          ]
        },
        "fill-opacity": 0.6
      }
    },
    {
      "id": "Park or farming/0",
      "type": "fill",
      "source": "esri",
      "source-layer": "Park or farming",
      "minzoom": 11,
      "layout": {},
      "paint": {
        "fill-color": "#a0aa46",
        "fill-opacity": 0.2
      }
    },
    {
      "id": "Park or farming/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Park or farming",
      "minzoom": 11,
      "layout": {},
      "paint": {
        "fill-pattern": "Park or farming",
        "fill-opacity": 0.3
      }
    },
    {
      "id": "Beach",
      "type": "fill",
      "source": "esri",
      "source-layer": "Beach",
      "minzoom": 13,
      "layout": {},
      "paint": {
        "fill-pattern": "Beach"
      }
    },
    {
      "id": "Special area of interest/Garden path",
      "type": "fill",
      "source": "esri",
      "source-layer": "Special area of interest",
      "filter": [
        "==",
        "_symbol",
        12
      ],
      "minzoom": 14,
      "layout": {
        "visibility": "none"
      },
      "paint": {
        "fill-color": "#f5f5f1",
        "fill-outline-color": "#EBE8E8"
      }
    },
    {
      "id": "Special area of interest/Parking",
      "type": "fill",
      "source": "esri",
      "source-layer": "Special area of interest",
      "filter": [
        "==",
        "_symbol",
        15
      ],
      "minzoom": 14,
      "layout": {},
      "paint": {
        "fill-color": "#f4efe7",
        "fill-opacity": 0.75
      }
    },
    {
      "id": "Parcel",
      "type": "line",
      "source": "esri",
      "source-layer": "Parcel",
      "minzoom": 17,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ddd9d4",
        "line-width": 0.8
      }
    },
    {
      "id": "Special area of interest/Green openspace/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Special area of interest",
      "filter": [
        "==",
        "_symbol",
        11
      ],
      "minzoom": 14,
      "layout": {},
      "paint": {
        "fill-color": "#DBDEB4",
        "fill-opacity": 0.5
      }
    },
    {
      "id": "Special area of interest/Green openspace/0",
      "type": "fill",
      "source": "esri",
      "source-layer": "Special area of interest",
      "filter": [
        "==",
        "_symbol",
        11
      ],
      "minzoom": 14,
      "layout": {},
      "paint": {
        "fill-pattern": "Park or farming",
        "fill-opacity": 0.3
      }
    },
    {
      "id": "Special area of interest/Grass/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Special area of interest",
      "filter": [
        "==",
        "_symbol",
        8
      ],
      "minzoom": 14,
      "layout": {},
      "paint": {
        "fill-color": "#cfd3a7",
        "fill-opacity": 0.5
      }
    },
    {
      "id": "Special area of interest/Grass/0",
      "type": "fill",
      "source": "esri",
      "source-layer": "Special area of interest",
      "filter": [
        "==",
        "_symbol",
        8
      ],
      "minzoom": 14,
      "layout": {},
      "paint": {
        "fill-pattern": "Park or farming",
        "fill-opacity": 0.3
      }
    },
    {
      "id": "Special area of interest/Baseball field or other grounds",
      "type": "fill",
      "source": "esri",
      "source-layer": "Special area of interest",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 14,
      "layout": {},
      "paint": {
        "fill-color": "#c3c797"
      }
    },
    {
      "id": "Special area of interest/Groundcover",
      "type": "fill",
      "source": "esri",
      "source-layer": "Special area of interest",
      "filter": [
        "==",
        "_symbol",
        13
      ],
      "minzoom": 14,
      "layout": {},
      "paint": {
        "fill-pattern": "Special area of interest/Groundcover",
        "fill-opacity": 0.5
      }
    },
    {
      "id": "Special area of interest/Field or court exterior",
      "type": "fill",
      "source": "esri",
      "source-layer": "Special area of interest",
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "minzoom": 14,
      "layout": {},
      "paint": {
        "fill-color": "#d5d9b3"
      }
    },
    {
      "id": "Special area of interest/Football field or court",
      "type": "fill",
      "source": "esri",
      "source-layer": "Special area of interest",
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "minzoom": 14,
      "layout": {},
      "paint": {
        "fill-color": "#c3c797",
        "fill-outline-color": "#f4efe7"
      }
    },
    {
      "id": "Special area of interest/Hardcourt",
      "type": "fill",
      "source": "esri",
      "source-layer": "Special area of interest",
      "filter": [
        "==",
        "_symbol",
        10
      ],
      "minzoom": 14,
      "layout": {},
      "paint": {
        "fill-color": "#c6c1ba",
        "fill-outline-color": "#f4efe7"
      }
    },
    {
      "id": "Special area of interest/Mulch or dirt",
      "type": "fill",
      "source": "esri",
      "source-layer": "Special area of interest",
      "filter": [
        "==",
        "_symbol",
        14
      ],
      "minzoom": 14,
      "layout": {},
      "paint": {
        "fill-color": "#E8E3D6"
      }
    },
    {
      "id": "Special area of interest/Athletic track",
      "type": "fill",
      "source": "esri",
      "source-layer": "Special area of interest",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 14,
      "layout": {},
      "paint": {
        "fill-color": "#dec4c4",
        "fill-outline-color": "#EEE6D6"
      }
    },
    {
      "id": "Special area of interest/Sand",
      "type": "fill",
      "source": "esri",
      "source-layer": "Special area of interest",
      "filter": [
        "==",
        "_symbol",
        6
      ],
      "minzoom": 14,
      "layout": {},
      "paint": {
        "fill-pattern": "Beach"
      }
    },
    {
      "id": "Special area of interest/Rock or gravel",
      "type": "fill",
      "source": "esri",
      "source-layer": "Special area of interest",
      "filter": [
        "==",
        "_symbol",
        16
      ],
      "minzoom": 14,
      "layout": {},
      "paint": {
        "fill-color": "#d3d3d3"
      }
    },
    {
      "id": "Special area of interest/Bike, walk or pedestrian",
      "type": "fill",
      "source": "esri",
      "source-layer": "Special area of interest",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "minzoom": 14,
      "layout": {},
      "paint": {
        "fill-color": "#f4efe7",
        "fill-opacity": 0.75
      }
    },
    {
      "id": "Special area of interest/Water",
      "type": "fill",
      "source": "esri",
      "source-layer": "Special area of interest",
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "minzoom": 15,
      "layout": {},
      "paint": {
        "fill-color": "#b6cfc8"
      }
    },
    {
      "id": "Water line small scale",
      "type": "line",
      "source": "esri",
      "source-layer": "Water line small scale",
      "minzoom": 1,
      "maxzoom": 5,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#b6cfc8",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              1,
              0.5
            ],
            [
              5,
              0.5
            ]
          ]
        }
      }
    },
    {
      "id": "Water line medium scale",
      "type": "line",
      "source": "esri",
      "source-layer": "Water line medium scale",
      "minzoom": 5,
      "maxzoom": 7,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#b6cfc8",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0.5
            ],
            [
              7,
              0.7
            ]
          ]
        }
      }
    },
    {
      "id": "Water line large scale",
      "type": "line",
      "source": "esri",
      "source-layer": "Water line large scale",
      "minzoom": 7,
      "maxzoom": 11,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#b6cfc8",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              7,
              0.5
            ],
            [
              11,
              0.7
            ]
          ]
        }
      }
    },
    {
      "id": "Water line/Waterfall",
      "type": "line",
      "source": "esri",
      "source-layer": "Water line",
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "minzoom": 11,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#b6cfc8",
        "line-width": 0.8,
        "line-dasharray": [
          5,
          5
        ]
      }
    },
    {
      "id": "Water line/Dam or weir",
      "type": "line",
      "source": "esri",
      "source-layer": "Water line",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "minzoom": 11,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#c3c3c3",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              0.7
            ],
            [
              14,
              0.7
            ],
            [
              17,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "Water line/Levee/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Water line",
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "minzoom": 11,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#c3c3c3",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              0.7
            ],
            [
              14,
              0.7
            ],
            [
              17,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "Water line/Levee/0",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water line",
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "minzoom": 11,
      "layout": {
        "symbol-placement": "line",
        "symbol-avoid-edges": true,
        "icon-image": "Water line/Levee/0",
        "symbol-spacing": 13.3,
        "icon-rotation-alignment": "map",
        "icon-allow-overlap": true,
        "icon-padding": 1
      },
      "paint": {}
    },
    {
      "id": "Water line/Canal or ditch",
      "type": "line",
      "source": "esri",
      "source-layer": "Water line",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 11,
      "layout": {
        "line-cap": "round"
      },
      "paint": {
        "line-color": "#b6cfc8",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              0.7
            ],
            [
              14,
              0.7
            ],
            [
              17,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "Water line/Stream or river intermittent",
      "type": "line",
      "source": "esri",
      "source-layer": "Water line",
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "minzoom": 11,
      "layout": {},
      "paint": {
        "line-color": "#b6cfc8",
        "line-dasharray": [
          7,
          3
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              0.7
            ],
            [
              14,
              0.7
            ],
            [
              17,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "Water line/Stream or river",
      "type": "line",
      "source": "esri",
      "source-layer": "Water line",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 11,
      "layout": {
        "line-cap": "round"
      },
      "paint": {
        "line-color": "#b6cfc8",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              0.7
            ],
            [
              14,
              0.7
            ],
            [
              17,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "Marine area/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Marine area",
      "minzoom": 0,
      "layout": {},
      "paint": {
        "fill-color": {
          "stops": [
            [
              2,
              "#b6cfc8"
            ],
            [
              10.6,
              "#b6cfc8"
            ]
          ]
        }
      }
    },
    {
      "id": "Marine area/2",
      "type": "fill",
      "source": "esri",
      "source-layer": "Marine area",
      "layout": {},
      "paint": {
        "fill-pattern": "Marine area",
        "fill-opacity": 0.24
      }
    },
    {
      "id": "Bathymetry/depth 2 (shallow water)",
      "type": "fill",
      "source": "esri",
      "source-layer": "Bathymetry",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "maxzoom": 11,
      "layout": {},
      "paint": {
        "fill-color": {
          "stops": [
            [
              2,
              "#c4d5cc"
            ],
            [
              10.6,
              "#b6cfc8"
            ]
          ]
        }
      }
    },
    {
      "id": "Bathymetry/depth 2 (shallow water)/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Bathymetry",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "maxzoom": 11,
      "layout": {},
      "paint": {
        "fill-pattern": "Marine area",
        "fill-opacity": 0.24
      }
    },
    {
      "id": "Bathymetry/depth 3",
      "type": "fill",
      "source": "esri",
      "source-layer": "Bathymetry",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "maxzoom": 11,
      "layout": {},
      "paint": {
        "fill-color": {
          "stops": [
            [
              2,
              "#cad7cd"
            ],
            [
              10.6,
              "#b6cfc8"
            ]
          ]
        }
      }
    },
    {
      "id": "Bathymetry/depth 3/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Bathymetry",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "maxzoom": 11,
      "layout": {},
      "paint": {
        "fill-pattern": "Marine area",
        "fill-opacity": 0.24
      }
    },
    {
      "id": "Bathymetry/depth 4",
      "type": "fill",
      "source": "esri",
      "source-layer": "Bathymetry",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "maxzoom": 11,
      "layout": {},
      "paint": {
        "fill-color": {
          "stops": [
            [
              2,
              "#d1dacf"
            ],
            [
              10.6,
              "#b6cfc8"
            ]
          ]
        }
      }
    },
    {
      "id": "Bathymetry/depth 4/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Bathymetry",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "maxzoom": 11,
      "layout": {},
      "paint": {
        "fill-pattern": "Marine area",
        "fill-opacity": 0.24
      }
    },
    {
      "id": "Bathymetry/depth 5",
      "type": "fill",
      "source": "esri",
      "source-layer": "Bathymetry",
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "maxzoom": 11,
      "layout": {},
      "paint": {
        "fill-color": {
          "stops": [
            [
              2,
              "#d7dcd0"
            ],
            [
              10.6,
              "#b6cfc8"
            ]
          ]
        }
      }
    },
    {
      "id": "Bathymetry/depth 5/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Bathymetry",
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "maxzoom": 11,
      "layout": {},
      "paint": {
        "fill-pattern": "Marine area",
        "fill-opacity": 0.24
      }
    },
    {
      "id": "Bathymetry/depth 6",
      "type": "fill",
      "source": "esri",
      "source-layer": "Bathymetry",
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "maxzoom": 11,
      "layout": {},
      "paint": {
        "fill-color": {
          "stops": [
            [
              2,
              "#dedfd2"
            ],
            [
              10.6,
              "#b6cfc8"
            ]
          ]
        }
      }
    },
    {
      "id": "Bathymetry/depth 6/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Bathymetry",
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "maxzoom": 11,
      "layout": {},
      "paint": {
        "fill-pattern": "Marine area",
        "fill-opacity": 0.24
      }
    },
    {
      "id": "Bathymetry/depth 7 (deep water)",
      "type": "fill",
      "source": "esri",
      "source-layer": "Bathymetry",
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "maxzoom": 11,
      "layout": {},
      "paint": {
        "fill-color": {
          "stops": [
            [
              2,
              "#e4e1d3"
            ],
            [
              10.6,
              "#b6cfc8"
            ]
          ]
        }
      }
    },
    {
      "id": "Bathymetry/depth 7 (deep water)/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Bathymetry",
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "maxzoom": 11,
      "layout": {},
      "paint": {
        "fill-pattern": "Marine area",
        "fill-opacity": 0.24
      }
    },
    {
      "id": "Water area small scale/0",
      "type": "fill",
      "source": "esri",
      "source-layer": "Water area small scale",
      "minzoom": 1,
      "maxzoom": 5,
      "layout": {},
      "paint": {
        "fill-color": "#b6cfc8"
      }
    },
    {
      "id": "Water area small scale/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Water area small scale",
      "minzoom": 1,
      "maxzoom": 5,
      "layout": {},
      "paint": {
        "fill-pattern": "Marine area",
        "fill-opacity": 0.24
      }
    },
    {
      "id": "Water area medium scale/Lake intermittent/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Water area medium scale",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 5,
      "maxzoom": 7,
      "layout": {},
      "paint": {
        "fill-color": "#b6cfc8"
      }
    },
    {
      "id": "Water area medium scale/Lake intermittent/0",
      "type": "fill",
      "source": "esri",
      "source-layer": "Water area medium scale",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 5,
      "maxzoom": 7,
      "layout": {},
      "paint": {
        "fill-pattern": "Water area/Lake or river intermittent"
      }
    },
    {
      "id": "Water area medium scale/Lake or river/0",
      "type": "fill",
      "source": "esri",
      "source-layer": "Water area medium scale",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 5,
      "maxzoom": 7,
      "layout": {},
      "paint": {
        "fill-color": "#b6cfc8"
      }
    },
    {
      "id": "Water area medium scale/Lake or river/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Water area medium scale",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 5,
      "maxzoom": 7,
      "layout": {},
      "paint": {
        "fill-pattern": "Marine area",
        "fill-opacity": 0.24
      }
    },
    {
      "id": "Water area large scale/Lake intermittent/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Water area large scale",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 7,
      "maxzoom": 11,
      "layout": {},
      "paint": {
        "fill-color": "#b6cfc8"
      }
    },
    {
      "id": "Water area large scale/Lake intermittent/0",
      "type": "fill",
      "source": "esri",
      "source-layer": "Water area large scale",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 7,
      "maxzoom": 11,
      "layout": {},
      "paint": {
        "fill-pattern": "Water area/Lake or river intermittent"
      }
    },
    {
      "id": "Water area large scale/Lake or river/0",
      "type": "fill",
      "source": "esri",
      "source-layer": "Water area large scale",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 7,
      "maxzoom": 11,
      "layout": {},
      "paint": {
        "fill-color": "#b6cfc8"
      }
    },
    {
      "id": "Water area large scale/Lake or river/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Water area large scale",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 7,
      "maxzoom": 11,
      "layout": {},
      "paint": {
        "fill-pattern": "Marine area",
        "fill-opacity": 0.24
      }
    },
    {
      "id": "Water area/Lake, river or bay/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Water area",
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "minzoom": 11,
      "layout": {},
      "paint": {
        "fill-color": "#b6cfc8",
        "fill-outline-color": "#b6cfc8"
      }
    },
    {
      "id": "Water area/Lake, river or bay/0",
      "type": "fill",
      "source": "esri",
      "source-layer": "Water area",
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "minzoom": 11,
      "layout": {},
      "paint": {
        "fill-pattern": "Marine area",
        "fill-opacity": 0.24
      }
    },
    {
      "id": "Water area/Lake or river intermittent/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Water area",
      "filter": [
        "==",
        "_symbol",
        6
      ],
      "minzoom": 11,
      "layout": {},
      "paint": {
        "fill-color": "#b6cfc8"
      }
    },
    {
      "id": "Water area/Lake or river intermittent/0",
      "type": "fill",
      "source": "esri",
      "source-layer": "Water area",
      "filter": [
        "==",
        "_symbol",
        6
      ],
      "minzoom": 11,
      "layout": {},
      "paint": {
        "fill-pattern": "Water area/Lake or river intermittent"
      }
    },
    {
      "id": "Water area/Inundated area",
      "type": "fill",
      "source": "esri",
      "source-layer": "Water area",
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "minzoom": 12,
      "layout": {},
      "paint": {
        "fill-pattern": "Water area/Inundated area"
      }
    },
    {
      "id": "Water area/Swamp or marsh",
      "type": "fill",
      "source": "esri",
      "source-layer": "Water area",
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "minzoom": 11,
      "layout": {},
      "paint": {
        "fill-opacity": 0.6,
        "fill-pattern": "Water area/Swamp or marsh"
      }
    },
    {
      "id": "Water area/Playa",
      "type": "fill",
      "source": "esri",
      "source-layer": "Water area",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 12,
      "layout": {},
      "paint": {
        "fill-pattern": "Water area/Playa"
      }
    },
    {
      "id": "Water area/Ice mass",
      "type": "fill",
      "source": "esri",
      "source-layer": "Water area",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "minzoom": 11,
      "layout": {},
      "paint": {
        "fill-pattern": "Water area/Ice mass",
        "fill-opacity": 0.5
      }
    },
    {
      "id": "Water area/Dam or weir",
      "type": "fill",
      "source": "esri",
      "source-layer": "Water area",
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "minzoom": 12,
      "layout": {},
      "paint": {
        "fill-color": "#e5e5dd",
        "fill-outline-color": "#d9d9d1"
      }
    },
    {
      "id": "Ferry/Ferry",
      "type": "line",
      "source": "esri",
      "source-layer": "Ferry",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          0
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 11,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#969287",
        "line-opacity": 0.8,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              1.3
            ],
            [
              14,
              1.46667
            ],
            [
              17,
              1.46667
            ]
          ]
        },
        "line-dasharray": [
          6.06061,
          3.63636
        ]
      }
    },
    {
      "id": "Building/2",
      "type": "fill",
      "source": "esri",
      "source-layer": "Building",
      "minzoom": 16,
      "layout": {},
      "paint": {
        "fill-color": "#98938a",
        "fill-opacity": 0.5,
        "fill-translate": {
          "stops": [
            [
              15,
              [
                0,
                0
              ]
            ],
            [
              18,
              [
                3,
                3
              ]
            ]
          ]
        },
        "fill-translate-anchor": "viewport"
      }
    },
    {
      "id": "Building/1",
      "type": "fill",
      "source": "esri",
      "source-layer": "Building",
      "minzoom": 16,
      "layout": {},
      "paint": {
        "fill-color": "#969189",
        "fill-opacity": 0.4,
        "fill-translate": {
          "stops": [
            [
              15,
              [
                0,
                0
              ]
            ],
            [
              18,
              [
                -2,
                2
              ]
            ]
          ]
        },
        "fill-translate-anchor": "viewport"
      }
    },
    {
      "id": "Building/0",
      "type": "fill",
      "source": "esri",
      "source-layer": "Building",
      "minzoom": 15,
      "layout": {},
      "paint": {
        "fill-pattern": "Landpattern",
        "fill-opacity": 0.95,
        "fill-outline-color": "#d4cabd"
      }
    },
    {
      "id": "Building/line",
      "type": "line",
      "source": "esri",
      "source-layer": "Building",
      "minzoom": 15,
      "layout": {},
      "paint": {
        "line-width": 1.1,
        "line-opacity": {
          "stops": [
            [
              15,
              0.6
            ],
            [
              17,
              0.5
            ]
          ]
        },
        "line-color": "#d6d0c9"
      }
    },
    {
      "id": "Special area of interest line/Dock or pier",
      "type": "line",
      "source": "esri",
      "source-layer": "Special area of interest line",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 15,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15,
              0.5
            ],
            [
              17,
              1.2
            ]
          ]
        }
      }
    },
    {
      "id": "Special area of interest line/Fence (chain link)/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Special area of interest line",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 16,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#c6c4be",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15,
              1
            ],
            [
              17,
              1.2
            ]
          ]
        }
      }
    },
    {
      "id": "Special area of interest line/Fence (chain link)/0",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Special area of interest line",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 17,
      "layout": {
        "symbol-placement": "line",
        "symbol-avoid-edges": true,
        "icon-image": "Special area of interest line/Fence (chain link)/0",
        "symbol-spacing": 20,
        "icon-size": 0.85,
        "icon-rotation-alignment": "map",
        "icon-allow-overlap": true,
        "icon-padding": 1
      },
      "paint": {}
    },
    {
      "id": "Special area of interest line/Fence (metal)/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Special area of interest line",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "minzoom": 16,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#c6c4be",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15,
              1
            ],
            [
              17,
              1.2
            ]
          ]
        }
      }
    },
    {
      "id": "Special area of interest line/Fence (metal)/0",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Special area of interest line",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "minzoom": 17,
      "layout": {
        "symbol-placement": "line",
        "symbol-avoid-edges": true,
        "icon-image": "Special area of interest line/Fence (metal)/0",
        "symbol-spacing": 14.5,
        "icon-size": 0.85,
        "icon-rotation-alignment": "map",
        "icon-allow-overlap": true,
        "icon-padding": 1
      },
      "paint": {
        "icon-opacity": 0.8
      }
    },
    {
      "id": "Special area of interest line/Fence (wood)/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Special area of interest line",
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "minzoom": 16,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ccbba6",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15,
              1
            ],
            [
              17,
              1.2
            ]
          ]
        }
      }
    },
    {
      "id": "Special area of interest line/Fence (wood)/0",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Special area of interest line",
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "minzoom": 17,
      "layout": {
        "symbol-placement": "line",
        "symbol-avoid-edges": true,
        "icon-image": "Special area of interest line/Fence (wood)/0",
        "symbol-spacing": 12,
        "icon-size": 0.85,
        "icon-rotation-alignment": "map",
        "icon-allow-overlap": true,
        "icon-padding": 1
      },
      "paint": {
        "icon-opacity": 0.8
      }
    },
    {
      "id": "Special area of interest line/Gate/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Special area of interest line",
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "minzoom": 16,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ddd9d4",
        "line-width": 4
      }
    },
    {
      "id": "Special area of interest line/Gate/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Special area of interest line",
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "minzoom": 16,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#efe9e1",
        "line-width": 2
      }
    },
    {
      "id": "Special area of interest line/Parking lot",
      "type": "line",
      "source": "esri",
      "source-layer": "Special area of interest line",
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "minzoom": 15,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ddd9d4",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15,
              0.5
            ],
            [
              17,
              1.2
            ]
          ]
        }
      }
    },
    {
      "id": "Special area of interest line/Sports field",
      "type": "line",
      "source": "esri",
      "source-layer": "Special area of interest line",
      "filter": [
        "==",
        "_symbol",
        6
      ],
      "minzoom": 15,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15,
              0.5
            ],
            [
              17,
              1.2
            ]
          ]
        }
      }
    },
    {
      "id": "Special area of interest line/Wall/3",
      "type": "line",
      "source": "esri",
      "source-layer": "Special area of interest line",
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "minzoom": 16,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#ddd9d4",
        "line-width": 4
      }
    },
    {
      "id": "Special area of interest line/Wall/2",
      "type": "line",
      "source": "esri",
      "source-layer": "Special area of interest line",
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "minzoom": 16,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#F9F6E6",
        "line-width": 2
      }
    },
    {
      "id": "Trail or path/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Trail or path",
      "minzoom": 15,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15.9,
              2
            ],
            [
              16,
              6
            ],
            [
              18,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Pedestrian/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          9
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 15,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15.9,
              2
            ],
            [
              16,
              6
            ],
            [
              18,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "Road/4WD/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          10
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 13,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              9,
              "#e6e4de"
            ],
            [
              14,
              "#969287"
            ]
          ]
        },
        "line-dasharray": [
          2,
          1
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              1.5
            ],
            [
              14,
              4.3
            ],
            [
              18,
              16.3
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Service/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          8
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 13,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              9,
              "#e6e4de"
            ],
            [
              13,
              "#cfcdc5"
            ],
            [
              16,
              "#969287"
            ]
          ]
        },
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              11,
              1
            ],
            [
              13.9,
              1
            ],
            [
              14,
              4.3
            ],
            [
              18,
              16.3
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Local/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          7
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 12,
      "layout": {
        "line-cap": "square",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              9,
              "#e6e4de"
            ],
            [
              13,
              "#cfcdc5"
            ],
            [
              16,
              "#969287"
            ]
          ]
        },
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              11,
              1
            ],
            [
              13.9,
              1
            ],
            [
              14,
              6
            ],
            [
              16,
              12
            ],
            [
              18,
              30
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Minor, ramp or traffic circle/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          6
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 9,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              9,
              "#e6e4de"
            ],
            [
              14,
              "#969287"
            ]
          ]
        },
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              1
            ],
            [
              13.9,
              2
            ],
            [
              14,
              4
            ],
            [
              16,
              18.5
            ],
            [
              18,
              34.3
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Minor/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          5
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 9,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              9,
              "#e6e4de"
            ],
            [
              14,
              "#969287"
            ]
          ]
        },
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              1
            ],
            [
              13.9,
              2
            ],
            [
              14,
              8.5
            ],
            [
              16,
              18.5
            ],
            [
              18,
              34.3
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Major, ramp or traffic circle/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          4
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 9,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              9,
              "#e6e6da"
            ],
            [
              14,
              "#969287"
            ]
          ]
        },
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              1
            ],
            [
              13.9,
              2
            ],
            [
              14,
              12.3
            ],
            [
              16,
              20.3
            ],
            [
              18,
              36
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Major/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          3
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 8,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              8,
              "#e6e6da"
            ],
            [
              14,
              "#969287"
            ]
          ]
        },
        "line-width": {
          "base": 1,
          "stops": [
            [
              8,
              1
            ],
            [
              13.9,
              2
            ],
            [
              14,
              12.3
            ],
            [
              16,
              20.3
            ],
            [
              18,
              36
            ]
          ]
        }
      }
    },
    {
      "id": "Trail or path/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Trail or path",
      "minzoom": 15,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#aca38d",
        "line-dasharray": [
          2,
          7
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15.9,
              0.5
            ],
            [
              16,
              1
            ],
            [
              18,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Pedestrian/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          9
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 15,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#aca38d",
        "line-dasharray": [
          2,
          7
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15.9,
              0.5
            ],
            [
              16,
              1
            ],
            [
              18,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Freeway Motorway, ramp or traffic circle/3",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          2
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 6,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              9,
              "#e6e6da"
            ],
            [
              16,
              "#969287"
            ]
          ]
        },
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              1
            ],
            [
              13.9,
              2
            ],
            [
              14,
              12.3
            ],
            [
              16,
              20.3
            ],
            [
              18,
              36
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Highway/3",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          1
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 6,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              6,
              "#e6e6da"
            ],
            [
              16,
              "#969287"
            ]
          ]
        },
        "line-width": {
          "base": 1,
          "stops": [
            [
              6,
              1
            ],
            [
              13.9,
              2
            ],
            [
              14,
              12.3
            ],
            [
              16,
              20.3
            ],
            [
              18,
              36
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Freeway Motorway/3",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          0
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 6,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              6,
              "#e6e6da"
            ],
            [
              16,
              "#969287"
            ]
          ]
        },
        "line-width": {
          "base": 1,
          "stops": [
            [
              6,
              1
            ],
            [
              13.9,
              2
            ],
            [
              14,
              12.3
            ],
            [
              16,
              20.3
            ],
            [
              18,
              36
            ]
          ]
        }
      }
    },
    {
      "id": "Road/4WD/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          10
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 13,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              0.75
            ],
            [
              14,
              2.3
            ],
            [
              18,
              14.3
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Service/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          8
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              0.75
            ],
            [
              14,
              2.3
            ],
            [
              18,
              14.3
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Local/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          7
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-cap": "square",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              11,
              0.75
            ],
            [
              14,
              4
            ],
            [
              16,
              10
            ],
            [
              18,
              28
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Minor, ramp or traffic circle/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          6
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              0.75
            ],
            [
              14,
              2
            ],
            [
              16,
              16.5
            ],
            [
              18,
              32.3
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Minor/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          5
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              10,
              1.3
            ],
            [
              14,
              6.5
            ],
            [
              16,
              16.5
            ],
            [
              18,
              32.3
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Major, ramp or traffic circle/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          4
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              1.3
            ],
            [
              14,
              10.3
            ],
            [
              16,
              18.3
            ],
            [
              18,
              34
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Major/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          3
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              8,
              1.3
            ],
            [
              14,
              10.3
            ],
            [
              16,
              18.3
            ],
            [
              18,
              34
            ]
          ]
        }
      }
    },
    {
      "id": "Railroad/2",
      "type": "line",
      "source": "esri",
      "source-layer": "Railroad",
      "minzoom": 11,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#b1aea7",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              1.5
            ],
            [
              14,
              1.5
            ],
            [
              17,
              3.3
            ]
          ]
        }
      }
    },
    {
      "id": "Railroad/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Railroad",
      "minzoom": 11,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-dasharray": [
          8,
          9.3
        ],
        "line-color": "#f4efe7",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              0.75
            ],
            [
              14,
              0.75
            ],
            [
              17,
              1.3
            ]
          ]
        }
      }
    },
    {
      "id": "Ferry/Rail ferry/2",
      "type": "line",
      "source": "esri",
      "source-layer": "Ferry",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          1
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 11,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#b1aea7",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              1.5
            ],
            [
              14,
              1.5
            ],
            [
              17,
              3.3
            ]
          ]
        }
      }
    },
    {
      "id": "Ferry/Rail ferry/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Ferry",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          1
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 11,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-dasharray": [
          8,
          9.3
        ],
        "line-color": "#f4efe7",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              0.75
            ],
            [
              14,
              0.75
            ],
            [
              17,
              1.3
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Freeway Motorway, ramp or traffic circle/2",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          2
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              1.3
            ],
            [
              14,
              10.3
            ],
            [
              16,
              18.3
            ],
            [
              18,
              34
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Highway/2",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          1
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              1.3
            ],
            [
              14,
              10.3
            ],
            [
              16,
              18.3
            ],
            [
              18,
              34
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Freeway Motorway/2",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          0
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              1.3
            ],
            [
              14,
              10.3
            ],
            [
              16,
              18.3
            ],
            [
              18,
              34
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Freeway Motorway, ramp or traffic circle/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          2
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              14,
              "#ddd0b0"
            ],
            [
              16,
              "#ddd0b0"
            ]
          ]
        },
        "line-blur": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              1
            ],
            [
              14,
              8
            ],
            [
              16,
              15
            ],
            [
              18,
              30
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Highway/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          1
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              14,
              "#ddd0b0"
            ],
            [
              16,
              "#ddd0b0"
            ]
          ]
        },
        "line-blur": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              1
            ],
            [
              14,
              8
            ],
            [
              16,
              15
            ],
            [
              18,
              30
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Freeway Motorway/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          0
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              14,
              "#ddd0b0"
            ],
            [
              16,
              "#ddd0b0"
            ]
          ]
        },
        "line-blur": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              1
            ],
            [
              14,
              8
            ],
            [
              16,
              15
            ],
            [
              18,
              30
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Freeway Motorway, ramp or traffic circle/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          2
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              14,
              "#ebe2cc"
            ],
            [
              16,
              "#ebe2cc"
            ]
          ]
        },
        "line-blur": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              0.5
            ],
            [
              14,
              6
            ],
            [
              16,
              13
            ],
            [
              18,
              28
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Highway/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          1
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              14,
              "#ebe2cc"
            ],
            [
              16,
              "#ebe2cc"
            ]
          ]
        },
        "line-blur": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              0.5
            ],
            [
              14,
              6
            ],
            [
              16,
              13
            ],
            [
              18,
              28
            ]
          ]
        }
      }
    },
    {
      "id": "Road/Freeway Motorway/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Road",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          0
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              14,
              "#ebe2cc"
            ],
            [
              16,
              "#ebe2cc"
            ]
          ]
        },
        "line-blur": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              0.5
            ],
            [
              14,
              6
            ],
            [
              16,
              13
            ],
            [
              18,
              28
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/4WD/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          10
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 13,
      "maxzoom": 14,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              9,
              "#e6e4de"
            ],
            [
              14,
              "#969287"
            ]
          ]
        },
        "line-opacity": 0.5,
        "line-dasharray": [
          2,
          1
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              1.5
            ],
            [
              14,
              4.3
            ],
            [
              18,
              16.3
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Service/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          8
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 13,
      "maxzoom": 14,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              9,
              "#e6e4de"
            ],
            [
              13,
              "#cfcdc5"
            ],
            [
              16,
              "#969287"
            ]
          ]
        },
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              11,
              1
            ],
            [
              13.9,
              1
            ],
            [
              14,
              4.3
            ],
            [
              18,
              16.3
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Local/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          7
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 12,
      "maxzoom": 14,
      "layout": {
        "line-cap": "square",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              9,
              "#e6e4de"
            ],
            [
              13,
              "#cfcdc5"
            ],
            [
              16,
              "#969287"
            ]
          ]
        },
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              11,
              1
            ],
            [
              13.9,
              1
            ],
            [
              14,
              6
            ],
            [
              16,
              12
            ],
            [
              18,
              30
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Minor, ramp or traffic circle/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          6
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 9,
      "maxzoom": 14,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              9,
              "#e6e4de"
            ],
            [
              14,
              "#969287"
            ]
          ]
        },
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              1
            ],
            [
              13.9,
              2
            ],
            [
              14,
              4
            ],
            [
              16,
              18.5
            ],
            [
              18,
              34.3
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Minor/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          5
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 9,
      "maxzoom": 14,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              9,
              "#e6e4de"
            ],
            [
              14,
              "#969287"
            ]
          ]
        },
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              1
            ],
            [
              13.9,
              2
            ],
            [
              14,
              8.5
            ],
            [
              16,
              18.5
            ],
            [
              18,
              34.3
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Major, ramp or traffic circle/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          4
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 9,
      "maxzoom": 14,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              9,
              "#e6e6da"
            ],
            [
              14,
              "#969287"
            ]
          ]
        },
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              1
            ],
            [
              13.9,
              2
            ],
            [
              14,
              12.3
            ],
            [
              16,
              20.3
            ],
            [
              18,
              36
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Major/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          3
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 8,
      "maxzoom": 14,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              8,
              "#e6e6da"
            ],
            [
              14,
              "#969287"
            ]
          ]
        },
        "line-opacity": 0.5,
        "line-width": {
          "base": 1,
          "stops": [
            [
              8,
              1
            ],
            [
              13.9,
              2
            ],
            [
              14,
              12.3
            ],
            [
              16,
              20.3
            ],
            [
              18,
              36
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Pedestrian/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          9
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 15,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15.9,
              2
            ],
            [
              16,
              6
            ],
            [
              18,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Pedestrian/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          9
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 15,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#aca38d",
        "line-opacity": 0.5,
        "line-dasharray": [
          2,
          7
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              15.9,
              0.5
            ],
            [
              16,
              1
            ],
            [
              18,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/4WD/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          10
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 13,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              0.75
            ],
            [
              14,
              2.3
            ],
            [
              18,
              14.3
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Service/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          8
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              0.75
            ],
            [
              14,
              2.3
            ],
            [
              18,
              14.3
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Local/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          7
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-cap": "square",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.4,
          "stops": [
            [
              11,
              0.75
            ],
            [
              14,
              4
            ],
            [
              16,
              10
            ],
            [
              18,
              28
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Minor, ramp or traffic circle/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          6
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              0.75
            ],
            [
              14,
              2
            ],
            [
              16,
              16.5
            ],
            [
              18,
              32.3
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Minor/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          5
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              10,
              1.3
            ],
            [
              14,
              6.5
            ],
            [
              16,
              16.5
            ],
            [
              18,
              32.3
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Major, ramp or traffic circle/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          4
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              1.3
            ],
            [
              14,
              10.3
            ],
            [
              16,
              18.3
            ],
            [
              18,
              34
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Major/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          3
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              8,
              1.3
            ],
            [
              14,
              10.3
            ],
            [
              16,
              18.3
            ],
            [
              18,
              34
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Freeway Motorway Highway, ramp or traffic circle/3",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          2
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 6,
      "maxzoom": 14,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              9,
              "#e6e6da"
            ],
            [
              16,
              "#969287"
            ]
          ]
        },
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              1
            ],
            [
              13.9,
              2
            ],
            [
              14,
              12.3
            ],
            [
              16,
              20.3
            ],
            [
              18,
              36
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Highway/3",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          1
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 6,
      "maxzoom": 14,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              6,
              "#e6e6da"
            ],
            [
              16,
              "#969287"
            ]
          ]
        },
        "line-opacity": 0.5,
        "line-width": {
          "base": 1,
          "stops": [
            [
              6,
              1
            ],
            [
              13.9,
              2
            ],
            [
              14,
              12.3
            ],
            [
              16,
              20.3
            ],
            [
              18,
              36
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Freeway Motorway/3",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          0
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 6,
      "maxzoom": 14,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              6,
              "#e6e6da"
            ],
            [
              16,
              "#969287"
            ]
          ]
        },
        "line-opacity": 0.5,
        "line-width": {
          "base": 1,
          "stops": [
            [
              6,
              1
            ],
            [
              13.9,
              2
            ],
            [
              14,
              12.3
            ],
            [
              16,
              20.3
            ],
            [
              18,
              36
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Freeway Motorway Highway, ramp or traffic circle/2",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          2
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              1.3
            ],
            [
              14,
              10.3
            ],
            [
              16,
              18.3
            ],
            [
              18,
              34
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Highway/2",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          1
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              1.3
            ],
            [
              14,
              10.3
            ],
            [
              16,
              18.3
            ],
            [
              18,
              34
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Freeway Motorway/2",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          0
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f4efe7",
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              1.3
            ],
            [
              14,
              10.3
            ],
            [
              16,
              18.3
            ],
            [
              18,
              34
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Freeway Motorway Highway, ramp or traffic circle/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          2
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              14,
              "#ddd0b0"
            ],
            [
              16,
              "#ddd0b0"
            ]
          ]
        },
        "line-opacity": 0.5,
        "line-blur": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              1
            ],
            [
              14,
              8
            ],
            [
              16,
              15
            ],
            [
              18,
              30
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Highway/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          1
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              14,
              "#ddd0b0"
            ],
            [
              16,
              "#ddd0b0"
            ]
          ]
        },
        "line-opacity": 0.5,
        "line-blur": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              1
            ],
            [
              14,
              8
            ],
            [
              16,
              15
            ],
            [
              18,
              30
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Freeway Motorway/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          0
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              14,
              "#ddd0b0"
            ],
            [
              16,
              "#ddd0b0"
            ]
          ]
        },
        "line-opacity": 0.5,
        "line-blur": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              1
            ],
            [
              14,
              8
            ],
            [
              16,
              15
            ],
            [
              18,
              30
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Freeway Motorway Highway, ramp or traffic circle/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          2
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              14,
              "#ebe2cc"
            ],
            [
              16,
              "#ebe2cc"
            ]
          ]
        },
        "line-opacity": 0.5,
        "line-blur": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              0.5
            ],
            [
              14,
              6
            ],
            [
              16,
              13
            ],
            [
              18,
              28
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Highway/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          1
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              14,
              "#ebe2cc"
            ],
            [
              16,
              "#ebe2cc"
            ]
          ]
        },
        "line-opacity": 0.5,
        "line-blur": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              0.5
            ],
            [
              14,
              6
            ],
            [
              16,
              13
            ],
            [
              18,
              28
            ]
          ]
        }
      }
    },
    {
      "id": "Road tunnel/Freeway Motorway/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Road tunnel",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          0
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 14,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              14,
              "#ebe2cc"
            ],
            [
              16,
              "#ebe2cc"
            ]
          ]
        },
        "line-opacity": 0.5,
        "line-blur": 1,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              0.5
            ],
            [
              14,
              6
            ],
            [
              16,
              13
            ],
            [
              18,
              28
            ]
          ]
        }
      }
    },
    {
      "id": "Special area of interest/Gutter",
      "type": "fill",
      "source": "esri",
      "source-layer": "Special area of interest",
      "filter": [
        "==",
        "_symbol",
        9
      ],
      "minzoom": 14,
      "layout": {},
      "paint": {
        "fill-color": "#dedad3"
      }
    },
    {
      "id": "Special area of interest/Curb",
      "type": "fill",
      "source": "esri",
      "source-layer": "Special area of interest",
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "minzoom": 14,
      "layout": {},
      "paint": {
        "fill-color": "#dedad3",
        "fill-outline-color": "#d3cdc4"
      }
    },
    {
      "id": "Boundary line/Disputed admin2",
      "type": "line",
      "source": "esri",
      "source-layer": "Boundary line",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          8
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 9,
      "layout": {
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": "#605346",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              10,
              1.3
            ],
            [
              14,
              1.6
            ],
            [
              17,
              1.6
            ]
          ]
        },
        "line-dasharray": [
          6,
          3
        ]
      }
    },
    {
      "id": "Boundary line/Disputed admin1/3",
      "type": "line",
      "source": "esri",
      "source-layer": "Boundary line",
      "minzoom": 3,
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          7
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e0dbcf",
        "line-dasharray": [
          6,
          3
        ],
        "line-width": {
          "base": 1,
          "stops": [
            [
              4,
              0.665
            ],
            [
              14,
              7
            ],
            [
              17,
              7
            ]
          ]
        }
      }
    },
    {
      "id": "Boundary line/Disputed admin0/4",
      "type": "line",
      "source": "esri",
      "source-layer": "Boundary line",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          6
        ],
        [
          "!in",
          "Viz",
          3
        ],
        [
          "!in",
          "DisputeID",
          8,
          16,
          90,
          96,
          0
        ]
      ],
      "minzoom": 1,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#e0dbcf",
        "line-width": {
          "base": 1,
          "stops": [
            [
              1,
              0.665
            ],
            [
              14,
              9.3
            ],
            [
              17,
              9.3
            ]
          ]
        }
      }
    },
    {
      "id": "Boundary line/Disputed admin1/2",
      "type": "line",
      "source": "esri",
      "source-layer": "Boundary line",
      "minzoom": 3,
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          7
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              3,
              "#9C9C9C"
            ],
            [
              9,
              "#9d8f80"
            ]
          ]
        },
        "line-dasharray": [
          6,
          3
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              4,
              1.3
            ],
            [
              14,
              1.6
            ],
            [
              17,
              1.6
            ]
          ]
        }
      }
    },
    {
      "id": "Boundary line/Disputed admin1/1",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Boundary line",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          7
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 7,
      "maxzoom": 12,
      "layout": {
        "symbol-placement": "line",
        "symbol-avoid-edges": true,
        "icon-image": "Boundary line/Disputed admin0/small",
        "symbol-spacing": 30,
        "icon-rotation-alignment": "map",
        "icon-allow-overlap": true,
        "icon-padding": 1
      },
      "paint": {}
    },
    {
      "id": "Boundary line/Disputed admin1/0",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Boundary line",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          7
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 12,
      "layout": {
        "symbol-placement": "line",
        "symbol-avoid-edges": true,
        "icon-image": "Boundary line/Disputed admin0/medium",
        "symbol-spacing": 60,
        "icon-rotation-alignment": "map",
        "icon-allow-overlap": true,
        "icon-padding": 1
      },
      "paint": {}
    },
    {
      "id": "Boundary line/Disputed admin0/3",
      "type": "line",
      "source": "esri",
      "source-layer": "Boundary line",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          6
        ],
        [
          "!in",
          "Viz",
          3
        ],
        [
          "!in",
          "DisputeID",
          8,
          16,
          90,
          96,
          0
        ]
      ],
      "minzoom": 1,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              1,
              "#c8c8c8"
            ],
            [
              3,
              "#9C9C9C"
            ],
            [
              9,
              "#83786c"
            ]
          ]
        },
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              1,
              1.3
            ],
            [
              14,
              1.6
            ],
            [
              17,
              1.6
            ]
          ]
        },
        "line-dasharray": [
          6,
          3
        ]
      }
    },
    {
      "id": "Boundary line/Disputed admin0/2",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Boundary line",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          6
        ],
        [
          "!in",
          "Viz",
          3
        ],
        [
          "!in",
          "DisputeID",
          8,
          16,
          96,
          0
        ]
      ],
      "minzoom": 4,
      "maxzoom": 7,
      "layout": {
        "symbol-placement": "line",
        "symbol-avoid-edges": true,
        "icon-image": "Boundary line/Disputed admin0/small",
        "symbol-spacing": 15,
        "icon-rotation-alignment": "map",
        "icon-allow-overlap": true,
        "icon-padding": 1
      },
      "paint": {}
    },
    {
      "id": "Boundary line/Disputed admin0/1",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Boundary line",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          6
        ],
        [
          "!in",
          "Viz",
          3
        ],
        [
          "!in",
          "DisputeID",
          8,
          16,
          96,
          0
        ]
      ],
      "minzoom": 7,
      "maxzoom": 12,
      "layout": {
        "symbol-placement": "line",
        "symbol-avoid-edges": true,
        "icon-image": "Boundary line/Disputed admin0/medium",
        "symbol-spacing": 30,
        "icon-rotation-alignment": "map",
        "icon-allow-overlap": true,
        "icon-padding": 1
      },
      "paint": {}
    },
    {
      "id": "Boundary line/Disputed admin0/0",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Boundary line",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          6
        ],
        [
          "!in",
          "Viz",
          3
        ],
        [
          "!in",
          "DisputeID",
          8,
          16,
          96,
          0
        ]
      ],
      "minzoom": 12,
      "layout": {
        "symbol-placement": "line",
        "symbol-avoid-edges": true,
        "icon-image": "Boundary line/Disputed admin0/large",
        "symbol-spacing": 60,
        "icon-rotation-alignment": "map",
        "icon-allow-overlap": true,
        "icon-padding": 1
      },
      "paint": {}
    },
    {
      "id": "Boundary line/Admin2/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Boundary line",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          2
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 10,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#f0ede5",
        "line-opacity": 0.6,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              8,
              1.3
            ],
            [
              14,
              2.5
            ],
            [
              17,
              2.5
            ]
          ]
        }
      }
    },
    {
      "id": "Boundary line/Admin0/1",
      "type": "line",
      "source": "esri",
      "source-layer": "Boundary line",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          0
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 1,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#bcb09a",
        "line-blur": {
          "stops": [
            [
              1,
              0
            ],
            [
              18,
              5
            ]
          ]
        },
        "line-width": {
          "base": 1,
          "stops": [
            [
              1,
              0.665
            ],
            [
              14,
              8.3
            ],
            [
              17,
              15.3
            ]
          ]
        }
      }
    },
    {
      "id": "Boundary line/Admin5",
      "type": "line",
      "source": "esri",
      "source-layer": "Boundary line",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          5
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 16,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#9C9C9C",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              1
            ],
            [
              17,
              1
            ]
          ]
        },
        "line-dasharray": [
          6.5,
          4
        ]
      }
    },
    {
      "id": "Boundary line/Admin4",
      "type": "line",
      "source": "esri",
      "source-layer": "Boundary line",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          4
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 16,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#9C9C9C",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              1
            ],
            [
              17,
              1
            ]
          ]
        },
        "line-dasharray": [
          6.5,
          4
        ]
      }
    },
    {
      "id": "Boundary line/Admin3",
      "type": "line",
      "source": "esri",
      "source-layer": "Boundary line",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          3
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 16,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": "#9C9C9C",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              1
            ],
            [
              17,
              1
            ]
          ]
        },
        "line-dasharray": [
          6.5,
          4
        ]
      }
    },
    {
      "id": "Boundary line/Admin2/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Boundary line",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          2
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 9,
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-color": "#686868",
        "line-dasharray": [
          9.3,
          6.3
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              8,
              0.5
            ],
            [
              14,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "Boundary line/Admin1",
      "type": "line",
      "source": "esri",
      "source-layer": "Boundary line",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          1
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 3,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              3,
              "#c8c8c8"
            ],
            [
              4,
              "#605346"
            ]
          ]
        },
        "line-dasharray": [
          20,
          10
        ],
        "line-width": {
          "base": 1,
          "stops": [
            [
              4,
              0.325
            ],
            [
              14,
              1.3
            ],
            [
              17,
              1.3
            ]
          ]
        }
      }
    },
    {
      "id": "Boundary line/Admin0/0",
      "type": "line",
      "source": "esri",
      "source-layer": "Boundary line",
      "filter": [
        "all",
        [
          "==",
          "_symbol",
          0
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 1,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              1,
              "#cccccc"
            ],
            [
              7,
              "#605346"
            ]
          ]
        },
        "line-dasharray": [
          25,
          10
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              1,
              0.665
            ],
            [
              14,
              1.3
            ],
            [
              17,
              1.3
            ]
          ]
        }
      }
    },
    {
      "id": "Coastline",
      "type": "line",
      "source": "esri",
      "source-layer": "Coastline",
      "maxzoom": 9,
      "layout": {
        "line-cap": "round",
        "line-join": "round"
      },
      "paint": {
        "line-color": {
          "stops": [
            [
              0,
              "#97b9af"
            ],
            [
              7,
              "#b6cfc8"
            ],
            [
              9,
              "#c3d9d3"
            ]
          ]
        },
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              0,
              0.5
            ],
            [
              9,
              1.3
            ]
          ]
        }
      }
    },
    {
      "id": "Tree/Elm",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Tree",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 16,
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Tree/Elm",
        "icon-allow-overlap": true,
        "icon-padding": 1,
        "icon-size": {
          "stops": [
            [
              16,
              0.4
            ],
            [
              17,
              0.65
            ],
            [
              18,
              0.85
            ]
          ]
        }
      },
      "paint": {
        "icon-opacity": {
          "stops": [
            [
              16,
              0.8
            ],
            [
              18,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "Tree/Eucalyptus",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Tree",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 16,
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Tree/Eucalyptus",
        "icon-allow-overlap": true,
        "icon-padding": 1,
        "icon-size": {
          "stops": [
            [
              16,
              0.4
            ],
            [
              17,
              0.65
            ],
            [
              18,
              0.85
            ]
          ]
        }
      },
      "paint": {
        "icon-opacity": {
          "stops": [
            [
              16,
              0.8
            ],
            [
              18,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "Tree/Maple",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Tree",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "minzoom": 16,
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Tree/Maple",
        "icon-allow-overlap": true,
        "icon-padding": 1,
        "icon-size": {
          "stops": [
            [
              16,
              0.4
            ],
            [
              17,
              0.65
            ],
            [
              18,
              0.85
            ]
          ]
        }
      },
      "paint": {
        "icon-opacity": {
          "stops": [
            [
              16,
              0.8
            ],
            [
              18,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "Tree/Oak",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Tree",
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "minzoom": 16,
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Tree/Oak",
        "icon-allow-overlap": true,
        "icon-padding": 1,
        "icon-size": {
          "stops": [
            [
              16,
              0.4
            ],
            [
              17,
              0.65
            ],
            [
              18,
              0.85
            ]
          ]
        }
      },
      "paint": {
        "icon-opacity": {
          "stops": [
            [
              16,
              0.8
            ],
            [
              18,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "Tree/Orange",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Tree",
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "minzoom": 16,
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Tree/Orange",
        "icon-allow-overlap": true,
        "icon-padding": 1,
        "icon-size": {
          "stops": [
            [
              16,
              0.4
            ],
            [
              17,
              0.65
            ],
            [
              18,
              0.85
            ]
          ]
        }
      },
      "paint": {
        "icon-opacity": {
          "stops": [
            [
              16,
              0.8
            ],
            [
              18,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "Tree/Palm",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Tree",
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "minzoom": 16,
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Tree/Palm",
        "icon-allow-overlap": true,
        "icon-padding": 1,
        "icon-size": {
          "stops": [
            [
              16,
              0.4
            ],
            [
              17,
              0.65
            ],
            [
              18,
              0.85
            ]
          ]
        }
      },
      "paint": {
        "icon-opacity": {
          "stops": [
            [
              16,
              0.8
            ],
            [
              18,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "Tree/Pine",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Tree",
      "filter": [
        "==",
        "_symbol",
        6
      ],
      "minzoom": 16,
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Tree/Pine",
        "icon-allow-overlap": true,
        "icon-padding": 1,
        "icon-size": {
          "stops": [
            [
              16,
              0.4
            ],
            [
              17,
              0.65
            ],
            [
              18,
              0.85
            ]
          ]
        }
      },
      "paint": {
        "icon-opacity": {
          "stops": [
            [
              16,
              0.8
            ],
            [
              18,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "Tree/Spruce",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Tree",
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "minzoom": 16,
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Tree/Spruce",
        "icon-allow-overlap": true,
        "icon-padding": 1,
        "icon-size": {
          "stops": [
            [
              16,
              0.4
            ],
            [
              17,
              0.65
            ],
            [
              18,
              0.85
            ]
          ]
        }
      },
      "paint": {
        "icon-opacity": {
          "stops": [
            [
              16,
              0.8
            ],
            [
              18,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "Shrub",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Shrub",
      "minzoom": 16,
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Shrub",
        "icon-allow-overlap": true,
        "icon-padding": 1,
        "icon-size": {
          "stops": [
            [
              16,
              0.15
            ],
            [
              17,
              0.3
            ],
            [
              18,
              0.55
            ]
          ]
        }
      },
      "paint": {
        "icon-opacity": {
          "stops": [
            [
              16,
              0.8
            ],
            [
              18,
              1
            ]
          ]
        }
      }
    },
    {
      "id": "Water point/Sea or ocean",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water point",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "minzoom": 9,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "Tangerine Regular"
        ],
        "text-size": {
          "stops": [
            [
              1,
              14
            ],
            [
              6,
              30
            ]
          ]
        },
        "text-letter-spacing": 0.05,
        "text-max-width": 4,
        "text-field": "{_name_global}",
        "text-padding": 15
      },
      "paint": {
        "text-color": "#154639",
        "text-opacity": {
          "stops": [
            [
              1,
              0.7
            ],
            [
              6,
              1
            ]
          ]
        },
        "text-halo-blur": 1,
        "text-halo-color": "#dfe6e1",
        "text-halo-width": 1
      }
    },
    {
      "id": "Water point/Island",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water point",
      "filter": [
        "==",
        "_label_class",
        7
      ],
      "minzoom": 9,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": {
          "stops": [
            [
              9,
              9.5
            ],
            [
              15,
              11.5
            ]
          ]
        },
        "text-letter-spacing": 0.1,
        "text-max-width": 4,
        "text-field": "{_name_global}",
        "text-padding": 15
      },
      "paint": {
        "text-color": "#595959",
        "text-halo-blur": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Water point/Dam or weir",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water point",
      "filter": [
        "==",
        "_label_class",
        5
      ],
      "minzoom": 9,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": {
          "stops": [
            [
              9,
              9.5
            ],
            [
              15,
              11.5
            ]
          ]
        },
        "text-letter-spacing": 0.08,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 0.7,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Water point/Playa",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water point",
      "filter": [
        "==",
        "_label_class",
        6
      ],
      "minzoom": 9,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": {
          "stops": [
            [
              9,
              9.5
            ],
            [
              15,
              11.5
            ]
          ]
        },
        "text-letter-spacing": 0.08,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 0.7,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Water point/Canal or ditch",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water point",
      "filter": [
        "==",
        "_label_class",
        4
      ],
      "minzoom": 9,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Bold Italic"
        ],
        "text-size": {
          "stops": [
            [
              9,
              9.5
            ],
            [
              15,
              11.5
            ]
          ]
        },
        "text-letter-spacing": 0.13,
        "text-max-width": 5,
        "text-field": "{_name_global}",
        "text-padding": 15
      },
      "paint": {
        "text-color": "#154639",
        "text-halo-blur": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Water point/Stream or river",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water point",
      "filter": [
        "==",
        "_label_class",
        3
      ],
      "minzoom": 9,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Bold Italic"
        ],
        "text-size": {
          "stops": [
            [
              9,
              9.5
            ],
            [
              15,
              11.5
            ]
          ]
        },
        "text-letter-spacing": 0.1,
        "text-max-width": 4,
        "text-field": "{_name_global}",
        "text-padding": 15
      },
      "paint": {
        "text-color": "#154639",
        "text-halo-blur": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Water point/Lake or reservoir",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water point",
      "filter": [
        "==",
        "_label_class",
        2
      ],
      "minzoom": 9,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Bold Italic"
        ],
        "text-size": {
          "stops": [
            [
              9,
              9.5
            ],
            [
              15,
              11.5
            ]
          ]
        },
        "text-letter-spacing": 0.1,
        "text-max-width": 4,
        "text-field": "{_name_global}",
        "text-padding": 15
      },
      "paint": {
        "text-color": "#154639",
        "text-halo-blur": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Water point/Bay or inlet",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water point",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "minzoom": 9,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Bold Italic"
        ],
        "text-size": {
          "stops": [
            [
              9,
              9.5
            ],
            [
              15,
              11.5
            ]
          ]
        },
        "text-letter-spacing": 0.1,
        "text-max-width": 4,
        "text-field": "{_name_global}",
        "text-padding": 15
      },
      "paint": {
        "text-color": "#154639",
        "text-halo-blur": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Ferry/label/Ferry",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Ferry/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          0
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 12,
      "layout": {
        "symbol-placement": "line",
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Bold"
        ],
        "text-size": 10,
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 30
      },
      "paint": {
        "text-color": "#4E4E4E",
        "text-halo-width": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-blur": 1
      }
    },
    {
      "id": "Water line/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water line/label",
      "minzoom": 11,
      "layout": {
        "symbol-placement": "line",
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 12,
        "text-letter-spacing": 0.07,
        "text-max-width": 6,
        "text-max-angle": 35,
        "text-field": "{_name_global}",
        "text-padding": 1,
        "text-offset": [
          0,
          -0.5
        ],
        "symbol-spacing": 800
      },
      "paint": {
        "text-color": "#154639",
        "text-halo-blur": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Water line large scale/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water line large scale/label",
      "minzoom": 7,
      "maxzoom": 11,
      "layout": {
        "symbol-placement": "line",
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 9.3,
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-max-angle": {
          "stops": [
            [
              7,
              25
            ],
            [
              11,
              35
            ]
          ]
        },
        "text-field": "{_name}",
        "text-padding": 1,
        "text-offset": [
          0,
          -0.5
        ],
        "symbol-spacing": 800
      },
      "paint": {
        "text-color": "#154639",
        "text-halo-blur": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Water line medium scale/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water line medium scale/label",
      "minzoom": 5,
      "maxzoom": 7,
      "layout": {
        "symbol-placement": "line",
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 9.3,
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-max-angle": {
          "stops": [
            [
              5,
              15
            ],
            [
              6,
              25
            ]
          ]
        },
        "text-field": "{_name}",
        "text-padding": 1,
        "text-offset": [
          0,
          -0.5
        ],
        "symbol-spacing": 800
      },
      "paint": {
        "text-color": "#154639",
        "text-halo-blur": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Water line small scale/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water line small scale/label",
      "minzoom": 4,
      "maxzoom": 5,
      "layout": {
        "visibility": "none",
        "symbol-placement": "line",
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 9.3,
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-max-angle": 18,
        "text-field": "{_name}",
        "text-padding": 1,
        "text-offset": [
          0,
          -0.5
        ],
        "symbol-spacing": 800
      },
      "paint": {
        "text-color": "#154639",
        "text-halo-blur": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Marine park/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Marine park/label",
      "minzoom": 11,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 12,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#73AFBF"
      }
    },
    {
      "id": "Water area/label/Dam or weir",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water area/label",
      "filter": [
        "==",
        "_label_class",
        8
      ],
      "minzoom": 11,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.08,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 0.7,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Water area/label/Playa",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water area/label",
      "filter": [
        "==",
        "_label_class",
        9
      ],
      "minzoom": 11,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.08,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 0.7,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Water area/label/Canal or ditch",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water area/label",
      "filter": [
        "==",
        "_label_class",
        2
      ],
      "minzoom": 11,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 1000,
        "text-font": [
          "Alegreya Bold Italic"
        ],
        "text-size": 10.5,
        "text-letter-spacing": 0.13,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true,
        "text-max-width": 5
      },
      "paint": {
        "text-color": "#154639",
        "text-halo-blur": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Water area/label/Small river",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water area/label",
      "filter": [
        "==",
        "_label_class",
        7
      ],
      "minzoom": 11,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 1000,
        "text-font": [
          "Alegreya Bold Italic"
        ],
        "text-size": 10.5,
        "text-letter-spacing": 0.13,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true,
        "text-max-width": 6
      },
      "paint": {
        "text-color": "#154639",
        "text-halo-blur": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Water area/label/Large river",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water area/label",
      "filter": [
        "==",
        "_label_class",
        4
      ],
      "minzoom": 11,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 1000,
        "text-font": [
          "Alegreya Bold Italic"
        ],
        "text-size": 10.5,
        "text-letter-spacing": 0.13,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true,
        "text-max-width": 6
      },
      "paint": {
        "text-color": "#154639",
        "text-halo-blur": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Water area/label/Small lake or reservoir",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water area/label",
      "filter": [
        "==",
        "_label_class",
        6
      ],
      "minzoom": 11,
      "layout": {
        "text-font": [
          "Alegreya Bold Italic"
        ],
        "text-size": 10.5,
        "text-letter-spacing": 0.13,
        "text-max-width": 4,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#154639",
        "text-halo-blur": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Water area/label/Large lake or reservoir",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water area/label",
      "filter": [
        "==",
        "_label_class",
        3
      ],
      "minzoom": 11,
      "layout": {
        "text-font": [
          "Alegreya Bold Italic"
        ],
        "text-size": 10.5,
        "text-letter-spacing": 0.13,
        "text-max-width": 4,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#154639",
        "text-halo-blur": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Water area/label/Bay or inlet",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water area/label",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "minzoom": 11,
      "layout": {
        "text-font": [
          "Alegreya Bold Italic"
        ],
        "text-size": 10.5,
        "text-letter-spacing": 0.13,
        "text-max-width": 4,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#154639",
        "text-halo-blur": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Water area/label/Small island",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water area/label",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "minzoom": 11,
      "layout": {
        "text-size": 10.5,
        "text-letter-spacing": 0.1,
        "text-max-width": 4,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Bold Italic"
        ]
      },
      "paint": {
        "text-color": "#595959",
        "text-halo-blur": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Water area/label/Large island",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water area/label",
      "filter": [
        "==",
        "_label_class",
        5
      ],
      "minzoom": 11,
      "layout": {
        "text-size": 10.5,
        "text-letter-spacing": 0.13,
        "text-max-width": 4,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Bold Italic"
        ]
      },
      "paint": {
        "text-color": "#595959",
        "text-halo-blur": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Water area large scale/label/River",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water area large scale/label",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "minzoom": 7,
      "maxzoom": 11,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 1000,
        "text-font": [
          "Alegreya Bold Italic"
        ],
        "text-size": 9.3,
        "text-letter-spacing": 0.1,
        "text-field": "{_name}",
        "text-padding": 15,
        "symbol-avoid-edges": true,
        "text-max-width": 4
      },
      "paint": {
        "text-color": "#154639",
        "text-halo-blur": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Water area large scale/label/Lake or lake intermittent",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water area large scale/label",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "minzoom": 7,
      "maxzoom": 11,
      "layout": {
        "text-font": [
          "Alegreya Bold Italic"
        ],
        "text-size": 9.3,
        "text-letter-spacing": 0.1,
        "text-max-width": 4,
        "text-field": "{_name}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#154639",
        "text-halo-blur": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Water area medium scale/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water area medium scale/label",
      "minzoom": 5,
      "maxzoom": 7,
      "layout": {
        "text-max-width": 4,
        "text-field": "{_name}",
        "text-padding": 15,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.08,
        "text-font": [
          "Alegreya Bold Italic"
        ],
        "text-size": 9.300000000001
      },
      "paint": {
        "text-color": "#154639",
        "text-halo-blur": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Water area small scale/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water area small scale/label",
      "minzoom": 1,
      "maxzoom": 5,
      "layout": {
        "text-font": [
          "Alegreya Bold Italic"
        ],
        "text-size": 9.3,
        "text-letter-spacing": 0.08,
        "text-max-width": 4,
        "text-field": "{_name}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#154639",
        "text-halo-blur": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Marine area/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Marine area/label",
      "minzoom": 11,
      "layout": {
        "text-font": [
          "Alegreya Bold Italic"
        ],
        "text-size": 10.5,
        "text-letter-spacing": 0.13,
        "text-max-width": 4,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#154639",
        "text-halo-blur": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Marine waterbody/label/small",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Marine waterbody/label",
      "filter": [
        "==",
        "_label_class",
        4
      ],
      "minzoom": 1,
      "maxzoom": 10,
      "layout": {
        "text-font": [
          "Tangerine Regular"
        ],
        "text-line-height": 1,
        "text-letter-spacing": 0.05,
        "text-max-width": 2,
        "text-field": "{_name}",
        "text-padding": 15,
        "symbol-avoid-edges": true,
        "text-size": {
          "stops": [
            [
              1,
              10
            ],
            [
              6,
              20
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              1,
              "#246050"
            ],
            [
              6,
              "#154639"
            ]
          ]
        },
        "text-halo-blur": 1,
        "text-halo-color": "#dfe6e1",
        "text-halo-width": 1
      }
    },
    {
      "id": "Marine waterbody/label/medium",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Marine waterbody/label",
      "filter": [
        "==",
        "_label_class",
        3
      ],
      "minzoom": 1,
      "maxzoom": 10,
      "layout": {
        "text-font": [
          "Tangerine Regular"
        ],
        "text-line-height": 1,
        "text-letter-spacing": 0.05,
        "text-max-width": 2,
        "text-field": "{_name}",
        "text-padding": 15,
        "symbol-avoid-edges": true,
        "text-size": {
          "stops": [
            [
              1,
              10
            ],
            [
              6,
              25
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              1,
              "#246050"
            ],
            [
              6,
              "#154639"
            ]
          ]
        },
        "text-halo-blur": 1,
        "text-halo-color": "#dfe6e1",
        "text-halo-width": 1
      }
    },
    {
      "id": "Marine waterbody/label/large",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Marine waterbody/label",
      "filter": [
        "==",
        "_label_class",
        2
      ],
      "minzoom": 1,
      "maxzoom": 10,
      "layout": {
        "text-font": [
          "Tangerine Regular"
        ],
        "text-line-height": 1,
        "text-letter-spacing": 0.05,
        "text-max-width": 2,
        "text-field": "{_name}",
        "text-padding": 15,
        "symbol-avoid-edges": true,
        "text-size": {
          "stops": [
            [
              1,
              12
            ],
            [
              6,
              30
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              1,
              "#246050"
            ],
            [
              6,
              "#154639"
            ]
          ]
        },
        "text-halo-blur": 1,
        "text-halo-color": "#dfe6e1",
        "text-halo-width": 1
      }
    },
    {
      "id": "Marine waterbody/label/x large",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Marine waterbody/label",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "minzoom": 1,
      "maxzoom": 10,
      "layout": {
        "text-font": [
          "Tangerine Regular"
        ],
        "text-line-height": 1,
        "text-letter-spacing": 0.05,
        "text-max-width": 2,
        "text-field": "{_name}",
        "text-padding": 15,
        "symbol-avoid-edges": true,
        "text-size": {
          "stops": [
            [
              1,
              16
            ],
            [
              6,
              35
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              1,
              "#246050"
            ],
            [
              6,
              "#154639"
            ]
          ]
        },
        "text-halo-blur": 1,
        "text-halo-color": "#dfe6e1",
        "text-halo-width": 1
      }
    },
    {
      "id": "Marine waterbody/label/2x large",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Marine waterbody/label",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "minzoom": 1,
      "maxzoom": 10,
      "layout": {
        "text-font": [
          "Tangerine Regular"
        ],
        "text-letter-spacing": 0.05,
        "text-max-width": 2,
        "text-field": "{_name}",
        "text-padding": 15,
        "symbol-avoid-edges": true,
        "text-size": {
          "stops": [
            [
              1,
              20
            ],
            [
              4,
              40
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#154639",
        "text-halo-blur": 1,
        "text-halo-color": "#dfe6e1",
        "text-halo-width": 1
      }
    },
    {
      "id": "Ferry/label/Rail ferry",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Ferry/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          1
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 12,
      "layout": {
        "symbol-placement": "line",
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Regular"
        ],
        "text-size": 12,
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 1,
        "text-offset": [
          0,
          -0.6
        ],
        "symbol-spacing": 1000
      },
      "paint": {
        "text-color": "#4E4E4E",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Railroad/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Railroad/label",
      "minzoom": 14,
      "layout": {
        "symbol-placement": "line",
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Regular"
        ],
        "text-size": 12,
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 1,
        "text-offset": [
          0,
          -0.6
        ],
        "symbol-spacing": 1000
      },
      "paint": {
        "text-color": "#4E4E4E",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Trail or path/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Trail or path/label",
      "minzoom": 15,
      "layout": {
        "symbol-placement": "line",
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Sans Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 5
      },
      "paint": {
        "text-color": "#756C5E",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Road tunnel/label/Pedestrian",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Road tunnel/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          6
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 15,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Sans Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 5
      },
      "paint": {
        "text-color": "#595959",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Road tunnel/label/Local, service, 4WD",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Road tunnel/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          5
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 12,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Regular"
        ],
        "text-size": {
          "stops": [
            [
              10,
              10.5
            ],
            [
              13,
              11.5
            ],
            [
              17,
              15
            ]
          ]
        },
        "text-letter-spacing": {
          "stops": [
            [
              10,
              0.1
            ],
            [
              14,
              0.2
            ]
          ]
        },
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 5
      },
      "paint": {
        "text-color": "#4b453e",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Road tunnel/label/Minor",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Road tunnel/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          4
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 10,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "symbol-avoid-edges": true,
        "text-font": {
          "stops": [
            [
              13,
              [
                "Alegreya Regular"
              ]
            ],
            [
              14,
              [
                "Alegreya SC Regular"
              ]
            ]
          ]
        },
        "text-size": {
          "stops": [
            [
              10,
              10.5
            ],
            [
              13,
              11.5
            ],
            [
              17,
              15
            ]
          ]
        },
        "text-letter-spacing": {
          "stops": [
            [
              10,
              0.1
            ],
            [
              14,
              0.2
            ]
          ]
        },
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 5
      },
      "paint": {
        "text-color": "#4b453e",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Road tunnel/label/Major, alt name",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Road tunnel/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          3
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 10,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "symbol-avoid-edges": true,
        "text-font": {
          "stops": [
            [
              13,
              [
                "Alegreya Regular"
              ]
            ],
            [
              14,
              [
                "Alegreya SC Regular"
              ]
            ]
          ]
        },
        "text-size": {
          "stops": [
            [
              10,
              10.5
            ],
            [
              13,
              11.5
            ],
            [
              17,
              15
            ]
          ]
        },
        "text-letter-spacing": {
          "stops": [
            [
              10,
              0.1
            ],
            [
              14,
              0.2
            ],
            [
              16,
              0.4
            ]
          ]
        },
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 5
      },
      "paint": {
        "text-color": "#312a23",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Road tunnel/label/Major",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Road tunnel/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          2
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 10,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "symbol-avoid-edges": true,
        "text-font": {
          "stops": [
            [
              13,
              [
                "Alegreya Regular"
              ]
            ],
            [
              14,
              [
                "Alegreya SC Regular"
              ]
            ]
          ]
        },
        "text-size": {
          "stops": [
            [
              10,
              10.5
            ],
            [
              13,
              11.5
            ],
            [
              17,
              15
            ]
          ]
        },
        "text-letter-spacing": {
          "stops": [
            [
              10,
              0.1
            ],
            [
              14,
              0.2
            ],
            [
              16,
              0.4
            ]
          ]
        },
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 5
      },
      "paint": {
        "text-color": "#312a23",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Road tunnel/label/Highway",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Road tunnel/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          7
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 10,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "symbol-avoid-edges": true,
        "text-font": {
          "stops": [
            [
              13,
              [
                "Alegreya Regular"
              ]
            ],
            [
              14,
              [
                "Alegreya SC Regular"
              ]
            ]
          ]
        },
        "text-size": {
          "stops": [
            [
              10,
              10.5
            ],
            [
              13,
              11.5
            ],
            [
              17,
              15
            ]
          ]
        },
        "text-letter-spacing": {
          "stops": [
            [
              10,
              0.1
            ],
            [
              14,
              0.2
            ],
            [
              16,
              0.4
            ]
          ]
        },
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 5
      },
      "paint": {
        "text-color": "#312a23",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Road tunnel/label/Freeway Motorway, alt name",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Road tunnel/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          1
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 10,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "symbol-avoid-edges": true,
        "text-font": {
          "stops": [
            [
              13,
              [
                "Alegreya Regular"
              ]
            ],
            [
              14,
              [
                "Alegreya SC Regular"
              ]
            ]
          ]
        },
        "text-size": {
          "stops": [
            [
              10,
              10.5
            ],
            [
              13,
              11.5
            ],
            [
              17,
              15
            ]
          ]
        },
        "text-letter-spacing": {
          "stops": [
            [
              10,
              0.1
            ],
            [
              14,
              0.2
            ],
            [
              16,
              0.4
            ]
          ]
        },
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 5
      },
      "paint": {
        "text-color": "#312a23",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Road tunnel/label/Freeway Motorway",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Road tunnel/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          0
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 10,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "symbol-avoid-edges": true,
        "text-font": {
          "stops": [
            [
              13,
              [
                "Alegreya Regular"
              ]
            ],
            [
              14,
              [
                "Alegreya SC Regular"
              ]
            ]
          ]
        },
        "text-size": {
          "stops": [
            [
              10,
              10.5
            ],
            [
              13,
              11.5
            ],
            [
              17,
              15
            ]
          ]
        },
        "text-letter-spacing": {
          "stops": [
            [
              10,
              0.1
            ],
            [
              14,
              0.2
            ],
            [
              16,
              0.4
            ]
          ]
        },
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 5
      },
      "paint": {
        "text-color": "#312a23",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Road/label/Pedestrian",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Road/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          6
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 15,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Sans Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 5
      },
      "paint": {
        "text-color": "#595959",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Building/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Building/label",
      "minzoom": 15,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.08,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 0.7,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Road/label/Freeway Motorway shield text",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Road/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          76
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 10,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Regular"
        ],
        "text-size": {
          "stops": [
            [
              10,
              10
            ],
            [
              17,
              15
            ]
          ]
        },
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 5
      },
      "paint": {
        "text-color": "#312a23",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Road/label/Freeway Motorway Major alt shield text",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Road/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          77
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 11,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Regular"
        ],
        "text-size": {
          "stops": [
            [
              10,
              10
            ],
            [
              17,
              15
            ]
          ]
        },
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 5
      },
      "paint": {
        "text-color": "#312a23",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Road/label/Major shield text",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Road/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          78
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 12,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Regular"
        ],
        "text-size": {
          "stops": [
            [
              10,
              10
            ],
            [
              17,
              15
            ]
          ]
        },
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 5
      },
      "paint": {
        "text-color": "#312a23",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Road/label/Minor shield text",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Road/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          79
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 15,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Regular"
        ],
        "text-size": {
          "stops": [
            [
              10,
              10
            ],
            [
              17,
              15
            ]
          ]
        },
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 5
      },
      "paint": {
        "text-color": "#312a23",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Road/label/Local shield text",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Road/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          80
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 15,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Regular"
        ],
        "text-size": {
          "stops": [
            [
              10,
              10
            ],
            [
              17,
              15
            ]
          ]
        },
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 5
      },
      "paint": {
        "text-color": "#312a23",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Road/label/Highway shield text",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Road/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          81
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 12,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Regular"
        ],
        "text-size": {
          "stops": [
            [
              10,
              10
            ],
            [
              17,
              15
            ]
          ]
        },
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 5
      },
      "paint": {
        "text-color": "#312a23",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Road/label/Local",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Road/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          5
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 12,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Regular"
        ],
        "text-size": {
          "stops": [
            [
              10,
              10.5
            ],
            [
              13,
              11.5
            ],
            [
              17,
              15
            ]
          ]
        },
        "text-letter-spacing": {
          "stops": [
            [
              10,
              0.1
            ],
            [
              14,
              0.2
            ]
          ]
        },
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 5
      },
      "paint": {
        "text-color": "#4b453e",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Road/label/Minor",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Road/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          4
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 10,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "symbol-avoid-edges": true,
        "text-font": {
          "stops": [
            [
              13,
              [
                "Alegreya Regular"
              ]
            ],
            [
              14,
              [
                "Alegreya SC Regular"
              ]
            ]
          ]
        },
        "text-size": {
          "stops": [
            [
              10,
              10.5
            ],
            [
              13,
              11.5
            ],
            [
              17,
              15
            ]
          ]
        },
        "text-letter-spacing": {
          "stops": [
            [
              10,
              0.1
            ],
            [
              14,
              0.2
            ]
          ]
        },
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 5
      },
      "paint": {
        "text-color": "#4b453e",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Road/label/Major, alt name",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Road/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          3
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 10,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "symbol-avoid-edges": true,
        "text-font": {
          "stops": [
            [
              13,
              [
                "Alegreya Regular"
              ]
            ],
            [
              14,
              [
                "Alegreya SC Regular"
              ]
            ]
          ]
        },
        "text-size": {
          "stops": [
            [
              10,
              10.5
            ],
            [
              13,
              11.5
            ],
            [
              17,
              15
            ]
          ]
        },
        "text-letter-spacing": {
          "stops": [
            [
              10,
              0.1
            ],
            [
              14,
              0.2
            ]
          ]
        },
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 5
      },
      "paint": {
        "text-color": "#4b453e",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Road/label/Major",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Road/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          2
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 10,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "symbol-avoid-edges": true,
        "text-font": {
          "stops": [
            [
              13,
              [
                "Alegreya Regular"
              ]
            ],
            [
              14,
              [
                "Alegreya SC Regular"
              ]
            ]
          ]
        },
        "text-size": {
          "stops": [
            [
              10,
              10.5
            ],
            [
              13,
              11.5
            ],
            [
              17,
              15
            ]
          ]
        },
        "text-letter-spacing": {
          "stops": [
            [
              10,
              0.1
            ],
            [
              14,
              0.2
            ],
            [
              16,
              0.4
            ]
          ]
        },
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 5
      },
      "paint": {
        "text-color": "#312a23",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Road/label/Highway",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Road/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          75
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 10,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "symbol-avoid-edges": true,
        "text-font": {
          "stops": [
            [
              13,
              [
                "Alegreya Regular"
              ]
            ],
            [
              14,
              [
                "Alegreya SC Regular"
              ]
            ]
          ]
        },
        "text-size": {
          "stops": [
            [
              10,
              10.5
            ],
            [
              13,
              11.5
            ],
            [
              17,
              15
            ]
          ]
        },
        "text-letter-spacing": {
          "stops": [
            [
              10,
              0.1
            ],
            [
              14,
              0.2
            ],
            [
              16,
              0.4
            ]
          ]
        },
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 5
      },
      "paint": {
        "text-color": "#312a23",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Road/label/Freeway Motorway, alt name",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Road/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          1
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 10,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "symbol-avoid-edges": true,
        "text-font": {
          "stops": [
            [
              13,
              [
                "Alegreya Regular"
              ]
            ],
            [
              14,
              [
                "Alegreya SC Regular"
              ]
            ]
          ]
        },
        "text-size": {
          "stops": [
            [
              10,
              10.5
            ],
            [
              13,
              11.5
            ],
            [
              17,
              15
            ]
          ]
        },
        "text-letter-spacing": {
          "stops": [
            [
              10,
              0.1
            ],
            [
              14,
              0.2
            ],
            [
              16,
              0.4
            ]
          ]
        },
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 5
      },
      "paint": {
        "text-color": "#312a23",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Road/label/Freeway Motorway",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Road/label",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          0
        ],
        [
          "!in",
          "Viz",
          3
        ]
      ],
      "minzoom": 10,
      "layout": {
        "symbol-placement": "line",
        "symbol-spacing": 400,
        "symbol-avoid-edges": true,
        "text-font": {
          "stops": [
            [
              13,
              [
                "Alegreya Regular"
              ]
            ],
            [
              14,
              [
                "Alegreya SC Regular"
              ]
            ]
          ]
        },
        "text-size": {
          "stops": [
            [
              10,
              10.5
            ],
            [
              13,
              11.5
            ],
            [
              17,
              15
            ]
          ]
        },
        "text-letter-spacing": {
          "stops": [
            [
              10,
              0.1
            ],
            [
              14,
              0.2
            ],
            [
              16,
              0.4
            ]
          ]
        },
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 5
      },
      "paint": {
        "text-color": "#312a23",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Cemetery/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Cemetery/label",
      "minzoom": 13,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Freight/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Freight/label",
      "minzoom": 12,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Water and wastewater/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Water and wastewater/label",
      "minzoom": 13,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Port/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Port/label",
      "minzoom": 12,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Industry/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Industry/label",
      "minzoom": 12,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Government/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Government/label",
      "minzoom": 13,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Finance/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Finance/label",
      "minzoom": 13,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Emergency/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Emergency/label",
      "minzoom": 13,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Indigenous/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Indigenous/label",
      "minzoom": 7,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Military/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Military/label",
      "minzoom": 6,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 25,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Transportation/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Transportation/label",
      "minzoom": 13,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Pedestrian/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Pedestrian/label",
      "minzoom": 13,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Beach/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Beach/label",
      "minzoom": 13,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 9.3,
        "text-letter-spacing": 0.08,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Golf course/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Golf course/label",
      "minzoom": 11,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Zoo/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Zoo/label",
      "minzoom": 11,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Retail/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Retail/label",
      "minzoom": 13,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Landmark/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Landmark/label",
      "minzoom": 13,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Openspace or forest/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Openspace or forest/label",
      "minzoom": 10,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 25
      },
      "paint": {
        "text-color": "#48481e",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Park or farming/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Park or farming/label",
      "minzoom": 11,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 25
      },
      "paint": {
        "text-color": "#464d0d",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Point of interest/Park",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Point of interest",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "minzoom": 9,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": {
          "stops": [
            [
              9,
              9.5
            ],
            [
              15,
              11.5
            ]
          ]
        },
        "text-letter-spacing": 0.08,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15
      },
      "paint": {
        "text-color": "#464d0d",
        "text-halo-width": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-blur": 1
      }
    },
    {
      "id": "Education/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Education/label",
      "minzoom": 11,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Medical/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Medical/label",
      "minzoom": 11,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Admin1 forest or park/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Admin1 forest or park/label",
      "minzoom": 7,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 25
      },
      "paint": {
        "text-color": "#48481e",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Admin0 forest or park/label/Default",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Admin0 forest or park/label",
      "minzoom": 6,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 11,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 25,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#48481e",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Airport/label/Airport property",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Airport/label",
      "minzoom": 9,
      "layout": {
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": 10.5,
        "text-letter-spacing": 0.05,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#686868",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Admin2 area/label/small",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Admin2 area/label",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "minzoom": 9,
      "maxzoom": 11,
      "layout": {
        "text-letter-spacing": 0.2,
        "text-font": [
          "Alegreya Bold Italic"
        ],
        "text-size": 12,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#80755f",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Admin2 area/label/large",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Admin2 area/label",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "minzoom": 9,
      "maxzoom": 11,
      "layout": {
        "text-letter-spacing": 0.2,
        "text-font": [
          "Alegreya Bold Italic"
        ],
        "text-size": 13.3,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "symbol-avoid-edges": true
      },
      "paint": {
        "text-color": "#80755f",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Admin1 area/label/x small",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Admin1 area/label",
      "filter": [
        "==",
        "_label_class",
        5
      ],
      "minzoom": 4,
      "maxzoom": 10,
      "layout": {
        "text-font": [
          "IM FELL DW Pica PRO Italic"
        ],
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "text-size": {
          "stops": [
            [
              4,
              10.5
            ],
            [
              6,
              10.3
            ],
            [
              9,
              12
            ]
          ]
        },
        "text-letter-spacing": {
          "stops": [
            [
              4,
              0.1
            ],
            [
              8,
              0.15
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              3,
              "#6f522d"
            ],
            [
              5,
              "#5d3c12"
            ]
          ]
        },
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Admin1 area/label/small",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Admin1 area/label",
      "filter": [
        "==",
        "_label_class",
        4
      ],
      "minzoom": 4,
      "maxzoom": 10,
      "layout": {
        "text-font": [
          "IM FELL DW Pica PRO Italic"
        ],
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "text-size": {
          "stops": [
            [
              4,
              10.5
            ],
            [
              6,
              10.3
            ],
            [
              9,
              12
            ]
          ]
        },
        "text-letter-spacing": {
          "stops": [
            [
              4,
              0.1
            ],
            [
              8,
              0.15
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              4,
              "#6f522d"
            ],
            [
              5,
              "#5d3c12"
            ]
          ]
        },
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Admin1 area/label/medium",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Admin1 area/label",
      "filter": [
        "==",
        "_label_class",
        3
      ],
      "minzoom": 4,
      "maxzoom": 10,
      "layout": {
        "text-font": [
          "IM FELL DW Pica PRO Italic"
        ],
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "text-size": {
          "stops": [
            [
              4,
              12.5
            ],
            [
              6,
              12.3
            ],
            [
              9,
              14
            ]
          ]
        },
        "text-letter-spacing": {
          "stops": [
            [
              4,
              0.1
            ],
            [
              8,
              0.15
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              4,
              "#6f522d"
            ],
            [
              5,
              "#5d3c12"
            ]
          ]
        },
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Admin1 area/label/large",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Admin1 area/label",
      "filter": [
        "==",
        "_label_class",
        2
      ],
      "minzoom": 4,
      "maxzoom": 10,
      "layout": {
        "text-font": [
          "IM FELL DW Pica PRO Italic"
        ],
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "text-size": {
          "stops": [
            [
              4,
              12.5
            ],
            [
              5,
              13.3
            ],
            [
              6,
              14
            ],
            [
              9,
              18
            ]
          ]
        },
        "text-letter-spacing": {
          "stops": [
            [
              4,
              0.1
            ],
            [
              8,
              0.15
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              4,
              "#6f522d"
            ],
            [
              5,
              "#5d3c12"
            ]
          ]
        },
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Admin1 area/label/x large",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Admin1 area/label",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "minzoom": 4,
      "maxzoom": 10,
      "layout": {
        "text-font": [
          "IM FELL DW Pica PRO Italic"
        ],
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "text-size": {
          "stops": [
            [
              4,
              12.5
            ],
            [
              5,
              13.3
            ],
            [
              6,
              14
            ],
            [
              9,
              18
            ]
          ]
        },
        "text-letter-spacing": {
          "stops": [
            [
              4,
              0.13
            ],
            [
              8,
              0.2
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              3,
              "#6f522d"
            ],
            [
              5,
              "#5d3c12"
            ]
          ]
        },
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Admin1 area/label/2x large",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Admin1 area/label",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "minzoom": 4,
      "maxzoom": 10,
      "layout": {
        "text-font": [
          "IM FELL DW Pica PRO Italic"
        ],
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "text-size": {
          "stops": [
            [
              4,
              12.5
            ],
            [
              5,
              13.3
            ],
            [
              6,
              14
            ],
            [
              9,
              19
            ]
          ]
        },
        "text-letter-spacing": {
          "stops": [
            [
              4,
              0.13
            ],
            [
              8,
              0.3
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              4,
              "#6f522d"
            ],
            [
              6,
              "#5d3c12"
            ]
          ]
        },
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Point of interest/Bus station",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Point of interest",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "minzoom": 9,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": {
          "stops": [
            [
              9,
              9.5
            ],
            [
              15,
              11.5
            ]
          ]
        },
        "text-anchor": "bottom-left",
        "text-letter-spacing": 0.04,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 1,
        "text-offset": [
          0,
          3.5
        ]
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 0.7,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Point of interest/Rail station",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Point of interest",
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "minzoom": 9,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": {
          "stops": [
            [
              9,
              9.5
            ],
            [
              15,
              11.5
            ]
          ]
        },
        "text-anchor": "bottom-left",
        "text-letter-spacing": 0.04,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 1,
        "text-offset": [
          0,
          2
        ]
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 0.7,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Point of interest/General",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Point of interest",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "minzoom": 9,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya Italic"
        ],
        "text-size": {
          "stops": [
            [
              9,
              9.5
            ],
            [
              15,
              11.5
            ]
          ]
        },
        "text-letter-spacing": 0.08,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 15
      },
      "paint": {
        "text-color": "#272727",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 0.7,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Neighborhood",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Neighborhood",
      "minzoom": 10,
      "maxzoom": 17,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-size": {
          "stops": [
            [
              10,
              10.5
            ],
            [
              15,
              13.5
            ]
          ]
        },
        "text-letter-spacing": 0.08,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 1
      },
      "paint": {
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City large scale/town small",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City large scale",
      "filter": [
        "==",
        "_label_class",
        5
      ],
      "minzoom": 10,
      "maxzoom": 17,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-size": {
          "stops": [
            [
              10,
              10.5
            ],
            [
              15,
              13.5
            ]
          ]
        },
        "text-letter-spacing": 0.08,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 1
      },
      "paint": {
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City large scale/town large",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City large scale",
      "filter": [
        "==",
        "_label_class",
        4
      ],
      "minzoom": 10,
      "maxzoom": 17,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-size": {
          "stops": [
            [
              10,
              10.5
            ],
            [
              15,
              15
            ]
          ]
        },
        "text-letter-spacing": 0.09,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 1
      },
      "paint": {
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City large scale/small",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City large scale",
      "filter": [
        "==",
        "_label_class",
        3
      ],
      "minzoom": 10,
      "maxzoom": 17,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 1,
        "text-size": {
          "stops": [
            [
              10,
              11.5
            ],
            [
              15,
              16
            ]
          ]
        }
      },
      "paint": {
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City large scale/medium",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City large scale",
      "filter": [
        "==",
        "_label_class",
        2
      ],
      "minzoom": 10,
      "maxzoom": 17,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 1,
        "text-size": {
          "stops": [
            [
              10,
              12
            ],
            [
              15,
              18
            ]
          ]
        }
      },
      "paint": {
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City large scale/large",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City large scale",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "minzoom": 10,
      "maxzoom": 17,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 1,
        "text-size": {
          "stops": [
            [
              10,
              13
            ],
            [
              15,
              19
            ]
          ]
        }
      },
      "paint": {
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City large scale/x large",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City large scale",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "minzoom": 10,
      "maxzoom": 17,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name_global}",
        "text-padding": 1,
        "text-size": {
          "stops": [
            [
              10,
              13
            ],
            [
              15,
              20
            ]
          ]
        }
      },
      "paint": {
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City small scale/town small non capital",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        17
      ],
      "minzoom": 3,
      "maxzoom": 10,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "text-offset": [
          0.15,
          0
        ],
        "text-size": 10.5
      },
      "paint": {
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City small scale/town large non capital",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        15
      ],
      "minzoom": 3,
      "maxzoom": 10,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "text-offset": [
          0.15,
          0
        ],
        "text-size": 10.5
      },
      "paint": {
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City small scale/small non capital",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        12
      ],
      "minzoom": 3,
      "maxzoom": 10,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "text-offset": [
          0.15,
          0
        ],
        "text-size": 11.5
      },
      "paint": {
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City small scale/medium non capital",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        9
      ],
      "minzoom": 3,
      "maxzoom": 10,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "text-offset": [
          0.15,
          0
        ],
        "text-size": {
          "stops": [
            [
              4,
              11.5
            ],
            [
              6,
              11.5
            ],
            [
              8,
              12
            ]
          ]
        }
      },
      "paint": {
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City small scale/other capital",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        18
      ],
      "minzoom": 3,
      "maxzoom": 10,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "text-offset": [
          0.15,
          0
        ],
        "text-size": 11.5
      },
      "paint": {
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City small scale/town large other capital",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        14
      ],
      "minzoom": 3,
      "maxzoom": 10,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "text-offset": [
          0.15,
          0
        ],
        "text-size": 11.5
      },
      "paint": {
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City small scale/small other capital",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        11
      ],
      "minzoom": 3,
      "maxzoom": 10,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "text-offset": [
          0.15,
          0
        ],
        "text-size": 11.5
      },
      "paint": {
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City small scale/medium other capital",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        8
      ],
      "minzoom": 3,
      "maxzoom": 10,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "text-offset": [
          0.15,
          0
        ],
        "text-size": {
          "stops": [
            [
              4,
              11.5
            ],
            [
              6,
              11.5
            ],
            [
              8,
              12
            ]
          ]
        }
      },
      "paint": {
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Admin0 point/x small",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Admin0 point",
      "filter": [
        "==",
        "_label_class",
        5
      ],
      "minzoom": 5,
      "maxzoom": 10,
      "layout": {
        "text-font": [
          "Alegreya SC Bold"
        ],
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "text-letter-spacing": {
          "stops": [
            [
              5,
              0.13
            ],
            [
              8,
              0.5
            ]
          ]
        },
        "text-size": {
          "stops": [
            [
              5,
              10
            ],
            [
              10,
              12.5
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              2,
              "#5f4e3e"
            ],
            [
              3,
              "#403428"
            ]
          ]
        },
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Admin0 point/small",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Admin0 point",
      "filter": [
        "==",
        "_label_class",
        4
      ],
      "minzoom": 4,
      "maxzoom": 10,
      "layout": {
        "text-font": [
          "Alegreya SC Bold"
        ],
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "text-letter-spacing": {
          "stops": [
            [
              4,
              0.13
            ],
            [
              8,
              0.5
            ]
          ]
        },
        "text-size": {
          "stops": [
            [
              4,
              10
            ],
            [
              10,
              12.5
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              2,
              "#5f4e3e"
            ],
            [
              3,
              "#403428"
            ]
          ]
        },
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Admin0 point/medium",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Admin0 point",
      "filter": [
        "==",
        "_label_class",
        3
      ],
      "minzoom": 2,
      "maxzoom": 10,
      "layout": {
        "text-font": [
          "Alegreya SC Bold"
        ],
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "text-letter-spacing": {
          "stops": [
            [
              2,
              0.13
            ],
            [
              8,
              0.5
            ]
          ]
        },
        "text-size": {
          "stops": [
            [
              2,
              8.6
            ],
            [
              4,
              11
            ],
            [
              10,
              17
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              2,
              "#5f4e3e"
            ],
            [
              3,
              "#403428"
            ]
          ]
        },
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Admin0 point/large",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Admin0 point",
      "filter": [
        "==",
        "_label_class",
        2
      ],
      "minzoom": 2,
      "maxzoom": 10,
      "layout": {
        "text-font": [
          "Alegreya SC Bold"
        ],
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "text-letter-spacing": {
          "stops": [
            [
              2,
              0.13
            ],
            [
              8,
              0.5
            ]
          ]
        },
        "text-size": {
          "stops": [
            [
              2,
              9.5
            ],
            [
              4,
              11
            ],
            [
              6,
              17
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              2,
              "#5f4e3e"
            ],
            [
              3,
              "#403428"
            ]
          ]
        },
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Admin0 point/x large",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Admin0 point",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "minzoom": 2,
      "maxzoom": 8,
      "layout": {
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya SC Bold"
        ],
        "text-line-height": 1.5,
        "text-letter-spacing": {
          "stops": [
            [
              2,
              0.15
            ],
            [
              6,
              0.55
            ]
          ]
        },
        "text-size": {
          "stops": [
            [
              2,
              9.5
            ],
            [
              4,
              12
            ],
            [
              6,
              18
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              2,
              "#5f4e3e"
            ],
            [
              3,
              "#403428"
            ]
          ]
        },
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City small scale/town small admin0 capital",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        16
      ],
      "minzoom": 3,
      "maxzoom": 10,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "text-offset": [
          0.15,
          0
        ],
        "text-size": {
          "stops": [
            [
              4,
              11.5
            ],
            [
              6,
              12
            ],
            [
              8,
              13
            ]
          ]
        }
      },
      "paint": {
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City small scale/town large admin0 capital",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        13
      ],
      "minzoom": 3,
      "maxzoom": 10,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "text-offset": [
          0.15,
          0
        ],
        "text-size": {
          "stops": [
            [
              4,
              11.5
            ],
            [
              6,
              12
            ],
            [
              8,
              13
            ]
          ]
        }
      },
      "paint": {
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City small scale/small admin0 capital",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        10
      ],
      "minzoom": 3,
      "maxzoom": 10,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "text-offset": [
          0.15,
          0
        ],
        "text-size": {
          "stops": [
            [
              4,
              11.5
            ],
            [
              6,
              12
            ],
            [
              8,
              13
            ]
          ]
        }
      },
      "paint": {
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City small scale/medium admin0 capital",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "minzoom": 3,
      "maxzoom": 10,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "text-offset": [
          0.15,
          0
        ],
        "text-size": {
          "stops": [
            [
              4,
              11.5
            ],
            [
              6,
              12
            ],
            [
              8,
              13
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#343434",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City small scale/large other capital",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "minzoom": 3,
      "maxzoom": 10,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "text-offset": [
          0.15,
          0
        ],
        "text-size": {
          "stops": [
            [
              4,
              11.5
            ],
            [
              6,
              11
            ],
            [
              8,
              12
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              2,
              "#343434"
            ],
            [
              3,
              "#000000"
            ]
          ]
        },
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City small scale/x large admin2 capital",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "minzoom": 3,
      "maxzoom": 10,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "text-offset": [
          0.15,
          0
        ],
        "text-size": {
          "stops": [
            [
              4,
              11.5
            ],
            [
              6,
              12
            ],
            [
              8,
              13
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              2,
              "#343434"
            ],
            [
              3,
              "#000000"
            ]
          ]
        },
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City small scale/large non capital",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        6
      ],
      "minzoom": 3,
      "maxzoom": 10,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "text-offset": [
          0.15,
          0
        ],
        "text-size": {
          "stops": [
            [
              4,
              11.5
            ],
            [
              6,
              11
            ],
            [
              8,
              12
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              2,
              "#343434"
            ],
            [
              3,
              "#000000"
            ]
          ]
        },
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City small scale/large admin0 capital",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "minzoom": 3,
      "maxzoom": 10,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "text-offset": [
          0.15,
          0
        ],
        "text-size": {
          "stops": [
            [
              4,
              11.5
            ],
            [
              6,
              12
            ],
            [
              8,
              13
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              2,
              "#2d2d2d"
            ],
            [
              3,
              "#000000"
            ]
          ]
        },
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City small scale/x large non capital",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "minzoom": 3,
      "maxzoom": 10,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "text-offset": [
          0.15,
          0
        ],
        "text-size": {
          "stops": [
            [
              4,
              11.5
            ],
            [
              6,
              12
            ],
            [
              8,
              13
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              2,
              "#343434"
            ],
            [
              3,
              "#000000"
            ]
          ]
        },
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City small scale/x large admin1 capital",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "minzoom": 3,
      "maxzoom": 10,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "text-offset": [
          0.15,
          0
        ],
        "text-size": {
          "stops": [
            [
              4,
              11.5
            ],
            [
              6,
              12
            ],
            [
              8,
              13
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              2,
              "#343434"
            ],
            [
              3,
              "#000000"
            ]
          ]
        },
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "City small scale/x large admin0 capital",
      "type": "symbol",
      "source": "esri",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "minzoom": 3,
      "maxzoom": 10,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "IM FELL DW Pica PRO Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "text-offset": [
          0.15,
          0
        ],
        "text-size": {
          "stops": [
            [
              4,
              11.5
            ],
            [
              6,
              12
            ],
            [
              8,
              13
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              2,
              "#2d2d2d"
            ],
            [
              3,
              "#000000"
            ]
          ]
        },
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Admin0 point/2x large",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Admin0 point",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "minzoom": 2,
      "maxzoom": 6,
      "layout": {
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "text-font": [
          "Alegreya SC Bold"
        ],
        "text-line-height": 1.7,
        "text-letter-spacing": {
          "stops": [
            [
              2,
              0.3
            ],
            [
              5,
              0.7
            ]
          ]
        },
        "text-size": {
          "stops": [
            [
              2,
              13
            ],
            [
              4,
              17.5
            ],
            [
              5,
              20
            ]
          ]
        }
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              2,
              "#5f4e3e"
            ],
            [
              3,
              "#403428"
            ]
          ]
        },
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Continent",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Continent",
      "maxzoom": 2,
      "layout": {
        "symbol-avoid-edges": true,
        "text-font": [
          "Tangerine Regular"
        ],
        "text-size": {
          "stops": [
            [
              0,
              19
            ],
            [
              1,
              23
            ]
          ]
        },
        "text-letter-spacing": 0.1,
        "text-max-width": 4,
        "text-field": "{_name_global}",
        "text-padding": 1
      },
      "paint": {
        "text-color": "#291d11",
        "text-halo-color": "#f4efe7",
        "text-halo-width": 2,
        "text-halo-blur": 1
      }
    },
    {
      "id": "Disputed label point/Island",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Disputed label point",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          1
        ],
        [
          "in",
          "DisputeID",
          0
        ]
      ],
      "minzoom": 6,
      "layout": {
        "icon-image": "Disputed label point",
        "icon-allow-overlap": true,
        "text-font": [
          "Alegreya Bold Italic"
        ],
        "text-size": {
          "stops": [
            [
              6,
              7
            ],
            [
              15,
              10
            ]
          ]
        },
        "text-letter-spacing": 0.13,
        "text-max-width": 4,
        "text-field": "{_name}"
      },
      "paint": {
        "text-color": "#595959",
        "text-halo-blur": 1,
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1
      }
    },
    {
      "id": "Disputed label point/Waterbody",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Disputed label point",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          0
        ],
        [
          "in",
          "DisputeID",
          1006
        ]
      ],
      "minzoom": 2,
      "maxzoom": 10,
      "layout": {
        "icon-image": "Disputed label point",
        "icon-allow-overlap": true,
        "text-font": [
          "Tangerine Regular"
        ],
        "text-size": {
          "stops": [
            [
              2,
              14
            ],
            [
              8,
              30
            ]
          ]
        },
        "text-letter-spacing": 0.05,
        "text-max-width": 4,
        "text-field": "{_name}"
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              1,
              "#246050"
            ],
            [
              6,
              "#154639"
            ]
          ]
        },
        "text-halo-blur": 1,
        "text-halo-color": "#dfe6e1",
        "text-halo-width": 1
      }
    },
    {
      "id": "Disputed label point/Admin0",
      "type": "symbol",
      "source": "esri",
      "source-layer": "Disputed label point",
      "filter": [
        "all",
        [
          "==",
          "_label_class",
          2
        ],
        [
          "in",
          "DisputeID",
          1021
        ]
      ],
      "minzoom": 2,
      "layout": {
        "icon-image": "Disputed label point",
        "icon-allow-overlap": true,
        "text-font": [
          "Alegreya SC Bold"
        ],
        "text-size": {
          "stops": [
            [
              2,
              8.6
            ],
            [
              4,
              11
            ],
            [
              10,
              17
            ]
          ]
        },
        "text-letter-spacing": {
          "stops": [
            [
              2,
              0.13
            ],
            [
              8,
              0.5
            ]
          ]
        },
        "text-max-width": 6,
        "text-field": "{_name}",
        "text-optional": true
      },
      "paint": {
        "text-color": {
          "stops": [
            [
              2,
              "#5f4e3e"
            ],
            [
              3,
              "#403428"
            ]
          ]
        },
        "text-halo-color": "#f4efe7",
        "text-halo-width": 1,
        "text-halo-blur": 1
      }
    }
  ],
  "metadata": {
    "arcgisStyleUrl": "https://www.arcgis.com/sharing/rest/content/items/effe3475f05a4d608e66fd6eeb2113c0/resources/styles/root.json",
    "arcgisOriginalItemTitle": "Modern Antique"
  }
};