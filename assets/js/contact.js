function getData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  console.log(name, email, phone, subject, message);

  if (name == "") {
    return alert("Name cannot be empty");
  } else if (email == "") {
    return alert("Email cannot be empty");
  } else if (phone == "") {
    return alert("Phone Number cannot be empty");
  } else if (subject == "") {
    return alert("Subject cannot be empty");
  } else if (message == "") {
    return alert("Message cannot be empty");
  }

  const emailReceiver = "wiliam0@gmail.com";

  let mail = document.createElement("a");
  mail.href = `mailto:${emailReceiver}?Subject=${subject}&body=Nama: ${name}%0D%0AEmail: ${email}%0D%0ANo. Telepon: ${phone}%0D%0ASubjek: ${subject}%0D%0APesan: ${message}`;
  mail.click();

  let data = {
    name,
    email,
    phone,
    subject,
    message,
  };

  console.table(data);
}
