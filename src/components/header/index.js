const Header = () => {
    return (
        <header id="header" className="header">
        <div className="header-top bg-theme-color-2 sm-text-center p-0">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="widget no-border m-0">
                  <ul className="list-inline font-13 sm-text-center mt-5">
                    <li>
                      <a className="text-white" href="#">FAQ</a>
                    </li>
                    <li className="text-white">|</li>
                    <li>
                      <a className="text-white" href="#">Help Desk</a>
                    </li>
                    <li className="text-white">|</li>
                    <li>
                      <a className="text-white" href="#">Login</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8">
                <div className="widget m-0 pull-right sm-pull-none sm-text-center">
                  <ul className="list-inline pull-right">
                    <li className="mb-0 pb-0">
                      <div className="top-dropdown-outer pt-5 pb-10">
                        <a className="top-cart-link has-dropdown text-white text-hover-theme-colored"><i className="fa fa-shopping-cart font-13"></i> (12)</a>
                        
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget no-border m-0 mr-15 pull-right flip sm-pull-none sm-text-center">
                  <ul className="styled-icons icon-circled icon-sm pull-right flip sm-pull-none sm-text-center mt-sm-15">
                    <li><a href="#"><i className="fa fa-facebook text-white"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter text-white"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus text-white"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram text-white"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin text-white"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-middle p-0 bg-lightest xs-text-center">
          <div className="container pt-0 pb-0">
            <div className="row">
              <div className="col-xs-12 col-sm-4 col-md-5">
                <div className="widget no-border m-0">
                  <a className="menuzord-brand pull-left flip xs-pull-center mb-15" href="javascript:void(0)"><img src="assets/images/logo-wide.png" alt=""/></a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
                <div className="widget no-border pull-right sm-pull-none sm-text-center mt-10 mb-10 m-0">
                  <ul className="list-inline">
                    <li><i className="fa fa-phone-square text-theme-colored font-36 mt-5 sm-display-block"></i></li>
                    <li>
                      <a href="#" className="font-12 text-gray text-uppercase">Call us today!</a>
                      <h5 className="font-14 m-0"> +(012) 345 6789</h5>
                    </li>
                  </ul>
                </div>
              </div>  
              <div className="col-xs-12 col-sm-4 col-md-3">
                <div className="widget no-border pull-right sm-pull-none sm-text-center mt-10 mb-10 m-0">
                  <ul className="list-inline">
                    <li><i className="fa fa-clock-o text-theme-colored font-36 mt-5 sm-display-block"></i></li>
                    <li>
                      <a href="#" className="font-12 text-gray text-uppercase">We are open!</a>
                      <h5 className="font-13 text-black m-0"> Mon-Fri 8:00-16:00</h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-nav">
          <div className="header-nav-wrapper navbar-scrolltofixed bg-theme-colored border-bottom-theme-color-2-1px">
            <div className="container">
              <nav id="menuzord" className="menuzord bg-theme-colored pull-left flip menuzord-responsive">
                <ul className="menuzord-menu">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Add book</a></li>
                  <li><a href="#">Dark Layouts</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;