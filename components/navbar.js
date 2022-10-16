function navbar() {
  return `
    <nav id="nav-menu">
        <ul class="nav-menu-items">
            <div id="navbar-toggle">
                <a href="#" class="menu-bars" id="hide-menu">
                    <i class="fas fa-bars nav-icon"></i>
                </a>
                <a href="#"><h1><i class="fab fa-youtube" id="youtube-logo"></i>
                YouTube</h1></a>
            </div>
            <div class="nav-section">
                <li class="nav-text"><a href="./index.html"><i class="fas fa-home nav-icon"></i>Home</a></li>
                <li class="nav-text"><a href="#"><i class="fas fa-fire nav-icon"></i>Trending</a></li>
                <li class="nav-text"><a href="#"><i class="fab fa-youtube nav-icon"></i>Subscriptions</a></li>
            </div>
            <hr>
            <div class="nav-section">
                <li class="nav-text"><a href="#"><i class="fas fa-play-circle nav-icon"></i>Library</a></li>
                <li class="nav-text"><a href="./history.html"><i class="fas fa-history nav-icon"></i>History</a></li>
                <li class="nav-text"><a href="./watchlist.html"><i class="fas fa-clock nav-icon"></i>Watch Later</a></li>
            </div>
        </ul>
    </nav>
    `;
}
export default navbar;
