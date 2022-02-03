function appendData(data) {
    var mainContainer = document.getElementById("table-body");
    var table = document.createElement("TABLE");
        for (var i = 0; i < data.length; i++) {
            row = table.insertRow(-1);
            var cell1 = row.insertCell(-1);
            var cell2 = row.insertCell(-1);
            var cell3 = row.insertCell(-1);
            var cell4 = row.insertCell(-1);
            cell1.innerHTML = data[i].name;
            cell2.innerHTML = data[i].origin;
            cell3.innerHTML = data[i].destination;

            var date = new Date();
            cell4.innerHTML = getStringifiedDate(data[i].timestamp)
            //console.log(i)
        }
    mainContainer.appendChild(table);
    
}

function getStringifiedDate(timestamp){
    let date = new Date(timestamp)
    return date.getDate()+
    "/"+(date.getMonth()+1)+
    "/"+date.getFullYear()+
    " "+date.getHours()+
    ":"+date.getMinutes()+
    ":"+date.getSeconds();
}

let isSuccess = true
function getDataFunc(){
    let request = new XMLHttpRequest()
    console.log("from funn")
    request.open('GET','http://localhost:8000/api/getdata')
    request.send()
    console.log(request.status)
    request.onload = () => {
    if(request.status === 200){
        console.log(JSON.parse(request.response))
        appendData(JSON.parse(request.response))
    } else {
        console.log('Error')
        isSuccess=false
    }
    }
}

const getData = setInterval(function() {
    getDataFunc()
    console.log(isSuccess)
    if(!isSuccess)
    {
        clearInterval(getData);
    }
  }, 10000);