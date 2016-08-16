var proceed=0;

function checkPassword(){
	

  		var username = document.getElementById('username_').value;
  		var password = document.getElementById('password_').value;
		

  		if ("ASC3"==username&& "123"==password){
  			proceed = 1;
  			                     // Create a <p> element
			alert("Data successfully saved on database" );       // Create a text node
			
  		//$("#updateinfo").append("Data successfully saved on database" );
    	}
    	else
    	{
    		                      // Create a <p> element
			alert("Unauthorized access denied" );       // Create a text node
			
    	}
    	


	Saveschool_info();



}
function Saveschool_info(){
	
	//initialize firebase for saving database
	 // Initialize Firebase
	var config = {
       apiKey: "AIzaSyCOJUGlOHXeK-wYFaJtXK36h7MypIdSM18",
       authDomain: "schooljiffy.firebaseapp.com",
       databaseURL: "https://schooljiffy.firebaseio.com",
       storageBucket: "schooljiffy.appspot.com",
     };
  	firebase.initializeApp(config);
	var database = firebase.database().ref(); 


	var key;
	var schoolname = $("#Sname_").val();
  	var tution = $("#tution_").val();
  	var city = $("#city_").val();
  	var zipcode = $("#zipcode_").val();
  	var state = $("#state_").val();
  	var popSport = $("#pop_sport_").val();


  	if(proceed==1){
			database.push({

			'School': schoolname,
			'State' : state,
			'City': city,
			'PopularSport': popSport,
			'Zipcode':zipcode,
			'Tuition':tution

		});
	}
	proceed =0;
}

