const clientList = [
   {
      id: 1,
      fname: 'Frank',
      lname: 'Beans',
      prefix: 'FB',
      isSyncing: false,
      reSyncData: false,
      covers: [
         {
            id: 1,
            name: 'Family Protection',
            amount: 50000,
            icon: 'fp',
         },
         {
            id: 2,
            name: 'Health Cover',
            amount: 11003,
            icon: 'hc',
         },
         {
            id: 3,
            name: 'Income Protection',
            amount: 11003,
            icon: 'ip',
         },
         {
            id: 4,
            name: 'Life cover',
            amount: 11003,
            icon: 'lc',
         },

         {
            id: 5,
            name: 'Mortgage Protection',
            amount: 11003,
            icon: 'mp',
         },

         {
            id: 6,
            name: 'Premium Waiver',
            amount: 11003,
            icon: 'pw',
         },

         {
            id: 7,
            name: 'Reduncy Cover',
            amount: 11003,
            icon: 'rc',
         },
         {
            id: 8,
            name: 'Trauma Cover',
            amount: 5000,
            icon: 'tc',
         },

         {
            id: 9,
            name: 'Total Permanent Disability',
            amount: 11003,
            icon: 'tpd',
         },
      ],
   },
   {
      id: 2,
      fname: 'Ryan',
      lname: 'Sandoval',
      prefix: 'RS',
      isSyncing: false,
      reSyncData: false,
      covers: [
         {
            id: 1,
            name: 'Family Protection',
            amount: 50000,
            icon: 'fp',
         },
         {
            id: 2,
            name: 'Health Cover',
            amount: 11003,
            icon: 'hc',
         },
         {
            id: 3,
            name: 'Income Protection',
            amount: 11003,
            icon: 'ip',
         },
         {
            id: 4,
            name: 'Life cover',
            amount: 11003,
            icon: 'lc',
         },

         {
            id: 5,
            name: 'Mortgage Protection',
            amount: 11003,
            icon: 'mp',
         },

         {
            id: 6,
            name: 'Premium Waiver',
            amount: 11003,
            icon: 'pw',
         },

         {
            id: 7,
            name: 'Reduncy Cover',
            amount: 11003,
            icon: 'rc',
         },
         {
            id: 8,
            name: 'Trauma Cover',
            amount: 5000,
            icon: 'tc',
         },

         {
            id: 9,
            name: 'Total Permanent Disability',
            amount: 11003,
            icon: 'tpd',
         },
      ],
   },
];

const insurerList = [
   {
      id: 1,
      providerName: 'AIA',
      providerNameLowerCases: 'aia',
      username: '',
      password: '',
      isConnected: false,
      isSyncing: false,
      message: '',
      name: '',
      showMessage: false,
   },
   {
      id: 3,
      providerName: 'Fidelity',
      providerNameLowerCases: 'fidelity',
      username: '',
      password: '',
      isConnected: false,
      isSyncing: false,
      message: '',
      name: '',
      showMessage: false,
   },
   {
      id: 4,
      providerName: 'Asteron Life',
      providerNameLowerCases: 'asteron_life',
      username: '',
      password: '',
      isConnected: false,
      isSyncing: false,
      message: '',
      name: '',
      showMessage: false,
   },
   {
      id: 5,
      providerName: 'NIB',
      providerNameLowerCases: 'nib',
      username: '',
      password: '',
      isConnected: false,
      isSyncing: false,
      message: '',
      name: '',
      showMessage: false,
   },
   {
      id: 6,
      providerName: 'Partners Life',
      providerNameLowerCases: 'partners_life',
      username: '',
      password: '',
      isConnected: false,
      isSyncing: false,
      message: '',
      name: '',
      showMessage: false,
   },
   {
      id: 8,
      providerName: 'AMP',
      providerNameLowerCases: 'amp',
      username: '',
      password: '',
      isConnected: false,
      isSyncing: false,
      message: '',
      name: '',
      showMessage: false,
   },
   {
      id: 9,
      providerName: 'Cigna',
      providerNameLowerCases: 'cigna',
      username: '',
      password: '',
      isConnected: false,
      isSyncing: false,
      message: '',
      name: '',
      showMessage: false,
   },
   {
      id: 10,
      providerName: 'Southern Cross',
      providerNameLowerCases: 'southern_cross',
      username: '',
      password: '',
      isConnected: false,
      isSyncing: false,
      message: '',
      name: '',
      showMessage: false,
   },
   {
      id: 11,
      providerName: 'Accuro',
      providerNameLowerCases: 'accuro',
      username: '',
      password: '',
      isConnected: false,
      isSyncing: false,
      message: '',
      name: '',
      showMessage: false,
   },
   {
      id: 12,
      providerName: 'Sovereign',
      providerNameLowerCases: 'sovereign',
      username: '',
      password: '',
      isConnected: false,
      isSyncing: false,
      message: '',
      name: '',
      showMessage: false,
   },
];

const sampleResponse = [
   {
      name: 'Annette James',
      link:
         'https://portal.amp.com.au/wps/myportal/opp/!ut/p/a1/pVPRboIwFP0WH3ylRYWRvVWnCC66DBeRF1Ohwy5taaCQ-fcraBZfKEvWh6b35px7Tm9vQQJikAjc0BwrWgjM2jhxT-7anwXezN74bjSHaGnbwXwy2U23jgYcNQD2LARN_H3k3vmexi7mNoKeFy5h4KzWMFw7EG6cv-kbBAz8cAfN_Ol29i_9VmCAfwBJBzF1oAOYWmwWmYEQJDkrzt17Hi9KyecxHEPMpZUW3MI1SGiFsiYiuEwvIP7ErCK9UIlLzG_Q_VVqXCAy2tCs1qz--iJldUZQqmhDFoVQJU6Vhvfle8pUmJEKpanyy6KWIL55aZPBywkxZjbdqhQCxFVnnv7aPlX1mVNlJq9oWakt5vrCSAii1ECHUE7ecUaLu0kdDvqLSM6JUN3fe-Q-5oeL1KXoXIZ6r8BRz-dT73z6ExC14_OFG_xtyaJUjCgLaxoEkn_oFUP6xg-ecs7XKWteSXd0ZD4a_QD1dyvk/dl5/d5/L0lJSklKSUpKZ2tLQ2xFS0NsRUtDbEVLQ2xFS0NsRVptWm1abUtJS1VRb2dwUkNpQ2xFS0lLVVFvZ3BSQS80T3NEQUFBQUFHQkFBQUFFQ0NoQUFBQ0JBZ3dZRUVIQVJJRVNPQWhSb1VhT0NneFlNV09CaHg0Y2VPRGdKRUNST0FSSWd3SUNHUkJnUUVDaURBZ1lWRUdCQUFhSU1DQWgwUVlFQUFZZ3dJRUV4QmdRQUZpREFnQWJOaHpZY3VRTUNEWThlZkhueTQ4QkFvUUtGY0JJa1dKRml1SWlSS2tTcFhDUS80SmlHUW93OWgyR2NCVUVVbVFwUnFNY2hUalVFNUNrbW9weUZBTlRUa0tHYWlMTldzbGdOVFRtcldTM0dvSnpWckphVFVVNXExa3RScU1jMWF5V00xRVEhL1o2XzZIRzRJODQxS0c2U0IwQUUxMUlCMjI0NEkzL1o3XzZIRzRJODQxS0c2U0IwQUUxMUlCMjI0NDYyLzo2WTV1dE8xM3F3L3NjdklkLzIyODMzMzk1L0xvYWRJbmFjdGl2ZS8xL1JldHVyblBhZ2Uvb3BwLnNlYXJjaC5uLjJjL0FjdGlvblBvcnRmb2xpb1N1bW1hcnlJbmRpdmlkdWFsL2FsbFZpZXcvaHR0cDolMCUwYW1wLmNvbS5hdQ!!/',
      policies: [
         {
            policyNumber: 'P901408088',
            policyStatus: 'A',
            link:
               'https://portal.amp.com.au/wps/myportal/opp/!ut/p/a1/pVJbb4IwGP01vtJyKbK94eKw4sSITNoXU4EphluwsM1fP0DjFhPqsjUkpHAuPacfoMAHNGN1vGM8zjOWtHuq84ntzaBtWsslwjJGLvY803lRm7-E6hvYs0zYkjf6xNKwocm2pbsjaI5lGY8UxVm5-oVvNNinkWxCw5iOIUbPEzidIAht9AtzgbrAfOpAMV-dayK-OkdifmvwD76mOcO_h2_VqUAbq3fMG4DIfA1opy-6uA4gmgxxPZoQcK5HCNB0MAV0l-TbborJnvPicQAHkKWFFOSpxCpAWdCOOfDN7r3IS_6WJ3HuVmnKyk-chXEdh5VAYJazEGetTB0BX-7FLSNeldmC7RpUXhTSMWJlsJcySQl6OcegxiHwFcVQVfUB9YdIktc4egc-L6sIkOZih71TaSnAbYs7sJp9SEUTOIm4xI6AQCGzqfPCPJ-KXE9Fb0ogcvvpR15ym5deeyd3e6ff8UgXr0i98_JhjA8oqWfR2uBoi4r6tIq2p-YxvwDoUMfl/dl5/d5/L0lJSklKSmhtWm1LQ2xFS0NsRUtDbEVLQ2xFWm1aaWlDbEVLSUtVUW9ncFJDaUNsRS80R01EQUFBQUFHQ0FBQUlFQ0FnUVFVQ0dBQVFBRUdCREFBSUFBSEFoZ0FFQUNBUVF3QUNBQUJJSVlBQkFBQVVhRkdneGd3QUNBQlJZY1dIQml4NENlQWhqeEVTUkVoaUprd1lBQ0FnVXdZQUNCQlV3WUFDQ0Ewd1lBQ0FCMHdZQUNBQU1HVEJreFlnd0FFQXpac09iRGl6WmN1UExqeFpjLWZBWHdFcy1BQSEhLzRKaUhzT3d6Z0tnamtLVWFqSElVNDFCT1FvQnFTY2hSVFUwNXF4a3NwcWFjMVl5V0ExSk9hc1pMVWFqSE5XTWx1TlFTL1o2XzZIRzRJODQxS0c2U0IwQUUxMUlCMjI0NEkzL1o3XzZIRzRJODQxS0c2U0IwQUUxMUlCMjI0NDYyLzU4WTV1dE8xM3ZRL3RlbXBsYXRlL29wcC5jb250cmFjdGRldGFpbHMubi4yYy9zeXN0ZW1Db2RlL0ZEWi9nZW5lcmF0ZV9wYWdlX2FjdGlvbi9jb250cmFjdElEL1A5MDE0MDgwODgvaHR0cDolMCUwYW1wLmNvbS5hdQ!!/',
            products: [
               {
                  productName: 'Life',
                  amount: '$225,795.58',
                  status: null,
               },
               {
                  productName: 'Trauma Insurance',
                  amount: '$84,252.07',
                  status: null,
               },
            ],
         },
         {
            policyNumber: 'P901408113',
            policyStatus: 'A',
            link:
               'https://portal.amp.com.au/wps/myportal/opp/!ut/p/a1/pVJbb4IwGP01vtJyKbK94eKw4sSITNoXU4EphluwsM1fP0DjFhPqsjUkpHAuPacfoMAHNGN1vGM8zjOWtHuq84ntzaBtWsslwjJGLvY803lRm7-E6hvYs0zYkjf6xNKwocm2pbsjaI5lGY8UxVm5-oVvNNinkWxCw5iOIUbPEzidIAht9AtzgbrAfOpAMV-dayK-OkdifmvwD76mOcO_h2_VqUAbq3fMG4DIfA1opy-6uA4gmgxxPZoQcK5HCNB0MAV0l-TbborJnvPicQAHkKWFFOSpxCpAWdCOOfDN7r3IS_6WJ3HuVmnKyk-chXEdh5VAYJazEGetTB0BX-7FLSNeldmC7RpUXhTSMWJlsJcySQl6OcegxiHwFcVQVfUB9YdIktc4egc-L6sIkOZih71TaSnAbYs7sJp9SEUTOIm4xI6AQCGzqfPCPJ-KXE9Fb0ogcvvpR15ym5deeyd3e6ff8UgXr0i98_JhjA8oqWfR2uBoi4r6tIq2p-YxvwDoUMfl/dl5/d5/L0lJSklKSmhtWm1LQ2xFS0NsRUtDbEVLQ2xFWm1aaWlDbEVLSUtVUW9ncFJDaUNsRS80R01EQUFBQUFHQ0FBQUlFQ0FnUVFVQ0dBQVFBRUdCREFBSUFBSEFoZ0FFQUNBUVF3QUNBQUJJSVlBQkFBQVVhRkdneGd3QUNBQlJZY1dIQml4NENlQWhqeEVTUkVoaUprd1lBQ0FnVXdZQUNCQlV3WUFDQ0Ewd1lBQ0FCMHdZQUNBQU1HVEJreFlnd0FFQXpac09iRGl6WmN1UExqeFpjLWZBWHdFcy1BQSEhLzRKaUhzT3d6Z0tnamtLVWFqSElVNDFCT1FvQnFTY2hSVFUwNXF4a3NwcWFjMVl5V0ExSk9hc1pMVWFqSE5XTWx1TlFTL1o2XzZIRzRJODQxS0c2U0IwQUUxMUlCMjI0NEkzL1o3XzZIRzRJODQxS0c2U0IwQUUxMUlCMjI0NDYyL2Y4WTV1dE8xM3ZnL3RlbXBsYXRlL29wcC5jb250cmFjdGRldGFpbHMubi4yYy9zeXN0ZW1Db2RlL0ZEWi9nZW5lcmF0ZV9wYWdlX2FjdGlvbi9jb250cmFjdElEL1A5MDE0MDgxMTMvaHR0cDolMCUwYW1wLmNvbS5hdQ!!/',
            products: [
               {
                  productName: 'Life',
                  amount: '$505,512.45',
                  status: null,
               },
            ],
         },
      ],
   },
];

const ACCESS_TYPE = {
   1: 'PRINCIPAL ADVISER',
   2: 'ADVISER',
   3: 'ADMIN ASSISTANT',
   4: 'ASSISTANT',
   5: 'CORPORATE',
   9: 'REFERRER',
};
