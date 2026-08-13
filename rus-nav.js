/* ============================================================
   RUS Navigation — เมนูด้านซ้าย (แหล่งข้อมูลกลาง)
   ระบบทะเบียนและประมวลผล มทร.สุวรรณภูมิ
   แก้เมนู/STEP/หน้าจอ ที่ไฟล์นี้ที่เดียว มีผลทุกหน้า
   ------------------------------------------------------------
   วิธีใช้ในแต่ละหน้า HTML:
     (div id=navSystems)           <- ที่วางเมนู (ใน sidebar)
     (script) window.ACTIVE_LEAF="ชื่อเมนูย่อยของหน้านี้"; (/script)
     (script src=rus-faculty.js)
     (script src=rus-nav.js)     <- โหลดหลัง ACTIVE_LEAF
   ============================================================ */

const systems=[
 {n:1,name:"ระบบลงทะเบียน",icon:'<path d="M9 11l3 3 8-8"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
  groups:[
   {g:"ภาพรวมกระบวนการทำงาน",href:"2000.html",items:[{name:"Flowchart ระบบลงทะเบียน",href:"2000.html"}]},
   {g:"STEP 1.1 ปฏิทินการศึกษา",items:[
    {name:"รายการปฏิทินการศึกษา",href:"2010.html"},{name:"สร้างปฏิทินการศึกษา",href:"2010_add.html"},{name:"รายงานและ Dashboard",href:"2010_dashboard.html"}]},
   {g:"STEP 1.2 ปฏิทินค่าใช้จ่าย",items:[
    {name:"รายการปฏิทินค่าใช้จ่าย",href:"2012.html"},{name:"สร้างปฏิทินค่าใช้จ่าย",href:"2012_add.html"},{name:"รายงานและ Dashboard",href:"2012_dashboard.html"}]},
   {g:"STEP 2 กำหนดโครงสร้างหลักสูตรและแผนการศึกษา",items:[
    {name:"รายการโครงสร้างหลักสูตรและแผนการศึกษา",href:"2020.html"},
    {name:"สร้างโครงสร้างหลักสูตรและแผนการศึกษา",href:"2020_create.html"},
    {name:"รายงานและ Dashboard",href:"2020_report.html"}]},
   {g:"STEP 3 เปิดรายวิชาและ Section",items:[
    {name:"รายการรายวิชาที่เปิดสอน",href:"2030.html"},
    {name:"เปิดรายวิชา (TC4)",href:"2030_create.html"},
    {name:"รายงานและ Dashboard",href:"2030_report.html"}]},
   {g:"STEP 4 ตรวจสอบความพร้อมก่อนเปิดลงทะเบียน",items:[
{name:"รายการผลการตรวจสอบความพร้อม",href:"2040.html"},
{name:"ตรวจสอบความพร้อมก่อนเปิดลงทะเบียน (TC5)",href:"2040_check.html"},
{name:"รายงานและ Dashboard",href:"2040_dashboard.html"}]},
   {g:"STEP 5 ตรวจสิทธิ์การลงทะเบียน",items:[
{name:"รายการผลการตรวจสอบสิทธิ์",href:"2050.html"},
{name:"ตรวจสิทธิ์การลงทะเบียน (TC6)",href:"2050_check.html"},
{name:"รายงานและ Dashboard",href:"2050_dashboard.html"}]},
   {g:"STEP 6 ลงทะเบียนตามแผน",items:[
{name:"รายการผลการลงทะเบียนตามแผน",href:"2060.html"},
{name:"ลงทะเบียนตามแผน (TC7)",href:"2060_create.html"},
{name:"รายงานและ Dashboard",href:"2060_dashboard.html"}]},
   {g:"STEP 7 ลงทะเบียน Section/ต่างศูนย์",items:[
{name:"รายการลงทะเบียน Section/ต่างศูนย์",href:"2070.html"},
{name:"ลงทะเบียน Section/ต่างศูนย์ (TC8)",href:"2070_create.html"},
{name:"รายงานและ Dashboard",href:"2070_dashboard.html"}]},
   {g:"STEP 8 ตรวจสอบเงื่อนไขการลงทะเบียน",items:[
{name:"รายการผลการตรวจสอบเงื่อนไข",href:"2080.html"},
{name:"ตรวจสอบเงื่อนไขการลงทะเบียน (TC9)",href:"2080_check.html"},
{name:"รายงานและ Dashboard",href:"2080_dashboard.html"}]},
   {g:"STEP 9 พิจารณาอนุมัติการลงทะเบียน",items:[
{name:"รายการผลการพิจารณา",href:"2090.html"},
{name:"พิจารณาอนุมัติการลงทะเบียน (TC10)",href:"2090_review.html"},
{name:"รายงานและ Dashboard",href:"2090_dashboard.html"}]},
   {g:"STEP 10 ใบลงทะเบียนและ Pay-In",items:[
{name:"รายการใบลงทะเบียนและ Pay-In",href:"2100.html"},
{name:"สร้างใบลงทะเบียนและ Pay-In (TC11)",href:"2100_create.html"},
{name:"รายงานและ Dashboard",href:"2100_dashboard.html"}]},
   {g:"STEP 11 ชำระเงินและยืนยัน",items:[
{name:"รายการการชำระเงิน",href:"2110.html"},
{name:"ยืนยันการชำระเงิน (TC12)",href:"2110_confirm.html"},
{name:"รายงานและ Dashboard",href:"2110_dashboard.html"}]},
   {g:"STEP 12 ใบเสร็จและประวัติการเงิน",items:[
{name:"รายการใบเสร็จและประวัติการเงิน",href:"2120.html"},
{name:"ออกใบเสร็จรับเงิน (TC13)",href:"2120_create.html"},
{name:"รายงานและ Dashboard",href:"2120_dashboard.html"}]},
   {g:"STEP 13 เพิ่ม-ถอน-เปลี่ยนกลุ่ม",items:[
{name:"รายการคำขอเพิ่ม-ถอน-เปลี่ยนกลุ่ม",href:"2130.html"},
{name:"ยื่นคำขอเพิ่ม-ถอน-เปลี่ยนกลุ่ม (TC14)",href:"2130_create.html"},
{name:"รายงานและ Dashboard",href:"2130_dashboard.html"}]},
   {g:"STEP 14 ข้อมูลและสถานภาพนักศึกษา",items:[
{name:"รายการข้อมูลและสถานภาพนักศึกษา",href:"2140.html"},
{name:"ปรับปรุงข้อมูลและสถานภาพ (TC15)",href:"2140_update.html"},
{name:"รายงานและ Dashboard",href:"2140_dashboard.html"}]},
   {g:"รายงานและ Dashboard",items:[{name:"รายงานและ Dashboard",href:"2150.html"},{name:"รายงานการลงทะเบียน",href:"2150_registration.html"},{name:"รายงานการเงิน",href:"2150_finance.html"},{name:"รายงานเพิ่ม ถอน เปลี่ยนกลุ่ม",href:"2150_adddrop.html"},{name:"รายงานหลักสูตรและรายวิชา",href:"2150_curriculum.html"},{name:"Drill-down รายละเอียด",href:"2150_drilldown.html"}]},
   {g:"MASTER SYSTEM 1",href:"2001.html",items:[
    {name:"ภาพรวม Master System 1",href:"2001.html"},
    {name:"M1 โครงสร้างการศึกษา",href:"2171.html"},
    {name:"M2 หลักสูตรและรายวิชา",href:"2172.html"},
    {name:"M3 ปีการศึกษาและแผนการเรียน",href:"2173.html"},
    {name:"M4 บุคลากรและการจัดการเรียน",href:"2174.html"},
    {name:"M5 กฎและเงื่อนไขการลงทะเบียน",href:"2175.html"},
    {name:"M6 การเงินและค่าธรรมเนียม",href:"2176.html"},
    {name:"M7 ข้อมูลนักศึกษาและเอกสาร",href:"2177.html"}]},
   {g:"SYSTEM STATUS",href:"2180.html",items:[
    {name:"System Status ระบบลงทะเบียน",href:"2180.html"}]},
  ]},
 {n:2,name:"ระบบประมวลผลการศึกษา",icon:'<path d="M3 3v18h18"/><path d="M7 14l3-3 3 3 5-6"/>',
  groups:[
   {g:"ภาพรวมระบบประมวลผลการศึกษา",href:"3000.html",items:[{name:"ภาพรวมระบบประมวลผลการศึกษา",href:"3000.html"}]},
   {g:"แดชบอร์ดและรายงานสรุป",href:"3130.html",items:[{name:"แดชบอร์ดและรายงานสรุป",href:"3130.html"}]},
   {g:"STEP 1 กำหนดขอบเขตตามหลักสูตร",href:"3010.html",items:[{name:"ปี/ภาค/คณะ/สาขา/หลักสูตร",href:"3010.html"}]},
   {g:"STEP 2 ตรวจสอบความพร้อม",href:"3020.html",items:[{name:"Validation และ Error Report",href:"3020.html"}]},
   {g:"STEP 3 ตรวจสอบข้อมูลคะแนน",href:"3030.html",items:[{name:"คะแนนตามรายวิชา/Section",href:"3030.html"}]},
   {g:"STEP 4 กำหนดเกณฑ์ตัดเกรด",href:"3040.html",items:[{name:"เกณฑ์ตัดเกรด / S-U / ผ่าน-ไม่ผ่าน",href:"3040.html"}]},
   {g:"STEP 5 โครงสร้างการคำนวณ",href:"3050.html",items:[{name:"โครงสร้างการคำนวณและสูตร",href:"3050.html"}]},
   {g:"STEP 6 ทดลองประมวลผล",href:"3060.html",items:[{name:"ทดลองประมวลผล",href:"3060.html"}]},
   {g:"STEP 7 ประมวลผลจริง",href:"3070.html",items:[{name:"ประมวลผลจริงและบันทึกการทำงาน",href:"3070.html"}]},
   {g:"STEP 8 สรุปผล",href:"3080.html",items:[{name:"ผลรายหลักสูตรและ Drill-down",href:"3080.html"}]},
   {g:"STEP 9 กระบวนการอนุมัติ",href:"3090.html",items:[{name:"ผู้สอน → หัวหน้าภาค → คณบดี → สำนักทะเบียน",href:"3090.html"}]},
   {g:"STEP 10 แก้ไขผลการเรียน",href:"3100.html",items:[{name:"แก้ไขผลการเรียนและประวัติการแก้ไข",href:"3100.html"}]},
   {g:"STEP 11 สถานะนักศึกษา",href:"3110.html",items:[{name:"จัดการสถานะนักศึกษา",href:"3110.html"}]},
   {g:"STEP 12 ตรวจสอบสำเร็จการศึกษา",href:"3120.html",items:[{name:"ตรวจสอบสำเร็จการศึกษาและกลุ่มเป้าหมาย",href:"3120.html"}]},
  ]},
 {n:3,name:"ระบบเอกสารและงานบริการ",icon:'<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h6M9 17h4"/>',
  groups:[
   {g:"ภาพรวมระบบเอกสารและงานบริการ",href:"4000.html",items:[{name:"ภาพรวมระบบเอกสารและงานบริการ",href:"4000.html"}]},
   {g:"STEP 1 ประเภทเอกสารและค่าธรรมเนียม",href:"4010.html",items:[{name:"ตั้งค่าประเภทเอกสาร",href:"4010.html"}]},
   {g:"STEP 2 ยื่นคำร้องขอเอกสาร",href:"4020.html",items:[{name:"ยื่นคำขอเอกสาร",href:"4020.html"}]},
   {g:"STEP 3 ตรวจสอบคำร้อง",href:"4030.html",items:[{name:"ตรวจสอบคำขอ",href:"4030.html"}]},
   {g:"STEP 4 อนุมัติคำร้อง",href:"4040.html",items:[{name:"อนุมัติคำขอ",href:"4040.html"}]},
   {g:"STEP 5 ชำระค่าธรรมเนียม",href:"4050.html",items:[{name:"ชำระค่าธรรมเนียม",href:"4050.html"}]},
   {g:"STEP 6 จัดทำเอกสาร",href:"4060.html",items:[{name:"จัดทำเอกสาร",href:"4060.html"}]},
   {g:"STEP 7 รับรองและลายมือชื่อดิจิทัล",href:"4070.html",items:[{name:"รับรองและลงนามดิจิทัล",href:"4070.html"}]},
   {g:"STEP 8 จัดส่งเอกสาร",href:"4080.html",items:[{name:"จัดส่งเอกสาร",href:"4080.html"}]},
   {g:"STEP 9 ดาวน์โหลดออนไลน์",href:"4090.html",items:[{name:"ดาวน์โหลดเอกสาร",href:"4090.html"}]},
   {g:"STEP 10 ติดตามสถานะ",href:"4100.html",items:[{name:"ติดตามสถานะคำขอ",href:"4100.html"}]},
   {g:"STEP 11 ตรวจสอบความถูกต้อง",href:"4110.html",items:[{name:"ตรวจสอบเอกสารดิจิทัล",href:"4110.html"}]},
   {g:"STEP 12 ประวัติการขอเอกสาร",href:"4120.html",items:[{name:"ประวัติการขอเอกสาร",href:"4120.html"}]},
   {g:"STEP 13 Student Self-Service",href:"4130.html",items:[{name:"บริการตนเองนักศึกษา",href:"4130.html"}]},
   {g:"STEP 14 รายงานและ Dashboard",href:"4140.html",items:[{name:"รายงานและ Dashboard",href:"4140.html"}]},
  ]},
 {n:4,name:"การเงินและค่าธรรมเนียม",icon:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
  groups:[
   {g:"ภาพรวมระบบการเงินและค่าธรรมเนียม",href:"5000.html",items:[{name:"ภาพรวมระบบการเงินและค่าธรรมเนียม",href:"5000.html"}]},
   {g:"STEP 1 กำหนดอัตราค่าธรรมเนียม",href:"5010.html",items:[{name:"STEP 1 กำหนดอัตราค่าธรรมเนียม",href:"5010.html"}]},
   {g:"STEP 2 กำหนดเงื่อนไขการเรียกเก็บ",href:"5020.html",items:[{name:"STEP 2 กำหนดเงื่อนไขการเรียกเก็บ",href:"5020.html"}]},
   {g:"STEP 3 ประมวลผลรายการเรียกเก็บ",href:"5030.html",items:[{name:"STEP 3 ประมวลผลรายการเรียกเก็บ",href:"5030.html"}]},
   {g:"STEP 4 ตรวจสอบรายการเรียกเก็บ",href:"5040.html",items:[{name:"STEP 4 ตรวจสอบรายการเรียกเก็บ",href:"5040.html"}]},
   {g:"STEP 5 ออกใบแจ้งชำระเงิน (Pay-in)",href:"5050.html",items:[{name:"STEP 5 ออกใบแจ้งชำระเงิน (Pay-in)",href:"5050.html"}]},
   {g:"STEP 6 ส่งข้อมูลไปยังธนาคาร",href:"5060.html",items:[{name:"STEP 6 ส่งข้อมูลไปยังธนาคาร",href:"5060.html"}]},
   {g:"STEP 7 ตรวจสอบการชำระเงิน",href:"5070.html",items:[{name:"STEP 7 ตรวจสอบการชำระเงิน",href:"5070.html"}]},
   {g:"STEP 8 ยืนยันการรับชำระเงิน",href:"5080.html",items:[{name:"STEP 8 ยืนยันการรับชำระเงิน",href:"5080.html"}]},
   {g:"STEP 9 ส่วนลด ยกเว้น และคืนเงิน",href:"5090.html",items:[{name:"STEP 9 ส่วนลด ยกเว้น และคืนเงิน",href:"5090.html"}]},
   {g:"STEP 10 ออกใบเสร็จรับเงิน",href:"5100.html",items:[{name:"STEP 10 ออกใบเสร็จรับเงิน",href:"5100.html"}]},
   {g:"STEP 11 ประวัติการเงินนักศึกษา",href:"5110.html",items:[{name:"STEP 11 ประวัติการเงินนักศึกษา",href:"5110.html"}]},
   {g:"STEP 12 เชื่อมโยงข้อมูลกับระบบทะเบียน",href:"5120.html",items:[{name:"STEP 12 เชื่อมโยงข้อมูลกับระบบทะเบียน",href:"5120.html"}]},
   {g:"STEP 13 รายงานและแดชบอร์ด",href:"5130.html",items:[{name:"STEP 13 รายงานและแดชบอร์ด",href:"5130.html"}]},
   {g:"STEP 14 ปิดรอบการเงินภาคการศึกษา",href:"5140.html",items:[{name:"STEP 14 ปิดรอบการเงินภาคการศึกษา",href:"5140.html"}]},
  ]},
 {n:5,name:"คำร้องออนไลน์",icon:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 15l2 2 4-4"/>',
  groups:[
   {g:"ภาพรวมระบบคำร้องออนไลน์",href:"6000.html",items:[{name:"ภาพรวมระบบคำร้องออนไลน์",href:"6000.html"}]},
   {g:"STEP 1 เลือกประเภทคำร้อง",href:"6010.html",items:[{name:"STEP 1 เลือกประเภทคำร้อง",href:"6010.html"}]},
   {g:"STEP 2 กรอกข้อมูลคำร้อง",href:"6020.html",items:[{name:"STEP 2 กรอกข้อมูลคำร้อง",href:"6020.html"}]},
   {g:"STEP 3 ตรวจสอบข้อมูลคำร้อง",href:"6030.html",items:[{name:"STEP 3 ตรวจสอบข้อมูลคำร้อง",href:"6030.html"}]},
   {g:"STEP 4 กำหนดเส้นทางการอนุมัติ",href:"6040.html",items:[{name:"STEP 4 กำหนดเส้นทางการอนุมัติ",href:"6040.html"}]},
   {g:"STEP 5 ส่งคำร้อง",href:"6050.html",items:[{name:"STEP 5 ส่งคำร้อง",href:"6050.html"}]},
   {g:"STEP 6 ติดตามการอนุมัติ",href:"6060.html",items:[{name:"STEP 6 ติดตามการอนุมัติ",href:"6060.html"}]},
   {g:"STEP 7 ดำเนินการคำร้อง",href:"6070.html",items:[{name:"STEP 7 ดำเนินการคำร้อง",href:"6070.html"}]},
   {g:"STEP 8 เชื่อมโยงระบบทะเบียน",href:"6080.html",items:[{name:"STEP 8 เชื่อมโยงระบบทะเบียน",href:"6080.html"}]},
   {g:"STEP 9 เชื่อมโยงระบบประมวลผลการศึกษา",href:"6090.html",items:[{name:"STEP 9 เชื่อมโยงระบบประมวลผลการศึกษา",href:"6090.html"}]},
   {g:"STEP 10 เชื่อมโยงระบบการเงิน",href:"6100.html",items:[{name:"STEP 10 เชื่อมโยงระบบการเงิน",href:"6100.html"}]},
   {g:"STEP 11 ออกเอกสารผลการดำเนินการ",href:"6110.html",items:[{name:"STEP 11 ออกเอกสารผลการดำเนินการ",href:"6110.html"}]},
   {g:"STEP 12 แจ้งผลคำร้อง",href:"6120.html",items:[{name:"STEP 12 แจ้งผลคำร้อง",href:"6120.html"}]},
   {g:"STEP 13 ติดตามสถานะคำร้อง",href:"6130.html",items:[{name:"STEP 13 ติดตามสถานะคำร้อง",href:"6130.html"}]},
   {g:"STEP 14 แดชบอร์ดและรายงาน",href:"6140.html",items:[{name:"STEP 14 แดชบอร์ดและรายงาน",href:"6140.html"}]},
  ]},
 {n:6,name:"ระบบเทียบโอนผลการศึกษา",icon:'<path d="M16 3h5v5M21 3l-7 7M8 21H3v-5M3 21l7-7"/>',
  groups:[
   {g:"ภาพรวมระบบเทียบโอนผลการศึกษา",href:"7000.html",items:[{name:"ภาพรวมระบบเทียบโอนผลการศึกษา",href:"7000.html"}]},
   {g:"STEP 1 สมัครคำขอเทียบโอน",href:"7010.html",items:[{name:"STEP 1 สมัครคำขอเทียบโอน",href:"7010.html"}]},
   {g:"STEP 2 ค้นหารายวิชาสำหรับเทียบโอน",href:"7020.html",items:[{name:"STEP 2 ค้นหารายวิชาสำหรับเทียบโอน",href:"7020.html"}]},
   {g:"STEP 3 ประเมินผลการเทียบโอนเบื้องต้น",href:"7030.html",items:[{name:"STEP 3 ประเมินผลการเทียบโอนเบื้องต้น",href:"7030.html"}]},
   {g:"STEP 4 กำหนดค่าธรรมเนียมเทียบโอน",href:"7040.html",items:[{name:"STEP 4 กำหนดค่าธรรมเนียมเทียบโอน",href:"7040.html"}]},
   {g:"STEP 5 สร้างและส่งคำร้องออนไลน์",href:"7050.html",items:[{name:"STEP 5 สร้างและส่งคำร้องออนไลน์",href:"7050.html"}]},
   {g:"STEP 6 จัดทำ Mapping รายวิชา",href:"7060.html",items:[{name:"STEP 6 จัดทำ Mapping รายวิชา",href:"7060.html"}]},
   {g:"STEP 7 นำเข้าและส่งออกข้อมูล Mapping",href:"7070.html",items:[{name:"STEP 7 นำเข้าและส่งออกข้อมูล Mapping",href:"7070.html"}]},
   {g:"STEP 8 ตรวจสอบผล Mapping",href:"7080.html",items:[{name:"STEP 8 ตรวจสอบผล Mapping",href:"7080.html"}]},
   {g:"STEP 9 กระบวนการอนุมัติผลเทียบโอน",href:"7090.html",items:[{name:"STEP 9 กระบวนการอนุมัติผลเทียบโอน",href:"7090.html"}]},
   {g:"STEP 10 สร้างผลการเทียบโอน",href:"7100.html",items:[{name:"STEP 10 สร้างผลการเทียบโอน",href:"7100.html"}]},
   {g:"STEP 11 Dashboard และรายงาน",href:"7110.html",items:[{name:"STEP 11 Dashboard และรายงาน",href:"7110.html"}]},
   {g:"STEP 12 บันทึกผลเข้าระบบทะเบียน",href:"7120.html",items:[{name:"STEP 12 บันทึกผลเข้าระบบทะเบียน",href:"7120.html"}]},
   {g:"STEP 13 ส่งข้อมูลสู่ระบบประมวลผลการศึกษา",href:"7130.html",items:[{name:"STEP 13 ส่งข้อมูลสู่ระบบประมวลผลการศึกษา",href:"7130.html"}]},
   {g:"STEP 14 ปิดงานและตรวจสอบย้อนหลัง",href:"7140.html",items:[{name:"STEP 14 ปิดงานและตรวจสอบย้อนหลัง",href:"7140.html"}]},
  ]},
 {n:7,name:"สหกิจศึกษา",icon:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>',
  groups:[
   {g:"ภาพรวมระบบสหกิจศึกษา",href:"8000.html",items:[{name:"ภาพรวมระบบสหกิจศึกษา",href:"8000.html"}]},
   {g:"STEP 1 เตรียมความพร้อมนักศึกษา",href:"8010.html",items:[{name:"STEP 1 เตรียมความพร้อมนักศึกษา",href:"8010.html"}]},
   {g:"STEP 2 สมัครเข้าร่วมสหกิจศึกษา (FM1)",href:"8020.html",items:[{name:"STEP 2 สมัครเข้าร่วมสหกิจศึกษา (FM1)",href:"8020.html"}]},
   {g:"STEP 3 อาจารย์ที่ปรึกษาตรวจสอบ FM1",href:"8030.html",items:[{name:"STEP 3 อาจารย์ที่ปรึกษาตรวจสอบ FM1",href:"8030.html"}]},
   {g:"STEP 4 หัวหน้าสาขาอนุมัติ FM1",href:"8040.html",items:[{name:"STEP 4 หัวหน้าสาขาอนุมัติ FM1",href:"8040.html"}]},
   {g:"STEP 5 สถานประกอบการยืนยันรับนักศึกษา",href:"8050.html",items:[{name:"STEP 5 สถานประกอบการยืนยันรับนักศึกษา",href:"8050.html"}]},
   {g:"STEP 6 นักศึกษาจัดทำและส่ง FM2",href:"8060.html",items:[{name:"STEP 6 นักศึกษาจัดทำและส่ง FM2",href:"8060.html"}]},
   {g:"STEP 7 อาจารย์ที่ปรึกษาตรวจสอบ FM2",href:"8070.html",items:[{name:"STEP 7 อาจารย์ที่ปรึกษาตรวจสอบ FM2",href:"8070.html"}]},
   {g:"STEP 8 หัวหน้าสาขาอนุมัติ FM2",href:"8080.html",items:[{name:"STEP 8 หัวหน้าสาขาอนุมัติ FM2",href:"8080.html"}]},
   {g:"STEP 9 นักศึกษาปฏิบัติงานสหกิจศึกษา",href:"8090.html",items:[{name:"STEP 9 นักศึกษาปฏิบัติงานสหกิจศึกษา",href:"8090.html"}]},
   {g:"STEP 10 อาจารย์นิเทศและติดตามผล",href:"8100.html",items:[{name:"STEP 10 อาจารย์นิเทศและติดตามผล",href:"8100.html"}]},
   {g:"STEP 11 สถานประกอบการประเมินผล",href:"8110.html",items:[{name:"STEP 11 สถานประกอบการประเมินผล",href:"8110.html"}]},
   {g:"STEP 12 อาจารย์ที่ปรึกษาประเมินผล",href:"8120.html",items:[{name:"STEP 12 อาจารย์ที่ปรึกษาประเมินผล",href:"8120.html"}]},
   {g:"STEP 13 สรุปผลและปิดโครงการ",href:"8130.html",items:[{name:"STEP 13 สรุปผลและปิดโครงการ",href:"8130.html"}]},
   {g:"STEP 14 แดชบอร์ดและรายงาน",href:"8140.html",items:[{name:"STEP 14 แดชบอร์ดและรายงาน",href:"8140.html"}]},
  ]},
 {n:8,name:"บัณฑิตศึกษา",icon:'<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2 3 6 3s6-2 6-3v-5"/>',
  groups:[
   {g:"ภาพรวมระบบบัณฑิตศึกษา",href:"9000.html",items:[{name:"ภาพรวมระบบบัณฑิตศึกษา",href:"9000.html"}]},
   {g:"STEP 1 สร้างบัญชีผู้ใช้",href:"9010.html",items:[{name:"STEP 1 สร้างบัญชีผู้ใช้",href:"9010.html"}]},
   {g:"STEP 2 กรอกใบสมัคร",href:"9020.html",items:[{name:"STEP 2 กรอกใบสมัคร",href:"9020.html"}]},
   {g:"STEP 3 ตรวจสอบใบสมัคร",href:"9030.html",items:[{name:"STEP 3 ตรวจสอบใบสมัคร",href:"9030.html"}]},
   {g:"STEP 4 ยืนยันการสมัคร",href:"9040.html",items:[{name:"STEP 4 ยืนยันการสมัคร",href:"9040.html"}]},
   {g:"STEP 5 ประกาศรายชื่อผู้มีสิทธิ์สอบ",href:"9050.html",items:[{name:"STEP 5 ประกาศรายชื่อผู้มีสิทธิ์สอบ",href:"9050.html"}]},
   {g:"STEP 6 ดำเนินการสอบคัดเลือก",href:"9060.html",items:[{name:"STEP 6 ดำเนินการสอบคัดเลือก",href:"9060.html"}]},
   {g:"STEP 7 ประเมินผลการคัดเลือก",href:"9070.html",items:[{name:"STEP 7 ประเมินผลการคัดเลือก",href:"9070.html"}]},
   {g:"STEP 8 ประกาศผลการคัดเลือก",href:"9080.html",items:[{name:"STEP 8 ประกาศผลการคัดเลือก",href:"9080.html"}]},
   {g:"STEP 9 ยืนยันสิทธิ์และชำระเงิน",href:"9090.html",items:[{name:"STEP 9 ยืนยันสิทธิ์และชำระเงิน",href:"9090.html"}]},
   {g:"STEP 10 บันทึกข้อมูลประวัตินักศึกษา",href:"9100.html",items:[{name:"STEP 10 บันทึกข้อมูลประวัตินักศึกษา",href:"9100.html"}]},
   {g:"STEP 11 ออกเลขประจำตัวนักศึกษา",href:"9110.html",items:[{name:"STEP 11 ออกเลขประจำตัวนักศึกษา",href:"9110.html"}]},
   {g:"STEP 12 ปฐมนิเทศนักศึกษาใหม่",href:"9120.html",items:[{name:"STEP 12 ปฐมนิเทศนักศึกษาใหม่",href:"9120.html"}]},
   {g:"STEP 13 วางแผนการเรียน",href:"9130.html",items:[{name:"STEP 13 วางแผนการเรียน",href:"9130.html"}]},
   {g:"STEP 14 ลงทะเบียนเรียน",href:"9140.html",items:[{name:"STEP 14 ลงทะเบียนเรียน",href:"9140.html"}]},
   {g:"STEP 15 ชำระค่าลงทะเบียน",href:"9150.html",items:[{name:"STEP 15 ชำระค่าลงทะเบียน",href:"9150.html"}]},
   {g:"STEP 16 ติดตามผลการเรียน",href:"9160.html",items:[{name:"STEP 16 ติดตามผลการเรียน",href:"9160.html"}]},
   {g:"STEP 17 งานวิจัย / วิทยานิพนธ์",href:"9170.html",items:[{name:"STEP 17 งานวิจัย / วิทยานิพนธ์",href:"9170.html"}]},
   {g:"STEP 18 สอบวัดคุณสมบัติ / สอบวิทยานิพนธ์",href:"9180.html",items:[{name:"STEP 18 สอบวัดคุณสมบัติ / สอบวิทยานิพนธ์",href:"9180.html"}]},
   {g:"STEP 19 ตรวจรูปเล่ม / เผยแพร่ผลงาน",href:"9190.html",items:[{name:"STEP 19 ตรวจรูปเล่ม / เผยแพร่ผลงาน",href:"9190.html"}]},
   {g:"STEP 20 ตรวจสอบคุณสมบัติสำเร็จการศึกษา",href:"9200.html",items:[{name:"STEP 20 ตรวจสอบคุณสมบัติสำเร็จการศึกษา",href:"9200.html"}]},
   {g:"STEP 21 เสนอขออนุมัติจบการศึกษา",href:"9210.html",items:[{name:"STEP 21 เสนอขออนุมัติจบการศึกษา",href:"9210.html"}]},
   {g:"STEP 22 อนุมัติการจบการศึกษา",href:"9220.html",items:[{name:"STEP 22 อนุมัติการจบการศึกษา",href:"9220.html"}]},
  ]},


 {n:9,name:"ระบบรับสมัครและรายงานตัว",icon:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 11l-3 3-1.5-1.5"/>',
  groups:[
   {g:"ภาพรวมระบบรับสมัครและรายงานตัว",href:"10000.html",items:[{name:"ภาพรวมระบบรับสมัครและรายงานตัว",href:"10000.html"}]},
   {g:"STEP 1 สมัครสมาชิก",href:"10010.html",items:[{name:"STEP 1 สมัครสมาชิก",href:"10010.html"}]},
   {g:"STEP 2 เลือกหลักสูตรรับสมัคร",href:"10020.html",items:[{name:"STEP 2 เลือกหลักสูตรรับสมัคร",href:"10020.html"}]},
   {g:"STEP 3 กรอกใบสมัคร",href:"10030.html",items:[{name:"STEP 3 กรอกใบสมัคร",href:"10030.html"}]},
   {g:"STEP 4 แนบเอกสารสมัคร",href:"10040.html",items:[{name:"STEP 4 แนบเอกสารสมัคร",href:"10040.html"}]},
   {g:"STEP 5 ตรวจสอบเอกสาร",href:"10050.html",items:[{name:"STEP 5 ตรวจสอบเอกสาร",href:"10050.html"}]},
   {g:"STEP 6 ตรวจสอบคุณสมบัติ",href:"10060.html",items:[{name:"STEP 6 ตรวจสอบคุณสมบัติ",href:"10060.html"}]},
   {g:"STEP 7 ประกาศรายชื่อผู้มีสิทธิ์สอบ/สัมภาษณ์",href:"10070.html",items:[{name:"STEP 7 ประกาศรายชื่อผู้มีสิทธิ์สอบ/สัมภาษณ์",href:"10070.html"}]},
   {g:"STEP 8 บันทึกผลสอบ",href:"10080.html",items:[{name:"STEP 8 บันทึกผลสอบ",href:"10080.html"}]},
   {g:"STEP 9 ประมวลผลคัดเลือก",href:"10090.html",items:[{name:"STEP 9 ประมวลผลคัดเลือก",href:"10090.html"}]},
   {g:"STEP 10 ประกาศผลคัดเลือก",href:"10100.html",items:[{name:"STEP 10 ประกาศผลคัดเลือก",href:"10100.html"}]},
   {g:"STEP 11 ยืนยันสิทธิ์เข้าศึกษา",href:"10110.html",items:[{name:"STEP 11 ยืนยันสิทธิ์เข้าศึกษา",href:"10110.html"}]},
   {g:"STEP 12 กรอกข้อมูลรายงานตัว",href:"10120.html",items:[{name:"STEP 12 กรอกข้อมูลรายงานตัว",href:"10120.html"}]},
   {g:"STEP 13 อัปโหลดเอกสารรายงานตัว",href:"10130.html",items:[{name:"STEP 13 อัปโหลดเอกสารรายงานตัว",href:"10130.html"}]},
   {g:"STEP 14 สร้างใบแจ้งชำระเงิน",href:"10140.html",items:[{name:"STEP 14 สร้างใบแจ้งชำระเงิน",href:"10140.html"}]},
   {g:"STEP 15 ชำระเงินออนไลน์",href:"10150.html",items:[{name:"STEP 15 ชำระเงินออนไลน์",href:"10150.html"}]},
   {g:"STEP 16 ยืนยันการชำระเงิน",href:"10160.html",items:[{name:"STEP 16 ยืนยันการชำระเงิน",href:"10160.html"}]},
   {g:"STEP 17 สร้างรหัสนักศึกษา",href:"10170.html",items:[{name:"STEP 17 สร้างรหัสนักศึกษา",href:"10170.html"}]},
   {g:"STEP 18 เชื่อมระบบทะเบียน",href:"10180.html",items:[{name:"STEP 18 เชื่อมระบบทะเบียน",href:"10180.html"}]},
   {g:"STEP 19 Dashboard ผู้บริหาร",href:"10190.html",items:[{name:"STEP 19 Dashboard ผู้บริหาร",href:"10190.html"}]},
   {g:"STEP 20 รายงานและสถิติ",href:"10200.html",items:[{name:"STEP 20 รายงานและสถิติ",href:"10200.html"}]},
  ]},
 ];


/* ---------- สร้างเมนูจาก systems[] ---------- */
(function(){
  const wrap=document.getElementById('navSystems');
  if(!wrap) return;
  const ACTIVE=window.ACTIVE_LEAF||'';
  const curFile=(location.pathname.split('/').pop()||'').toLowerCase();

  systems.forEach((s,si)=>{
    // ----- ชั้น 1: ระบบงาน -----
    const parent=document.createElement('button');
    parent.className='nav-parent';
    parent.setAttribute('data-label',s.n+'. '+s.name);
    parent.innerHTML=`<span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${s.icon}</svg></span>
      <span class="txt">${s.name}</span>
      <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>`;
    const submenu=document.createElement('div');
    submenu.className='submenu';

    s.groups.forEach((grp,gi)=>{
      const single=grp.items.length===1;
      const stepMatch=grp.g.match(/STEP\s+(\d+)/);
      const stepNo=stepMatch?String(stepMatch[1]).padStart(2,'0'):'00';
      const sysNo=s.n;
      const gBtn=document.createElement('button');
      gBtn.className=single?'nav-group2 single':'nav-group2';

      if(single){
        // STEP หน้าเดียว → ลิงก์ตรง รหัส = ระบบ+STEP+0
        const href=grp.href||`${sysNo}${stepNo}0.html`;
        gBtn.innerHTML=`<span class="g-cn">${grp.g}</span>`;
        gBtn.setAttribute('data-href',href);
        // ไฮไลต์เมื่อหน้าปัจจุบันคือหน้านี้ (รวมหน้าลูก เช่น 1020_manage)
        const baseCode=href.replace(/\.html$/,'');
        if(curFile===href.toLowerCase()||curFile.startsWith(baseCode+'_')||curFile.startsWith(baseCode+'.')){
          gBtn.classList.add('active-step');
          parent.classList.add('open','current-sys');
          submenu.classList.add('open');
        }
        gBtn.addEventListener('click',e=>{
          e.stopPropagation();
          document.querySelectorAll('.nav-group2.open').forEach(x=>{x.classList.remove('open');if(x.nextElementSibling)x.nextElementSibling.classList.remove('open');});
          document.querySelectorAll('.nav-group2.active-step,.nav-leaf.active').forEach(x=>x.classList.remove('active-step','active'));
          gBtn.classList.add('active-step');
          window.location.href=href;
        });
        submenu.appendChild(gBtn);
        return;
      }

      // STEP หลายหน้า → กางได้
      gBtn.innerHTML=`<span class="g-cn">${grp.g}</span>
        <svg class="g-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>`;
      const gWrap=document.createElement('div');
      gWrap.className='subsub';
      let hasActiveLeaf=false;
      gWrap.innerHTML=grp.items.map((it,ii)=>{
        const label=(typeof it==='object'?it.name:it);
        const href=(typeof it==='object'&&it.href)?it.href:`${sysNo}${stepNo}${ii+1}.html`;
        // ใช้ชื่อไฟล์จริงเป็นหลักในการไฮไลต์เมนู เพื่อไม่ให้ ACTIVE_LEAF ที่ตั้งคลาดเคลื่อนพาไปเปิดผิดเมนู
        const hrefFile=(href.split('/').pop()||'').toLowerCase();
        const activeByFile=(curFile===hrefFile);
        const activeByLabel=(!activeByFile&&ACTIVE&&label===ACTIVE);
        const active=(activeByFile||activeByLabel)?' active':'';
        if(active)hasActiveLeaf=true;
        return `<a class="nav-leaf${active}" href="${href}"><span class="bullet"></span><span class="cn">${label}</span></a>`;
      }).join('');
      gBtn.addEventListener('click',e=>{
        e.stopPropagation();
        const open=gBtn.classList.contains('open');
        submenu.querySelectorAll('.nav-group2.open').forEach(x=>{x.classList.remove('open');if(x.nextElementSibling)x.nextElementSibling.classList.remove('open');});
        if(!open){gBtn.classList.add('open');gWrap.classList.add('open');}
      });
      submenu.appendChild(gBtn);submenu.appendChild(gWrap);
      // เปิด group + parent อัตโนมัติ ถ้ามี leaf ที่ active อยู่ใน group นี้ (ไม่ต้อง hardcode ต่อหน้า)
      if(hasActiveLeaf){
        gBtn.classList.add('open');gWrap.classList.add('open');
        parent.classList.add('open','current-sys');submenu.classList.add('open');
      }
    });

    parent.addEventListener('click',()=>{
      const app=document.getElementById('app');
      // ถ้าเมนูหดอยู่ (desktop) → ขยายเมนูกลับก่อน แล้วเปิดระบบนี้
      if(app&&app.classList.contains('collapsed')){
        app.classList.remove('collapsed');
        document.querySelectorAll('.nav-parent.open').forEach(p=>{p.classList.remove('open');if(p.nextElementSibling)p.nextElementSibling.classList.remove('open');});
        parent.classList.add('open');submenu.classList.add('open');
        return;
      }
      const isOpen=parent.classList.contains('open');
      document.querySelectorAll('.nav-parent.open').forEach(p=>{p.classList.remove('open');p.nextElementSibling.classList.remove('open');});
      if(!isOpen){parent.classList.add('open');submenu.classList.add('open');}
    });
    wrap.appendChild(parent);wrap.appendChild(submenu);
  });

  // หน้าแดชบอร์ด (main.html หรือตั้ง window.IS_DASHBOARD) → หุบเมนูระบบทั้งหมด ไม่เปิด default
  const isDashboard = window.IS_DASHBOARD===true || curFile==='main.html' || curFile==='' ;
  // ถ้าไม่ใช่แดชบอร์ด และไม่มีหน้าไหน active → เปิดระบบแรกเป็นค่าเริ่มต้น
  if(!isDashboard && !document.querySelector('.nav-parent.current-sys')){
    const fp=wrap.querySelector('.nav-parent');
    if(fp){fp.classList.add('open');fp.nextElementSibling.classList.add('open');}
  }

  /* ---------- Toggle logic (responsive) ---------- */
  const app=document.getElementById('app');
  const backdrop=document.getElementById('backdrop');
  const MOBILE=()=>window.innerWidth<=980;
  const mt=document.getElementById('menuToggle');
  if(mt)mt.addEventListener('click',()=>{
    if(MOBILE()){app.classList.toggle('mobile-open');}
    else{app.classList.toggle('collapsed');}
  });
  if(backdrop)backdrop.addEventListener('click',()=>app.classList.remove('mobile-open'));
  window.addEventListener('resize',()=>{if(!MOBILE())app.classList.remove('mobile-open');});

  /* ---------- Breadcrumb: ทำให้ "หน้าแรก" / ชื่อระบบ / ชื่อ STEP คลิกได้ ---------- */
  (function(){
    const crumb=document.querySelector('.crumb');
    if(!crumb) return;
    // สร้าง map: ชื่อระบบ → href หน้าแรกของระบบ, ชื่อ STEP → href หน้าแรกของ STEP
    const sysHref={}, stepHref={};
    const firstGroupHref=(s,grp)=>{
      if(grp.href) return grp.href;
      const first=grp.items&&grp.items[0];
      if(first&&typeof first==='object'&&first.href) return first.href;
      const m=grp.g.match(/STEP\s+(\d+)/);const sn=m?String(m[1]).padStart(2,'0'):'01';
      return grp.items.length===1 ? `${s.n}${sn}0.html` : `${s.n}${sn}1.html`;
    };
    systems.forEach(s=>{
      const g0=s.groups[0];
      if(g0) sysHref[s.name]=firstGroupHref(s,g0);
      s.groups.forEach(grp=>{ stepHref[grp.g]=firstGroupHref(s,grp); });
    });
    // แตก breadcrumb เป็นส่วนๆ ด้วย › แล้วสร้างลิงก์
    const html=crumb.innerHTML;
    const parts=html.split('›');
    const out=parts.map((part,idx)=>{
      const isLast=idx===parts.length-1;
      const txt=part.trim();
      if(isLast) return part; // ตัวสุดท้าย (หน้าปัจจุบัน) ไม่ทำลิงก์ คงเดิม (อาจเป็น <b>)
      const plain=txt.replace(/<[^>]+>/g,'').trim(); // ตัด tag
      let href=null;
      if(plain==='หน้าแรก') href='main.html';
      else if(sysHref[plain]) href=sysHref[plain];
      else { // เทียบ STEP (ชื่อใน crumb อาจตัด "STEP N " ออกบางส่วน) — จับด้วย match บางส่วน
        for(const k in stepHref){ if(plain && (k===plain || k.indexOf(plain)===0 || plain.indexOf(k)===0)){href=stepHref[k];break;} }
      }
      if(href) return part.replace(plain, `<a href="${href}">${plain}</a>`);
      return part;
    });
    crumb.innerHTML=out.join('›');
  })();
})();


/* ---------- System 2 process context bar ---------- */
(function(){
  const file=(location.pathname.split('/').pop()||'').toLowerCase();
  const m=file.match(/^2(\d{2})/);
  if(!m) return;
  const stepMap={
    '00':['ภาพรวมกระบวนการทำงาน','ภาพรวม'],
    '01':['STEP 1.1 ปฏิทินการศึกษา','Layer 1 เตรียมข้อมูลกลาง'],
    '02':['STEP 2 กำหนดโครงสร้างหลักสูตรและแผนการศึกษา','Layer 1 เตรียมข้อมูลกลาง'],
    '03':['STEP 3 เปิดรายวิชาและ Section','Layer 2 เตรียมเปิดลงทะเบียน'],
    '04':['STEP 4 ตรวจสอบก่อนเปิดลงทะเบียน','Layer 2 เตรียมเปิดลงทะเบียน'],
    '05':['STEP 5 เข้าสู่ระบบลงทะเบียน','Layer 3 นักศึกษาดำเนินการ'],
    '06':['STEP 6 เลือกรายวิชาตามแผน','Layer 3 นักศึกษาดำเนินการ'],
    '07':['STEP 7 เลือก Section / ต่างศูนย์','Layer 3 นักศึกษาดำเนินการ'],
    '08':['STEP 8 ตรวจสอบเงื่อนไข','Layer 4 ตรวจสอบและอนุมัติ'],
    '09':['STEP 9 อาจารย์ที่ปรึกษาอนุมัติ','Layer 4 ตรวจสอบและอนุมัติ'],
    '10':['STEP 10 ใบลงทะเบียนและ Pay-In','Layer 5 การเงิน'],
    '11':['STEP 11 เจ้าหน้าที่การเงินยืนยันการชำระ','Layer 5 การเงิน'],
    '12':['STEP 12 ใบเสร็จและประวัติการเงิน','Layer 5 การเงิน'],
    '13':['STEP 13 เพิ่ม / ถอน / เปลี่ยนกลุ่ม','Layer 6 หลังลงทะเบียน'],
    '14':['STEP 14 ข้อมูลและสถานภาพนักศึกษา','Layer 6 หลังลงทะเบียน'],
    '15':['รายงานและ Dashboard','Layer 7 Dashboard']
  };
  let code=m[1];
  if(file.startsWith('2012')) code='01';
  const masterFiles=['2001.html','2020_add.html','2021.html','2023.html','2024.html','2025.html','2028.html','2161.html','2162.html','2163.html','2164.html','2165.html','2166.html','2167.html','2171.html','2172.html','2173.html','2174.html','2175.html','2176.html','2177.html'];
  const statusFiles=['2180.html'];
  const isMaster=masterFiles.includes(file);
  const isStatus=statusFiles.includes(file);
  const info=isStatus?['SYSTEM STATUS ระบบลงทะเบียน','สถานะควบคุม Workflow ไม่ใช่ STEP']:(isMaster?['MASTER SYSTEM 1','ข้อมูลกลาง ไม่ใช่ STEP']:(file.startsWith('2012')?['STEP 1.2 ปฏิทินค่าใช้จ่าย','Layer 1 เตรียมข้อมูลกลาง']:(stepMap[code]||['ระบบลงทะเบียน',''])));
  const main=document.querySelector('main.content');
  if(!main||main.querySelector('.s2-context')) return;
  const bar=document.createElement('div');
  bar.className='s2-context';
  const landingMap={
    '2000':'2000.html','2010':'2010.html','2012':'2012.html','2020':'2020.html','2021':'2021.html','2022':'2022.html','2023':'2023.html','2024':'2024.html','2025':'2025.html','2026':'2026.html','2027':'2027.html','2028':'2028.html','2029':'2029.html','2030':'2030.html','2040':'2040.html',
    '2050':'2050.html','2060':'2060.html','2070':'2070.html','2080':'2080.html','2090':'2090.html','2100':'2100.html',
    '2110':'2110.html','2120':'2120.html','2130':'2130.html','2140':'2140.html','2150':'2150.html'
  };
  const stem=(file.match(/^(2000|2010|2012|2020|2021|2022|2023|2024|2025|2026|2027|2028|2029|2030|2040|2050|2060|2070|2080|2090|2100|2110|2120|2130|2140|2150)/)||[])[1];
  const landing=isStatus?'2180.html':(isMaster?'2001.html':(landingMap[stem]||'2000.html'));
  const backToStep=(file!==landing)?`<a href="${landing}">${isStatus?'กลับ System Status':(isMaster?'กลับ Master System 1':'กลับหน้าหลัก STEP')}</a>`:'';
  const systemTitle = (location.pathname.split("/").pop() === "2000.html") ? "" : "<strong>SYSTEM 1: ระบบลงทะเบียน</strong>";
  bar.innerHTML=`<div>${systemTitle}<span>${info[1]}</span><b>${info[0]}</b></div><div class="s2-tags"><span>ปีการศึกษา 2569</span><span>ภาค 1</span>${backToStep}<a href="2000.html">ดู Flowchart</a></div>`;
  main.insertBefore(bar,main.firstChild);
  if(!document.getElementById('s2-context-style')){
    const st=document.createElement('style');st.id='s2-context-style';
    st.textContent='.s2-context{display:flex;justify-content:space-between;gap:14px;align-items:center;padding:12px 16px;margin-bottom:14px;background:linear-gradient(90deg,#16305f,#2952a3);color:#fff;border-radius:10px;box-shadow:0 2px 8px rgba(20,40,80,.12)}.s2-context>div:first-child{display:flex;gap:13px;align-items:center;flex-wrap:wrap}.s2-context strong{font-size:14px}.s2-context span{font-size:12px;opacity:.9}.s2-context b{font-size:13px}.s2-tags{display:flex;gap:7px;align-items:center;flex-wrap:wrap}.s2-tags span,.s2-tags a{font-size:11.5px;color:#fff;background:rgba(255,255,255,.15);padding:5px 9px;border-radius:20px;text-decoration:none}.s2-tags a{background:#fff;color:#1e3d7a;font-weight:700}@media(max-width:800px){.s2-context{align-items:flex-start;flex-direction:column}}';
    document.head.appendChild(st);
  }
})();

