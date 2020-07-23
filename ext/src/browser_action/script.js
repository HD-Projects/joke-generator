var jokeAPI = "https://official-joke-api.appspot.com/random_joke";
   var myPromise = new Promise(showJoke);
 
      function showJoke(resolve, reject) {
      $.ajax({
        url: jokeAPI,
        success: resolve,
 error: reject
        
      });
      }
        
      function rejected(){
$("#setup").text("joke not found");
 $("#punchline").text("API error"); 

}
 
       
        function fulfilled(response){
console.log(response)
$("#setup").text(response.setup);
 $("#punchline").text(response.punchline);     
     $("#messagetouser").text("re-open the extension to get a new joke");     
          
        }
      
       myPromise.then(fulfilled, rejected)
