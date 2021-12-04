12/3 End of day notes -- Had a bit of a hickup with the friend I'm building this for. He wasn't available this afternoon to go over thoughts/ideas/desires for the site so I've more or less just been watching videos and looking stuff up. I found a really nice youtube series on React done by Web Dev Simplified. I honestly can't tell if a lot of the things covered will be stuff I would utilize for this particular site, but for the most part all the videos are 10-20 minutes long and he does them in a "follow along" style. There is a big part of me that thinks a more basic html/javascript site could handle what I will end up making, but I really want to use React so that's what I'm going with. Not sure why I thought I would use C# for the backend, but I can't see that being the case at this point. I did also tinker with a drawio but did not get too far. I feel like I'm further along than it actually appears. 

12/3 Lunch commit notes -- In the process of sorting through hand written notes. I already had a dummy site set up and... it's all gone. So this is a new site *linked properly this time* to the repository I'll be using going forward. Still have a fair amount to go over with my friend and then it will be even more writing things down by hand followed by typing them into the computer, but I do think we have a solid framework to build with. My previous layout iteration was better than the one below, but this is the rough concept/MVP. And I probably will ultimately go with the alternative style because I think it will end up being more clean and it will also showcase his actual games more specifically. He MAY also have a lead on an API which would expand the site considerably. If it comes down to my personally making one, I probably won't take a serious look at implimenting one until we cover APIs in two weeks.



Basics of the design figured out. Ideally:

- An image of the arcade space can be used as a background image for the site
- The game cabinets themselves can be hovered over and clicked on to bring up the different site locations

Locations needed:
- An "about" page
- A list of available games that includes:
  - game specs
  - full CRUD for managing games (Authentication?)
- link to Ebay(?)
- link to existing message board/reddit

------

Alternative style (may make more sense actually):
Have all the above functionality housed within a controller above the image
Have all the cabinets clickable, but only bringing up specs for that game individually

This would allow for "list of games" to become far more robust and not limited to availability


![Installation](installation.drawio.png)


