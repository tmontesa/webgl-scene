CMPT 361: Assignment 3b - WebGL Scene
Timothy James Montesa (301261623)
August 2, 2019

Some notes on modeling:
- I did *NOT* use any 3rd party libraries, including three.js. Everything was done by me.
- I created the models by myself in Blender, exported as OBJ and converted to JSON for parsing.
- The textures that the models use were compiled by myself. I used royalty-free images from pexels.com.
- I did the UV mapping through Blender itself. Tex coords are exported in the OBJ file.
- All blender files are included. I am not good at modeling, I am sorry for my ugly cow.

Some notes on the code:
- I have further abstracted WebGL's functions to make it easier for myself. I apologize if it is difficult to read.
- You can change const FRAMES (in scripts/init.js) to a higher number if the computer cannot handle it! Default is 30.

Some notes on the app itself:
- You are free to walk around using the arrow keys, and move up and down using SPACE and LEFT SHIFT.
- You can change your speed using S.
- You can clip through anything, so there is no collision. It is a static scene that you can walk around.
- Can you find the 3 hidden gem cows? They are cow models that uses the "Gem" texture, and have different material reflection values.
- Chrome works best. If you have the extension "Ghostery", it may deny scripts and break the loop. Please pause Ghostery if you have it.

***** You can change const FRAMES (in scripts/init.js) to a higher number if the computer cannot handle it! Default is 30. *****

Some information were taken from these sources:
- http://www.kamaron.me/ (His model importing and texture mapping tutorials.)
- Class Notes (Chapter 6-9)
- https://www.youtube.com/watch?v=ICBP-7x7Chc (modeling)
- https://www.youtube.com/watch?v=eiDrRa6JvQ0 (uv mapping)
- All previous sources listed in my previous assignments (1, 2, 3a)

You must use a server to run the application (cannot just open HTML file). The shaders, models, and images 
must be imported and most browsers do not allow this due to security concerns.

Or, you may use this Github link to demo it:
https://tmontesa.github.io/webgl-scene/

Thanks and enjoy your day! :-)

                ,              ,
                |\            /|
                \ `-.\ \/ /.-' /
                 \_ /      \ _/
              __.--/ __  __ \--.__                         *
             `\__.| (.    .) |.__/`
                  |    /\    |                      ___       )   *
                   \  |  |  /              ___     /,--.\    ( )
                   |_/    \_|.......---''``   ``-./ |   \\___//
                  /          \                    ` |    '---'
                  \  ^    ^  /                      \
                   \ .-''-._/  ,                     |
                 -.-'``''`` `'<_.-.         /        |
                    |                      |          \
                    |           \          |          |
                     \  \        \          \         |
                      `._\       /          _\       /
                       \  \     /'''---/````  '-.    \
                        \  \   |       \      /  \    |
                        (  (   |        U'U'U'    |   |
                         |  |  |         /  /     |   |
                         |  |  |       _/ .`      /  /
                        _| _|  |      /  (      _/  /
                       /  /   (       ---`     /   (
                       ___|___\                |___\
 

