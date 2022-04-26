# Javascript projects

These are the projects I made with Javascript.

Bounce: https://editor.p5js.org/Scholarship_Codes/sketches/3GZdrrQaP

Piano tiles: https://editor.p5js.org/Scholarship_Codes/sketches/KPHjnImMm

## Bounce
### Introduction
The purpose of this project is entertainment and the target audience of this is children of my own age (12) as I think that this is the type of game that they would choose to play.

In this game, the player has to use the left and right arrow keys on the keyboard to move a paddle at the bottom of the screen. There is also a ball that moves around the screen. The player has to make the ball bounce off of the paddle. Furthermore, each time the ball bounces off of the paddle, the speed of the paddle increases, the range of speeds the ball could go increases by one but the speed of the ball is random and the score increases by one. However, every time the player misses the ball, the speed of the paddle decreases, the range of speeds the ball can go decreases by one and the score decreases by one. There is no limit to how many points can be scored in a game.

### Project Goals/Requirements
I chose to use Javascript to code this program because it is much quicker than Python to process instructions and it is good for creating simple graphics, which I feel fits the overall aim of this project.

To start the game, the user must firstly click on the screen.

This project required three functions, the setup function, the draw function and the logic function. The variables are declared at the top, outside of all of the functions. The setup function defines all of the variables, the draw function creates the graphics and the logic function controls how the player interacts with the computer, how the paddle moves and how the ball bounces off of the paddle.

### Design
To interact with the program, the player has to use the left and right arrow keys, on the keyboard, in order to move the paddle that appears on the screen therefore there are not any buttons which are visible on the screen.

There is a ball, which is displayed as a circle, which, at the start of each round, appears in the centre of the screen. The ball then moves at a random speed in a random direction. 

The colour blue is used in the background to represent the sky. The colour black is used for the text because it stands out from the colour of the background. The ball is white to resemble a table tennis ball and the paddle is white to keep the number of colours to a minimum. I only used three colours in this project because I wanted to keep the graphics of this game simple to fit with my aim for the project.

The following pseudocode shows how the ball bounces off of the paddle:

      IF ball_x > paddle_x - 60 AND ball_x < paddle_x + 60 THEN
      
         IF ball_y > paddle_y - 30 AND ball_y < paddle_y + 30 THEN
         
            score = score + 1
            
            set_speed = set_speed + 0.5
            
            ball_speed_x = random set_speed
            
            ball_speed_y = random set_speed
            
            ball_speed_y = ball_speed_y * -1
            
            IF score > 0 THEN
            
               paddle_speed = paddle_speed + 0.5
               
            END IF
            
         END IF
         
      END IF

The following pseudocode shows how the paddle moves:

      IF left_arrow key is down THEN
      
         paddle_x = paddle_x - paddle_speed
         
      END IF

      IF right_arrow key is down THEN
      
         paddle_x = paddle_x + paddle_speed
         
      END IF

### Issues during the project and how I resolved them
Whilst I was coding this project, I encountered an issue where the ball would go through parts of the paddle. Moreover, the ball would occasionally become stuck inside of the paddle due to it continuously bouncing off of either side of the paddle. I resolved this issue by changing the maths that controlled the ball bouncing off of the paddle so that it would bounce off of the whole paddle instead of just the centre.

Additionally, there was an issue with how the ball appeared to be moving. Before I fixed the issue, the ball would not move in neat lines but would move randomly across the screen without hitting the edges and changing speed a lot. I resolved this by only changing the ball speed so that it would only change once the player had hit it. The reason that the ball would move randomly across the screen was because I had allowed it to change between positive and negative speeds without hitting anything.

### Testing Phase
I tested this project on my peers in my ICT lesson by asking them to play the game. I told them how to move the character and what to do to score points.

I received feedback saying that the ball moved too slowly at the start of the game. I resolved this by changing the speed of the ball to make it faster. I also received feedback saying that the paddle would move too slowly at the start of the game. I resolved this in the same way that I resolved the other issue which was by changing the speed to make the paddle move more quickly.

I then tested this project again and received no negative feedback.

### Evaluation
I think that this project went well because it fulfilled my expectations and has been successful in achieving the aim for this project. I also feel that this project went well because my target audience responded positively to the completed project. The difficulties I encountered with this project were solved quite easily as well. 

If I were to do this project again, I would put instructions for how to play on an instruction screen inside the game so that I would not have to explain how to play. Therefore, anyone would be able to play the game.

## Piano Tiles

### Introduction
I made the first version of this game whilst I was doing a computing course. However, since then, I have added new features such as levels, sound effects, an option to use the keyboard instead of the mouse and a high score.

The game is played by the user clicking on the black tiles which are displayed on the screen. Every time a tile is clicked, the user gains a point.

This project consists of infinite levels, the player moves onto the next level by scoring fifty points. The game ends if the player clicks on a white tile.

### Project Goals/Requirements
I chose to code this project using Javascript because I thought that it would be a good way to display the graphics. Additionally, I decided to use Javascript because it is a programming language which is much faster than python to process instructions.

Once the game is started, instructions are printed in the console telling the user how to play the game.

To play, the user must click the lowest black tile. The user may need to scroll down to see it. Every tile clicked adds one to the score. If the user clicks a white tile then the game is over. After the user has clicked on a tile, you can use the keys '1', '2', '3' and '4' on the keyboard. Any other keys pressed will result in the game being lost. The user must get to fifty points on level one to beat the level.

In this project, one function which I used was the “handleState” function, which handled whether the game was being played or not, and if it was not being played, whether it was won, lost or had not been started.

Additionally, I also used a “mousePressed” function, which controls the logic determining which tile has been clicked, as well as a “keyPressed” function, which checks whether the key pressed corresponds to the black tile or not.

The end purpose of the project is to provide entertainment and the target audience for this game is children my age (12).

### Design
This program has a graphical user interface, the user interacts with the computer by either clicking on the black tiles or using the keys ‘1’, ‘2’, ‘3’ and ‘4’ on the keyboard. If either a white tile is clicked, if a key other than those mentioned above is pressed or the wrong key is pressed the game is over and a red end screen appears with text on displaying the length of the game, that the game is over, how many tiles were clicked and what the high score for that player is. The game then automatically restarts. However, if the user scores fifty points, a green winning screen appears and the user then progresses to the next level.

Once the game has been started, four tiles are displayed on the screen, three are white and one is black. 

For the tiles, I chose the colours white and black to resemble the white and black keys on a piano. For the losing screen, I chose the colour red to represent loss and I used the colour green for the winning screen as it is the opposite of red as well as it being a colour which is traditionally associated with winning and success.

Below is an extract of pseudocode showing what happens when the ‘1’ key on the keyboard is pressed:

      FUNCTION keyPressed:

        IF key == 1 THEN

          tile = getClickedTile(26, y (a coordinate where tile one is))

        END IF 

      END FUNCTION

### Issues during the project and how I resolved them
Firstly, there was an issue which I had whilst creating this project that levels would not work. Whenever the correct amount of points to progress to the next level were collected, the winning end screen would not show. I discovered that the cause of the issue was  the variable “winning_score” being assigned twice, each time with a different value. I solved this by deleting the variable which was having the wrong value assigned to it.

There was also an issue when I tried to add the feature of having the option to use a keyboard in the game. The issue meant that the keyboard could not be used. The wrong coordinates were assigned to each key that could be used. I discovered this by using the Javascript feature “console.log” to print the coordinates of the mouse when a tile was pressed and comparing it to the coordinates assigned to the keys. I then replaced the incorrect values with correct ones.

### Testing Phase
I tested my project on my peers during my ICT lesson in school. I ran the game for them and then allowed them to play.

My target audience responded mostly positively but recommended that I add a feature which would enable the user to use the keyboard, which there was not at the time. I then added this feature before testing my game again in the same way and then receiving no negative feedback.

### Evaluation
I feel that this project went well as it has been successful in appealing to my target audience. I also feel as if this was successful as although I encountered difficulties such as levels and the keyboard not working I resolved them and this resulted in a completed game. 
