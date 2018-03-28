# Auth0 sample function

## Purpose

This function calls the Auth0 Management API (v2) to get all the rules that are configured for a tenant/domain and to figure out which client is associated to which rule. Output will be in this form at the webpage: ``` [{"rule":"Whitelist","clientName":"test1"},{"rule":"Allow Access during weekdays for a specific App","clientName":"test2"}]```



## Assumption

This demo function based on the assumption that in the JavaScript snippets in the rule has the client name check in the form of ``` if (context.client === <client name>)```. Function parse specifically for the text **context.client** and then the client name in quotes.

## Modification required
In the beginning of the function there are 2 variables, namely **url** and **token**.

1. The **url** variable points to your organization's management API to returns all the rules defined for you.To use this function in your environment, the domain portion of of the url has to be changed to tailor to your domain such that the rules for your domain will be returned.
2. The **token** variable is specific to you and you should be able to obtain your token at this [Auth0 webpage](https://manage.auth0.com/#/apis/management/explorer).

## Integration

This function is tested with [auth0-javascript-samples/03-Calling-an-API](https://github.com/auth0-samples/auth0-javascript-samples/tree/master/03-Calling-an-API).
