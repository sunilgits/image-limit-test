import Image from 'next/image';

export default function Home() {
  return (
    <Image
      src="https://your-image-host.example.com/big-12mb.png"
      width={1024}
      height={768}
      quality={75}
      alt="test"
    />
  );
}