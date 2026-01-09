import Image from "next/image";
import Hero from "@/app/components/Hero";
// import ProjectCarousel from "@/app/components/ProjectCarousel";
// import CustomerSlider from "@/app/components/CustomerSlider";
export default function Home() {
  return (
    <>
      {/* <Hero /> */}

      {/* Nội dung giới thiệu */}

      <div className="bg-slate-100 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto pl-15 pr-10 py-10 rounded-lg mt-10 mb-10">
        <h1>
          <b>Giới thiệu Công ty TNHH MTV Tư vấn và Kiểm định an toàn Việt Nam
            (VINASAFE)</b>
        </h1>
        <h3 className="font-bold">Kính gửi: Quý Doanh Nghiệp</h3>
        <h4>
          Lời đầu tiên, Chúng tôi trân trọng gửi lời chúc tốt đẹp nhất tới Quý
          doanh nghiệp!
        </h4>
        <h4>
          <b>VINASAFE</b> là đơn vị kiểm định kỹ thuật an toàn lao động, được
          thành lập từ tháng 3 năm 2013. Là tổ chức hàng đầu Việt Nam về kiểm
          định, chứng nhận chất lượng sản phẩm, thử nghiệm, huấn luyện và tư vấn
          kỹ thuật an toàn
        </h4>
        <h4>
          <b>VINASAFE</b> đã có nhiều năm kinh nghiệm thông qua các tổ chức có
          cùng ngành nghề. Ngoài ra công ty còn có các cộng tác viên là chuyên
          gia có trình độ, kinh nghiệm công tác lâu năm tại Bộ lao động Thương
          binh & Xã hội.
        </h4>
        <h4>
          <b>VINASAFE</b> tự hào là tổ chức kiểm định kỹ thuật an toàn tại Việt
          Nam được công nhận đủ năng lực thử nghiệm và hiệu chuẩn theo các chuẩn
          mực quốc tế ISO/IEC 17025.
        </h4>
        <h4><b>VINASAFE</b> hoạt động trong các lĩnh vực sau:</h4>
        <ol className="list-decimal pl-0">
          <li>
            <h4 className="font-bold">KIỂM ĐỊNH KỸ THUẬT AN TOÀN:</h4>
            <ul className="list-[circle] pl-5">
              <li>
                <h5>
                  Kiểm định nhà nước về kỹ thuật an toàn các thiết bị có yêu cầu
                  nghiêm ngặt về an toàn lao động:
                </h5>
                <ul className="list-disc pl-5">
                  <li>
                    <h5>Bình áp lực, nồi hơi, hệ thống lạnh.</h5>
                  </li>
                  <li>
                    <h5>Đường ống dẫn hơi nước, dẫn khí đốt.</h5>
                  </li>
                  <li>
                    <h5>Hệ thống điều chế, nạp khí.</h5>
                  </li>
                  <li>
                    <h5>Chai chứa khí.</h5>
                  </li>
                  <li>
                    <h5>Thiết bị nâng, thang máy, thang cuốn.</h5>
                  </li>
                  <li>
                    <h5>
                      Cẩu tháp, vận thăng lồng, tời nâng người, hệ thống cốt pha
                      trượt&hellip;
                    </h5>
                  </li>
                  <li>
                    <h5>Cần cẩu bánh lốp, bánh xích, cẩu cảng&hellip;</h5>
                  </li>
                </ul>
              </li>
              <li>
                <h5>Kiểm định hệ thống chống sét.</h5>
              </li>
              <li>
                <h5>Kiểm định an toàn hệ thống điện.</h5>
              </li>
              <li>
                <h5>
                  Kiểm định an toàn các thiết bị công nghiệp, xây dựng và dân
                  dụng.
                </h5>
              </li>
            </ul>
          </li>
          <li>
            <h4 className="font-bold">
              KIỂM ĐỊNH, HIỆU CHUẨN PHƯƠNG TIỆN ĐO LƯỜNG:
            </h4>
            <ul className="list-[circle] pl-5">
              <li>
                <h5>Kiểm định/hiệu chuẩn áp kế.</h5>
              </li>
              <li>
                <h5>Hiệu chuẩn nhiệt kế.</h5>
              </li>
              <li>
                <h5>Kiểm định, hiệu chuẩn các loại cân, quả cân</h5>
              </li>
              <li>
                <h5>Hiệu chuẩn các loại thức&hellip;</h5>
              </li>
            </ul>
          </li>
          <li>
            <h4 className="font-bold">THỬ NGHIỆM:</h4>
            <ul className="list-[circle] pl-5">
              <li>
                <h5>
                  Thử nghiệm tải trọng các thiết bị nâng chuyển, container, cáp,
                  xích, giàn giáo xây dựng, sàn biểu diễn,&hellip;
                </h5>
              </li>
              <li>
                <h5>Thử nghiệm áp suất các thiết bị chịu áp lực</h5>
              </li>
              <li>
                <h5>Thử nghiệm van an toàn.</h5>
              </li>
              <li>
                <h5>
                  Kiểm tra không phá hủy (siêu âm, chụp ảnh bức xạ, kiểm tra bột
                  từ, bột thẩm thấu v.v.) các kết cấu kim loại và mối hàn.
                </h5>
              </li>
            </ul>
          </li>
          <li>
            <h4 className="font-bold">CHỨNG NHẬN HỢP CHUẨN, HỢP QUY</h4>
          </li>
          <li>
            <h4 className="font-bold">HUẤN LUYỆN:</h4>
            <ul className="list-[circle] pl-5">
              <li>
                <h5>Huấn luyện an toàn, vệ sinh lao động.</h5>
              </li>
              <li>
                <h5>
                  Đào tạo, bồi dưỡng nâng cao trình độ người vận hành máy, thiết
                  bị có yêu cầu nghiêm ngặt về ATLĐ.
                </h5>
              </li>
              <li>
                <h5>
                  Đào tạo lại, bồi dưỡng nâng cao trình độ công nhân cơ khí,
                  điện, hàn áp lực
                </h5>
              </li>
              <li>
                <h5>Sát hạch, cấp chứng chỉ thợ hàn.</h5>
              </li>
            </ul>
          </li>
        </ol>
        <h5>
          Đối với khách hàng của mình chúng tôi hiểu rằng thời gian khắc phục sự
          cố đối với các thiết bị phục vụ cho khách hàng luôn được đặt lên hàng
          đầu, bởi vì chúng tôi hiểu trong thời đại thông tin hiện nay hầu hết
          các hoạt động của cơ quan đều gắn liền với các thiết bị và muốn thời
          gian tối ưu cho công việc của mình.
        </h5>
        <h5>
          Trong những năm qua, chúng tôi thực hiện các hợp đồng cung cấp chủ yếu
          trong các lĩnh vực tin học, tổng đài, các hệ thống chống sét, camera,
          thiết bị truyền hình, cáp quang và cáp đồng, cung cấp lắp đặt thiết bị
          điện , điện tử, thang máy, kiểm định an toàn thiết bị, bảo hành bão
          trì các hệ thống thiết bị mà công ty cung cấp…cho các đơn vị trong
          lĩnh vực ngân hàng, tài chính, bưu điện, các đơn vị sản xuất và đã
          thực hiện đúng các điều khoản theo hợp đồng đã ký kết.
        </h5>
        <h5>
          Công việc bảo hành, bảo trì thiết bị của chúng tôi luôn làm hài lòng
          các đối tác, qua đó ngày càng có nhiều khách hàng, nhiều cơ quan đã ký
          kết các hợp đồng cung cấp, tư vấn, triển khai các công trình viễn
          thông, tin học, hệ thống điện, hệ thống thang máy, kiểm định và đào
          tạo vận hành an toàn thiết bị, hệ thống điện lạnh, dịch vụ vận tải
          hàng hóa,&hellip;
        </h5>
        <h4>
          Với phương châm ‘Chất lượng tạo nên uy tín’ Chúng tôi cam kết tuân thủ
          nghiêm ngặt các yêu cầu về mặt kỹ thuật an toàn, không ngừng nâng cao
          chất lượng đào tạo, từng bước trở thành một trong những đơn vị cung
          cấp dịch vụ kiểm định kỹ thuật an toàn và huấn luyện an toàn lao động,
          vệ sinh lao động uy tín nhất.
        </h4>
        <h4 className="font-bold">
          Công ty chúng tôi rất mong nhận được sự ủng hộ của Quý doanh nghiệp!
        </h4>
        <h4 className="font-bold">Xin trân trọng cảm ơn!</h4>
      </div>

      {/* <ProjectCarousel /> */}
      {/* <CustomerSlider /> */}
    </>
  );
}
