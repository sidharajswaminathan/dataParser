# dataParser

Steps to run this application:
Download the source code from GitHub.
Open node js command prompt and run npm i command.
Run npm start. Now the app is listening to the: 3333 port number.

Postman configuration:
Open postman tool and change method to POST. 
Now add the api endpoints in the url bar and add request body as json object under body.
 
Request Body:
{
  data: “JOHN0000MICHAEL0009994567”
}
 /api/v1/parse – Response Body
  {
    statusCode: 200,
      data: {
        firstName: “JOHN0000”,
        lastName: “MICHAEL000”,
        clientId: “9994567”
      }
  }


/api/v2/parse – Response Body
  {
    statusCode: 200,
      data: {
        firstName: “JOHN”,
        lastName: “MICHAEL”,
        clientId: “999-4567”
      }
  }
 

