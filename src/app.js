//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable

//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean

//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value

//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?

//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.

//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take

//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
function moreAboutHome(address, distanceFromTown, hasNeighbours){
    return typeof(address)+typeof(distanceFromTown)+typeof(hasNeighbours);
   //console.log(typeof(address));
   }
   
   function moreAboutKaren(parents, noOfSiblings, isNuclearFamily){
        let a = typeof parents;
        let b = typeof noOfSiblings;
        let c = typeof isNuclearFamily;
        if ((a == "string") && (b == "number") && (c == "boolean"))
            return true;
        else
            return false;
    
       // var s=typeof(parents)+typeof(noOfSiblings)+typeof(isNuclearFamily);
       // if(parents==typeof(parents))
    //    if((typeof(parents)==="String") && (typeof(noOfSiblings)==="number") && (typeof(isNuclearFamily)==="boolean")){
    //        return true;
    //    }
    //    else{
    //        return false;
    //    }
       // return typeof parents+noOfSiblings+isNuclearFamily === 'string' || 'number' ||'Boolean';
   }
   /* PROGRESSION 3*/
   function doesFriendExist(ageInText, ageInNumber){
//     if (typeof(ageInText)==isNaN){
//        return ageInText;
//    }
//    else{
//    return ageInNumber;
//    }
if (ageInText == "NaN")
return ageInText;
else if (ageInNumber == "NaN")
return ageInNumber;
else
return NaN;

   }
   //Progression 4
   function sweetTooth(totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInNMeters, metersToTravel){
    //    if(typeof(totalNoOfSweets)&&typeof(sweetsConsumedByKaren)&&typeof(sweetsConsumedInNMeters)&&typeof(metersToTravel)!="number"){
    //        return "No sweets for karen's friend";
    //    }
    //    else if(sweetsConsumedByKaren==0){
    //        return 0;
    //    }
    //    else if(isNaN){
    //        return 0;
    //    }
    totalNoOfSweets = totalNoOfSweets - sweetsConsumedByKaren;
    var c = metersToTravel * sweetsConsumedInNMeters;
    if (c <= totalNoOfSweets) {
        totalNoOfSweets -= c;
        return totalNoOfSweets / 2;
    }
    else
        return "No sweets for Karen's friend";

   }
   
   function convertToCelsius(fahrenheit){
       if(typeof(fahrenheit)==="number"){
       return (5/9) * (fahrenheit-32);
       }
       else{
           return 'Technical Error!';
       }
   }
   
   function aDifficultChoice(choice){
      let c=0; 
    if (choice == -1)
    return "Break down and give up all hope";

else {
    var a = typeof choice;
    if (a == "undefined")
        return "Wasn't able to decide";
    if (choice == "I give up")
        return "Refused to do anything for Karen";
}

      // switch(choice){
        //    case 1:
        //        return "Take her to a doctor";
        //        break;
        //    case 2:
        //        return "Talk her to huband about it";
        //        break;
        //    case 3:
        //            return "Counsel her daughter herself";
        //            break;
        //    case 4:
        //            return "Lock her daughter in her room";
        //            break;
        //    case -1:
        //        return "Break down and giveup all hope ";
        //        break;
        //    case "I give up":
        //        return "Refused to do anything for karen";
        //        break;
        //    default:
        //        return "wasnt able to decide";
        //    break;
    switch (choice) {
        case 1: c = "Take her daughter to a doctor";
            break;
        case 2: c = "Talk to her husband about it";
            break;
        case 3: c = "Counsel her daughter herself";
            break;
        case 4: c = "Lock her daughter in her room";
            break;
        default: c = nothing;
            break;

    }
    return c;
       }

   function consoleKaren(strategies){
    let c = "";
    for (var i = 0; i < strategies.length; i++)
        c = c + strategies[i] + " ";
    var l = c.length - 1;
       return 1;
   }