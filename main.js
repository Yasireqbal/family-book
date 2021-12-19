var images =["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://lh3.googleusercontent.com/proxy/lpOIW0fCCAScVPlwwWqsSSjNJZek1JhOS9fhEuMk8r-EoFL1LmA6_8HDfALgZWyOEsbtKc8f-BVmXhTWU5vdTwrd", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy2j3FeEtP8jtjMU_dCJ92EIEb99NZKnEy_g&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwINK9zGjc_3lfg21BZGgfG2TVu6mrmt8Oow&usqp=CAU"];
           
var names = ["Fmaily Book","RASHID EQBAL","ZOOFIA RAB", "ME/YASIR EQBAL","ASHAZ EQBAL","YAFI EQBAL"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 5
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
} 

