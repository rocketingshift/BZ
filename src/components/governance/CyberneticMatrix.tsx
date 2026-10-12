import React, { useRef, useState, useMemo, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";
import { CHAPTERS } from "./chapters-data";
import { useIsMobile } from "@/hooks/use-mobile";

// 5 Mắt Xích Năng Lượng trên Bánh Đà Jeff Bezos
// Tương ứng 5 mật mã kết nối tuần hoàn liên tục
const FLYWHEEL_NODES = [
  {
    idx: 0,
    chapterId: "mat-ma-01",
    label: "01. TINH THẦN DAY 1",
    sublabel: "BẢN NĂNG KHỞI TẠO",
    color: "#ffc83b",
    glow: "#f3e5ab",
    geometry: "dodecahedron",
  },
  {
    idx: 1,
    chapterId: "mat-ma-02",
    label: "02. ÁM ẢNH KHÁCH HÀNG",
    sublabel: "TRỌNG TÂM BÁNH ĐÀ",
    color: "#00d296",
    glow: "#5df0c2",
    geometry: "octahedron",
  },
  {
    idx: 2,
    chapterId: "mat-ma-03",
    label: "03. MỞ RỘNG HỆ THỐNG",
    sublabel: "HẠ TẦNG & AWS",
    color: "#ffa726",
    glow: "#ffd54f",
    geometry: "icosahedron",
  },
  {
    idx: 3,
    chapterId: "mat-ma-04",
    label: "04. SỨ MỆNH M&A",
    sublabel: "MISSIONARY > MERCENARY",
    color: "#ffca28",
    glow: "#fff3b0",
    geometry: "octahedron",
  },
  {
    idx: 4,
    chapterId: "mat-ma-05",
    label: "05. KHUNG HỐI TIẾC",
    sublabel: "TẦM NHÌN 80 TUỔI",
    color: "#29b6f6",
    glow: "#81d4fa",
    geometry: "icosahedron",
  },
];

// Lõi Trọng Tâm: Ám Ảnh Khách Hàng (Customer Obsession Core)
function CustomerCore({ isExploded, hovered }: { isExploded: boolean; hovered: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowMeshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.45;
      meshRef.current.rotation.y += delta * 0.65;
    }
    if (glowMeshRef.current) {
      glowMeshRef.current.rotation.y -= delta * 0.3;
      glowMeshRef.current.rotation.z += delta * 0.2;
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2.5) * 0.08;
      glowMeshRef.current.scale.set(pulse, pulse, pulse);
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <group>
      {/* Vành phát quang bao quanh lõi */}
      <group ref={ringRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.3, 0.02, 16, 64]} />
          <meshBasicMaterial color="#ffc83b" transparent opacity={0.4} />
        </mesh>
      </group>

      {/* Lưới năng lượng kim cương đa diện bên ngoài */}
      <mesh ref={glowMeshRef}>
        <octahedronGeometry args={[1.05, 0]} />
        <meshBasicMaterial color="#00d296" wireframe transparent opacity={hovered ? 0.8 : 0.45} />
      </mesh>

      {/* Khối lõi trung tâm ngọc bích phát sáng */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[0.75, 1]} />
        <meshStandardMaterial
          color="#00d296"
          emissive="#00553a"
          emissiveIntensity={hovered ? 1.4 : 0.8}
          roughness={0.15}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
}

// Vòng xuyến Bánh Đà Tăng Trưởng (Amazon Flywheel Rings)
function FlywheelTorusRings({
  isExploded,
  speedMultiplier,
}: {
  isExploded: boolean;
  speedMultiplier: number;
}) {
  const ringOuterRef = useRef<THREE.Mesh>(null);
  const ringInnerRef = useRef<THREE.Mesh>(null);
  const ringCounterRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    const rate = delta * speedMultiplier;
    if (ringOuterRef.current) {
      ringOuterRef.current.rotation.z -= rate * 0.3;
    }
    if (ringInnerRef.current) {
      ringInnerRef.current.rotation.z += rate * 0.45;
    }
    if (ringCounterRef.current) {
      ringCounterRef.current.rotation.z -= rate * 0.2;
      ringCounterRef.current.rotation.x = Math.PI / 2.3;
    }
  });

  const targetRadius = isExploded ? 4.9 : 3.8;

  return (
    <group rotation={[Math.PI / 3.2, 0, 0]}>
      {/* Vành bánh đà chính mang quỹ đạo 5 nút */}
      <mesh ref={ringOuterRef}>
        <torusGeometry args={[targetRadius, 0.035, 16, 100]} />
        <meshStandardMaterial
          color="#ffc83b"
          emissive="#ff9800"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Vành gia tốc đồng tâm thứ hai */}
      <mesh ref={ringInnerRef}>
        <torusGeometry args={[targetRadius * 0.65, 0.02, 16, 80]} />
        <meshBasicMaterial color="#00d296" wireframe transparent opacity={0.35} />
      </mesh>

      {/* Vành nghiêng tạo độ sâu không gian 3D */}
      <mesh ref={ringCounterRef}>
        <torusGeometry args={[targetRadius * 1.15, 0.015, 12, 80]} />
        <meshBasicMaterial color="#f3e5ab" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

// 5 Mắt xích quỹ đạo quay quanh bánh đà
function FlywheelNode({
  node,
  isExploded,
  isHovered,
  isSelected,
  onPointerOver,
  onPointerOut,
  onClick,
  currentAngle,
}: {
  node: (typeof FLYWHEEL_NODES)[0];
  isExploded: boolean;
  isHovered: boolean;
  isSelected: boolean;
  onPointerOver: () => void;
  onPointerOut: () => void;
  onClick: () => void;
  currentAngle: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const haloRef = useRef<THREE.Mesh>(null);

  const radius = isExploded ? 5.0 : 3.8;

  useFrame((state, delta) => {
    // Vị trí node trên mặt phẳng nghiêng của Bánh Đà
    const angle = currentAngle;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius * Math.cos(Math.PI / 3.2);
    const z = Math.sin(angle) * radius * Math.sin(Math.PI / 3.2);

    if (groupRef.current) {
      groupRef.current.position.lerp(new THREE.Vector3(x, y, z), delta * 6);

      const targetScale = isSelected ? 1.45 : isHovered ? 1.3 : 1.0;
      groupRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        delta * 8,
      );
    }

    if (meshRef.current) {
      meshRef.current.rotation.x += delta * (isHovered ? 2.0 : 0.8);
      meshRef.current.rotation.y += delta * (isHovered ? 2.5 : 1.0);
    }
    if (haloRef.current) {
      haloRef.current.rotation.z -= delta * 1.2;
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={(e) => {
        e.stopPropagation();
        onPointerOver();
      }}
      onPointerOut={onPointerOut}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {/* Vòng hào quang năng lượng */}
      <mesh ref={haloRef}>
        <ringGeometry args={[0.55, 0.68, 32]} />
        <meshBasicMaterial
          color={node.glow}
          side={THREE.DoubleSide}
          transparent
          opacity={isHovered || isSelected ? 0.85 : 0.3}
        />
      </mesh>

      {/* Lưới dây bao bọc đa diện */}
      <mesh>
        <octahedronGeometry args={[0.5, 0]} />
        <meshBasicMaterial
          color={node.color}
          wireframe
          transparent
          opacity={isHovered ? 0.9 : 0.4}
        />
      </mesh>

      {/* Khối tinh thể mắt xích chính */}
      <mesh ref={meshRef}>
        {node.geometry === "dodecahedron" && <dodecahedronGeometry args={[0.36]} />}
        {node.geometry === "octahedron" && <octahedronGeometry args={[0.38]} />}
        {node.geometry === "icosahedron" && <icosahedronGeometry args={[0.36]} />}
        <meshStandardMaterial
          color={node.color}
          emissive={node.color}
          emissiveIntensity={isSelected ? 1.4 : isHovered ? 1.0 : 0.45}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
}

// Các tia sáng năng lượng kết nối từ Lõi Khách Hàng tới 5 Mắt Xích Bánh Đà
function EnergyConnectors({
  angles,
  isExploded,
  hoveredIdx,
}: {
  angles: number[];
  isExploded: boolean;
  hoveredIdx: number | null;
}) {
  const radius = isExploded ? 5.0 : 3.8;

  // Điểm tọa độ hiện tại của 5 node
  const nodePositions = useMemo(() => {
    return angles.map(
      (a) =>
        [
          Math.cos(a) * radius,
          Math.sin(a) * radius * Math.cos(Math.PI / 3.2),
          Math.sin(a) * radius * Math.sin(Math.PI / 3.2),
        ] as [number, number, number],
    );
  }, [angles, radius]);

  // Vòng khép kín nối liền 5 mắt xích (Bánh đà tuần hoàn)
  const perimeterPoints = useMemo(() => {
    if (nodePositions.length === 0) return [];
    return [...nodePositions, nodePositions[0]];
  }, [nodePositions]);

  return (
    <group>
      {/* Vòng nối tuần hoàn giữa các mắt xích */}
      {perimeterPoints.length > 0 && (
        <Line points={perimeterPoints} color="#ffc83b" opacity={0.35} transparent lineWidth={1.2} />
      )}

      {/* Tia sáng từ Lõi Trung Tâm toả ra từng mắt xích */}
      {nodePositions.map((pos, i) => {
        const isHovered = hoveredIdx === i;
        return (
          <Line
            key={`connector-${i}`}
            points={[[0, 0, 0], pos]}
            color={isHovered ? "#00d296" : "#f3e5ab"}
            opacity={isHovered ? 0.9 : 0.22}
            transparent
            lineWidth={isHovered ? 2.5 : 1}
          />
        );
      })}
    </group>
  );
}

// Bụi hạt dữ liệu quay chậm
function FlywheelParticles({ count = 280 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const gold = new THREE.Color("#ffc83b");
    const jade = new THREE.Color("#00d296");
    const white = new THREE.Color("#f3e5ab");

    for (let i = 0; i < count; i++) {
      const r = 1.5 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * 1.8;

      pos[i * 3] = r * Math.cos(theta) * Math.cos(phi);
      pos[i * 3 + 1] = r * Math.sin(phi);
      pos[i * 3 + 2] = r * Math.sin(theta) * Math.cos(phi);

      const pick = Math.random();
      const c = pick > 0.6 ? gold : pick > 0.25 ? jade : white;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.08;
      pointsRef.current.rotation.x += delta * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Toàn bộ cảnh 3D Bánh Đà Tăng Trưởng
function FlywheelScene({
  isExploded,
  hoveredIdx,
  setHoveredIdx,
  selectedIdx,
  setSelectedIdx,
  onSelectNode,
  speedMultiplier,
}: {
  isExploded: boolean;
  hoveredIdx: number | null;
  setHoveredIdx: (idx: number | null) => void;
  selectedIdx: number | null;
  setSelectedIdx: (idx: number | null) => void;
  onSelectNode: (idx: number) => void;
  speedMultiplier: number;
}) {
  const rootGroupRef = useRef<THREE.Group>(null);
  const baseAngleRef = useRef(0);
  const [currentAngles, setCurrentAngles] = useState<number[]>(() =>
    FLYWHEEL_NODES.map((_, i) => (i * Math.PI * 2) / 5),
  );

  useFrame((state, delta) => {
    // Quay Bánh Đà gia tốc
    const step = delta * 0.28 * speedMultiplier;
    baseAngleRef.current += step;

    const newAngles = FLYWHEEL_NODES.map((_, i) => baseAngleRef.current + (i * Math.PI * 2) / 5);
    setCurrentAngles(newAngles);

    // Di chuyển nhẹ nhàng theo con trỏ chuột
    if (rootGroupRef.current) {
      const targetRotY = (state.pointer.x * Math.PI) / 9;
      const targetRotX = (-state.pointer.y * Math.PI) / 12;
      rootGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        rootGroupRef.current.rotation.y,
        targetRotY,
        delta * 3,
      );
      rootGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        rootGroupRef.current.rotation.x,
        targetRotX,
        delta * 3,
      );
    }
  });

  return (
    <group ref={rootGroupRef}>
      {/* Ánh sáng đa chiều điện ảnh */}
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 0, 0]} intensity={3.0} color="#00d296" distance={8} />
      <pointLight position={[6, 8, 7]} intensity={2.2} color="#ffc83b" />
      <pointLight position={[-6, -6, -4]} intensity={1.5} color="#29b6f6" />
      <directionalLight position={[0, 10, 5]} intensity={0.8} color="#ffffff" />

      {/* Lõi Ám Ảnh Khách Hàng */}
      <CustomerCore isExploded={isExploded} hovered={hoveredIdx !== null} />

      {/* Các vành Bánh Đà gia tốc */}
      <FlywheelTorusRings isExploded={isExploded} speedMultiplier={speedMultiplier} />

      {/* Dây nối năng lượng giữa các mắt xích */}
      <EnergyConnectors angles={currentAngles} isExploded={isExploded} hoveredIdx={hoveredIdx} />

      {/* 5 Mắt Xích Mật Mã */}
      {FLYWHEEL_NODES.map((node, i) => (
        <FlywheelNode
          key={node.idx}
          node={node}
          isExploded={isExploded}
          isHovered={hoveredIdx === i}
          isSelected={selectedIdx === i}
          onPointerOver={() => setHoveredIdx(i)}
          onPointerOut={() => setHoveredIdx(null)}
          onClick={() => {
            setSelectedIdx(i);
            onSelectNode(i);
          }}
          currentAngle={currentAngles[i] ?? (i * Math.PI * 2) / 5}
        />
      ))}

      {/* Hạt bụi không gian dữ liệu */}
      <FlywheelParticles />
    </group>
  );
}

// Component Container chính
export function CyberneticMatrix() {
  const isMobile = useIsMobile();
  const [isExploded, setIsExploded] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(true);
  const [isAccelerating, setIsAccelerating] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasWrapRef = useRef<HTMLDivElement>(null);

  // Quan sát IntersectionObserver: dừng render khi ngoài viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) setIsInView(entry.isIntersecting);
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSelectNode = (idx: number) => {
    setSelectedIdx(idx);
    const chapter = CHAPTERS[idx];
    if (chapter) {
      const el = document.getElementById(chapter.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const activeNode =
    hoveredIdx !== null
      ? FLYWHEEL_NODES[hoveredIdx]
      : selectedIdx !== null
        ? FLYWHEEL_NODES[selectedIdx]
        : null;

  return (
    <div
      ref={containerRef}
      className="relative w-full py-16 px-4 md:px-8 bg-gradient-to-b from-[#050507] via-black to-[#050507] border-y border-[var(--color-gold)]/15 overflow-hidden"
    >
      {/* Tiêu đề & Giới thiệu Ma Trận Mật Mã */}
      <div className="max-w-5xl mx-auto text-center mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/5 text-xs font-mono text-[var(--color-gold-light)] mb-4 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00d296] animate-pulse" />
          MÔ HÌNH BÁNH ĐÀ GIA TỐC // THE AMAZON FLYWHEEL 3D
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[var(--color-gold-light)] tracking-wide mb-3">
          Ma Trận Bánh Đà Tăng Trưởng
        </h3>
        <p className="text-sm md:text-base text-[#c8bfb0] max-w-2xl mx-auto leading-relaxed">
          Tâm điểm là <span className="text-[#00d296] font-semibold">Ám Ảnh Khách Hàng</span>. 5 mật
          mã vận hành như 5 mắt xích năng lượng truyền động cho nhau — mỗi vòng quay gia tốc tạo nên
          lực đẩy vô hạn cho toàn bộ đế chế.
        </p>

        {/* Thanh công cụ điều khiển bánh đà */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          <button
            type="button"
            onClick={() => setIsExploded(!isExploded)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all border ${
              isExploded
                ? "bg-[var(--color-gold)] text-black border-[var(--color-gold)] font-bold shadow-[0_0_15px_rgba(255,200,59,0.35)]"
                : "bg-black/60 text-[var(--color-gold-light)] border-[var(--color-gold)]/40 hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10"
            }`}
          >
            {isExploded ? "⊕ THU HẸP QUỸ ĐẠO" : "⊙ MỞ RỘNG BIÊN ĐỘ"}
          </button>

          <button
            type="button"
            onMouseDown={() => setIsAccelerating(true)}
            onMouseUp={() => setIsAccelerating(false)}
            onTouchStart={() => setIsAccelerating(true)}
            onTouchEnd={() => setIsAccelerating(false)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all border ${
              isAccelerating
                ? "bg-[#00d296] text-black border-[#00d296] font-bold shadow-[0_0_20px_rgba(0,210,150,0.5)]"
                : "bg-black/60 text-[#00d296] border-[#00d296]/40 hover:border-[#00d296] hover:bg-[#00d296]/10"
            }`}
          >
            ⚡ {isAccelerating ? "ĐANG GIA TỐC VÒNG QUAY..." : "NHẤN GIỮ ĐỂ GIA TỐC"}
          </button>
        </div>
      </div>

      {/* Khung hiển thị Canvas 3D */}
      <div
        ref={canvasWrapRef}
        className="relative w-full max-w-4xl mx-auto h-[380px] sm:h-[460px] md:h-[540px] rounded-2xl border border-[var(--color-gold)]/20 bg-gradient-to-b from-[#090a0f] via-black to-[#06070a] shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden cursor-grab active:cursor-grabbing"
      >
        {/* HUD thông tin góc trái */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none font-mono text-[11px] text-[var(--color-gold)]/70 space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00d296] animate-ping" />
            <span>CORE: CUSTOMER_OBSESSION</span>
          </div>
          <div className="text-[10px] text-[#8e8574]">
            CYCLE: INFINITE // ACCEL: {isAccelerating ? "3.2X" : "1.0X"}
          </div>
        </div>

        {/* HUD thông báo mắt xích đang chọn / hover */}
        {activeNode && (
          <div className="absolute top-4 right-4 z-10 pointer-events-none bg-black/80 backdrop-blur-md px-3 py-2 rounded-lg border border-[var(--color-gold)]/40 text-right animate-in fade-in duration-200">
            <div className="text-xs font-mono font-bold text-[var(--color-gold-light)]">
              {activeNode.label}
            </div>
            <div className="text-[10px] font-mono text-[#00d296]">{activeNode.sublabel}</div>
          </div>
        )}

        {/* Canvas Three.js */}
        {isInView && (
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center font-mono text-xs text-[var(--color-gold)]/50">
                ĐANG KHỞI TẠO BÁNH ĐÀ 3D...
              </div>
            }
          >
            <Canvas
              camera={{
                position: [0, 2.5, 9.5],
                fov: isMobile ? 54 : 45,
              }}
              dpr={isMobile ? [1, 1.5] : [1, 2]}
            >
              <FlywheelScene
                isExploded={isExploded}
                hoveredIdx={hoveredIdx}
                setHoveredIdx={setHoveredIdx}
                selectedIdx={selectedIdx}
                setSelectedIdx={setSelectedIdx}
                onSelectNode={handleSelectNode}
                speedMultiplier={isAccelerating ? 3.2 : 1.0}
              />
            </Canvas>
          </Suspense>
        )}

        {/* Gợi ý tương tác góc dưới */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none font-mono text-[10px] tracking-widest text-[#8e8574] text-center uppercase whitespace-nowrap bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
          {isMobile
            ? "Chạm vào các mắt xích để mở mật mã"
            : "Rê chuột xoay góc nhìn · Nhấp mắt xích để cuộn tới mật mã"}
        </div>
      </div>

      {/* Dãy nút bấm 5 Mật Mã dạng mắt xích dưới chân Canvas */}
      <div className="max-w-4xl mx-auto mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 relative z-10">
        {FLYWHEEL_NODES.map((node, i) => {
          const isSelected = selectedIdx === i;
          const isHovered = hoveredIdx === i;
          return (
            <button
              key={node.idx}
              type="button"
              onClick={() => handleSelectNode(i)}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`p-2.5 rounded-xl border text-left transition-all ${
                isSelected || isHovered
                  ? "bg-[var(--color-gold)]/15 border-[var(--color-gold)] text-[var(--color-gold-light)] shadow-[0_0_15px_rgba(255,200,59,0.2)]"
                  : "bg-black/50 border-[var(--color-gold)]/20 text-[#a89f91] hover:border-[var(--color-gold)]/50 hover:bg-black/80"
              }`}
            >
              <div className="text-[10px] font-mono font-bold text-[var(--color-gold)] mb-0.5">
                MẬT MÃ 0{i + 1}
              </div>
              <div className="text-xs font-medium leading-snug line-clamp-1">
                {CHAPTERS[i]?.subtitle}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
