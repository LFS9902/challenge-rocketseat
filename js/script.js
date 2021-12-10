function show(){
    let plataform = document.getElementById('plataform')
    let optionsPlataforms = document.querySelector("input[name=plataforms]:checked").value

    if(optionsPlataforms == "school"){
        plataform.innerHTML = "<img src='./style/plataform-school.png' class='plataform-image'>"
    } else if(optionsPlataforms == "academic") {
        plataform.innerHTML = "<img src='./style/plataform-academic.png' class='plataform-image'>"
    } else {
        plataform.innerHTML = "<img src='./style/plataform-course.png' class='plataform-image'>"
    }
}
