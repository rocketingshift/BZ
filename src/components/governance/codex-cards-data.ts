import { Flame, Eye, GitFork, Merge, Compass } from "lucide-react";

export interface CodexCardData {
  id: string;
  number: string;
  code: string;
  title: string;
  tagline: string;
  product: string;
  productDesc: string;
  image: string;
  fullQuote: string;
  corePrinciple: string;
  actionLesson: string;
  icon: typeof Flame;
}

export const CODEX_CARDS: CodexCardData[] = [
  {
    id: "mat-ma-01",
    number: "01",
    code: "MẬT MÃ 01",
    title: "Nguyên Tắc Day 1",
    tagline: "Thứ giết chết công ty lớn không phải đối thủ - mà là ngày họ quên mình từng bắt đầu",
    product: "Amazon · Seattle Garage 1994",
    productDesc:
      "Từ 10 người quỳ gối đóng gói sách đến nửa triệu nhân viên, gần một nghìn tỷ đô la",
    image:
      "https://vibe.filesafe.space/1791714734675506672/assets/bdbefb70-7598-4cda-8861-5f52993b4266.png",
    fullQuote:
      "Tôi tin vào sức mạnh của 'sự lang thang'. Những quyết định tốt nhất đều đến từ trực giác, từ trái tim, từ bản năng - không phải từ phân tích.",
    corePrinciple:
      "Giữ mãi tinh thần Ngày Một: khiêm tốn, lang thang, thử nghiệm — trước khi Day Two bắt đầu.",
    actionLesson:
      "Ngày nguy hiểm nhất là ngày bạn tin mình đã biết đủ. Day Two là nơi các công ty chết, từ từ mà không ai nhận ra.",
    icon: Flame,
  },
  {
    id: "mat-ma-02",
    number: "02",
    code: "MẬT MÃ 02",
    title: "Ám Ảnh Khách Hàng",
    tagline: "Hầu hết mọi người nói về khách hàng, nhưng thực tế đang nhìn vào đối thủ",
    product: "jeff@amazon.com · Washington Post",
    productDesc: "Email công khai cho mọi khách hàng — sửa một khiếu nại là sửa cho tất cả",
    image:
      "https://vibe.filesafe.space/1791714734675506672/assets/d8a66c0f-dbcb-4cda-8260-278f33d4d43b.png",
    fullQuote: "Amazon thành công nhờ ám ảnh tập trung vào khách hàng, thay vì ám ảnh về đối thủ.",
    corePrinciple:
      "Tập trung vào khách hàng tạo ra sáng tạo; tập trung vào đối thủ chỉ tạo ra phản ứng.",
    actionLesson:
      "Biết khách hàng thật sự là ai (độc giả, không phải nhà quảng cáo), rồi ám ảnh với họ đến tận gốc rễ.",
    icon: Eye,
  },
  {
    id: "mat-ma-03",
    number: "03",
    code: "MẬT MÃ 03",
    title: "Mở Rộng Hệ Thống",
    tagline:
      "Những đế chế lớn nhất không được lên kế hoạch — chúng xuất hiện khi bạn giải quyết vấn đề của mình đủ tốt",
    product: "AWS · Amazon Web Services 2006",
    productDesc: "Xây cho chính mình trước — rồi cả thế giới cần nó, 7 năm xuất phát trước đối thủ",
    image:
      "https://vibe.filesafe.space/1791714734675506672/assets/f6da8d5b-afa5-466f-a7ac-4f477a81f580.png",
    fullQuote:
      "Khi bạn là người tiên phong, nếu may mắn, bạn có khoảng hai năm xuất phát. Không ai có được bảy năm cả.",
    corePrinciple:
      "Giải quyết thật tốt một vấn đề của chính bạn — rồi nhận ra người khác cũng cần điều đó.",
    actionLesson:
      "Hỏi khách hàng muốn mua gì. Xây cho chính mình trước. Đừng bao giờ xây sản phẩm me-too.",
    icon: GitFork,
  },
  {
    id: "mat-ma-04",
    number: "04",
    code: "MẬT MÃ 04",
    title: "Mua Bán Sáp Nhập",
    tagline: "Đừng mua tài sản - hãy mua sứ mệnh. Chỉ mua khi bạn hoàn thành sứ mệnh đó tốt hơn",
    product: "Washington Post · Whole Foods",
    productDesc: "Mua sứ mệnh, không mua tài sản — missionary chứ không phải mercenary",
    image:
      "https://vibe.filesafe.space/1791714734675506672/assets/9c6158af-6c05-4b78-8fcd-ba72e576d6da.png",
    fullQuote:
      "Internet đã phá hủy gần như tất cả, nhưng nó cũng mang đến một món quà duy nhất: phân phối toàn cầu miễn phí.",
    corePrinciple:
      "Hỏi: thiết chế quan trọng không? Tôi làm to hơn được không? Người đứng đầu là missionary hay mercenary?",
    actionLesson: "Mua bán là đặt cược vào con người và sứ mệnh, không phải sở hữu tài sản.",
    icon: Merge,
  },
  {
    id: "mat-ma-05",
    number: "05",
    code: "MẬT MÃ 05",
    title: "Lựa Chọn",
    tagline: "Đừng hỏi 'có rủi ro không?' — hãy hỏi 'tuổi 80 tôi hối tiếc điều gì?'",
    product: "Blue Origin · Khung Hối Tiếc",
    productDesc: "Bỏ công việc tốt, lái xe sang Seattle, đặt cược vào con đường ít hối tiếc hơn",
    image:
      "https://vibe.filesafe.space/1791714734675506672/assets/30a34f73-680d-4e9a-8430-5017f3ab47f0.png",
    fullQuote:
      "Khi tôi 80 hay 90 tuổi, tôi muốn số lần hối hận trong đời là ít nhất có thể. Phần lớn hối hận là những việc ta đã không làm.",
    corePrinciple:
      "Hai lăng kính: rủi ro hôm nay — hoặc hối tiếc ở tuổi 80. Chọn con đường ít hối tiếc hơn.",
    actionLesson:
      "Hầu hết hối tiếc lớn nhất không phải thất bại, mà là chưa bao giờ dám thử. Hãy chọn con đường ít hối tiếc.",
    icon: Compass,
  },
];
