function average(scores){
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        let element = scores[i];
        total += element;
    }

    console.log(Math.round(total/scores.length));
}


var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);