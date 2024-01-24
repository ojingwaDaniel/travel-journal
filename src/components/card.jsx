import img from "../images/Fill 219.png";
export default function Card({imageUrl,location,title,startDate,endDate,description}) {
  return (
    <div className="card">
      <img src={imageUrl} alt="" className="card-image" />
      <div className="card-details">
        <img src={img} alt="" className="location-icon" />
        <span>{location}</span>
        <a href="">View In Goggle Map </a>
        <h1>{title}</h1>
        <p className="card-date">
          {startDate} - {endDate}
        </p>
        <p className="card-descrip">{description}</p>
      </div>
    </div>
  );
}
