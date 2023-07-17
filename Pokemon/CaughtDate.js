import "./CaughtDate.css";

function CaughtDate(props) {
  const month = props.caughtDate.toLocaleString("en-US", { month: "long" });
  const day = props.caughtDate.toLocaleString("en-US", { day: "2-digit" });
  const year = props.caughtDate.getFullYear();

  function get_nth_suffix(day) {
    switch (day) {
      case 1:
      case 21:
      case 31:
        return "st";
      case 2:
      case 22:
        return "nd";
      case 3:
      case 23:
        return "rd";
      default:
        return "th";
    }
  }

  return (
    <div className="caught-date">
      Caught on:
      <div className="caught-date__month">{month}</div>
      <div className="caught-date__day">
        {day}
        {get_nth_suffix(day)}
      </div>
      <div className="caught-date__year">{year}</div>
    </div>
  );
}

export default CaughtDate;
