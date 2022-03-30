function makeAxe(n) {
    const star = '*';
    let width = n * 5;
    let innerSpace = -1;
    let leftDashes = 3 * n;
    let rightDashes = width - leftDashes - 1;
 
    while (innerSpace < n - 1) {
        innerSpace++;
        rightDashes--;
        console.log('-'.repeat(leftDashes) + star + '-'.repeat(innerSpace) + star + '-'.repeat(rightDashes));
        currentColums++;
    }
 
    for (let i = 0; i < Math.floor(n/2); i++) {
        console.log(star.repeat(leftDashes + 1) + '-'.repeat(innerSpace) + star + '-'.repeat(rightDashes));
        currentColums++;
    }
 
    for (let i = 0; i < Math.floor(n/2)-1; i++) {
        console.log('-'.repeat(leftDashes) + star + '-'.repeat(innerSpace) + star + '-'.repeat(rightDashes));
        innerSpace += 2;
        rightDashes--;
        leftDashes--;
    }
 
    console.log('-'.repeat(leftDashes) + star.repeat(innerSpace + 2) + '-'.repeat(rightDashes));
}
 
 
makeAxe(6);