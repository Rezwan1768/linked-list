class LinkedList {
  head = null;
  tail = null;
  size = 0;
  append(value) {
    if (value === null || value === undefined) {
      console.log("Please provide a value.");
      return;
    }
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail   // current tail is set to be the prev of the new node
      this.tail.next = node;  // Append the new node
      this.tail = node;       // Make the node the new tail
    }
    this.size++;
  }

  prepend(value) {
    if (value === null || value === undefined) {
      console.log("Please provide a value.");
      return;
    }
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;  // set the current head to be next of new node
      this.head.prev = node;  // Set the prev of current head to be the new node
      this.head = node;       // set new node as the head
    }
    this.size++;

  }

  at(index) { // index starts at 0
    let current = this.head;
    let currentIndex = 0;
    while (current != null) {
      if (index === currentIndex) return current;
      current = current.next;
      currentIndex++;
    }
    return "Index Out of range";
  }

  pop() {
    if (!this.head) return null;
    let data = null;
    if (this.head === this.tail) {
      data = this.head.data;
      this.head = null;
      this.tail = null;
      this.size--;
    }
    else {
      data = this.tail.data;
      this.tail = this.tail.prev; // Set the tail's prev is the new tail
      this.tail.next = null; // Remove reference to the previous tail
      this.size--;
    }
    return data;
  }

  contains(value) { // Case sensitive
    let current = this.head;
    while (current != null) {
      if (current.data === value) return true;
      current = current.next;
    }
    return false;
  }

  find(value) { // Return the index if value is found
    let current = this.head;
    let index = 0;
    while (current != null) {
      if (current.data === value) return index;
      current = current.next;
      index++;
    }
    return null;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Index out of range.");
      return;
    }
    if (index === 0) this.prepend(value);
    else if (index === this.size) this.append(value);
    else {
      let current = this.head;
      let currentIndex = 0;
      while (current != null) {
        // Since prepend and append takes care of the edge cases
        // So it's safe to assume, any node here will have a vaild prev and a next
        if (currentIndex === index) {
          let node = new Node(value);
          node.next = current;
          node.prev = current.prev; // Set new node's prev to be the node before current
          current.prev.next = node; // Set the previous node's next to be the new node
          current.prev = node;
          this.size++;
        }
        current = current.next;
        currentIndex++;
      }
    }
  }

  removeAt(index) {
    let data = null;
    if (index < 0 || index > this.size - 1) {
      console.log("Index out of range");
      return;
    }
    if (!this.head) {
      console.log("List is empyt.");
      return;
    }
    if (index === 0) {  // Reemoving first item
      data = this.head.data;
      if (this.head === this.tail) { // When list has one element
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
    }
    else if (index === this.size - 1) { // Removing the last item
      data = this.tail.data;
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    else {
      let current = this.head;
      let currentIndex = 0;
      while (current != null) {
        if (currentIndex === index) {
          data = current.data;
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        current = current.next;
        currentIndex++;
      }
    }
    if (data) {
      console.log(`Removed index ${index} with data: ${data}`);
      this.size--;
    }
  }

  toString() {
    let current = this.head;
    let values = [];
    while (current != null) {
      values.push(`( ${current.data} )`);
      current = current.next;
    }
    values.push("null");
    return values.join(" <=> ");
  }

  reverse() {
    let current = this.tail;
    let values = [];
    while (current != null) {
      values.push(`( ${current.data} )`);
      current = current.prev;
    }
    values.push("null");
    return values.join(" <=> ");
  }

}

class Node {
  constructor(data = null, next = null, prev = null) {
    this.data = data
    this.next = next
    this.prev = prev;
  }

  toString() {
    return this.data;
  }
}

module.exports = LinkedList;