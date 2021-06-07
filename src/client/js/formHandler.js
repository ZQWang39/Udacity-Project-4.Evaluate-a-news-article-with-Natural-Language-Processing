import "regenerator-runtime/runtime";
 
 export function handleSubmit(event) {
    event.preventDefault()

    let urlInput = document.getElementById('url').value;

    if (Client.checkForUrl(urlInput)){
        errorMessage.innerHTML = '';
        postData('http://localhost:8081/urlAnalysis', {url:urlInput})
        .then(function(data){
            console.log(data);
            updateUI(data);
        });
    } else{
        console.log('invalid URL')
        
        const error = document.getElementById("errorMessage");
        error.innerHTML ="The URL you pasted is invalid. Please confirm it!";
        document.getElementById("model").innerHTML = "";
        document.getElementById("score_tag").innerHTML = "";
        document.getElementById("agreement").innerHTML = "";
        document.getElementById("subjectivity").innerHTML = "";
        document.getElementById("confidence").innerHTML = "";
        document.getElementById("irony").innerHTML = "";

    
    }
}
        //POST data

        const postData = async ( url = '', data = {})=>{
            console.log(data);
           const response = await fetch(url, {
           method: 'POST',
           credentials: 'same-origin', 
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(data),      
         });
       
           try {
             const newData = await response.json();
                    return newData
           }catch(error) {
           console.log("error", error);
       
           }
       }
       
    //Updating UI elements

   function updateUI(data){
    document.getElementById("model").innerHTML = `Model: ${data.model}`;
    document.getElementById("score_tag").innerHTML = `Score tag: ${data.score_tag}`;
    document.getElementById("agreement").innerHTML = `Agreement: ${data.agreement}`;
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`;
    document.getElementById("confidence").innerHTML = `Confidence: ${data.confidence}`;
    document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;

    }
    


    

