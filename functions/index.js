var functions = require('firebase-functions');
var moment = require('moment');
var request = require('request');

exports.squareCreateCustomer = functions.database.ref('/users/{userID}/step2completed')
    .onWrite(event => {
      // Grab the current value of what was written to the Realtime Database.
      console.log('[squareCreateCustomer]', event.params.userID);

      // You must return a Promise when performing asynchronous tasks inside a Functions such as
      // writing to the Firebase Realtime Database.

      var promise = new Promise((resolve, reject) =>{

        event.data.ref.parent.once('value', s => {
          var userData = s.val();

          var dob = userData.dob;
          var email = userData.email;
          var firstName = userData.firstName;
          var lastName = userData.lastName;
          var ipAddress = userData.ipAddress;
          var phone = userData.phone;
          var termsAccepted = userData.termsAccepted;
          var createdAt = userData.createdAt;
          var note = `Customer accepted legal terms on ${userData.createdAt} via IP Address ${userData.ipAddress}.`;
          var step2completed = userData.step2completed;
          var userID = userData.userID;

          var access_token = functions.config().square.token;
          var request_headers = {'Authorization': 'Bearer ' + access_token,
                         'Accept':        'application/json',
                         'Content-Type':  'application/json'}

          var squareJSON = {
            'given_name': firstName,
            'family_name': lastName,
            'email_address': email,
            'phone_number': phone,
            'reference_id': event.params.userID,
            'note': note
          };

          console.log('[squareCreateCustomer] CUSTOMER:', userData.firstName, userData.lastName, userData.email, userData.phone, note);

          if( userData.step2completed ) {

            console.log('Creating Square Customer...');
            request.post({
                url: "https://connect.squareup.com/v2/customers",
                headers: request_headers,
                json: true,   // <--Very important!!!
                body: squareJSON
            }, function (error, response, body){
                console.log('Square Customer Created', error, body);
            });

          } else {
            console.log('Customer has not completed sign up.')
            resolve();
          }

        }); // once value

      }); // promise

      return promise;

    });
