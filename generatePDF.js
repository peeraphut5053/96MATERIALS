import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export function generatePDF(cart) {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("ใบเสนอราคา", 105, 20, { align: 'center' });
  doc.setFontSize(12);
  doc.text("บริษัท 96 แมททีเรียลส์ จำกัด", 14, 30);
  doc.text("ที่อยู่: 123 ถนนวัสดุก่อสร้าง เขตสร้างบ้าน กรุงเทพฯ", 14, 36);
  doc.text(`วันที่: ${new Date().toLocaleDateString()}`, 14, 42);

  const tableData = cart.map((item, i) => [
    i + 1,
    item.name,
    item.quantity,
    `฿${item.price.toLocaleString()}`,
    `฿${(item.price * item.quantity).toLocaleString()}`
  ]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  autoTable(doc, {
    startY: 50,
    head: [['#', 'สินค้า', 'จำนวน', 'ราคาต่อหน่วย', 'รวม']],
    body: tableData,
    styles: { font: "Helvetica", fontSize: 10 },
    headStyles: { fillColor: [37, 99, 235] }
  });

  doc.text(`รวมทั้งหมด: ฿${total.toLocaleString()}`, 150, doc.lastAutoTable.finalY + 10);
  doc.save("ใบเสนอราคา.pdf");
}