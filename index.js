const challengeFunction = function(cell1, cell2){

    let values = {'A':1,'B':2,'C':3,'D':4,'E':5,'F':6,'G':7,'H':8}

    let cellOne = cell1.split("")
    let cellTwo = cell2.split("")

    cellOne = (parseInt(cellOne[1]) + (parseInt(values[cellOne[0]]) -1)) % 2

    cellTwo = (parseInt(cellTwo[1]) + (parseInt(values[cellTwo[0]]) -1)) % 2

    return cellOne === cellTwo

}

module.exports = challengeFunction
