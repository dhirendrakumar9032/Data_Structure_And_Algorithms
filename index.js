function duplicateZeros(arr) {
    const length = arr.length;
    let countZeros = 0;

    // Step 1: Count the number of zeros
    for (let i = 0; i < length; i++) {
        if (arr[i] === 0) {
            countZeros++;
        }
    }

    // Step 2: Calculate the new length after duplicating zeros
    const newLength = length + countZeros;

    // Step 3: Start from the end and copy elements to their new positions
    for (let i = length - 1, j = newLength - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            if (j < length) {
                arr[j] = 0;
            }
            j--;
        }
        if (j < length) {
            arr[j] = arr[i];
        }
        j--;
    }
}

// Example usage:
const arr = [1, 0, 2, 3, 0, 4, 5];
duplicateZeros(arr);
console.log(arr); // Output: [1, 0, 0, 2, 3, 0, 0, 4]

