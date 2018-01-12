var alexa = require('alexa-app');
var app = new alexa.app();
app.launch(function(request, response){
 response.say("Welcome to Squats, please select the day of your 30 day transfermation you are on. or if you need help say Help, To cancel say cancel and to end the skill say stop, Please tell me, What would you like to do");
 response.shouldEndSession(false);
})
var exitFunction = function(request, response) {
  var speechOutput = 'Thanks for visiting, Goodbye!';
  response.say(speechOutput);
};

app.intent('AMAZON.StopIntent', exitFunction);
app.intent('AMAZON.HelpIntent', function(request, response) {
  var speechOutput = 'Ok, To get your daily routine. Just say the day number of the routine you would like to hear, or if you need help say Help, To cancel say cancel and to end the skill say stop, Please tell me, What would you like to do';

  response.say(speechOutput);
  response.shouldEndSession(false);
});
app.intent("AMAZON.CancelIntent", {
    "slots": {},
    "utterances": []
  }, function(request, response) {
    var cancelOutput = "No problem. Request cancelled.";
    response.say(cancelOutput);
  }
);
app.intent('CatchAllIntent', function(request, response) {
  var speechOutput = 'I did not understand your response, could you please ask me for  if you need help, say help. So what can I help you with';

  response.say(speechOutput);
  response.shouldEndSession(false);
});
app.intent('DayNumberOne',
 {
  "slots": {},
  "utterances": [
   "day number one",
  ]
 },
 function (request, response) {
  generate_suggestions_dayone(response);
  return;
 }
);
function generate_suggestions_dayone(response){
 var dayone = ["Day 1, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = dayone[Math.floor(Math.random() * dayone.length)];
response.say("Your routine " + dayone + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberTwo',
 {
  "slots": {},
  "utterances": [
   "day number two",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwo(response);
  return;
 }
);
function generate_suggestions_daytwo(response){
 var daytwo = ["Day 2, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = daytwo[Math.floor(Math.random() * daytwo.length)];
response.say("Your routine " + daytwo + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberThree',
 {
  "slots": {},
  "utterances": [
   "day number three",
  ]
 },
 function (request, response) {
  generate_suggestions_daythree(response);
  return;
 }
);
function generate_suggestions_daythree(response){
 var daythree = ["Day 3, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = dayone[Math.floor(Math.random() * daythree.length)];
response.say("Your routine " + daythree + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberFour',
 {
  "slots": {},
  "utterances": [
   "day number four",
  ]
 },
 function (request, response) {
  generate_suggestions_dayfour(response);
  return;
 }
);
function generate_suggestions_dayfour(response){
 var dayfour = ["Day 4, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = dayfour[Math.floor(Math.random() * dayfour.length)];
response.say("Your routine " + dayfour + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberFive',
 {
  "slots": {},
  "utterances": [
   "day number five",
  ]
 },
 function (request, response) {
  generate_suggestions_dayfive(response);
  return;
 }
);
function generate_suggestions_dayfive(response){
 var dayfive = ["Day 5, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = dayfive[Math.floor(Math.random() * dayfive.length)];
response.say("Your routine " + dayfive + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberSix',
 {
  "slots": {},
  "utterances": [
   "day number six",
  ]
 },
 function (request, response) {
  generate_suggestions_daysix(response);
  return;
 }
);
function generate_suggestions_daysix(response){
 var daysix = ["Day 6, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = daysix[Math.floor(Math.random() * daysix.length)];
response.say("Your routine " + daysix + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberSeven',
 {
  "slots": {},
  "utterances": [
   "day number seven",
  ]
 },
 function (request, response) {
  generate_suggestions_dayseven(response);
  return;
 }
);
function generate_suggestions_dayseven(response){
 var dayseven = ["Day 7, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = dayseven[Math.floor(Math.random() * dayseven.length)];
response.say("Your routine " + dayseven + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberEight',
 {
  "slots": {},
  "utterances": [
   "day number eight",
  ]
 },
 function (request, response) {
  generate_suggestions_dayeight(response);
  return;
 }
);
function generate_suggestions_dayeight(response){
 var dayeight = ["Day 8, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = dayeight[Math.floor(Math.random() * dayeight.length)];
response.say("Your routine " + dayeight + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberNine',
 {
  "slots": {},
  "utterances": [
   "day number nine",
  ]
 },
 function (request, response) {
  generate_suggestions_daynine(response);
  return;
 }
);
function generate_suggestions_daynine(response){
 var daynine = ["Day 9, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = daynine[Math.floor(Math.random() * daynine.length)];
response.say("Your routine " + daynine + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberTen',
 {
  "slots": {},
  "utterances": [
   "day number ten",
  ]
 },
 function (request, response) {
  generate_suggestions_dayten(response);
  return;
 }
);
function generate_suggestions_dayten(response){
 var dayten = ["Day 10, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = dayten[Math.floor(Math.random() * dayten.length)];
response.say("Your routine " + dayten + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberEleven',
 {
  "slots": {},
  "utterances": [
   "day number eleven",
  ]
 },
 function (request, response) {
  generate_suggestions_dayeleven(response);
  return;
 }
);
function generate_suggestions_dayeleven(response){
 var dayeleven = ["Day 11, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = dayeleven[Math.floor(Math.random() * dayeleven.length)];
response.say("Your routine " + dayeleven + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberTwelve',
 {
  "slots": {},
  "utterances": [
   "day number twelve",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwelve(response);
  return;
 }
);
function generate_suggestions_daytwelve(response){
 var daytwelve = ["Day 12, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = daytwelve[Math.floor(Math.random() * daytwelve.length)];
response.say("Your routine " + daytwelve + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberThirteen',
 {
  "slots": {},
  "utterances": [
   "day number thirteen",
  ]
 },
 function (request, response) {
  generate_suggestions_daythirteen(response);
  return;
 }
);
function generate_suggestions_daythirteen(response){
 var daythirteen = ["Day 13, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = daythirteen[Math.floor(Math.random() * daythirteen.length)];
response.say("Your routine " + daythirteen + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberFourteen',
 {
  "slots": {},
  "utterances": [
   "day number fourteen",
  ]
 },
 function (request, response) {
  generate_suggestions_dayfourteen(response);
  return;
 }
);
function generate_suggestions_dayfourteen(response){
 var dayfourteen = ["Day 14, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = dayfourteen[Math.floor(Math.random() * dayfourteen.length)];
response.say("Your routine " + dayfourteen + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberFifteen',
 {
  "slots": {},
  "utterances": [
   "day number fifteen",
  ]
 },
 function (request, response) {
  generate_suggestions_dayfifteen(response);
  return;
 }
);
function generate_suggestions_dayfifteen(response){
 var dayfifteen = ["Day 15, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = dayfifteen[Math.floor(Math.random() * dayfifteen.length)];
response.say("Your routine " + dayfifteen + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberSixteen',
 {
  "slots": {},
  "utterances": [
   "day number sixteen",
  ]
 },
 function (request, response) {
  generate_suggestions_daysixteen(response);
  return;
 }
);
function generate_suggestions_daysixteen(response){
 var daysixteen = ["Day 16, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = daysixteen[Math.floor(Math.random() * daysixteen.length)];
response.say("Your routine " + daysixteen + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberSeventeen',
 {
  "slots": {},
  "utterances": [
   "day number seventeen",
  ]
 },
 function (request, response) {
  generate_suggestions_dayseventeen(response);
  return;
 }
);
function generate_suggestions_dayseventeen(response){
 var dayseventeen = ["Day 17, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = dayseventeen[Math.floor(Math.random() * dayseventeen.length)];
response.say("Your routine " + dayseventeen + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberEighteen',
 {
  "slots": {},
  "utterances": [
   "day number eighteen",
  ]
 },
 function (request, response) {
  generate_suggestions_dayeighteen(response);
  return;
 }
);
function generate_suggestions_dayeighteen(response){
 var dayeighteen = ["Day 18, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = dayeighteen[Math.floor(Math.random() * dayeighteen.length)];
response.say("Your routine " + dayeighteen + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberNineteen',
 {
  "slots": {},
  "utterances": [
   "day number nineteen",
  ]
 },
 function (request, response) {
  generate_suggestions_daynineteen(response);
  return;
 }
);
function generate_suggestions_daynineteen(response){
 var daynineteen = ["Day 19, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = daynineteen[Math.floor(Math.random() * daynineteen.length)];
response.say("Your routine " + dayone + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberTwenty',
 {
  "slots": {},
  "utterances": [
   "day number twenty",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwenty(response);
  return;
 }
);
function generate_suggestions_daytwenty(response){
 var daytwenty = ["Day 20, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = daytwenty[Math.floor(Math.random() * daytwenty.length)];
response.say("Your routine " + daytwenty + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberTwentyOne',
 {
  "slots": {},
  "utterances": [
   "day number twenty one",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwentyone(response);
  return;
 }
);
function generate_suggestions_daytwentyone(response){
 var daytwentyone = ["Day 21, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = daytwentyone[Math.floor(Math.random() * daytwentyone.length)];
response.say("Your routine " + daytwentyone + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberTwentyTwo',
 {
  "slots": {},
  "utterances": [
   "day number twenty two",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwentytwo(response);
  return;
 }
);
function generate_suggestions_daytwentytwo(response){
 var daytwentytwo = ["Day 22, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = daytwentytwo[Math.floor(Math.random() * daytwentytwo.length)];
response.say("Your routine " + daytwentytwo + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberTwentyThree',
 {
  "slots": {},
  "utterances": [
   "day number twenty three",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwentythree(response);
  return;
 }
);
function generate_suggestions_daytwentythree(response){
 var daytwentythree = ["Day 23, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = daytwentythree[Math.floor(Math.random() * daytwentythree.length)];
response.say("Your routine " + daytwentythree + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberTwentyFour',
 {
  "slots": {},
  "utterances": [
   "day number twenty four",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwentyfour(response);
  return;
 }
);
function generate_suggestions_daytwentyfour(response){
 var daytwentyfour = ["Day 24, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = daytwentyfour[Math.floor(Math.random() * daytwentyfour.length)];
response.say("Your routine " + daytwentyfour + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberTwentyFive',
 {
  "slots": {},
  "utterances": [
   "day number twenty five",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwentyfive(response);
  return;
 }
);
function generate_suggestions_daytwentyfive(response){
 var daytwentyfive = ["Day 25, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = daytwentyfive[Math.floor(Math.random() * daytwentyfive.length)];
response.say("Your routine " + daytwentyfive + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberTwentySix',
 {
  "slots": {},
  "utterances": [
   "day number twenty six",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwentysix(response);
  return;
 }
);
function generate_suggestions_daytwentysix(response){
 var daytwentysix = ["Day 26, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = daytwentysix[Math.floor(Math.random() * daytwentysix.length)];
response.say("Your routine " + daytwentysix + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberTwentySeven',
 {
  "slots": {},
  "utterances": [
   "day number twenty seven",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwentyseven(response);
  return;
 }
);
function generate_suggestions_(response){
 var daytwentyseven = ["Day 27, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = daytwentyseven[Math.floor(Math.random() * daytwentyseven.length)];
response.say("Your routine " + daytwentyseven + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberTwentyEight',
 {
  "slots": {},
  "utterances": [
   "day number twenty eight",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwentyeight(response);
  return;
 }
);
function generate_suggestions_daytwentyeight(response){
 var daytwentyeight = ["Day 28, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = daytwentyeight[Math.floor(Math.random() * daytwentyeight.length)];
response.say("Your routine " + daytwentyeight + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberTwentyNine',
 {
  "slots": {},
  "utterances": [
   "day number twenty nine",
  ]
 },
 function (request, response) {
  generate_suggestions_daytwentynine(response);
  return;
 }
);
function generate_suggestions_daytwentynine(response){
 var daytwentynine = ["Day 29, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = daytwentynine[Math.floor(Math.random() * daytwentynine.length)];
response.say("Your routine " + daytwentynine + " ,Thank you for visiting my squats");
 response.send();
return ;
}
app.intent('DayNumberThirty',
 {
  "slots": {},
  "utterances": [
   "day number thirty",
  ]
 },
 function (request, response) {
  generate_suggestions_daythirty(response);
  return;
 }
);
function generate_suggestions_daythirty(response){
 var daythirty = ["Day 30, Basic Squat, Start in a standing position, feet shoulder width apart and hands clasped in front of chest, elbows slightly bent,Brace your abs, push your hips back and bend your knees, lowering the body into a squat,  Pause at the bottom, then push back up to the starting position,  Do 15 reps."
 ];
var rand = daythirty[Math.floor(Math.random() * daythirty.length)];
response.say("Your routine " + daythirty + " ,Thank you for visiting my squats");
 response.send();
return ;
}
// Connect to lambda
exports.handler = app.lambda();
if ((process.argv.length === 3) && (process.argv[2] === 'schema'))
{
    console.log (app.schema ());
    console.log (app.utterances ());
}
