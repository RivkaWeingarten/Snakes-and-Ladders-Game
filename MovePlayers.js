console.log('hi from move')

    const currentCell=document.querySelector('#cell1')
    const nextCell=document.querySelector('#cell2')

    const player=document.querySelector('#player1')
    currentCell.removeChild(player)
    nextCell.appendChild(player)



