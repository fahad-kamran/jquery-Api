// var arr ;
$(document).ready(function () {
    $.ajax({
        url: "https://eamglportal.com/laravelTest/api/user/system_users"
    })
        .then((data) => {
          var arr = data
            for (var a = 0; a < data.length; a++) {
                var tr = document.createElement("tr")
                for (var b = 1; b <= 5; b++) {
                    var td = document.createElement("td")
                    if (b == 1) {
                        td.append(a+1)
                    }
                   else if (b == 2) {
                        td.append(data[a].id)
                    }
                    else if (b == 3) {
                        td.append(data[a].name)
                    }
                    else if (b == 4) {
                        td.append(data[a].email)
                    }
                    else {
                        td.append(data[a].password)
                    }
                    tr.append(td)
                }

                $('#showData').append(tr)
            }
            // console.log(arr)
        });
        
});

