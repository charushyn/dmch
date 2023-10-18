export function handleScrollTeam(action){
    if(action === 'up'){
        index === lengthOfSlices - 1  ? "" : setIndex(index + 1)
    } else if(action === 'down'){
        index === 0 ? '' : setIndex(index - 1)
    } else {
        return
    }
}