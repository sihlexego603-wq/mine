// Task 1: When the page loads, display a popup alert to welcome the user to the amusement park website
alert("Welcome to FunLand Amusement Park!")

//Task 2: When the user clicks on any ride card, display the background colour of that specific card in an alert. 
$(".ride-card").click(function(){
    let colour=$(this).css("background-color");
    alert("Background colour: "+colour)
});

// Task 3: Show/Hide the Rides section when the 'Toggle Rides' button is clicked
$("#toggleRides").click(function(){
    $("#rides").toggle();
})

//Task 4: When the user double clicks on any game in the list, add another game to the list, with the same formatting. 
$(".game").dblclick(function() {

        $(this).parent().append($("<li></li>").addClass("game").text($(this).text()));
    });

// Task 5: When the 'Highlight Attractions' button is clicked, apply or remove the following formatting to all the ride cards
// formatting: 3px solid #ff6f61 border all around. 
//Each click should toggle the formatting on and off 
$("#highlight").click(function() {
        $(".ride-card").toggleClass("highlighted");
    });

//Task 6: The 'Fade Out Page' button should make the entire page fade out and then fade back in automatically
$("#fadeOut").click(function(){
  $("body").fadeOut().fadeIn();
});

//Task 7: When a user clicks on any ride card, apply a short animation effect to that specific card. 
$(".ride-card").click(function(){
      $(this).animate(
            { 
                width: "+=50px", 
                height: "+=50px" 
            }, 200
        ).animate(
            { 
                width: "-=50px", 
                height: "-=50px" 
            }, 200
        );
    });



//Task 8: When the user hovers over a ride card, temporarily change its background colour. When the mouse leaves, return it to the original colour
$(".ride-card").hover(
        function() {
            $(this).css("background-color", "#ffe0b2"); 
        },
        function() {
            $(this).css("background-color", "");
        }
    );

//Task 9: Clicking the 'BUY Tickets' heading, should replace the heading text with a new message e.g. "Tickets sold out!"
$("#heading").click(function(){
    $(this).html("Tickets sold out!");
})


//Task 10: When the page loads, change the font type and size of all paragraph elements using jQuery. Do not use an ID or class to select the elements.
$(document).ready(function() {
    $("p").css({
        "font-family": "Arial, sans-serif",
        "font-size": "18px"
    });
});

//Task 11: Create your own new function + add a description of what the function does here
//When the user clicks the footer, it quickly fades out and back in twice
 $("footer").click(function() {
        $(this).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
    });

//Task 12: Create your own new function + add a description of what the function does here
 $("#calculate").click(function(){
        // Play a fun sound when calculating tickets
        const audio = new Audio("Sound/cash.mp3");
        audio.play();
    });

//Challenge 1: Write a function that adds logical and appropriate functionality to the 'Shuffle Games' button
$("#shuffleGames").click(function() {
        const gamesList = $("#games ul");
        const games = gamesList.children(".game");
        const shuffled = games.sort(() => Math.random() - 0.5);
        gamesList.append(shuffled);
    });

//Challenge 2: Write a function that adds logical and appropriate functionality to the 'Calculate Total' button
    //Function to calculate total.
function calcTotal(quantity,ticket,count)
{
    let total=ticket*quantity;
    
    
    return{total};
}
document.getElementById("calculate").addEventListener("click",function(){
    //Get values from form inputs
    let quantity=parseInt(document.getElementById("quantity").value);
    let ticket=parseInt(document.getElementById("ticketType").value);
    //calculate total cost
        let final=calcTotal(quantity,ticket);
     
    //display quote
     document.getElementById("total").innerHTML=`Total: R${final.total} `;
});