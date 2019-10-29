const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default emails => {
  const invalidEmails = emails
    .split(",")
    .map(email => email.trim())
    .filter(email => re.test(email) === false);

  if (invalidEmails.length) {
    return `these emails are invalid : " ${invalidEmails} " make sure there is no comma(",") in the end`;
  }

  return;
};

// console.log(emails);
// console.log(emails.length);
// console.log(
//   "invalidEmails last element",
//   invalidEmails[invalidEmails.length - 1]
// );
// if (invalidEmails[invalidEmails.length - 1] === ",") {
//   invalidEmails.slice(0, -1);
//   invalidEmails = undefined;
//   console.log("invalidEmails", invalidEmails);
// }
// console.log("invalidEmails last element after editng", invalidEmails);
// if (invalidEmails === "") {
//   invalidEmails = null;
// }
