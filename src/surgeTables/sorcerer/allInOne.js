const allInOne = [
  "Roll on this table at the start of each of your turns for the next minute, ignoring this result on subsequent rolls.",
  "Immediately roll twice on this table.",
  "For the next minute, you can see any invisible creature if you have line of sight to it.",
  "You cast Speak with Animals.",
  "A modron chosen and controlled by the DM appears in an unoccupied space within 5 feet of you, then disappears 1 minute later.",
  "A mephit chosen and controlled by the DM appears in an unoccupied space within 5 feet of you, then disappears 1 minute later.",
  "You cast Fireball as a 3rd-level spell centered on yourself.",
  "You cast Ice Storm as a 4th-level spell centered on yourself.",
  "You cast Magic Missile as a 5th-level spell.",
  "You cast Scorching Ray as a 5th-level spell.",
  "Roll a d10. Your height changes by a number of inches equal to the roll. If the roll is odd, you shrink. If the roll is even, you grow.",
  "For the next hour, your eyes and veins shed bright light in a 20-foot radius and dim light for an additional 20 feet.",
  "You cast Confusion centered on yourself.",
  "You cast Plant Growth centered on yourself.",
  "For the next minute, you regain 5 hit points at the start of each of your turns.",
  "You cast Aura of Life.",
  "You grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode out from your face.",
  "A daisy sprouts from your head. It may be pruned without harm.",
  "You cast Grease centered on yourself.",
  "You cast Faerie Fire centered on yourself.",
  "Creatures have disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw.",
  "You have a brief vision of the future. Roll a d20 and record the number rolled. Once in the next hour, you can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with the foretelling roll. You must choose to do so before the roll, and you can replace a roll in this way only once per turn.",
  "Your skin turns a vibrant shade of blue. A Remove Curse spell can end this effect.",
  "You become unable to turn left. A Remove Curse spell can end this effect.",
  "An eye appears on your forehead for the next hour. During that time, you have advantage on Wisdom (Perception) checks that rely on sight.",
  "A glimpse of the future gives you advantage on the next saving throw you make.",
  "For the next minute, all your spells with a casting time of 1 action have a casting time of 1 bonus action.",
  "You cast Haste on yourself.",
  "You teleport up to 60 feet to an unoccupied space that you can see.",
  "You cast Thunder Step as a 3rd-level spell.",
  "You are transported to the Astral Plane until the end of your next turn, after which time you return to the space you previously occupied or the nearest unoccupied space if that space is occupied.",
  "You switch positions with the target immediately after the effects of the spell occurs. If the spell was an area effect, you switch positions with the target closest to you within the effect of the spell.",
  "Maximize the damage of the next damaging spell you cast within the next minute.",
  "For the next minute, when you roll damage for each spell you cast on your turn, you add one additional damage die.",
  "Roll a d10. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older.",
  "You take no action on your next turn. Instead, you vomit 1d100 gold pieces.",
  "1d6 flumphs controlled by the DM appear in unoccupied spaces within 60 feet of you and are frightened of you. They vanish after 1 minute.",
  "A pseudodragon controlled by the DM appear in an unoccupied space within 5 feet of you, then disappears 1 minute later.",
  "You regain 2d10 hit points.",
  "You cast Healing Word as 2nd-level spell.",
  "You turn into a potted plant until the start of your next turn. While a plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts.",
  "You turn into a harmless, affectionate critter for 1d4-1 (minimum of 1) rounds. While an animal you have a movement speed of 15ft and vulnerability to all damage. If you drop to 0 hit points your form reverts.",
  "For the next minute, you can teleport up to 20 feet as a bonus action on each of your turns.",
  "Spider legs sprout from your back, giving you a climbing speed of 20 ft. The legs remain in place for one hour.",
  "You cast Levitate on yourself.",
  "You cast Freedom of Movement on yourself.",
  "A unicorn controlled by the DM appears in a space within 5 feet of you, then disappears 1 minute later. controlled by the DM appears in a space within 5 feet of you, then disappears 1 minute later.",
  "A couatl controlled by the DM appears in a space within 5 feet of you, then disappears 1 minute later.",
  "You can't speak for the next minute. Whenever you try, pink bubbles float out of your mouth.",
  "You're deafened for the next minute. For this duration, green smoke pours out from your ears.",
  "A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to Magic Missile.",
  "A Wall of Fire encircles you as a 4th-level spell. You are on the side that takes no damage.",
  "You are immune to being intoxicated by alcohol for the next 5d6 days.",
  "You cast Create Food and Water.",
  "Your hair falls out but grows back within 24 hours.",
  "You shoot eight non-poisonous snakes from your fingertips.",
  "For the next minute, any flammable object you touch that isn't being worn or carried by another creature bursts into flame.",
  "For the next minute, any organic material you touch decays. Food spoils, plants wilt, etc. If you hit a creature with an unarmed strike, you deal an additional 1d4 necrotic damage to it.",
  "You regain your lowest-level expended spell slot.",
  "All silver you are carrying is now gold.",
  "For the next minute, you must shout when you speak.",
  "An illusory image of you is left where you are right now. This can be dispelled with a Dispel Magic spell.",
  "You cast Fog Cloud centered on yourself.",
  "You cast Darkness centered on yourself.",
  "Up to three creatures you choose within 30 feet of you take 4d10 lightning damage.",
  "You breathe a cone of Dragon's Breath as a 2nd-level spell the next time you try to speak.",
  "You are frightened by the nearest creature until the end of your next turn.",
  "You are entombed in crystal, which shatters at the end of your next turn. You gain 50 temporary hit points and you are considered petrified. These effects, including any remaining temporary hit points, all end when the crystal shatters.",
  "Each creature within 30 feet of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell.",
  "For the next minute, creatures within 30 feet of you can't see further than 30 feet away.",
  "You gain resistance to all damage for the next minute.",
  "You cast Warding Wind.",
  "A random creature within 60 feet of you becomes poisoned for 1d4 hours.",
  "A random creature within 60 ft. of you falls asleep for 1d4 rounds or until they take damage. While asleep they are unconscious. A creature is not affected if magic cannot force them to sleep.",
  "You glow with bright light in a 30-foot radius for the next minute. Any creature that ends its turn within 5 feet of you is blinded until the end of its next turn.",
  "You cast Colour Spray as a 1st-level spell.",
  "You cast Polymorph on yourself. If you fail the saving throw, you turn into a sheep for the spell's duration.",
  "You cast Flesh to Stone on yourself.",
  "Illusory butterflies and flower petals flutter in the air within 10 feet of you for the next minute.",
  "Illusory rain and autumn leaves fall to the floor and then vanish within 10 feet of you for the next minute.",
  "You can take one additional action immediately.",
  "If the spell requires concentration, you automatically succeed on all saving throws to maintain it, otherwise it's duration is doubled. If it's instantaneous, it's immediately recast on the same target.",
  "Each creature within 30 feet of you takes 1d10 necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt.",
  "You cast Thunderwave as a 1st-level spell.",
  "You cast Mirror Image.",
  "You cast Blur.",
  "You cast Fly on a random creature within 60 feet of you.",
  "You cast Reverse Gravity centered on yourself.",
  "You become invisible for the next minute. During that time, other creatures can't hear you. The invisibility ends if you attack or cast a spell.",
  "You cast Blink.",
  "If you die within the next minute, you immediately come back to life as if by the Reincarnate spell.",
  "You regain all expended Hit Dice.",
  "Your size increases by one size category for the next minute.",
  "Your size decreases by one size category for the next minute.",
  "You and all creatures within 30 feet of you gain vulnerability to piercing, slashing, or bludgeoning damage for the next minute.",
  "All weapons within 30 ft. of you turns into food for the next minute.",
  "You are surrounded by faint, ethereal music for the next minute.",
  "Gentle gusts of wind blows outward from you for the next minute. All creatures within 40 feet can feel it, but otherwise does nothing.",
  "You regain all expended sorcery points.",
  "For 1 minute, an illusory duplicate of yourself under your control appears on an open space nearest to you. The duplicate takes actions independently, but shares your initiative, health pool, sorcery points, and spell slots. Any resources expended by the duplicate is also expended for you.",
  "A sharp cold runs through your mind. Your veins glow blue for a brief moment, as the cold forces you to calm and focus your sorcerous energy. You regain a 2nd-level or 2 1st-level spell slots (your choice).",
  "You cast the Armor of Agathys spell on yourself at 3rd-level.",
  "Your fingers and toes become webbed for the next 1d6 days. During this time, you gain a swimming speed equal to your walking speed. If you already have a swimming speed, it is doubled.",
  "You are unable to speak for the next 1d10 minutes as your mouth freezes shut with ice.",
  "Your skin becomes covered in a thin layer of rime and for the next 24 hours, you become resistant to Slashing, Piercing, and Cold damage. However, you become vulnerable to Bludgeoning and Fire damage.",
  "You summon a Water Elemental (controlled by the DM) within 10 feet of you in an unoccupied space. Roll 1d100. On an even number, the elemental is friendly towards you and your allies. On an uneven number, the elemental is hostile towards you and your allies.",
  "1d6 discs of ice appear in your hands. You can throw the discs at a target, using your spell attack bonus to make an attack with the disc. Upon impact, a disc deals 2d6 slashing damage and 2d6 cold damage. The discs last for 1d4 hours and shatter upon impact with a target.",
  "You cast Fog Cloud centered on yourself.",
  "For the next 1d10 minutes, all spells you cast that deal either acid, fire, lightning, poison or thunder damage instead deal cold damage.",
  "You cast Polymorph on the creature closest to you. If they fail the saving throw, you turn them into a white raven with ice blue eyes.",
  "Your skin becomes wet and slippery for the next 1d4 hours. During this time, you have advantage on all checks made to escape a grapple. Additionally, you have advantage on Dexterity saving throws.",
  "You cast the Hold Person spell on the creature closest to you. If they fail their saving throw, you freeze them solid for the duration of the spell. While frozen solid, they are still under the effects of the spell, but have resistance to fire damage.",
  "For the next 1d4 hours, you can cast the Stone Shape spell without expending a spell slot. However, you cannot manipulate stone with the spell - only ice and snow.",
  "You become the personification of frost for the next 2d4 days. During this time, whenever you touch another creature, they take 1d6 cold damage.",
  "It begins to snow in a 30 foot radius centered on you for the next hour.",
  "You stink heavily of fish and salt for the next 1d6 days.",
  "A freezing chill runs through your body and freezes you to the bone. You take 2d8 cold damage and your movement is halved for the next 1d6 hours.",
  "A cloak of dark ice and rime wraps around you. You gains the benefits of the Pass Without Trace spell for the next hour.",
  "You cast Wall of Water directly in front of you. The wall is 30 feet long, 10 feet high and 1 foot thick.",
  "Choose a creature. For the next hour, that creature can switch between their normal body and a mist-like form as if under the effects of the Gaseous Form spell.",
  "You cast the Slow spell centered on yourself.",
  "Fish-like gills appear alongside your neck. For the next 1d4 hours, you can breathe underwater.",
  "Your hands become covered in slick ice. You have disadvantage on all Sleight of Hand checks and Dexterity saving throws for the next hour.",
  "Your eyes become piercing blue for the next 1d4 days. You gain advantage on all Intimidation checks for this duration.",
  "You cast the Cone of Cold spell at 5th level. Treat yourself as being within the spell's area of effect.",
  "Your skin turns blue and you grow a mighty beard that would make a frost giant jealous. A remove curse spell can end this effect.",
  "Your body becomes icy cold. For the next 1d8+2 days, you gain resistance to cold damage.",
  "For the next hour, you can only speak Aquan. Additionally, the only spells you can cast, which require a verbal component, are the ones dealing cold damage or able to manipulate water or ice.",
  "An ice spike protrudes from your chest and explodes - damaging only you. You take 2d12 cold damage and absorb the power of the raw magic, regaining 1d4 Sorcery points.",
  "You summon a shield of ice, circling around you for the next 10 minutes. During this time, you gain a +2 to bonus to your AC.",
  "Your eyes become covered in a thick fog. You're considered Blinded as if affected by the Blindness/Deafness spell for the next 1d4 minutes.",
  "You cast Polymorph on yourself. If you fail the saving throw, you turn into a Winter Wolf for the spell's duration.",
  "All non-magical liquids on and around you in a 10 foot radius freezes solid.",
  "You emit an explosion of hail around you in a 20 foot radius. All creatures within range must make a Dexterity saving throw DC 16. On a failure, the creature takes 1d10 piercing damage and 1d10 cold damage. On a success, the creature takes half damage.",
  "You can cast the Control Water spell without expending a spell slot once within the next 24 hours.",
  "You summon a spear of ice. You can throw the spear to cast Ice Knife as a 3rd level spell.",
  "You cast the Arms of Hadar spell as a 2nd-level spell. Instead of necrotic damage, the spell deals cold damage and the tendrils resemble that of an octopus.",
  "All living creatures around you in a 20 foot radius have their bodily warmth drained from them, dealing 2d6 cold damage to all creatures in the radius (except you). You, on the other hand, feel warm and comfortable. You regain hit points equal to half the sum of the cold damage dealt.",
  "Long, jagged icicles grow out of your fingernails. For the next hour, you can use a bonus action to hurl an icicle, casting Ice Knife as a 1st-level spell.",
  "Your skin is covered with runes in Giant - all the runes are different words for ice and frost. For the next 10 minutes, your melee weapon attacks deal an additional 1d6 cold damage.",
  "All creature within 30 feet of you must make a Wisdom saving throw against your spell DC. If they fail, they see you as a powerful, icy god(dess) of wrath and winter and become frightened by you for 1 minute. On a success, a creature is unaffected.",
  "Your muscles freeze in place. Small patterns on rime begin to form on your body. For the next 1d4 hours, your movement speed is halved, but your AC is increased by 2.",
  "You change the weather in a 1 mile radius centered on you. Roll 1d100. On an even number, it begins to rain. On an uneven number, it begins to snow. Regardless of the outcome, the area around you is considered lightly obscured. This effect lasts for 2d12 hours.",
  "Your hands and feet become covered in a thin layer of sticky liquid. You are under the effects of the Spider Climb spell for the next 10 minutes.",
  "You cause hoarfrost to appear on your surroundings (including equipment) in a 30 foot radius around you. This lasts for 1 hour or until removed manually.",
  "You cast Sleet Storm centered on yourself.",
  "You cast the Bones of the Earth spell as a 6th level spell, but the pillars are made of ice. One of the pillars must be under you.",
  "You freeze part of the blood in the creature closest to you. They take 2d10 cold damage and have disadvantage on Strength and Dexterity checks and saving throws for the next 10 minutes or until healed by a spell.",
  "You summon a huge block of ice that falls directly down on you. Each creature within 5 feet of you (including you) must succeed on a Dexterity saving throw against your spell DC, or take 4d10 cold damage. On a success, the damage is reduced to half.",
  "Roll twice on this table and resolve both effects.",
  "A sharp cold runs through your mind. Your veins glow blue for a brief moment, as the cold forces you to calm and focus your sorcerous energy. You regain a 2nd-level or 2 1st-level spell slots (your choice).",
  "You cast the Armor of Agathys spell on yourself at 3rd-level.",
  "Your fingers and toes become webbed for the next 1d6 days. During this time, you gain a swimming speed equal to your walking speed. If you already have a swimming speed, it is doubled.",
  "You are unable to speak for the next 1d10 minutes as your mouth freezes shut with ice.",
  "Your skin becomes covered in a thin layer of rime and for the next 24 hours, you become resistant to Slashing, Piercing, and Cold damage. However, you become vulnerable to Bludgeoning and Fire damage.",
  "You summon a Water Elemental (controlled by the DM) within 10 feet of you in an unoccupied space. Roll 1d100. On an even number, the elemental is friendly towards you and your allies. On an uneven number, the elemental is hostile towards you and your allies.",
  "1d6 discs of ice appear in your hands. You can throw the discs at a target, using your spell attack bonus to make an attack with the disc. Upon impact, a disc deals 2d6 slashing damage and 2d6 cold damage. The discs last for 1d4 hours and shatter upon impact with a target.",
  "You cast Fog Cloud centered on yourself.",
  "For the next 1d10 minutes, all spells you cast that deal either acid, fire, lightning, poison or thunder damage instead deal cold damage.",
  "You cast Polymorph on the creature closest to you. If they fail the saving throw, you turn them into a white raven with ice blue eyes.",
  "Your skin becomes wet and slippery for the next 1d4 hours. During this time, you have advantage on all checks made to escape a grapple. Additionally, you have advantage on Dexterity saving throws.",
  "You cast the Hold Person spell on the creature closest to you. If they fail their saving throw, you freeze them solid for the duration of the spell. While frozen solid, they are still under the effects of the spell, but have resistance to fire damage.",
  "For the next 1d4 hours, you can cast the Stone Shape spell without expending a spell slot. However, you cannot manipulate stone with the spell - only ice and snow.",
  "You become the personification of frost for the next 2d4 days. During this time, whenever you touch another creature, they take 1d6 cold damage.",
  "It begins to snow in a 30 foot radius centered on you for the next hour.",
  "You stink heavily of fish and salt for the next 1d6 days.",
  "A freezing chill runs through your body and freezes you to the bone. You take 2d8 cold damage and your movement is halved for the next 1d6 hours.",
  "A cloak of dark ice and rime wraps around you. You gains the benefits of the Pass Without Trace spell for the next hour.",
  "You cast Wall of Water directly in front of you. The wall is 30 feet long, 10 feet high and 1 foot thick.",
  "Choose a creature. For the next hour, that creature can switch between their normal body and a mist-like form as if under the effects of the Gaseous Form spell.",
  "You cast the Slow spell centered on yourself.",
  "Fish-like gills appear alongside your neck. For the next 1d4 hours, you can breathe underwater.",
  "Your hands become covered in slick ice. You have disadvantage on all Sleight of Hand checks and Dexterity saving throws for the next hour.",
  "Your eyes become piercing blue for the next 1d4 days. You gain advantage on all Intimidation checks for this duration.",
  "You cast the Cone of Cold spell at 5th level. Treat yourself as being within the spell's area of effect.",
  "Your skin turns blue and you grow a mighty beard that would make a frost giant jealous. A remove curse spell can end this effect.",
  "Your body becomes icy cold. For the next 1d8+2 days, you gain resistance to cold damage.",
  "For the next hour, you can only speak Aquan. Additionally, the only spells you can cast, which require a verbal component, are the ones dealing cold damage or able to manipulate water or ice.",
  "An ice spike protrudes from your chest and explodes - damaging only you. You take 2d12 cold damage and absorb the power of the raw magic, regaining 1d4 Sorcery points.",
  "You summon a shield of ice, circling around you for the next 10 minutes. During this time, you gain a +2 to bonus to your AC.",
  "Your eyes become covered in a thick fog. You're considered Blinded as if affected by the Blindness/Deafness spell for the next 1d4 minutes.",
  "You cast Polymorph on yourself. If you fail the saving throw, you turn into a Winter Wolf for the spell's duration.",
  "All non-magical liquids on and around you in a 10 foot radius freezes solid.",
  "You emit an explosion of hail around you in a 20 foot radius. All creatures within range must make a Dexterity saving throw DC 16. On a failure, the creature takes 1d10 piercing damage and 1d10 cold damage. On a success, the creature takes half damage.",
  "You can cast the Control Water spell without expending a spell slot once within the next 24 hours.",
  "You summon a spear of ice. You can throw the spear to cast Ice Knife as a 3rd level spell.",
  "You cast the Arms of Hadar spell as a 2nd-level spell. Instead of necrotic damage, the spell deals cold damage and the tendrils resemble that of an octopus.",
  "All living creatures around you in a 20 foot radius have their bodily warmth drained from them, dealing 2d6 cold damage to all creatures in the radius (except you). You, on the other hand, feel warm and comfortable. You regain hit points equal to half the sum of the cold damage dealt.",
  "Long, jagged icicles grow out of your fingernails. For the next hour, you can use a bonus action to hurl an icicle, casting Ice Knife as a 1st-level spell.",
  "Your skin is covered with runes in Giant - all the runes are different words for ice and frost. For the next 10 minutes, your melee weapon attacks deal an additional 1d6 cold damage.",
  "All creature within 30 feet of you must make a Wisdom saving throw against your spell DC. If they fail, they see you as a powerful, icy god(dess) of wrath and winter and become frightened by you for 1 minute. On a success, a creature is unaffected.",
  "Your muscles freeze in place. Small patterns on rime begin to form on your body. For the next 1d4 hours, your movement speed is halved, but your AC is increased by 2.",
  "You change the weather in a 1 mile radius centered on you. Roll 1d100. On an even number, it begins to rain. On an uneven number, it begins to snow. Regardless of the outcome, the area around you is considered lightly obscured. This effect lasts for 2d12 hours.",
  "Your hands and feet become covered in a thin layer of sticky liquid. You are under the effects of the Spider Climb spell for the next 10 minutes.",
  "You cause hoarfrost to appear on your surroundings (including equipment) in a 30 foot radius around you. This lasts for 1 hour or until removed manually.",
  "You cast Sleet Storm centered on yourself.",
  "You cast the Bones of the Earth spell as a 6th level spell, but the pillars are made of ice. One of the pillars must be under you.",
  "You freeze part of the blood in the creature closest to you. They take 2d10 cold damage and have disadvantage on Strength and Dexterity checks and saving throws for the next 10 minutes or until healed by a spell.",
  "You summon a huge block of ice that falls directly down on you. Each creature within 5 feet of you (including you) must succeed on a Dexterity saving throw against your spell DC, or take 4d10 cold damage. On a success, the damage is reduced to half.",
  "Roll twice on this table and resolve both effects.",
  "Roll 1d20. On an even number, you become a mouse with a fur of moss with a vine as tail. On an uneven number, you become an indigo Faerie Dragon. This lasts for 1d4 hours or until your form drops to 0 hit points.",
  "A pair of transparent, glass-like fairy wings appear on your back. You are under the effects of the Fly spell for the next 10 minutes. Every time you cast a spell, the wings flash with a light in a matching color.",
  "Your arms are replaced with vines. You can't perform spells that require a somatic component or carry a weapon. However, your unarmed attacks are replaced by the Grasping Vine spell. This lasts for 10 minutes.",
  "Clusters of goodberries (as from the Goodberry spell) appear along your arms. A total of 2d10+4 berries grow there until harvested or until 1 hour has passed.",
  "You summon a confused Owlbear. After 10 minutes, there's a loud pop and it disappears again.",
  "You switch positions with a random creature within 60 feet of you. As it happens, you both disappear in a puff of pink smoke.",
  "A blue cloud appears over your head and follows you for the next hour. For this duration, the cloud rains colorful confetti and sparkles on you.",
  "Roll 1d100. On an even number, you summon a Pixie and on an uneven number, you summon a Sprite. Regardless of the creature, it's loyal to you and your allies. It disappears after 1 hour or if reduced to 0 hp.",
  "2d10 gold pieces fly from your hands and hit the nearest creature to you. The coins deal 1 bludgeoning damage per gold piece, and you're able to pick them up afterwards.",
  "You grow a beard of moss and leaves. It lasts for 1d4 days or until you sneeze loudly.",
  "A pair of large rabbit ears replace your own ears for 1 hour. You have advantage on all Perception checks relying on hearing.",
  "Every time you attempt to speak, bubbles float out of your mouth instead. When the bubbles are popped, loud opera music can be heard within 100ft of you. This lasts for 2d10 minutes.",
  "Your size is reduced to Tiny for the next 2d10 minutes.",
  "Ethereal voices compliment you loudly every time you perform magic for the next 1d4 hours.",
  "You summon 1d4 Giant Toads who will protect you from anything for the next 2d10 minutes. The Toads each want to be your favorite and if there is no other threat to you will fight each other to be the last one standing.",
  "An eye suddenly appears in the back of your neck. It lasts for 24 hours and you can't be surprised for this duration.",
  "A warm breeze embraces you. You are healed 2d8 hit points.",
  "You cast the Faerie Fire spell centered on yourself. The area of effect for this spell is a 15ft radius, instead of a 20ft cube.",
  "Roll a d20. On an even number, all creatures within 30 feet of you are affected by the Enlarge effect of the Enlarge/Reduce spell. On an odd number, they are affected by the Reduce effect.",
  "You cause an explosion of acid in a 20 foot radius around you. All creatures in the area (including you), must make a Dexterity saving throw against your spell DC. On a failure, the creature takes 2d12 acid damage. The damage is halved on a success.",
  "The next spell you cast will disappear. You still expend the spell slot, and the DM decides when this spell appears and where (and the target, if the spell requires one).",
  "Birds and critters seek you out to tell you secrets they've acquired. You understand them and they understand you for the next hour.",
  "You turn invisible as if under the Invisibility spell. When you become visible, your skin is a bright/neon color. Roll a d8. 1-Red, 2-Orange, 3-Yellow, 4-Green, 5-Blue, 6-Purple, 7-Pink, 8-Rainbow. A remove curse spell can end this effect.",
  "For the next hour, you leave a trail of flowers, fungi and moss behind.",
  "You fall asleep for 1 hour. Only a kiss can wake you from your slumber, Sleeping Beauty!",
  "You summon 1d4 orange Faerie Dragons for the next hour. They are friendly to you and your allies.",
  "A large table appears with a feast on top of it. The DM rolls a d20. On an even number, the food is poisonous and every creature eating it takes 4d8 poison damage and becomes poisoned until their next rest. On an uneven number, the food grants a creature eating it 3d6 temporary hit points and they become immune to being frightened until their next rest. After 1 hour, the table disappears.",
  "Your feet are replaced with goat hooves for 1d4 days. During this time, you have disadvantage on Stealth checks. A remove curse spell can end this effect.",
  "A swarm of ethereal butterflies protect you for the next 10 minutes. During this time, all melee attacks against you have disadvantage. However, you have disadvantage on all Stealth checks.",
  "Antlers sprout from your head. You can make melee weapon attacks with them for 1d8 piercing damage plus your Charisma modifier. The antlers last for 1d4 hours.",
  "You summon an orchestra of spectral instruments. You and your allies gain a bardic inspiration of 1d8.",
  "2 of the potions you carry are now replaced by poisons dealing 3d8 poison damage instead.",
  "Sunlight burns you for 2d6 radiant damage for each minute you stay exposed. This lasts for 10 minutes.",
  "A unicorn controlled by the DM appears in a space within 5 feet of you, then disappears 1 minute later.",
  "You cast Hypnotic Pattern. The affected area is a 15ft radius centered on you, instead of a cube.",
  "You encase yourself in an orb of glass. While inside, you have total cover from all attacks and spell effects. You can use your action to push against the sphere’s walls and thus roll the sphere at up to half your movement speed. The sphere has an AC of 10, and 5 hit points. The effect ends when the sphere is destroyed.",
  "An extra finger grows on one of your hands. While you have this extra finger, you have advantage on all Sleight of Hand checks and disadvantage on all Persuasion checks. A remove curse spell can end this effect. ",
  "You turn into a tree. While in this form, you have 10 hit points, an AC of 16 and have resistance to all damage, except Fire and Necrotic damage. You have vulnerability to these damage types instead. You are incapacitated while in this form. After 1 hour, or if you drop to 0 hit points you revert back.",
  "You become cursed with lycanthropy. If you are already a lycanthrope, you are cured of the effect.",
  "Suction cups appear on your hands and feet. You are affected by the Spider Climb spell for the next hour.",
  "A weapon of your choice within 30 feet of you becomes infused with elemental magic. Roll a d6. (1-Acid, 2-Cold, 3-Fire, 4-Lightning, 5-Poison, 6-Thunder). The weapon is infused for the next hour.",
  "Your hair becomes a bird's nest. An angry bird inhabits this nest for the next hour.",
  "Your skin becomes pearlescent and you gain resistance to fire and radiant damage for the next hour. Additionally, you can cast Cure Wounds as a 1st-level spell once without expending a spell slot.",
  "Your grow fur and your teeth become sharp like a carnivore. You cast Speak With Animals on yourself, with a duration of 1 hour. Additionally, you gain the Natural Weapons feature of the Alter Self spell for 1 hour.",
  "You cast Hallucinatory Terrain right in front of you.",
  "Roll 1d100. On an even number, you age 2d6 years. On an uneven number, you become 2d6 years younger. This effect is permanent, unless you are affected by the Greater Restoration spell - and you are then restored to your original age.",
  "You cast the Blink spell on yourself.",
  "Clusters of colorful fungi appear all over your body. Whenever you, or a creature within 10ft. of you, lies, the fungi glows intensely. After 1 hour, the fungi disappears.",
  "You are under the effect of a Zone of Truth spell for 1d4 days.",
  "Roll twice on this table and resolve both effects."
]

export default allInOne;
