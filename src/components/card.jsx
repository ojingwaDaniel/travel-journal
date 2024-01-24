import img from "../images/Fill 219.png";
export default function Card(props) {
  return (
    <div className="card">
      <img src={props.item.imageUrl} alt="" className="card-image" />
      <div className="card-details">
        <img src={img} alt="" className="location-icon" />
        <span>{props.item.location}</span>
        <a href="">View In Goggle Map </a>
        <h1>{props.item.title}</h1>
        <p className="card-date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="card-descrip">{props.item.description}</p>
      </div>
    </div>
  );
}
