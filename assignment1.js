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
    }
]
function  createTable() 
{      
    var HeadData=[];
    for(var index = 0; index < json.length; index++)
    {
        for (var key in json[index])
        {
            if (HeadData.indexOf(key) === -1){
                HeadData.push(key);
            }
        }
    }
    var table = document.createElement("table");
    var tr = document.createElement("tr");
    table.appendChild(tr)
    var count=0;
    for(var index = 0; index < HeadData.length; index++ ){
        var th = document.createElement("th");
        th.innerHTML = HeadData[index];
        th.setAttribute("onclick","sorting("+count+")" );
        count+=1;
        tr.appendChild(th);
    }
    onclick="myFunction()"
    for (var index = 0; index < json.length; index++) 
    {
        tr = document.createElement("tr");
        table.appendChild(tr);
        for (var index1 = 0; index1 < HeadData.length; index1++) 
        {
            var tableData = document.createElement("td");
            tr.appendChild(tableData)
            tableData.innerHTML = json[index][HeadData[index1]];
        }
    }
    document.body.appendChild(table);
}
createTable();