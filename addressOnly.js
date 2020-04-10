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
    '1531 S. Sinclair St.'
  ]

  console.log(address.sort((a,b)=> a.length<b.length ? -1 : a.length>b.length ? 1 :0))