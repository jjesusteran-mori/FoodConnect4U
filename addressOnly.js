var address = [
    '1611 N. Broadway',
    '608 Civic Center East',
    '1206 E 17th St, Suite 204',
    '1710 W Edinger Ave',
    '1622 West 6th Street',
    '3135 Warner Ave',
    '3117 West McFadden Ave',
    '940 West Wilshire Avenue',
    '1531 S. Sinclair St.',
    '295 E Orangethorpe Ave',
    '2050 W. Ball Road',
    '2780 E Wagner Ave',
    '2180 West Crescent Ave',
    '2950 E Imperial Hwy',
    '585 S. Walnut Ave',
    '8014 Marine Way',
    '8 Thomas',
    '710 S Cambridge Street',
    '300 E. Taft Ave',
    '154 S. Shaffer St.',
    '1125 W Alvarez Ave.',
    '250 S. Prospect Ave.',
    '170 S Olive St',
    '2910 N Santiago Blvd.',
    '517 W. Struck Ave',
    '11712 N. Hewes Street',
    '1820 E Meats Ave.',
    '1090 N. Batavia St.',
    '308 S Glassell Street',
    '191 N Orange St',
    '3512 E. Chapman Ave',
    '250 S. Prospect Street',
    '250 S. Prospect Street'
  ]

  console.log(address.sort((a,b)=> a.length<b.length ? -1 : a.length>b.length ? 1 :0))