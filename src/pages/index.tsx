import { Bounds, ScreenQuad } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <main>
      <Canvas>
        <Bounds fit clip margin={1.4} observe damping={6}>
          <ScreenQuad>
            <meshBasicMaterial color="#000000" />
          </ScreenQuad>
        </Bounds>
      </Canvas>
    </main>
  );
}
