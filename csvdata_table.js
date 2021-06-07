export default class {
   /**
    * @param {HTMLTableElement} root the table element which will display the csv data.
    */
  constructor(root) {
    this.root = root; 
  }
  /**
    * @param {string[]} header columns List of headings to be used.
    */
  setHeader(HeaderColumns) {
    this.root.insertAdjacentHTML("afterbegin", ' 
                                 <thead>
                                    ${headerColumns.map(text => '<th>${text}</th>').join("")}
                                 </thead>
                                 ');
  }
}
