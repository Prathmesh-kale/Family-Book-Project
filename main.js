var images= ["https://i.postimg.cc/MKdhy06Z/family.jpg" 
, "https://i.postimg.cc/wjMnFtMX/father.jpg"
, "https://i.postimg.cc/5ymDKL83/bro.jpg"
, "https://i.postimg.cc/JnL6wtrd/sister.jpg"
, "https://i.postimg.cc/bw5W5zSK/mother.jpg"];

var names= ["Family Book" , "Ravindra Kale" , "Prathmesh Kale" , "Tanvi Kale" , "Jayanti Kale"];

var i=0;
function Next()
{
i++;
var 
numbers_of_family_members_in_array = 4 
if (i > numbers_of_family_members_in_array )
{
    i=0;
}
var updatedImages= images[i];
var updatedName= names[i];

document.getElementById("family_image").src= updatedImages;
document.getElementById("family_member_names").innerHTML= updatedName;
}