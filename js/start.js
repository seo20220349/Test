import { begin, goNext } from './main.js'

const u_name = document.querySelector('input[type=text]');
const main = document.getElementById('main');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const qna = document.getElementById('qna');
const wrap = document.getElementById('wrap');
const tabletMQL = window.matchMedia("all and (min-width: 768px)");
const pcMQL = window.matchMedia("all and (min-width: 1024px)");

const ENDPOINT = 10;
const select = [];
let qIdx = -1;

const load = () => {
  const msg = document.querySelector('.check-name');
  const start_btn = document.querySelector('.start');

  u_name.addEventListener('blur', () => {
    try {
      if (u_name.value.length < 1) {
        throw '이름을 입력하고 시작해 주세요.';
      }
      msg.innerHTML = '';
    } catch (err) {
      msg.innerHTML = err;
    }
  });

  start_btn.addEventListener('click', () => {
    try {
      if (u_name.value.length < 1) {
        throw '이름을 입력하고 시작해 주세요.';
      }
      msg.innerHTML = '';
      start_btn.disabled = true;
      begin();
    } catch (err) {
      msg.innerHTML = err;
    }
  });
}

window.onload = load();
