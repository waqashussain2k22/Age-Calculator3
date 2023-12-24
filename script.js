function calculateAge() {
    var birthDate = new Date(document.getElementById("birthdate").value);
    var today = new Date();
  
    var age = today.getFullYear() - birthDate.getFullYear();
    var months = today.getMonth() - birthDate.getMonth();
    var days = today.getDate() - birthDate.getDate();
  
    if (months < 0 || (months === 0 && days < 0)) {
      age--;
      months += 12;
    }
  
    var totalDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));
    var totalHours = Math.floor(totalDays*24)
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var today = new Date();
    var dayName = days[today.getDay()];
    var d = today.getDate();
    var m = today.getMonth();
        var y = today.getFullYear();

        var t = dayName +"-"+d+"-"+(m+1)+"-"+y


  
    document.getElementById("ageOutput").textContent = age + " years";
    document.getElementById("monthsOutput").textContent = months + " months";
    document.getElementById("daysOutput").textContent = totalDays + " days";
    document.getElementById("hoursOutput").textContent = totalHours + " Hours";
    document.getElementById("todayDate").textContent = t + "";

  }
  