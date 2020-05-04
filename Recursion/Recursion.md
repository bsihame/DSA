==========================Recursion===================

What is Recursion?

recursion is a function that calls itself. Recursion is just another way to create loops.
Anything that can be done iteratively with a for loop or while loop can also be solved with recursion, and vice versa.
The recursive approach seems to be the more simpler and straightforward.


Recursive Approach:

Imagine there is a big box with smaller boxes in it. These smaller boxes can have more smaller boxes in them. Ultimately, there is ONE key hidden away in one of the boxes. Your job is to search and find that key.

Approach:
Look through the box.
If you find a box, go back to Step 1.
If you found the key, then you're done!

The Base Case

 The base case is basically a conditional that tells the function to stop calling itself (the base case is usually just a simple if statement)