function getParams(){
                var idx = document.URL.indexOf('?');
                var params = new Array();
                if (idx != -1) {
                    var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
                    for (var i=0; i<pairs.length; i++){
                        nameVal = pairs[i].split('=');
                        params[nameVal[0]] = nameVal[1];
                    }
                }
                return params;
            }
            params = getParams();
            firstname = unescape(params["firstname"]);
            lastname = unescape(params["lastname"]);
            age = unescape(params["age"]);
            phone = unescape(params["phone"]);
            email = unescape(params["email"]);
            address = unescape(params["address"]);
        
            document.write("<h1>Registration Details</h1><br>")

            document.write("firstname = " + firstname + "<br>");
            document.write("lastname = " + lastname + "<br>");
            document.write("age = " + age + "<br>");
            document.write("phone = " + phone + "<br>");
            document.write("email = " + email + "<br>");

// add regex for removing + sign and replace with space 
var add=address.replace(/[^A-Z0-9]+/ig, " ");


            document.write("address = " + add + "<br>");