app.service('dataService', function() {
    this.data = [{
        "Driver": {
            "Name": "Deepak Chauhan",
            "Mobile": "+91-9876543210",
            "Image": "http://www.farfesh.com/pic_server/articles_images/2013/04/13/270_man.jpg"

        },
        "Vehicle": {
            "Number": "HR-12-2301",
            "Name": "Honda Hunk",
            "Image": "http://www.heromotocorp.com/en-in/uploads/bike/360/3.jpg"

        }
    }, {
        "Driver": {
            "Name": "Nitesh Kumar",
            "Mobile": "+91-8282557788",
            "Image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQimMWH4OLIN9Db1qnrswxuG8qOkTy5W8D6xlcck7p7NnNvKPfx"

        },
        "Vehicle": {
            "Number": "BJ-21-4455",
            "Name": "Bajaj V",
            "Image": "https://media.zigcdn.com/media/content/2016/Aug/v720_720x540.jpg"

        }
    },
    {
        "Driver": {
            "Name": "Rachna Kadian",
            "Mobile": "+91-9876543210",
            "Image": "http://www.farfesh.com/pic_server/articles_images/2013/04/13/270_man.jpg"

        },
        "Vehicle": {
            "Name": "Honda Hunk",
            "Image": "http://www.heromotocorp.com/en-in/uploads/bike/360/3.jpg"

        }
    }, {
        "Driver": {
            "Mobile": "+91-8282557788",
            "Image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQimMWH4OLIN9Db1qnrswxuG8qOkTy5W8D6xlcck7p7NnNvKPfx"

        },
        "Vehicle": {
            "Number": "BJ-21-4455",
            "Name": "Bajaj V",
            "Image": "https://media.zigcdn.com/media/content/2016/Aug/v720_720x540.jpg"

        }
    },
    {
        "Driver": {
            "Name": "Manpreet Singh",
            "Mobile": "+91-9876543210",
            "Image": "http://www.farfesh.com/pic_server/articles_images/2013/04/13/270_man.jpg"

        },
        "Vehicle": {
            "Number": "HR-12-2301",
            "Name": "Honda Hunk",
            "Image": "http://www.heromotocorp.com/en-in/uploads/bike/360/3.jpg"

        }
    }, {
        "Driver": {
            "Name": "Ashok Kumar",
            "Mobile": "+91-8282557788",
            "Image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQimMWH4OLIN9Db1qnrswxuG8qOkTy5W8D6xlcck7p7NnNvKPfx"

        },
        "Vehicle": {
            "Number": "BJ-21-4455",
            "Name": "Bajaj V",
            "Image": "https://media.zigcdn.com/media/content/2016/Aug/v720_720x540.jpg"

        }
    } ];

    this.getData = function() {
        return this.data;
    }

})
