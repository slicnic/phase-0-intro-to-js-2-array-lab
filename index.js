// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push(name);
    }
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name){
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}

function appendCat(name){  
    let moreCats = [...cats]
    moreCats.push(name) 
    return moreCats 
  }

  function prependCat(name){  
    let moreCats = [...cats]
    moreCats.unshift(name) 
    return moreCats 
  }

  function removeLastCat(name){  
    let moreCats = [...cats]
    moreCats.pop(name) 
    return moreCats 
  }

  function removeFirstCat(name){  
    let moreCats = [...cats]
    moreCats.shift(name) 
    return moreCats 
  }
