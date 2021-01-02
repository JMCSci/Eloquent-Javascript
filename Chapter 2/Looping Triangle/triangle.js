/* Chapter 2 -- Looping a triange */
triangle();

/* Prints hashes to console in the form of a triangle */
function triangle(){
    for(let i = 1; i < 8; i++){
        let hash = "";
        for(let j = 1; j <= i; j++){
            hash += "#";
        }
        console.log(hash);
        hash = "";
    }
}