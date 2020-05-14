function sendEmail(){
    Email.send({
    Host : "smtp.gmail.com",
    Username : "abinjola.binjola@gmail.com",
    Password : "Pashupati@21011993",
    To : 'abinjola.binjola@gmail.com',
    From : "abinjola.binjola@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert("email send successfully")
);
}
