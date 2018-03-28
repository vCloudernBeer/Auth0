function callMgtAPI() {
  var url = 'https://<your domain>.auth0.com/api/v2/rules';
  var token = '<your access token>';
  var xhr = new XMLHttpRequest();
  var ruleToClient = {
    association: []
  };
  var recWritten = 0;

  xhr.open('GET', url);

  xhr.setRequestHeader(
          'Authorization',
          'Bearer ' + token
      );

  xhr.onload = function() {
    if (xhr.status == 200) {
      console.log("Auth0 returns rules");
      // rules returned from Auth0
      var ruleObject = JSON.parse(xhr.responseText);

      // loop throught the rules returned from Auth0
      for (var item in ruleObject) {
          rule = ruleObject[item];

          index =  rule.script.indexOf('context.client');
          if (index != -1 ) {
            // 'context.client' is 13 characters and thus move index forward by 13
            var tmpStr = rule.script.substring(index+13);
            clientName = tmpStr.match(/'([^']+)'/)[1];
          }
          else {
            console.log("cannot find client name");
            continue;
          }
          ruleToClient.association.push({
            "rule"       : rule.name,
            "clientName" : clientName
          });
          recWritten++;
      }

      document.open();
      if (recWritten > 0){
        document.write(JSON.stringify(ruleToClient.association));
      }
      else {
        document.write("No rules returned from Auth0\n");
      }
      document.close();
    }
    else {
      alert('Request failed: ' + xhr.statusText);
    }
  };
  xhr.send();
}
