module.exports = { basicCard:
   [
     {
        type: 'input',
        name: 'category',
        message: 'Category: '
      },
     {
       type: 'input',
       name: 'front',
       message: 'Question to store: ',
     },
     {
       type: 'input',
       name: 'back',
       message: 'Answer: ',
     }
    ],
  clozeCard:
   [ { type: 'input', name: 'category', message: 'Category: ' },
     { type: 'input', name: 'text', message: 'Question text: ' },
     { type: 'input', name: 'cloze', message: 'Cloze (word to remove from Question): ' }
     ],
  deck:
   [ { type: 'input', name: 'category', message: 'Category: ' },
     { type: 'input', name: 'description', message: 'Description: ' }
   ],
   confirm: [{type: "confirm", name: "confirm", message: "would you like to create a new deck?"}]
}
