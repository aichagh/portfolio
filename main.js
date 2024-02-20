const dig = 24;
const trad = 0;
const comic = 3;
const content = document.getElementById("content");

if (!content) throw new Error("div#content not found");

// clear the app of any content
content.innerHTML = "";
content.insertAdjacentHTML(
  "beforeend",
  `
  <div id="info">
    <h1>Aicha Ghidaoui</h1>
    <h3>Portfolio</h3>

    <button id="dig">Digital pieces</button>
    <button id="trad">Traditional pieces</button>
    <button id="comics">Comics</button>
  </div>
  <div id="gallery"></div>
  `)

// adds all the images,,,
// digital, trad and comics
function add_images() {
    add_dig();
    // add_trad();
    // add_comic();
}

// adds all the digital img
function add_dig() {
  let i = 1;
  let row_num = 1;

  const total_rows = Math.floor((innerWidth - 250) / 250);
  const img_per_row = Math.floor(dig / total_rows);

  console.log(`total rows: ${total_rows}`)
  console.log(`img per row: ${img_per_row}`)

  const gallery = document.getElementById("gallery")


    while(i <= dig) {
      gallery.insertAdjacentHTML(
        "beforeend",
        `
          <div class="row" id="row${row_num}"></div>
        `
      )

      for(let j = 0; j < img_per_row; j++) {
        if(i <= dig) {
          const row = document.getElementById(`row${row_num}`);
          if(!row) {console.log(`row${row_num} not found`)}
          row.insertAdjacentHTML(
            "beforeend",
            `
            <div id="dig${i}">
              <img src="./data/digital/Digital_${i}.png"></img>
            </div>
            `
          )
        }
        i++;
      }

      row_num++;
    }
}

// call to add all img
add_images();