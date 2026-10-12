import type { ComponentType } from "react";
import { Flame, Eye, GitFork, Merge, Compass } from "lucide-react";

// Cinematic still images (cinematic, Jeff Bezos / Amazon-era scenes)
// MẬT MÃ 01 — Jeff Bezos trẻ đúng tạo hình thực tế 1994 (áo sơ mi xanh nhạt, quần khaki, tóc và gương mặt đặc trưng), quỳ gối trên nền xi măng đóng gói sách
const IMG_01 =
  "https://vibe.filesafe.space/1791714734675506672/assets/795ca6d3-c783-492f-9c1c-ce37f04b455e.png";
const IMG_02 =
  "https://vibe.filesafe.space/1791714734675506672/assets/d8a66c0f-dbcb-4cda-8260-278f33d4d43b.png";
const IMG_03 =
  "https://vibe.filesafe.space/1791714734675506672/assets/f6da8d5b-afa5-466f-a7ac-4f477a81f580.png";
// MẬT MÃ 04 — Jeff Bezos trong phòng họp cao tầng ban đêm, hologram mạng lưới M&A phát sáng vàng hổ phách + jade
const IMG_04 =
  "https://vibe.filesafe.space/1791714734675506672/assets/c59173dd-7d34-4dc9-a5bc-edd517a9095e.png";
const IMG_05 =
  "https://vibe.filesafe.space/1791714734675506672/assets/30a34f73-680d-4e9a-8430-5017f3ab47f0.png";

export type SceneKey = "falcon" | "atom" | "gears" | "constellation" | "sphere";

export type VizKey =
  | "amznGrowth"
  | "awsExpansion"
  | "regretFramework"
  | "customerFlywheel"
  | "bookSelection"
  | "expansionPath"
  | "wapaTransform"
  | "maFunnel";

export type Block =
  | { t: "p"; text: string }
  | { t: "q"; text: string } // Jeff Bezos spoken quote
  | { t: "h"; text: string } // inline heading (e.g. "Bài học:")
  | { t: "pull"; text: string } // big mid-chapter pull quote (verbatim)
  | {
      t: "choice";
      title: string;
      options: string[];
      chosen: string;
      reason: string;
    }
  | {
      t: "steps";
      steps: { step: string; title: string; desc: string; detail?: string }[];
    }
  | { t: "lesson"; text: string }
  | { t: "viz"; viz: VizKey };

export interface Chapter {
  id: string;
  code: string;
  number: string;
  subtitle: string;
  tagline: string;
  icon: ComponentType<{ className?: string }>;
  tags: string[];
  image: string;
  scene: SceneKey;
  blocks: Block[];
}

export const SECTION_TITLE = "MẬT MÃ QUẢN TRỊ";
export const SECTION_SUBTITLE =
  "Những nguyên tắc từ người bắt đầu với một tiệm sách online và thay đổi cách cả thế giới mua sắm, đọc tin, lưu trữ dữ liệu và bay vào vũ trụ";

export const PREAMBLE: string[] = [
  "Năm 1994, Jeff Bezos lái xe từ New York sang Seattle.",
  "Vợ ông cầm vô lăng. Ông ngồi ghế phụ, gõ bản kế hoạch kinh doanh trên laptop. Không có văn phòng, không có nhà đầu tư, không có sản phẩm — chỉ có một ý tưởng: bán sách trên Internet, thứ mà khi đó gần như không ai biết đến.",
  "Công ty mới lấy tên là Amazon. Ông tự đóng gói, tự chở hàng ra bưu điện, tự quỳ gối trên nền xi măng lạnh để dán nhãn từng kiện sách. Hai mươi năm sau, Amazon có nửa triệu nhân viên và trị giá gần một nghìn tỷ đô la.",
  "Đây không phải câu chuyện về may mắn.",
  "Đây là câu chuyện về 5 nguyên tắc — được thực hành nhất quán, ngay từ Ngày Một.",
];

export const CHAPTERS: Chapter[] = [
  {
    id: "mat-ma-01",
    code: "DOSSIER // CODE_01",
    number: "01",
    subtitle: "Nguyên Tắc Day 1",
    tagline:
      "Thứ giết chết công ty lớn không phải đối thủ - mà là ngày họ quên mình từng bắt đầu như thế nào",
    icon: Flame,
    tags: ["DAY ONE", "SEATTLE 1994", "10 NGƯỜI", "BÀN ĐÓNG GÓI"],
    image: IMG_01,
    scene: "falcon",
    blocks: [
      {
        t: "p",
        text: "Amazon bắt đầu với 10 người. Bàn làm việc là những tấm cửa cũ gắn chân bàn. Jeff tự quỳ gối đóng gói sách trên nền xi măng.",
      },
      { t: "p", text: 'Một hôm ông nói: "Chúng ta cần đệm đầu gối thôi."' },
      { t: "p", text: 'Người đồng nghiệp bên cạnh ngước lên: "Không, chúng ta cần bàn đóng gói."' },
      {
        t: "q",
        text: '"Tôi nghĩ đây là ý tưởng thông minh nhất tôi từng nghe. Ngày hôm sau tôi đi mua bàn đóng gói, và điều đó đã gấp đôi năng suất của chúng tôi."',
      },
      {
        t: "p",
        text: "Từ 10 người lên nửa triệu nhân viên - nhưng Jeff vẫn muốn Amazon giữ trái tim của ngày đầu tiên đó. Ông gọi đó là tinh thần Day One.",
      },
      { t: "viz", viz: "amznGrowth" },
      {
        t: "p",
        text: "Tinh thần Day One không chỉ là sự khiêm tốn. Nó còn là sức mạnh của sự lang thang.",
      },
      {
        t: "pull",
        text: "Tôi tin vào sức mạnh của 'sự lang thang'. Những quyết định tốt nhất trong đời tôi và trong kinh doanh đều được đưa ra từ trực giác, từ trái tim, từ bản năng - không phải từ phân tích.",
      },
      {
        t: "p",
        text: "Khi nào thì dùng phân tích? Khi bạn có thể. Nhưng những quyết định thực sự thay đổi cuộc đời của tôi như: mở công ty, mua Washington Post, đầu tư vào Blue Origin… hầu hết không đến từ bảng tính. Chúng đến từ một thứ không thể đo lường: cảm nhận rằng đây là điều đúng đắn.",
      },
      {
        t: "p",
        text: "Ông cũng ghi nhớ điều này trong suốt 20 năm điều hành Amazon, nhắc lại ở mỗi buổi họp toàn công ty:",
      },
      {
        t: "q",
        text: "\"Khi cổ phiếu tăng 30% trong một tháng, đừng cảm thấy mình thông minh hơn 30%. Bởi vì khi cổ phiếu giảm 30% trong một tháng, cảm giác 'ngu ngốc hơn 30%' sẽ không dễ chịu chút nào.\"",
      },
      {
        t: "p",
        text: "Cổ phiếu không phải công ty. Công ty không phải cổ phiếu. Và Day One không phải thời điểm - đó là trạng thái tư duy bạn chọn duy trì mỗi ngày.",
      },
      { t: "h", text: "Bài học:" },
      {
        t: "lesson",
        text: "Ngày nguy hiểm nhất không phải Ngày Một. Mà là ngày bạn bắt đầu tin rằng mình đã biết đủ rồi - rằng mình không cần phải lang thang, thử nghiệm, học hỏi nữa. Đó là lúc Day Two bắt đầu. Và Day Two là nơi các công ty chết, một cách từ từ mà không ai nhận ra.",
      },
    ],
  },
  {
    id: "mat-ma-02",
    code: "DOSSIER // CODE_02",
    number: "02",
    subtitle: "Nguyên Tắc Ám Ảnh Khách Hàng",
    tagline: "Hầu hết mọi người nói về khách hàng. Nhưng thực tế họ đang nhìn vào đối thủ.",
    icon: Eye,
    tags: ["ÁM ẢNH KHÁCH HÀNG", "JEFF@AMAZON.COM", "ĐỘC GIẢ", "SÁNG TẠO"],
    image: IMG_02,
    scene: "atom",
    blocks: [
      { t: "p", text: "Có một câu hỏi Jeff Bezos hỏi bất kỳ ai muốn hiểu Amazon:" },
      { t: "q", text: '"Bạn đang tập trung vào khách hàng, hay đang tập trung vào đối thủ?"' },
      { t: "p", text: "Câu trả lời đó, theo ông, quyết định gần như tất cả." },
      {
        t: "q",
        text: '"Amazon có nhiều nguyên tắc, nhưng điều quan trọng nhất giúp chúng tôi thành công là sự ám ảnh tập trung vào khách hàng, thay vì ám ảnh về đối thủ cạnh tranh. Tôi nói chuyện với rất nhiều CEO, nhiều nhà sáng lập, doanh nhân, và tôi nhận ra, dù họ nói về khách hàng, nhưng thực tế họ đang tập trung vào đối thủ."',
      },
      {
        t: "p",
        text: "Sự khác biệt trông có vẻ nhỏ, nhưng tạo ra kết quả hoàn toàn khác nhau. Tập trung vào đối thủ khiến bạn phản ứng. Tập trung vào khách hàng khiến bạn sáng tạo.",
      },
      {
        t: "pull",
        text: "Tập trung vào đối thủ khiến bạn phản ứng. Tập trung vào khách hàng khiến bạn sáng tạo.",
      },
      { t: "viz", viz: "customerFlywheel" },
      {
        t: "p",
        text: "Nhưng trước khi ám ảnh với khách hàng, bạn phải trả lời được một câu hỏi còn cơ bản hơn: khách hàng của bạn thực sự là ai?",
      },
      {
        t: "p",
        text: "Tại Washington Post, nhiều người nghĩ khách hàng là các nhà quảng cáo - vì họ trả tiền. Jeff không đồng ý:",
      },
      {
        t: "q",
        text: '"Khách hàng là độc giả. Chấm hết. Khách hàng là độc giả. Và, nhân tiện, các nhà quảng cáo muốn ở đâu? Họ muốn xuất hiện ở nơi có độc giả. Thế nên điều này thực ra không phức tạp - tất cả tự động xoay vòng một cách rất hợp lý."',
      },
      {
        t: "p",
        text: "Và Jeff không chỉ nói — ông thực hành điều đó mỗi ngày, bằng địa chỉ email jeff@amazon.com công khai cho tất cả khách hàng. Khi nhận được một khiếu nại, ông không chỉ giải quyết cho một người. Ông yêu cầu đội ngũ tìm nguyên nhân gốc rễ và sửa tận gốc:",
      },
      {
        t: "q",
        text: '"Bằng cách đó, khi bạn sửa vấn đề, bạn không chỉ sửa cho một khách hàng, mà sửa cho tất cả khách hàng. Quy trình này là một phần cực kỳ quan trọng trong cách chúng tôi vận hành."',
      },
      { t: "h", text: "Bài học:" },
      {
        t: "lesson",
        text: "Tập trung vào khách hàng tạo ra một vòng xoáy đi lên: khách hàng hạnh phúc → họ quay lại → doanh thu tăng → bạn phục vụ họ tốt hơn. Tập trung vào đối thủ tạo ra vòng xoáy đi xuống: bạn phản ứng thay vì sáng tạo, sao chép thay vì tiên phong. Hãy biết khách hàng thật sự của bạn là ai, rồi ám ảnh với họ.",
      },
    ],
  },
  {
    id: "mat-ma-03",
    code: "DOSSIER // CODE_03",
    number: "03",
    subtitle: "Nguyên Tắc Mở Rộng Hệ Thống",
    tagline:
      "Những đế chế lớn nhất không được lên kế hoạch từ trước - chúng xuất hiện khi bạn giải quyết vấn đề của chính mình đủ tốt đến mức cả thế giới cần nó",
    icon: GitFork,
    tags: ["WWW +2300%/NĂM", "AWS 2006", "7 NĂM XUẤT PHÁT", "ME-TOO THẤT BẠI"],
    image: IMG_03,
    scene: "gears",
    blocks: [
      { t: "p", text: "Năm 1994, bản kế hoạch kinh doanh của Amazon chỉ có một từ: sách." },
      {
        t: "p",
        text: "Không phải âm nhạc. Không phải điện tử. Không phải điện toán đám mây. Chỉ là sách.",
      },
      {
        t: "p",
        text: "Nhưng Jeff biết ông đang ngồi trên thứ gì đó lớn hơn nhiều khi phát hiện World Wide Web đang tăng trưởng 2.300% mỗi năm vào năm 1994. Ông lập danh sách các sản phẩm tiềm năng và chọn sách vì một lý do đơn giản: không có danh mục nào có nhiều lựa chọn hơn - 3 triệu đầu sách trên toàn cầu, trong khi các hiệu sách lớn nhất chỉ chứa được 150.000.",
      },
      { t: "viz", viz: "bookSelection" },
      { t: "p", text: "Rồi ông làm một việc thông minh hơn việc tự đoán: ông hỏi khách hàng." },
      {
        t: "q",
        text: "\"Tôi gửi email cho 1.000 khách hàng được chọn ngẫu nhiên và hỏi: 'Ngoài những sản phẩm chúng tôi đang bán, bạn muốn chúng tôi bán thêm gì?'\"",
      },
      {
        t: "p",
        text: 'Câu trả lời trở về dài dằng dằng, đủ mọi thứ. Một người viết: "Ước gì các bạn bán cả gạt nước kính ô tô, tôi đang rất cần mua gạt nước."',
      },
      {
        t: "q",
        text: "\"Và tôi nghĩ thầm: 'Ồ, vậy là chúng ta có thể bán bất kỳ thứ gì theo cách này.'\"",
      },
      {
        t: "p",
        text: "Từ sách sang âm nhạc, video, điện tử, đồ chơi - rồi mọi thứ. Tầm nhìn không được lên kế hoạch từ đầu. Nó được phát hiện trên đường đi bằng cách lắng nghe khách hàng.",
      },
      { t: "viz", viz: "expansionPath" },
      { t: "p", text: "Nhưng sự mở rộng táo bạo nhất lại đến từ bên trong." },
      {
        t: "p",
        text: "Amazon xây AWS - Amazon Web Services - không phải để bán cho thiên hạ. Mà vì chính Amazon cần nó.",
      },
      {
        t: "p",
        text: "Họ nhận ra một vấn đề lãng phí khổng lồ: hai nhóm kỹ sư phát triển ứng dụng và vận hành hạ tầng phải họp nhau liên tục để phối hợp tài nguyên, những việc không tạo ra bất kỳ giá trị nào cho khách hàng. Amazon xây một bộ API chuẩn hóa để xóa bỏ ma sát đó.",
      },
      {
        t: "pull",
        text: "Ngay khi lên kế hoạch này, chúng tôi thấy rõ ràng đây sẽ là một giải pháp tuyệt vời cho chính mình. Và ngay khi triển khai, chúng tôi nhận ra: mọi công ty trên thế giới cũng sẽ cần điều này.",
      },
      {
        t: "p",
        text: "Và điều kỳ diệu xảy ra: suốt 7 năm đầu, AWS gần như không có đối thủ đáng kể nào.",
      },
      {
        t: "q",
        text: '"Khi bạn là người tiên phong, nếu may mắn, bạn có được khoảng hai năm xuất phát trước đối thủ. Không ai có được bảy năm xuất phát cả. Điều đó thật đáng kinh ngạc."',
      },
      { t: "viz", viz: "awsExpansion" },
      { t: "h", text: "Bài học:" },
      {
        t: "lesson",
        text: "Những đổi mới vĩ đại nhất thường không bắt đầu bằng ý định chinh phục thị trường. Chúng bắt đầu bằng việc giải quyết thật sự tốt một vấn đề của chính bạn - rồi nhận ra người khác cũng đang gặp vấn đề tương tự. Hãy hỏi khách hàng. Hãy xây cho chính mình trước. Và đừng bao giờ xây thứ chỉ để giống người khác, vì sản phẩm 'me-too' gần như luôn thất bại.",
      },
    ],
  },
  {
    id: "mat-ma-04",
    code: "DOSSIER // CODE_04",
    number: "04",
    subtitle: "Nguyên Tắc Mua Bán Sáp Nhập",
    tagline:
      "Đừng mua tài sản - hãy mua sứ mệnh. Và chỉ mua khi bạn có thể hoàn thành sứ mệnh đó tốt hơn, chứ không phải chỉ để sở hữu tài sản.",
    icon: Merge,
    tags: ["WASHINGTON POST", "WHOLE FOODS", "MISSIONARY", "MÓN QUÀ INTERNET"],
    image: IMG_04,
    scene: "constellation",
    blocks: [
      { t: "p", text: "Jeff Bezos không có ý định mua Washington Post. Chưa bao giờ." },
      {
        t: "p",
        text: 'Người bạn lâu năm Don Graham nhờ người trung gian hỏi ông có quan tâm không. Jeff từ chối ngay: "Tôi chẳng biết gì về ngành báo chí cả."',
      },
      {
        t: "p",
        text: 'Nhưng Don kiên trì. Và qua nhiều cuộc trò chuyện, ông thuyết phục được Jeff rằng điều đó không quan trọng: "Bên trong Washington Post đã có quá nhiều nhân tài hiểu về ngành báo. Điều họ cần là một người hiểu về Internet."',
      },
      { t: "p", text: "Jeff bắt đầu tự vấn bản thân bằng hai câu hỏi đơn giản." },
      { t: "p", text: "Câu hỏi thứ nhất: Đây có phải là thiết chế quan trọng không?" },
      {
        t: "q",
        text: '"Tôi tự nhủ: nếu đây chỉ là một công ty sản xuất đồ ăn vặt đang lỗ nặng thì câu trả lời chắc chắn là không. Nhưng đây là tờ báo của thủ đô của quốc gia quan trọng nhất thế giới. Washington Post có một vai trò cực kỳ quan trọng trong nền dân chủ này - điều đó với tôi là không thể nghi ngờ."',
      },
      { t: "p", text: "Câu hỏi thứ hai: Tôi có lạc quan rằng nó có thể thành công không?" },
      { t: "p", text: "Ông nhìn thấy thứ mà người khác chưa thấy:" },
      {
        t: "pull",
        text: "Internet đã phá hủy gần như tất cả, nhưng nó cũng mang đến một món quà duy nhất: phân phối toàn cầu miễn phí.",
      },
      {
        t: "p",
        text: "Ngày xưa, nếu muốn có một tờ báo thực sự toàn cầu, bạn phải xây nhà máy in khắp nơi, xây hệ thống hậu cần khổng lồ. Nhưng ngày nay, nhờ Internet, bạn có kênh phân phối toàn cầu miễn phí. Chúng tôi phải tận dụng món quà đó.",
      },
      {
        t: "p",
        text: "Chiến lược: chuyển từ mô hình kiếm nhiều tiền trên ít độc giả sang kiếm ít tiền trên hàng triệu độc giả toàn cầu. Kết quả: Washington Post có lợi nhuận trở lại, phòng tin tức tăng trưởng đều đặn mỗi năm.",
      },
      { t: "viz", viz: "wapaTransform" },
      {
        t: "p",
        text: "Cùng tư duy đó dẫn đến thương vụ Whole Foods. Nhưng trước khi ký bất kỳ hợp đồng nào, Jeff luôn hỏi một câu:",
      },
      {
        t: "p",
        text: "Người sáng lập này là missionary (người làm vì sứ mệnh) hay mercenary (lính đánh thuê)?",
      },
      {
        t: "pull",
        text: "'Lính đánh thuê' chỉ muốn lướt sóng, bán cổ phần thật nhanh và kiếm lời. 'Người làm vì sứ mệnh' thì yêu sản phẩm của họ, yêu khách hàng và muốn xây dựng một dịch vụ tuyệt vời. Điều nghịch lý thú vị là chính những 'người làm vì sứ mệnh' thường kiếm được nhiều tiền hơn.",
      },
      { t: "viz", viz: "maFunnel" },
      {
        t: "p",
        text: "Khi gặp John Mackey - nhà sáng lập Whole Foods - Jeff nhận ra ngay: đây là một người làm vì sứ mệnh điển hình, với sứ mệnh rõ ràng là mang thực phẩm hữu cơ, bổ dưỡng đến với mọi người. Amazon không mua để kiểm soát Whole Foods, Amazon mua để mang nguồn lực, công nghệ và năng lực vận hành đến mở rộng sứ mệnh đó.",
      },
      { t: "h", text: "Bài học:" },
      {
        t: "lesson",
        text: "Mua bán sáp nhập không phải là mua tài sản. Đó là đặt cược vào con người và sứ mệnh. Trước mỗi quyết định lớn, hãy hỏi: Đây có phải là thiết chế quan trọng không? Tôi có thể làm nó to lớn hơn không? Và người đứng đầu nó là missionary hay mercenary? Ba câu hỏi đó sẽ loại bỏ hầu hết những thương vụ sai ngay từ đầu.",
      },
    ],
  },
  {
    id: "mat-ma-05",
    code: "DOSSIER // CODE_05",
    number: "05",
    subtitle: "Nguyên Tắc Lựa Chọn",
    tagline:
      'Đừng hỏi "Điều này có rủi ro không?" Hãy hỏi "Khi 80 tuổi nhìn lại, tôi sẽ hối tiếc điều gì?"',
    icon: Compass,
    tags: ["KHUNG HỐI TIẾC", "BLUE ORIGIN", "TUỔI 80", "CON ĐƯỜNG ÍT HỐI TIẾC"],
    image: IMG_05,
    scene: "sphere",
    blocks: [
      {
        t: "p",
        text: "Năm 1994, Jeff Bezos đi dạo cùng sếp - David Shaw - ở Central Park và thông báo mình sẽ nghỉ việc để bán sách trên Internet.",
      },
      {
        t: "p",
        text: 'David lắng nghe, rồi đưa ra một nhận xét hoàn toàn hợp lý: "Jeff, đây là ý tưởng rất hay. Nhưng đây sẽ là ý tưởng tuyệt vời hơn dành cho ai đó chưa có một công việc tốt như anh."',
      },
      {
        t: "p",
        text: "Jeff về nhà và suy nghĩ suốt hai ngày. Không phải bằng bảng tính. Không phải bằng phân tích rủi ro. Mà bằng một câu hỏi ông tự đặt cho chính mình - thứ ông gọi là khung hối tiếc:",
      },
      {
        t: "pull",
        text: "Khi tôi 80 hay 90 tuổi, tôi muốn số lần hối hận trong đời là ít nhất có thể. Và phần lớn những điều chúng ta hối hận chính là những việc ta đã không làm — những con đường ta chưa từng bước đi.",
      },
      {
        t: "p",
        text: "Chính những điều đó mới ám ảnh chúng ta. Ông quyết định nghỉ việc. Lái xe sang Seattle. Bắt đầu Amazon.",
      },
      { t: "p", text: "Cùng khung tư duy đó xuất hiện ở mỗi lựa chọn lớn trong cuộc đời ông." },
      {
        t: "p",
        text: "Khi đầu tư hàng tỷ đô vào Blue Origin - ông biết rõ bất kỳ nhà đầu tư hợp lý nào cũng sẽ gọi đó là quyết định tồi. Nhưng ông tin vào sứ mệnh:",
      },
      {
        t: "q",
        text: "\"Vai trò của tôi là xây dựng hạ infra không gian để các thế hệ tiếp theo có thể sử dụng nó - theo cách tôi đã sử dụng UPS, FedEx và Internet để xây dựng Amazon. Amazon khởi đầu chỉ với một triệu đô la vốn, và tôi có thể 'cưỡi' trên hệ thống thẻ tín dụng, hệ thống vận tải và viễn thông đã có sẵn. Tôi muốn tạo ra điều tương tự cho không gian.\"",
      },
      { t: "viz", viz: "regretFramework" },
      { t: "h", text: "Bài học:" },
      {
        t: "lesson",
        text: "Mỗi lựa chọn quan trọng trong cuộc đời đều có thể được nhìn qua hai lăng kính: lăng kính của rủi ro hôm nay - hoặc lăng kính của hối tiếc ở tuổi 80. Hầu hết những điều chúng ta hối tiếc nhất không phải những thứ ta đã thử và thất bại, mà là những thứ ta chưa bao giờ dám thử. Hãy chọn con đường ít hối tiếc hơn.",
      },
    ],
  },
];
