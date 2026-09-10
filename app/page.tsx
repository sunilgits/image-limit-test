import Image from 'next/image';

export default function Home() {
  return (
    <Image
      src="/20mb.jpg"
      width={1024}
      height={768}
      quality={75}
      alt="test"
    />
  );
}