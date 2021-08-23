let submitHandler = (e, action) => {
  let date = e.target[1].value.split("-");
  let year = date[0];
  let month = Number(date[1]);
  let day = Number(date[2]);
  let title = e.target[0].value;
  action(year.slice(2, 4), month, day, title);
};
export default submitHandler;
