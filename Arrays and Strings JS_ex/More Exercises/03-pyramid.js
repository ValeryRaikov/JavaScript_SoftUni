function pyramid(base, increment) {
  let stone = 0;
  let marble = 0;
  let apis = 0;
  let gold = 0;
  let floor = 0;
  while (base > 1) {
    let allBlocksNeeded = base * base * increment;
    let innerBlocksNeeded = (base - 2) * (base - 2) * increment;
    let outerBlocksNeeded = allBlocksNeeded - innerBlocksNeeded;
    if (base - 2 == 0) {
      // there is not enough to build next floor and have to build the top of pyramid
      break;
    }
    floor++;
    if (floor % 5 == 0) {
      apis += outerBlocksNeeded;
    } else {
      marble += outerBlocksNeeded;
    }
    stone += innerBlocksNeeded;
    base -= 2;
  }
  gold += base * base * increment; // this is the top of pyramid
  floor++;
  let height = Math.floor(floor * increment);

  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(apis)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${height}`);
}
