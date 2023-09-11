let index = 0;

const sliderTitle = document.getElementById("sliderTitle");
const sliderDescription = document.getElementById("sliderDescription");
const container = document.getElementById("container");

const buttonLeft = document.getElementById("buttonLeft");
const buttonRight = document.getElementById("buttonRight");

const films = [
	{
		name: "Batman",
		description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam possimus totam quibusdam, unde autem ipsam consectetur magni quidem cum harum fuga minus animi accusantium sit quia adipisci veritatis illum soluta asperiores quod voluptatibus excepturi dicta sapiente. Doloribus aperiam minus dolorum!",
		img: "0",
	},
	{
		name: "Homem Haranha",
		description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam possimus totam quibusdam, unde autem ipsam consectetur magni quidem cum harum fuga minus animi accusantium sit quia adipisci veritatis illum soluta asperiores quod voluptatibus excepturi dicta sapiente. Doloribus aperiam minus dolorum!",
		img: "1",
	},
	{
		name: "Arrow",
		description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam possimus totam quibusdam, unde autem ipsam consectetur magni quidem cum harum fuga minus animi accusantium sit quia adipisci veritatis illum soluta asperiores quod voluptatibus excepturi dicta sapiente. Doloribus aperiam minus dolorum!",
		img: "`2`",
	},
];

const limit = films.length - 1;

function updateSlider() {
  const film = films[index];
  sliderTitle.textContent = film.name;
  sliderDescription.textContent = film.description;
  container.style.backgroundImage = `url(./src/assets/img${film.img}.png)`;
}

updateSlider(); // Coloquei pra vc testar se nao der certo tira. Qnd o site abre não aparece nada nos slides por isso ativar a função aq

buttonRight.addEventListener("click", (e) => {
	index++;

	if(index > limit) {
		index = 0
	}
	console.log(index)	
	
	updateSlider()
})

buttonLeft.addEventListener("click", (e) => {
	index--;

	if(index < 0) {
		index = limit
	}
	

	console.log(index)	
	updateSlider()
})
