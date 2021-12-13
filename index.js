function scuberGreetingForFeet(distance) {

  let sample = 'This one is on me!'
  let charge = 'I will gladly take your thirty bucks.'
  let goaway = 'No can do.'
  // Write your code here!

  if (distance <= 400) {
    return sample
  } else if (distance > 400 && distance < 2500) {
    return charge;
  } else if (distance > 2500) {

    return goaway
  }



}

function ternaryCheckCity(city) {
  // Write your code here!

  const citycheck = city == 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return citycheck;

}

function switchOnCharmFromTip(tip) {

  // Write your code here!
  switch (tip) {
    case "generous":
      return 'Thank you so much.';
      break;

    case "not as generous":
      return 'Thank you.';
      break;

    default:
      return 'Bye.';
  }

}