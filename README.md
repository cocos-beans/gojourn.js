# Gojourn
Gojourn is a text-based adventure game. This means you play it by reading and writing command line responses. Inspired by [Zork I](https://en.m.wikipedia.org/wiki/Zork), it is set in a medieval-era world and follows you, the player, as you save your kingdom from its impending collapse.<br><br>
Gojourn is a reflection of what I did when I first learned programming. Back then I didn't know that much so I just kind of made... these. Really poorly, mind you, and incredibly hard coded. Therefore Gojourn serves as a juxtaposition of my initial knowledge versus my modern knowledge. 

## How it Works
Gojourn implementation is inspired by the Zork Implementation Language, but does not follow the same structure. Characters, locations, items, and more are created by switch-casing variables that are bound to a class instance of whatever object type is needed. This allows for easy development because each object already has its data given to it. For instance, a location may have a name, description, and other locations it's connected to; a character may have a name, description, an inventory, and battle stats; and so on.<br><br>
WARNING: Gojourn is incredibly messy, probably the polar opposite of truncated, and was not written with modification in mind. If you want to work with Gojourn, it's up to you to figure out how it really works.

# TO-DO
- [x] Finish object classes
- [x] Test object classes
- [ ] Finish command checks (no/invalid input/arg count)
- [ ] Finish object & command building
- [ ] Finish dialogue writing
- [ ] Test game & polish
- [ ] Publish
