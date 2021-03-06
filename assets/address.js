// var func2;
// func();
// func2();

var foodLocation = [{
    "name" : "Veterans First",
    "address" : "1611 N. Broadway",
    "city": "Santa Ana",
    "state": "CA",
    "zipCode": "92706",
    "latLong": "33.7592574,-117.8714787",    //latLong.split('') => ["33.7592574","-117.8714787"]
    "phoneNumber": "(714) 547-0615",
    "website": "http://www.veteransfirstoc.org",
    "hours": "Monday and Friday 7:00 am - 4:00 pm"
},{
    "name" : "St Vincent de Paul St Joseph",
    "address" : "608 Civic Center East",
    "city": "Santa Ana",
    "state": "CA",
    "zipCode": "92701",
    "latLong": "33.7518928,-117.8639407", 
    "phoneNumber": "(714) 550-7101",
    "website":"http://www.stjosephsa.org",
    "hours": "Hot meals Saturday 9:00am - 1:00pm"
},{
    "name" : "Serve The People",
    "address" : "1206 E 17th St, Suite 204",
    "city": "Santa Ana",
    "state": "CA",
    "zipCode": "92701",
    "latLong": "33.7595,-117.8562717",
    "phoneNumber": "(714) 352-2911",
    "website": "http://www.serve-the-people.com",
    "hours": "1st and 3rd Saturday of the month 6:00am - 10am, Early registration at 4:30am"
},{
    "name" : "Salvation Army Family Service",
    "address" : "1710 W Edinger Ave",
    "city": "Santa Ana",
    "state": "CA",
    "zipCode": "92704",
    "latLong": "33.7269158,-117.8934462",
    "phoneNumber": "(714) 545-2937",
    "website": "http://santaana.salvationarmy.org",
    "hours": "Everyday 7:00am - 7:00pm"
},{
    "name" : "Our Lady of The Pillar Church",
    "address" : "1622 West 6th Street",
    "city": "Santa Ana",
    "state": "CA",
    "zipCode": "92703",
    "latLong": "33.7494028,-117.8929884",
    "phoneNumber": "(714) 543-1700",
    "website": "N/A",
    "hours": "Friday 2:30pm - 3:30pm"
},{
    "name" : "Gospel Light Church of God",
    "address" : "3135 Warner Ave",
    "city": "Santa Ana",
    "state": "CA",
    "zipCode": "92704",
    "latLong": "33.7156565,-117.913488",
    "phoneNumber": "(714) 979-5483",
    "website": "N/A",
    "hours": "3rd Saturday of the month 1:00pm - 3:00pm"
},{
    "name" : "7th Day Adventist Church",
    "address" : "3117 West McFadden Ave",
    "city": "Santa Ana",
    "state": "CA",
    "zipCode": "92707",
    "latLong": "33.7353007,-117.9125629",
    "phoneNumber": "(714) 864-6410",
    "website": "www.santaanamcfadden.org",
    "hours": "2nd and 4th Wednesday of every month 6:30pm -7:00pm"
},{
    "name" : "7 Companerismo Rey de Reyes",
    "address" : "940 West Wilshire Avenue",
    "city": "Santa Ana",
    "state": "CA",
    "zipCode": "92707",
    "latLong": "33.730428,-117.8807198",
    "phoneNumber": "(714) 850-1952",
    "website": "N/A",
    "hours": "Tuesday 6-8pm"
},{
    "name" : "Stadium Vineyard",
    "address" : "1531 S. Sinclair St.",
    "city": "Anaheim",
    "state": "CA",
    "zipCode": "92806",
    "latLong": "33.8101369,-117.8828257",
    "phoneNumber": "(714) 937-5111",
    "website": "http://www.stadiumvineyard.org",
    "hours": "Sunday 12:15pm to 1:00pm"
},{
    "name" : "The Rock",
    "address" : "295 E Orangethorpe Ave",
    "city": "Anaheim",
    "state": "CA",
    "zipCode": "92801",
    "latLong": "33.861302,-117.9170196",
    "phoneNumber": "(714) 526-8233",
    "website": "http://www.gototherock.com",
    "hours": "Saturday 7:00am - 8:45am"
},{
    "name" : "St Justin Martyr Catholic Church",
    "address" : "2050 W. Ball Road",
    "city": "Anaheim",
    "state": "CA",
    "zipCode": "92804",
    "latLong": "33.8173226,-117.9557374",
    "phoneNumber": "(714) 774-2595",
    "website": "http://www.saintjustin.org",
    "hours": "Saturday 7:00am - 8:45am"
},{
    "name" : "Centro Familiar Cristiano Betesda",
    "address" : "2780 E Wagner Ave",
    "city": "Anaheim",
    "state": "CA",
    "zipCode": "92806",
    "latLong": "33.8254395,-117.8719061",
    "phoneNumber": "(714) 632-6838",
    "website": "N/A",
    "hours": "Call for hours"
},{
    "name" : "Crescent Food Pantry",
    "address" : "2180 West Crescent Ave",
    "city": "Anaheim",
    "state": "CA",
    "zipCode": "92801",
    "latLong": "33.8248559,-117.8739443",
    "phoneNumber": "(714) 399-4571",
    "website": " http://www.crescentclinicoc.org",
    "hours": "Tuesday and Wednesday 10:00am - 2:00pm"
},{
    "name" : "Southlands Church",
    "address" : "2950 E Imperial Hwy",
    "city": "Brea",
    "state": "CA",
    "zipCode": "92801",
    "latLong": "33.9103921,-117.8599804",
    "phoneNumber": "(714) 982-5055",
    "website": "http://www.southlands.net",
    "hours": "Last Saturday of every other month - April, June, August, October, December, February"
},{
    "name" : "Bread of Angels - St Angela Merici Catholic Church",
    "address" : "585 S. Walnut Ave",
    "city": "Brea",
    "state": "CA",
    "zipCode": "92821",
    "latLong": "33.910546,-117.907362",
    "phoneNumber": "(714) 529-1821",
    "website": "http://stangelabreachurch.org",
    "hours": "Saturday 8:30am - Breakfast, 10:30am - Hot Meal"
},{
    "name" : "Second Harvest Foodbank of Orange County",
    "address" : "8014 Marine Way",
    "city": "Irvine",
    "state": "CA",
    "zipCode": "92618",
    "latLong": "33.6619043,-117.7404423",
    "phoneNumber": "(949) 653-2900",
    "website": "https://www.feedoc.org",
    "hours": "N/A"
},{
    "name" : "Families Forward",
    "address" : "8 Thomas",
    "city": "Irvine",
    "state": "CA",
    "zipCode": "92618",
    "latLong": "33.6437725,-117.7236372",
    "phoneNumber": "(949) 552-2727",
    "website": "http://www.families-forward.org",
    "hours": "For more information, please call."
},
{
    "name" : "Bridge Community Church Food Pantry",
    "address" : "710 S Cambridge Street",
    "city": "Orange",
    "state": "CA",
    "zipCode": "92866",
    "latLong": "33.7766806,-117.8477096",
    "phoneNumber": "(714) 997-8881",
    "website":"http://www.zcc.org",
    "hours": "1st and 3rd Wednesday of each month 10:00am - 1:00pm"
},{
  "name" : "St Norberts Christian Services",
  "address" : "300 E. Taft Ave",
  "city": "Orange",
  "state": "CA",
  "zipCode": "92865",
  "latLong": "33.8154168,-117.8521389",
  "phoneNumber": "(714) 637-4360",
  "website":"http://www.stnorbertchurch.org/index.html",
  "hours": " Saturday Hot Meal 12:30pm - 2:00pm, On call 7 days"
},{
  "name" : "St Johns Lutheran Church",
  "address" : "154 S. Shaffer St.",
  "city": "Orange",
  "state": "CA",
  "zipCode": "92866",
  "latLong": "33.7868265,-117.8511436",
  "phoneNumber": "(714) 228-8440",
  "website":"http://www.stjohnsorange.org",
  "hours": "Saturday 8:00am - 10:00am (closed last Saturday of the month)"
},{
  "name" : "Praise Chapel",
  "address" : "1125 W Alvarez Ave.",
  "city": "Orange",
  "state": "CA",
  "zipCode": "92868",
  "latLong": "33.7982249,-117.8670397",
  "phoneNumber": "(714) 588-1577",
  "website":"http://www.praisechapel.com",
  "hours": "Thursday 5:00pm"
},{
  "name" : "River 47",
  "address" : "250 S. Prospect Ave.",
  "city": "Orange",
  "state": "CA",
  "zipCode": "92869",
  "latLong": "33.7645702,-117.8383178",
  "phoneNumber": "(714) 633-6464 x10",
  "website":"hhttp://www.river47.org",
  "hours": "Call for appointment once a month. Hours:Tuesday and Thursday 9:00am - 2:00pm",
},{
  "name" : "Orange Elderly Services Inc",
  "address" : "170 S Olive St",
  "city": "Orange",
  "state": "CA",
  "zipCode": "92866",
  "latLong": "33.8352629,-117.9117485",
  "phoneNumber": "(714) 538-9633",
  "website":"http://www.orangeseniorcenter.org",
  "hours": " Seniors only. Pantry Hours: Emergency Food 3rd Tuesday of the month 9:00am For more information, please call."
},{
  "name" : "Orange Hills Assembly",
  "address" : "2910 N Santiago Blvd.",
  "city": "Orange",
  "state": "CA",
  "zipCode": "92867",
  "latLong": "33.8379946,-117.8363079",
  "phoneNumber": "(714) 974-7333",
  "website":"http://www.orangehills.net",
  "hours": "Monday through Thursday 10:00am to 2:00pm"
},{
    "name" : "Marys Kitchen - Orange Cares",
    "address" : "517 W. Struck Ave",
    "city": "Orange",
    "state": "CA",
    "zipCode": "92867",
    "latLong": "33.8061452,-117.8597193",
    "phoneNumber": "(714) 633-0444",
    "website":"http://www.maryskitchen.org",
    "hours": " Hot meals Monday - Friday 8:00am - 2:00pm Except Wednesday 10:00am - 2:00pm; Clients 9:00 - 3:00pm",
  },{
    "name" : "Trinity Guild - La Purisima Catholic Church",
    "address" : "11712 N. Hewes Street",
    "city": "Orange",
    "state": "CA",
    "zipCode": "92869",
    "latLong": "33.7919979,-117.8074344",
    "phoneNumber": "(714) 633-5800",
    "website":"http://www.lapurisima.net/g",
    "hours": "Monday, and Friday 10:00am - 12:00pm 1st, 3rd and 5th Wednesday of the month 10:00am - 12:00pm 2nd and 4th Wednesday - Mobile Pantry 8:30am - 10:30pm (In the parking lot behind the parish office)Thanksgiving Dinners Distribution:Sunday before Thanksgiving",
  },{
    "name" : "Friendly Center",
    "address" : "1820 E Meats Ave.",
    "city": "Orange",
    "state": "CA",
    "zipCode": "92867",
    "phoneNumber": "(714) 771-5300",
    "latLong": "33.8221751,-117.8368574",
    "website":"http://www.friendlycenter.org",
    "hours": "Emergency Food 2nd Friday of the month Monday and Thursday 10:00am",
  },{
    "name" : "Christian Life Fellowship",
    "address" : "1090 N. Batavia St.",
    "city": "Orange",
    "state": "CA",
    "zipCode": "92867",
    "phoneNumber": "(714) 771 9850",
    "latLong": "33.8050983,-117.8663647",
    "website":"http://www.friendlycenter.org",
    "hours": "Saturday 9:30am - 11:30am",
  },
  {
    "name" : "Calvary Temple",
    "address" : "308 S Glassell Street",
    "city": "Orange",
    "state": "CA",
    "zipCode": "92866",
    "latLong": "33.7840586,-117.855607",
    "phoneNumber": "(714) 538-1064",
    "website":"no website",
    "hours": " Monday - Friday 9:00am - 5:00pm",
  },{
    "name" : "First Presbyterian Church of Orange",
    "address" : "191 N Orange St",
    "city": "Orange",
    "state": "CA",
    "zipCode": "92866",
    "latLong": "33.7893094,-117.8536619",
    "phoneNumber": "(714) 771-9850",
    "website":"http://www.firstpresorange.org",
    "hours": "Wednesday 10:00am - 12:00pm; 1:00pm - 3:00pm Limit is 2 bags per month per person/household",
  },
  {
    "name" : "You Are Special Food Pantry",
    "address" : "3512 E. Chapman Ave",
    "city": "Orange",
    "state": "CA",
    "zipCode": "92869",
    "latLong": "33.7875541,-117.8179314",
    "phoneNumber": "(714) 863-6058",
    "website":"http://www.youarespecial.com",
    "hours": "Wednesday 8:15 until 10:00am",
  },{
    "name" : "River47 Church",
    "address" : "250 S. Prospect Street",
    "city": "Orange",
    "state": "CA",
    "zipCode": "92866",
    "latLong": "33.785649,-117.8210131",
    "phoneNumber": "(714) 633-6464",
    "website":"http://www.river47.org",
    "hours": "By appointment only. Hours:Tuesday and Thursday 9:00am - 1:30pm Bring two regular size grocery bags to fill up",
  },]

// console.log(foodLocation.map(function(a){
//     return a['address']
// }))
// //var something =(assignement) string number(int float) boolean function class object array
// var jesus = function(){
//     'Jesus rises again!'
// }


// function func(){
//     console.log('function is running!')
//     func2 = function (){
//         console.log('jesus is alive again!')
//     }
// }