import './assets/css/style.css';
// 测试git命令 创建分支--------

function component() {
	var element = document.createElement('div');

	element.innerHTML = 'Hello webpack';
	element.classList.add('hello');

	return element;
}

document.body.appendChild(component());