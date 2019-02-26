function sorting(i)
    {
        switch(i){
        case 0:
            let flag=0;
            if(flag[i]=!0)
            {
                for (var i = 0; i < json.length; ++i) 
                {
                    for ( var j = i + 1; j <json.length; ++j)
                    {
                        if (json[i].firstName > json[j].firstName) 
                        {
                            temp =  json[i];
                            json[i] = json[j];
                            json[j] = temp;
                        }
                    }
                    console.log(json[i])
                }
                flag++;
            }
            break;
        case 1:
            let flag1=0;
            if(flag1[i]=!0)
            {
                for (var i = 0; i < json.length; ++i) 
                {
                    for ( var j = i + 1; j <json.length; ++j)
                    {
                        if (json[i].lastName > json[j].lastName) 
                        {
                            temp =  json[i];
                            json[i] = json[j];
                            json[j] = temp;
                        }
                    }
                    console.log(json[i])
                }
                flag1++;            
            }
            break;
        case 2:
            let flag2=0;
            if(flag2[i]=!0)
            {
                for (var i = 0; i < json.length; ++i) 
                {
                    for ( var j = i + 1; j <json.length; ++j)
                    {
                        if (json[i].lastName > json[j].lastName) 
                        {
                            temp =  json[i];
                            json[i] = json[j];
                            json[j] = temp;
                        }
                    }
                    console.log(json[i])
                }
                flag2++;            
            }
        case 3:
            let flag3=0;
            if(flag3[i]=!0)
            {
                for (var i = 0; i < json.length; ++i) 
                {
                    for ( var j = i + 1; j <json.length; ++j)
                    {
                        if (json[i].id > json[j].id) 
                        {
                            temp =  json[i];
                            json[i] = json[j];
                            json[j] = temp;
                        }
                    }
                    console.log(json[i])
                }
                flag3++;
            }
        case 4:
            let flag4=0;
            if(flag4[i]=!0)
            {
                for (var i = 0; i < json.length; ++i) 
                {
                    for ( var j = i + 1; j <json.length; ++j)
                    {
                        if (json[i].phoneNumber > json[j].phoneNumber) 
                        {
                            temp =  json[i];
                            json[i] = json[j];
                            json[j] = temp;
                        }
                    }
                    console.log(json[i])
                }
                flag4++;
            }
        }
        }
var json = 
[
    {
        "FirstName": "Shantanu",
        "LastName": "Rawat",
        "EmailID": "shantanurawat17@gmail.com",
        "ID": 6187,
        "PhoneNo.": 8218706272 ,
        "Designation": "Sw Trainee",
        "DateOfBirth": "17-12-98",
    },
    {
        "FirstName": "Tejal",
        "LastName": "Ranjan",
        "EmailID": "tr7@gmail.com",
        "ID": 6184,
        "PhoneNo.": 7055473817,
        "Designation": "Sw Trainee",
        "DateOfBirth": "19-1-96",
    },
    {
            "FirstName": "Jitendra",
            "lastName": "sharma",
            "EmailID": "jai22034@gmail.com",
            "ID": 6181,
            "PhoneNo.": 9569505450 ,
            "Designation": "Sw Trainee",
            "DateOfBirth": "30-07-98",
        },
        {
            "FirstName": "Shivani",
            "LastName": "Singh",
            "EmailID": "shivani.singh@gmail.com",
            "ID": 7823,
            "PhoneNo.": 7827888728,
            "Dsignation": "Sw Trainee",
            "DateOfBirth": "4-3-97",
        },
        {
            "FirstName": "Teena",
            "LastName": "Khandelwal",
            "EmailID": "teena.khandelwal@gmail.com",
            "ID": 2311,
            "PhoneNo.":7827378203 ,
            "Designation": "Sw Trainee",
            "DateOfBirth": "5-8-96",
        },
        {
            "FirstName": "Lakshay",
            "LastName": "Kapoor",
            "EmailID": "lakshay.kapoor@gmail.com",
            "ID": 6543,
            "PhoneNo.": 9182938389,
            "Designation": "Sw Trainee",
            "DateOfBirth": "21-11-95",
        },
]
  function  createTable() {
    var headerData=[];
    for(var index = 0; index < json.length; index++){
        for (var key in json[index]){
            if (headerData.indexOf(key) === -1){
                headerData.push(key);
            }
        }
    }

    

    var table = document.createElement("table");

    var tr = document.createElement("tr");
    table.appendChild(tr)
    var ar=0;

    for(var index = 0; index < headerData.length; index++ ){
        var th = document.createElement("th");
        th.innerHTML = headerData[index];
        th.setAttribute('onclick',"sorting("+ar+")")
        ar+=1;
        tr.appendChild(th);
    }
    

    for (var index = 0; index < json.length; index++) {

tr = document.createElement("tr");
table.appendChild(tr);

for (var index1 = 0; index1 < headerData.length; index1++) {
    var tableData = document.createElement("td");
    tr.appendChild(tableData)
    tableData.innerHTML = json[index][headerData[index1]];
}

}

var divContainer = document.getElementById("showData");
divContainer.innerHTML = "";
divContainer.appendChild(table);


}
