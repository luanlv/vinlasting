import Link from 'next/link'

class Layout extends React.Component {
    
    render() {
        return(
            <div>
                <div className="fix" />
                
                <div className="box_header" style={{marginBottom: 80}}>
                    <div className="box_fixed">
                        <div className="container">
                        <div className="menu_fixed">
                            <div id="polylang-2" className="widget widget_polylang"><ul>
                                <li className="lang-item lang-item-2 lang-item-vi current-lang"><a hrefLang="vi" href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFsSURBVHjaYvzPgAD/UNlYEUAAmuTYAAAQhAEYqF/zFbe50RZ1cMmS9TLi0pJLRjZohAMTGFUN9HdnHgEE1sDw//+Tp0ClINW/f4NI9d////3+f+b3/1+////+9f/XL6A4o6ws0AaAAGIBm/0fRTVQ2v3Pf97f/4/9Aqv+DdHA8Ps3UANAALEAMSNQNdDGP3+ALvnf8vv/t9//9X/////7f+uv/4K//iciNABNBwggsJP+/IW4kuH3n//1v/8v+wVSDURmv/57//7/CeokoKFA0wECiAnkpL9/wH4CO+DNr/+VQA1A9PN/w6//j36CVIMRxEkAAQR20m+QpSBXgU0CuSTj9/93v/8v//V/xW+48UBD/zAwAAQQSAMzOMiABoBUswCd8ev/M7A669//OX7///Lr/x+gBlCoAJ0DEEAgDUy//zBISoKNAfoepJNRFmQkyJecfxj4/kDCEIiAigECiPErakTiiWMIAAgwAB4ZUlqMMhQQAAAAAElFTkSuQmCC" title="Tiếng Việt" alt="Tiếng Việt" /></a></li>
                            </ul>
                            </div>							
                        </div>
                        </div>
                    </div>
                    <div className="box_menuMain" id="box_menuMain">
                        <div className="container">
                        <div className="row">
                            <div className="hidden-sm hidden-xs col-md-2 images">
                                <Link href="/">
                                    <a><img className="logo" alt src="/static/logo.jpg" /></a>
                                </Link>
                            </div>
                            <div className="col-md-10 col-sm-12 full">
                            <nav className="navbar navbar-default" role="navigation" id="navigation">
                                <div className="box_content">
                                <div className="navbar-header hidden-lg hidden-md">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#my-navbar">
                                    <span className="sr-only">Toggle Menu</span>
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    </button>
                                    <Link href="/">
                                        <a className="navbar-brand" ><img style={{left: 60}} src="/static/logo.jpg" /></a>
                                    </Link>
                                    <a className="navbar-brand search">
                                    <div className="dropdown">
                                        <ul className="dropdown-menu search_drop" aria-labelledby="dropdownMenu1">
                                        <li>
                                            <form role="search" action="#/" method="get" className="search-form" id="searchform">
                                            <div className="input-group input-group-sm">
                                                <input type="text" name="s" id="s" className="form-control" placeholder="Search for..." onfocus="if (this.value == 'Search') {this.value = '';}" onblur="if (this.value == '')  {this.value = '';}" defaultValue />
                                                <span className="input-group-btn">
                                                <button className="btn btn-default search-submit" id="searchsubmit" type="submit">
                                                    <span className="glyphicon glyphicon-search" />
                                                </button>
                                                </span>
                                            </div>
                                            </form>
                                        </li>
                                        </ul>
                                    </div>
                                    </a>
                                </div>
                                <div className="collapse navbar-collapse" id="my-navbar">
                                    <ul className="nav navbar-nav navbar-right hidden-xs">
                                    <li className="dropdown search">
                                        <ul className="dropdown-menu">
                                        <li>
                                            <form role="search" action="http://www.hoaphat.com.vn/vi/" method="get" className="search-form" id="searchform">
                                            <div className="input-group input-group-sm">
                                                <input type="text" name="s" id="s" className="form-control" placeholder="Search for..." onfocus="if (this.value == 'Search') {this.value = '';}" onblur="if (this.value == '')  {this.value = 'Search';}" defaultValue="Search" />
                                                <span className="input-group-btn">
                                                <button className="btn btn-default search-submit" id="searchsubmit" type="submit">
                                                    <span className="glyphicon glyphicon-search" />
                                                </button>
                                                </span>
                                            </div>
                                            </form>
                                        </li>
                                        </ul>
                                    </li>
                                    </ul>
                                    <ul id="menu-main-menu" className>
                                        <li id="menu-item-52" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-52">
                                            <Link href="/">
                                                <a>Trang chủ</a>
                                            </Link>
                                        </li>
                                    <li id="menu-item-2332" className="Gioithieu menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-2332"><a href="#">Giới thiệu</a>
                                        <ul className="sub-menu">
                                        <li id="menu-item-85" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-85"><a href="#">Giới thiệu chung</a></li>
                                        <li id="menu-item-86" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-86"><a href="#">Sứ mệnh tầm nhìn</a></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-741" className="Gioithieu menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-741"><a href="#">Lĩnh vực hoạt động</a>
                                        <ul className="sub-menu">
                                        <li id="menu-item-742" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-742">
                                            <Link href="/dich-vu">
                                                <a>Design - In ấn</a>
                                            </Link>
                                        </li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-8006" className="menu-item menu-item-type-taxonomy menu-item-object-news-category menu-item-8006"><a href="#">Tin tức</a>
                                    </li>
                                    </ul>							</div>
                                </div>
                            </nav>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>


                
                {this.props.children}


                <div className="box_footer" style={{marginTop: 80}}>
                <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                    <div className="menuBottom">
                        <ul id="menu-bottom-menu" className><li id="menu-item-104" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-104">
                            <a href="#">Trang chủ</a></li>
                        <li id="menu-item-2331" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2331"><a href="#">Giới thiệu</a></li>
                        <li id="menu-item-108" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-108"><a href="#">Tin tức</a></li>
                        <li id="menu-item-109" className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-109"><a href="#">Tuyển dụng</a></li>
                        </ul>	         				<div className="hidden-sm link">
                        <select onchange="if (this.value != '') window.open(this.value, '_blank');">
                            <option selected="selected" value>Liên kết Website</option>
                        </select>
                        </div>
                    </div>
                    </div>
                    <div className="col-xs-12">
                    <div className="box_address">
                        <div id="wp_editor_widget-3" className="widget WP_Editor_Widget"><div className="row">
                            <div className="col-sm-4 space">
                            <h3 className="title">Miền Bắc</h3>
                            <p className="thunnghiem">Văn phòng: Số 51 C1b, Ngõ 231 Tân Mai, Hoàng Mai, Hà Nội</p>
                            <p>Hotline: 0936.734.686 0989.899.179</p>
                            </div>
                        </div>
                        </div>       				 	</div>
                    </div>
                    <div className="col-xs-12">
                    <div className="design">
                        <div className="row">
                        <div className="col-sm-9 col-xs-12">
                            <div className="headquarter">
                            <div id="wp_editor_widget-2" className="widget WP_Editor_Widget"><p>2018 ©&nbsp;<strong>Vinlasting</strong>. All Right Reserved.</p>
                                <p>Trụ sở: Số 51 C1b, Ngõ 231 Tân Mai, Hoàng Mai, Hà Nội, Việt Nam.</p>
                            </div>	         				 		</div>
                        </div>
                        <div className="col-sm-3 col-xs-12">
                            <div className="designer">
                            Thiết kế bởi <a href="http://vinlasting.com" target="_blank">Vinlasting</a> 
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>

                
            </div>
        )
    }

    componentDidMount() {
        if(process.browser && typeof window !== 'undefined' &&  typeof $ !== 'undefined' ) {
            var menu = '#my-navbar > ul:last';
        $(menu).addClass('nav navbar-nav navbar-right menu');
        $(menu + ' li').each(function(index) {
            var chil = $('ul:first', this).length;
            if(chil > 0) {
                $(this).addClass('dropdown');
                $('ul:first', this).addClass('dropdown-menu main').attr('role', 'menu');			
            }
        });
        $('document').ready(function() {
            $('#my-navbar > ul').show();
        });

        $(window).scroll(function () {
            var topPage = $(window).scrollTop();
            if(topPage > 5) {
                $('.box_fixed').hide();
                $('.box_header').css({ 'box-shadow': '0 0 3px #CCC', 'background-color': '#fff'});
                $('.box_menuMain').css({ 'height': '50px','line-height': '50px', 'background-color': '#fff'});
                $('.box_menuMain .images img').css({ 'top': '-5px', 'height':'40px'});
                $('.box_menuMain .navbar-nav > li > a').css({ 'line-height': '50px', 'height':'50px'});
                
                $('.box_menuMain').css({ 'height': '50px'});
                $('.box_menuMain .dropdown-menu').css({ 'background-color': '#fff'});
            } else {         
                $('.box_fixed').removeAttr('style');
                $('.box_header').removeAttr('style'); 
                $('.box_menuMain .images img').removeAttr('style'); 
                $('.box_menuMain .navbar-nav > li > a').removeAttr('style'); 
                $('.box_menuMain').removeAttr('style');  
                $('.box_menuMain .dropdown-menu').removeAttr('style');
            }

            $('.navbar-collapse a').click(function () {
                $('.navbar-collapse').removeClass('in');
            });
        });

        $('.box_menuMain .navbar-nav .Gioithieu a').addClass('icon');
        
        // Slider
        $('#box_slideMember').show();
        $('#box_slider .bxslider').bxSlider({
            mode: 'fade',
            auto: true,
            captions: false,
            control: false
        });
        $('#box_slideMember .bxslider').bxSlider({
            slideWidth: 208,
            minSlides: 1,
            maxSlides: 4,
            moveSlides: 1,
            auto: true,
            autoControls: true
        })
        $('.module_post .module_content .item .extent').addClass('module_detail');


        }
    }
}



export default Layout