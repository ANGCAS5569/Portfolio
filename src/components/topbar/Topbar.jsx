import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className = {"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">angel.</a>
          <div className="itemContainer">
            <PersonIcon className="icon"/>
            <span>+757 561 1504</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon"/>
            <span>angelcasiano.main@gmail.com</span>
          </div>
          <div className="itemContainer">
            <GitHubIcon className="icon"/>
            <span>https://github.com/ANGCAS5569</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
