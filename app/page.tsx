import Image from 'next/image';

export default function Home() {
  return (
    <Image
      src="/DTIG-prefab2x2-owlDanielElania-v1.png"
      width={1024}
      height={768}
      quality={75}
      alt="test"
    />
  );
}