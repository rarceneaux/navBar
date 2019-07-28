// const test = () =>{
// const divAText = document.querySelector("#divA");
// divAText.innerHTML = "4IR";
// document.body.appendChild("#divA");
// };
// test();

const printToDom = (stringToPrint,divId) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML += stringToPrint;
}

// const createBtn = () =>{
//   let btnDiv = document.createElement('div');
//   btnDiv.id = "btnDiv";
//   document.body.appendChild(btnDiv);
//   let btn1 = document.createElement("button");
//   btn1.id ="mainBtn";
//   btn1.textContent = "Click Me";
//   btnDiv.appendChild(btn1);
// };
// createBtn();

// const clearDivs = () => {
//   $("#mainBtn").on('click', (e) => {
//     $("#mydivs").hide();
//   })
// };
// clearDivs();

// const showDivs = () => {
//   $("#mainBtn").on('click', (e) => {
//     $("#mydivs").show();
//   })
// };
// showDivs();