var storyStrengths = {
	name:"Playing to your Strengths",
	screens:[
		{type:'story',text:'*THUMP* Our hero slams into a Rugby tackle bag.'},
		{type:'story',text:'"Harder, boy! Put your back into it."'},
		{type:'story',text:'*THUMP* The bag remains largely unmoved.'},
		{type:'story',text:'“You’ve got this.”'},
		{type:'story',text:'*THUMP* *THUMP* *THUMP* he hits it over and over again. '},
		{type:'story',text:'*THUMP*'},
		{type:'question',text:'What is Ollie thinking?',
			q:['Damn, I’m so weak.','I’ve got to try harder.','I would kill for a sausage roll.'],
			f:['#red','#orange','#blue']
		},
		{type:'story',text:'Our hero steps back, takes a breath, and puts his hands on his hips.'},
		{type:'story',text:'He charges the bag again.'},
		{type:'story',text:'*THUMP* But the bag remains unmoved.'},
		{type:'question',text:'What is Ollie thinking?',
			q:['The bag is too heavy.','Where are the sausage rolls?','I’m not strong enough.'],
			f:['#red','#blue','#red']
		},
		{type:'story',text:'Ollie falls to the ground. He sits with his hands on his knees and shakes his head. The coach let’s out a big sigh.'},
		{type:'question',text:'What is Ollie thinking?',
			q:['I’m too small for this.','I’m so weak.','I’m not strong enough.'],
			f:['#red','#red','#red']
		},
		{type:'story',text:'Coach: “C’mon Ollie. It’s not going to tackle itself.”'},
		{type:'story',text:'Ollie stands with his hands on his head. He’s walking in a little circle. A grimace creeps across his face.'},
		
		{type:'story',h:'Stop.',text:'Ollie is caught up in his weaknesses.'},
		{type:'popping',h:'Think.',text:"Let's pop these bubbles."},
		{type:'question',h:'Think.',text:"What should Ollie remember?",
			c:[false,false,true],
			q:['I suck at this. I’ll never be strong enough for this game.','I need to work harder. Everyone else is ahead of me.','I have other strengths I can work at.'],
			f:['I think he’s beaten himself up enough.','I think he’s working pretty hard. He’s still caught up in his weaknesses.','Great. Ollie should play to his strengths. Rather than get caught up in his weaknesses.']
		},
		{
			type:'question',h:'Think.',text:"What should Ollie be thinking?",
			q:['I’m too small for this.','My kicking game is strong.','My strength is my speed.'],
			f:['Let’s focus on strengths.','#green','#green']
		},
		{type:'story',text:'Ollie smiles and takes a deep breath.'},
		{
			type:'question',h:'Think.',text:'Any other strengths?',
			q:['I’m too weak for League.','I need a sausage roll.','My strength is my speed.'],
			f:['Let’s focus on strengths.','I’m hungry too. But let’s focus on strengths.','#green']
		},
		{type:'story',text:'Ollie smiles and takes a deep breath before slamming into the pad again.'},
		{type:'story',text:'*THUMP*'},
		{type:'story',text:'The bag is still mostly unmoved.'},
		{
			type:'question',h:'Act.',text:'How can Ollie play to his strengths?',
			c:[true,true,false],
			q:['I could do some sprints.','I should suggest some kicking practice.','Time for a sausage roll break.'],
			f:['Great idea. Making extra time to practice your strengths will only make you stronger.','Great idea. Making extra time to practice your strengths will only make you stronger.','Let’s eat later.']
		},
		{type:'story',text:'Ollie: “Hey coach. Can we do some kicking practice?”'},
		{type:'story',text:'Coach: “Alright. But one more tackle, first.”'},
		{type:'story',text:'Ollie: “Alright.”'},
		{type:'story',text:'*THUMP*'},
		{type:'story',h:'PLAYING TO YOUR STRENGTHS',ul:['<b>STOP</b> focusing on your weaknesses.','<b>THINK</b> about your strengths.','<b>ACT</b> on your strengths.']},
	]

}
	


