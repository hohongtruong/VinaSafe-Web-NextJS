"use client";

import { useEffect } from "react";

export default function OrgChart() {
  useEffect(() => {
    // Load Google Charts script
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/charts/loader.js";
    script.onload = () => {
      window.google.charts.load("current", {
        packages: ["orgchart"],
      });

      window.google.charts.setOnLoadCallback(drawChart);
    };

    document.body.appendChild(script);

    function drawChart() {
      const data = new window.google.visualization.DataTable();

      data.addColumn("string", "Name");
      data.addColumn("string", "Manager");
      data.addColumn("string", "ToolTip");

      data.addRows([
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
      ]);

      const chart = new window.google.visualization.OrgChart(
        document.getElementById("orgchart")
      );

      chart.draw(data, {
        allowHtml: true,
        size: "large",
      });
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="mt-10">
      <h4 className="text-center font-bold text-xl mb-5">
        Cơ cấu tổ chức
      </h4>

      <div
        id="orgchart"
        className="overflow-x-auto flex justify-center"
      />
    </div>
  );
}