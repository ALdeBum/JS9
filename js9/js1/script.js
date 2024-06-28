function validateForm() {
  let errorMessages = [];
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirmPassword').value;
  let gender = document.getElementById('gender').value;
  let specialization = document.getElementById('specialization').value;
  let position = document.getElementById('position').value;

  // Проверка, что все поля заполнены
  if (!username || !password || !confirmPassword || !gender || !specialization || !position) {
      errorMessages.push("Все поля должны быть заполнены.");
  }

  // Проверка длины пароля
  if (password.length < 3 || password.length > 10) {
      errorMessages.push("Длина пароля должна быть от 3 до 10 символов.");
  }

  // Проверка совпадения пароля и подтверждения
  if (password !== confirmPassword) {
      errorMessages.push("Пароль и подтверждение пароля не совпадают.");
  }

  // Отображение ошибок или данных в новом окне
  let errorMessagesDiv = document.getElementById('errorMessages');
  errorMessagesDiv.innerHTML = "";

  if (errorMessages.length > 0) {
      errorMessages.forEach(function (message) {
          let p = document.createElement('p');
          p.textContent = message;
          errorMessagesDiv.appendChild(p);
      });
  } else {
      let newWindow = window.open("", "Registration Data", "width=600,height=400");
      newWindow.document.write("<h2>Введённые данные</h2>");
      newWindow.document.write("<table border='1'><tr><th>Поле</th><th>Значение</th></tr>");
      newWindow.document.write("<tr><td>Логин</td><td>" + username + "</td></tr>");
      newWindow.document.write("<tr><td>Пароль</td><td>" + password + "</td></tr>");
      newWindow.document.write("<tr><td>Пол</td><td>" + gender + "</td></tr>");
      newWindow.document.write("<tr><td>Специализация</td><td>" + specialization + "</td></tr>");
      newWindow.document.write("<tr><td>Должность</td><td>" + position + "</td></tr>");
      newWindow.document.write("</table>");
  }
  function runTest() {
    let userName = prompt("Введите ваше имя:");
    let score = Math.floor(Math.random() * 100) + 1;  // Генерация случайного балла от 1 до 100

    alert("Поздравляем, " + userName + "! Тест сдан на " + score + " баллов.");
}

}
