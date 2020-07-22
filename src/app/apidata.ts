export interface APIdata {
    "seekers": Array<
        {
            "_id": string,
            "firstName": string,
            "lastName": string,
            "lastMessageDate": Date,
            "messages": Array<
                {
                "body": string,
                "status": string,
                "direction": number,
                "dateCompleted": string
                }
            >
        }

    >

}
