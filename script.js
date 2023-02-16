//your code here
const getUserButton = document.getElementById("getUser");
const fullName=document.getElementById("Name");
const photo = document.getElementById("photo");
const additionalInfo = document.getElementById("additionalInfo");
 getUserButton.addEventListener("click", function(){

	
	 fetch("https://randomuser.me/api/")
	 .then(response=>response.json())
	 
	 .then(data=>{
		 const user = data.results[0];
		 fullName.innerText=user.fullName.first+" "+user.fullName.last;
		 photo.src= user.picture.large;
		 fullName.dataset.age = user.dob.age;
		 fullName.dataset.email = user.email;
		 fullName.dataset.phone = user.phone;
		 additionalInfo.innerText = "";
	 });
 });
const ageButton = document.querySelector('[data-attr ="age"]');
const emailButton = document.querySelector('[data-attr ="email"]');
const phoneButton = document.querySelector('[data-attr ="phone"]');
ageButton.addEventListener("click",function(){
	additionalInfo.innerText = "Age: "+fullName.dataset.age;	
});
emailButton.addEventListener("click",function(){
	additionalInfo.innerText = "Email: "+fullName.dataset.email;	
});
phoneButton.addEventListener("click",function(){
	additionalInfo.innerText = "Phone: "+fullName.dataset.phone;	
});

getUserButton.click();






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