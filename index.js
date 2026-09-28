let userLogin = document.getElementById('userLigin');
let userPassword = document.getElementById('userPassword');

    let userName = [
        { login: "alex_d", password: "Password123!", name: "Алексей" },
        { login: "maria_s", password: "SecurePass456", name: "Мария" },
        { login: "dmitry_g", password: "MySecret789", name: "Дмитрий" },
        { login: "anna_k", password: "PassWord2026", name: "Анна" },
        { login: "me", password: "123", name: "Максим" },
        { login: "sergey_v", password: "StrongPass#321", name: "Сергей" }
    ]

    
function chekUser() {
    const isUser = userName.find(
    userName => userName.login === userLogin.value && userName.password === userPassword.value
    );
    if (isUser) {
    alert(`Привет ${isUser.name}!`);
    let massiv = prompt(`${isUser.name}, введите числа через запятую или пробел:`);

    if (massiv) {
      const numbersInput = massiv
        .split(/[\s,]+/)
        .map(item => Number(item))
        .filter(num => !isNaN(num));

      if (numbersInput.length > 0) {
        const sum = numbersInput.reduce((acc, curr) => acc + curr, 0);
        alert(`Сумма введенных чисел: ${sum}`);
      } else {
        alert("Вы не ввели ни одного числового значения.");
      }
    }
  } else {
    alert("Неверный логин или пароль");
  }
}


userPassword.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    chekUser();
  }
});
userLogin.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    chekUser();
  }
});




