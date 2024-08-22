import Anchor from "@/components/ui/Anchor";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Anchor id="about" />
      <div className="lg:min-h-[100svh] pt-10 mb-10 md:pt-24 md:mb-24 relative">
        <div className="w-[80px] h-2 bg-yellow mb-10" />
        <h2 className="text-2xl font-extrabold uppercase mb-2">Who am I?</h2>

        <p>Nemo voluptates veritatis consectetur earum qui non sequi sunt molestiae blanditiis qui iusto minima. Saepe eos debitis beatae quia blanditiis reprehenderit est magnam ut et tempora. Minima veniam numquam ullam animi molestiae consequatur laboriosam est quia in eum dolores.</p>
        <p className="mt-4">Velit ut inventore animi. Sequi ab minus corrupti inventore facere dolore et. Sit adipisci qui rerum deserunt libero et at enim. Ea repellendus debitis aliquid commodi aliquid eligendi hic aliquid optio eaque inventore labore. Aliquam nesciunt ea dolor accusamus illum aut quos nemo in cupiditate quis.</p>
        <p className="mt-4">Deserunt pariatur rerum ex aliquid voluptatem qui. Nam temporibus inventore illo voluptatem eveniet dolores nostrum.</p>

        <Image
          src="/about.jpg"
          alt="Daniel Bernardi"
          width={1200}
          height={673}
          className="rounded mt-6 mb-16 md:mt-6 md:mb-6"
        />
      </div>
    </>
  );
}

export default About;