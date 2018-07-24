import Layout from '../components/layout'
import Link from 'next/link'
class ReactWr extends React.Component {
    render() {
        return (
            <Layout>
                <div className="show" style={{marginTop: 80}}>
                <div className="box_slider" id="box_slider">
                <ul className="bxslider">
                    <li><a href="#"><img src="/static/slider/1.jpg" /></a></li>
                    <li><a href="#"><img src="/static/slider/2.jpg" /></a></li>
                    <li><a href="#"><img src="/static/slider/3.jpg" /></a></li>
                    <li><a href="#"><img src="/static/slider/4.jpg" /></a></li>
                    <li><a href="#"><img src="/static/slider/5.jpg" /></a></li>
                    <li><a href="#"><img src="/static/slider/6.jpg" /></a></li>
                    <li><a href="#"><img src="/static/slider/7.jpg" /></a></li>
                    <li><a href="#"><img src="/static/slider/8.jpg" /></a></li>
                </ul>
                </div>
                <style type="text/css" dangerouslySetInnerHTML={{__html: "\n    .show{ position: relative; }\n    .video-home{ position: absolute;z-index: 111;right: 150px;top:150px;}\n" }} />
                </div>

                <div className="box_slideMember" id="box_slideMember">
                <div className="container">
                <div className="bxslider">
                    <div className="slide">
                        <Link href="/dich-vu">
                            <a><img src="http://www.hoaphat.com.vn/wp-content/uploads/lo-go-thep-xay-dung.png" />In ấn</a>
                        </Link>    
                    </div>
                    <div className="slide">
                        <Link href="/dich-vu">
                            <a><img src="http://www.hoaphat.com.vn/wp-content/uploads/lo-go-ong-thep.png" />Design</a>
                        </Link>
                    </div>
                    <div className="slide">
                        <Link href="/dich-vu">
                            <a><img src="http://www.hoaphat.com.vn/wp-content/uploads/lo-go-dien-lanh.png" />Website</a>
                        </Link>
                    </div>
                    <div className="slide">
                        <Link href="/dich-vu">
                            <a><img src="http://www.hoaphat.com.vn/wp-content/uploads/lo-go-thiet-bi-phu-tung.png" />Marketing</a>
                        </Link>
                    </div>
                </div>
                </div>
                </div>
            </Layout>
        )
    }

    componentDidMount() {
        
    }
}

export default ReactWr