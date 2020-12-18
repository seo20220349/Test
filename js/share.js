const url = 'https://dev-dain.github.io/10-things-test';
const title = '십이간지로 알아보는 연애 유형';
const hash = '%2심리테스트 %23연애테스트 %23십이간지로 알아보는 연애 유형';

function sendKakaoLink() {
	Kakao.Link.sendDefault({
		objectType: 'feed',
		content: {
			title: '십이간지 연애유형',
			description: '#십이간지 #연애유형 #심리테스트 #연애테스트',
			imageUrl:
				'https://twelvelevetype.netlify.app/img/main.png',
			link: {
				mobileWebUrl: 'https://twelvelevetype.netlify.app/',
				webUrl: 'https://twelvelevetype.netlify.app/',
			},
		},
		buttons: [
			{
				title: '테스트 하러가기',
				link: {
					mobileWebUrl: 'https://twelvelevetype.netlify.app/',
					webUrl: 'https://twelvelevetype.netlify.app/',
				},
			},
		],
	});
}

const fb = () => {
  window.open('https://www.facebook.com/sharer/sharer.php?u='
    + url + '&t=' + title + '' + hash,
    'facebooksharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
  return false;
}

const copy = () => {
  const tmp = document.createElement('textarea');
  document.body.appendChild(tmp);
  tmp.value = url;
  tmp.select();
  document.execCommand('copy');
  document.body.removeChild(tmp);
}
