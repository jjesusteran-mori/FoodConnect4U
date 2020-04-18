var stats = document.getElementById("stats")
var queryURL = "https://api.census.gov/data/2018/acs/acs5/profile?get=DP03_0120PE&for=county:059&in=state:06&key=87f1f76dacced96117701c9e8a516240646746ae"

var censusRequest = new XMLHttpRequest();
censusRequest.open ('GET', queryURL)
censusRequest.onload = function(){
    var ocPovData = JSON.parse(censusRequest.responseText)
    ocPovData.shift();
    console.log(ocPovData)
    var prcBlw = ocPovData[0];
    console.log(prcBlw[0])
    $(stats).append(prcBlw[0] + "%");
}
censusRequest.send();
