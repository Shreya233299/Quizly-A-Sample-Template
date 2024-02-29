const correctAns = ["B","B","C","C"];
const form = document.getElementById("quiz");

form.addEventListener("submit",function(e){
    e.preventDefault();

    let score = 0;
    const userAns = [form.ques1.value, form.ques2.value, form.ques3.value, form.ques4.value];

    userAns.forEach((answer, index) => {
        if(answer === correctAns[index]){
            score += 25;
        }
    })
    console.log(score);
});
