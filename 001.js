// If we list all the natural numbers below 10 that are multiples of 3 or 5, we
// get 3, 5, 6 and 9. The sum of these multiples is 23.  Find the sum of all
// the multiples of 3 or 5 below 1000.

function euler001() {
    var sum = 0;
    var n = 1000;

    while ( n -- ) {
        if ( n % 3 === 0 || n % 5 === 0 ) {
            sum += n;
            console.log( 'added ' + n + ' to ' + sum );
        }
    }

    return sum;
}
