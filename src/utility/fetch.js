async function fetchMocked(url) {
    const data = `{
        "ok": true,
        "members": [{
                "id": "W012A3CDE",
                "real_name": "Egon Spengler",
                "tz": "America/Los_Angeles",
                "activity_periods": [
                    {
                        "start_time": "Feb 1 2020  1:33PM",
                        "end_time": "Feb 1 2020 1:54PM"
                    },
                    {
                        "start_time": "Mar 1 2020  11:11AM",
                        "end_time": "July 26 2020 2:00PM"
                    },
                    {
                        "start_time": "July 26 2020  2:00PM",
                        "end_time": "July 26 2020 4:00PM"
                    },
                    {
                        "start_time": "July 26 2020  4:00PM",
                        "end_time": "July 26 2020 8:00PM"
                    },
                    {
                        "start_time": "Mar 1 2021  11:11AM",
                        "end_time": "Mar 1 2024 2:00PM"
                    },
                    {
                        "start_time": "Mar 16 2024  5:33PM",
                        "end_time": "Mar 16 2020 8:02PM"
                    }
                ]
            },
            {
                "id": "W07QCRPA4",
                "real_name": "Glinda Southgood",
                "tz": "Asia/Kolkata",
                "activity_periods": [{
                        "start_time": "Feb 1 2020  1:33PM",
                        "end_time": "Feb 1 2020 1:54PM"
                    },
                    {
                        "start_time": "Mar 1 2020  11:11AM",
                        "end_time": "Mar 1 2020 2:00PM"
                    },
                    {
                        "start_time": "Mar 16 2020  5:33PM",
                        "end_time": "Mar 16 2020 8:02PM"
                    }
                ]
            }
        ]
    }`
    switch (url) {
        case 'http://example.com/usersActivityData':
            return data;
        default:
            throw new Error("Page not found.");
    }
}

export default fetchMocked;