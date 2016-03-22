/* Converts a URL Query String into an object
 Input: user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
 Output: 
{
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  }
}
*/

function convertQueryToObject(query) {
	
  var obj = {};
  
  if(query === "" || query === undefined ) return obj;
    
  var arrList = query.split('&').map(function(e){
  		return e.split('=');
  });
  
 
  for(var i=0; i<arrList.length; i++){
  	// encoded string to filter '%20' froms strings.
  	var value = decodeURIComponent(arrList[i][1]); 
    var keyList = arrList[i][0].split('.');
		//function to map nested keys of object
    mapObjKeys(obj, keyList, value);
		  
  }
    return obj;
}


function mapObjKeys(obj, keyList, value) {
   lastKeyIndex = keyList.length-1;
   for (var i = 0; i < lastKeyIndex; ++ i) {
     key = keyList[i];
     if (!(key in obj))
       obj[key] = {}
     obj = obj[key];
   }
   obj[keyList[lastKeyIndex]] = value;
}