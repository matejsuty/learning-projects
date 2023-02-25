function findSmallestInt(args) {
    let sorted = args.sort((a,b) => a-b);
    return sorted[0];
}

console.log(findSmallestInt([78,56,232,12,8]));