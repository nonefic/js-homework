const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const userEmailInput = document.querySelector("#userEmail");
const userPasswordInput = document.querySelector("#userPassword");
const submit = document.querySelector("#button-login");

userEmailInput.addEventListener("input" && "click", handleCheckEmail);

function handleCheckEmail() {
  if (emailReg(this.value)) {
    console.log("성공");
    userEmailInput.classList.remove("is--invalid");
  } else {
    console.log("실패");
    userEmailInput.classList.add("is--invalid");
  }
}
userPasswordInput.addEventListener("input" && "click", handleCheckPassword);

function handleCheckPassword() {
  if (pwReg(this.value)) {
    console.log("성공");
    userPasswordInput.classList.remove("is--invalid");
  } else {
    console.log("실패");
    userPasswordInput.classList.add("is--invalid");
  }
}

submit.addEventListener("click", handleSubmit);
function handleSubmit(e) {
  if (emailReg(this.value) === user.id && pwReg(this.value) === user.pw) {
    window.location.href = "welcome.html";
    e.preventDefault();
  }

  //<submit> 태그는 그 태그의 값을 전송하면서 해당 페이지를 새로고침 하는 기능을 갖고있음
  //그기능을 인위적으로 막을때 사용
}
