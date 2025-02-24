let nums = [2, 3, 4, 8, 11, 16, 18, 19, 26, 29];

let input = prompt("what number do you want?");

let target = Number(input);

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }

  return -1;
}

let result = binarySearch(nums, target);
console.log(
  result !== -1 ? `Target found at index: ${result}` : "Target not found"
);

function binarySearchWrote1(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) right = mid - 1;
  }

  return -1;
}

function binarySearchWrote2(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid > target]) {
      right = mid - 1;
    }
  }

  return -1;
}

function binarySearchWrote3(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }

  return -1;
}

function binarySearchWrote4(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left - Math.floor((right + left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }

  return -1;
}

function binarySearchWrote5(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left - Math.floor((right + left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }

  return -1;
}

function binarySearchWrote6(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left - Math.floor((right + left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }

  return -1;
}
