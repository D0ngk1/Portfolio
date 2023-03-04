export default function Navbar(){
    return  <nav className="nav">
        <a href="/" className="site-title">DG</a>
        <div className="links vertical-center">
            <ul>
                <li><a href="/Home">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Contact">Contact</a></li>
                <li><a href="/Resume">Resume</a></li>
            </ul>
        </div>
    </nav>
}