function health(){
    var final = "Feedback for Diseases and Nutrition: <br>"
	if(document.getElementsByName("backpain")[0].checked || document.getElementsByName("grip")[0].checked || document.getElementsByName("fracture")[0].checked  || document.getElementsByName("jaw")[0].checked){
        final+= "Your results have informed us that you might have a case of osteoporosis. It is highly recommended to get some exercise, diet, and take vaitamin pills.<br>"
	} 
    if(document.getElementsByName("smaller")[0].checked || document.getElementsByName("tired")[0].checked){
        final+= "Your answers have proved that your body may be suffering from muscle atrophy. We highly reccomend you to get some exercise, physical therapy, start dieting and eating healthy.<br>"
	} 
    if(document.getElementsByName("congested")[0].checked || document.getElementsByName("runny")[0].checked || document.getElementsByName("cough")[0].checked){
        final+= " Your results are showing that you may be suffering from the common cold. It is not a big issue, but we highly reccomend you to get some rest and sleep, stay hydrated, and use a nasal spray.<br>"
	} 
    alert(JSON.stringify(final))
    document.getElementById("feedbackinfo").innerHTML = document.getElementById("feedbackinfo").innerHTML + final
}

function mental(){
    var final = "Feedback for Mental Health: <br>"
	if((document.getElementsByName("mentalrating")[0].checked || document.getElementsByName("mentalrating")[1].checked)||(document.getElementsByName("sad")[0].checked)){
        final+= "Your results have stated that you are facing mental issues, we reccomend you try a new activity, or socialize with new people.<br>"
	} 
    if(document.getElementsByName("Issues")[1].checked){
        final+= "We highly reccomend you talk to someone about your issues if you have any.<br>"
	} 
    if(document.getElementsByName("Sleep")[0].checked){
        final+= "Your answer for one of the questions informed us that you feel tired even if you get extra sleep. We reccomend you read a book before going to sleep to lower your heart rate and prepare you for a good rest. Please refrain from using your devices before going to bed.<br>"
	} 
    if(document.getElementsByName("Activities")[1].checked){
        final+= "We highly encourage you to try new activities once in a while to change up the flow. New activities can also help you become more active and mentally healthy.<br>"
	} 
    alert(JSON.stringify(final))
    document.getElementById("feedbackinfo").innerHTML = document.getElementById("feedbackinfo").innerHTML + final
}
function nutrition(){
    var final = "Feedback for Nutrition: <br>"
    if(document.getElementsByName("BMI")[0].checked){
        final+= "We encourage you to complete you entire meal for breakfast, lunch, and dinner.<br>"
	} 
    else if(document.getElementsByName("BMI")[1].checked){
        final+= "We encourage you to complete your entire meal for breakfast, lunch, and dinner.<br>"
	} else if(document.getElementsByName("BMI")[2].checked){
        final+= "Your results have showed us that you are mildly overweight, we encourage you to reduce your intake on junk food and replace it with fruits and vegetables. You should also remember to drink plenty of water.<br>"
	} else if(document.getElementsByName("BMI")[3].checked){
        final+= "Your results have showed us that you are overweight, we encourage you to reduce your intake on junk food and replace it with fruits and vegetables. You should also remember to drink plenty of water.<br>"
	} 
    alert(JSON.stringify(final))
    document.getElementById("feedbackinfo").innerHTML = document.getElementById("feedbackinfo").innerHTML + final
}