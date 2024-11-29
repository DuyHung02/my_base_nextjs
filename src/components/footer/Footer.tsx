import { Row, Col, Flex, Image, Input, Button } from 'antd';
import './Footer.css'
import React from 'react';

const Footer = () => {
  return(
    <footer className="footer">
     <div className="container container_footer">
       <Row
         justify="space-between"
         className="row-wrap"
         align="middle"
         gutter={[16, 16]}
       >
         <Col xs={12} sm={12} md={6} lg={6} xl={6}>
           <div className="item-footer">
             <h5>Về Cỏ Mềm</h5>
             <span>Chuyện của Cỏ</span>
             <span> Về nhà máy</span>
           </div>
         </Col>
         <Col xs={12} sm={12} md={6} lg={6} xl={6}>
           <div className="item-footer">
             <h5>Hoạt động cộng đồng</h5>
             <span>Trồng rừng</span>
             <span> Về nhà máy</span>
             <span>Chung tay phòng chống COVID</span>
           </div>
         </Col>
         <Col xs={12} sm={12} md={6} lg={6} xl={6}>
           <div className="item-footer">
             <h5>Hướng dẫn mua hàng</h5>
             <span>Chính sách mua hàng và thanh toán</span>
             <span>Chính sách bảo hành</span>
             <span> Chính sách đổi trả và hoàn tiền</span>
             <span>Chính sách bảo mật thông tin</span>
           </div>
         </Col>
         <Col xs={12} sm={12} md={6} lg={6} xl={6}>
           <div className="item-footer">
             <h5>Thông tin liên hệ</h5>
             <span>cskh.so@comem.vn</span>
             <span>096.862.2511</span>
             <div className="store">
               <div className="iconStore">icon</div>
               <div className="storeText">Hệ thống cửa hàng</div>
             </div>
           </div>
         </Col>
       </Row>
       <Flex  className="footer-wrap-last">
         <div className="item-register">
           <Input placeholder={'Đăng ký email để nhận ưu đãi *'} className="input_register" />
           <Button type="primary" htmlType="submit" size="large" className="btn_register">
             Đăng ký
           </Button>
         </div>
         <div className="item-footer2">
           <Image
             src={`/image/logo.jpg`}
             alt="logo_footer"
             width={166}
           />
         </div>
         <div className="item-footer2" style={{textAlign:"center"}}>
           MỸ PHẨM THIÊN NHIÊN
           LÀNH VÀ THẬT
         </div>
         <Flex>
           <div className="item-footer2">
             <a
               className="contact-ele"
               href="https://www.facebook.com/comemhomelab/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <Image
                 src={`/image/facebook.jpg`}
                 alt="logo_facebook"
                 width={60}
               />
             </a>
             <a
               className="contact-ele"
               href="https://www.instagram.com/comem_homelab/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <Image
                 src={`/image/instargram.jpg`}
                 alt="logo_instar"
                 width={60}
               />
             </a>
             <a
               className="contact-ele"
               href="https://www.instagram.com/channel/UcaxLMzyajhVv--vckQhJhXQ/"
               target="_blank"
               rel="noopener noreferrer"
             >
               <Image
                 src={`/image/youtube.jpg`}
                 alt="logo_youtube"
                 width={58}
               />
             </a>
           </div>
         </Flex>
       </Flex>
       <Flex className="footer-wrap-copyRight">
         <div className="item-footer3" style={{lineHeight:"30px"}} >
           Công ty Cổ phần Mỹ phẩm Thiên nhiên Cỏ Mềm
           GPĐKKD số 0109153702 do Sở KHĐT Tp.Hà Nội cấp 09/04/2020
           Sản xuất tại Nhà máy Mỹ phẩm Thiên Nhiên Song An
           225 Trần Đăng Ninh, p. Dịch Vọng, q. Cầu Giấy, Hà Nội
         </div>
         <div className="item-footer3" style={{textAlign:"center"}}>
           *Lưu ý: Tác dụng của sản phẩm có thể thay đổi tùy theo tình trạng thể chất mỗi người
         </div>
         <div className="item-footer3">
           <a
             className="contact-ele"
             href="https://www.instagram.com/channel/UcaxLMzyajhVv--vckQhJhXQ/"
             target="_blank"
             rel="noopener noreferrer"
           >
             <Image
               src={`/image/bocongthuong.jpg`}
               alt="logo_youtube"
               width={150}
             />
           </a>
           <a
             className="contact-ele"
             href="https://www.instagram.com/channel/UcaxLMzyajhVv--vckQhJhXQ/"
             target="_blank"
             rel="noopener noreferrer"
           >
             <Image
               src={`/image/protected.jpg`}
               alt="logo_youtube"
               width={150}
               style={{marginTop:'10px'}}
             />
           </a>
         </div>
       </Flex>
     </div>
    </footer>
  )
}
export default Footer;