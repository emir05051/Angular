import { Component, OnInit } from '@angular/core';
import {ScaleType} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // Переключатель пятого графика
  isUser: boolean = true;
  //Размеры
  view: [number, number] = [430,150];
  // График 1
  saleData = [
    { name: "10/10", value: 193 },
    { name: "11/10", value: 82 },
    { name: "12/10", value: 195 },
    { name: "13/10", value: 63 },
    { name: "14/10", value: 73 },
    { name: "15/10", value: 55 },
    { name: "16/10", value: 193 },
    { name: "17/10", value: 199 },
    { name: "18/10", value: 111 },
    { name: "19/10", value: 177 },
    { name: "20/10", value: 34 },
    { name: "21/10", value: 144 },
    { name: "22/10", value: 60 },
    { name: "23/10", value: 200 },
    { name: "24/10", value: 50 },
    { name: "25/10", value: 43 },
    { name: "26/10", value: 89 },
    { name: "27/10", value: 193 },
    { name: "28/10", value: 192 },
    { name: "29/10", value: 111 },
    { name: "30/10", value: 177 },
    { name: "1/11", value: 34 },
  ];
  //График 2
  multi = [
    {
      "name": "Visitors",
      "series": [
        {
          "name": "0/12",
          "value": 91
        }, {
          "name": "1/12",
          "value": 7
        }, {
          "name": "2/12",
          "value": 103
        }, {
          "name": "3/12",
          "value": 49
        }, {
          "name": "4/12",
          "value": 141
        }, {
          "name": "5/12",
          "value": 186
        }, {
          "name": "6/12",
          "value": 32
        }, {
          "name": "7/12",
          "value": 46
        }, {
          "name": "8/12",
          "value": 79
        }, {
          "name": "9/12",
          "value": 25
        }, {
          "name": "10/12",
          "value": 18
        }, {
          "name": "11/12",
          "value": 81
        }, {
          "name": "12/12",
          "value": 100
        }, {
          "name": "13/12",
          "value": 105
        }, {
          "name": "14/12",
          "value": 99
        }, {
          "name": "15/12",
          "value": 178
        }, {
          "name": "16/12",
          "value": 94
        }, {
          "name": "17/12",
          "value": 116
        }, {
          "name": "18/12",
          "value": 117
        }, {
          "name": "19/12",
          "value": 69
        }, {
          "name": "20/12",
          "value": 98
        }, {
          "name": "21/12",
          "value": 80
        }, {
          "name": "22/12",
          "value": 47
        }, {
          "name": "23/12",
          "value": 44
        }, {
          "name": "24/12",
          "value": 51
        }
      ]
    },

    ];
  // График 3
  multi_2 = [
    {
      "name": "Clicks",
      "series": [
        {
          "name": "0/12",
          "value": 55
        }, {
          "name": "1/12",
          "value": 191
        }, {
          "name": "2/12",
          "value": 21
        }, {
          "name": "3/12",
          "value": 12
        }, {
          "name": "4/12",
          "value": 58
        }, {
          "name": "5/12",
          "value": 149
        }, {
          "name": "6/12",
          "value": 18
        }, {
          "name": "7/12",
          "value": 30
        }, {
          "name": "8/12",
          "value": 78
        }, {
          "name": "9/12",
          "value": 47
        }, {
          "name": "10/12",
          "value": 9
        }, {
          "name": "11/12",
          "value": 83
        }, {
          "name": "12/12",
          "value": 142
        }, {
          "name": "13/12",
          "value": 109
        }, {
          "name": "14/12",
          "value": 163
        }, {
          "name": "15/12",
          "value": 60
        }, {
          "name": "16/12",
          "value": 122
        }, {
          "name": "17/12",
          "value": 23
        }, {
          "name": "18/12",
          "value": 74
        }, {
          "name": "19/12",
          "value": 147
        }, {
          "name": "20/12",
          "value": 107
        }, {
          "name": "21/12",
          "value": 11
        }, {
          "name": "22/12",
          "value": 72
        }, {
          "name": "23/12",
          "value": 27
        }, {
          "name": "24/12",
          "value": 176
        }
      ]
    }
    ];
  // График 4
  multi_3 = [
    {
      "name": "Conversions",
      "series": [
        {
          "name": "0/12",
          "value": 128
        }, {
          "name": "1/12",
          "value": 92
        }, {
          "name": "2/12",
          "value": 100
        }, {
          "name": "3/12",
          "value": 142
        }, {
          "name": "4/12",
          "value": 41
        }, {
          "name": "5/12",
          "value": 99
        }, {
          "name": "6/12",
          "value": 189
        }, {
          "name": "7/12",
          "value": 131
        }, {
          "name": "8/12",
          "value": 136
        }, {
          "name": "9/12",
          "value": 165
        }, {
          "name": "10/12",
          "value": 31
        }, {
          "name": "11/12",
          "value": 86
        }, {
          "name": "12/12",
          "value": 144
        }, {
          "name": "13/12",
          "value": 186
        }, {
          "name": "14/12",
          "value": 162
        }, {
          "name": "15/12",
          "value": 103
        }, {
          "name": "16/12",
          "value": 29
        }, {
          "name": "17/12",
          "value": 30
        }, {
          "name": "18/12",
          "value": 64
        }, {
          "name": "19/12",
          "value": 136
        }, {
          "name": "20/12",
          "value": 36
        }, {
          "name": "21/12",
          "value": 71
        }, {
          "name": "22/12",
          "value": 143
        }, {
          "name": "23/12",
          "value": 171
        }, {
          "name": "24/12",
          "value": 40
        }
      ]
    }
  ];

  // График 5
  users = [
    {
      "name": "Users",
      series: [{
        "name": "17/12",
        "value": 83
      }, {
        "name": "18/12",
        "value": 619
      }, {
        "name": "19/12",
        "value": 2694
      }, {
        "name": "20/12",
        "value": 2246
      }, {
        "name": "21/12",
        "value": 1433
      }],
    }
  ]
  sessions = [
    {
      "name": "Sessions",
      series: [
        {
          "name": "17/12",
          "value": 3157
        }, {
          "name": "18/12",
          "value": 3548
        }, {
          "name": "19/12",
          "value": 4065
        }, {
          "name": "20/12",
          "value": 4733
        }, {
          "name": "21/12",
          "value": 2894
        }
      ],
    }
  ]

  //График 6
  cardColor = '#009688';

  online_users = [{
    "name": "ONLINE USERS",
    "value": 5000
  }]



  colorScheme = {
    name: '',
    selectable: false,
    group: ScaleType.Ordinal,
    domain: [
      '#fff',
    ]
  };
  colorScheme_blue = {
    name: '',
    selectable: false,
    group: ScaleType.Ordinal,
    domain: [
      '#4687f4',
    ]
  };
  constructor() {
  }


  ngOnInit(): void {

  }

}
