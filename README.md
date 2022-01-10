# getir

##**Steps to Run**

1. git clone <repo>
2. Run "npm install" to install npm modules
3. Navigate inside of src folder
4. Run "npm run start" to start the server.

##**.env for Reference(has to be added inside root folder)**
```
NODE_ENV=dev
PORT=7001
HOST=localhost:7001
MONGO_URI= mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true
```

##**RecordService Api**
```
POST endpoint:  /records/listRecords
Req Payload:
{"startDate": "2015-01-26", "endDate": "2018-02-02", "minCount": 24, "maxCount": 25 }
Response payload: 
{
    "code": 0,
    "msg": "Success",
    "record": [
        {
            "key": "NBctKdeL",
            "createdAt": "2016-10-10T12:45:27.584Z",
            "totalCount": 25
        },
        {
            "key": "EWbtLhxM",
            "createdAt": "2016-06-01T08:49:24.976Z",
            "totalCount": 24
        },
        {
            "key": "ZrSnbmMX",
            "createdAt": "2015-04-25T13:40:01.587Z",
            "totalCount": 24
        }
    ]
}
```
Enhancements to be done:
1. Testcase needs to be added for each file and coverage has to be generated
2. Centralized detailed logger needs to be added.
3. eslint needs to added.
4. husky hooks needs to be added for checking coverage before pushing.
5. rate-limilt can be implemented for public api if required.
6. appmetrics an be added to see the performance.
7. logging duration and showing apdex score in grafana panels can be helpful in case of more apdex score.

<img src="https://github.com/anil-moharana/assets/blob/main/postman_RecordService.png" width="1000">

