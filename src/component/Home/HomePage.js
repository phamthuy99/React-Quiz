import videoHomePage from '../../assets/video-homepage.mp4'
function HomePage() {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source src={videoHomePage} type="video/mp4" />
            </video>
            <div className='homepage-content'>
                <div className='title-1'>Make forms worth filling out</div>
                <div className='title-2'>Get more data—like signups, feedback, and anything else—with forms designed to be refreshingly different.
                    Collect more and better data. Embed forms where people see them, from web to email. Ask the right follow-up question at the right time to reveal deeper insights.</div>
                <div>
                    <button className='btn-signup'>Get started—it's free</button>
                </div>
            </div>
        </div>
    )
}
export default HomePage