# JavaScriptHW3

I present you my JavaScript Password Generator.

Here is my deployed link : https://youjmi.github.io/JavaScriptHW3/

When you first click Generate Password, the first prompt is on a while loop which eliminates any option of putting an incorrect value until the correct one is added. If an incorrect value is added, it will be constant loop until its given a reason to stop and move to the next. After passing the while loop with the correct value, then it will move to the additional prompts with no error. 

My biggest difficulty while doing this homework was able to ensure that every option that was selected is to be applied to the final result. After I finished the basic skeleton and fiddled around with it, the generated password was just spitting out what was chosen with a 40% chance of not guaranteeing the options that were actually selected if I chose a small value like 8 characters. There is a higher chance of getting all the chosen selections with a higher character count, but I did not want that to be the only solution. Then I created a new string and applied random selections per each option to store it and then regurgitate the stored selected options to the final equation. By doing this, it pushes the guaranteed selections and ultimately presents any chosen selected option to be included in the final outcome. 

Another issue I had, was seeing too many commas in my generated password. This was due to me using the split method instead of typing out every character individually into an array. Without submitting to defeat, I utilized .join to help eliminate my previous issue.  

With all that cleared up, my JS is running the way that I think it should be. 



I would like to give special acknowledgment to Saveliy Samoylov the TA for his feedback and assistance. I would also like to give special acknoledgement to my team as well: Frankie, Amir, Johnnie, and Beatrice for their support, feedback, and brainstorming ideas. Here for their githubpages.

Frankie: https://github.com/Franciscorosado09
Amir: https://github.com/Alexfit4
Johnnie:https://github.com/balokdecoy
Beatrice:https://github.com/beatricellingson
