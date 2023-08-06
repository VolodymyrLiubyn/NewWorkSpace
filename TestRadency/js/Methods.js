
const buttonDeleteNote = function (a) {
    mainTableArr.splice (a, 1)
    console.log (mainTableArr)
}

const buttonCreateNote = function () {

    mainTableArr.push(
        {            
            Name: prompt ("Name", ""),
            Craeted: prompt ("Data of creation", ""),
            Category: prompt ("Category", ""),
            Content: prompt ("Content", ""),
            Dates: prompt ("Dates", "")            
        }
    )
    console.log (mainTableArr)
}

const buttonArchivedNote = function (c) {
             
    const removedArr = mainTableArr.splice (c, 1)
    archivedTableArr.push(removedArr[0])
    console.log (mainTableArr)
    console.log (archivedTableArr)
}

const buttonUnzippedNote = function (b) {
             
    const unzippedArr = archivedTableArr.splice (b, 1)
    mainTableArr.push(unzippedArr[0])
    console.log (mainTableArr)
    console.log (archivedTableArr)
}

const buttonEditNote = function (d) {
    
    const edit = {            
        Name: prompt ("New Name", ""),
        Craeted: prompt ("New Data of creation", ""),
        Category: prompt ("New Category", ""),
        Content: prompt ("New Content", ""),
        Dates: prompt ("New Dates", "")            
    }

    mainTableArr[d] = edit

    console.log (mainTableArr)
}

const summaryArchivedColumn = function () {

    let summaryArhivedTask = archivedTableArr.filter (archivedTableArr => archivedTableArr.Category === "Task")
    let summaryArhivedRandomThought = archivedTableArr.filter (archivedTableArr => archivedTableArr.Category === "Random Thought")
    let summaryArhivedIdea = archivedTableArr.filter (archivedTableArr => archivedTableArr.Category === "Idea")
    let summaryArhiedQuote = archivedTableArr.filter (archivedTableArr => archivedTableArr.Category === "Quote")

    console.log (summaryArhivedTask.length)
    console.log (summaryArhivedRandomThought.length)
    console.log (summaryArhivedIdea.length)
    console.log (summaryArhiedQuote.length)

}

const summaryActivedColumn = function () {

    let summaryActivedTask = mainTableArr.filter (mainTableArr => mainTableArr.Category === "Task")
    let summaryActivedRandomThought = mainTableArr.filter (mainTableArr => mainTableArr.Category === "Random Thought")
    let summaryActivedIdea = mainTableArr.filter (mainTableArr => mainTableArr.Category === "Idea")
    let summaryActivedQuote = mainTableArr.filter (mainTableArr => mainTableArr.Category === "Quote")

    console.log (summaryActivedTask.length)
    console.log (summaryActivedRandomThought.length)
    console.log (summaryActivedIdea.length)
    console.log (summaryActivedQuote.length)

}
