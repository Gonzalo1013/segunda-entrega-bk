const mongoDB = {
    urlToDataBase: 'mongodb://localhost:27017/ecommerce',
    options: {
        keepAlive: true,
        autoIndex: false,
        maxPoolSize: 1000,
        useNewUrlParser: true,
        useUnifiedTopology:true,
    }
}



const firebaseURL = "http://ecommerce-bk-61a75.firebaseio.com";
const firebaseDB = {
    "type": "service_account",
    "project_id": "ecommerce-bk",
    "private_key_id": "04fd3ff13d66d3851760bef149153d11cc0720c6",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCyXl4qe6uRrP97\ncRvgcOCGgu46q0sRCD9wA+XVweXN091vh5Hg/MpO8FIzZOJc90wtZzNB89vcDvNq\nrC7AGRrZE088i3vAYSVRk/KCBIOHOcNI3IJdmzxkSVPlQUwPuR9xgQe5NNeNwQHA\nYhlli8XA4h6TbYqypszIGbRCt4AFM6yfvIXCkZdyosRWN25M/zfic9KEEuuQ9evI\njqr1usQI8mv7oOeyvkzvl96LZcjorXhJeV0KjyNDcRfCDqO6UtCJakgF12bnS0GJ\nBejZ65T5/4xNIMhrnl/XlOXLCx46U0eQf8JEY6FGeeCPU/0Y67CQBNY6+gRNPRg4\nQKVp6lLTAgMBAAECggEAGwC5TcIqL6Qai1QMzdYYz5RLv3sGIr52aB1W8pznjtj3\nqXZDKeXrNLciIqCvujZABJGei2oBC1gCFtCZRUCntVw8fyR4qB+s2CRHLtLDHLos\na7/iRoyFQINvXYIcoza54WOQyUOMLGwfOUJAqQRXfENfMJ+BQ1mIH/TwOrdv/Jlc\nm+zuCRDdk5DwPcY+fRfo4ynAPXJfgv3B8BPnlouQ6klAMcL9tDULEk/g2BR4EBw6\nnodBochyuD6c2mjVn2+fQlyHvxTki+G0f9xpl+oneut1lVfb23+bwoe7Ka1l6Vfw\ngGiWlzUkCJXNiit/fkp0nquijf0OqKrmlduhA9QOBQKBgQDqRlMI1klvDz4Z7H+6\ndsjDOJl41NsZXoPppgHGSO9OqoeIJRjP0WxduzJSpnDHkmR0Rbsg3Muvjd7uyg9G\njzw3dtG82eivSF0Q2itgQHHTKZSaL1gZILklYvpWLEMaR9yLVx99aiX8EPSkVXW6\nkktlME9yc5jGk+lcnGkdSvDZxQKBgQDC6NWj78E+1pacieF+7s4fpGevsTBkGd/W\ntqk7q2kMbwRnG7DI6AW4KJ59GQFwOLHvkoZUaAYJD/YrDuR2xTanDtwkvtk/CdY5\nAK0BlEhs4hTHL51vOn+wSsp7+VVzJl6Wix3AABzr5vgDwgOuqCu4hz6QLoxnrE7j\naljbfXl7twKBgQDNry6JzLGua0CHvCcsS8vZ8mB0QNWYQW4pfhGCyFgqxfe2ZXOS\nSfkNliQJgo3z+ihuGSbBJHlESZfYKNkehvVEcPKWDu+GrU7gU9vPZuVIkvIgKL79\nWMiU9YB6lePYOA1+3OAN2Vs+IpjXixyQ0I6XacHm52zTs9sn7z8uc7RgTQKBgQCW\nVCSq+3ltsO6bL9FHKIK8bv41yREMs9Qr89hVGGC+YUXhDL9uRV5b6qBK1iWA24mJ\nwNZwdYbqKHByR1s4q+T6NoDeqoA+maSrdHT7edXefQUPmA7yQglH/Hdt5SHd3WMo\n84Vvl+a2n/78TwCuDjEictVzOSO7tm9mAZklOQKgwwKBgGv1p/eTpBbvSZtNn3ip\n6jOQi+7iy959+LGV+kLa5AwkVYtuXaeqgMzf38wp5BKbzum9NLceAOVxMm3on/Rl\nmlmiEQekwbevG7q4Z0rErpS+73Hio3cJO5Mmw2utRcuJL2jEXdFiYUgWhnvb39Ue\nfKaRf7d19f70Kc+CTCpcAf7N\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-9qd0p@ecommerce-bk.iam.gserviceaccount.com",
    "client_id": "112844956039829772226",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-9qd0p%40ecommerce-bk.iam.gserviceaccount.com"
  }
  


const fileSystemDB = {
    path: "./src/db/fs/"
}



module.exports = {mongoDB, firebaseDB, firebaseURL, fileSystemDB}