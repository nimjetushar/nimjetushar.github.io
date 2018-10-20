import moment from "moment";

function applyFunc(dt) {
  const d = moment(dt, "YYYY-MM-DD");
  return d.format("MMM YYYY");
}

const Datetime = {
  getDisplayFromDate(datetime) {
    if (datetime === "Present") {
      return datetime;
    }
    const value = applyFunc(datetime);
    return value === "Invalid date" ? datetime : value;
  }
};

export default Datetime;
