import { Link, useMatch, useResolvedPath} from "react-router-dom"
let home_path;
export default function Navbar({onFlip,home_flip,flipped,reset_active_flip}){
    const resolvedPath = useResolvedPath()
    home_path=JSON.stringify({path:resolvedPath.pathname})
    return  <nav className="nav">        
        <div className="links vertical-center">
            <ul>
                <li ><CustomLink to="/" className={` ${flipped === 1 && home_path === '{"path":"/"}'  ? "active" : (flipped === 0 ? "" : "")}`} onClick={home_flip}>Home</CustomLink></li>
                <li><CustomLink to="/About" onClick={reset_active_flip}>About</CustomLink></li>
                <li><CustomLink to="/" className={`flip-btn ${flipped === 0 ? "active" : (flipped === 1 ? "" : "")}`} onClick={onFlip}>Contact</CustomLink></li>
                <li className="dl-resume"><a  href="Resume.pdf" download>Resume</a></li>

            </ul>
        </div>
    </nav>
}
function CustomLink({to, children,...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path:resolvedPath.pathname,end:true})
    let component  = <Link className={(resolvedPath.pathnameto)}to={to}{...props}>{children}</Link>
    home_path=JSON.stringify({path:resolvedPath.pathname})
    if(home_path !== '{"path":"/"}'){
        component =<Link className={(isActive && resolvedPath.pathname)  ? "active" : ""} to={to}{...props}>{children}</Link>
    }
    return component;
}