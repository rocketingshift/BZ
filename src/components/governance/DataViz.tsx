import React, { useEffect, useRef } from "react";
import type { VizKey } from "./chapters-data";

/* ── Amazon growth timeline 1994 → 2014: 10 người → 500K nhân viên ── */
function AmznGrowth() {
  const events = [
    { x: 8, title: "1994", subtitle: "10 người", tone: "start", pos: "bottom" },
    { x: 28, title: "1997", subtitle: "IPO", tone: "win", pos: "top" },
    { x: 48, title: "2006", subtitle: "AWS", tone: "win", pos: "bottom" },
    { x: 68, title: "2013", subtitle: "WaPo", tone: "win", pos: "top" },
    { x: 90, title: "2014", subtitle: "500K · ~$1T", tone: "win", pos: "bottom" },
  ];
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && el.classList.add("viz-in")),
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="viz-container">
      <div className="viz-title">AMAZON // 1994 → 2014</div>
      <div className="relative h-32 sm:h-36 my-2">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-[var(--color-gold)]/25 -translate-y-1/2" />
        {events.map((ev, i) => (
          <div
            key={i}
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 viz-dot"
            style={{ left: `${ev.x}%`, transitionDelay: `${i * 0.12}s` }}
          >
            <span
              className={`block w-3 h-3 rounded-full border transition-all ${
                ev.tone === "start"
                  ? "bg-[var(--color-gold-dark)] border-[var(--color-gold)]/60"
                  : "bg-[var(--color-jade)] border-[var(--color-jade)] shadow-[0_0_12px_var(--color-jade)]"
              }`}
            />
            <div
              className={`absolute left-1/2 -translate-x-1/2 text-center pointer-events-none whitespace-nowrap ${
                ev.pos === "top" ? "bottom-5" : "top-5"
              }`}
            >
              <div
                className={`font-mono text-[10px] sm:text-[11px] font-semibold leading-tight ${
                  ev.tone === "start"
                    ? "text-[var(--color-gold-light)]"
                    : "text-[var(--color-jade-glow)]"
                }`}
              >
                {ev.title}
              </div>
              <div className="font-mono text-[9px] sm:text-[10px] text-[var(--color-foreground)]/65 leading-tight mt-0.5">
                {ev.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[11px] font-mono text-[var(--color-muted-foreground)]">
        Từ 10 người quỳ gối đóng gói đến nửa triệu nhân viên.
      </p>
    </div>
  );
}

/* ── AWS head start: 2 năm (thông thường) vs 7 năm (AWS) ── */
function AwsExpansion() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && el.classList.add("viz-in")),
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="viz-container">
      <div className="viz-title">XUẤT PHÁT // 7 NĂM HEAD START</div>
      <div className="space-y-3 my-3">
        <div>
          <div className="flex justify-between text-[11px] font-mono mb-1">
            <span className="text-[var(--color-gold-light)]">Tiên phong (thông thường)</span>
            <span className="text-[var(--color-gold)]/70">~2 năm</span>
          </div>
          <div className="h-3 rounded-full bg-black/60 border border-[var(--color-gold)]/30 overflow-hidden">
            <div
              className="viz-bar h-full bg-gradient-to-r from-[var(--color-gold-dark)] to-[var(--color-gold)]"
              style={{ ["--w" as string]: "28%", transitionDelay: "0.1s" } as React.CSSProperties}
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[11px] font-mono mb-1">
            <span className="text-[var(--color-jade-glow)]">AWS (xây cho chính mình)</span>
            <span className="text-[var(--color-jade)]/80">~7 năm</span>
          </div>
          <div className="h-3 rounded-full bg-black/60 border border-[var(--color-gold)]/30 overflow-hidden">
            <div
              className="viz-bar h-full bg-gradient-to-r from-[var(--color-jade)] to-[var(--color-jade-glow)]"
              style={{ ["--w" as string]: "100%", transitionDelay: "0.4s" } as React.CSSProperties}
            />
          </div>
        </div>
      </div>
      <p className="text-[11px] font-mono text-[var(--color-muted-foreground)]">
        Không ai có được bảy năm xuất phát cả — điều đó thật đáng kinh ngạc.
      </p>
    </div>
  );
}

/* ── Regret framework: hai lăng kính lựa chọn ── */
function RegretFramework() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && el.classList.add("viz-in")),
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="viz-container">
      <div className="viz-title">LỰA CHỌN // KHUNG HỐI TIẾC</div>
      <div className="grid grid-cols-2 gap-4 my-3">
        <div className="text-center">
          <div className="relative mx-auto w-20 h-20">
            <div className="absolute inset-0 rounded-full border-2 border-[var(--color-gold-dark)]/50" />
            <div className="viz-scale absolute inset-0 rounded-full bg-[var(--color-gold)]/15 border border-[var(--color-gold)]/40" />
          </div>
          <div className="text-[11px] font-mono mt-2 text-[var(--color-muted-foreground)] leading-tight">
            Rủi ro hôm nay
            <br />
            chơi an toàn
          </div>
        </div>
        <div className="text-center">
          <div className="relative mx-auto w-20 h-20">
            <div className="absolute inset-0 rounded-full border-2 border-[var(--color-gold-dark)]/50" />
            <div className="viz-grow absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-gold)]/30 to-[var(--color-jade)]/30 border border-[var(--color-jade)]/50" />
          </div>
          <div className="text-[11px] font-mono mt-2 text-[var(--color-jade-glow)] leading-tight">
            Tuổi 80 nhìn lại
            <br />
            dám thử · ít hối tiếc
          </div>
        </div>
      </div>
      <p className="text-[11px] font-mono text-[var(--color-muted-foreground)]">
        Phần lớn hối tiếc là những việc ta đã không làm.
      </p>
    </div>
  );
}

/* ── Customer obsession flywheel: virtuous cycle vs vicious spiral ── */
function CustomerFlywheel() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && el.classList.add("viz-in")),
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const downStages = [
    "Phản ứng thay vì sáng tạo",
    "Sao chép thay vì tiên phong",
    "Đuổi theo",
    "Tụt hậu",
  ];
  const nodes = [
    { label: "Hạnh phúc", pos: "top" as const },
    { label: "Quay lại", pos: "right" as const },
    { label: "Doanh thu ↑", pos: "bottom" as const },
    { label: "Phục vụ tốt", pos: "left" as const },
  ];
  const posClass: Record<string, string> = {
    top: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
    right: "right-0 top-1/2 -translate-y-1/2 translate-x-1/2",
    bottom: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
    left: "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2",
  };

  return (
    <div ref={ref} className="viz-container">
      <div className="viz-title">VÒNG XOÁY // ÁM ẢNH KHÁCH HÀNG</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 my-4 items-stretch">
        {/* Competitor — downward spiral */}
        <div className="relative rounded-xl bg-black/40 border border-[var(--color-gold-dark)]/25 p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[var(--color-gold-dark)] text-lg leading-none">↘</span>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--color-gold-dark)] font-semibold">
              Tập trung · Đối thủ
            </span>
          </div>
          <div className="space-y-2.5">
            {downStages.map((s, i) => (
              <div
                key={i}
                className="viz-flywheel-down flex items-center gap-2.5 text-[12px] font-mono text-[var(--color-foreground)]/55"
                style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
              >
                <span className="text-[9px] text-[var(--color-gold-dark)]">▼</span>
                {s}
              </div>
            ))}
          </div>
          <p className="mt-4 text-[10px] font-mono text-[var(--color-muted-foreground)]">
            Vòng xoáy đi xuống
          </p>
        </div>

        {/* Customer — upward flywheel (circular) */}
        <div className="relative rounded-xl bg-[var(--color-jade)]/[0.06] border border-[var(--color-jade)]/30 p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[var(--color-jade)] text-lg leading-none">↗</span>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--color-jade)] font-semibold">
              Tập trung · Khách hàng
            </span>
          </div>
          <div className="relative mx-auto my-3 w-[160px] h-[160px] sm:w-[180px] sm:h-[180px]">
            {/* Spinning dashed orbit */}
            <div
              className="absolute inset-2 rounded-full border border-dashed border-[var(--color-jade)]/30"
              style={
                {
                  animation: "flywheelSpin 16s linear infinite",
                  boxShadow: "0 0 24px rgba(0, 210, 150, 0.08)",
                } as React.CSSProperties
              }
            />
            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center text-center pointer-events-none">
              <div>
                <div className="font-mono text-[8px] text-[var(--color-jade-glow)] tracking-[0.15em] uppercase">
                  Flywheel
                </div>
                <div className="font-mono text-[12px] text-[var(--color-jade)] font-bold mt-0.5">
                  ĐI LÊN ↑
                </div>
              </div>
            </div>
            {/* Nodes on the orbit */}
            <div className="absolute inset-2">
              {nodes.map((node, i) => (
                <div
                  key={i}
                  className={`viz-flywheel-node absolute ${posClass[node.pos]}`}
                  style={{ transitionDelay: `${0.15 + i * 0.12}s` }}
                >
                  <span className="block whitespace-nowrap text-center font-mono text-[9px] sm:text-[10px] leading-tight text-[var(--color-jade-glow)] bg-black/70 border border-[var(--color-jade)]/40 rounded-md px-2 py-1">
                    {node.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-3 text-[10px] font-mono text-[var(--color-jade-glow)]">
            Vòng xoáy đi lên · hạnh phúc → quay lại → doanh thu → phục vụ tốt hơn
          </p>
        </div>
      </div>
      <p className="text-[11px] font-mono text-[var(--color-muted-foreground)]">
        Cùng một câu hỏi, hai hướng trả lời — và hai kết cục hoàn toàn khác nhau.
      </p>
    </div>
  );
}

/* ── Book selection: WWW 2300% growth + catalog comparison 3M vs 150K ── */
function BookSelection() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && el.classList.add("viz-in")),
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="viz-container">
      <div className="viz-title">LỰA CHỌN // TẠI SAO LÀ SÁCH</div>

      {/* WWW growth highlight */}
      <div className="my-4 flex items-center justify-center">
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[var(--color-jade)]/[0.08] border border-[var(--color-jade)]/30">
          <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-[var(--color-jade-glow)]">
            World Wide Web
          </span>
          <span className="font-mono text-[10px] text-[var(--color-muted-foreground)]">·</span>
          <span className="font-display font-bold text-lg text-[var(--color-jade)]">+2.300%</span>
          <span className="font-mono text-[10px] text-[var(--color-jade-glow)]/70">
            /năm · 1994
          </span>
        </div>
      </div>

      {/* Catalog comparison bars */}
      <div className="space-y-4 my-3">
        <div>
          <div className="flex justify-between text-[11px] font-mono mb-1.5">
            <span className="text-[var(--color-foreground)]/65">Hiệu sách lớn nhất</span>
            <span className="text-[var(--color-gold)]/70">150.000 đầu sách</span>
          </div>
          <div className="h-3 rounded-full bg-black/60 border border-[var(--color-gold)]/20 overflow-hidden">
            <div
              className="viz-bar h-full bg-gradient-to-r from-[var(--color-gold-dark)] to-[var(--color-gold)]/70"
              style={{ ["--w" as string]: "5%" } as React.CSSProperties}
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[11px] font-mono mb-1.5">
            <span className="text-[var(--color-gold-light)]">Amazon · sách toàn cầu</span>
            <span className="text-[var(--color-jade)]">3.000.000 đầu sách</span>
          </div>
          <div className="h-3 rounded-full bg-black/60 border border-[var(--color-gold)]/30 overflow-hidden">
            <div
              className="viz-bar h-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-jade)]"
              style={{ ["--w" as string]: "100%", transitionDelay: "0.2s" } as React.CSSProperties}
            />
          </div>
        </div>
      </div>

      {/* 20× advantage callout */}
      <div className="my-3 flex items-center justify-center gap-2">
        <span className="font-mono text-[11px] text-[var(--color-muted-foreground)]">Lợi thế</span>
        <span className="font-display font-bold text-2xl text-[var(--color-jade)] viz-scale">
          20×
        </span>
        <span className="font-mono text-[11px] text-[var(--color-muted-foreground)]">
          không ai sánh kịp
        </span>
      </div>

      <p className="text-[11px] font-mono text-[var(--color-muted-foreground)]">
        Không có danh mục nào có nhiều lựa chọn hơn — nên sách là cánh cửa đầu tiên.
      </p>
    </div>
  );
}

/* ── Product expansion path: from books to everything ── */
function ExpansionPath() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && el.classList.add("viz-in")),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const stages = [
    { label: "Sách", year: "1994", tone: "start" },
    { label: "Âm nhạc", year: "1998", tone: "mid" },
    { label: "Video/DVD", year: "1999", tone: "mid" },
    { label: "Điện tử", year: "2000", tone: "mid" },
    { label: "Đồ chơi", year: "2002", tone: "mid" },
    { label: "Mọi thứ", year: "→", tone: "end" },
  ];

  return (
    <div ref={ref} className="viz-container">
      <div className="viz-title">MỞ RỘNG // TỪ SÁCH ĐẾN MỌI THỨ</div>
      <div className="my-4 flex flex-wrap items-center justify-center gap-x-1 gap-y-3">
        {stages.map((s, i) => (
          <div
            key={i}
            className="viz-expansion-node flex items-center gap-1"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div
              className={`flex flex-col items-center px-3 py-2 rounded-lg border ${
                s.tone === "end"
                  ? "bg-[var(--color-jade)]/[0.1] border-[var(--color-jade)]/40"
                  : s.tone === "start"
                    ? "bg-[var(--color-gold)]/[0.1] border-[var(--color-gold)]/40"
                    : "bg-black/40 border-[var(--color-gold)]/20"
              }`}
            >
              <span
                className={`font-mono text-[9px] tracking-wider ${
                  s.tone === "end" ? "text-[var(--color-jade-glow)]" : "text-[var(--color-gold)]/70"
                }`}
              >
                {s.year}
              </span>
              <span
                className={`font-display font-semibold text-sm ${
                  s.tone === "end" ? "text-[var(--color-jade)]" : "text-[var(--color-gold-light)]"
                }`}
              >
                {s.label}
              </span>
            </div>
            {i < stages.length - 1 && (
              <span className="text-[var(--color-gold)]/30 text-base leading-none">→</span>
            )}
          </div>
        ))}
      </div>
      <p className="text-[11px] font-mono text-[var(--color-muted-foreground)]">
        Tầm nhìn không được lên kế hoạch từ đầu — nó được phát hiện trên đường đi.
      </p>
    </div>
  );
}

/* ── WaPo transform: trước vs sau khi Jeff tiếp quản (2013) ── */
function WapaTransform() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && el.classList.add("viz-in")),
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const before = [
    { label: "Độc giả", val: "ít", w: 22, tone: "gold" },
    { label: "Doanh thu/độc giả", val: "cao", w: 88, tone: "gold" },
    { label: "Phạm vi", val: "địa phương", w: 30, tone: "gold" },
    { label: "Lợi nhuận", val: "lỗ", w: 12, tone: "gold-dark" },
  ];
  const after = [
    { label: "Độc giả", val: "hàng triệu", w: 96, tone: "jade" },
    { label: "Doanh thu/độc giả", val: "thấp", w: 24, tone: "jade" },
    { label: "Phạm vi", val: "toàn cầu", w: 100, tone: "jade" },
    { label: "Lợi nhuận", val: "có lại", w: 78, tone: "jade-glow" },
  ];

  const toneBar: Record<string, string> = {
    gold: "from-[var(--color-gold-dark)] to-[var(--color-gold)]/70",
    "gold-dark": "from-[var(--color-gold-dark)]/60 to-[var(--color-gold-dark)]/40",
    jade: "from-[var(--color-jade)] to-[var(--color-jade-glow)]",
    "jade-glow": "from-[var(--color-jade-glow)] to-[var(--color-jade)]",
  };
  const toneText: Record<string, string> = {
    gold: "text-[var(--color-gold)]/70",
    "gold-dark": "text-[var(--color-gold-dark)]",
    jade: "text-[var(--color-jade)]",
    "jade-glow": "text-[var(--color-jade-glow)]",
  };

  return (
    <div ref={ref} className="viz-container">
      <div className="viz-title">WASHINGTON POST // TRƯỚC & SAU 2013</div>
      <div className="grid grid-cols-2 gap-3 my-3">
        <div className="rounded-lg bg-black/40 border border-[var(--color-gold)]/20 p-3">
          <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-[var(--color-gold-dark)] mb-2.5 font-semibold">
            Trước Jeff
          </div>
          <div className="space-y-2.5">
            {before.map((b, i) => (
              <div key={i}>
                <div className="flex justify-between text-[9px] font-mono mb-0.5">
                  <span className="text-[var(--color-foreground)]/55">{b.label}</span>
                  <span className={toneText[b.tone]}>{b.val}</span>
                </div>
                <div className="h-2 rounded-full bg-black/60 border border-[var(--color-gold)]/15 overflow-hidden">
                  <div
                    className={`viz-bar h-full bg-gradient-to-r ${toneBar[b.tone]}`}
                    style={
                      {
                        ["--w" as string]: `${b.w}%`,
                        transitionDelay: `${0.1 + i * 0.12}s`,
                      } as React.CSSProperties
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-[var(--color-jade)]/[0.06] border border-[var(--color-jade)]/30 p-3">
          <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-[var(--color-jade)] mb-2.5 font-semibold">
            Sau Jeff
          </div>
          <div className="space-y-2.5">
            {after.map((a, i) => (
              <div key={i}>
                <div className="flex justify-between text-[9px] font-mono mb-0.5">
                  <span className="text-[var(--color-foreground)]/55">{a.label}</span>
                  <span className={toneText[a.tone]}>{a.val}</span>
                </div>
                <div className="h-2 rounded-full bg-black/60 border border-[var(--color-jade)]/25 overflow-hidden">
                  <div
                    className={`viz-bar h-full bg-gradient-to-r ${toneBar[a.tone]}`}
                    style={
                      {
                        ["--w" as string]: `${a.w}%`,
                        transitionDelay: `${0.3 + i * 0.12}s`,
                      } as React.CSSProperties
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-[11px] font-mono text-[var(--color-muted-foreground)]">
        Kiếm ít tiền trên hàng triệu độc giả toàn cầu — món quà của Internet: phân phối miễn phí.
      </p>
    </div>
  );
}

/* ── M&A funnel: 3 câu hỏi lọc missionary vs mercenary ── */
function MaFunnel() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && el.classList.add("viz-in")),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const questions = [
    { n: "01", q: "Thiết chế quan trọng?", sub: "không → loại" },
    { n: "02", q: "Làm to hơn được không?", sub: "không → loại" },
    { n: "03", q: "Missionary hay mercenary?", sub: "mercenary → loại" },
  ];

  return (
    <div ref={ref} className="viz-container">
      <div className="viz-title">MUA SÁP NHẬP // BỘ LỌC 3 CÂU HỎI</div>
      <div className="my-4 flex flex-col items-center gap-1.5">
        {questions.map((q, i) => (
          <div
            key={i}
            className="viz-funnel-step relative flex w-full items-center"
            style={{ transitionDelay: `${i * 0.18}s` }}
          >
            <div
              className="mx-auto flex items-center gap-3 rounded-lg border bg-black/40 px-4 py-2.5"
              style={{
                width: `${100 - i * 14}%`,
                borderColor:
                  i === 2
                    ? "color-mix(in oklab, var(--jade) 45%, transparent)"
                    : "color-mix(in oklab, var(--gold) 25%, transparent)",
              }}
            >
              <span
                className={`font-mono text-[10px] font-bold ${
                  i === 2 ? "text-[var(--color-jade-glow)]" : "text-[var(--color-gold)]/70"
                }`}
              >
                {q.n}
              </span>
              <span className="font-mono text-[11px] sm:text-[12px] text-[var(--color-foreground)]/85 font-medium">
                {q.q}
              </span>
              <span className="ml-auto font-mono text-[9px] text-[var(--color-gold-dark)]">
                {q.sub}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 mt-2">
        <span className="font-mono text-[9px] text-[var(--color-muted-foreground)]">kết quả</span>
        <span className="font-display font-bold text-lg text-[var(--color-jade)] viz-scale">
          Missionary ✓
        </span>
      </div>
      <p className="text-[11px] font-mono text-[var(--color-muted-foreground)] mt-2">
        Ba câu hỏi loại bỏ hầu hết những thương vụ sai ngay từ đầu.
      </p>
    </div>
  );
}

const VIZ: Record<VizKey, () => React.ReactElement> = {
  amznGrowth: AmznGrowth,
  awsExpansion: AwsExpansion,
  regretFramework: RegretFramework,
  customerFlywheel: CustomerFlywheel,
  bookSelection: BookSelection,
  expansionPath: ExpansionPath,
  wapaTransform: WapaTransform,
  maFunnel: MaFunnel,
};

export function DataViz({ viz }: { viz: VizKey }) {
  const Comp = VIZ[viz];
  return <Comp />;
}
