// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>{`
            img.wp-smiley,
            img.emoji {
              display: inline !important;
              border: none !important;
              box-shadow: none !important;
              height: 1em !important;
              width: 1em !important;
              margin: 0 .07em !important;
              vertical-align: -0.1em !important;
              background: none !important;
              padding: 0 !important;
            }
          `}</style>
          <link rel="stylesheet" href="http://www.hoaphat.com.vn/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=4.4"/>
          <link rel="stylesheet" href="http://www.hoaphat.com.vn/wp-content/themes/tapdoan/css/bootstrap.min.css?ver=1.0"/>
          <link rel="stylesheet" href="http://www.hoaphat.com.vn/wp-content/themes/tapdoan/css/bxslider.css?ver=1.0"/>
          <link rel="stylesheet" href="http://www.hoaphat.com.vn/wp-content/themes/tapdoan/css/font-awesome.min.css?ver=1.0" />
          <link rel="stylesheet" href="http://www.hoaphat.com.vn/wp-content/themes/tapdoan/css/gallery.css?ver=1.0" />
          
        
          {/* <script type='text/javascript' src='http://www.hoaphat.com.vn/wp-includes/js/jquery/jquery.js?ver=1.12.4'></script> */}
          <script type='text/javascript' src='http://www.hoaphat.com.vn/wp-content/themes/tapdoan/js/jquery.min.js?ver=1.0'></script>
          <script type='text/javascript' src='http://www.hoaphat.com.vn/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1'></script>
          <script src="http://www.hoaphat.com.vn/wp-content/themes/tapdoan/js/bootstrap.min.js?ver=1.0" />
          <script src="http://www.hoaphat.com.vn/wp-content/themes/tapdoan/js/jquery.bxslider.min.js?ver=1.0" />
          <script src="http://www.hoaphat.com.vn/wp-content/themes/tapdoan/js/highslide-with-gallery.js?ver=1.0" />
          <script src="http://www.hoaphat.com.vn/wp-content/themes/tapdoan/js/highslide-with-gallery.js?ver=1.0" />
        
          <style>{`
          .g { margin:0px; padding:0px; overflow:hidden; line-height:1; zoom:1; }
          .g img { height:auto; }
          .g-col { position:relative; float:left; }
          .g-col:first-child { margin-left: 0; }
          .g-col:last-child { margin-right: 0; }
          .g-2 { min-width:0px; max-width:625px; }
          .b-2 { margin:0px; }
          .g-3 { min-width:0px; max-width:625px; }
          .b-3 { margin:0px; }
          @media only screen and (max-width: 480px) {
            .g-col, .g-dyn, .g-single { width:100%; margin-left:0; margin-right:0; }
          }
          .bx-pager {
            display: none;
          }
          
          .logo {
            left: 0 !important;
          }
          .slide {
            margin-right: 10px;
          }
          `}</style>
          <link rel="stylesheet" href="/static/style.css"/>
          <script dangerouslySetInnerHTML={{
            __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/5b503710df040c3e9e0bba7e/default';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
            `
          }} />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={
            {__html: ``}
            } />

          <style>{`
            @media (max-width: 600px){
              .navbar-brand {
                height: 20px !important;
              }
            }
          `}</style>
        </body>
      </html>
    )
  }
}
