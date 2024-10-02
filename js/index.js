"use strict";

/*js実装(ここから下にコードを追加して下さい)*/
//TOPボタン
const pageTopBtn = document.getElementById("page-top");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  console.log(window.scrollY);

  if (scrollY >= 200) {
    pageTopBtn?.classList.add("activ");
  } else {
    pageTopBtn?.classList.remove("activ");
  }
});

pageTopBtn.addEventListener("clicl", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//お問い合わせフォーム
const formEl = document.getElementById("form");

formEl?.addEventListener("submit", (e) => {
  e.preventDefault();
  validationForm();
});

function validationForm() {
  let checkFlug = 1;

  const name = document.getElementById("name");
  const mail = document.getElementById("address");
  const tel = document.getElementById("tel");
  const nameError = document.getElementById("name-error");
  const mailError = document.getElementById("mail-error");
  const telError = document.getElementById("tel-error");
  const terms = document.getElementById("terms");
  const termsError = document.getElementById("terms-error");

  const mailCheck =
    /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
  const telcheck = /^0[789]0-[0-9]{4}-[0-9]{4}$/;

  nameError.textContent = "";
  if (name.value === "") {
    nameError.textContent = "お名前は必須事項です。";
    checkFlug = 0;
  }

  mailError.textContent = "";
  if (mail.value === "") {
    mailError.textContent = "メールアドレスは必須事項です。";
    checkFlug = 0;
  } else if (!mailCheck.test(mail.value)) {
    mailError.textContent = "正しいメールアドレスを入力してください。";
    checkFlug = 0;
  }

  telError.textContent = "";
  if (!tel.value == "" && !telcheck.test(tel.value)) {
    telError.textContent = "正しい番号を入力してください。";
    checkFlug = 0;
  }

  termsError.textContent = "";
  if (!terms.checked) {
    termsError.textContent = "規約の同意は必須です。";
    checkFlug = 0;
  }

  if (checkFlug) {
    const result = window.confirm("この内容で送信しますか？");
    if (result) {
      alert("送信されました。");
    }
  }
}
