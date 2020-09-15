let journal = [];
function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}
addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teetg"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

function phi(table) {
    return (table[0] * table[1] - table[2] * table[3]) / Math.sqrt((table[0] + table[2]) *
                (table[1] + table[3]) *
                (table[0] + table[3]) *
                (table[1] + table[2]));
    }
console.log(phi([1, 76, 4, 9]));
