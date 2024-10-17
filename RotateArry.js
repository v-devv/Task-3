
function rotateArray() {

    let arr = document.getElementById('rotate-array').value.split(',').map(Number);
    let k = parseInt(document.getElementById('rotate-steps').value);

    if (arr.length === 0 || k <= 0) {
        document.getElementById('rotate-result').innerText = 'No rotation needed';
        return;
    }
    k = k % arr.length;

    function reverse(arr, start, end) {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);

    document.getElementById('rotate-result').innerText = arr.join(', ');
}