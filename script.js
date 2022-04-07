const input = document.getElementById('input');
const inputShots = document.getElementById('inputShots');
const select = document.getElementById("select");
const span = document.getElementById("text");
const shot = document.getElementById("shot");

let arr=[];
let arrCheck =[];
let patrons;
select.addEventListener('click', function() {
    if(input.value == "" || inputShots.value == "") {
        alert('Не может быть пустой стоки');
    } else if(Number(input.value) <Number(inputShots.value)){
        alert('Размер барабана должен быть больше количества патронов');
    } else {
        arr=[];
        arrCheck =[];
       for(let i=0; i<input.value;i++) {
            arr.push(i);
        }
        arrCheck = [...arr];
        let arrElem =[];
        for(let i=0;i<inputShots.value;i++) {
            let r = Math.random() * ((Number(arrCheck.length)-1) + 1);
            let x = Math.floor(r);
            arrElem.push(arrCheck[x]);
            arrCheck.splice(x, 1);
            for(let j=0;j<arrElem.length;j++) {
                arr[arrElem[j]] = "shot";
            }
            

        } 
       patrons = 0;
       for(let elem of arr) {
           if(elem == "shot") {
            patrons++;
           }
       }
        span.innerHTML = "В револьвер заряжено " + patrons +  " патрон/а из возможных " + input.value + "<br>" + 
        "Твой шанс умереть - " + ((100/arr.length)*patrons).toFixed(2) + "%";
        input.value ="";
        inputShots.value = '';
    }
    
});

shot.addEventListener('click', function() {
    patrons=0;
            for(let elem of arr) {
                if(elem == "shot") {
                 patrons++;
                }
            }
    if(arr.length == 0 || patrons == 0) {
        alert("Зарядите патрон!");
    } else {
        let r = Math.random() * ((arr.length-1) + 1);
        let x = Math.floor(r);
        patrons=0;
            for(let elem of arr) {
                if(elem == "shot") {
                 patrons++;
                }
            }
        if (arr[x] == 'shot') {
            
            console.log(patrons);
            if(patrons>0) {
               
                alert('SHOOOOT! C вероятностью ' + ((100/arr.length)*patrons).toFixed(2) +  '% , ты проиграл! Подавайте следующего!');
                arr.splice(x, 1);
                patrons=0;
                for(let elem of arr) {
                    if(elem == "shot") {
                     patrons++;
                    }
                }
                if(patrons>0) {
                    span.innerHTML = "В револьвер заряжено " + patrons +  "  патрон/ов, осталось попыток " + arr.length + "<br>" + 
                    "Твой шанс умереть - " + ((100/arr.length)*patrons).toFixed(2) + "%";
                } else {
                    span.innerHTML = "В револьвер не осталось патронов, перезарядите!";
                    arr=[];
                }
                
            }else {
                alert('SHOOOOT! C вероятностью ' + ((100/arr.length)*patrons).toFixed(2) +  '% , ты проиграл! ');
                arr=[];
                span.innerHTML = "Зарядите патроны";
            }
            
        } else {
            arr.splice(x, 1);
            span.innerHTML = "В револьвер заряжено " + patrons +  "  патрон/ов, осталось попыток " + arr.length + "<br>" + 
            "Твой шанс умереть - " + ((100/arr.length)*patrons).toFixed(2) + "%";
            alert('Патрон все еще в барабане! Тебе повезло!');
        }
    }
   
});