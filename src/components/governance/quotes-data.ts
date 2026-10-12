export interface QuoteData {
  id: string;
  number: string;
  text: string;
  image: string;
  /** portrait = ảnh chân dung Jeff Bezos; scene = ảnh bối cảnh biểu tượng (không người rõ mặt) */
  kind: "portrait" | "scene";
}

// 18 ảnh điện ảnh màu riêng biệt — đồng bộ vàng hổ phách + ngọc bích trên nền đen
// portrait = Jeff Bezos · scene = bối cảnh/sản phẩm không có người rõ mặt
const Q01 =
  "https://vibe.filesafe.space/1791714734675506672/assets/4fc5625c-1634-4140-a020-cd4ddc3dcc57.png"; // garage startup nhỏ bé, tinh thần Ngày Một — scene
const Q02 =
  "https://vibe.filesafe.space/1791714734675506672/assets/1b8df3e0-cab3-456e-ac54-76130d8b8d80.png"; // lá úa + đồng hồ cát, suy tàn Day Two — scene
const Q03 =
  "https://vibe.filesafe.space/1791714734675506672/assets/6f4407e6-c43f-4a40-87e2-9bd410767070.png"; // Jeff trầm tư lang thang — portrait
const Q04 =
  "https://vibe.filesafe.space/1791714734675506672/assets/7499545f-4567-4f19-bbe6-7fd2fea6701f.png"; // Jeff + biểu đồ cổ phiếu — portrait
const Q05 =
  "https://vibe.filesafe.space/1791714734675506672/assets/dfe5bf21-3c4f-4914-8fdf-83b08038ab27.png"; // Jeff ám ảnh khách hàng, chỉ tay — portrait
const Q06 =
  "https://vibe.filesafe.space/1791714734675506672/assets/1aec2c7a-a7d0-4996-982c-fe425176206d.png"; // sản phẩm me-too vs tiên phong — scene
const Q07 =
  "https://vibe.filesafe.space/1791714734675506672/assets/1d3e7998-2820-45c3-a3f5-a97cb3ea8d76.png"; // Jeff missionary vs mercenary — portrait
const Q08 =
  "https://vibe.filesafe.space/1791714734675506672/assets/b513fdfd-2d00-45fc-9767-ede3af9ea3e0.png"; // Jeff phòng họp, một quyết định — portrait
const Q09 =
  "https://vibe.filesafe.space/1791714734675506672/assets/44d9b522-0217-4d7c-ba04-514e49ffb4af.png"; // chữ PROPHET phát sáng — scene
const Q10 =
  "https://vibe.filesafe.space/1791714734675506672/assets/d87cb690-ba01-41fb-91cf-30c385e31d12.png"; // la bàn chỉ về ngôi sao — scene
const Q11 =
  "https://vibe.filesafe.space/1791714734675506672/assets/1c6fa9fa-992a-4a31-9d81-4401d20e5ea8.png"; // phòng thí nghiệm sáng tạo — scene
const Q12 =
  "https://vibe.filesafe.space/1791714734675506672/assets/bdfe5a0b-6f34-474b-9a6e-43fe1a2767b1.png"; // Jeff bóng lưng sau cửa — portrait
const Q13 =
  "https://vibe.filesafe.space/1791714734675506672/assets/0ac69c3a-78e5-4f1e-886e-cb8061ecb58c.png"; // hai bàn tay buông tia sáng — scene
const Q14 =
  "https://vibe.filesafe.space/1791714734675506672/assets/208e9508-f7ff-4785-9d3a-f35236b31a33.png"; // thuyền giữa gió ngược — scene
const Q15 =
  "https://vibe.filesafe.space/1791714734675506672/assets/737040bf-5a3a-4ae7-8705-171081e26ff3.png"; // bia trúng đích — scene
const Q16 =
  "https://vibe.filesafe.space/1791714734675506672/assets/aa4356f1-6bd9-4ec0-8e4f-7e430f763a0f.png"; // cúp bụi + đồng hồ cát — scene
const Q17 =
  "https://vibe.filesafe.space/1791714734675506672/assets/d5e2f738-1575-4df3-8039-cd9662efffb7.png"; // Jeff hồi tưởng, 80 tuổi — portrait
const Q18 =
  "https://vibe.filesafe.space/1791714734675506672/assets/b6f41a0b-8f95-4430-afb0-02fcc8aa72fd.png"; // Jeff tử tế, nụ cười ấm — portrait

export const QUOTES: QuoteData[] = [
  {
    id: "q01",
    number: "01",
    text: "Đây chỉ là Ngày Một. Mọi việc tôi từng làm đều bắt đầu nhỏ bé. Tôi luôn muốn Amazon — dù là công ty lớn — vẫn giữ trái tim và tinh thần của một công ty nhỏ.",
    image: Q01,
    kind: "scene",
  },
  {
    id: "q02",
    number: "02",
    text: "Ngày Hai là trạng thái đứng yên. Tiếp theo là sự lỗi thời. Tiếp theo là sự suy tàn đau đớn. Tiếp theo là cái chết. Và đó là lý do tại sao luôn phải là Ngày Một.",
    image: Q02,
    kind: "scene",
  },
  {
    id: "q03",
    number: "03",
    text: "Tôi tin vào sức mạnh của 'sự lang thang'. Những quyết định tốt nhất trong đời tôi và trong kinh doanh đều được đưa ra từ trực giác, từ trái tim, từ bản năng — không phải từ phân tích.",
    image: Q03,
    kind: "portrait",
  },
  {
    id: "q04",
    number: "04",
    text: "Khi cổ phiếu tăng 30% trong một tháng, đừng cảm thấy mình thông minh hơn 30%. Bởi vì khi cổ phiếu giảm 30% trong một tháng, cảm giác 'ngu ngốc hơn 30%' sẽ không dễ chịu chút nào.",
    image: Q04,
    kind: "portrait",
  },
  {
    id: "q05",
    number: "05",
    text: "Nguyên tắc số 1 — điều quan trọng nhất giúp chúng tôi thành công — là sự ám ảnh tập trung vào khách hàng, thay vì ám ảnh về đối thủ cạnh tranh. Nếu bạn có thể duy trì sự tập trung tuyệt đối vào khách hàng, đó sẽ là lợi thế cạnh tranh khổng lồ.",
    image: Q05,
    kind: "portrait",
  },
  {
    id: "q06",
    number: "06",
    text: "Bất cứ khi nào chúng tôi thử một dịch vụ 'me-too', chúng tôi thường bị đánh bại. Văn hóa của Amazon phù hợp hơn với việc tiên phong và sáng tạo.",
    image: Q06,
    kind: "scene",
  },
  {
    id: "q07",
    number: "07",
    text: "'Lính đánh thuê' chỉ muốn lướt sóng, bán cổ phần thật nhanh và kiếm lời. 'Người làm vì sứ mệnh' thì yêu sản phẩm của họ, yêu khách hàng và muốn xây dựng một dịch vụ tuyệt vời. Điều nghịch lý thú vị là chính những 'người làm vì sứ mệnh' thường kiếm được nhiều tiền hơn.",
    image: Q07,
    kind: "portrait",
  },
  {
    id: "q08",
    number: "08",
    text: "Với tư cách một nhà lãnh đạo cấp cao, bạn thực sự được trả tiền để làm gì? Bạn được trả tiền để đưa ra một số ít các quyết định chất lượng cao. Công việc của bạn không phải là đưa ra hàng nghìn quyết định mỗi ngày. Warren Buffett từng nói ông chỉ cần đưa ra 3 quyết định tốt một năm là đã thành công. Và tôi tin điều đó.",
    image: Q08,
    kind: "portrait",
  },
  {
    id: "q09",
    number: "09",
    text: "Khi bị hỏi: 'Ông Bezos, ông có biết đánh vần chữ P-R-O-F-I-T (lợi nhuận) không?' Tôi trả lời: 'Vâng, đánh vần là P-R-O-P-H-E-T (nhà tiên tri). Với chúng tôi, quý này đã được nướng xong từ 3 năm trước. Bạn luôn cần đi trước 2–3 năm.'",
    image: Q09,
    kind: "scene",
  },
  {
    id: "q10",
    number: "10",
    text: "Nếu bạn tập trung vào đối thủ, bạn phải chờ đến khi họ làm điều gì đó. Tập trung vào khách hàng cho phép bạn tiên phong hơn. Nếu chúng tôi có thể để đối thủ bận tâm về chúng tôi trong khi chúng tôi vẫn tập trung vào khách hàng — cuối cùng chúng tôi sẽ ổn.",
    image: Q10,
    kind: "scene",
  },
  {
    id: "q11",
    number: "11",
    text: "Nếu bạn tăng gấp đôi số lượng thí nghiệm trong một năm, bạn sẽ tăng gấp đôi khả năng sáng tạo. Nếu không đủ kiên định, bạn sẽ bỏ cuộc với các thí nghiệm quá sớm. Nhưng nếu không đủ linh hoạt, bạn sẽ đập đầu vào tường mà không nhìn thấy giải pháp khác.",
    image: Q11,
    kind: "scene",
  },
  {
    id: "q12",
    number: "12",
    text: "Thương hiệu của bạn là những gì người khác nói về bạn khi bạn không có mặt trong phòng.",
    image: Q12,
    kind: "portrait",
  },
  {
    id: "q13",
    number: "13",
    text: "Một trong những sai lầm lớn nhất của con người là cố ép bản thân thích điều gì đó. Bạn không chọn đam mê của mình. Đam mê của bạn chọn bạn.",
    image: Q13,
    kind: "scene",
  },
  {
    id: "q14",
    number: "14",
    text: "Khi thế giới thay đổi xung quanh bạn và thay đổi bất lợi cho bạn — thứ từng là gió thuận giờ thành gió ngược — bạn phải đương đầu và tìm cách xử lý, vì phàn nàn không phải chiến lược.",
    image: Q14,
    kind: "scene",
  },
  {
    id: "q15",
    number: "15",
    text: "Nếu bạn không bao giờ muốn bị chỉ trích — đừng làm bất cứ điều gì mới.",
    image: Q15,
    kind: "scene",
  },
  {
    id: "q16",
    number: "16",
    text: "Hồi chuông báo tử cho bất kỳ doanh nghiệp nào là việc tôn vinh quá khứ — dù nó từng tốt đẹp đến đâu.",
    image: Q16,
    kind: "scene",
  },
  {
    id: "q17",
    number: "17",
    text: "Tôi không muốn sau này hối hận. Khi tôi 80 hay 90 tuổi, tôi muốn số lần hối hận trong đời là ít nhất có thể. Phần lớn những điều chúng ta hối hận chính là những việc ta đã không làm — những con đường ta chưa từng bước đi. Chính những điều đó mới ám ảnh chúng ta.",
    image: Q17,
    kind: "portrait",
  },
  {
    id: "q18",
    number: "18",
    text: "Sự thông minh là một món quà. Lòng tử tế là một sự lựa chọn. Món quà thì dễ dàng thôi — suy cho cùng, chúng được ban tặng mà. Sự lựa chọn có thể rất khó khăn. Bạn chọn cuộc sống dễ dàng — hay cuộc sống phụng sự và phiêu lưu? Bạn sẽ thông minh để đánh bại người khác — hay sẽ tử tế?",
    image: Q18,
    kind: "portrait",
  },
];
