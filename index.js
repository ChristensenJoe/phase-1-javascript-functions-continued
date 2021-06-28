// Your code here
function saturdayFun(event="roller-skate") {
    return `This Saturday, I want to ${event}!`;
}

const mondayWork = function(event="go to the office") {
    return `This Monday, I will ${event}.`;
}

function wrapAdjective(thing="*") {
    return function(param="special") {
        return `You are ${thing}${param}${thing}!`;
    }
}