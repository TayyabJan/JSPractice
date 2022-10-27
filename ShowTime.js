let date = new Date();
        let timeObj = [

            {
                year: date.getFullYear(),
                month: date.getMonth(),
                day: date.getDate(),
                hour: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds(),
                miseconds: date.getMilliseconds()
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
        
