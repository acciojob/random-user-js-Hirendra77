//your code here
const getUserButton = document.getElementById("getUser");
const name=document.getElementById("Name");
const photo = document.getElementById("photo");
const additionalInfo = document.getElementById("additionalInfo");
 getUserButton.addEventListener("click", function(){

	 // const response = await fetch("https://randomuser.me/api/");
	 // if(response){
		//  const data = await response.json();
		//  const user = data.results[0];
		//   name.innerText=user.name.first+" "+user.name.last;
		//  photo.src= user.picture.large;
		//  name.dataset.age = user.dob.age;
		//  name.dataset.email = user.email;
		//  name.dataset.phone = user.phone;
		//  additionalInfo.innerText = "";
	 // }
	 fetch("https://randomuser.me/api/")
	 .then(response=>response.json())
	 .then(data=>{
		 const user = data.results[0];
		 name.innerText=user.name.first+" "+user.name.last;
		 photo.src= user.picture.large;
		 name.dataset.age = user.dob.age;
		 name.dataset.email = user.email;
		 name.dataset.phone = user.phone;
		 additionalInfo.innerText = "";
	 });
 });
const ageButton = document.querySelector('[data-attr ="age"]');
const emailButton = document.querySelector('[data-attr ="email"]');
const phoneButton = document.querySelector('[data-attr ="phone"]');
ageButton.addEventListener("click",function(){
	additionalInfo.innerText = "Age: "+name.dataset.age;	
)};
emailButton.addEventListener("click",function(){
	additionalInfo.innerText = "Email: "+name.dataset.email;	
)};
phoneButton.addEventListener("click",function(){
	additionalInfo.innerText = "Phone: "+name.dataset.phone;	
)};

getUserButton.click();