// const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
// let now = new Date();
// let dayname = daysOfTheWeek[now.getDay()];
// alert(`Hello, world! Happy ${dayname}.`);
/////////////////////////////////////
// Changed above code to a function
function dayOfTheWeek(date) {
        const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return daysOfTheWeek[date.getDay()];
      }

//return a greeting for the present day
function greeting(date) {
    alert(`Hello, world! Happy ${dayOfTheWeek(now)} -- Now coming from the function in the file.`);
}
