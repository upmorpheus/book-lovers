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
                        <ul className="dropdown">
                          <li>
                            <div className="dropdown-cart">
                              <table className="table cart-table-list table-responsive">
                                <tbody>
                                  <tr>
                                    <td><a href="#"><img alt="" src="images/products/sm1.jpg"/></a></td>
                                    <td><a href="#"> Product Title</a></td>
                                    <td>X3</td>
                                    <td>$ 100.00</td>
                                    <td><a className="close" href="#"><i className="fa fa-close font-13"></i></a></td>
                                  </tr>
                                  <tr>
                                    <td><a href="#"><img alt="" src="images/products/sm2.jpg"/></a></td>
                                    <td><a href="#"> Product Title</a></td>
                                    <td>X2</td>
                                    <td>$ 70.00</td>
                                    <td><a className="close" href="#"><i className="fa fa-close font-13"></i></a></td>
                                  </tr>
                                </tbody>
                              </table>
                              <div className="total-cart text-right">
                                <table className="table table-responsive">
                                  <tbody>
                                    <tr>
                                      <td>Cart Subtotal</td>
                                      <td>$170.00</td>
                                    </tr>
                                    <tr>
                                      <td>Shipping and Handling</td>
                                      <td>$20.00</td>
                                    </tr>
                                    <tr>
                                      <td>Order Total</td>
                                      <td>$190.00</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="cart-btn text-right">
                                  <a className="btn btn-theme-colored btn-xs" href="shop-cart.html"> View cart</a>
                                  <a className="btn btn-dark btn-xs" href="shop-checkout.html"> Checkout</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="mb-0 pb-0">
                      <div className="top-dropdown-outer pt-5 pb-10">
                        <a className="top-search-box has-dropdown text-white text-hover-theme-colored"><i className="fa fa-search font-13"></i> &nbsp;</a>
                        <ul className="dropdown">
                          <li>
                            <div className="search-form-wrapper">
                              <form method="get" className="mt-10">
                                <input type="text" onFocus="if(this.value =='Enter your search') { this.value = ''; }" onBlur="if(this.value == '') { this.value ='Enter your search'; }" value="Enter your search" id="searchinput" name="s" className=""/>
                                <label><input type="submit" name="submit" value=""/></label>
                              </form>
                            </div>
                          </li>
                        </ul>
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
                  <a className="menuzord-brand pull-left flip xs-pull-center mb-15" href="javascript:void(0)"><img src="images/logo-wide.png" alt=""/></a>
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
                  <li className="active"><a href="#home">Home</a>
                    <ul className="dropdown">
                      <li><a href="#">Multi Page Layouts</a>
                        <ul className="dropdown">
                          <li><a href="index-mp-layout1.html">Layout1</a></li>
                          <li><a href="index-mp-layout2.html">Layout2</a></li>
                          <li><a href="index-mp-layout3.html">Layout3</a></li>
                          <li><a href="index-mp-layout4.html">Layout4</a></li>
                          <li><a href="index-mp-layout5.html">Layout5</a></li>
                          <li><a href="index-mp-layout6.html">Layout6</a></li>
                          <li><a href="index-mp-layout7.html">Layout7 <span className="label label-info">New</span></a></li>
                          <li><a href="index-mp-layout8.html">Layout8 <span className="label label-info">New</span></a></li>
                          <li><a href="index-mp-layout9.html">Layout9 <span className="label label-info">New</span></a></li>
                        </ul>
                      </li>
                      <li><a href="#">Single Page Layouts</a>
                        <ul className="dropdown">
                          <li><a href="index-sp-layout1.html">Layout1</a></li>
                          <li><a href="index-sp-layout2.html">Layout2</a></li>
                          <li><a href="index-sp-layout3.html">Layout3</a></li>
                          <li><a href="index-sp-layout4.html">Layout4</a></li>
                          <li><a href="index-sp-layout5.html">Layout5</a></li>
                          <li><a href="index-sp-layout6.html">Layout6</a></li>
                          <li><a href="index-sp-layout7.html">Layout7 <span className="label label-info">New</span></a></li>
                          <li><a href="index-sp-layout8.html">Layout8 <span className="label label-info">New</span></a></li>
                          <li><a href="index-sp-layout9.html">Layout9 <span className="label label-info">New</span></a></li>
                        </ul>
                      </li>
                      <li><a href="#">Boxed Layouts</a>
                        <ul className="dropdown">
                          <li><a href="index-boxed-mp-layout1.html">Boxed Multi Page Layout1</a></li>
                          <li><a href="index-boxed-mp-layout2.html">Boxed Multi Page Layout2</a></li>
                          <li><a href="index-boxed-mp-layout3.html">Boxed Multi Page Layout3</a></li>
                          <li><a href="index-boxed-mp-layout4.html">Boxed Multi Page Layout4</a></li>
                          <li><a href="index-boxed-mp-layout5.html">Boxed Multi Page Layout5</a></li>
                          <li><a href="index-boxed-mp-layout6.html">Boxed Multi Page Layout6</a></li>
                          <li><a href="index-boxed-mp-layout7.html">Boxed Multi Page Layout7 <span className="label label-info">New</span></a></li>
                          <li><a href="index-boxed-mp-layout8.html">Boxed Multi Page Layout8 <span className="label label-info">New</span></a></li>
                          <li><a href="index-boxed-mp-layout9.html">Boxed Multi Page Layout9 <span className="label label-info">New</span></a></li>
                          <li><a href="index-boxed-sp-layout1.html">Boxed Single Page Layout1</a></li>
                          <li><a href="index-boxed-sp-layout2.html">Boxed Single Page Layout2</a></li>
                          <li><a href="index-boxed-sp-layout3.html">Boxed Single Page Layout3</a></li>
                          <li><a href="index-boxed-sp-layout4.html">Boxed Single Page Layout4</a></li>
                          <li><a href="index-boxed-sp-layout5.html">Boxed Single Page Layout5</a></li>
                          <li><a href="index-boxed-sp-layout6.html">Boxed Single Page Layout6</a></li>
                          <li><a href="index-boxed-sp-layout7.html">Boxed Single Page Layout7</a></li>
                          <li><a href="index-boxed-sp-layout8.html">Boxed Single Page Layout8</a></li>
                          <li><a href="index-boxed-sp-layout9.html">Boxed Single Page Layout9</a></li>
                        </ul>
                      </li>
                      <li><a href="#">RTL Layouts</a>
                        <ul className="dropdown">
                          <li><a href="index-rtl-mp-layout1.html">RTL Multi Page Layout1</a></li>
                          <li><a href="index-rtl-mp-layout2.html">RTL Multi Page Layout2</a></li>
                          <li><a href="index-rtl-mp-layout3.html">RTL Multi Page Layout3</a></li>
                          <li><a href="index-rtl-mp-layout4.html">RTL Multi Page Layout4</a></li>
                          <li><a href="index-rtl-mp-layout5.html">RTL Multi Page Layout5</a></li>
                          <li><a href="index-rtl-mp-layout6.html">RTL Multi Page Layout6</a></li>
                          <li><a href="index-rtl-mp-layout7.html">RTL Multi Page Layout7 <span className="label label-info">New</span></a></li>
                          <li><a href="index-rtl-mp-layout8.html">RTL Multi Page Layout8 <span className="label label-info">New</span></a></li>
                          <li><a href="index-rtl-mp-layout9.html">RTL Multi Page Layout9 <span className="label label-info">New</span></a></li>
                          <li><a href="index-rtl-sp-layout1.html">RTL Single Page Layout1</a></li>
                          <li><a href="index-rtl-sp-layout2.html">RTL Single Page Layout2</a></li>
                          <li><a href="index-rtl-sp-layout3.html">RTL Single Page Layout3</a></li>
                          <li><a href="index-rtl-sp-layout4.html">RTL Single Page Layout4</a></li>
                          <li><a href="index-rtl-sp-layout5.html">RTL Single Page Layout5</a></li>
                          <li><a href="index-rtl-sp-layout6.html">RTL Single Page Layout6</a></li>
                          <li><a href="index-rtl-sp-layout7.html">RTL Single Page Layout7</a></li>
                          <li><a href="index-rtl-sp-layout8.html">RTL Single Page Layout8</a></li>
                          <li><a href="index-rtl-sp-layout9.html">RTL Single Page Layout9</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Dark Layouts</a>
                        <ul className="dropdown">
                          <li><a href="index-dark-mp-layout1.html">Dark Multi Page Layout1</a></li>
                          <li><a href="index-dark-mp-layout2.html">Dark Multi Page Layout2</a></li>
                          <li><a href="index-dark-mp-layout3.html">Dark Multi Page Layout3</a></li>
                          <li><a href="index-dark-mp-layout4.html">Dark Multi Page Layout4</a></li>
                          <li><a href="index-dark-mp-layout5.html">Dark Multi Page Layout5</a></li>
                          <li><a href="index-dark-mp-layout6.html">Dark Multi Page Layout6</a></li>
                          <li><a href="index-dark-mp-layout7.html">Dark Multi Page Layout7 <span className="label label-info">New</span></a></li>
                          <li><a href="index-dark-mp-layout8.html">Dark Multi Page Layout8 <span className="label label-info">New</span></a></li>
                          <li><a href="index-dark-mp-layout9.html">Dark Multi Page Layout9 <span className="label label-info">New</span></a></li>
                          <li><a href="index-dark-sp-layout1.html">Dark Single Page Layout1</a></li>
                          <li><a href="index-dark-sp-layout2.html">Dark Single Page Layout2</a></li>
                          <li><a href="index-dark-sp-layout3.html">Dark Single Page Layout3</a></li>
                          <li><a href="index-dark-sp-layout4.html">Dark Single Page Layout4</a></li>
                          <li><a href="index-dark-sp-layout5.html">Dark Single Page Layout5</a></li>
                          <li><a href="index-dark-sp-layout6.html">Dark Single Page Layout6</a></li>
                          <li><a href="index-dark-sp-layout7.html">Dark Single Page Layout7</a></li>
                          <li><a href="index-dark-sp-layout8.html">Dark Single Page Layout8</a></li>
                          <li><a href="index-dark-sp-layout9.html">Dark Single Page Layout9</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Magazine Home Layouts <span className="label label-info">New</span></a>
                        <ul className="dropdown">
                          <li><a href="index-magazine-home-layout1.html">Magazine Home layout1</a></li>
                          <li><a href="index-magazine-home-layout2.html">Magazine Home layout2</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Portfolio Home Layouts <span className="label label-info">New</span></a>
                        <ul className="dropdown">
                          <li><a href="index-portfolio-presentation-layout1.html">Portfolio Presentation Layout1</a></li>
                          <li><a href="index-portfolio-presentation-layout2.html">Portfolio Presentation Layout2</a></li>
                          <li><a href="index-portfolio-presentation-layout3.html">Portfolio Presentation Layout3</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Hot Layouts <span className="label label-info">New</span></a>
                        <ul className="dropdown">
                          <li><a href="index-split-slider-home.html">Split Slider Home Layout</a></li>
                          <li><a href="index-vertical-slider-home.html">Vertical Slider Home Layout</a></li>
                          <li><a href="index-fullscreen-home.html">Fullscreen Home Layout</a></li>
                          <li><a href="index-parallax-home.html">Parallax Home Layout</a></li>
                          <li><a href="index-personal-home.html">Personal Home Layout</a></li>
                        </ul>
                      </li>
                      <li><a href="index-shop-home.html">Shop Home <span className="label label-info">New</span></a></li>
                      <li><a href="#">Home Variations <span className="label label-info">New</span></a>
                        <ul className="dropdown">
                          <li><a href="#">Rev Slider</a>
                            <ul className="dropdown">
                              <li><a href="index-home-variation-revslider-style1.html">Layout1</a></li>
                              <li><a href="index-home-variation-revslider-style2.html">Layout2</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Maximage Slider</a>
                            <ul className="dropdown">
                              <li><a href="index-home-variation-maximageslider-style1.html">Layout1</a></li>
                              <li><a href="index-home-variation-maximageslider-style2.html">Layout2</a></li>
                              <li><a href="index-home-variation-maximageslider-style3.html">Layout3</a></li>
                            </ul>
                          </li>
                          <li><a href="index-home-variation-owl-carousel.html">Owl Slider</a></li>
                          <li><a href="index-home-variation-typed-text.html">Typed Text Layout</a></li>
                          <li><a href="index-home-variation-video-background.html">Youtube Background Video</a></li>
                          <li><a href="index-home-variation-html5-video.html">Html5 Background Video</a></li>
                          <li><a href="index-home-variation-bg-image-parallax.html">Bg Image Parallax Layout</a></li>
                          <li><a href="index-home-variation-bg-static.html">Bg Static Layout</a></li>
                          <li><a href="#">Home Appointment Form</a>
                            <ul className="dropdown">
                              <li><a href="index-home-variation-appointment-form-style1.html">Layout1</a></li>
                              <li><a href="index-home-variation-appointment-form-style2.html">Layout2</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#">Features <span className="label label-info">New</span></a>
                    <ul className="dropdown">
                      <li><a href="features-preloader.html">Preloaders</a></li>
                      <li><a href="#">Header</a>
                        <ul className="dropdown">
                          <li><a href="features-header-style1.html">Header Style1</a></li>
                          <li><a href="features-header-style2.html">Header Style2</a></li>
                          <li><a href="features-header-style3.html">Header Style3</a></li>
                          <li><a href="features-header-style4.html">Header Style4</a></li>
                          <li><a href="features-header-style5.html">Header Style5</a></li>
                          <li><a href="features-header-style6.html">Header Style6</a></li>
                          <li><a href="features-header-style7.html">Header Style7</a></li>
                          <li><a href="features-header-vertical-nav.html">Vertical Header</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Page Title</a>
                        <ul className="dropdown">
                          <li><a href="features-page-title-text-left.html">Text Left</a></li>
                          <li><a href="features-page-title-text-center.html">Text Center</a></li>
                          <li><a href="features-page-title-text-right.html">Text Right</a></li>
                          <li><a href="features-page-title-mini-version.html">Mini Version</a></li>
                          <li><a href="features-page-title-big-version.html">Big Version</a></li>
                          <li><a href="features-page-title-extra-big-version.html">Extra Big Version</a></li>
                          <li><a href="features-page-title-bg-white.html">Bg White</a></li>
                          <li><a href="features-page-title-bg-image.html">Bg Image</a></li>
                          <li><a href="features-page-title-bg-image-parallax.html">Bg Image Parallax</a></li>
                          <li><a href="features-page-title-bg-video.html">Bg Video</a></li>
                          <li><a href="features-page-title-full-transparent.html">Full Transparent</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Side Push Panel</a>
                        <ul className="dropdown">
                          <li><a href="features-side-push-panel-left-overlay.html">Left Overlay</a></li>
                          <li><a href="features-side-push-panel-left-push.html">Left Push</a></li>
                          <li><a href="features-side-push-panel-right-overlay.html">Right Overlay</a></li>
                          <li><a href="features-side-push-panel-right-push.html">Right Push</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Sliders</a>
                        <ul className="dropdown">
                          <li><a href="#">Revolution Slider</a>
                            <ul className="dropdown">
                              <li><a href="features-home-revslider.html">Revolution Slider</a></li>
                              <li><a href="features-rev-slider-premium-templates.html">Revolution Slider All In One</a></li>
                            </ul>
                          </li>
                          <li><a href="features-home-bg-image-slider.html">Bg Image Slider</a></li>
                          <li><a href="features-home-owl-fullwidth-carousel.html">Owl Fullwidth Carousel</a></li>
                          <li><a href="features-home-parallax-bg.html">Static/Parallax Image Bg</a></li>
                          <li><a href="features-home-video-bg.html">Video Image Bg</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Form</a>
                        <ul className="dropdown">
                          <li><a href="#">Login/Register Form</a>
                            <ul className="dropdown">
                              <li><a href="#">Login/Register</a>
                                <ul className="dropdown">
                                  <li><a href="form-login-register-style1.html">Form style 1</a></li>
                                  <li><a href="form-login-register-style2.html">Form style 2</a></li>
                                </ul>
                              </li>
                              <li><a href="#">Login</a>
                                <ul className="dropdown">
                                  <li><a href="form-login-style1.html">Form style 1</a></li>
                                  <li><a href="form-login-style2.html">Form style 2</a></li>
                                  <li><a href="form-login-style3.html">Form style 3</a></li>
                                </ul>
                              </li>
                              <li><a href="#">Register</a>
                                <ul className="dropdown">
                                  <li><a href="form-register-style1.html">Form style 1</a></li>
                                  <li><a href="form-register-style2.html">Form style 2</a></li>
                                  <li><a href="form-register-style3.html">Form style 3</a></li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li><a href="#">Subscribe Form</a>
                            <ul className="dropdown">
                              <li><a href="form-subscribe.html">Form style 1</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Appointment Form</a>
                            <ul className="dropdown">
                              <li><a href="form-appointment-style1.html">Form style 1</a></li>
                              <li><a href="form-appointment-style2.html">Form style 2</a></li>
                              <li><a href="form-appointment-style3.html">Form style 3</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Job Apply Form</a>
                            <ul className="dropdown">
                              <li><a href="form-job-apply-style1.html">Form style 1</a></li>
                              <li><a href="form-job-apply-style2.html">Form style 2</a></li>
                              <li><a href="form-job-apply-style3.html">Form style 3</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Quick Contact Form</a>
                            <ul className="dropdown">
                              <li><a href="form-quick-contact-style1.html">Form style 1</a></li>
                              <li><a href="form-quick-contact-style2.html">Form style 2</a></li>
                              <li><a href="form-quick-contact-style3.html">Form style 3</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="#">Paypal Form</a>
                        <ul className="dropdown">
                          <li><a href="#">Donation Onetime</a>
                            <ul className="dropdown">
                              <li><a href="form-paypal-donate-onetime-style1.html">Style1</a></li>
                              <li><a href="form-paypal-donate-onetime-style2.html">Style2</a></li>
                              <li><a href="form-paypal-donate-onetime-style3.html">Style3</a></li>
                              <li><a href="form-paypal-donate-onetime-style4.html">Style4</a></li>
                              <li><a href="form-paypal-donate-onetime-style5.html">Style5</a></li>
                              <li><a href="form-paypal-donate-onetime-style6.html">Style6</a></li>
                              <li><a href="form-paypal-donate-onetime-style7.html">Style7</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Donation Recurring</a>
                            <ul className="dropdown">
                              <li><a href="form-paypal-donate-recurring-style1.html">Style1</a></li>
                              <li><a href="form-paypal-donate-recurring-style2.html"> Style2</a></li>
                              <li><a href="form-paypal-donate-recurring-style3.html">Style3</a></li>
                              <li><a href="form-paypal-donate-recurring-style4.html">Style4</a></li>
                              <li><a href="form-paypal-donate-recurring-style5.html">Style5</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Both Onetime/Recurring</a>
                            <ul className="dropdown">
                              <li><a href="form-paypal-donate-both-onetime-recurring-style1.html">Style1</a></li>
                              <li><a href="form-paypal-donate-both-onetime-recurring-style2.html">Style2</a></li>
                              <li><a href="form-paypal-donate-both-onetime-recurring-style3.html">Style3</a></li>
                              <li><a href="form-paypal-donate-both-onetime-recurring-style4.html">Style4</a></li>
                            </ul>
                          </li>
                          <li><a href="form-paypal-cart-style1.html">Cart Payment</a></li>
                          <li><a href="form-paypal-order-style1.html">Order Payment Style1</a></li>
                          <li><a href="form-paypal-order-style2.html">Order Payment Style2</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Popup Promo Box</a>
                        <ul className="dropdown">
                          <li><a href="features-popup-promo-box.html">Default</a></li>
                          <li><a href="features-popup-promo-box-cookie-enabled.html">Cookie Enabled</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Footer</a>
                        <ul className="dropdown">
                          <li><a href="features-footer-style1.html#footer">Footer Dark One</a></li>
                          <li><a href="features-footer-style2.html#footer">Footer Dark Two</a></li>
                          <li><a href="features-footer-style3.html#footer">Footer Dark Three</a></li>
                          <li><a href="features-footer-style4.html#footer">Footer Dark Four</a></li>
                          <li><a href="features-footer-style5.html#footer">Footer Dark Five</a></li>
                          <li><a href="features-footer-style6.html#footer">Footer Dark Six</a></li>
                          <li><a href="features-footer-style7.html#footer">Footer Dark Seven</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#">Pages</a>
                    <ul className="dropdown">
                      <li><a href="#">About</a>
                        <ul className="dropdown">
                          <li><a href="page-about-style1.html">About Style 1</a></li>
                          <li><a href="page-about-style2.html">About Style 2</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Profile</a>
                        <ul className="dropdown">
                          <li><a href="page-account.html">Account</a></li>
                          <li><a href="page-account-edit.html">Edit Account</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Gallery</a>
                        <ul className="dropdown">
                          <li><a href="page-gallery-3col.html">3 Columns</a></li>
                          <li><a href="page-gallery-4col.html">4 Columns</a></li>
                          <li><a href="page-gallery-3col-only-image.html">3 Columns Only Image</a></li>
                          <li><a href="page-gallery-4col-only-image.html">4 Columns Only Image</a></li>
                          <li><a href="page-gallery-grid.html">Grids (2-10 Columns)</a></li>
                          <li><a href="page-gallery-grid-animation.html">Grids with Animation (2-10 Columns)</a></li>
                          <li><a href="page-gallery-masonry-tiles.html">Tiles (2-10 Columns)</a></li>
                          <li><a href="page-gallery-masonry-tiles-animation.html">Tiles with Animation (2-10 Columns)</a></li>
                          <li><a href="page-gallery-prettyphoto.html">Pretty Photo Gallery</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Pricing</a>
                        <ul className="dropdown">
                          <li><a href="page-pricing-style1.html">Pricing style1</a></li>
                          <li><a href="page-pricing-style2.html">Pricing style2</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Calender</a>
                        <ul className="dropdown">
                          <li><a href="page-calendar1.html">Calendar Style1</a></li>
                          <li><a href="page-calendar2.html">Calendar Style2</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Events</a>
                        <ul className="dropdown">
                          <li><a href="#">Events Grid</a>
                            <ul className="dropdown">
                              <li><a href="events-grid-2column.html">Grid 2column</a></li>
                              <li><a href="events-grid-3column.html">Grid 3column</a></li>
                              <li><a href="events-grid-4column.html">Grid 4column</a></li>
                              <li><a href="events-grid-left-sidebar.html">Grid Left Sidebar</a></li>
                              <li><a href="events-grid-right-sidebar.html">Grid Right Sidebar</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Events List</a>
                            <ul className="dropdown">
                              <li><a href="events-list-left-sidebar.html">List Left Sidebar</a></li>
                              <li><a href="events-list-right-sidebar.html">List Right Sidebar</a></li>
                              <li><a href="events-list-no-sidebar.html">List No Sidebar</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Events Details</a>
                            <ul className="dropdown">
                              <li><a href="events-details-style1.html">Details Style1</a></li>
                              <li><a href="events-details-style2.html">Details Style2</a></li>
                              <li><a href="events-details-style3.html">Details Style3</a></li>
                            </ul>
                          </li>
                          <li><a href="events-table.html">Events Table</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Job <span className="label label-success">New</span></a>
                        <ul className="dropdown">
                          <li><a href="job-list.html">Job List</a></li>
                          <li><a href="job-details-style1.html">Job Details Style1</a></li>
                          <li><a href="job-details-style2.html">Job Details Style2</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Shop</a>
                        <ul className="dropdown">
                          <li><a href="shop-category.html">Category</a></li>
                          <li><a href="shop-category-sidebar.html">Category Sidebar</a></li>
                          <li><a href="shop-product-details.html">Product Details</a></li>
                          <li><a href="shop-cart.html">Cart</a></li>
                          <li><a href="shop-checkout.html">Checkout</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Contact</a>
                        <ul className="dropdown">
                          <li><a href="page-contact-style1.html">Contact style 1</a></li>
                          <li><a href="page-contact-style2.html">Contact style 2</a></li>
                          <li><a href="page-contact-style3.html">Contact style 3</a></li>
                          <li><a href="page-contact4-with-multiple-marker.html">Contact 4 - Multiple Marker</a></li>
                          <li><a href="page-contact5-with-multiple-marker.html">Contact 5 - Multiple Marker</a></li>
                        </ul>
                      </li>
                      <li><a href="#">FAQ</a>
                        <ul className="dropdown">
                          <li><a href="page-faq-style1.html">FAQ Style1</a></li>
                          <li><a href="page-faq-style2.html">FAQ Style2</a></li>
                          <li><a href="page-faq-style3.html">FAQ Style3</a></li>
                          <li><a href="page-faq-style4.html">FAQ Style4</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Page 404</a>
                        <ul className="dropdown">
                          <li><a href="page-404-style1.html">Style1</a></li>
                          <li><a href="page-404-style2.html">Style2</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Coming Soon</a>
                        <ul className="dropdown">
                          <li><a href="page-coming-soon-style1.html">style 1</a></li>
                          <li><a href="page-coming-soon-style2.html">style 2</a></li>
                          <li><a href="page-coming-soon-style3.html">style 3</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Under Construction</a>
                        <ul className="dropdown">
                          <li><a href="page-under-construction-style1.html">Style1</a></li>
                          <li><a href="page-under-construction-style2.html">Style2</a></li>
                          <li><a href="page-under-construction-style3.html">Style3</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#">Portfolio <span className="label label-info">New</span></a>
                    <ul className="dropdown">
                      <li><a href="#">Boxed</a>
                        <ul className="dropdown">
                          <li><a href="#">Gutter</a>
                            <ul className="dropdown">
                              <li><a href="portfolio-boxed-gutter-1-col.html">1 Column</a></li>
                              <li><a href="portfolio-boxed-gutter-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-boxed-gutter-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-boxed-gutter-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-boxed-gutter-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-boxed-gutter-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-boxed-gutter-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-boxed-gutter-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-boxed-gutter-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-boxed-gutter-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Gutter Less</a>
                            <ul className="dropdown">
                              <li><a href="portfolio-boxed-1-col.html">1 Column</a></li>
                              <li><a href="portfolio-boxed-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-boxed-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-boxed-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-boxed-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-boxed-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-boxed-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-boxed-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-boxed-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-boxed-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Title - Gutter</a>
                            <ul className="dropdown">
                              <li><a href="portfolio-boxed-title-gutter-1-col.html">1 Column</a></li>
                              <li><a href="portfolio-boxed-title-gutter-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-boxed-title-gutter-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-boxed-title-gutter-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-boxed-title-gutter-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-boxed-title-gutter-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-boxed-title-gutter-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-boxed-title-gutter-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-boxed-title-gutter-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-boxed-title-gutter-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Title - Gutter Less</a>
                            <ul className="dropdown">
                              <li><a href="portfolio-boxed-title-1-col.html">1 Column</a></li>
                              <li><a href="portfolio-boxed-title-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-boxed-title-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-boxed-title-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-boxed-title-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-boxed-title-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-boxed-title-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-boxed-title-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-boxed-title-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-boxed-title-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="#">Wide</a>
                        <ul className="dropdown">
                          <li><a href="#">Gutter</a>
                            <ul className="dropdown">
                              <li><a href="portfolio-wide-gutter-1-col.html">1 Column</a></li>
                              <li><a href="portfolio-wide-gutter-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-wide-gutter-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-wide-gutter-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-wide-gutter-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-wide-gutter-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-wide-gutter-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-wide-gutter-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-wide-gutter-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-wide-gutter-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                            <li><a href="#">Gutter Less</a>                        
                            <ul className="dropdown">
                              <li><a href="portfolio-wide-1-col.html">1 Column</a></li>
                              <li><a href="portfolio-wide-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-wide-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-wide-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-wide-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-wide-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-wide-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-wide-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-wide-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-wide-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Title - Gutter</a>
                            <ul className="dropdown">
                              <li><a href="portfolio-wide-title-gutter-1-col.html">1 Column</a></li>
                              <li><a href="portfolio-wide-title-gutter-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-wide-title-gutter-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-wide-title-gutter-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-wide-title-gutter-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-wide-title-gutter-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-wide-title-gutter-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-wide-title-gutter-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-wide-title-gutter-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-wide-title-gutter-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                            <li><a href="#">Title - Gutter Less</a>                        
                            <ul className="dropdown">
                              <li><a href="portfolio-wide-title-1-col.html">1 Column</a></li>
                              <li><a href="portfolio-wide-title-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-wide-title-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-wide-title-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-wide-title-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-wide-title-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-wide-title-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-wide-title-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-wide-title-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-wide-title-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="#">Masonry Boxed</a>
                        <ul className="dropdown">
                          <li><a href="#">Gutter</a>
                            <ul className="dropdown">
                              <li><a href="portfolio-masonry-boxed-gutter-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-gutter-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-gutter-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-gutter-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-gutter-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-gutter-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-gutter-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-gutter-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-gutter-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Gutter Less</a>
                            <ul className="dropdown">
                              <li><a href="portfolio-masonry-boxed-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Title - Gutter</a>
                            <ul className="dropdown">
                              <li><a href="portfolio-masonry-boxed-gutter-title-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-gutter-title-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-gutter-title-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-gutter-title-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-gutter-title-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-gutter-title-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-gutter-title-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-gutter-title-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-gutter-title-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Title - Gutter Less</a>
                            <ul className="dropdown">
                              <li><a href="portfolio-masonry-boxed-title-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-title-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-title-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-title-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-title-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-title-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-title-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-title-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-masonry-boxed-title-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="#">Masonry Wide</a>
                        <ul className="dropdown">
                          <li><a href="#">Gutter</a>
                            <ul className="dropdown">
                              <li><a href="portfolio-masonry-wide-gutter-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-gutter-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-gutter-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-gutter-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-gutter-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-gutter-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-gutter-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-gutter-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-gutter-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Gutter Less</a>
                            <ul className="dropdown">
                              <li><a href="portfolio-masonry-wide-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Title - Title - Gutter</a>
                            <ul className="dropdown">
                              <li><a href="portfolio-masonry-wide-gutter-title-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-gutter-title-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-gutter-title-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-gutter-title-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-gutter-title-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-gutter-title-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-gutter-title-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-gutter-title-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-gutter-title-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Title - Title - Gutter Less</a>
                            <ul className="dropdown">
                              <li><a href="portfolio-masonry-wide-title-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-title-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-title-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-title-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-title-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-title-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-title-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-title-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-masonry-wide-title-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="#">Tiles Boxed</a>
                        <ul className="dropdown">
                          <li><a href="#">Gutter</a>
                            <ul className="dropdown">
                              <li><a href="portfolio-tiles-boxed-gutter-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-gutter-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-gutter-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-gutter-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-gutter-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-gutter-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-gutter-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-gutter-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-gutter-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Gutter Less</a>
                            <ul className="dropdown">
                              <li><a href="portfolio-tiles-boxed-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Title - Gutter</a>
                            <ul className="dropdown">
                              <li><a href="portfolio-tiles-boxed-title-gutter-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-title-gutter-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-title-gutter-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-title-gutter-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-title-gutter-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-title-gutter-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-title-gutter-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-title-gutter-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-title-gutter-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Title - Gutter Less</a>
                            <ul className="dropdown">
                              <li><a href="portfolio-tiles-boxed-title-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-title-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-title-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-title-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-title-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-title-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-title-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-title-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-tiles-boxed-title-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="#">Tiles Wide</a>
                        <ul className="dropdown">
                          <li><a href="#">Gutter</a>
                            <ul className="dropdown">
                              <li><a href="portfolio-tiles-wide-gutter-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-gutter-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-gutter-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-gutter-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-gutter-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-gutter-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-gutter-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-gutter-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-gutter-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Gutter Less</a>
                            <ul className="dropdown">
                              <li><a href="portfolio-tiles-wide-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Title - Gutter</a>
                            <ul className="dropdown">
                              <li><a href="portfolio-tiles-wide-title-gutter-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-title-gutter-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-title-gutter-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-title-gutter-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-title-gutter-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-title-gutter-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-title-gutter-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-title-gutter-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-title-gutter-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                          <li><a href="#">Title - Gutter Less</a>
                            <ul className="dropdown">
                              <li><a href="portfolio-tiles-wide-title-2-col.html">2 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-title-3-col.html">3 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-title-4-col.html">4 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-title-5-col.html">5 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-title-6-col.html">6 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-title-7-col.html">7 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-title-8-col.html">8 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-title-9-col.html">9 Columns</a></li>
                              <li><a href="portfolio-tiles-wide-title-10-col.html">10 Columns</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="#">Loading Styles</a>
                        <ul className="dropdown">
                          <li><a href="portfolio-extra-infinity-scroll.html">Infinity Scroll</a></li>
                          <li><a href="portfolio-extra-infinity-scroll-lazyload.html">Infinity Scroll Lazyload</a></li>
                          <li><a href="portfolio-extra-pagination.html">Pagination</a></li>
                          <li><a href="portfolio-extra-jquery-pagination.html">Pagination Jquery</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Single</a>
                        <ul className="dropdown">
                          <li><a href="portfolio-details-image.html">With - Image</a></li>
                          <li><a href="portfolio-details-image-gallery.html">With - Image Gallery</a></li>
                          <li><a href="portfolio-details-video-gallery.html">With - Video Gallery</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#home">Courses</a>
                    <ul className="dropdown">
                      <li><a href="page-course-gird.html">Course Gird</a></li>
                      <li><a href="page-course-list.html">Course List</a></li>
                      <li><a href="page-courses-accounting-technologies.html">Course Details</a></li>
                    </ul>
                  </li>
                  <li><a href="#home">Teachers</a>
                    <ul className="dropdown">
                      <li><a href="page-teachers-style1.html">Teachers style 1</a></li>
                      <li><a href="page-teachers-style2.html">Teachers style 2</a></li>
                      <li><a href="page-teachers-details.html">Teachers Details</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Blog</a>
                    <ul className="dropdown">
                      <li><a href="#">Blog Classic</a>
                        <ul className="dropdown">
                          <li><a href="blog-classic-no-sidebar.html">Blog Classic No Sidebar</a></li>
                          <li><a href="blog-classic-left-sidebar.html">Blog Classic Left Sidebar</a></li>
                          <li><a href="blog-classic-right-sidebar.html">Blog Classic Right Sidebar</a></li>
                          <li><a href="blog-classic-both-sidebar.html">Blog Classic Both Sidebar</a></li>
                          <li><a href="blog-classic-left-thumbs.html">Blog Classic Left Thumbs</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Blog Grid</a>
                        <ul className="dropdown">
                          <li><a href="blog-grid-2-column.html">Blog Grid 2 Column</a></li>
                          <li><a href="blog-grid-3-column.html">Blog Grid 3 Column</a></li>
                          <li><a href="blog-grid-4-column.html">Blog Grid 4 Column</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Blog Masonry</a>
                        <ul className="dropdown">
                          <li><a href="blog-masonry-2-column.html">Blog Masonry 2 Column</a></li>
                          <li><a href="blog-masonry-3-column.html">Blog Masonry 3 Column</a></li>
                          <li><a href="blog-masonry-4-column.html">Blog Masonry 4 Column</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Blog Single</a>
                        <ul className="dropdown">
                          <li><a href="blog-single-no-sidebar.html">Blog Single No Sidebar</a></li>
                          <li><a href="blog-single-left-sidebar.html">Blog Single Left Sidebar</a></li>
                          <li><a href="blog-single-right-sidebar.html">Blog Single Right Sidebar</a></li>
                          <li><a href="blog-single-both-sidebar.html">Blog Single Both Sidebar</a></li>
                          <li><a href="blog-single-disqus-comments.html">Blog Single Discuss Comments</a></li>
                          <li><a href="blog-single-facebook-comments.html">Blog Single Facebook Comments</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Blog Infinity Scroll</a>
                        <ul className="dropdown">
                          <li><a href="blog-extra-infinity-scroll.html">Blog Infinity Scroll Default</a></li>
                          <li><a href="blog-extra-infinity-scroll-lazyload.html">Blog Infinity Scroll Lazyload</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Blog Timeline</a>
                        <ul className="dropdown">
                          <li><a href="blog-timeline.html">Blog Timeline Default</a></li>
                          <li><a href="blog-timeline-masonry.html">Blog Timeline Masonry</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="javascript:void(0)">Shortcodes</a>
                    <div className="megamenu">
                      <div className="megamenu-row">
                        <div className="col3">
                          <ul className="list-unstyled list-dashed">
                            <li><a href="shortcode-accordion.html"><i className="fa fa-list-ul"></i> Accordion</a></li>
                            <li><a href="shortcode-alerts.html"><i className="fa fa-exclamation-circle"></i> Alerts</a></li>
                            <li><a href="shortcode-animations.html"><i className="fa fa-magic"></i> Animations</a></li>
                            <li><a href="shortcode-background-html5-video.html"><i className="fa fa-video-camera"></i> HTML5 Background Video</a></li>
                            <li><a href="shortcode-blockquotes.html"><i className="fa fa-quote-right"></i> Blockquotes</a></li>
                            <li><a href="shortcode-button-groups-and-dropdowns.html"><i className="fa fa-link"></i> Button Groups</a></li>
                            <li><a href="shortcode-button-hover-effect.html"><i className="fa fa-flag-o"></i> Button Hover Effect</a></li>
                            <li><a href="shortcode-buttons.html"><i className="fa fa-external-link"></i> Buttons</a></li>
                            <li><a href="shortcode-call-to-actions.html"><i className="fa fa-plus-square"></i> Call To Actions</a></li>
                            <li><a href="shortcode-charts.html"><i className="fa fa-pie-chart"></i> Charts</a></li>
                            <li><a href="shortcode-columns-grids.html"><i className="fa fa-columns"></i> Columns Grids</a></li>
                            <li><a href="shortcode-divider.html"><i className="fa fa-indent"></i> Divider</a></li>
                            <li><a href="shortcode-dropcaps.html"><i className="fa fa-bold"></i> Dropcaps</a></li>
                            <li><a href="shortcode-datetime-datepicker.html"><i className="fa fa-calendar"></i> Date Picker</a></li>
                            <li><a href="shortcode-datetime-timepicker.html"><i className="fa fa-calendar"></i> Time Picker</a></li>
                          </ul>
                        </div>
                        <div className="col3">
                          <ul className="list-unstyled list-dashed">
                            <li><a href="shortcode-datetime-datetimepicker.html"><i className="fa fa-calendar"></i> Bootstrap Date-Time Picker</a></li>
                            <li><a href="shortcode-datetime-datepair.html"><i className="fa fa-calendar"></i> Date Pair</a></li>
                            <li><a href="shortcode-flex-sliders.html"><i className="fa fa-sliders"></i> Flex Sliders</a></li>
                            <li><a href="shortcode-flipbox.html"><i className="fa fa-square"></i> Flipbox</a></li>
                            <li><a href="shortcode-forms.html"><i className="fa fa-align-justify"></i> Forms</a></li>
                            <li><a href="shortcode-iconbox.html"><i className="fa fa-unsorted"></i> Icon Box</a></li>
                            <li><a href="shortcode-icon-7stroke.html"><i className="fa fa-circle-o"></i> Icons 7stroke</a></li>
                            <li><a href="shortcode-icon-elegant-icons.html"><i className="fa fa-eye-slash"></i> Icons Elegant</a></li>
                            <li><a href="shortcode-icon-flat-color-icons.html"><i className="fa fa-i-cursor"></i> Icons Flat Color</a></li>
                            <li><a href="shortcode-icon-fontawesome.html"><i className="fa fa-fort-awesome"></i> Icons FontAwesome</a></li>
                            <li><a href="shortcode-icon-fontawesome-tutorial.html"><i className="fa fa-fonticons"></i> Icons FontAwesome Tutorial</a></li>
                            <li><a href="shortcode-icon-strokegap.html"><span className="strokegap-icon strokegap-icon-WorldWide"></span> Icons Strokegap</a></li>
                            <li><a href="shortcode-image-box.html"><i className="fa fa-file-image-o"></i> Image Box</a></li>
                            <li><a href="shortcode-instagram.html"><i className="fa fa-instagram"></i> Instagram Feed</a></li>
                            <li><a href="shortcode-labels-badges.html"><i className="fa fa-check-square-o"></i> Labels Badges</a></li>
                          </ul>
                        </div>
                        <div className="col3">
                          <ul className="list-unstyled list-dashed">
                            <li><a href="shortcode-listgroup-panels.html"><i className="fa fa-th-list"></i> Listgroup Panels</a></li>
                            <li><a href="shortcode-lists.html"><i className="fa fa-list"></i> Lists</a></li>
                            <li><a href="shortcode-maps.html"><i className="fa fa-map-o"></i> Maps</a></li>
                            <li><a href="shortcode-media-embed.html"><i className="fa fa-play-circle-o"></i> Media Embed</a></li>
                            <li><a href="shortcode-modal-bootstrap.html"><i className="fa fa-search-plus"></i> Modal</a></li>
                            <li><a href="shortcode-modal-lightbox.html"><i className="fa fa-expand"></i> Lightbox</a></li>
                            <li><a href="shortcode-navigation.html"><i className="fa fa-navicon"></i> Navigation</a></li>
                            <li><a href="shortcode-owl-carousel.html"><i className="fa fa-sliders"></i> Owl Carousel</a></li>
                            <li><a href="shortcode-pagination.html"><i className="fa fa-arrow-circle-o-right"></i> Pagination</a></li>
                            <li><a href="shortcode-progressbar.html"><i className="fa fa-tasks"></i> Progress Bars</a></li>
                            <li><a href="shortcode-responsive.html"><i className="fa fa-tablet"></i> Responsive</a></li>
                            <li><a href="shortcode-separator.html"><i className="fa fa-minus-square-o"></i> Separator</a></li>
                            <li><a href="shortcode-sitemap.html"><i className="fa fa-sitemap"></i> Sitemap</a></li>
                            <li><a href="shortcode-sliders.html"><i className="fa fa-sliders"></i> Sliders</a></li>
                            <li><a href="shortcode-smoothscrolling.html"><i className="fa fa-binoculars"></i> Smoothscrolling</a></li>
                          </ul>
                        </div>
                        <div className="col3">
                          <ul className="list-unstyled list-dashed">
                            <li><a href="shortcode-styled-icons.html"><i className="fa fa-facebook-square"></i> Styled Icons</a></li>
                            <li><a href="shortcode-subscribe.html"><i className="fa fa-user-plus"></i> Subscribe</a></li>
                            <li><a href="shortcode-tables.html"><i className="fa fa-table"></i> Tables</a></li>
                            <li><a href="shortcode-tabs.html"><i className="fa fa-indent"></i> Tabs</a></li>
                            <li><a href="shortcode-textblock.html"><i className="fa fa-bold"></i> Textblock</a></li>
                            <li><a href="shortcode-thumbnails-carousels.html"><i className="fa fa-sliders"></i> Thumbnails/carousels</a></li>
                            <li><a href="shortcode-title.html"><i className="fa fa-text-height"></i> Title</a></li>
                            <li><a href="shortcode-timer-final-countdown.html"><i className="fa fa-text-height"></i> Timer Final Countdown</a></li>
                            <li><a href="shortcode-timer-flipclock.html"><i className="fa fa-text-height"></i> Timer Flipclock</a></li>
                            <li><a href="shortcode-timer-slick-circular.html"><i className="fa fa-text-height"></i> Timer Slick Circular</a></li>
                            <li><a href="shortcode-twitter.html"><i className="fa fa-twitter-square"></i> Twitter Feed</a></li>
                            <li><a href="shortcode-typography.html"><i className="fa fa-font"></i> Typography</a></li>
                            <li><a href="shortcode-vertical-timeline.html"><i className="fa fa-arrows-v"></i> Vertical Timeline</a></li>
                            <li><a href="shortcode-widgets.html"><i className="fa fa-gift"></i> Widgets</a></li>
                            <li><a href="shortcode-working-process.html"><i className="fa fa-exchange"></i> Working Process</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="pull-right flip hidden-sm hidden-xs">
                  <li>
                    <a className="btn btn-colored btn-flat bg-theme-color-2 text-white font-14 bs-modal-ajax-load mt-0 p-25 pr-15 pl-15" data-toggle="modal" data-target="#BSParentModal" href="ajax-load/reservation-form.html">Book Now</a>
            
                  </li>
                </ul>
                <div id="top-search-bar" className="collapse">
                  <div className="container">
                    <form role="search" action="#" className="search_form_top" method="get">
                      <input type="text" placeholder="Type text and press Enter..." name="s" className="form-control" autocomplete="off"/>
                      <span className="search-close"><i className="fa fa-search"></i></span>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;