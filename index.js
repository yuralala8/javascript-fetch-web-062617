const app = "I don't do much.";


const token = '66c6d964c74039c4d094c4189add8e3a0d85b678'
fetch('https://api.github.com/user/repos', {
	headers: {
		Authorization: `token ${token}`
	}
}).then(res => res.json()).then(json => console.log(json));
