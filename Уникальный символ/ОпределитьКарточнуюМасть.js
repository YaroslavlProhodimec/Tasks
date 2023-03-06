const defineSuit = card => card.includes('♣') ? 'clubs' : card.includes('♦') ? 'diamonds' : card.includes('♥') ? 'hearts' : card.includes('♠') ? 'spades' : ''


console.log(defineSuit('3♠'))

