const ResponseNB = 5;
const ResponseValue = ['A', 'B', 'C', 'D', 'E'];


window.onload = function() {
    let questions = document.getElementById("questionsDiv");

    questions.style.border = "0px";
}

function generateCheckboxes(){
    let questionNb = document.getElementById("number_of_questions_input").value;
    questionNb = parseInt(questionNb);

    let questions = document.getElementById("questionsDiv");
    questions.innerHTML = "";
    questions.style.border = "2px solid black";

    let documentNameDiv = document.querySelector(".document-name");
    let documentNameInput = document.createElement("input");
    let documentNameLabel = document.createElement("label");
    documentNameLabel.innerHTML = "Nom document : ";

    documentNameInput.style.border = "1px solid black";
    documentNameInput.style.borderRadius = "4px";
    documentNameInput.style.width = "50%";
    documentNameInput.style.padding = "10px 20px";
    documentNameInput.style.margin = "8px 0";

    documentNameLabel.style.fontSize = "30px";
    documentNameLabel.style.fontWeight = "800";

    questions.appendChild(documentNameLabel);
    questions.appendChild(documentNameInput);

    questions.innerHTML += "<br>" + "<br>";

    
    let questionLabel = document.createElement("label");
    questionLabel.innerHTML = "Questions";

    questionLabel.style.fontWeight = "700";
    questionLabel.style.fontSize = "24px";
    questionLabel.style.paddingBottom = "24px";

    questions.appendChild(questionLabel);

    for (let i = 0; i< questionNb; i++){
        var question = document.createElement("p");
        question.innerHTML = "Question "+(i+1);
        questions.appendChild(question);
        for (let y = 0; y < ResponseNB; y++){
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("class", "checkbox")

            let label = document.createElement("label");
            label.innerHTML = ResponseValue[y];
            
            questions.appendChild(label);
            questions.appendChild(checkbox);
        }

        questions.innerHTML += "<br>";
        questions.innerHTML += "<br>";

        for (let z = 0; z < ResponseNB; z++){
            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("class", "checkbox")

            let label = document.createElement("label");
            label.innerHTML = ResponseValue[z];
            
            questions.appendChild(label);
            questions.appendChild(checkbox);

        }

        questions.innerHTML += "<br>";

        let clarificationInput = document.createElement("div");
        clarificationInput.setAttribute("contenteditable", "true")
        clarificationInput.classList.add("clarifications");

        clarificationInput.style.border = "1px solid black";
        clarificationInput.style.borderRadius = "4px";
        clarificationInput.style.maxWidth = "80%";
        clarificationInput.style.maxHeight = "300px"
        clarificationInput.style.padding = "10px 20px";
        clarificationInput.style.margin = "8px 0";

        let pointInput = document.createElement("input");
        pointInput.setAttribute("type", "number");
        pointInput.classList.add("point");

        pointInput.style.border = "1px solid black";
        pointInput.style.borderRadius = "4px";
        pointInput.style.width = "50px";
        pointInput.style.padding = "10px 20px";
        pointInput.style.margin = "8px 0";

        questions.appendChild(clarificationInput);
        questions.appendChild(pointInput);
    }

    questions.innerHTML += "<br><br>";

    let totalPoint = document.createElement("p");
    totalPoint.classList.add("totalPoint");
    totalPoint.style.backgroundColor = "black";
    totalPoint.style.color = "white";
    totalPoint.style.padding = "25px";
    totalPoint.style.width = "100px";
    totalPoint.style.borderRadius="4px";
    totalPoint.style.fontSize="20px";
    totalPoint.style.fontWeight="600";
    totalPoint.style.textAlign="center";
    questions.appendChild(totalPoint);

    let calculateBtn = document.createElement("button");
    calculateBtn.textContent = "Calcul";
    calculateBtn.classList.add("button-2");
    calculateBtn.setAttribute("id", "calculBtn");
    questions.appendChild(calculateBtn);

    let calcBtn = document.getElementById("calculBtn");
    calcBtn.addEventListener("click", totalPoints);
}


function totalPoints(){
    let points = document.querySelectorAll(".point");
    let totalPoints = 0;
    for (let i = 0; i < points.length; i++){
        if (!isNaN(parseFloat(points[i].value))){
            totalPoints += parseFloat(points[i].value);
        }
    }
    totalPoints = totalPoints / points.length * 20;

    let totalPointText = document.querySelector(".totalPoint");
    totalPointText.innerHTML = totalPoints + " Pts";
}

