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

This project required three functions, the setup function, the draw function and the logic function. The variables are “let” at the top, outside of all of the functions. The setup function defines all of the variables, the draw function creates the graphics and the logic function controls how the player interacts with the computer, how the paddle moves and how the ball bounces off of the paddle.

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
