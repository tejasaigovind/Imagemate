let btn=document.getElementById("btn")

let input=document.getElementById("input")

let demo=document.getElementById("demo")



btn.addEventListener("click",()=>{
     demo.innerHTML=``

    window.fetch(`https://pixabay.com/api/?key=42523272-f38500fd01baf6c6fd06c8dc9&q=${input.value}&image_type=photo&pretty=true`)
    .then(res =>res.json())
    .then((data)=>{
        for(let ele of data.hits){
        let image=document.createElement("img")
        image.setAttribute(name="src" ,value=`${ele.previewURL}`)
        demo.append(image)
        }
        btn.onclick=()=>{
            demo.innerHTML+=``
        }
    })
    
})


input.addEventListener("keypress",()=>{
    if(event.key =='Enter'){
        demo.innerHTML=``

    window.fetch(`https://pixabay.com/api/?key=42523272-f38500fd01baf6c6fd06c8dc9&q=${input.value}&image_type=photo&pretty=true`)
    .then(res =>res.json())
    .then((data)=>{
        for(let ele of data.hits){
        let image=document.createElement("img")
        image.setAttribute(name="src" ,value=`${ele.previewURL}`)
        demo.append(image)
        }
        btn.onclick=()=>{
            demo.innerHTML+=``
        }
    })
    }
})