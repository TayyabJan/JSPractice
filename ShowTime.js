let date = new Date();
        let timeObj = [

            {
                year: "",
                month:  "",
                day:  "",
                hour:  "",
                minutes:  "",
                seconds:  "",
                miseconds:  ""
            },
            {
                year: "",
                month: "",
                day: "",
                hour: "",
                minutes: "",
                seconds: "",
                miseconds: ""
            }
        ]

        timestart= ()=>{
            
            timeObj[0].year = date.getFullYear();
            timeObj[0].month = date.getMonth();
            timeObj[0].day = date.getDate();
            timeObj[0].hour = date.getHours();
            timeObj[0].minutes = date.getMinutes();
            timeObj[0].seconds = date.getSeconds();
            timeObj[0].miseconds = date.getMilliseconds();
            console.log(timeObj)
        }
        
        timeup= ()=>{
            let lastdate = new Date();
            timeObj[1].year = lastdate.getFullYear();
            timeObj[1].month = lastdate.getMonth();
            timeObj[1].day = lastdate.getDate();
            timeObj[1].hour = lastdate.getHours();
            timeObj[1].minutes = lastdate.getMinutes();
            timeObj[1].seconds = lastdate.getSeconds();
            timeObj[1].miseconds = lastdate.getMilliseconds();
            console.log(timeObj)
        }
        
