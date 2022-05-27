// 3332ba66
// http://www.omdbapi.com/?t=[movie name]&apikey=3332ba66
//http://www.omdbapi.com/?t=harry&apikey=3332ba66
var id;
function hello(){
    let query = document.getElementById('query').value;
    togood(query)
}

async function togood(l){

    let url = `http://www.omdbapi.com/?s=${l}&apikey=3332ba66`
    
    let res = await fetch(url)
    let data = await res.json()
    let x = data.Search
     
    append(x)
}

function append(x){
    console.log(x)
    let mn = document.querySelector('#m_n')

    mn.innerHTML = '';

    if(x === undefined){
        return false;
    }

    x.forEach(function(elem){

   let div = document.createElement('div')    

    let img = document.createElement('img')
     img.src = elem.Poster
    
    let h2 = document.createElement('h2')    
    h2.innerText=elem.Title

    let h3 = document.createElement('h2')    
    h3.innerText=elem.Year

    div.append(img,h2,h3) 
    mn.append(div)   
    })
}

function dip(hello,del){

if(id){
    clearTimeout(id)
}
id = setTimeout(function(){
    hello()
},del)
}