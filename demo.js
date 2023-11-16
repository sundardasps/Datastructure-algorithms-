class hashtable {
    constructor(size) {
      this.table = new Array(size);
      this.size = size;
    }
  
    hash(key) {
      let total = 0;
      for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
      }
      return total % this.size;
    }
  
    set(key, value) {
      let index = this.hash(key);
      this.table[index] = value;
    }
    remove(key) {
      let index = this.hash(key);
      this.table[index] = undefined;
    }
  
    show() {
      for (let i = 0; i < this.table.length; i++) {
        console.log(i, this.table[i]);
      }
    }
    get(key) {
      let index = this.hash(key);
      return this.table[index];
    }
  }
  
  let nad = new hashtable(22);
  
  nad.set("niji", "dadasdada");
  nad.remove("niji");
  console.log(nad.get("niji"));
  nad.show();
  