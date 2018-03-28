function callMgtAPI() {
  var url = 'https://vcloudernbeer.auth0.com/api/v2/rules';
  var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik16VXdORGMwTWtaRk4wVTVPVEV4TmtJeE1EVkdNRFJFT0RNd016RkVSakV5TkRSQ1JEYzJSZyJ9.eyJpc3MiOiJodHRwczovL3ZjbG91ZGVybmJlZXIuYXV0aDAuY29tLyIsInN1YiI6Inhnb1FyMTJwT3JzVk1wNEk4STQ4ZkpvWjFFYUpHMzlEQGNsaWVudHMiLCJhdWQiOiJodHRwczovL3ZjbG91ZGVybmJlZXIuYXV0aDAuY29tL2FwaS92Mi8iLCJpYXQiOjE1MjIxNjkxNTUsImV4cCI6MTUyMjI1NTU1NSwiYXpwIjoieGdvUXIxMnBPcnNWTXA0SThJNDhmSm9aMUVhSkczOUQiLCJzY29wZSI6InJlYWQ6Y2xpZW50X2dyYW50cyBjcmVhdGU6Y2xpZW50X2dyYW50cyBkZWxldGU6Y2xpZW50X2dyYW50cyB1cGRhdGU6Y2xpZW50X2dyYW50cyByZWFkOnVzZXJzIHVwZGF0ZTp1c2VycyBkZWxldGU6dXNlcnMgY3JlYXRlOnVzZXJzIHJlYWQ6dXNlcnNfYXBwX21ldGFkYXRhIHVwZGF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgZGVsZXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBjcmVhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOnJ1bGVzX2NvbmZpZ3MgdXBkYXRlOnJ1bGVzX2NvbmZpZ3MgZGVsZXRlOnJ1bGVzX2NvbmZpZ3MgcmVhZDplbWFpbF9wcm92aWRlciB1cGRhdGU6ZW1haWxfcHJvdmlkZXIgZGVsZXRlOmVtYWlsX3Byb3ZpZGVyIGNyZWF0ZTplbWFpbF9wcm92aWRlciBibGFja2xpc3Q6dG9rZW5zIHJlYWQ6c3RhdHMgcmVhZDp0ZW5hbnRfc2V0dGluZ3MgdXBkYXRlOnRlbmFudF9zZXR0aW5ncyByZWFkOmxvZ3MgcmVhZDpzaGllbGRzIGNyZWF0ZTpzaGllbGRzIGRlbGV0ZTpzaGllbGRzIHVwZGF0ZTp0cmlnZ2VycyByZWFkOnRyaWdnZXJzIHJlYWQ6Z3JhbnRzIGRlbGV0ZTpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHVwZGF0ZTpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgZGVsZXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGNyZWF0ZTpndWFyZGlhbl9lbnJvbGxtZW50X3RpY2tldHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgY3JlYXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgZGVsZXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgcmVhZDpjdXN0b21fZG9tYWlucyBkZWxldGU6Y3VzdG9tX2RvbWFpbnMgY3JlYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.b_JvpkIDZSUq_3iX7Q8VkdbJvEe-0WsxOhJLUOsVZLnvtCGw9L2EikdcqCWHedI4YCPTnSrJX0f5sOE_Vb0YghF_VCvnRXWx6YDCoE9AkHUwVa_UmfLVdzBTcyxKTCvo_csfu3RET4G3eZ6WUhirww-YepfsPO_HgeCT73T09vbr9-fm9ggiyoetacZcqEsHrMitnZxYeVni0K1qhBAXjKI1oPr_D_8lVMCMx5-tOPbGAqECDmuUuWyhL2Pi6ItwGe9rOqTNA6gd6rngHhS-5ziBzes2q7d_ZOJb3-wxNfnWIxukjB5KgpG7Lwu130YmyzSx1PJPUxlKecMqGvW4Fw';
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
