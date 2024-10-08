import './Links.css';
export default function Links(){
    return (
        <div className="links-container-wrapper">
            <div className='links-container'>
                <a  href='mailto: darylgzmn@gmail.com'> <i className="fa fa-envelope fa-3x gmail-icon i-contacts" style={{ color: 'white' }}></i></a>
                <a  href='https://github.com/D0ngk1'> <i className="fa fa-github fa-3x github-icon i-contacts" style={{ color: 'white' }}></i> </a>
                <a  href='https://www.linkedin.com/in/daryl-guzman-82556a256/'> <i  className="fa fa-linkedin fa-3x linkedin-icon i-contacts" style={{ color: 'white' }}></i> </a>
                    {/* LeetCode Icon (using custom SVG) */}
                <a href="https://leetcode.com/u/TheReal01/" target="_blank" rel="noopener noreferrer">
                    <svg  className='leetcode-icon i-contacts' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" color="blue" width="60" height="60" viewBox="0 0 16 16">
                        <path d="M 10.447266 0.265625 A 0.50005 0.50005 0 0 0 10.103516 0.41796875 L 5.65625 4.8671875 L 3.0957031 7.4257812 A 0.50005 0.50005 0 0 0 2.9785156 7.6035156 C 1.769869 8.9739016 1.7865696 11.063913 3.0957031 12.373047 L 5.65625 14.933594 C 7.0176322 16.294976 9.242133 16.294976 10.603516 14.933594 L 12.853516 12.683594 A 0.50063809 0.50063809 0 1 0 12.144531 11.976562 L 9.8945312 14.226562 C 8.9159134 15.20518 7.3418991 15.20518 6.3632812 14.226562 L 3.8027344 11.666016 C 2.8241166 10.687398 2.8241166 9.1114303 3.8027344 8.1328125 L 6.3632812 5.5742188 C 7.3418991 4.5956009 8.9159135 4.5956009 9.8945312 5.5742188 L 12.144531 7.8242188 A 0.50063784 0.50063784 0 1 0 12.853516 7.1171875 L 10.603516 4.8671875 C 9.9106907 4.174363 8.9943718 3.8431189 8.0820312 3.8554688 L 10.8125 1.125 A 0.50005 0.50005 0 0 0 10.447266 0.265625 z M 7.328125 9.4003906 A 0.50005 0.50005 0 1 0 7.328125 10.400391 L 14.228516 10.400391 A 0.50005 0.50005 0 1 0 14.228516 9.4003906 L 7.328125 9.4003906 z"></path>
                    </svg>
                </a>
            </div>
        </div>
    )
}