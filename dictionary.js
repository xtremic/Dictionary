var input = document.getElementById('word')

async function requestApi(url){
    var data;
    var response = await fetch(url,{
        method: 'GET',
    });
    if(!response.ok){
        alert( "Not a word")
    
    }
    input.value = ""


    data = await response.json()
    
    return data;
    
}
function getApi(){
    requestApi("https://api.dictionaryapi.dev/api/v2/entries/en/" + input.value).then((data)=>{
        var noun = data[0].meanings[0]
        var nounDEf = data[0].meanings[0].definitions[0]
        var nounDEf2 = data[0].meanings[0].definitions[1]
       // var verb = data[0].meanings[1]

     
        
        

        //createElements
        var  answer = document.getElementById('answers')
        answer.innerHTML = ""
        var box = document.createElement('div')
        var figure = document.createElement('h1')
        var Definition = document.createElement('h1')
        var Definition2 = document.createElement('h1')
        var Example = document.createElement('h1')
        var anto = document.createElement('h1')
        var syno = document.createElement('h1')
        box.id = 'box'
        figure.id = 'figure'
        Definition.id = 'Definition'
        Definition2.id = 'Definition2'
        Example.id = 'example'
        anto.id = 'anto'
        syno.id = 'syno'

        answer.append(box)
        
        box.append(figure, Definition, Definition2, Example, anto, syno)
        

     
        
        figure.innerHTML = "As a "+ noun.partOfSpeech + " " +  data[0].word + " can be defined as:"
        
        if(
            nounDEf.example === undefined ||
            noun.synonyms === undefined ||
            data[0].phonetic === undefined

        ){
            Example.innerHTML = ""
            anto.innerHTML = ""
            syno.innerHTML = ""

        }else
        {
            Example.innerHTML = "An example is "+ "<i> "+ nounDEf.example +" </i>"
            anto.innerHTML = "The synonyms are " + noun.synonyms
            syno.innerHTML = "It is transcribed as " + data[0].phonetic


        }
        

        Definition.innerHTML = nounDEf.definition + " (Meaning 1)"
        Definition2.innerHTML = nounDEf2.definition + " (Meaning 2)"
        
        

       
    })
    input.value = ""



}

function run(event){
    if(event.key === 'Enter'){
        getApi()
    }
    
}






 





