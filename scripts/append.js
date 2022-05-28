


function appenddata(data,where){
    document.getElementById("show").textContent = null;
    data.forEach((e) => {
        let {name} = e
        let div = document.createElement("div")
        
        let span = document.createElement("span")
        
        span.textContent = name

        span.style.color = "blue"
        
        let p = document.createElement("p")
        p.textContent = "Repo Name  "
        p.append(span)
        div.append(p)
        where.append(div)
    });
}



export default appenddata