"use client";
import { Chart } from "react-google-charts";


export default function OrgChart() {
  const data = [
    [
      { type: "string", label: "Name" },
      { type: "string", label: "Manager" },
      { type: "string", label: "ToolTip" },
    ],

    // GIÁM ĐỐC
    [{ v: "GD", f: "GIÁM ĐỐC" }, "", "Giám đốc"],

    // PHÓ GIÁM ĐỐC
    [{ v: "PGD", f: "PHÓ GIÁM ĐỐC" }, "GD", "Phó giám đốc"],

    // PHÒNG BAN
    [{ v: "HCKT", f: "PHÒNG HÀNH CHÍNH KẾ TOÁN" }, "PGD", "Hành chính kế toán"],
    [{ v: "TN", f: "PHÒNG THÍ NGHIỆM" }, "PGD", "Thí nghiệm"],
    [{ v: "CN", f: "PHÒNG CHỨNG NHẬN" }, "PGD", "Chứng nhận"],
    [{ v: "KT", f: "PHÒNG KỸ THUẬT" }, "PGD", "Kỹ thuật"],
    [{ v: "HL", f: "PHÒNG HUẤN LUYỆN" }, "PGD", "Huấn luyện"],
    [{ v: "KD", f: "PHÒNG KINH DOANH" }, "PGD", "Kinh doanh"],
    [{ v: "CSKH", f: "PHÒNG CHĂM SÓC KHÁCH HÀNG" }, "PGD", "CSKH"],

    // BỘ PHẬN TRỰC THUỘC PHÒNG KỸ THUẬT
    [{ v: "DL", f: "BP. ĐO LƯỜNG" }, "KT", "Đo lường"],
    [{ v: "TBD", f: "BP. THIẾT BỊ ĐIỆN" }, "KT", "Thiết bị điện"],
    [{ v: "AT", f: "BP. KIỂM ĐỊNH AN TOÀN" }, "KT", "An toàn"],
    [{ v: "KPH", f: "BP. KIỂM TRA KHÔNG PHÁ HỦY" }, "KT", "Không phá hủy"],
    [{ v: "TM", f: "BP. THANG MÁY" }, "KT", "Thang máy"],
  ];

  const options = {
    allowHtml: true,
    size: "large",
  };


  return (
    <div className="mt-10">
      <div className="overflow-x-auto flex justify-center">
        <Chart
          chartType="OrgChart"
          data={data}
          options={options}
          width="100%"
          height="600px"
        />
      </div>
    </div>
  );
}