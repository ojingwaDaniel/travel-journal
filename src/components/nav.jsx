import img from '../images/Fill 213.png'
export default function NavBar() {
    return (
      <div className="nav-bar">
        <div>
             <img src={img} alt=""  className='nav-image'/>   
          <span className='nav-text'>my travel journal.</span>
        </div>
      </div>
    );
}
